import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowRight, MapPin, Phone, Check } from "lucide-react"
import { COMMUNES, getCommune, getNeighbors } from "@/lib/communes"
import { SERVICES } from "@/lib/services"
import { site, telHref } from "@/lib/site"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CtaBand } from "@/components/cta-band"
import { Faq } from "@/components/faq"
import { JsonLd, faqSchema, breadcrumbSchema } from "@/lib/schema"

export function generateStaticParams() {
  return COMMUNES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const c = getCommune(slug)
  if (!c) return {}

  const title = `Couvreur à ${c.name} (${c.postalCode}) | Rénovation de Toiture`
  const description = `Couvreur à ${c.name} : rénovation de toiture, isolation, toiture plate et photovoltaïque. Devis gratuit sous 24 h.`

  return {
    title,
    description,
    alternates: { canonical: `/zones/${c.slug}` },
    openGraph: {
      title,
      description,
      url: `${site.url}/zones/${c.slug}`,
      images: [{ url: "/img/og-lazo-toiture.jpg" }],
    },
  }
}

export default async function CommunePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const commune = getCommune(slug)
  if (!commune) notFound()

  const neighbors = getNeighbors(commune)
  const trail = [
    { name: "Accueil", path: "/" },
    { name: "Zones d'intervention", path: "/zones" },
    { name: commune.name, path: `/zones/${commune.slug}` },
  ]

  const localFaq = [
    {
      q: `Intervenez-vous dans toutes les sections de ${commune.name} ?`,
      a: `Oui. Nous couvrons l'ensemble du territoire communal de ${commune.name} (${commune.postalCode}), ${
        commune.sections.length
          ? `y compris ${commune.sections.slice(0, -1).join(", ")} et ${commune.sections.slice(-1)}`
          : "y compris ses différents quartiers"
      }.`,
    },
    {
      q: `Quel est le délai pour une visite à ${commune.name} ?`,
      a: `Nous proposons généralement un rendez-vous dans les jours qui suivent votre demande. Appelez-nous au ${site.phoneDisplay} ou remplissez le formulaire de devis : nous vous donnerons une date réaliste plutôt qu'une promesse que nous ne pourrions pas tenir.`,
    },
    {
      q: `Le déplacement à ${commune.name} est-il facturé ?`,
      a: `Non. ${commune.name} fait partie de notre zone d'intervention habituelle : le déplacement et le devis écrit sont gratuits et sans engagement.`,
    },
    {
      q: `Faut-il une autorisation communale pour rénover une toiture à ${commune.name} ?`,
      a: `Le remplacement d'une couverture à l'identique relève généralement des travaux dispensés de permis, mais toute modification d'aspect — matériau, teinte, forme, ajout de lucarne ou de fenêtres de toit — peut nécessiter une autorisation. Les règles diffèrent selon la localisation exacte du bien et son éventuelle inscription dans un périmètre protégé. Nous vérifions ce point auprès du service urbanisme de ${commune.name} avant le démarrage du chantier.`,
    },
  ]

  return (
    <>
      <JsonLd data={[faqSchema(localFaq), breadcrumbSchema(trail)]} />

      <section className="border-b border-border bg-navy-50">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Breadcrumbs trail={trail} />
        </div>
      </section>

      {/* --------------------------------------------------------- En-tête */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full bg-gold-100 px-4 py-1.5 text-sm font-semibold text-navy-900">
              <MapPin className="h-4 w-4" aria-hidden />
              {commune.name} · {commune.postalCode}
            </p>

            <h1 className="mt-5 text-navy-900">Couvreur à {commune.name}</h1>

            <p className="prose-lazo mt-6 text-lg text-muted-foreground">{commune.intro}</p>

            <p className="mt-5 rounded-lg border-l-4 border-gold-400 bg-gold-50 px-5 py-4 text-sm font-medium text-navy-900">
              Enjeu dominant sur place : {commune.focus.toLowerCase()}.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/devis"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-7 py-3.5 font-bold text-navy-900 transition hover:bg-gold-300"
              >
                Devis gratuit à {commune.name}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={telHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-7 py-3.5 font-semibold text-navy-900 transition hover:bg-navy-50"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {site.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-5">
            <Image
              src="/img/toiture-tuiles-renovee.jpg"
              alt="Toiture rénovée par Lazo : tuiles anthracite, rive en ardoise et corniche en zinc"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* -------------------------------------- Contexte local différenciant */}
      <section className="border-y border-border bg-navy-50">
        <div className="prose-lazo mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <h2 className="rule-gold text-navy-900">
            {commune.name} : le contexte qui compte pour votre toiture
          </h2>
          <div className="mt-6 space-y-4">
            {commune.context.map((p, i) => (
              <p key={i} className="text-muted-foreground">
                {p}
              </p>
            ))}
          </div>

          {commune.observed.length > 0 && (
            <div className="mt-10 rounded-xl border-l-4 border-gold-400 bg-gold-50 p-6">
              <h3 className="text-base font-bold text-navy-900">
                Ce que nous rencontrons sur nos chantiers à {commune.name}
              </h3>
              <div className="mt-4 space-y-3">
                {commune.observed.map((p, i) => (
                  <p key={i} className="text-sm text-navy-900/80">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          )}

          {commune.sections.length > 0 && (
            <div className="mt-10 rounded-xl border border-border bg-background p-6">
              <h3 className="text-base font-bold text-navy-900">
                Sections et villages desservis
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {commune.sections.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1.5 text-sm text-navy-900"
                  >
                    <Check className="h-3.5 w-3.5 text-gold-500" strokeWidth={3} aria-hidden />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ------------------------------------------- Services × cette commune */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <h2 className="rule-gold">Nos prestations à {commune.name}</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-xl border border-border bg-card p-6 transition hover:border-gold-400 hover:shadow-md"
            >
              <h3 className="text-base font-bold text-navy-900">
                {s.title} à {commune.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.shortDescription}.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition group-hover:gap-2.5">
                Détails
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------ Communes voisines */}
      {neighbors.length > 0 && (
        <section className="border-t border-border bg-navy-50">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <h2 className="text-2xl">Nous intervenons également à proximité</h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {neighbors.map((n) => (
                <Link
                  key={n.slug}
                  href={`/zones/${n.slug}`}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition hover:border-gold-400 hover:bg-gold-50"
                >
                  Couvreur à {n.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Faq items={localFaq} title={`Couvreur à ${commune.name} — questions fréquentes`} />
      <CtaBand
        title={`Un projet de toiture à ${commune.name} ?`}
        body="Nous passons voir, nous montons regarder, et nous vous disons ce qu'il en est. La visite et le devis sont gratuits et sans engagement."
      />
    </>
  )
}
