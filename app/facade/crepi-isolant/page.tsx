import type { Metadata } from 'next'
import { ComparisonTable } from "@/components/ui/ComparisonTable"
import { LeadMagnet } from "@/components/features/LeadMagnet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThermometerSun, Home, Euro, ShieldCheck, Check, Award } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Isolation de Façade & Crépi Isolant à Herstal & Liège | Lazo Group',
  description: 'Isolation thermique extérieure (ITE) et crépi isolant. Primes jusqu\'à 75% en Région Wallonne. Devis gratuit et accompagnement administratif.',
}

const isolationData = [
  { material: "Crépi Isolant (ITE)", lifespan: "30+ ans", characteristics: "Élimine ponts thermiques, ravalement inclus, performance R ≥ 4.0", insulation: "R ≥ 4.0", isRecommended: true },
  { material: "Bardage Bois", lifespan: "25-30 ans", characteristics: "Esthétique naturelle, ventilation sous bardage, entretien tous les 5-7 ans", insulation: "R ≥ 4.0", isRecommended: false },
  { material: "Parement Ardoise", lifespan: "50+ ans", characteristics: "Très durable, aspect prestigieux, pose sur ossature métallique", insulation: "R ≥ 4.0", isRecommended: false },
  { material: "Isolation Intérieure", lifespan: "30+ ans", characteristics: "Réduction espace habitable, ponts thermiques possibles, moins performant", insulation: "R ≥ 3.5", isRecommended: false },
]

