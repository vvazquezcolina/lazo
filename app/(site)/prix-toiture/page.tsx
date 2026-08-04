import Link from "next/link"
import type { Metadata } from "next"
import { AlertTriangle, ArrowRight } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CtaBand } from "@/components/cta-band"
import { Faq } from "@/components/faq"
import { JsonLd, faqSchema, breadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Prix d'une toiture en Belgique — ce qui fait vraiment le devis",
  description:
    "Comprendre le prix d'une rénovation de toiture en province de Liège : les postes qui pèsent, pourquoi les prix au m² affichés en ligne trompent, comment comparer deux devis.",
  alternates: { canonical: "/prix-toiture" },
}

const trail = [
  { name: "Accueil", path: "/" },
  { name: "Prix d'une toiture", path: "/prix-toiture" },
]

const FACTORS = [
  {
    title: "La surface réelle, pas l'emprise au sol",
    body: "Une toiture à forte pente développe une surface nettement supérieure à la surface au sol de la maison. C'est la surface développée qui est mise en œuvre, et c'est elle qui doit figurer sur le devis. Un devis qui reprend la surface au sol sous-estime le chantier — et le rattrapage arrive en cours de route.",
  },
  {
    title: "L'état de la charpente, découvert en cours de chantier",
    body: "C'est le principal facteur d'incertitude. Tant que la couverture n'est pas déposée, personne ne connaît l'état exact des bois. Un devis sérieux prévoit cette éventualité, soit par un poste conditionnel chiffré à l'avance, soit par une clause claire. Un devis qui l'ignore complètement n'est pas plus précis : il reporte simplement la mauvaise nouvelle.",
  },
  {
    title: "Le matériau de couverture",
    body: "L'écart entre une tuile béton d'entrée de gamme et une ardoise naturelle de qualité est considérable, et il se retrouve intégralement dans le devis. L'arbitrage ne se fait pas sur le seul prix d'achat : durée de vie, entretien et adéquation au bâti entrent dans le calcul du coût réel sur trente ans.",
  },
  {
    title: "La complexité de la géométrie",
    body: "Un versant unique et rectangulaire coûte beaucoup moins cher au mètre carré qu'une toiture découpée en croupes, noues, lucarnes et souches de cheminée. Chaque raccord demande du temps, du savoir-faire et de la zinguerie sur mesure. Deux maisons de surface identique peuvent différer du simple au double sur ce seul critère.",
  },
  {
    title: "L'accès et l'échafaudage",
    body: "Une maison quatre façades avec un jardin dégagé s'échafaude rapidement. Une maison mitoyenne en centre-ville, avec échafaudage en façade rue, autorisation d'occupation du domaine public et accès arrière impossible, représente un coût logistique bien supérieur — pour un travail de couverture identique.",
  },
  {
    title: "Le taux de TVA applicable",
    body: "Sur un logement privé suffisamment ancien, le taux réduit de 6 % s'applique au lieu du taux normal, à condition que les travaux soient facturés directement au client final par un entrepreneur enregistré. Sur un budget de toiture, l'écart entre les deux taux est loin d'être anecdotique. Vérifiez que le devis précise le taux appliqué.",
  },
]

const FAQ = [
  {
    q: "Pourquoi ne publiez-vous pas de prix au m² ?",
    a: "Parce qu'un prix au mètre carré isolé n'informe pas : il rassure à tort. Selon la pente, le matériau, la complexité des raccords, l'état de la charpente et les conditions d'accès, le coût réel au mètre carré varie du simple au triple pour un travail de qualité équivalente. Les sites qui affichent une fourchette étroite vous donnent une base de comparaison fausse, et vous conduisent à écarter le devis sérieux au profit du devis incomplet. Nous préférons vous expliquer ce qui fait le prix, puis chiffrer votre toiture après l'avoir vue.",
  },
  {
    q: "Comment comparer deux devis de toiture ?",
    a: "Vérifiez d'abord qu'ils portent sur la même surface développée et le même matériau, référence commerciale à l'appui. Contrôlez ensuite que l'échafaudage, l'évacuation des déchets, l'écran sous-toiture, les liteaux et la zinguerie de raccord figurent explicitement dans chacun — ce sont les postes que l'on omet pour paraître moins cher. Regardez enfin le taux de TVA appliqué et la mention de l'assurance décennale. Un devis nettement moins cher que les autres a presque toujours une explication, et elle est rarement à votre avantage.",
  },
  {
    q: "Faut-il verser un acompte ?",
    a: "Un acompte raisonnable à la commande est une pratique normale, notamment pour l'approvisionnement des matériaux. En revanche, une demande d'acompte très élevée, ou un paiement important réclamé en espèces avant tout démarrage, doit vous alerter. Le solde se règle après réception des travaux.",
  },
  {
    q: "Le devis est-il vraiment gratuit et sans engagement ?",
    a: "Oui. Le déplacement et le devis écrit ne vous coûtent rien et ne vous engagent à rien. Vous restez libre de consulter d'autres entreprises — et nous vous encourageons à le faire.",
  },
]

