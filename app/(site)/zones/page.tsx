import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, MapPin } from "lucide-react"
import { COMMUNES } from "@/lib/communes"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CtaBand } from "@/components/cta-band"
import { JsonLd, breadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Zones d'intervention — Couvreur en province de Liège",
  description:
    "Nous intervenons à Liège, Herstal, Oupeye, Ans, Seraing, Saint-Nicolas, Fléron, Visé, Beyne-Heusay, Grâce-Hollogne, Awans, Juprelle, Blegny et Soumagne.",
  alternates: { canonical: "/zones" },
}

const trail = [
  { name: "Accueil", path: "/" },
  { name: "Zones d'intervention", path: "/zones" },
]

export default function ZonesPage() {
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
          <h1 className="text-navy-900">Où nous intervenons</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Nous couvrons quatorze communes de la province de Liège. Ce périmètre est volontairement
            resserré : au-delà, nous ne pouvons plus garantir un délai correct en cas de fuite
            active, ni revenir rapidement si un point doit être repris après le chantier. Nous
            préférons le dire plutôt que de promettre une couverture régionale que personne ne tient.
          </p>
          <p className="mt-4 text-muted-foreground">
            Le bâti change beaucoup d&apos;une commune à l&apos;autre. Les rangées mitoyennes du
            centre de Liège, les lotissements des années 1970 de Herstal, les corps de ferme
            hesbignons d&apos;Awans et les maisons du plateau de Herve ne posent pas les mêmes
            problèmes. Chaque page détaille ce que nous rencontrons réellement sur place.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COMMUNES.map((c) => (
            <Link
              key={c.slug}
              href={`/zones/${c.slug}`}
              className="group rounded-xl border border-border bg-card p-6 transition hover:border-gold-400 hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-gold-700">
                <MapPin className="h-4 w-4" aria-hidden />
                {c.postalCode}
              </div>
              <h2 className="mt-2 text-xl font-bold text-navy-900">{c.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.focus}.</p>

              {c.sections.length > 0 && (
                <p className="mt-3 text-xs text-muted-foreground/80">
                  {c.sections.slice(0, 4).join(" · ")}
                  {c.sections.length > 4 && " …"}
                </p>
              )}

              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition group-hover:gap-2.5">
                Couvreur à {c.name}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
