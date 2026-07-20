import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { SERVICES } from "@/lib/services"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CtaBand } from "@/components/cta-band"
import { JsonLd, breadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Nos services de couverture en province de Liège",
  description:
    "Rénovation de toiture, isolation de toiture et de combles, étanchéité de toiture plate et panneaux photovoltaïques en province de Liège.",
  alternates: { canonical: "/services" },
}

const trail = [
  { name: "Accueil", path: "/" },
  { name: "Services", path: "/services" },
]

export default function ServicesPage() {
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
          <h1 className="text-navy-900">Nos services</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Cinq prestations, et pas davantage. Couverture, isolation et étanchéité forment
            un seul système : traiter l&apos;un en ignorant les autres, c&apos;est la façon la plus
            sûre de voir revenir le problème un an plus tard, ailleurs sur le toit. Nous
            préférons maîtriser ce périmètre plutôt que de tout proposer.
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
              </div>
              <div className="p-6">
                <h2 className="text-lg font-bold text-navy-900">{s.title}</h2>
                <p className="mt-1 text-sm font-medium text-gold-700">{s.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.shortDescription}.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition group-hover:gap-2.5">
                  En savoir plus
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