export default function PrixPage() {
  return (
    <>
      <JsonLd data={[faqSchema(FAQ), breadcrumbSchema(trail)]} />

      <section className="border-b border-border bg-navy-50">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Breadcrumbs trail={trail} />
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
        <h1 className="text-navy-900">Le prix d&apos;une toiture</h1>

        <div className="prose-lazo mt-8 space-y-5 text-muted-foreground">
          <p className="text-lg">
            C&apos;est la première question que tout le monde se pose, et c&apos;est aussi celle sur
            laquelle circule le plus d&apos;informations trompeuses. Voici ce qui détermine
            réellement le montant d&apos;un devis de toiture, et comment lire celui qu&apos;on vous
            remet.
          </p>
        </div>

        <aside className="prose-lazo mt-10 rounded-xl border-l-4 border-gold-400 bg-gold-50 p-6">
          <p className="flex items-start gap-3 text-sm text-navy-900">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden />
            <span>
              <strong>Pourquoi vous ne trouverez pas de fourchette de prix ici.</strong> Nous
              pourrions afficher un « à partir de X €/m² » comme le font beaucoup de sites : cela
              attire du trafic et coûte peu. Mais un chiffre de ce genre, sorti de son contexte,
              vous sert de référence pour juger des devis réels — et vous pousse mécaniquement vers
              celui qui a omis l&apos;échafaudage ou la sous-toiture pour rentrer dans la
              fourchette. Nous préférons vous armer pour lire un devis plutôt que vous donner un
              chiffre qui ne correspond à aucune toiture en particulier.
            </span>
          </p>
        </aside>

        <section className="mt-14">
          <h2 className="rule-gold text-navy-900">Les six postes qui font le devis</h2>
          <div className="mt-8 space-y-6">
            {FACTORS.map((f, i) => (
              <div key={f.title} className="prose-lazo rounded-xl border border-border bg-card p-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-2xl font-extrabold text-navy-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-bold text-navy-900">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="prose-lazo mt-14">
          <h2 className="rule-gold text-navy-900">Les postes qu&apos;on oublie de chiffrer</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Quand un devis paraît nettement plus avantageux que les autres, la différence tient
              rarement à une meilleure organisation. Elle vient le plus souvent de lignes absentes.
              Vérifiez systématiquement que les éléments suivants apparaissent noir sur blanc :
            </p>
            <ul className="space-y-2">
              <li>L&apos;échafaudage ou le dispositif de sécurisation, avec sa durée de location.</li>
              <li>L&apos;évacuation et le traitement des déchets de chantier.</li>
              <li>L&apos;écran sous-toiture et les liteaux, avec leur référence.</li>
              <li>La zinguerie de raccord : noues, solins, rives, souches de cheminée.</li>
              <li>La reprise éventuelle des corniches et des descentes d&apos;eau.</li>
              <li>Le traitement du cas où la charpente se révèle dégradée.</li>
              <li>Le taux de TVA appliqué et l&apos;attestation correspondante.</li>
              <li>Les références de l&apos;assurance responsabilité civile et décennale.</li>
            </ul>
            <p>
              Un devis qui comporte ces huit points est comparable à un autre devis qui les
              comporte aussi. Un devis qui n&apos;en reprend que la moitié n&apos;est pas moins
              cher : il est incomplet, et l&apos;écart réapparaîtra en cours de chantier sous forme
              de suppléments.
            </p>
          </div>
        </section>

        <section className="prose-lazo mt-14">
          <h2 className="rule-gold text-navy-900">Réparer coûte parfois plus cher que rénover</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              L&apos;arbitrage est moins évident qu&apos;il n&apos;y paraît. Une réparation ciblée
              sur une couverture globalement saine est parfois la bonne décision — nous vous le
              dirons lors de la visite, même si ce type d&apos;intervention ponctuelle ne fait pas
              partie de nos prestations.
              Mais quand chaque intervention est suivie d&apos;une nouvelle fuite ailleurs quelques
              mois plus tard, l&apos;addition des dépannages, du déplacement et de l&apos;accès
              finit par dépasser le coût d&apos;une réfection — sans jamais régler le problème de
              fond.
            </p>
            <p>
              Le critère de décision n&apos;est pas l&apos;âge de la toiture mais l&apos;état
              général des éléments de couverture et de leurs fixations. Des ardoises qui se fendent
              spontanément un peu partout, ou des crochets rouillés sur l&apos;ensemble d&apos;un
              versant, signent une fin de vie que la réparation ne prolongera pas utilement.
            </p>
            <Link
              href="/services/renovation-toiture"
              className="inline-flex items-center gap-2 font-semibold text-navy-900 no-underline hover:underline"
            >
              Notre approche de la rénovation de toiture
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </section>

        <section className="prose-lazo mt-14 rounded-2xl bg-navy-900 p-8 text-white">
          <h2 className="text-white">Et les primes dans tout ça ?</h2>
          <p className="mt-4 text-white/75">
            Les dispositifs wallons et le taux de TVA réduit peuvent modifier sensiblement le
            montant qui reste réellement à votre charge, particulièrement lorsque le chantier
            comprend un volet isolation. Cela se prépare avant le démarrage des travaux, pas après.
          </p>
          <Link
            href="/primes-wallonie"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold-400 px-6 py-3 font-bold text-navy-900 no-underline transition hover:bg-gold-300"
          >
            Comprendre les primes
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </section>
      </article>

      <Faq items={FAQ} title="Prix — questions fréquentes" />
      <CtaBand
        title="Un chiffre pour votre toiture, pas pour une toiture moyenne"
        body="Nous venons voir, nous mesurons, et nous chiffrons poste par poste. Le déplacement et le devis sont gratuits et sans engagement."
      />
    </>
  )
}
