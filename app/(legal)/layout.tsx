import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

/**
 * Habillage des pages légales.
 *
 * Identique au groupe (site), à une exception près : pas de section d'avis.
 * Une preuve sociale au bas de mentions légales ou d'une politique de
 * confidentialité n'a pas de sens — on y vient pour vérifier une information,
 * pas pour être convaincu. Pas de bouton WhatsApp non plus, pour la même
 * raison.
 */
export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="contenu">{children}</main>
      <SiteFooter />
    </>
  )
}
