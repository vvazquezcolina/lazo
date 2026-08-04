import type { Metadata } from "next"
import { Eye, ShieldCheck, Clock } from "lucide-react"
import { QuoteWizard } from "@/components/quote-wizard"

export const metadata: Metadata = {
  title: "Devis gratuit toiture — Liège & province",
  description:
    "Demandez un devis gratuit et sans engagement pour vos travaux de toiture en province de Liège. Quelques questions, deux minutes. Devis détaillé sous 24 h.",
  alternates: { canonical: "/devis" },
  // Page de conversion : inutile de la faire remonter dans les résultats,
  // les visiteurs y arrivent depuis le site.
  robots: { index: false, follow: true },
}

const PROMISES = [
  { icon: Eye, label: "Visite sur place" },
  { icon: ShieldCheck, label: "Devis détaillé poste par poste" },
  { icon: Clock, label: "Réponse sous 24 h" },
]

export default function DevisPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
      <div className="mb-8 text-center">
        <h1 className="text-3xl text-navy-900 sm:text-4xl">Demander un devis gratuit</h1>
        <p className="prose-lazo mx-auto mt-3 max-w-lg text-muted-foreground">
          Quelques questions, environ deux minutes. Le déplacement et le devis
          écrit sont gratuits et sans engagement.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-9">
        <QuoteWizard />
      </div>

      <ul className="mt-8 flex flex-col justify-center gap-4 text-sm text-muted-foreground sm:flex-row sm:gap-8">
        {PROMISES.map((p) => (
          <li key={p.label} className="flex items-center justify-center gap-2">
            <p.icon className="h-4 w-4 shrink-0 text-gold-500" aria-hidden />
            {p.label}
          </li>
        ))}
      </ul>
    </section>
  )
}
