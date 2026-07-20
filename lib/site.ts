/**
 * Configuration centrale de l'entreprise.
 *
 * Le NAP (nom / adresse / téléphone) doit rester rigoureusement identique à
 * la fiche Google Business Profile. `gbpName` reproduit la dénomination
 * exacte de la fiche et alimente le champ schema.org `name` : c'est sur
 * cette correspondance que Google adosse le site à l'établissement.
 *
 * Ce qui reste à confirmer est marqué VERIFIER.
 */

export const site = {
  /** Nom d'affichage sur le site */
  name: "Lazo Toitures & Photovoltaïques",
  /** Dénomination EXACTE de la fiche Google Business Profile — ne pas modifier */
  gbpName: "Lazo • Toitures et Photovoltaïques",
  legalName: "Lazo Toitures et Photovoltaïques", // VERIFIER: dénomination exacte au registre BCE
  url: "https://www.lazotoiture.be",
  locale: "fr-BE",

  // --- Contact --------------------------------------------------------
  phone: "+32495944530",
  phoneDisplay: "0495 94 45 30",
  // Destinataire des demandes du formulaire (confirmé par l'entreprise).
  // Peut être surchargé par la variable d'environnement CONTACT_TO.
  email: "info@lazotoiture.be",

  // WhatsApp — format international sans « + » ni espaces, pour wa.me.
  // VERIFIER : ce numéro dispose-t-il bien d'un compte WhatsApp actif ?
  // Un bouton qui ouvre une conversation dans le vide est pire qu'absent.
  whatsapp: "32495944530",

  // --- Établissement --------------------------------------------------
  address: {
    street: "Rue Hoyoux 90",
    locality: "Herstal",
    postalCode: "4040",
    region: "Province de Liège",
    country: "BE",
  },
  // Coordonnées recoupées entre la fiche Google Business Profile et le
  // géocodage OpenStreetMap — les deux concordent à quelques mètres près.
  geo: { lat: 50.661359, lng: 5.626413 },

  // --- Identifiants légaux belges -------------------------------------
  vat: "BE 0802.601.457",
  bce: "0802.601.457",

  // --- Preuve sociale --------------------------------------------------
  // ⚠️ L'ancien site déclarait 4,9/5 sur 127 avis : chiffres inventés par v0.
  // Un aggregateRating non adossé à de vrais avis viole les règles de Google
  // sur les données structurées et expose à une action manuelle.
  // Relever les valeurs RÉELLES sur la fiche, puis passer enabled à true.
  reviews: {
    // Relevé sur la fiche le 21/07/2026 : 5,0 sur 31 avis.
    // Ces valeurs alimentent l'affichage (components/reviews.tsx), PAS le
    // balisage schema.org : Google interdit de baliser en aggregateRating des
    // avis collectés sur une plateforme tierce et republiés sur son site.
    // Laisser `enabled` à false tant qu'il n'existe pas de système d'avis
    // propre au site — sinon on s'expose à une action manuelle.
    enabled: false,
    ratingValue: 5.0,
    reviewCount: 31,
    profileUrl: "https://maps.app.goo.gl/yhc3ZBtYDwMertaG6",
  },

  // --- Horaires --------------------------------------------------------
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:30" },
    { days: ["Saturday"], opens: "09:00", closes: "13:00" },
  ], // VERIFIER: aligner sur les horaires de la fiche Google

  // Pas de service d'urgence / dépannage : l'entreprise ne le propose pas.
  // Ne pas réintroduire de promesse d'intervention 24/7 sur le site.

  social: {
    facebook: "", // VERIFIER
    instagram: "", // VERIFIER
  },

  // --- Assurances et agréments ----------------------------------------
  // VERIFIER chacun : ne jamais afficher une garantie non détenue.
  credentials: {
    rcDecennale: true, // obligatoire depuis la loi Peeters (01/07/2018)
    rcExploitation: true, // distincte de la décennale : dommages pendant le chantier
    insurer: "", // VERIFIER: compagnie + n° de police
    // Accès à la profession « Toiture et étanchéité » — exigence légale wallonne
    // pour la couverture, la charpente et l'évacuation des eaux pluviales.
    // Son absence peut faire refuser la prime du client.
    accesProfession: true, // VERIFIER
    rescert: false, // VERIFIER — uniquement pertinent pour le photovoltaïque
  },
} as const

/** Identifiant de mesure Google Analytics 4. Vide = analytics désactivé. */
// VERIFIER que cet identifiant correspond bien à la propriété GA4 réelle :
// s'il s'agit d'un placeholder, la mesure part dans le vide sans rien signaler.
// Surchargeable par NEXT_PUBLIC_GA_ID ; vide = analytics désactivé.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-XXRYV3TQHZ"

export const SERVICE_AREA = [
  "Liège", "Herstal", "Oupeye", "Ans", "Seraing", "Saint-Nicolas",
  "Fléron", "Visé", "Beyne-Heusay", "Grâce-Hollogne", "Awans",
  "Juprelle", "Blegny", "Soumagne",
] as const

/** Numéro au format tel: pour les liens d'appel. */
export const telHref = `tel:${site.phone}`
