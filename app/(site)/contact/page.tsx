import Link from "next/link"
import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { QuoteWizard } from "@/components/quote-wizard"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { site, telHref } from "@/lib/site"
import { COMMUNES } from "@/lib/communes"
import { JsonLd, breadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Contact — Couvreur en province de Liège",
  description: `Contactez ${site.name} : téléphone, e-mail et formulaire. Couvreur à Liège, Herstal et dans quatorze communes de la province.`,
  alternates: { canonical: "/contact" },
}

const trail = [
  { name: "Accueil", path: "/" },
  { name: "Contact", path: "/contact" },
]

const DAYS: Record<string, string> = {
  Monday: "Lundi",
  Tuesday: "Mardi",
  Wednesday: "Mercredi",
  Thursday: "Jeudi",
  Friday: "Vendredi",
  Saturday: "Samedi",
  Sunday: "Dimanche",
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />

      <section className="border-b border-border bg-navy-50">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Breadcrumbs trail={trail} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h1 className="text-navy-900">Nous contacter</h1>
            <p className="prose-lazo mt-5 text-lg text-muted-foreground">
              Le téléphone reste le plus direct pour une question rapide. Pour un projet de
              rénovation, le parcours de devis nous permet de préparer la visite avec les
              bonnes informations en main.
            </p>

            <ul className="mt-9 space-y-5">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-400">
                  <Phone className="h-5 w-5 text-navy-900" aria-hidden />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Téléphone</p>
                  <a href={telHref} className="text-lg font-bold text-navy-900 hover:underline">
                    {site.phoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-400">
                  <Mail className="h-5 w-5 text-navy-900" aria-hidden />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="font-semibold text-navy-900 hover:underline"
                  >
                    {site.email}
                  </a>
                </div>
              </li>

              {site.address.street && (
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-400">
                    <MapPin className="h-5 w-5 text-navy-900" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">Adresse</p>
                    <p className="font-semibold text-navy-900">
                      {site.address.street}
                      <br />
                      {site.address.postalCode} {site.address.locality}
                    </p>
                  </div>
                </li>
              )}

              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-400">
                  <Clock className="h-5 w-5 text-navy-900" aria-hidden />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Horaires</p>
                  <ul className="mt-1 space-y-0.5 text-sm font-medium text-navy-900">
                    {site.hours.map((h) => (
                      <li key={h.days.join()}>
                        {DAYS[h.days[0]]}
                        {h.days.length > 1 && ` – ${DAYS[h.days[h.days.length - 1]]}`} :{" "}
                        {h.opens} – {h.closes}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            <div className="mt-10 rounded-xl border border-border bg-navy-50 p-6">
              <h2 className="text-base font-bold text-navy-900">Communes desservies</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {COMMUNES.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/zones/${c.slug}`}
                    className="rounded-full bg-background px-3 py-1.5 text-sm transition hover:bg-gold-50"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-card p-7 sm:p-9">
              <h2 className="text-2xl text-navy-900">Décrivez votre projet</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Quelques questions, environ deux minutes.
              </p>
              <div className="mt-8">
                <QuoteWizard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
