import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ComparisonTable } from "@/components/comparison-table"
import { FAQSection } from "@/components/faq-section"
import { ProjectGallery } from "@/components/project-gallery"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Panneaux Solaires Herstal & Liège | Installation Photovoltaïque — Devis Gratuit",
  description:
    "Installation panneaux solaires à Herstal et Liège. Monocristallin + batteries LiFePO4. Rénoprêt 0%, subventions 2025. Autonomie 70-80%. ☎ 0470 10 95 25.",
  keywords: "panneaux solaires Herstal, panneaux solaires Liège, installation photovoltaïque Wallonie, batterie solaire Herstal, Rénoprêt 0%, autonomie énergétique, installateur panneaux photovoltaïques Herstal",
  openGraph: {
    title: "Panneaux Solaires Herstal & Liège | Lazo Group",
    description: "Installation panneaux solaires et batteries à Herstal. Subventions 2025. Devis gratuit.",
    url: "https://www.lazotoiture.be/photovoltaique",
  },
}

export default function PhotovoltaiquePage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-primary-foreground mb-6">Installation Panneaux Solaires & Batteries 2025</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-6">
              L'énergie solaire en 2025: rendements +15% par rapport à 2023 grâce aux nouvelles générations
              monocristallines. Batterie LiFePO4 en baisse de prix (-30% vs 2024). Rénoprêt 0% + subventions solaires
              cumulables jusqu'à 8.000€.
            </p>
            <button className="bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">
              Simuler votre production 2025
            </button>
          </div>
        </div>
      </section>

      {/* BLUF */}
      <section className="py-12 md:py-16 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold mb-4">Réponse directe</h2>
            <p className="text-lg text-foreground mb-4">
              Oui, les aides au financement 2025 couvrent une part significative de votre investissement solaire. ROI
              moyen en Wallonie: 7-10 ans. Autonomie énergétique: 70-80% possible avec batterie.
            </p>
            <ul className="space-y-2 text-foreground">
              <li>• Financement 0%: aides cumulables pour projet complet</li>
              <li>• Subvention solaire R1 (2025): aides augmentées vs 2024</li>
              <li>• Batterie LiFePO4 subventionnée: aides spécifiques disponibles</li>
              <li>• Production moyenne 4kWc: 4.500-4.800 kWh/an</li>
              <li>• Montant exact: à déterminer via votre simulation gratuite</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Solar */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="mb-12">Pourquoi passer au solaire?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Économies durable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Réduisez votre facture d'électricité de 50-60%. Un système de 4kWc génère environ 4.000-4.500 kWh/an en
                Wallonie, soit une économie annuelle de 800-1.000€.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Indépendance énergétique</h3>
              <p className="text-muted-foreground leading-relaxed">
                Avec une batterie LiFePO4, stockez vos excédents pour une utilisation nocturne. Autonomie jusqu'à 70-80%
                des besoins annuels.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Financement 0%</h3>
              <p className="text-muted-foreground leading-relaxed">
                Accédez au Rénoprêt 0% en Wallonie. Empruntez jusqu'à 30.000€ sans intérêt, remboursable sur 20 ans.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Impact environnemental</h3>
              <p className="text-muted-foreground leading-relaxed">
                Un système 4kWc évite 4-5 tonnes de CO2 par an. Contribuez à la transition énergétique wallonne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Solar 2025 */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="mb-12">Pourquoi passer au solaire en 2025?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Rendements historiques (+15%)</h3>
              <p className="text-muted-foreground leading-relaxed">
                Les panneaux monocristallins 2025 atteignent 22-23% de rendement vs 19-20% en 2023. Production annuelle
                de 4kWc: 4.500-4.800 kWh/an en Wallonie (vs 3.900 en 2022). Gain direct de 25-30% en production.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Batterie LiFePO4 affordable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Prix batterie divisé par 3 depuis 2020. LiFePO4 10kWh coûte désormais 3.000-4.000€ (vs 9.000€ en 2022).
                Durée de vie 12-15 ans, 95% de charge conservée. Meilleur ROI en 2025.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Financement 0% combiné</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rénoprêt 0% (30.000€) + Subvention solaire R1 (5.000€) + Batterie subventionnée (3.000€) = 38.000€ pour
                projet complet. Vous ne payez que l'intérêt 0% sur votre part. Nouveauté 2025.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Protection inflation électrique</h3>
              <p className="text-muted-foreground leading-relaxed">
                L'électricité augmente de 5-8%/an en Europe. Le solaire vous protège: investissement constant, économies
                croissantes. Break-even garanti 2032 même sans augmentation tarifaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable serviceType="solaire" />

      {/* FAQ */}
      <FAQSection serviceType="solaire" />

      {/* Gallery */}
      <ProjectGallery serviceType="solaire" />

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-primary-foreground mb-6">Devenir producteur d'énergie en 2025</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Simulation gratuite: combien vous économisez avec panneaux solaires? Batterie nécessaire? Financement
            optimal? Réponses en 15 minutes.
          </p>
          <button className="bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity text-lg">
            Obtenir ma simulation 2025
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
