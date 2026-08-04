"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Check, Loader2, AlertCircle, Phone } from "lucide-react"
import { SERVICES } from "@/lib/services"
import { site, telHref } from "@/lib/site"

/**
 * Formulaire de devis en parcours guidé — une question par écran.
 *
 * Choix d'ergonomie : une seule question à la fois augmente nettement le taux
 * de complétion par rapport à un formulaire long, parce que chaque écran
 * paraît trivial à remplir. Le raccourci clavier (A, B, C… puis Entrée) permet
 * de traverser le parcours sans souris.
 *
 * Accessibilité : chaque écran annonce son changement via aria-live, le focus
 * est déplacé sur la question à chaque étape, et tout reste utilisable au
 * clavier seul. Les champs conservent leurs valeurs quand on revient en arrière.
 */

type ChoiceOption = { value: string; label: string; hint?: string }

/** `when` permet d'afficher une étape seulement si elle a du sens pour la réponse donnée. */
type Base = { id: string; question: string; help?: string; when?: (a: Record<string, string>) => boolean }

type Step =
  | (Base & { kind: "choice"; options: ChoiceOption[]; required: true })
  | (Base & { kind: "text"; fields: Field[] })

type Field = {
  name: string
  label: string
  type: string
  autoComplete?: string
  required?: boolean
  validate?: (v: string) => string | null
}

