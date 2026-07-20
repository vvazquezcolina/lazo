/**
 * Avis Google Business Profile.
 *
 * ⚠️ RÈGLE ABSOLUE : n'inscrire ici QUE des avis réellement publiés sur la
 * fiche Google, recopiés mot pour mot. Un avis inventé — ou seulement
 * reformulé « pour faire mieux » — est un témoignage fabriqué. En Belgique
 * cela relève des pratiques commerciales trompeuses.
 *
 * Les avis ci-dessous ont été relevés le 21/07/2026 sur la fiche publique.
 * Texte non modifié, y compris les fautes de frappe et la ponctuation.
 *
 * PAS de balisage schema.org Review : Google interdit de baliser des avis
 * collectés sur une plateforme tierce et republiés sur son propre site. Ils
 * sont affichés comme preuve sociale, avec un lien vers la fiche d'origine —
 * c'est la seule pratique conforme. Voir components/reviews.tsx.
 */

import { site } from "./site"

export type Review = {
  /** Nom tel qu'affiché publiquement sur Google */
  author: string
  /** Note sur 5 */
  rating: number
  /** Texte exact de l'avis, sans reformulation */
  text: string
  /** Période affichée sur la fiche */
  date: string
}

export const REVIEWS: Review[] = [
  {
    author: "Aurore L.",
    rating: 5,
    text: "Très contente de la pose de mes panneaux solaires et de mes batteries ! Mr Semih est très à l'écoute de ses clients et très accomodant. Je recommande !",
    date: "juin 2026",
  },
  {
    author: "Rachel Noirot",
    rating: 5,
    text: "Nous avons choisis Lazo pour refaire l'entièreté de notre toit. Nous en sommes ravi, un travail en 9jours, très propre et très bien réalisé. Un patron et des ouvriers à l'écoute et soigneux. Je recommande les yeux fermés pour vos travaux de toiture ☺️",
    date: "2025",
  },
  {
    author: "Hasan Erdogan",
    rating: 5,
    text: "Les ouvriers travaillant avec le plus grand soins, le patron sur place et surtout qui fait tout son possible pour avoir un résultat plus que parfait ! Une entreprise qui travaille avec du matériel de haute qualité et qui connaît cela parfaitement ! Un grand merci pour votre professionnalisme et je n'y manquerai pas de vous recommander !",
    date: "2025",
  },
]

export const hasReviews = REVIEWS.length > 0

/**
 * Synthèse affichée à côté des avis.
 * Source unique : site.reviews dans lib/site.ts — ne pas dupliquer la valeur
 * ici, deux sources pour une même donnée finissent toujours par diverger.
 */
export const REVIEW_SUMMARY = {
  rating: site.reviews.ratingValue,
  count: site.reviews.reviewCount,
}
