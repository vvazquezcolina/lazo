import { Header } from "@/components/header"
import type { Metadata } from "next"

interface LocationPageProps {
  params: {
    location: string
  }
}

const locationData: Record<
  string,
  {
    title: string
    description: string
    localContext: string
    landmarks: string[]
    interventionTime: string
    meta: { title: string; description: string }
  }
> = {
  herstal: {
    title: "Toiture, Panneaux Solaires & Façade à Herstal",
    description:
      "Lazo Group intervient à Herstal depuis 15 ans. Nous maîtrisons les spécificités locales du parc immobilier industriel et résidentiel.",
    localContext:
      "Herstal est une commune majeure de la région liégeoise, caractérisée par un parc immobilier mixte (résidentiel + industriel). Les toitures sont souvent sollicitées par les vents d'ouest. La commune reconnaît les primes Wallonie sans condition spécifique à Herstal.",
    landmarks: ["Parc Industrial Hauts-Sarts", "Centre-ville Herstal", "Zone FN", "Rue de Liège"],
    interventionTime: "Intervention possible dans l'heure en urgence 24/7",
    meta: {
      title: "Rénovation Toiture, Solaire & Façade à Herstal | Lazo Group",
      description:
        "Expert local à Herstal. Rénovation toiture, panneaux solaires, façade isolante. Primes Wallonie. Urgence 24/7. Devis gratuit.",
    },
  },
  liege: {
    title: "Services de Rénovation Complète à Liège",
    description:
      "Depuis nos débuts à Liège, Lazo Group connaît chaque quartier et chaque type d'habitation. Du vieux Liège au Sart-Tilman, nous adaptons nos solutions.",
    localContext:
      "Liège concentre des bâtiments anciens (pré-1980) avec toitures traditionnelles et façades exposées. Le relief liégeois augmente l'exposition aux intempéries. Accès prioritaire aux primes Wallonie pour résidences principales.",
    landmarks: ["Quartier Sainte-Walburge", "Sart-Tilman", "Centre-ville Liège", "Cité Ardente"],
    interventionTime: "Diagnostic dans les 48h, intervention planifiée dans la semaine",
    meta: {
      title: "Rénovation Toiture & Solaire à Liège | Lazo Group",
      description: "Expert en rénovation Liège. Toiture, solaire, façade. Primes Wallonie. Intervention rapide.",
    },
  },
  oupeye: {
    title: "Rénovation Énergétique Complète à Oupeye",
    description:
      "Oupeye représente un marché de rénovation énergétique en croissance. Lazo Group y a réalisé 50+ projets avec satisfaction 100%.",
    localContext:
      "Oupeye est une commune frontalière aux Pays-Bas avec parc immobilier résidentiel dense et homogène (maisons individuelles). Demande croissante en rénovation énergétique. Accès aux primes Wallonie identique.",
    landmarks: ["Rue Principale Oupeye", "Parc communal", "Zone commerciale", "Proximité frontière belgo-néerlandaise"],
    interventionTime: "Intervention possible dans les 72h en cas d'urgence",
    meta: {
      title: "Experts Rénovation Toiture & Solaire à Oupeye",
      description: "Lazo Group à Oupeye. 50+ projets réussis. Toiture, panneaux solaires, façade. Primes Wallonie.",
    },
  },
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { location } = await params
  const locationLower = location.toLowerCase()
  const data = locationData[locationLower]

  if (!data) {
    return {
      title: "Localisation non trouvée",
      description: "Cette zone n'est pas couverte.",
    }
  }

  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: `rénovation ${locationLower}, toiture ${locationLower}, solaire ${locationLower}, façade ${locationLower}`,
  }
}

