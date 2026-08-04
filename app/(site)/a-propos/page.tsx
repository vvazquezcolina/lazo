import Image from "next/image"
import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CtaBand } from "@/components/cta-band"
import { site } from "@/lib/site"
import { JsonLd, breadcrumbSchema } from "@/lib/schema"

/**
 * ⚠️ Cette page décrit une méthode de travail, pas un historique.
 * Ancienneté, effectifs, nombre de chantiers : ces éléments doivent être
 * fournis par l'entreprise. L'ancien site affichait « 15 ans d'expérience »
 * et « 50+ projets », chiffres générés automatiquement et jamais vérifiés.
 */

export const metadata: Metadata = {
  title: "À propos — notre façon de travailler",
  description:
    "Comment nous abordons un chantier de toiture en province de Liège : visite documentée, devis détaillé poste par poste, garantie décennale.",
  alternates: { canonical: "/a-propos" },
}

const trail = [
  { name: "Accueil", path: "/" },
  { name: "À propos", path: "/a-propos" },
]

export default function AProposPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />

      <section className="border-b border-border bg-navy-50">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Breadcrumbs trail={trail} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="prose-lazo lg:col-span-7">
            <h1 className="text-navy-900">Notre façon de travailler</h1>

            <div className="mt-8 space-y-5 text-muted-foreground">
              <p className="text-lg">
                {site.name} est une entreprise de couverture active en province de Liège. Nous
                intervenons sur la rénovation de toiture, l&apos;isolation, l&apos;étanchéité de
                toiture plate, le photovoltaïque et le bardage — un périmètre volontairement
                resserré.
              </p>
              <p>
                Ce choix n&apos;est pas commercial. Une infiltration naît presque toujours à une
                jonction : entre la couverture et ses raccords, entre l&apos;isolant et le
                pare-vapeur, ou au point de fixation d&apos;un panneau solaire à travers
                l&apos;ardoise. Quand ces interfaces sont réparties entre plusieurs entreprises,
                chacune renvoie la responsabilité à l&apos;autre et le propriétaire se retrouve
                seul avec le problème. Nous préférons couvrir un périmètre plus étroit et en
                répondre entièrement.
              </p>
            </div>

            <h2 className="rule-gold mt-12 text-navy-900">Trois engagements concrets</h2>
            <div className="mt-6 space-y-5 text-muted-foreground">
              <p>
                <strong className="text-navy-900">Nous montrons ce que nous constatons.</strong>{" "}
                Chaque visite est documentée par des photos des zones que vous ne pouvez pas
                voir depuis le sol. Vous décidez sur des images, pas sur une parole d&apos;expert.
                Cela vous permet aussi de comparer sérieusement avec un autre avis.
              </p>
              <p>
                <strong className="text-navy-900">Nous chiffrons poste par poste.</strong>{" "}
                Matériaux avec leurs références, quantités, main-d&apos;œuvre, échafaudage,
                évacuation des déchets, taux de TVA appliqué. Un prix global sans détail rend toute
                comparaison impossible et prépare le terrain aux suppléments.
              </p>
              <p>
                <strong className="text-navy-900">Nous disons quand il n&apos;y a rien à faire.</strong>{" "}
                Toutes les toitures que nous inspectons ne demandent pas de travaux. Nous réalisons
                des rénovations, pas des réparations ponctuelles : si votre toiture ne relève que
                d&apos;une petite intervention, nous vous le dirons franchement et vous orienterons,
                même si ce chantier n&apos;est pas pour nous.
              </p>
            </div>

            <h2 className="rule-gold mt-12 text-navy-900">Ce dont vous devez vous méfier</h2>
            <div className="mt-6 space-y-5 text-muted-foreground">
              <p>
                Le secteur de la toiture attire des pratiques discutables, et nous préférons les
                nommer. Le démarchage à domicile en tête : une entreprise sérieuse ne sonne pas
                chez vous pour vous annoncer, depuis le trottoir, que votre toit menace ruine.
              </p>
              <p>
                Méfiez-vous également des diagnostics alarmistes assortis d&apos;une remise valable
                le jour même, des demandes d&apos;acompte élevé en espèces, des devis d&apos;une
                seule ligne, et des entreprises qui refusent de vous communiquer les références de
                leur assurance décennale. Ces quatre signaux sont, à eux seuls, un bon filtre.
              </p>
              <p>
                Demandez toujours plusieurs devis, y compris quand le nôtre vous convient. Une
                entreprise confiante dans son travail vous y encourage.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/img/camionnette-lazo.jpg"
                alt="Camionnette Lazo garée devant une habitation lors d'un chantier en province de Liège"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-7">
              <h2 className="text-lg text-navy-900">Assurances et garanties</h2>
              <ul className="prose-lazo mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <strong className="text-navy-900">Responsabilité civile professionnelle</strong> —
                  couvre les dommages causés lors de l&apos;exécution des travaux.
                </li>
                <li>
                  <strong className="text-navy-900">Garantie décennale</strong> — couvre les vices
                  affectant la solidité et l&apos;étanchéité de l&apos;ouvrage, à compter de la
                  réception.
                </li>
                <li>
                  Les références de police figurent sur nos devis. Exigez cette information de
                  toute entreprise à qui vous confiez une toiture.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
