/**
 * Données climatiques de Liège — source primaire IRM (Institut Royal
 * Météorologique), fiche communale INS 62063 :
 * https://www.meteo.be/resources/climateCity/pdf/climate_INS62063_LIEGE_fr.pdf
 *
 * Ces chiffres remplacent les formulations vagues du type « climat humide de
 * la région ». Ils sont vérifiables, ce qui vaut mieux qu'une impression, et
 * ils portent un argument technique que la concurrence locale n'exploite pas.
 */
export const CLIMAT_LIEGE = {
  precipitationsAnnuelles: 882, // mm
  joursPluie: 142.4, // jours avec ≥ 1 mm
  joursGel: 59.7,
  joursNeige: 16.6,
  joursOrage: 17.6,
  heuresSoleil: 1545,
  irradiation: 1010, // kWh/m²/an
  moisLePlusSec: { mois: "avril", mm: 61 }, // pas de saison sèche

  vent: {
    // Station de Bierset
    moyenne: 4.2, // m/s
    moisLePlusVenteux: "janvier",
    // Le quadrant sud-ouest concentre ~46 % des occurrences ET les rafales
    // les plus rapides. La plupart des sites du secteur parlent de « vents
    // d'ouest » : c'est imprécis.
    quadrantDominant: "sud-ouest",
    partQuadrantDominant: 46, // %
    record: { vitesse: 159, lieu: "Bierset", date: "26 février 1990" },
  },
} as const

/**
 * Sinistralité tempête récente en Belgique — chiffres publiés par Assuralia
 * (fédération des assureurs). Utile pour objectiver le risque sans dramatiser.
 * https://press.assuralia.be/intemperies-des-30-et-31-mai-plus-de-sinistres-en-un-seul-week-end-que-durant-toute-lannee-2025
 */
export const TEMPETES = {
  mai2026: {
    label: "30–31 mai 2026",
    sinistres: 55081,
    sinistresIncendie: 28925,
    coutMoyenIncendie: 4121, // €
    coutTotal: "environ 191 millions d'euros",
  },
  fevrier2022: {
    label: "février 2022 (Eunice et Franklin)",
    coutTotal: "environ 551 millions d'euros",
    sinistresIncendie: 213000,
    rafaleLiege: 104, // km/h
  },
} as const
