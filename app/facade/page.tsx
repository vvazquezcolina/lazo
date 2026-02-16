import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ComparisonTable } from "@/components/comparison-table"
import { FAQSection } from "@/components/faq-section"
import { ProjectGallery } from "@/components/project-gallery"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Isolation Façade Herstal & Liège | Crépis Isolant K60 — Devis Gratuit",
  description:
    "Isolation façade avec crépis isolant K60 à Herstal et Liège. Primes Wallonie 2025 jusqu'à 4.800€. Réduction chauffage 25-30%. ☎ 0470 10 95 25.",
  keywords: "isolation façade Herstal, crépis isolant K60, isolation façade Liège, prime rénovation façade Wallonie 2025, isolation façade crépis Wallonie",
  openGraph: {
    title: "Isolation Façade Herstal & Liège | Crépis K60 | Lazo Group",
    description: "Isolation façade et crépis isolant K60 à Herstal. Primes Wallonie 2025. Devis gratuit.",
    url: "https://www.lazotoiture.be/facade",
  },
}

export default function FacadePage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-primary-foreground mb-6">Isolation Façade & Crépis Isolants Conformes K60 2025</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-6">
              La Wallonie impose K60 pour les rénovations de façade depuis 2025. Lazo Group propose crépis isolant 10cm
              certifié K60 ou meilleur, avec primes augmentées de 12% cette année.
            </p>
            <button className="bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">
              Diagnostic façade gratuit
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
              Oui, 95% des façades wallonnes sont éligibles à la prime 2025. La prime augmente si vous atteignez K60 ou
              mieux.
            </p>
            <ul className="space-y-2 text-foreground">
              <li>• Prime façade (2025): augmentation par rapport à 2024</li>
              <li>• Bonus K60 avancé: majoration disponible</li>
              <li>• Crépis isolant: conformité K60 garantie</li>
              <li>• Réduction déperdition thermique: 25-30% certifiée</li>
              <li>• Économies chauffage: à évaluer dans votre diagnostic</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Facade */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="mb-12">Pourquoi isoler sa façade?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Réduction déperditions thermiques</h3>
              <p className="text-muted-foreground leading-relaxed">
                Les façades sont responsables de 15-20% des déperditions de chaleur. Un crépis isolant réduit cela de
                25-30%, baissant vos besoins en chauffage de 600-900€/an.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Protection structurelle</h3>
              <p className="text-muted-foreground leading-relaxed">
                Protégez votre maçonnerie contre les intempéries, UV et pollution. Durée de vie 20-25 ans sans
                maintenance.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Amélioration esthétique</h3>
              <p className="text-muted-foreground leading-relaxed">
                Choisissez parmi 100+ teintes de crépis pour moderniser l'apparence de votre habitation et augmenter sa
                valeur.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Combinaison avec autres aides</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cumulez prime façade + prime toiture + prime solaire pour un total jusqu'à 15.000€ d'aides publiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Facade 2025 */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="mb-12">Pourquoi isoler sa façade en 2025?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Obligation K60 depuis janvier 2025</h3>
              <p className="text-muted-foreground leading-relaxed">
                Toute rénovation de façade doit atteindre K60 minimum (λ ≤ 0.035 W/m·K). Les crépis seul ne suffisent
                plus: 10cm minimum exigé. Prime conditionnée à cette conformité. Coût +20% vs façade simple, mais prime
                +30%.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Déperditions 15-20% du chauffage</h3>
              <p className="text-muted-foreground leading-relaxed">
                Les façades non isolées perdent 15-20% de votre chaleur. Crépis isolant 10cm réduit cela de 25-30%.
                Chauffage sauvé: 600-900€/an pour maison 200m² façade en Wallonie.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Esthétique + Durabilité</h3>
              <p className="text-muted-foreground leading-relaxed">
                120+ teintes de crépis disponibles en 2025. Protège votre maçonnerie contre intempéries, UV, pollution.
                Durée de vie 20-25 ans sans maintenance vs 10 ans sans isolation.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Cumulable avec toiture + solaire</h3>
              <p className="text-muted-foreground leading-relaxed">
                Façade K60 (4.800€) + Toiture K60 (5.500€) + Solaire (5.000€) = 15.300€ en 2025. Lazo coordonne tout.
                ROI combiné: 6-8 ans grâce aux primes massives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable serviceType="facade" />

      {/* FAQ */}
      <FAQSection serviceType="facade" />

      {/* Gallery */}
      <ProjectGallery serviceType="facade" />

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-primary-foreground mb-6">Isoler votre façade conformément K60</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Lazo Group sélectionne le crépis isolant optimal et gère la conformité administrative K60 pour maximiser vos
            aides.
          </p>
          <button className="bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity text-lg">
            Recevoir mon devis K60 gratuit
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
