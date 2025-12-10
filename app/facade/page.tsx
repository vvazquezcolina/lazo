import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Layers, ThermometerSun, Home, ShieldCheck, CheckCircle2, ArrowRight, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Isolation de Façade à Herstal & Liège | Crépi Isolant & ITE",
  description: "Isolation thermique extérieure (ITE) et crépi isolant. Primes jusqu'à 75% en Région Wallonne. Réduction factures jusqu'à 40%. Devis gratuit.",
}

const services = [
  {
    title: "Crépi Isolant (ITE)",
    description: "Isolation Thermique Extérieure avec crépi isolant. La solution la plus performante pour améliorer votre confort et réduire vos factures de 30-40%.",
    href: "/facade/crepi-isolant",
    icon: Layers,
    badge: "Populaire",
    features: ["Coefficient R ≥ 4.0", "Ravalement inclus", "Éligible primes max", "Aucune perte d'espace"]
  },
]

const benefits = [
  {
    icon: ThermometerSun,
    title: "Confort Amélioré",
    description: "Température homogène dans toute la maison, été comme hiver",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Award,
    title: "Primes Jusqu'à 75%",
    description: "Récupérez jusqu'à 75% de votre investissement via les primes Wallonne",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Home,
    title: "Plus-Value Immobilière",
    description: "Améliorez votre certificat PEB et la valeur de votre bien",
    color: "bg-amber-100 text-amber-600"
  },
]

export default function FacadePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Services Isolation de Façade Lazo Group",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Lazo Group"
    },
    "areaServed": ["Herstal", "Liège", "Oupeye", "Visé"],
    "description": "Isolation thermique extérieure (ITE) et crépi isolant pour améliorer la performance énergétique.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services Façade",
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
            <Badge className="mb-4 bg-green-600 hover:bg-green-700 text-base px-4 py-1">Primes jusqu'à 75%</Badge>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Isolation de <span className="text-secondary">Façade</span> & Crépi Isolant
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8">
              Transformez votre habitation avec une isolation extérieure performante. 
              Réduisez vos factures de chauffage jusqu'à 40% et bénéficiez de primes importantes de la Région Wallonne.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold text-lg px-8">
                Demander un Devis Gratuit
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Calculer mes Primes
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
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 font-bold">
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold">Crépi Isolant (ITE)</CardTitle>
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
              <h3 className="text-xl font-bold mb-2">Certification CSTC</h3>
              <p className="text-slate-600">Matériaux agréés et installation conforme aux normes de la Région Wallonne.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accompagnement Primes</h3>
              <p className="text-slate-600">Nous gérons tout le dossier administratif pour maximiser vos primes.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Garantie Décennale</h3>
              <p className="text-slate-600">Garantie décennale sur les travaux et suivi post-intervention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prime Info Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Primes jusqu'à 75% en Région Wallonne</h2>
            <p className="text-xl text-green-100 mb-8">
              Le montant de vos primes dépend de vos revenus (catégories R1 à R5). 
              En R1, vous pouvez récupérer jusqu'à 75% de votre investissement. 
              Multiplicateurs de x1 (R5) à x6 (R1) selon votre situation.
            </p>
            <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 font-bold text-lg px-8">
              Calculer mes Primes
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
