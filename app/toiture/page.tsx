import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ComparisonTable } from "@/components/comparison-table"
import { FAQSection } from "@/components/faq-section"
import { ProjectGallery } from "@/components/project-gallery"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Couvreur Herstal & Liège | Rénovation Toiture — Devis Gratuit",
  description:
    "Couvreur expert à Herstal et Liège. Rénovation toiture complète, réparation fuites, remplacement tuiles et ardoises. Primes Wallonie 2025 jusqu'à 5.000€. Devis gratuit ☎ 0470 10 95 25.",
  keywords: "couvreur Herstal, toiture Herstal, couvreur Liège, rénovation toiture Liège, réparation toiture Herstal, remplacement tuiles, prime toiture Wallonie 2025, entreprise toiture Herstal, urgence toiture Liège",
  openGraph: {
    title: "Couvreur Herstal & Liège | Rénovation Toiture | Lazo Group",
    description: "Expert couvreur à Herstal. Rénovation toiture, tuiles, ardoise. Primes Wallonie 2025. Devis gratuit.",
    url: "https://www.lazotoiture.be/toiture",
  },
}

export default function ToitureServicePage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-primary-foreground mb-6">Rénovation & Réparation de Toiture à Herstal</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-6">
              Depuis 2025, les normes thermiques wallonnes exigent une isolation minimale K60 pour toute rénovation de
              toiture. Lazo Group maîtrise ces nouvelles obligations et vous propose des solutions conformes avec primes
              maximales.
            </p>
            <button className="bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">
              Demander un diagnostic gratuit
            </button>
          </div>
        </div>
      </section>

      {/* BLUF: Direct Answer Section */}
      <section className="py-12 md:py-16 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold mb-4">Réponse directe</h2>
            <p className="text-lg text-foreground mb-4">
              Oui, vous êtes probablement éligible à une prime toiture 2025 si vous habitez en Wallonie. Les primes
              augmentent cette année pour les rénovations thermiques complètes et conformes K60.
            </p>
            <ul className="space-y-2 text-foreground">
              <li>• Prime R1 (2025): augmentation de +10% vs 2024</li>
              <li>• Prime R2-R3: aides supplémentaires disponibles</li>
              <li>• Bonus K60: majoration si isolation K60 ou mieux</li>
              <li>• Délai moyen: 6-8 semaines après dossier approuvé</li>
              <li>• Montant exact: déterminé lors du diagnostic gratuit</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Roofing Matters */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="mb-12">Pourquoi rénover sa toiture en 2025?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Conformité K60 obligatoire</h3>
              <p className="text-muted-foreground leading-relaxed">
                Depuis janvier 2025, la Wallonie exige K60 minimum pour les rénovations. Les toitures sans isolation
                moderne ne peuvent plus être rénovées sans isolation additionnelle. Coûts estimés: +2.000-3.000€ pour
                isolation, mais ROI garanti via primes.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Protection structurelle renforcée</h3>
              <p className="text-muted-foreground leading-relaxed">
                Une toiture défaillante coûte 10x plus cher à réparer que de rénover préventivement. Les hivers wallons
                2024-2025 ont augmenté les sinistres de 40% selon les assureurs. Agissez vite.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Efficacité énergétique certifiée</h3>
              <p className="text-muted-foreground leading-relaxed">
                Une toiture K60 réduit vos déperditions de chaleur de 25-30%. Vous économisez 600-900€/an en chauffage.
                Sur 20 ans (durée de vie d'une toiture), l'amortissement est garanti.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Primes cumulables 15.000€</h3>
              <p className="text-muted-foreground leading-relaxed">
                Combinez prime toiture (5.500€) + façade isolée (4.500€) + solaire (5.000€) = 15.000€ d'aides en 2025.
                Lazo Group pilote tous vos dossiers gratuitement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable serviceType="toiture" />

      {/* FAQ Section */}
      <FAQSection serviceType="toiture" />

      {/* Project Gallery */}
      <ProjectGallery serviceType="toiture" />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-primary-foreground mb-6">Prêt à rénover votre toiture?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Lazo Group vous propose une visite gratuite sans engagement pour évaluer votre projet, clarifier les aides
            2025 disponibles et planifier l'installation.
          </p>
          <button className="bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity text-lg">
            Planifier une visite
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
