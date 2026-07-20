import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowLeft } from "lucide-react"
import { site, telHref } from "@/lib/site"

/**
 * Habillage minimal du parcours de devis.
 *
 * Pas de menu, pas de pied de page, pas de liens vers d'autres pages : sur un
 * formulaire, chaque lien est une sortie possible. On ne garde que le logo
 * (retour à l'accueil, sans lequel le visiteur se sent piégé), le numéro de
 * téléphone — c'est une alternative de conversion, pas une distraction — et
 * les mentions légales indispensables.
 */
export default function DevisLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-navy-50/60">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-navy-900"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">Retour au site</span>
            <Image
              src="/images/lazo-logo-2025.png"
              alt={site.name}
              width={1000}
              height={397}
              priority
              className="ml-1 h-8 w-auto"
            />
          </Link>

          <a
            href={telHref}
            aria-label={`Appeler le ${site.phoneDisplay}`}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-navy-900 transition hover:bg-navy-50"
          >
            <Phone className="h-4 w-4 text-gold-500" aria-hidden />
            <span className="hidden sm:inline">{site.phoneDisplay}</span>
          </a>
        </div>
      </header>

      <main id="contenu" className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-3xl flex-col gap-2 px-6 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.legalName}
            {site.vat && <> · TVA {site.vat}</>}
          </p>
          <Link href="/confidentialite" className="transition hover:text-navy-900">
            Vie privée
          </Link>
        </div>
      </footer>
    </div>
  )
}
