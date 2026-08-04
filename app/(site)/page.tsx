import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ArrowRight, Phone, ShieldCheck, FileText, Clock, Eye } from "lucide-react"
import { SERVICES } from "@/lib/services"
import { COMMUNES } from "@/lib/communes"
import { site, telHref } from "@/lib/site"
import { CtaBand } from "@/components/cta-band"
import { Faq } from "@/components/faq"
import { JsonLd, faqSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: { absolute: "Couvreur à Liège & Herstal | Rénovation de Toiture" },
  description:
    "Couvreur agréé en province de Liège. Rénovation de toiture, isolation, toiture plate, photovoltaïque et bardage. Devis gratuit sous 24 h.",
  alternates: { canonical: "/" },
}

const HOME_FAQ = [
  {
    q: "Dans quelles communes intervenez-vous ?",
    a: "Nous couvrons Liège et sa périphérie : Herstal, Oupeye, Ans, Seraing, Saint-Nicolas, Fléron, Visé, Beyne-Heusay, Grâce-Hollogne, Awans, Juprelle, Blegny et Soumagne. Si votre commune n'est pas dans cette liste mais reste proche, appelez-nous — nous vous dirons franchement si nous pouvons intervenir correctement chez vous ou non.",
  },
  {
    q: "Le devis est-il vraiment gratuit ?",
    a: "Oui, le déplacement et le devis écrit sont gratuits et sans engagement. Vous recevez un document détaillé poste par poste, avec les matériaux et les quantités, pas un prix global sans explication.",
  },
  {
    q: "Combien de temps pour recevoir un devis ?",
    a: "Nous visons l'envoi du devis dans les 24 heures suivant la visite pour les chantiers courants. Pour une rénovation complète nécessitant une étude de charpente ou un dossier d'urbanisme, comptez quelques jours de plus — nous vous annonçons le délai lors de la visite.",
  },
  {
    q: "Êtes-vous assurés ?",
    a: "Oui. Nous disposons d'une assurance responsabilité civile professionnelle et d'une couverture décennale sur les travaux de couverture. Les références de police figurent sur nos devis. Demandez systématiquement cette preuve à tout entrepreneur, quel qu'il soit : c'est la protection la plus importante dont vous disposez.",
  },
  {
    q: "Travaillez-vous avec les primes de la Région wallonne ?",
    a: "Oui. Nous établissons des devis conformes aux exigences des dispositifs de primes et nous vous accompagnons dans la constitution du dossier. Les montants, les conditions et les seuils techniques évoluent régulièrement : nous vérifions le cadre applicable au moment de votre projet plutôt que de vous annoncer un chiffre qui pourrait ne plus être exact.",
  },
]

const REASONS = [
  {
    icon: Eye,
    title: "Ce qu'on voit, on vous le montre",
    body: "Nous photographions ce que nous constatons sur le toit et nous vous l'expliquons, y compris les parties invisibles depuis le sol. Vous décidez sur des images, pas sur parole.",
  },
  {
    icon: FileText,
    title: "Un devis détaillé, poste par poste",
    body: "Matériaux, quantités, main-d'œuvre, échafaudage, évacuation : tout est chiffré ligne par ligne. Un prix global sans détail est le meilleur moyen de découvrir des suppléments en fin de chantier.",
  },
  {
    icon: ShieldCheck,
    title: "Assurance décennale",
    body: "Responsabilité civile professionnelle et garantie décennale sur les travaux de couverture, avec les références de police mentionnées sur le devis.",
  },
  {
    icon: Clock,
    title: "Des délais qu'on tient",
    body: "Nous annonçons une date que nous pouvons respecter plutôt qu'une date qui vous fait plaisir. Si la météo nous décale, vous êtes prévenus le jour même.",
  },
]

