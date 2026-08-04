import Link from "next/link"
import type { Metadata } from "next"
import { ExternalLink, AlertTriangle, ArrowRight, CalendarClock, Check } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CtaBand } from "@/components/cta-band"
import { Faq } from "@/components/faq"
import { JsonLd, faqSchema, breadcrumbSchema } from "@/lib/schema"

/**
 * Contenu vérifié en source primaire (SPW / Wallonie.be), juillet 2026.
 *
 * Brochure officielle du régime :
 * https://logement.wallonie.be/storage/logement/documents/content/publication/brochures/primes-habitation-regime-2025-2026.pdf
 * Annexe technique « travaux de toiture » (13/03/2025), qui fixe R ≥ 5,00 :
 * https://logement.wallonie.be/storage/logement/documents/content/assistance/Formulaires/primes-habitation-2025/13-03-2025-pdf-annexe-1-toiture-primes-habitation.pdf
 *
 * ⚠️ Page à durée de vie courte : le régime se referme le 30/09/2026 et une
 * réforme est annoncée pour le 01/10/2026. À relire impérativement en octobre.
 */

export const metadata: Metadata = {
  title: "Primes toiture Wallonie 2026 — montants et échéance",
  description:
    "Primes toiture et isolation en Wallonie : jusqu'à 120 €/m². Le régime se clôture le 30/09/2026. Montants officiels, conditions et TVA à 6 %.",
  alternates: { canonical: "/primes-wallonie" },
}

const trail = [
  { name: "Accueil", path: "/" },
  { name: "Primes Wallonie", path: "/primes-wallonie" },
]

/** Montants de base et multiplicateurs — brochure officielle SPW. */
const PRIMES = [
  { travaux: "Isolation thermique du toit ou des combles", unite: "€/m²", base: 20, r4: 40, r3: 60, r2: 80, r1: 120 },
  { travaux: "Isolation avec un isolant biosourcé", unite: "€/m²", base: 26, r4: 52, r3: 78, r2: 104, r1: 156, highlight: true },
  { travaux: "Remplacement de la couverture", unite: "€/m²", base: 4, r4: 8, r3: 12, r2: 16, r1: 24 },
  { travaux: "Appropriation de la charpente", unite: "€", base: 100, r4: 200, r3: 300, r2: 400, r1: 600 },
  { travaux: "Remplacement de la collecte et évacuation des eaux pluviales", unite: "€", base: 40, r4: 80, r3: 120, r2: 160, r1: 240 },
  { travaux: "Audit Logement", unite: "€", base: 76, r4: 152, r3: 228, r2: 304, r1: 456 },
]

const REVENUS = [
  { cat: "R1", mult: "×6", plafond: "jusqu'à 28 900 €" },
  { cat: "R2", mult: "×4", plafond: "28 900 € – 41 100 €" },
  { cat: "R3", mult: "×3", plafond: "41 100 € – 54 300 €" },
  { cat: "R4", mult: "×2", plafond: "54 300 € – 122 800 €" },
]

