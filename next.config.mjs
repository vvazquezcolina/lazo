/** @type {import('next').NextConfig} */

// En développement, l'optimiseur d'images de next/image compile chaque taille
// à la demande. Quand plusieurs images sont demandées en même temps (la page
// d'accueil en a six : hero + cinq cartes), il se sature et certaines requêtes
// restent en attente — les images n'apparaissent pas, seul le texte alternatif
// s'affiche. C'est un comportement connu du serveur de dev, absent en
// production où les images sont optimisées puis mises en cache.
//
// On désactive donc l'optimisation UNIQUEMENT en dev : les fichiers sont
// servis directement, sans passer par l'optimiseur. En production, next start
// et Vercel optimisent normalement (WebP/AVIF + srcset).
const isDev = process.env.NODE_ENV !== "production"

const nextConfig = {
  // `typescript.ignoreBuildErrors` et `images.unoptimized` (en prod) étaient
  // hérités du projet v0 et ont été retirés : le code passe `tsc --noEmit`,
  // et l'optimiseur produit WebP/AVIF + srcset au lieu des JPEG bruts.
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: isDev,
  },
}

export default nextConfig
