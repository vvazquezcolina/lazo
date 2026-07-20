import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Camera, ArrowRight } from "lucide-react"
import { SERVICES } from "@/lib/services"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CtaBand } from "@/components/cta-band"
import { JsonLd, breadcrumbSchema } from "@/lib/schema"

/**
 * ⚠️ AVANT MISE EN LIGNE — À LIRE
 *
 * Les visuels affichés ici sont des ILLUSTRATIONS de types d'intervention.
 * Ce ne sont pas des photos de chantiers réalisés par l'entreprise.
 *
 * Ils sont volontairement présentés comme tels : présenter une image
 * générique comme « notre chantier à Herstal » revient à fabriquer une
 * preuve de travail. Outre le problème déontologique, c'est un risque
 * commercial réel — un client qui reconnaît une image générique perd
 * confiance dans tout le reste du site.
 *
 * Remplacez ces visuels par de vraies photos avant/après de chantiers
 * réalisés, avec l'accord des clients concernés, puis remplacez ce bloc
 * par de véritables études de cas (commune, nature des travaux, durée).
 * C'est le contenu qui convertit le mieux sur ce type de site.
 */

export const metadata: Metadata = {
  title: "Nos interventions — types de chantiers de toiture",
  description:
    "Les différents types d'interventions que nous réalisons en province de Liège : ardoise, tuile, zinc, toiture plate, isolation et photovoltaïque.",
  alternates: { canonical: "/realisations" },
}

const trail = [
  { name: "Accueil", path: "/" },
  { name: "Réalisations", path: "/realisations" },
]

export default function RealisationsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />

      <section className="border-b border-border bg-navy-50">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Breadcrumbs trail={trail} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="prose-lazo max-w-3xl">
          <h1 className="text-navy-900">Nos types d&apos;interventions</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Chaque toiture pose un problème particulier. Voici les grandes familles de chantiers
            que nous menons en province de Liège, et ce qui les caractérise techniquement.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group overflow-hidden rounded-xl border border-border bg-card transition hover:border-gold-400 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-navy-950/70 px-2.5 py-1 text-[0.7rem] font-medium text-white/90 backdrop-blur">
                  <Camera className="h-3 w-3" aria-hidden />
                  Illustration
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-lg font-bold text-navy-900">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.shortDescription}.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition group-hover:gap-2.5">
                  Voir le détail technique
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Photo authentique issue de nos chantiers, distinguée des illustrations. */}
        <div className="mt-16 grid gap-10 rounded-2xl border border-border bg-navy-50 p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/img/chantiers/sous-toiture-corniche-zinc.jpg"
              alt="Chantier Lazo : écran sous-toiture et liteaunage neufs, corniche en zinc et souche de cheminée habillée d'ardoises"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="prose-lazo">
            <p className="text-xs font-bold uppercase tracking-wider text-gold-700">
              Chantier réalisé
            </p>
            <h2 className="mt-2 text-2xl text-navy-900">
              Sous-toiture, liteaunage et corniche en zinc
            </h2>
            <p className="mt-4 text-muted-foreground">
              Une rénovation en cours, prise depuis l&apos;échafaudage. On y voit l&apos;écran
              sous-toiture et le liteaunage neufs sur le versant, la corniche en zinc reprise dans
              la foulée, et la souche de cheminée réhabillée en ardoises.
            </p>
            <p className="mt-3 text-muted-foreground">
              C&apos;est exactement le genre de raccord dont dépend l&apos;étanchéité d&apos;une
              toiture : la jonction entre la couverture, la corniche et la cheminée est
              l&apos;endroit où naissent la plupart des infiltrations que nous diagnostiquons.
            </p>
          </div>
        </div>

        <p className="prose-lazo mt-10 max-w-3xl rounded-xl border border-border bg-background p-6 text-sm text-muted-foreground">
          Les visuels de la grille ci-dessus illustrent des types de travaux et ne représentent
          pas des chantiers spécifiques. Nous documentons chaque intervention par des photos
          avant et après, que nous remettons à nos clients à la réception — demandez-nous des
          références de chantiers comparables au vôtre lors de la visite.
        </p>
      </section>

      <CtaBand />
    </>
  )
}
