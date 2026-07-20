import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { site, telHref } from "@/lib/site"
import { SERVICES } from "@/lib/services"
import { COMMUNES } from "@/lib/communes"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

/**
 * La page 404 vit à la racine (hors du groupe (site)) pour intercepter toutes
 * les routes inconnues : elle importe donc l'habillage elle-même.
 */
export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
      <p className="font-display text-6xl font-extrabold text-navy-100">404</p>
      <h1 className="mt-4 text-navy-900">Cette page n&apos;existe pas</h1>
      <p className="prose-lazo mx-auto mt-5 max-w-lg text-muted-foreground">
        Le lien est peut-être ancien ou comporte une erreur. Voici par où reprendre — et si vous
        cherchez quelque chose de précis, un appel ira plus vite.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-7 py-3.5 font-bold text-navy-900 transition hover:bg-gold-300"
        >
          Retour à l&apos;accueil
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

      <div className="mt-14 text-left">
        <h2 className="text-base font-bold text-navy-900">Nos services</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-full border border-border px-3.5 py-1.5 text-sm transition hover:border-gold-400 hover:bg-gold-50"
            >
              {s.title}
            </Link>
          ))}
        </div>

        <h2 className="mt-8 text-base font-bold text-navy-900">Zones d&apos;intervention</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {COMMUNES.map((c) => (
            <Link
              key={c.slug}
              href={`/zones/${c.slug}`}
              className="rounded-full border border-border px-3.5 py-1.5 text-sm transition hover:border-gold-400 hover:bg-gold-50"
            >
              {c.name}
            </Link>
          ))}
        </div>
        </div>
      </section>
      <SiteFooter />
    </>
  )
}