export function generateStaticParams() {
  return Object.keys(locationData).map((location) => ({
    location,
  }))
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { location } = await params
  const locationLower = location.toLowerCase()
  const data = locationData[locationLower] || locationData.herstal

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-primary-foreground mb-6">{data.title}</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
              {data.description}
            </p>
            <button className="bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">
              Demander un diagnostic gratuit
            </button>
          </div>
        </div>
      </section>

      {/* Local Context Section */}
      <section className="py-12 md:py-16 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold mb-4">Contexte local</h2>
            <p className="text-foreground leading-relaxed mb-4">{data.localContext}</p>

            {/* Landmarks */}
            <div className="mt-6">
              <p className="font-semibold text-foreground mb-3">Nous intervenons à proximité de:</p>
              <div className="grid md:grid-cols-2 gap-2">
                {data.landmarks.map((landmark, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground">{landmark}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-4 pt-4 border-t border-accent/30">
              <p className="font-semibold text-foreground mb-2">Délai d'intervention:</p>
              <p className="text-foreground">{data.interventionTime}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Summary for Location */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="mb-12">Nos services à {locationLower.charAt(0).toUpperCase() + locationLower.slice(1)}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                service: "Toiture",
                description: "Rénovation, réparation, urgence fuites",
                link: "/toiture",
              },
              {
                service: "Panneaux Solaires",
                description: "Installation, batterie stockage, Rénoprêt 0%",
                link: "/photovoltaique",
              },
              {
                service: "Façade Isolante",
                description: "Crépis isolants, rénovation thermique",
                link: "/facade",
              },
            ].map((item) => (
              <a
                key={item.service}
                href={item.link}
                className="p-6 bg-card border border-border rounded-lg hover:border-accent hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold mb-2 hover:text-accent transition-colors">{item.service}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects in This Location */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="mb-12">Projets réalisés à {locationLower.charAt(0).toUpperCase() + locationLower.slice(1)}</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-background border border-border rounded-lg overflow-hidden hover:border-accent transition-colors"
              >
                <div className="aspect-video bg-muted" />
                <div className="p-6">
                  <p className="font-semibold text-lg mb-2">Projet exemple {item}</p>
                  <p className="text-muted-foreground text-sm">Description du projet et résultats obtenus.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primes & Aides */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="mb-12">
            Primes Wallonie accessibles à {locationLower.charAt(0).toUpperCase() + locationLower.slice(1)}
          </h2>

          <div className="space-y-4">
            {[
              {
                name: "Prime Rénovation Toiture",
                amount: "Jusqu'à 5.000€ (R1)",
                conditions: "Résidence principale, catégories R1-R4",
              },
              {
                name: "Rénoprêt 0% (Solaire)",
                amount: "Jusqu'à 30.000€",
                conditions: "Sans intérêt, remboursable 20 ans",
              },
              {
                name: "Prime Façade Isolante",
                amount: "Jusqu'à 4.500€ (R1)",
                conditions: "Amélioration performance thermique >5%",
              },
            ].map((prime, idx) => (
              <div key={idx} className="p-6 bg-card border border-border rounded-lg flex items-start gap-4">
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-1">{prime.name}</h4>
                  <p className="text-accent font-semibold text-lg mb-2">{prime.amount}</p>
                  <p className="text-muted-foreground text-sm">{prime.conditions}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-primary-foreground mb-6">
            Prêt à débuter votre rénovation à {locationLower.charAt(0).toUpperCase() + locationLower.slice(1)}?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contactez nos experts locaux pour une visite gratuite et une analyse personnalisée de vos besoins.
          </p>
          <button className="bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity text-lg">
            Planifier une visite
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Lazo Group</h4>
              <p className="text-sm text-primary-foreground/80">Expert en rénovation complète</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Zones</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="/zone/herstal" className="hover:text-primary-foreground transition">
                    Herstal
                  </a>
                </li>
                <li>
                  <a href="/zone/liege" className="hover:text-primary-foreground transition">
                    Liège
                  </a>
                </li>
                <li>
                  <a href="/zone/oupeye" className="hover:text-primary-foreground transition">
                    Oupeye
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-sm text-primary-foreground/80">info@lazotoiture.be</p>
              <p className="text-sm text-primary-foreground/80">+32 4 XXX XXXX</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="/toiture" className="hover:text-primary-foreground transition">
                    Toiture
                  </a>
                </li>
                <li>
                  <a href="/photovoltaique" className="hover:text-primary-foreground transition">
                    Solaire
                  </a>
                </li>
                <li>
                  <a href="/facade" className="hover:text-primary-foreground transition">
                    Façade
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
            <p>&copy; 2025 Lazo Group. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
