import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
import { site, telHref } from "@/lib/site"

export function CtaBand({
  title = "Un doute sur l'état de votre toiture ?",
  body = "Nous passons voir, nous montons regarder, et nous vous disons ce qu'il en est. La visite et le devis sont gratuits et sans engagement — y compris quand la réponse est qu'il n'y a rien à faire.",
}: {
  title?: string
  body?: string
}) {
  return (
    <section className="bg-navy-900 bg-grid-navy">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
        <h2 className="text-white">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/75">{body}</p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/devis"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold-400 px-7 py-3.5 font-bold text-navy-900 shadow-sm transition hover:bg-gold-300 sm:w-auto"
          >
            Demander un devis gratuit
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a
            href={telHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/25 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
