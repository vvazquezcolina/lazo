import type { Metadata } from 'next'
import { ComparisonTable } from "@/components/ui/ComparisonTable"
import { LeadMagnet } from "@/components/features/LeadMagnet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Battery, Sun, TrendingUp, ShieldCheck, Euro, Check } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Installation Panneaux Solaires & Batteries à Herstal & Liège | Lazo Group',
  description: 'Installation photovoltaïque avec batteries domestiques Huawei & SMA. Rénoprêt à 0%. Devis gratuit et étude personnalisée à Herstal et Liège.',
}

const batteryData = [
  { material: "Huawei Luna", lifespan: "15 ans garantie", characteristics: "Rapport qualité-prix optimal, app mobile intuitive, gestion intelligente", insulation: "10 kWh", isRecommended: true },
  { material: "SMA Sunny Boy", lifespan: "20 ans garantie", characteristics: "Robustesse industrielle, garantie longue durée, réputation établie", insulation: "8-15 kWh", isRecommended: false },
  { material: "LG Chem RESU", lifespan: "10 ans garantie", characteristics: "Compacte, grande capacité disponible (6-16 kWh), installation flexible", insulation: "6-16 kWh", isRecommended: false },
  { material: "Tesla Powerwall", lifespan: "10 ans garantie", characteristics: "Technologie avancée, intégration écosystème Tesla, design premium", insulation: "13.5 kWh", isRecommended: false },
]

export default function SolarPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Installation Photovoltaïque et Batteries",
        "provider": { "@type": "LocalBusiness", "name": "Lazo Group" },
        "areaServed": ["Herstal", "Liège", "Oupeye", "Visé"],
        "description": "Installation de panneaux solaires et batteries domestiques pour l'autoconsommation énergétique.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services Photovoltaïque",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Installation Panneaux Solaires" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Installation Batteries Domestiques" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Peut-on encore obtenir des primes pour les panneaux solaires en 2025 ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Les primes directes pour l'installation photovoltaïque ont été supprimées. Cependant, vous pouvez bénéficier du Rénoprêt à taux zéro pour financer des montants importants de travaux. De plus, l'auto-consommation et la vente de surplus restent rentables."
            }
          },
          {
            "@type": "Question",
            "name": "Quelle est la différence entre Huawei Luna et SMA Sunny Boy ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Huawei Luna offre un excellent rapport qualité-prix avec une garantie de 15 ans et des fonctionnalités avancées. SMA Sunny Boy offre une garantie plus longue (20 ans) et une réputation de robustesse industrielle. Le choix dépend de vos besoins spécifiques et de vos priorités."
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
            <Badge className="mb-4 bg-secondary text-primary font-bold px-4 py-1">Rénoprêt 0% Disponible</Badge>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Panneaux Solaires & Batteries <br /><span className="text-secondary">Pour l'Autonomie Énergétique</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-8">
              Produisez et stockez votre propre électricité. Réduisez vos factures jusqu'à 70% avec une installation photovoltaïque moderne et des batteries domestiques.
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

      {/* Direct Answer Section */}
      <section className="container mx-auto px-4 py-8 -mt-10 relative z-20">
         <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-secondary flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
               <h2 className="text-lg font-bold text-foreground mb-2 uppercase tracking-wide text-xs text-secondary">En Bref</h2>
               <p className="text-slate-700 leading-relaxed font-medium">
                 L'<strong>installation photovoltaïque à Herstal et Liège</strong> permet de produire votre propre électricité et de la stocker via une batterie domestique. 
                 Bien que les primes directes aient été supprimées, le <strong>Rénoprêt à 0%</strong> permet de financer des montants importants de travaux sans intérêts. 
                 Avec l'autoconsommation, vous pouvez réduire vos factures énergétiques de 60-70%. 
                 <Link href="/contact" className="text-primary hover:underline mx-1">Contactez-nous</Link> pour une étude personnalisée.
               </p>
            </div>
         </div>
      </section>

      {/* Benefits Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
              <Euro className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Réduction Factures</h3>
            <p className="text-slate-600">Réduisez vos factures d'électricité de 60-70% grâce à l'autoconsommation et au stockage.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Battery className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Autonomie Énergétique</h3>
            <p className="text-slate-600">Stockez l'énergie produite pour l'utiliser le soir et la nuit, même en cas de panne réseau.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Rentabilité Long Terme</h3>
            <p className="text-slate-600">Amortissement en 8-10 ans, puis électricité quasi gratuite pendant 20+ ans.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Comparatif des Batteries Domestiques</h2>
          <p className="mb-6 text-slate-600">
            Le choix de la batterie est crucial pour maximiser votre autoconsommation. 
            Voici un comparatif des principales solutions disponibles sur le marché belge.
          </p>
          <ComparisonTable data={batteryData} title="Huawei vs SMA vs Tesla" />
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Pourquoi choisir Huawei Luna ?</h3>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-blue-900">Rapport qualité-prix optimal</strong>
                  <p className="text-blue-800 text-sm mt-1">Excellent compromis entre performance et investissement.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-blue-900">Garantie 15 ans</strong>
                  <p className="text-blue-800 text-sm mt-1">Couverture longue durée pour votre tranquillité.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-blue-900">App mobile intuitive</strong>
                  <p className="text-blue-800 text-sm mt-1">Suivez votre production et consommation en temps réel.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Questions Fréquentes</h3>
            <Accordion type="single" collapsible className="bg-white rounded-xl shadow-sm border px-6">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold">Peut-on encore obtenir des primes en 2025 ?</AccordionTrigger>
                <AccordionContent>
                  Les primes directes ont été supprimées, mais le Rénoprêt à 0% permet de financer des montants importants de travaux sans intérêts. L'autoconsommation et la vente de surplus restent très rentables.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold">Combien de temps pour amortir l'installation ?</AccordionTrigger>
                <AccordionContent>
                  En moyenne, comptez 8-10 ans d'amortissement selon votre consommation et l'ensoleillement de votre région. Ensuite, vous bénéficiez d'électricité quasi gratuite pendant 20+ ans.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold">Quelle puissance de panneaux pour ma maison ?</AccordionTrigger>
                <AccordionContent>
                  Cela dépend de votre consommation, de l'orientation de votre toit et de la superficie disponible. En moyenne, une maison de 150m² consomme 3500-4000 kWh/an. Nous réalisons une étude personnalisée gratuite.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-semibold">Les batteries sont-elles obligatoires ?</AccordionTrigger>
                <AccordionContent>
                  Non, mais elles permettent d'augmenter votre taux d'autoconsommation de 30% à 70-80%. Sans batterie, vous revendez le surplus au réseau à un prix moins intéressant.
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
                Garanties Incluses
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 mt-4">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Garantie matériel 25 ans (panneaux)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Garantie batterie 10-15 ans
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Maintenance incluse 2 ans
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Support technique 24/7
                </li>
              </ul>
           </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Notre Processus d'Installation</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Étude Personnalisée", desc: "Analyse de votre consommation, orientation toiture, dimensionnement optimal" },
              { step: "02", title: "Devis & Financement", desc: "Devis détaillé avec options de financement Rénoprêt à 0% et garanties" },
              { step: "03", title: "Installation", desc: "Pose des panneaux et batteries par équipes certifiées, raccordement au réseau" },
              { step: "04", title: "Mise en Service", desc: "Mise en service, formation à l'utilisation, suivi post-installation" },
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
