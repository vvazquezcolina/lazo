"use client"

import Script from "next/script"
import { GA_MEASUREMENT_ID } from "@/lib/site"

/**
 * Google Analytics 4 avec Consent Mode v2.
 *
 * Le refus par défaut est déclaré AVANT le chargement de gtag : tant que le
 * visiteur n'a pas accepté, aucun cookie d'analyse n'est déposé et les hits
 * sont envoyés sans identifiant (modélisation). C'est l'implémentation exigée
 * par le RGPD et par la directive ePrivacy — charger gtag sans ce garde-fou
 * constitue une infraction, et l'autorité belge de protection des données
 * sanctionne ce point.
 *
 * Le passage à « granted » est déclenché par components/cookie-consent.tsx.
 */
export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null

  return (
    <>
      {/* Doit s'exécuter avant gtag.js */}
      <Script id="gtag-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            functionality_storage: 'granted',
            security_storage: 'granted',
            wait_for_update: 500
          });
          gtag('set', 'ads_data_redaction', true);
          gtag('set', 'url_passthrough', true);
        `}
      </Script>

      <Script
        id="gtag-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />

      <Script id="gtag-init" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  )
}
