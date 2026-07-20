import type { MetadataRoute } from "next"
import { site } from "@/lib/site"

/**
 * robots.txt généré par Next.
 *
 * L'ancien fichier statique public/robots.txt a été supprimé : il entrait en
 * conflit avec cette route (erreur 500) et référençait deux sitemaps
 * inexistants (sitemap-services.xml, sitemap-zones.xml).
 *
 * On conserve en revanche son intention utile — autoriser explicitement les
 * robots des moteurs de réponse IA, qui pèsent de plus en plus dans la
 * découverte locale. Le nom « Claude-Web » qu'il utilisait est obsolète :
 * le robot d'Anthropic est « ClaudeBot ».
 */

const AI_CRAWLERS = [
  "Google-Extended", // entraînement et réponses génératives Google
  "GPTBot", // OpenAI
  "OAI-SearchBot", // recherche ChatGPT
  "ClaudeBot", // Anthropic
  "PerplexityBot",
  "Applebot-Extended",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
