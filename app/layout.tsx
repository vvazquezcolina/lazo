import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@/components/analytics"
import { CookieConsent } from "@/components/cookie-consent"
import { JsonLd, localBusinessSchema } from "@/lib/schema"
import { site } from "@/lib/site"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Couvreur à Liège & Herstal | Rénovation de Toiture",
    template: "%s | Lazo",
  },
  description:
    "Couvreur agréé en province de Liège. Rénovation de toiture, isolation, toiture plate, photovoltaïque et bardage. Devis gratuit sous 24 h.",
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: site.url,
    siteName: site.name,
    title: "Couvreur à Liège & Herstal | Lazo Toiture & Photovoltaïque",
    description:
      "Rénovation de toiture, isolation, toiture plate, photovoltaïque et bardage en province de Liège. Diagnostic honnête, garantie décennale.",
    images: [
      {
        url: "/img/og-lazo-toiture.jpg",
        width: 1344,
        height: 768,
        alt: "Toiture en ardoise rénovée sur une maison en brique de la région liégeoise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Couvreur à Liège & Herstal | Lazo Toiture",
    description: "Rénovation de toiture, isolation, bardage et photovoltaïque en province de Liège. Devis gratuit sous 24 h.",
    images: ["/img/og-lazo-toiture.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: true },
}

export const viewport: Viewport = {
  themeColor: "#09093d",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr-BE" className={`${inter.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu principal
        </a>
        {/* L'en-tête et le pied de page sont fournis par app/(site)/layout.tsx :
            le parcours de devis s'en passe volontairement. */}
        {children}
        <JsonLd data={localBusinessSchema()} />
        <GoogleAnalytics />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
