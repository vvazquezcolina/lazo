import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection({ serviceType }: { serviceType: string }) {
  const faqs: Record<string, Array<{ q: string; a: string }>> = {
    toiture: [
      {
        q: "La norme K60 2025 s'applique-t-elle à ma rénovation de toiture?",
        a: "Oui, depuis janvier 2025, toute rénovation de toiture en Wallonie doit atteindre K60 minimum (Rc ≥ 3 m²K/W pour toiture inclinée). Cela signifie isolation thermique obligatoire. Lazo Group propose isolant 12cm (K60-K50) ou 10cm avec aération (K60).",
      },
      {
        q: "Quelle est la procédure pour obtenir la prime toiture 2025?",
        a: "1. Visite gratuite Lazo Group, 2. Devis détaillé + engagement prime, 3. Dépôt dossier avant travaux auprès du SPW Energie (délai 2-4 semaines), 4. Validation prime, 5. Rénovation, 6. Paiement prime après travaux. Délai total: 3-4 mois. Lazo gère tout gratuitement.",
      },
      {
        q: "Puis-je combiner prime toiture + façade + solaire pour un projet complet?",
        a: "Oui! 2025 permet cumuler jusqu'à 15.300€: Toiture K60 (5.500€) + Façade K60 (4.800€) + Solaire (5.000€). Condition: tous les travaux conformes K60. Lazo coordonne dossier unique pour simplifier administration.",
      },
      {
        q: "Quel matériau de toiture recommandez-vous en 2025?",
        a: "Zinc-cuivre ou ardoise naturelle pour durabilité 40-60+ ans. Tuiles béton pour budget serré. IMPORTANT: tous doivent être posés avec isolant 10-12cm pour K60. Lazo propose rendez-vous comparatif matériaux/prix.",
      },
      {
        q: "Urgence fuite toiture: quel est le délai d'intervention?",
        a: "Appel 24/7 +32 4 XXX XXXX: intervention dans 60-90 minutes zones Herstal/Liège. Tarif urgence: 250€ diagnostic + pose bâche étanche temporaire. Rénovation complète négociée après stabilisation.",
      },
    ],
    solaire: [
      {
        q: "Les panneaux solaires 2025 sont meilleurs qu'en 2023?",
        a: "Oui: rendement +15% (22-23% vs 19-20%), prix -20%, durée vie +5 ans. Production monocristallin 4kWc en Wallonie: 4.500-4.800 kWh/an (vs 3.900 en 2022). Gain direct 25-30% en production pour même investissement.",
      },
      {
        q: "Faut-il absolument une batterie solaire en Wallonie?",
        a: "Non obligatoire, mais fortement recommandé en 2025. Sans batterie: autonomie 30-40%. Avec batterie LiFePO4 10kWh (prix baissé -30%): autonomie 70-80%. ROI batterie: 8-10 ans grâce baisse prix (-30% vs 2023) + économies électricité (+8%/an inflation).",
      },
      {
        q: "Quel financement pour installer panneaux + batterie en 2025?",
        a: "Rénoprêt 0% 30.000€ + Subvention solaire R1 (5.000€) + Batterie subventionnée (3.000€) = Total 38.000€. Vous empruntez à 0% auprès Wallonie Crédit, remboursable 20 ans. Paiement: prêt rembourse gains électricité (économie 1.300€/an couvre 1.600€ annuité).",
      },
      {
        q: "Dois-je déclarer les revenus solaires aux impôts?",
        a: "Oui: injection réseau imposable à 13%. Exemple 4kWc avec surplus 500 kWh/an @ 0.22€ = 110€ net imposable. Régime micro BIC 305€ seuil. Lazo Group aide démarches fiscales 2025.",
      },
      {
        q: "Quel est le ROI réaliste panneaux solaires en Wallonie 2025?",
        a: "Sans batterie: 8-12 ans. Avec batterie LiFePO4: 7-10 ans (nouveau prix batterie divise ROI par 2). Après ROI: production gratuite 15-20 ans. Investissement 15.000€ panneaux génère 250.000-350.000€ économies en 25 ans.",
      },
    ],
    facade: [
      {
        q: "Qu'est-ce que K60 pour une façade et pourquoi c'est obligatoire 2025?",
        a: "K60 = Resistance thermique Rc ≥ 1.5 m²K/W minimum obligatoire depuis janvier 2025. Cela demande crépis isolant 8-10cm minimum. Sans K60: pas de prime. Avec K60: prime +30% vs 2024. Lazo propose isolant certifié K60 ou K50 (mieux).",
      },
      {
        q: "Crépis isolant ou panneaux PSE: quoi choisir en 2025?",
        a: "Crépis isolant: meilleur rapport qualité/prix, esthétique, 20-25 ans. Panneaux PSE: plus robuste 30+ ans mais coûte +15%. Pour budget serré: crépis isolant 10cm λ=0.04 W/m·K. Pour longévité: panneaux 10cm PSE.",
      },
      {
        q: "Combien économise-t-on en chauffage avec isolation façade 2025?",
        a: "Crépis isolant 10cm réduit déperdition 25-30%. Sur maison 200m² façade: économie 600-900€/an chauffage. ROI: 3-5 ans (investissement 22.000-28.000€ - prime 4.800€ = 17.000-24.000€ net). Après ROI: 20 ans production gratuite.",
      },
      {
        q: "Quel est le délai de réalisation isolation façade chez Lazo?",
        a: "Diagnostic-devis: 1 semaine. Dépôt prime: 2-4 semaines (délai SPW). Réalisation: 3-5 semaines selon superficie (200m² = 4 semaines). Délai total: 2-3 mois. Lazo pilote tous permis/primes.",
      },
      {
        q: "Puis-je teinter le crépis isolant 2025?",
        a: "Oui: 120+ teintes disponibles. Recommandation: teintes claires (blanches/beige) réfléchissent chaleur (+5% économie été). Teintes foncées absorbent chaleur (-5% gain été mais -3% hiver). Lazo propose consultation couleur gratuite.",
      },
    ],
  }

  const serviceData = faqs[serviceType] || faqs.toiture

  return (
    <section className="py-16 md:py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="mb-12">Questions fréquemment posées 2025</h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {serviceData.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left font-semibold text-base hover:text-accent transition-colors">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-8 p-6 bg-accent/10 border border-accent/20 rounded-lg">
          <p className="text-sm text-foreground">
            Question non répertoriée?{" "}
            <a href="/contact" className="text-accent font-semibold hover:underline">
              Contactez notre équipe 2025
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
