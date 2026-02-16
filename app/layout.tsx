import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Lazo Group | Couvreur Herstal & Liège — Toiture, Photovoltaïque, Isolation",
    template: "%s | Lazo Group",
  },
  description:
    "Expert couvreur à Herstal et Liège. Rénovation toiture, bardage, toiture plate, panneaux solaires et isolation façade. Devis gratuit. ☎ 0470 10 95 25.",
  keywords: [
    "couvreur Herstal",
    "toiture Herstal",
    "couvreur Liège",
    "panneaux solaires Herstal",
    "panneaux solaires Liège",
    "isolation façade Herstal",
    "bardage Herstal",
    "rénovation toiture Liège",
    "installation photovoltaïque Wallonie",
    "crépis isolant K60",
    "entreprise toiture Herstal",
    "devis toiture Herstal",
    "Lazo Group",
  ],
  openGraph: {
    title: "Lazo Group | Couvreur Herstal & Liège",
    description:
      "Expert en rénovation toiture, bardage, panneaux solaires et isolation façade à Herstal et région Liégeoise. Devis gratuit.",
    url: "https://www.lazotoiture.be",
    siteName: "Lazo Group",
    locale: "fr_BE",
    type: "website",
    images: [
      {
        url: "https://www.lazotoiture.be/images/og-lazo-group.jpg",
        width: 1200,
        height: 630,
        alt: "Lazo Group - Couvreur expert à Herstal et Liège",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lazo Group | Couvreur Herstal & Liège",
    description:
      "Expert couvreur à Herstal. Toiture, panneaux solaires, bardage, isolation façade. Devis gratuit ☎ 0470 10 95 25.",
    images: ["https://www.lazotoiture.be/images/og-lazo-group.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // ─── Schema: LocalBusiness ────────────────────────────────────
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": "https://www.lazotoiture.be/#organization",
    name: "Lazo Group",
    alternateName: "Lazo Toitures et Photovoltaïques",
    image: "https://www.lazotoiture.be/images/lazo-logo-2025.png",
    logo: "https://www.lazotoiture.be/images/lazo-logo-2025.png",
    description:
      "Expert couvreur à Herstal et Liège. Rénovation toiture, bardage, toiture plate, panneaux solaires et isolation façade crépis. 15 ans d'expérience. Devis gratuit.",
    url: "https://www.lazotoiture.be",
    telephone: "+32 470 10 95 25",
    email: "info@lazogroup.be",
    foundingDate: "2010",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rue Hoyoux 90",
      addressLocality: "Herstal",
      postalCode: "4040",
      addressCountry: "BE",
      addressRegion: "Wallonie",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.6613607,
      longitude: 5.626413,
    },
    areaServed: [
      { "@type": "City", name: "Herstal" },
      { "@type": "City", name: "Liège" },
      { "@type": "City", name: "Oupeye" },
      { "@type": "City", name: "Seraing" },
      { "@type": "City", name: "Visé" },
      { "@type": "City", name: "Ans" },
      { "@type": "City", name: "Grâce-Hollogne" },
      { "@type": "City", name: "Flémalle" },
      { "@type": "City", name: "Beyne-Heusay" },
      { "@type": "City", name: "Fléron" },
      { "@type": "AdministrativeArea", name: "Province de Liège" },
    ],
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    currenciesAccepted: "EUR",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+32 470 10 95 25",
      email: "info@lazogroup.be",
      areaServed: "BE",
      availableLanguage: ["French", "Dutch", "Turkish"],
    },
    sameAs: [
      "https://www.facebook.com/people/Lazo-Toitures-et-Photovolta%C3%AFques/100094147226820/",
      "https://www.instagram.com/lazo.toiture/",
      "https://maps.app.goo.gl/bD3JB9MwB4UaY7vx8",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Lazo Group",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Rénovation et réparation de toiture",
            description:
              "Rénovation complète, réparation de fuites, remplacement de tuiles et ardoises. Conforme K60 2025.",
            url: "https://www.lazotoiture.be/toiture",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bardage",
            description:
              "Solutions de bardage pour protéger et embellir votre bâtiment avec isolation thermique intégrée.",
            url: "https://www.lazotoiture.be/bardage",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Toiture plate (Plate-forme)",
            description:
              "Installation et rénovation de toitures plates avec étanchéité EPDM et isolation performante.",
            url: "https://www.lazotoiture.be/plate-forme",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Installation panneaux solaires photovoltaïques",
            description:
              "Panneaux solaires monocristallins et batteries LiFePO4. Autonomie 70-80%. ROI 7-10 ans.",
            url: "https://www.lazotoiture.be/photovoltaique",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Isolation façade et crépis",
            description:
              "Crépis isolant conforme K60. Réduction des déperditions thermiques de 25-30%. 120+ teintes.",
            url: "https://www.lazotoiture.be/facade",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "22",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Hasan Erdogan" },
        datePublished: "2026-01-15",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Les travailleurs ont été d'une méticulosité extrême, le patron était sur place et a fait tout son possible pour avoir un résultat vraiment parfait ! Cette société utilise du matériel de haute qualité et connaît son métier !",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "RACHEL NOIROT" },
        datePublished: "2025-12-10",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Nous avons choisi la société Lazo pour refaire entièrement notre toiture. Nous sommes ravis du travail effectué. Cela a pris 9 jours et le travail a été très propre et très bien réalisé.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Mickaël Rommes" },
        datePublished: "2025-11-20",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Un tout grand merci à la société LAZO Energy pour ce magnifique travail ! Rénovation complète toiture. Une très bonne équipe sympathique que je recommande sans hésiter !",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Maunaert Energie" },
        datePublished: "2025-10-05",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Service au top, très professionnel, serviable, gentil et avec beaucoup d'humour. Ils ont un expert technique au top et un service après-vente excellent.",
      },
    ],
  }

  // ─── Schema: BreadcrumbList ───────────────────────────────────
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.lazotoiture.be" },
      { "@type": "ListItem", position: 2, name: "Toiture", item: "https://www.lazotoiture.be/toiture" },
      { "@type": "ListItem", position: 3, name: "Bardage", item: "https://www.lazotoiture.be/bardage" },
      { "@type": "ListItem", position: 4, name: "Plate-forme", item: "https://www.lazotoiture.be/plate-forme" },
      { "@type": "ListItem", position: 5, name: "Photovoltaïque", item: "https://www.lazotoiture.be/photovoltaique" },
      { "@type": "ListItem", position: 6, name: "Isolation façade", item: "https://www.lazotoiture.be/facade" },
      { "@type": "ListItem", position: 7, name: "Contact", item: "https://www.lazotoiture.be/contact" },
    ],
  }

  // ─── Schema: FAQPage (global) ─────────────────────────────────
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quel est le meilleur couvreur à Herstal ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lazo Group est un couvreur expert à Herstal avec 15 ans d'expérience, noté 5/5 sur Google avec 22 avis positifs. Nous proposons toiture, bardage, panneaux solaires et isolation façade. Contactez-nous au 0470 10 95 25 pour un devis gratuit.",
        },
      },
      {
        "@type": "Question",
        name: "Quels services propose Lazo Group ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lazo Group propose 5 services : rénovation de toiture, bardage, toiture plate (plate-forme), installation de panneaux solaires photovoltaïques, et isolation de façade avec crépis isolant. Tous nos services sont conformes aux normes K60 2025 en Wallonie.",
        },
      },
      {
        "@type": "Question",
        name: "Comment contacter Lazo Group ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vous pouvez contacter Lazo Group par téléphone au 0470 10 95 25, par email à info@lazogroup.be, ou nous rendre visite à Rue Hoyoux 90, 4040 Herstal, Belgique. Nous sommes ouverts du lundi au samedi de 9h à 17h.",
        },
      },
      {
        "@type": "Question",
        name: "Combien coûte une rénovation de toiture à Herstal ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le coût d'une rénovation de toiture à Herstal dépend de la surface, du type de couverture et de l'isolation. Lazo Group propose un diagnostic gratuit et un devis détaillé sans engagement. Des primes Wallonie allant jusqu'à 5.000€ sont disponibles en 2025.",
        },
      },
      {
        "@type": "Question",
        name: "Les panneaux solaires sont-ils rentables en Belgique ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, les panneaux solaires sont rentables en Belgique avec un retour sur investissement de 7 à 10 ans. Un système de 4kWc produit environ 4.500 kWh/an en Wallonie, réduisant la facture d'électricité de 50 à 60%. Des subventions et le Rénoprêt 0% sont disponibles.",
        },
      },
    ],
  }

  // ─── Schema: Speakable (Voice Search / Siri / Alexa) ──────────
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Lazo Group - Couvreur à Herstal et Liège",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [
        "h1",
        ".speakable-answer",
        "[data-speakable]",
      ],
    },
    url: "https://www.lazotoiture.be",
  }

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#09093d" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="geo.region" content="BE-WLG" />
        <meta name="geo.placename" content="Herstal" />
        <meta name="geo.position" content="50.6613607;5.626413" />
        <meta name="ICBM" content="50.6613607, 5.626413" />
        <link rel="canonical" href="https://www.lazotoiture.be" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/icon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/images/icon-192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/images/icon-192.png" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      </head>
      <body className={`${_geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
