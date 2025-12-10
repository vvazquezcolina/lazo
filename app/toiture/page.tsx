import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, AlertTriangle, Wrench, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Services de Toiture à Herstal & Liège | Rénovation, Réparation, Isolation",
  description: "Services complets de toiture : rénovation complète, réparation de fuites, isolation sarking. Expert agréé à Herstal et Liège. Devis gratuit et primes Région Wallonne.",
}

const services = [
  {
    title: "Rénovation Complète",
    description: "Remplacement complet de votre toiture avec isolation performante. Tuiles, ardoises, EPDM. Conforme aux normes PEB 2025.",
    href: "/toiture/renovation",
    icon: Home,
    badge: "Populaire",
    features: ["Remplacement couverture", "Isolation sarking", "Charpente si nécessaire", "Garantie 10 ans"]
  },
  {
    title: "Réparation & Urgence",
    description: "Intervention rapide 24/7 pour fuites, tuiles cassées, dégâts tempête. Sécurisation en moins de 4h.",
    href: "/toiture/reparation-fuite",
    icon: AlertTriangle,
    badge: "Urgence 24/7",
    features: ["Recherche de fuite", "Remplacement tuiles", "Pose bâche d'urgence", "Réparation cheminée"]
  },
]

export default function ToiturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Services de Toiture Lazo Group",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Lazo Group Toiture"
    },
    "areaServed": ["Herstal", "Liège", "Oupeye", "Visé"],
    "description": "Services complets de rénovation, réparation et isolation de toiture en Province de Liège.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services Toiture",
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
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Services de <span className="text-secondary">Toiture</span> à Herstal & Liège
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8">
              Expert en rénovation, réparation et isolation de toiture. Nous couvrons tous vos besoins, 
              de l'urgence 24/7 à la rénovation complète avec primes Région Wallonne.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold text-lg px-8">
                Demander un Devis
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white">
                Urgence 24/7
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="group hover:shadow-xl transition-all border-slate-200">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800 font-bold">
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
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

        {/* Why Choose Us */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi Choisir Lazo Group pour votre Toiture ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Agréé</h3>
              <p className="text-slate-600">Certifié CSTC et Rescert. Maîtrises des normes PEB 2025 et éligibilité aux primes.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Réactivité</h3>
              <p className="text-slate-600">Intervention sous 4h pour les urgences. Planning flexible pour les rénovations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Garanties Solides</h3>
              <p className="text-slate-600">Garantie décennale sur les travaux. Suivi post-intervention et maintenance disponible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Notre Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnostic Gratuit", desc: "Visite sur site et analyse de votre toiture" },
              { step: "02", title: "Devis Détaillé", desc: "Devis transparent avec calcul des primes" },
              { step: "03", title: "Planification", desc: "Planning adapté à vos contraintes" },
              { step: "04", title: "Réalisation", desc: "Travaux réalisés par nos équipes agréées" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
