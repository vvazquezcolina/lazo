import type { MetadataRoute } from "next"
import { site } from "@/lib/site"
import { SERVICES } from "@/lib/services"
import { COMMUNES } from "@/lib/communes"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Les pages légales (/mentions-legales, /confidentialite) et /devis sont en
  // noindex : les lister ici ferait remonter une erreur de couverture dans
  // Search Console. Une page noindex n'a rien à faire dans un sitemap.
  const statics: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/zones`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/primes-wallonie`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/prix-toiture`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/realisations`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/a-propos`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.url}/contact`, changeFrequency: "yearly", priority: 0.7 },
  ]

  const services: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.85,
  }))

  const zones: MetadataRoute.Sitemap = COMMUNES.map((c) => ({
    url: `${site.url}/zones/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...statics, ...services, ...zones].map((e) => ({ ...e, lastModified: now }))
}
