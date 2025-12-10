import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Sun, Layers, MapPin, Calendar, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Nos Réalisations | Projets Toiture, Photovoltaïque & Façade - Lazo Group",
  description: "Découvrez nos réalisations récentes : rénovations de toiture, installations photovoltaïques et isolation de façade à Herstal, Liège et environs.",
}

const realisations = [
  {
    type: "Toiture",
    title: "Rénovation Complète avec Isolation Sarking",
    location: "Herstal",
    year: "2024",
    description: "Remplacement complet de la couverture en tuiles céramiques avec isolation sarking et amélioration de la charpente. Gain énergétique de 35%.",
    icon: Home,
    features: ["Tuiles céramiques", "Isolation sarking R=7", "Charpente renforcée", "Garantie 10 ans"],
    badge: "Complété"
  },
  {
    type: "Photovoltaïque",
    title: "Installation Solaire avec Batterie Huawei",
    location: "Liège",
    year: "2024",
    description: "Installation de 12kWc de panneaux solaires avec batterie Huawei Luna 10kWh. Autoconsommation à 75% et réduction des factures de 65%.",
    icon: Sun,
    features: ["12kWc panneaux", "Batterie Huawei 10kWh", "Autoconsommation 75%", "Rénoprêt 0%"],
    badge: "Complété"
  },
  {
    type: "Façade",
    title: "Isolation ITE avec Crépi Isolant",
    location: "Oupeye",
    year: "2024",
    description: "Isolation thermique extérieure complète avec crépi isolant. Coefficient R=4.2 atteint. Réduction factures de 38% et primes R2 récupérées.",
    icon: Layers,
    features: ["ITE complète", "Crépi isolant", "R=4.2", "Primes R2 obtenues"],
    badge: "Complété"
  },
  {
    type: "Toiture",
    title: "Réparation Urgence après Tempête",
    location: "Visé",
    year: "2024",
    description: "Intervention d'urgence sous 3h après dégâts de tempête. Remplacement tuiles et sécurisation complète. Client satisfait de la réactivité.",
    icon: Home,
    features: ["Intervention 3h", "Remplacement tuiles", "Sécurisation", "Assurance acceptée"],
    badge: "Urgence"
  },
  {
    type: "Photovoltaïque",
    title: "Installation Solaire Résidentielle 8kWc",
    location: "Ans",
    year: "2023",
    description: "Installation de 8kWc avec onduleur SMA Sunny Boy. Production annuelle de 8000kWh. Amortissement prévu en 9 ans.",
    icon: Sun,
    features: ["8kWc panneaux", "Onduleur SMA", "8000kWh/an", "ROI 9 ans"],
    badge: "Complété"
  },
  {
    type: "Façade",
    title: "Ravalement avec Isolation Partielle",
    location: "Liège",
    year: "2023",
    description: "Ravalement complet de façade avec isolation thermique partielle sur les murs les plus exposés. Amélioration esthétique et énergétique.",
    icon: Layers,
    features: ["Ravalement complet", "ITE partielle", "Amélioration PEB", "Plus-value +8%"],
    badge: "Complété"
  },
]

export default function RealisationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Nos Réalisations",
    "description": "Projets récents de rénovation, installation photovoltaïque et isolation réalisés par Lazo Group.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": realisations.map((realisation, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": "Project",
          "name": realisation.title,
          "description": realisation.description,
          "location": {
            "@type": "Place",
            "name": realisation.location
          }
        }
      }))
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Nos <span className="text-secondary">Réalisations</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8">
              Découvrez quelques-uns de nos projets récents : rénovations de toiture, 
              installations photovoltaïques et isolation de façade réalisées pour nos clients à Herstal, Liège et environs.
            </p>
          </div>
        </div>
      </section>

      {/* Realisations Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realisations.map((realisation, idx) => {
            const Icon = realisation.icon
            const iconColors = {
              "Toiture": "bg-slate-100 text-slate-700",
              "Photovoltaïque": "bg-amber-100 text-amber-700",
              "Façade": "bg-blue-100 text-blue-700"
            }
            const badgeColors = {
              "Complété": "bg-green-100 text-green-800",
              "Urgence": "bg-red-100 text-red-800"
            }
            return (
              <Card key={idx} className="group hover:shadow-xl transition-all border-slate-200 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className={`w-20 h-20 ${iconColors[realisation.type as keyof typeof iconColors] || "bg-slate-100"} rounded-2xl flex items-center justify-center`}>
                    <Icon className="w-10 h-10" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs">
                      {realisation.type}
                    </Badge>
                    <Badge className={`text-xs ${badgeColors[realisation.badge as keyof typeof badgeColors] || "bg-slate-100"}`}>
                      {realisation.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold leading-tight">{realisation.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {realisation.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">{realisation.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span>{realisation.year}</span>
                    </div>
                    <div className="pt-3 border-t border-slate-100">
                      <ul className="space-y-1.5">
                        {realisation.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Votre Projet, Notre Expertise</h2>
            <p className="text-xl text-slate-200 mb-8">
              Que ce soit pour une rénovation, une installation solaire ou une isolation, 
              nous mettons notre savoir-faire à votre service pour transformer votre habitation.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/#simulateur">
                <button className="bg-secondary text-primary hover:bg-secondary/90 font-bold text-lg px-8 py-4 rounded-lg transition-colors">
                  Demander un Devis Gratuit
                </button>
              </a>
              <a href="/zone/herstal">
                <button className="bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-lg border border-white/30 transition-colors">
                  Voir nos Zones d'Intervention
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
