import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Reviews } from "@/components/reviews"

/**
 * Habillage des pages de contenu : en-tête et pied de page.
 *
 * Le parcours de devis (/devis) est volontairement hors de ce groupe : sur une
 * page dont l'unique objectif est la conversion, la navigation et le pied de
 * page ne sont que des portes de sortie. Il dispose de son propre habillage,
 * réduit au minimum.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="contenu">{children}</main>
      {/* Preuve sociale sur toutes les landings. Placée ici plutôt que page
          par page : /devis est hors de ce groupe de routes, il en est donc
          exclu par construction — pas de condition à maintenir. */}
      <Reviews />
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
