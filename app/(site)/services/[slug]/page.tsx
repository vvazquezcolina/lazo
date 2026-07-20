import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowRight, Check, Phone } from "lucide-react"
import { SERVICES, getService } from "@/lib/services"
import { COMMUNES } from "@/lib/communes"
import { site, telHref } from "@/lib/site"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CtaBand } from "@/components/cta-band"
import { Faq } from "@/components/faq"
import { JsonLd, faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema"

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const s = getService(slug)
  if (!s) return {}

  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: `${site.url}/services/${s.slug}`,
      images: [{ url: s.image, alt: s.imageAlt }],
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4)
  const trail = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ]

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.schemaName,
            description: service.metaDescription,
            url: `${site.url}/services/${service.slug}`,
            image: `${site.url}${service.image}`,
          }),
          faqSchema(service.faq),
          breadcrumbSchema(trail),
        ]}
      />

      {/* --------------------------------------------------------- En-tête */}
      <section className="border-b border-border bg-navy-50">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Breadcrumbs trail={trail} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="text-sm font-bold uppercase tracking-wider text-gold-700">
              {service.tagline}
            </p>
            <h1 className="mt-3 text-navy-900">{service.h1}</h1>

            <ul className="mt-8 space-y-3">
              {service.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400">
                    <Check className="h-3 w-3 text-navy-900" strokeWidth={3} aria-hidden />
                  </span>
                  <span className="text-muted-foreground">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/devis"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-7 py-3.5 font-bold text-navy-900 transition hover:bg-gold-300"
              >
                Devis gratuit
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
              src={service.image}
              alt={service.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Contenu */}
      <section className="border-y border-border bg-navy-50">
        <div className="prose-lazo mx-auto max-w-3xl px-6 py-16 sm:py-20">
          {service.sections.map((sec) => (
            <article key={sec.heading} className="mb-12 last:mb-0">
              <h2 className="rule-gold text-navy-900">{sec.heading}</h2>
              <div className="mt-6 space-y-4">
                {sec.body.map((p, i) => (
                  <p key={i} className="text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------ Maillage communes */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <h2 className="rule-gold">
          {service.title} près de chez vous
        </h2>
        <p className="prose-lazo mt-6 max-w-2xl text-muted-foreground">
          Nous intervenons dans quatorze communes de la province de Liège. Chaque page détaille
          les particularités du bâti local et ce que nous y rencontrons le plus souvent.
        </p>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {COMMUNES.map((c) => (
            <Link
              key={c.slug}
              href={`/zones/${c.slug}`}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition hover:border-gold-400 hover:bg-gold-50"
            >
              {service.title} à {c.name}
            </Link>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------- Autres services */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <h2 className="rule-gold">Nos autres prestations</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group overflow-hidden rounded-xl border border-border bg-card transition hover:border-gold-400 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{s.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Faq items={service.faq} title={`${service.title} — questions fréquentes`} />
      <CtaBand />
    </>
  )
}
