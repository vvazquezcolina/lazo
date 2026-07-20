"use client"

import { useEffect } from "react"
import * as CC from "vanilla-cookieconsent"
import "vanilla-cookieconsent/dist/cookieconsent.css"
import { site } from "@/lib/site"

/**
 * Bandeau de consentement (vanilla-cookieconsent).
 *
 * Il pilote Google Consent Mode v2 : tant que la catégorie « analytics » n'est
 * pas acceptée, gtag reste en mode refusé et ne dépose aucun cookie.
 *
 * Le bouton « Refuser » est au même niveau visuel que « Accepter » — c'est une
 * exigence : un refus rendu plus difficile que l'acceptation invalide le
 * consentement au sens du RGPD et fait l'objet de sanctions régulières.
 */
function updateGtagConsent() {
  const granted = CC.acceptedCategory("analytics")
  const g = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof g !== "function") return
  g("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
  })
}

export function CookieConsent() {
  useEffect(() => {
    CC.run({
      guiOptions: {
        consentModal: { layout: "box", position: "bottom left" },
        preferencesModal: { layout: "box" },
      },

      categories: {
        necessary: { enabled: true, readOnly: true },
        analytics: {
          enabled: false,
          autoClear: {
            cookies: [{ name: /^_ga/ }, { name: "_gid" }],
          },
        },
      },

      onFirstConsent: updateGtagConsent,
      onConsent: updateGtagConsent,
      onChange: updateGtagConsent,

      language: {
        default: "fr",
        translations: {
          fr: {
            consentModal: {
              title: "Nous utilisons des cookies",
              description:
                "Ce site dépose des cookies techniques nécessaires à son fonctionnement. Nous aimerions également mesurer l'audience des pages pour comprendre ce qui vous est utile. Vous pouvez refuser sans conséquence sur votre navigation.",
              acceptAllBtn: "Tout accepter",
              acceptNecessaryBtn: "Refuser",
              showPreferencesBtn: "Personnaliser",
              footer: `<a href="/confidentialite">Politique de confidentialité</a><a href="/mentions-legales">Mentions légales</a>`,
            },
            preferencesModal: {
              title: "Préférences de cookies",
              acceptAllBtn: "Tout accepter",
              acceptNecessaryBtn: "Tout refuser",
              savePreferencesBtn: "Enregistrer mes choix",
              closeIconLabel: "Fermer",
              sections: [
                {
                  title: "Cookies strictement nécessaires",
                  description:
                    "Indispensables au fonctionnement du site : mémorisation de vos choix de consentement et sécurité du formulaire de devis. Ils ne peuvent pas être désactivés et ne servent à aucun suivi.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Mesure d'audience",
                  description:
                    "Google Analytics, pour savoir quelles pages sont consultées et d'où viennent les visiteurs. Les adresses IP sont anonymisées. Tant que vous n'avez pas accepté, aucun cookie de mesure n'est déposé.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Vos droits",
                  description: `Vous pouvez modifier vos choix à tout moment depuis le lien en pied de page. Pour toute question sur vos données : <a href="mailto:${site.email}">${site.email}</a>.`,
                },
              ],
            },
          },
        },
      },
    })
  }, [])

  return null
}

/** Rouvre le panneau de préférences — utilisé depuis le pied de page. */
export function CookiePreferencesLink({ className }: { className?: string }) {
  return (
    <button type="button" onClick={() => CC.showPreferences()} className={className}>
      Gérer les cookies
    </button>
  )
}