const FAQ = [
  {
    q: "Jusqu'à quand puis-je introduire une demande de prime ?",
    a: "Le régime de soutien en vigueur se clôture le 30 septembre 2026. Toute demande, y compris la facture de solde, doit être introduite avant cette date. Passé ce délai, c'est un nouveau dispositif qui s'applique, fondé sur des prêts aidés plutôt que sur des primes. Si vous envisagez des travaux de toiture, c'est maintenant qu'il faut lancer la démarche.",
  },
  {
    q: "Un audit logement est-il obligatoire pour des travaux de toiture ?",
    a: "Non, et c'est une exception importante. La brochure officielle du dispositif l'indique explicitement : si vous réalisez uniquement des travaux de toiture ou d'isolation thermique du toit ou des combles, l'audit n'est pas obligatoire. La toiture est la seule famille de travaux à bénéficier de cette dispense, ce qui en fait le chantier le plus simple à faire aboutir administrativement. Attention toutefois : la réforme annoncée pour octobre 2026 prévoit un audit préalable obligatoire, ce qui supprimerait cet avantage.",
  },
  {
    q: "Quelle résistance thermique dois-je atteindre ?",
    a: "R ≥ 5,00 m²K/W, exprimée en résistance thermique et non en épaisseur — l'épaisseur nécessaire dépend du matériau choisi. Point décisif que beaucoup ignorent : l'isolant déjà en place ne compte pas dans le calcul. Vous devez atteindre 5,00 avec le seul isolant nouvellement posé. Plusieurs sites bien positionnés annoncent encore 4,5 : c'est faux et cela peut faire refuser votre dossier.",
  },
  {
    q: "Puis-je toucher la prime si je fais les travaux moi-même ?",
    a: "Non. Les travaux doivent être réalisés par un entrepreneur inscrit à la Banque-Carrefour des Entreprises. Vérifiez également qu'il dispose de l'accès à la profession « Toiture et étanchéité » : c'est une exigence légale en Wallonie pour la couverture, la charpente et l'évacuation des eaux pluviales, et son absence peut entraîner le refus de votre prime.",
  },
  {
    q: "Puis-je commencer les travaux avant d'introduire ma demande ?",
    a: "C'est l'erreur la plus coûteuse du dispositif. La chronologie des démarches est imposée, et démarrer un chantier avant d'avoir accompli l'étape requise fait perdre le bénéfice de l'aide sans rattrapage possible. Ne commandez rien et ne laissez rien démarrer avant d'avoir vérifié la procédure applicable à votre dossier.",
  },
  {
    q: "La TVA à 6 % s'applique-t-elle à ma toiture ?",
    a: "Si votre logement a au moins 10 ans, oui. Le SPF Finances mentionne d'ailleurs explicitement le cas : faire rénover entièrement sa toiture permet d'appliquer le taux de 6 %. Depuis le 1er juillet 2022, l'attestation signée par le client n'est plus requise — ce sont les mentions obligatoires sur la facture qui font foi, et la responsabilité en incombe à l'entrepreneur. La réforme de 2025 a porté sur le régime démolition-reconstruction, qui est un dispositif distinct et sans effet sur la rénovation d'une toiture existante.",
  },
  {
    q: "Une entreprise peut-elle me garantir le montant de ma prime ?",
    a: "Non, et c'est un signal d'alerte quand elle le fait. L'entreprise qui réalise les travaux n'instruit pas votre dossier : c'est l'administration régionale qui décide, sur la base de votre situation, des pièces fournies et des règles en vigueur à la date de la demande. Nous établissons un devis conforme aux exigences techniques et nous vous aidons à constituer le dossier, mais promettre un montant précis serait malhonnête.",
  },
]

