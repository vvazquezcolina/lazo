import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react"
import { site, telHref } from "@/lib/site"
import { CookiePreferencesLink } from "@/components/cookie-consent"
import { SERVICES } from "@/lib/services"
import { COMMUNES } from "@/lib/communes"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Image
              src="/images/lazo-logo-2025.png"
              alt={site.name}
              width={1000}
              height={397}
              className="h-11 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Couvreur en province de Liège. Rénovation de toiture, isolation,
              toiture plate, photovoltaïque et bardage.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href={telHref} className="flex items-center gap-3 transition hover:text-gold-400">
                  <Phone className="h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                  <span className="font-semibold">{site.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-white/70 transition hover:text-gold-400">
                  <Mail className="h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                  {site.email}
                </a>
              </li>
              {site.address.street && (
                <li className="flex items-start gap-3 text-white/70">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                  <span>
                    {site.address.street}
                    <br />
                    {site.address.postalCode} {site.address.locality}
                  </span>
                </li>
              )}
            </ul>

            {site.credentials.rcDecennale && (
              <p className="mt-6 flex items-start gap-2 text-xs text-white/60">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                Entreprise assurée en responsabilité civile professionnelle et décennale.
              </p>
            )}
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold-400">Nos services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-white/70 transition hover:text-white">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold-400">Zones d&apos;intervention</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {COMMUNES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/zones/${c.slug}`} className="text-white/70 transition hover:text-white">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold-400">Informations</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { href: "/primes-wallonie", label: "Primes Wallonie" },
                { href: "/prix-toiture", label: "Prix d'une toiture" },
                { href: "/realisations", label: "Réalisations" },
                { href: "/a-propos", label: "À propos" },
                { href: "/contact", label: "Contact" },
                { href: "/devis", label: "Devis gratuit" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/70 transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. Tous droits réservés.
            {site.vat && <> · TVA {site.vat}</>}
          </p>
          <div className="flex gap-5">
            <Link href="/mentions-legales" className="transition hover:text-white">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="transition hover:text-white">
              Vie privée
            </Link>
            <CookiePreferencesLink className="transition hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  )
}
