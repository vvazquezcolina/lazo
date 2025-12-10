import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sun, Battery, Zap, ShieldCheck, CheckCircle2, ArrowRight, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Installation Panneaux Solaires à Herstal & Liège | Photovoltaïque & Batteries",
  description: "Installation de panneaux photovoltaïques et batteries domestiques. Rénoprêt à 0%. Autonomie énergétique et réduction des factures jusqu'à 70%. Devis gratuit.",
}

const services = [
  {
    title: "Installation Photovoltaïque & Batteries",
    description: "Panneaux solaires haute performance avec batteries domestiques (Huawei, SMA). Autoconsommation optimisée et réduction des factures jusqu'à 70%.",
    href: "/photovoltaique/installation-batterie",
    icon: Battery,
    badge: "Populaire",
    features: ["Panneaux haute performance", "Batteries Huawei/SMA", "Gestion intelligente", "Rénoprêt à 0%"]
  },
]

const benefits = [
  {
    icon: Zap,
    title: "Réduction Factures",
    description: "Réduisez vos factures d'électricité de 60-70% grâce à l'autoconsommation",
    color: "bg-amber-100 text-amber-600"
  },
  {
    icon: Battery,
    title: "Autonomie Énergétique",
    description: "Stockez l'énergie pour l'utiliser le soir et la nuit, indépendance du réseau",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: TrendingUp,
    title: "Rentabilité Long Terme",
    description: "Amortissement en 8-10 ans, puis électricité quasi gratuite pendant 20+ ans",
    color: "bg-blue-100 text-blue-600"
  },
]

export default function PhotovoltaiquePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Services Photovoltaïque Lazo Group",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Lazo Group"
    },
    "areaServed": ["Herstal", "Liège", "Oupeye", "Visé"],
    "description": "Installation de panneaux photovoltaïques et batteries domestiques pour l'autoconsommation énergétique.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services Photovoltaïque",
      "itemListElement": services.map((service, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        },
        "position": idx + 1
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
            <Badge className="mb-4 bg-secondary text-primary font-bold px-4 py-1">Rénoprêt 0% Disponible</Badge>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Panneaux <span className="text-secondary">Photovoltaïques</span> & Batteries
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8">
              Produisez et stockez votre propre électricité. Atteignez l'autonomie énergétique 
              et réduisez vos factures jusqu'à 70% avec une installation moderne et performante.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold text-lg px-8">
                Demander un Devis Gratuit
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Simuler mes économies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-1 gap-8 mb-16 max-w-2xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="group hover:shadow-xl transition-all border-slate-200">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-amber-600" />
                    </div>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800 font-bold">
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold">Installation Photovoltaïque & Batteries</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full group-hover:bg-primary/90">
                    <Link href={service.href}>
                      En savoir plus <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div key={benefit.title} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
                <div className={`w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi Choisir Lazo Group ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Installateurs Certifiés</h3>
              <p className="text-slate-600">Équipes formées et certifiées pour l'installation photovoltaïque. Garanties constructeur incluses.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Étude Personnalisée</h3>
              <p className="text-slate-600">Analyse de votre consommation et de votre toiture pour dimensionner l'installation optimale.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Support Continu</h3>
              <p className="text-slate-600">Suivi post-installation, maintenance et support technique pour garantir la performance maximale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Financement Facilité avec le Rénoprêt à 0%</h2>
            <p className="text-xl text-slate-200 mb-8">
              Financez vos travaux d'énergie renouvelable à taux zéro. Aucun intérêt, 
              remboursement sur 10 ans. Accessible pour tous les projets photovoltaïques.
            </p>
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold text-lg px-8">
              Calculer mon Éligibilité
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