export default function PrimesPage() {
  return (
    <>
      <JsonLd data={[faqSchema(FAQ), breadcrumbSchema(trail)]} />

      <section className="border-b border-border bg-navy-50">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Breadcrumbs trail={trail} />
        </div>
      </section>

      {/* ------------------------------------------------ Alerte échéance */}
      <section className="bg-destructive text-white">
        <div className="mx-auto flex max-w-3xl items-start gap-4 px-6 py-6">
          <CalendarClock className="mt-0.5 h-6 w-6 shrink-0" aria-hidden />
          <div>
            <p className="font-display text-lg font-extrabold">
              Le régime actuel se clôture le 30 septembre 2026
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-white/90">
              Toute demande — facture de solde comprise — doit être introduite avant cette date.
              À partir du 1<sup>er</sup> octobre 2026, un nouveau dispositif fondé sur des prêts
              aidés doit prendre le relais. Si vous avez un projet de toiture, la démarche se
              lance maintenant.
            </p>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
        <h1 className="text-navy-900">Primes toiture et isolation en Wallonie</h1>

        <div className="prose-lazo mt-8 space-y-5 text-muted-foreground">
          <p className="text-lg">
            L&apos;isolation de toiture est le poste le mieux soutenu du dispositif wallon, et le
            seul à échapper à l&apos;obligation d&apos;audit préalable. Voici les montants
            officiels, les conditions techniques réelles, et le calendrier à respecter.
          </p>
        </div>

        {/* ------------------------------------------------------ Montants */}
        <section className="mt-14">
          <h2 className="rule-gold text-navy-900">Les montants officiels</h2>
          <p className="prose-lazo mt-6 text-muted-foreground">
            La prime se calcule à partir d&apos;un montant de base multiplié par un coefficient
            lié à vos revenus et à la composition de votre ménage. Les valeurs ci-dessous sont
            celles de la brochure officielle du Service public de Wallonie.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[38rem] border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-navy-900 text-left">
                  <th className="py-3 pr-4 font-bold text-navy-900">Travaux</th>
                  <th className="px-2 py-3 text-right font-semibold text-muted-foreground">Base</th>
                  <th className="px-2 py-3 text-right font-semibold text-muted-foreground">R4</th>
                  <th className="px-2 py-3 text-right font-semibold text-muted-foreground">R3</th>
                  <th className="px-2 py-3 text-right font-semibold text-muted-foreground">R2</th>
                  <th className="px-2 py-3 text-right font-bold text-navy-900">R1</th>
                </tr>
              </thead>
              <tbody>
                {PRIMES.map((p) => (
                  <tr
                    key={p.travaux}
                    className={`border-b border-border ${p.highlight ? "bg-gold-50" : ""}`}
                  >
                    <td className="py-3 pr-4 font-medium text-navy-900">
                      {p.travaux}
                      {p.highlight && (
                        <span className="ml-2 rounded-full bg-gold-400 px-2 py-0.5 text-[0.7rem] font-bold text-navy-900">
                          +30 %
                        </span>
                      )}
                      <span className="block text-xs font-normal text-muted-foreground">
                        {p.unite}
                      </span>
                    </td>
                    <td className="px-2 py-3 text-right text-muted-foreground">{p.base}</td>
                    <td className="px-2 py-3 text-right text-muted-foreground">{p.r4}</td>
                    <td className="px-2 py-3 text-right text-muted-foreground">{p.r3}</td>
                    <td className="px-2 py-3 text-right text-muted-foreground">{p.r2}</td>
                    <td className="px-2 py-3 text-right font-bold text-navy-900">{p.r1}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {REVENUS.map((r) => (
              <div key={r.cat} className="rounded-lg border border-border bg-card px-5 py-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-xl font-extrabold text-navy-900">{r.cat}</span>
                  <span className="rounded-full bg-navy-900 px-2.5 py-0.5 text-xs font-bold text-white">
                    {r.mult}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Revenus {r.plafond}
                </p>
              </div>
            ))}
          </div>

          <p className="prose-lazo mt-6 text-sm text-muted-foreground">
            La prime est par ailleurs plafonnée à 70 % du montant de la facture TVAC pour les
            catégories R1 et R2, et à 50 % pour R3 et R4.
          </p>
        </section>

        {/* ---------------------------------------------- Points décisifs */}
        <section className="mt-14">
          <h2 className="rule-gold text-navy-900">Trois points qui changent tout</h2>

          <div className="mt-8 space-y-5">
            <div className="prose-lazo rounded-xl border border-gold-400/50 bg-gold-50 p-6">
              <h3 className="flex items-start gap-2.5 text-base font-bold text-navy-900">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" strokeWidth={3} aria-hidden />
                La toiture échappe à l&apos;audit obligatoire
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                C&apos;est écrit noir sur blanc dans la brochure officielle : si vous réalisez
                uniquement des travaux de toiture ou d&apos;isolation du toit et des combles,
                l&apos;audit logement n&apos;est pas obligatoire. Aucune autre famille de travaux
                ne bénéficie de cette dispense. Concrètement, c&apos;est le chantier subventionné
                le plus rapide et le plus simple à faire aboutir — et la réforme annoncée pour
                octobre prévoit précisément de supprimer cet avantage.
              </p>
            </div>

            <div className="prose-lazo rounded-xl border border-border bg-card p-6">
              <h3 className="text-base font-bold text-navy-900">
                R ≥ 5,00 m²K/W — et l&apos;isolant existant ne compte pas
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Le seuil technique porte sur la résistance thermique, pas sur l&apos;épaisseur :
                celle-ci dépend du matériau. Le point que beaucoup de propriétaires découvrent trop
                tard, c&apos;est que l&apos;isolant déjà en place n&apos;entre pas dans le calcul.
                Il faut atteindre 5,00 avec le seul isolant nouvellement posé. Plusieurs sites du
                secteur annoncent encore 4,5 — cette valeur est périmée et suivre cette
                indication fait refuser le dossier.
              </p>
            </div>

            <div className="prose-lazo rounded-xl border border-border bg-card p-6">
              <h3 className="text-base font-bold text-navy-900">
                Réparer la couverture suppose d&apos;isoler
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Pour obtenir la prime au remplacement de la couverture, à l&apos;appropriation de
                la charpente ou au remplacement des évacuations, la toiture doit être isolée à
                R ≥ 5,00 — ou vous devez pouvoir démontrer qu&apos;elle l&apos;est déjà. Autrement
                dit, ces primes ne se touchent pas isolément. Autant l&apos;intégrer au projet dès
                le départ : l&apos;échafaudage est monté une seule fois, et l&apos;isolation est de
                toute façon le poste le mieux doté du dispositif.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- Conditions */}
        <section className="prose-lazo mt-14">
          <h2 className="rule-gold text-navy-900">Les autres conditions</h2>
          <ul className="mt-6 space-y-2 text-muted-foreground">
            <li>Le logement doit avoir au moins 15 ans.</li>
            <li>Il doit être affecté à plus de 50 % à l&apos;habitation.</li>
            <li>
              Les travaux doivent être réalisés par un entrepreneur inscrit à la BCE — les travaux
              réalisés soi-même n&apos;ouvrent aucun droit.
            </li>
            <li>La conformité des installations électriques et de gaz est exigée.</li>
            <li>La facture de solde doit dater de moins de deux ans.</li>
            <li>Un contrôle reste possible durant cinq ans après l&apos;octroi.</li>
            <li>
              La demande s&apos;introduit via Mon Espace sur wallonie.be, ou par téléphone au 1718.
            </li>
          </ul>
        </section>

        {/* --------------------------------------------------------- TVA 6 % */}
        <section className="prose-lazo mt-14">
          <h2 className="rule-gold text-navy-900">La TVA à 6 %, l&apos;aide qu&apos;on oublie</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Indépendamment des primes, la rénovation d&apos;un logement privé d&apos;au moins
              10 ans bénéficie d&apos;un taux de TVA réduit à 6 % au lieu de 21 %, lorsque les
              travaux sont facturés directement au client final par un entrepreneur enregistré.
              Le SPF Finances cite d&apos;ailleurs explicitement le cas de la toiture parmi les
              travaux concernés.
            </p>
            <p>
              Sur un chantier de couverture, l&apos;écart entre les deux taux dépasse largement
              le montant de bien des primes. Et c&apos;est un avantage automatique : depuis le
              1<sup>er</sup> juillet 2022, l&apos;attestation signée par le client n&apos;est plus
              nécessaire — ce sont les mentions obligatoires portées sur la facture qui font foi,
              et la responsabilité en incombe à l&apos;entrepreneur. Vous n&apos;avez aucune
              démarche à accomplir.
            </p>
            <p>
              La réforme intervenue en 2025 concernait le régime démolition-reconstruction, qui
              est un dispositif distinct : elle n&apos;a pas d&apos;effet sur la rénovation
              d&apos;une toiture existante.
            </p>
          </div>
        </section>

        {/* ------------------------------------------------ Réforme oct. 2026 */}
        <section className="prose-lazo mt-14 rounded-2xl border-l-4 border-gold-400 bg-navy-50 p-7">
          <h2 className="text-navy-900">Ce qui change au 1<sup>er</sup> octobre 2026</h2>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            État de l&apos;information au 20 juillet 2026
          </p>
          <div className="mt-5 space-y-4 text-muted-foreground">
            <p>
              La Région wallonne a annoncé le remplacement du système de primes par un dispositif
              de <strong>prêts aidés</strong>. Les éléments communiqués à ce jour :
            </p>
            <ul className="space-y-2">
              <li>
                <strong className="text-navy-900">Rénopack</strong> — prêt à 0 % avec réduction du
                montant à rembourser, pour les ménages jusqu&apos;à 67 100 €, plafond porté à
                75 000 € pour une maison unifamiliale.
              </li>
              <li>
                <strong className="text-navy-900">Rénoprêt</strong> — taux préférentiel, pour les
                ménages entre 67 100 € et 122 800 €.
              </li>
              <li>
                Le dispositif viserait prioritairement les <strong>passoires énergétiques</strong>{" "}
                (PEB E, F et G), avec un objectif de passage de G/F vers D et de E vers C.
              </li>
              <li>
                Un <strong>audit préalable deviendrait obligatoire</strong> — ce qui supprimerait
                la dispense dont bénéficient aujourd&apos;hui les travaux de toiture.
              </li>
            </ul>
            <p className="rounded-lg bg-background p-4 text-sm">
              <AlertTriangle className="mr-2 inline h-4 w-4 text-gold-600" aria-hidden />
              Ces éléments proviennent d&apos;une note d&apos;orientation encore soumise à
              approbation. Ils ne sont pas définitifs et peuvent évoluer avant l&apos;entrée en
              vigueur. Nous mettrons cette page à jour dès la publication des textes.
            </p>
            <p>
              Ce qui est certain en revanche, c&apos;est la date de clôture du régime actuel. Si
              votre projet est mûr, il vaut mieux l&apos;introduire sous le dispositif que vous
              connaissez que sous celui que personne n&apos;a encore lu.
            </p>
          </div>
        </section>

        {/* -------------------------------------------------- Photovoltaïque */}
        <section className="prose-lazo mt-14">
          <h2 className="rule-gold text-navy-900">Photovoltaïque : un cadre distinct</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Le photovoltaïque ne relève pas du même régime. À ce jour, il n&apos;existe pas de
              prime régionale wallonne pour l&apos;installation de panneaux ni pour une batterie
              de stockage. Le <strong>tarif prosumer</strong> reste en vigueur en 2026, dans sa
              modalité capacitaire par défaut ou proportionnelle sur demande.
            </p>
            <p>
              L&apos;équilibre économique d&apos;une installation dépend donc aujourd&apos;hui de
              votre taux d&apos;autoconsommation bien plus que de ce que vous injectez sur le
              réseau. C&apos;est ce qui doit guider le dimensionnement.
            </p>
            <p>
              Bonne nouvelle sur le plan administratif : la pose de panneaux sur une toiture
              existante bénéficie d&apos;une dispense de permis d&apos;urbanisme, sans limite de
              puissance ni de surface, pour autant que le débordement et l&apos;écart de pente
              restent dans les tolérances prévues. La batterie associée est également dispensée.
            </p>
            <p>
              Enfin, vérifiez systématiquement que votre installateur dispose de la certification{" "}
              <strong>RESCERT</strong> : elle conditionne l&apos;accès à certains mécanismes de
              soutien. Elle ne concerne que le photovoltaïque, jamais les travaux de toiture.
            </p>
            <Link
              href="/services/photovoltaique"
              className="inline-flex items-center gap-2 font-semibold text-navy-900 no-underline hover:underline"
            >
              Notre approche du photovoltaïque
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </section>

        {/* ---------------------------------------------------------- Sources */}
        <section className="prose-lazo mt-14 rounded-xl border border-border bg-card p-7">
          <h2 className="text-lg text-navy-900">Sources officielles</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Les montants et conditions de cette page proviennent des documents officiels du
            Service public de Wallonie. Vérifiez-les avant d&apos;arrêter votre budget : seules
            ces sources font foi.
          </p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {[
              { href: "https://www.wallonie.be/fr/demarches/obtenir-une-prime-pour-son-habitation-partir-du-14-fevrier-2025", label: "Primes Habitation — Wallonie.be" },
              { href: "https://logement.wallonie.be/fr/aide/primes-habitation-2025", label: "Primes Habitation — SPW Logement" },
              { href: "https://fin.belgium.be/fr/particuliers/habitation/construire-renover/renover/renover-taux-de-tva", label: "TVA rénovation — SPF Finances" },
              { href: "https://www.wallonie.be/fr/demarches/photovoltaique-sinformer-sur-le-tarif-prosumer", label: "Tarif prosumer — Wallonie.be" },
            ].map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-navy-900 hover:underline"
                >
                  {s.label}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              </li>
            ))}
            <li className="text-muted-foreground">
              Le <strong>guichet de l&apos;énergie</strong> le plus proche propose un conseil
              gratuit et neutre, sans lien avec une entreprise.
            </li>
          </ul>
        </section>
      </article>

      <Faq items={FAQ} title="Primes — questions fréquentes" />
      <CtaBand
        title="Votre dossier doit partir avant le 30 septembre"
        body="Nous établissons des devis conformes aux exigences techniques du dispositif et nous vous aidons à constituer le dossier. La visite est gratuite."
      />
    </>
  )
}