const STEPS: Step[] = [
  {
    id: "service",
    kind: "choice",
    required: true,
    question: "Quel est votre projet ?",
    help: "Si vous hésitez entre plusieurs, choisissez le plus proche — nous préciserons ensemble lors de la visite.",
    options: [
      ...SERVICES.map((s) => ({ value: s.title, label: s.title, hint: s.tagline })),
      { value: "Je ne sais pas encore", label: "Je ne sais pas encore", hint: "Nous vous aiderons à cadrer le besoin" },
    ],
  },
  {
    id: "toiture",
    kind: "choice",
    required: true,
    // Sans objet pour un bardage, qui ne touche pas à la toiture.
    // Tant que le service n'est pas choisi, l'étape reste comptée : le total
    // ne peut donc que diminuer en cours de route, jamais grandir sous les
    // yeux du visiteur — un parcours qui s'allonge décourage, l'inverse non.
    when: (a) => a.service !== "Bardage",
    question: "Quel est votre type de toiture ?",
    help: "La forme de la toiture détermine l'accès, l'échafaudage et les points sensibles à vérifier.",
    options: [
      { value: "2 versants", label: "2 versants", hint: "Deux pans qui se rejoignent au faîte" },
      { value: "3 versants", label: "3 versants", hint: "Deux pans et une croupe" },
      { value: "4 versants", label: "4 versants", hint: "Une croupe à chaque extrémité" },
      { value: "Plate-forme", label: "Plate-forme", hint: "Toiture plate ou à très faible pente" },
      { value: "Industrielle", label: "Industrielle", hint: "Hangar, atelier, bâtiment professionnel" },
    ],
  },
  {
    id: "couverture",
    kind: "choice",
    required: true,
    // Sans objet pour un bardage, qui ne concerne pas la couverture.
    when: (a) => a.service !== "Bardage",
    question: "Quel est le type de couverture actuelle ?",
    help: "Si vous n'en êtes pas certain, choisissez la dernière option — nous l'identifierons sur place.",
    options: [
      { value: "Ardoises", label: "Ardoises", hint: "Naturelles ou artificielles" },
      { value: "Tuiles", label: "Tuiles", hint: "Terre cuite ou béton" },
      { value: "Roofing", label: "Roofing", hint: "Membrane bitumineuse, courante en plate-forme" },
      { value: "Zinc", label: "Zinc" },
      { value: "Tôles", label: "Tôles", hint: "Bacs acier, plaques ondulées" },
      { value: "Je ne sais pas", label: "Je ne sais pas", hint: "Nous l'identifierons lors de la visite" },
    ],
  },

  // ── Volet photovoltaïque ────────────────────────────────────────────
  // Ces cinq étapes ne s'affichent qu'après avoir choisi « Photovoltaïque »,
  // ce qui allonge le parcours en cours de route — l'inverse de la règle
  // suivie plus haut. C'est assumé ici : le visiteur vient de sélectionner
  // lui-même une prestation technique, et ces réponses conditionnent le
  // dimensionnement. Les faire apparaître pour tout le monde afficherait
  // « sur 12 » dès le premier écran, ce qui découragerait bien davantage.
  {
    id: "orientation",
    kind: "choice",
    required: true,
    when: (a) => a.service === "Photovoltaïque",
    question: "Vers où est orientée la toiture ?",
    help: "Le sud est optimal, mais est-ouest reste très pertinent : la production s'étale mieux sur la journée, ce qui favorise l'autoconsommation.",
    options: [
      { value: "Sud", label: "Sud", hint: "Orientation la plus productive" },
      { value: "Sud-est ou sud-ouest", label: "Sud-est ou sud-ouest" },
      { value: "Est-ouest", label: "Est-ouest", hint: "Deux pans, production étalée sur la journée" },
      { value: "Nord", label: "Nord", hint: "Nous vous dirons franchement ce que cela donne" },
      { value: "Je ne sais pas", label: "Je ne sais pas", hint: "Nous le relèverons sur place" },
    ],
  },
  {
    id: "ombrage",
    kind: "choice",
    required: true,
    when: (a) => a.service === "Photovoltaïque",
    question: "La toiture est-elle ombragée ?",
    help: "Une ombre portée, même partielle, pèse sur la production. Mieux vaut la connaître avant de dimensionner.",
    options: [
      { value: "Aucune ombre", label: "Aucune ombre", hint: "Dégagée toute la journée" },
      { value: "Cheminée ou lucarne", label: "Cheminée ou lucarne", hint: "Ombre portée sur une partie du pan" },
      { value: "Arbres", label: "Arbres" },
      { value: "Bâtiment voisin", label: "Bâtiment voisin" },
      { value: "Je ne sais pas", label: "Je ne sais pas", hint: "Nous l'évaluerons lors de la visite" },
    ],
  },
  {
    id: "consommation",
    kind: "choice",
    required: true,
    when: (a) => a.service === "Photovoltaïque",
    question: "Quelle est votre consommation annuelle d'électricité ?",
    help: "Elle figure sur votre décompte annuel. C'est elle qui détermine la puissance à installer — surdimensionner pour injecter n'est plus la bonne stratégie.",
    options: [
      { value: "Moins de 2 500 kWh", label: "Moins de 2 500 kWh" },
      { value: "2 500 à 4 000 kWh", label: "2 500 à 4 000 kWh", hint: "Consommation d'un ménage courant" },
      { value: "4 000 à 6 000 kWh", label: "4 000 à 6 000 kWh" },
      { value: "Plus de 6 000 kWh", label: "Plus de 6 000 kWh", hint: "Chauffage électrique, pompe à chaleur ou véhicule" },
      { value: "Je ne sais pas", label: "Je ne sais pas", hint: "Nous la reprendrons sur votre décompte" },
    ],
  },
  {
    id: "equipements",
    kind: "choice",
    required: true,
    when: (a) => a.service === "Photovoltaïque",
    question: "Avez-vous l'un de ces équipements ?",
    help: "Ils consomment beaucoup et souvent en journée : c'est précisément ce qui rend une installation rentable.",
    options: [
      { value: "Pompe à chaleur", label: "Pompe à chaleur" },
      { value: "Véhicule électrique", label: "Véhicule électrique" },
      { value: "Les deux", label: "Pompe à chaleur et véhicule électrique" },
      { value: "Chauffe-eau électrique", label: "Chauffe-eau électrique ou boiler" },
      { value: "Aucun", label: "Aucun de ceux-ci" },
    ],
  },
  {
    id: "batterie",
    kind: "choice",
    required: true,
    when: (a) => a.service === "Photovoltaïque",
    question: "Souhaitez-vous une batterie de stockage ?",
    help: "Elle augmente l'autoconsommation mais représente un investissement conséquent. Nous ferons le calcul avec vos chiffres et nous vous dirons si le compte n'y est pas.",
    options: [
      { value: "Oui", label: "Oui", hint: "Le projet en prévoit une" },
      { value: "Non", label: "Non" },
      { value: "À étudier", label: "À étudier", hint: "Chiffrez-moi les deux options" },
    ],
  },

  {
    id: "batiment",
    kind: "choice",
    required: true,
    question: "De quel type de bâtiment s'agit-il ?",
    help: "Cela nous indique déjà comment le chantier devra être organisé.",
    options: [
      { value: "Maison quatre façades", label: "Maison quatre façades", hint: "Accès dégagé sur tout le pourtour" },
      { value: "Maison mitoyenne", label: "Maison mitoyenne", hint: "Un ou deux murs partagés" },
      { value: "Immeuble à appartements", label: "Immeuble à appartements" },
      { value: "Bâtiment professionnel", label: "Bâtiment professionnel", hint: "Commerce, atelier, agricole" },
    ],
  },
  {
    id: "adresse",
    kind: "text",
    question: "Où se trouve le bâtiment ?",
    help: "L'adresse nous permet de préparer la visite et de vérifier les éventuelles contraintes d'urbanisme propres à votre rue.",
    fields: [
      {
        name: "adresse",
        label: "Rue et numéro",
        type: "text",
        autoComplete: "street-address",
        required: true,
        validate: (v) => (v.trim().length < 4 ? "Merci d'indiquer la rue et le numéro." : null),
      },
      {
        name: "commune",
        label: "Code postal et commune",
        type: "text",
        autoComplete: "address-level2",
        required: true,
        validate: (v) => (v.trim().length < 3 ? "Merci d'indiquer la commune." : null),
      },
    ],
  },
  {
    id: "urgency",
    kind: "choice",
    required: true,
    question: "Dans quel délai souhaitez-vous réaliser les travaux ?",
    help: "Une réponse honnête nous aide à vous proposer une date que nous pourrons tenir.",
    options: [
      { value: "Dès que possible", label: "Dès que possible" },
      { value: "Dans les 3 mois", label: "Dans les trois mois" },
      { value: "Dans l'année", label: "Dans l'année" },
      { value: "Je prépare mon budget", label: "Je prépare mon budget", hint: "Je me renseigne pour l'instant" },
    ],
  },
  {
    id: "contact",
    kind: "text",
    question: "Comment vous joindre ?",
    help: "Nous vous recontactons pour convenir d'une date de visite. Aucune donnée n'est transmise à des tiers.",
    fields: [
      { name: "name", label: "Nom et prénom", type: "text", autoComplete: "name", required: true,
        validate: (v) => (v.trim().length < 2 ? "Merci d'indiquer votre nom." : null) },
      { name: "phone", label: "Téléphone", type: "tel", autoComplete: "tel", required: true,
        validate: (v) => (v.replace(/\D/g, "").length < 8 ? "Ce numéro semble incomplet." : null) },
      { name: "email", label: "E-mail", type: "email", autoComplete: "email", required: true,
        validate: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? null : "Cette adresse e-mail semble incorrecte.") },
    ],
  },
]

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export function QuoteWizard() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [submitError, setSubmitError] = useState("")
  const [entering, setEntering] = useState(false)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const honeypot = useRef<HTMLInputElement>(null)

  // Les étapes conditionnelles sont retirées du parcours dès que la réponse
  // qui les déclenche change : la numérotation et la progression restent donc
  // toujours cohérentes avec ce que le visiteur voit réellement.
  const visible = STEPS.filter((s) => !s.when || s.when(answers))
  const safeStep = Math.min(step, visible.length - 1)
  /** L'étape a-t-elle réellement été posée au visiteur ? */
  const asked = (id: string) => visible.some((s) => s.id === id)
  const current = visible[safeStep]
  const isLast = safeStep === visible.length - 1
  // Progression sur les intervalles franchis, pas sur les écrans : arriver au
  // dernier écran affiche 100 %. Un compteur qui plafonne à 83 % au moment
  // d'envoyer donne l'impression qu'il reste une étape cachée.
  const progress =
    visible.length > 1 ? Math.round((safeStep / (visible.length - 1)) * 100) : 100

  // Déplace le focus sur la question à chaque changement d'écran
  useEffect(() => {
    setEntering(true)
    const t = setTimeout(() => setEntering(false), 20)
    headingRef.current?.focus()
    return () => clearTimeout(t)
  }, [step])

  const set = useCallback((id: string, value: string) => {
    setAnswers((a) => ({ ...a, [id]: value }))
    setErrors((e) => {
      const { [id]: _drop, ...rest } = e
      return rest
    })
  }, [])

  const validateStep = useCallback((): boolean => {
    if (current.kind === "choice" && current.required && !answers[current.id]) {
      setErrors({ [current.id]: "Choisissez une option pour continuer." })
      return false
    }
    if (current.kind === "text") {
      const next: Record<string, string> = {}
      for (const f of current.fields) {
        const v = answers[f.name] ?? ""
        if (f.required && !v.trim()) next[f.name] = "Ce champ est obligatoire."
        else if (f.validate) {
          const err = f.validate(v)
          if (err) next[f.name] = err
        }
      }
      setErrors(next)
      return Object.keys(next).length === 0
    }
    return true
  }, [current, answers])

  async function submit() {
    if (!validateStep()) return
    setStatus("sending")
    setSubmitError("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: answers.name ?? "",
          email: answers.email ?? "",
          phone: answers.phone ?? "",
          commune: answers.commune ?? "",
          service: answers.service ?? "",
          urgency: answers.urgency ?? "",
          message: [
            answers.adresse ? `Adresse : ${answers.adresse}` : "",
            // N'inclure ces réponses que si l'étape fait partie du parcours
            // effectivement suivi : un visiteur qui répond « Ardoises » puis
            // revient en arrière pour choisir « Bardage » laisserait sinon
            // une réponse orpheline et contradictoire dans le mail.
            asked("toiture") && answers.toiture
              ? `Type de toiture : ${answers.toiture}`
              : "",
            asked("couverture") && answers.couverture
              ? `Couverture actuelle : ${answers.couverture}`
              : "",
            answers.batiment ? `Type de bâtiment : ${answers.batiment}` : "",
            // Volet photovoltaïque — même règle : rien dans le mail si
            // l'étape n'a pas été posée.
            asked("orientation") && answers.orientation
              ? `Orientation : ${answers.orientation}`
              : "",
            asked("ombrage") && answers.ombrage ? `Ombrage : ${answers.ombrage}` : "",
            asked("consommation") && answers.consommation
              ? `Consommation annuelle : ${answers.consommation}`
              : "",
            asked("equipements") && answers.equipements
              ? `Équipements : ${answers.equipements}`
              : "",
            asked("batterie") && answers.batterie
              ? `Batterie de stockage : ${answers.batterie}`
              : "",
          ]
            .filter(Boolean)
            .join("\n"),
          lz_ref: honeypot.current?.value ?? "",
        }),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(body?.error || "Une erreur est survenue.")
      setStatus("sent")
    } catch (err) {
      setStatus("error")
      setSubmitError(err instanceof Error ? err.message : "Une erreur est survenue.")
    }
  }

  const next = useCallback(() => {
    if (!validateStep()) return
    if (isLast) void submit()
    else setStep((s) => s + 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateStep, isLast])

  const back = () => setStep((s) => Math.max(0, s - 1))

  // Raccourcis clavier : lettre pour choisir, Entrée pour avancer
  useEffect(() => {
    if (status === "sent" || status === "sending") return

    function onKey(e: KeyboardEvent) {
      const el = e.target as HTMLElement | null
      const typing = el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")

      if (e.key === "Enter" && !e.shiftKey) {
        if (typing && el?.tagName === "TEXTAREA") return // Entrée = saut de ligne
        e.preventDefault()
        next()
        return
      }
      if (typing) return

      if (current.kind === "choice") {
        const i = LETTERS.indexOf(e.key.toUpperCase())
        if (i >= 0 && i < current.options.length) {
          e.preventDefault()
          set(current.id, current.options[i].value)
        }
      }
    }

    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [current, next, set, status])

  // ------------------------------------------------------------ Confirmation
  if (status === "sent") {
    return (
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success">
          <Check className="h-8 w-8 text-white" strokeWidth={3} aria-hidden />
        </div>
        <h2 className="mt-6 text-navy-900">Demande bien reçue</h2>
        <p className="prose-lazo mt-4 text-muted-foreground">
          Merci {answers.name?.split(" ")[0]}. Nous revenons vers vous rapidement pour convenir
          d&apos;une date de visite. La visite et le devis sont gratuits et sans engagement.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-6 py-3 font-semibold text-white transition hover:bg-navy-800"
          >
            Retour à l&apos;accueil
          </Link>
          <a
            href={telHref}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-navy-900 transition hover:bg-navy-50"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    )
  }

  // ------------------------------------------------------------------ Parcours
  return (
    <div>
      {/* Progression */}
      <div className="mb-10">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <span>
            Étape {safeStep + 1} sur {visible.length}
          </span>
          <span>{progress} %</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-navy-100">
          <div
            className="h-full rounded-full bg-gold-400 transition-all duration-500 ease-out"
            style={{ width: `${Math.max(progress, 4)}%` }}
          />
        </div>
      </div>

      {/*
        Piège à robots.
        Le champ s'appelait « website » : Chrome le reconnaissait comme un champ
        de profil et le remplissait automatiquement, ce qui bloquait de vrais
        visiteurs. Nom neutre + hidden : invisible pour l'autocomplétion comme
        pour l'utilisateur, mais toujours présent dans le DOM pour les robots
        qui remplissent tous les champs.
      */}
      <input
        ref={honeypot}
        type="text"
        name="lz_ref"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        hidden
      />

      <div
        key={step}
        aria-live="polite"
        className={`transition-all duration-300 ${entering ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"}`}
      >
        <h2
          ref={headingRef}
          tabIndex={-1}
          className="text-2xl outline-none sm:text-3xl lg:text-4xl"
        >
          {current.question}
        </h2>
        {current.help && (
          <p className="prose-lazo mt-3 text-muted-foreground">{current.help}</p>
        )}

        <div className="mt-8">
          {/* ---------------------------------------------------- Choix */}
          {current.kind === "choice" && (
            <>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {current.options.map((o, i) => {
                  const selected = answers[current.id] === o.value
                  return (
                    <button
                      key={o.value}
                      type="button"
                      onClick={() => set(current.id, o.value)}
                      aria-pressed={selected}
                      className={`group flex items-start gap-3 rounded-xl border-2 px-4 py-3.5 text-left transition ${
                        selected
                          ? "border-gold-400 bg-gold-50"
                          : "border-border bg-card hover:border-gold-300 hover:bg-gold-50/40"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-bold transition ${
                          selected
                            ? "bg-gold-400 text-navy-900"
                            : "bg-navy-50 text-muted-foreground group-hover:bg-gold-100"
                        }`}
                        aria-hidden
                      >
                        {selected ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : LETTERS[i]}
                      </span>
                      <span>
                        <span className="block font-semibold text-navy-900">{o.label}</span>
                        {o.hint && (
                          <span className="mt-0.5 block text-sm text-muted-foreground">{o.hint}</span>
                        )}
                      </span>
                    </button>
                  )
                })}
              </div>
              {errors[current.id] && <FieldError>{errors[current.id]}</FieldError>}
            </>
          )}

          {/* -------------------------------------------------- Coordonnées */}
          {current.kind === "text" && (
            <div className="space-y-5">
              {current.fields.map((f, i) => (
                <div key={f.name}>
                  <label
                    htmlFor={f.name}
                    className="mb-1.5 block text-sm font-semibold text-navy-900"
                  >
                    {f.label}
                    {f.required && <span className="text-destructive"> *</span>}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    autoComplete={f.autoComplete}
                    autoFocus={i === 0}
                    value={answers[f.name] ?? ""}
                    onChange={(e) => set(f.name, e.target.value)}
                    aria-invalid={Boolean(errors[f.name])}
                    className={`w-full rounded-xl border-2 bg-background px-5 py-3.5 text-base outline-none transition ${
                      errors[f.name] ? "border-destructive" : "border-border focus:border-gold-400"
                    }`}
                  />
                  {errors[f.name] && <FieldError>{errors[f.name]}</FieldError>}
                </div>
              ))}
            </div>
          )}
        </div>

        {status === "error" && (
          <p className="mt-6 flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            <span>
              {submitError}{" "}
              <a href={telHref} className="font-semibold underline">
                {site.phoneDisplay}
              </a>
            </span>
          </p>
        )}

        {/* -------------------------------------------------- Navigation */}
        <div className="mt-9 flex items-center gap-3">
          {step > 0 && (
            <button
              type="button"
              onClick={back}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 font-semibold text-navy-900 transition hover:bg-navy-50"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Retour
            </button>
          )}

          <button
            type="button"
            onClick={next}
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 rounded-lg bg-gold-400 px-7 py-3 font-bold text-navy-900 transition hover:bg-gold-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                Envoi en cours…
              </>
            ) : isLast ? (
              "Envoyer ma demande"
            ) : (
              <>
                Continuer
                <ArrowRight className="h-4 w-4" aria-hidden />
              </>
            )}
          </button>

          <span className="hidden text-xs text-muted-foreground sm:block">
            ou appuyez sur <kbd className="rounded border border-border bg-navy-50 px-1.5 py-0.5 font-sans font-semibold">Entrée</kbd>
          </span>
        </div>
      </div>
    </div>
  )
}

function FieldError({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-2 flex items-center gap-1.5 text-sm text-destructive">
      <AlertCircle className="h-4 w-4 shrink-0" aria-hidden />
      {children}
    </p>
  )
}