export default function FacadePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Isolation de Façade et Crépi Isolant",
        "provider": { "@type": "LocalBusiness", "name": "Lazo Group" },
        "areaServed": ["Herstal", "Liège", "Oupeye", "Visé"],
        "description": "Isolation thermique extérieure (ITE) avec crépi isolant pour améliorer la performance énergétique de votre habitation.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services Façade",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Isolation Thermique Extérieure" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Crépi Isolant" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ravalement de Façade" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quelles sont les primes pour l'isolation de façade en 2025 ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La Région Wallonne propose des primes pour l'isolation des murs extérieurs. Le montant varie selon vos revenus (catégories R1 à R5) avec des multiplicateurs pouvant aller jusqu'à x6. En moyenne, vous pouvez récupérer 50-75% de votre investissement via les primes."
            }
          },
          {
            "@type": "Question",
            "name": "Faut-il un permis d'urbanisme pour isoler sa façade ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "L'isolation thermique extérieure (ITE) nécessite généralement un permis d'urbanisme car elle modifie l'aspect extérieur de votre habitation. Cependant, certaines communes appliquent des règles simplifiées pour les travaux énergétiques. Nous vous accompagnons dans ces démarches."
            }
          }
        ]
      }
    ]
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
              Isolation de Façade & Crépi Isolant <br /><span className="text-secondary">Jusqu'à -40% sur le Chauffage</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8">
              Transformez votre maison avec une isolation extérieure performante. 
              Économisez jusqu'à 40% sur vos factures de chauffage grâce à l'ITE (Isolation Thermique Extérieure) et bénéficiez de primes importantes.
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

      {/* Direct Answer Section */}
      <section className="container mx-auto px-4 py-8 -mt-10 relative z-20">
         <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
               <h2 className="text-lg font-bold text-foreground mb-2 uppercase tracking-wide text-xs text-primary">En Bref</h2>
               <p className="text-slate-700 leading-relaxed font-medium">
                 L'<strong>isolation de façade à Herstal et Liège</strong> (ITE - Isolation Thermique Extérieure) consiste à appliquer une couche isolante à l'extérieur de vos murs, puis à la recouvrir d'un crépi isolant ou d'un bardage. 
                 Cette technique offre le meilleur coefficient d'isolation (R ≥ 4.0) et permet de réduire vos factures de chauffage de 30-40%. 
                 Les <strong>primes de la Région Wallonne</strong> peuvent couvrir jusqu'à 75% des coûts selon vos revenus (catégories R1 à R5). 
                 Un permis d'urbanisme est généralement requis. <Link href="/contact" className="text-primary hover:underline mx-1">Contactez-nous</Link> pour vérifier l'éligibilité de votre projet.
               </p>
            </div>
         </div>
      </section>

      {/* Benefits Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <ThermometerSun className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Confort Thermique</h3>
            <p className="text-slate-600">Votre maison reste fraîche en été et chaude en hiver, avec une température homogène dans toutes les pièces.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Euro className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Économies Énergétiques</h3>
            <p className="text-slate-600">Réduction de 30-40% sur vos factures de chauffage, avec un retour sur investissement rapide grâce aux primes disponibles.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Plus-Value Immobilière</h3>
            <p className="text-slate-600">Amélioration significative de la valeur de votre bien et du certificat PEB (Pass énergétique).</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Solutions d'Isolation Comparées</h2>
          <p className="mb-6 text-slate-600">
            Plusieurs techniques d'isolation sont disponibles. L'ITE (Isolation Thermique Extérieure) est la plus performante 
            car elle élimine les ponts thermiques et préserve votre espace intérieur.
          </p>
          <ComparisonTable data={isolationData} title="Crépi vs Bardage vs Isolation Intérieure" />
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Pourquoi choisir le Crépi Isolant (ITE) ?</h3>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-blue-900">Meilleure performance thermique</strong>
                  <p className="text-blue-800 text-sm mt-1">Coefficient R ≥ 4.0, élimination complète des ponts thermiques.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-blue-900">Aucune perte d'espace intérieur</strong>
                  <p className="text-blue-800 text-sm mt-1">Contrairement à l'isolation intérieure, vous gardez tous vos m² habitables.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-blue-900">Ravalement esthétique inclus</strong>
                  <p className="text-blue-800 text-sm mt-1">Votre façade est rénovée dans le même temps, ajoutant de la valeur à votre bien.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-blue-900">Éligible aux primes maximales</strong>
                  <p className="text-blue-800 text-sm mt-1">L'ITE bénéficie des meilleurs taux de prime en Région Wallonne.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Questions Fréquentes</h3>
            <Accordion type="single" collapsible className="bg-white rounded-xl shadow-sm border px-6">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold">Quelles sont les primes disponibles en 2025 ?</AccordionTrigger>
                <AccordionContent>
                  Les primes varient selon vos revenus (catégories R1 à R5). En R1, vous pouvez récupérer jusqu'à 75% de l'investissement. 
                  Le multiplicateur va de x1 (R5) à x6 (R1). Nous calculons votre éligibilité exacte lors du devis.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold">Faut-il un permis d'urbanisme ?</AccordionTrigger>
                <AccordionContent>
                  Oui, l'ITE modifie l'aspect extérieur de votre habitation, donc un permis d'urbanisme est généralement requis. 
                  Nous préparons et déposons le dossier pour vous, en incluant les plans et les justifications techniques.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold">Combien de temps durent les travaux ?</AccordionTrigger>
                <AccordionContent>
                  Pour une maison moyenne (4 façades), comptez 2 à 3 semaines de travaux selon les conditions météo. 
                  Les échafaudages sont installés pour toute la durée, puis retirés une fois le crépi sec.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-semibold">Peut-on isoler seulement une partie de la façade ?</AccordionTrigger>
                <AccordionContent>
                  C'est possible, mais pour maximiser les primes et la performance, nous recommandons d'isoler l'ensemble des murs extérieurs. 
                  L'isolation partielle peut créer des ponts thermiques et réduire l'efficacité globale.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="sticky top-24">
           <LeadMagnet />
           
           <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                Garanties & Certifications
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 mt-4">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Certificat CSTC (Centre Scientifique et Technique)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Matériaux agréés Région Wallonne
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Garantie décennale travaux
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Accompagnement administratif primes
                </li>
              </ul>
           </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Notre Processus d'Isolation</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Étude & Permis", desc: "Analyse de votre façade, préparation du dossier de permis d'urbanisme" },
              { step: "02", title: "Devis Personnalisé", desc: "Devis détaillé avec calcul des primes et choix des matériaux isolants" },
              { step: "03", title: "Installation Échafaudage", desc: "Mise en place sécurisée des échafaudages et protection des abords" },
              { step: "04", title: "Pose & Finition", desc: "Application de l'isolant, pose du crépi ou bardage, finitions soignées" },
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
