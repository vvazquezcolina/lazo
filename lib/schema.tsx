import { site } from "./site"
import { SERVICES } from "./services"
import { COMMUNES } from "./communes"

/**
 * Données structurées schema.org.
 *
 * Règle absolue : rien ici ne doit décrire une réalité que l'entreprise
 * ne peut pas prouver. Un aggregateRating fabriqué expose à une action
 * manuelle de Google — et détruit précisément le classement qu'on cherche.
 * Le bloc d'avis n'est émis que si site.reviews.enabled vaut true.
 */

const ID = `${site.url}/#business`

export function localBusinessSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": ID,
    // Dénomination identique à la fiche Google Business Profile : c'est cette
    // correspondance qui permet d'adosser le site à l'établissement.
    name: site.gbpName,
    alternateName: site.name,
    legalName: site.legalName,
    url: site.url,
    image: `${site.url}/img/og-lazo-toiture.jpg`,
    logo: `${site.url}/images/lazo-logo-2025.png`,
    description:
      "Couvreur en province de Liège : rénovation de toiture, isolation, étanchéité de toiture plate, panneaux photovoltaïques et bardage de façade.",
    telephone: site.phone,
    email: site.email,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    address: {
      "@type": "PostalAddress",
      ...(site.address.street ? { streetAddress: site.address.street } : {}),
      addressLocality: site.address.locality,
      postalCode: site.address.postalCode,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: COMMUNES.map((c) => ({
      "@type": "City",
      name: c.name,
      address: {
        "@type": "PostalAddress",
        postalCode: c.postalCode,
        addressCountry: "BE",
      },
    })),
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de couverture et rénovation",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.schemaName,
          url: `${site.url}/services/${s.slug}`,
        },
      })),
    },
    knowsLanguage: ["fr-BE"],
  }

  if (site.vat) schema.vatID = site.vat
  if (site.bce) schema.taxID = site.bce

  const sameAs = [site.social.facebook, site.social.instagram, site.reviews.profileUrl].filter(Boolean)
  if (sameAs.length) schema.sameAs = sameAs

  // N'émettre l'agrégat d'avis que s'il correspond à de vrais avis vérifiables.
  if (site.reviews.enabled && site.reviews.ratingValue && site.reviews.reviewCount) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: site.reviews.ratingValue,
      reviewCount: site.reviews.reviewCount,
      bestRating: 5,
      worstRating: 1,
    }
  }

  return schema
}

export function serviceSchema(opts: {
  name: string
  description: string
  url: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    ...(opts.image ? { image: opts.image } : {}),
    provider: { "@id": ID },
    serviceType: opts.name,
    areaServed: COMMUNES.map((c) => ({ "@type": "City", name: c.name })),
  }
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  }
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${site.url}${t.path}`,
    })),
  }
}

/** Insère un bloc JSON-LD. */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