const STEPS = [
  {
    n: "01",
    title: "Vous nous appelez",
    body: "Vous décrivez ce que vous constatez, ou vous remplissez le formulaire de devis. Nous vous posons quelques questions et convenons d'une date de visite.",
  },
  {
    n: "02",
    title: "Nous montons regarder",
    body: "Visite sur place, avec accès réel à la toiture quand c'est nécessaire. Nous photographions les désordres, y compris ce que vous ne pouvez pas voir depuis le sol.",
  },
  {
    n: "03",
    title: "Vous recevez un devis clair",
    body: "Un document détaillé sous 24 h pour les cas courants, avec les options quand il y en a. Nous vous disons ce qui doit être fait et ce qui peut attendre — les deux existent.",
  },
  {
    n: "04",
    title: "Nous réalisons le chantier",
    body: "Date fixée en tenant compte de la météo, protection des abords, remise hors d'eau chaque soir. Réception avec photos à l'appui, y compris de ce que vous ne pouvez pas voir.",
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQ)} />

      {/* ---------------------------------------------------------- Hero */}
      <section className="relative isolate overflow-hidden bg-navy-900">
        <Image
          src="/img/hero-couvreur-liege.jpg"
          alt="Pose de tuiles anthracite sur une toiture en cours de rénovation par Lazo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
        {/* Dégradé asymétrique : opaque à gauche pour que le titre reste
            lisible, franchement transparent à droite pour qu'on voie le
            chantier réel plutôt qu'un aplat sombre. */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/25"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-sm font-medium text-gold-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
              </span>
              Intervention en province de Liège
            </p>

            <h1 className="mt-6 text-white">
              Couvreur à Liège,
              <br />
              Herstal et alentours
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
              Rénovation de toiture, isolation, toiture plate, photovoltaïque et bardage.
              Nous montons voir, nous vous montrons les photos, et nous vous disons franchement
              ce qui doit être fait — y compris quand la réponse est « rien pour l&apos;instant ».
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/devis"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-7 py-4 font-bold text-navy-900 shadow-lg transition hover:bg-gold-300"
              >
                Devis gratuit
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={telHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {site.phoneDisplay}
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/70">
              {[
                "Réponse sous 24 h",
                "Garantie décennale",
                "Relevé photo détaillé",
                "14 communes desservies",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ Services */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="prose-lazo max-w-3xl">
          <h2 className="rule-gold">Ce que nous faisons</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Une toiture ne se traite pas par morceaux. La couverture, l&apos;isolation et
            l&apos;étanchéité forment un même système, et les désordres naissent presque toujours
            à la jonction entre deux d&apos;entre eux. Nous concentrons notre activité sur ces
            cinq prestations plutôt que de tout proposer — c&apos;est ce qui nous permet de les
            maîtriser réellement.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group overflow-hidden rounded-xl border border-border bg-card transition hover:border-gold-400 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-navy-50">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-base font-bold leading-snug text-navy-900 sm:text-lg">
                  {s.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-gold-700 sm:text-sm">{s.tagline}</p>
                {/* Description masquée en 2 colonnes serrées : elle ne tient pas
                    proprement sous 200 px de large et écrase la hiérarchie. */}
                <p className="mt-2.5 hidden text-sm leading-relaxed text-muted-foreground sm:block">
                  {s.shortDescription}.
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition group-hover:gap-2.5 sm:mt-4">
                  En savoir plus
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------- Différenciation */}
      <section className="bg-navy-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
          <div className="prose-lazo max-w-3xl">
            <h2 className="rule-gold">Comment nous travaillons</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Le secteur de la toiture souffre d&apos;une mauvaise réputation, et pas toujours
              injustement. Démarchage au porte-à-porte, diagnostics alarmistes, devis vagues suivis
              de suppléments : ces pratiques existent. Voici, concrètement, ce que nous faisons
              différemment.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {REASONS.map((r) => (
              <div key={r.title} className="prose-lazo rounded-xl border border-border bg-background p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-400">
                  <r.icon className="h-5 w-5 text-navy-900" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-900">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Process */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <h2 className="rule-gold">Du premier appel à la réception</h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="prose-lazo">
              <span className="font-display text-5xl font-extrabold text-navy-100">{s.n}</span>
              <h3 className="mt-2 text-lg font-bold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------- Primes teaser */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-10 rounded-2xl border border-border bg-gold-50 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
          <div className="prose-lazo">
            <h2 className="rule-gold">Primes et aides en Wallonie</h2>
            <p className="mt-6 text-muted-foreground">
              L&apos;isolation de toiture figure parmi les postes les mieux soutenus par les
              dispositifs régionaux, parce que c&apos;est celui où l&apos;euro investi produit le
              plus d&apos;économie. Les montants dépendent de vos revenus, de la nature des travaux
              et du respect de seuils techniques précis.
            </p>
            <p className="mt-4 text-muted-foreground">
              Ces dispositifs changent régulièrement. Plutôt que d&apos;afficher un montant qui
              risque d&apos;être périmé, nous vous expliquons le mécanisme, ce qui conditionne
              l&apos;éligibilité, et nous vérifions le cadre en vigueur au moment de votre devis.
            </p>
            <Link
              href="/primes-wallonie"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-navy-900 px-6 py-3 font-semibold text-white no-underline transition hover:bg-navy-800"
            >
              Comprendre les primes
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/img/isolation-toiture.jpg"
              alt="Isolation de toiture posée entre les chevrons"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Maillage interne vers les pages communales.
          La section complète a été retirée à la demande du client ; cette
          ligne de liens conserve l'essentiel — la page d'accueil est la plus
          forte du domaine, et c'est de là que part le signal de pertinence
          géographique vers les quatorze pages locales. */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
            Nous intervenons à
          </h2>
          <p className="mt-3 text-sm leading-loose">
            {COMMUNES.map((c, i) => (
              <span key={c.slug}>
                {i > 0 && <span className="mx-2 text-navy-300">·</span>}
                <Link
                  href={`/zones/${c.slug}`}
                  className="font-medium text-navy-900 transition hover:text-gold-700 hover:underline"
                >
                  {c.name}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </section>

      <Faq items={HOME_FAQ} />
      <CtaBand />
    </>
  )
}
