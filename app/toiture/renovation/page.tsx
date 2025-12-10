import type { Metadata } from "next"
import { ComparisonTable } from "@/components/ui/ComparisonTable"
import { LeadMagnet } from "@/components/features/LeadMagnet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Rénovation de Toiture à Herstal & Liège | Expert Agréé Lazo Group",
  description: "Service complet de rénovation de toiture : Tuiles, Ardoises, EPDM. Isolation conforme PEB 2025. Devis gratuit et accompagnement primes régions Wallonne.",
}

const tableData = [
  { material: "Tuile Céramique", lifespan: "50+ ans", characteristics: "Résistance au gel/degél, faible entretien, esthétique traditionnelle belge", insulation: "Bonne", isRecommended: true },
  { material: "Ardoise Naturelle", lifespan: "80+ ans", characteristics: "Très résistante aux intempéries, aspect prestigieux, pose sur liteaux", insulation: "Excellente", isRecommended: false },
  { material: "Tuile Béton", lifespan: "30-40 ans", characteristics: "Légère (poids réduit), grande variété de teintes, pose rapide", insulation: "Moyenne", isRecommended: false },
  { material: "EPDM (Plat)", lifespan: "50+ ans", characteristics: "Étanchéité totale, adaptée toits plats/inclinés, résistance UV", insulation: "Très Bonne", isRecommended: false },
]

export default function RenovationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Rénovation de Toiture Complète",
        "provider": { "@type": "LocalBusiness", "name": "Lazo Group Toiture" },
        "areaServed": ["Herstal", "Liège", "Oupeye", "Visé"],
        "description": "Remplacement de couverture, isolation sarking et charpente.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services Toiture",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Toiture en Tuiles" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Isolation Toiture" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Faut-il un permis d'urbanisme pour rénover sa toiture à Herstal ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "En règle générale, si vous ne changez pas le volume de la toiture ni son aspect extérieur de manière drastique (même matériau, même couleur), un permis n'est souvent pas requis. Toutefois, une isolation par l'extérieur (Sarking) qui rehausse le toit de plus de 30cm nécessite un permis simplifié. Nous vous accompagnons dans ces démarches."
            }
          },
          {
            "@type": "Question",
            "name": "Quelles sont les primes disponibles pour une toiture en 2025 ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La Région Wallonne propose des primes pour l'isolation et le remplacement de couverture. Le montant dépend de vos revenus (Catégorie R1 à R5) et du gain énergétique (coefficient R). Avec Lazo Group, nous calculons votre éligibilité en amont."
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
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Rénovation de Toiture <br /><span className="text-secondary">Durable & Isolée</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mb-8">
            Transformez votre habitation avec une nouvelle toiture performante. 
            Économisez jusqu'à 30% sur votre facture de chauffage grâce à nos solutions d'isolation Sarking.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-primary hover:bg-blue-700 font-bold text-lg px-8">Demander un Devis</Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white">Voir nos réalisations</Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 -mt-10 relative z-20">
         <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
               <h2 className="text-lg font-bold text-foreground mb-2 uppercase tracking-wide text-xs text-primary">En Bref</h2>
               <p className="text-slate-700 leading-relaxed font-medium">
                 La <strong>rénovation de toiture à Herstal</strong> implique généralement le remplacement de la couverture (tuile, ardoise) et, impérativement, l'amélioration de l'isolation thermique pour répondre aux normes PEB 2050. 
                 Si le volume du toit est modifié (ex: isolation par l'extérieur), un permis d'urbanisme simplifié est requis. 
                 <Link href="/contact" className="text-primary hover:underline mx-1">Contactez-nous</Link> pour vérifier la faisabilité.
               </p>
            </div>
         </div>
      </section>

      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Comparatif des Matériaux</h2>
          <p className="mb-6 text-slate-600">
            Choisir le bon matériau est crucial pour la longévité de votre toit et l'esthétique de votre façade. 
            Voici un comparatif technique pour vous aider à décider.
          </p>
          <ComparisonTable data={tableData} title="Tuile vs Ardoise vs EPDM" />
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Questions Fréquentes (FAQ)</h3>
            <Accordion type="single" collapsible className="bg-white rounded-xl shadow-sm border px-6">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold">Faut-il un permis pour rénover ?</AccordionTrigger>
                <AccordionContent>
                  Si vous remplacez à l'identique, non. Si vous isolez par l'extérieur (Sarking) et augmentez le volume, oui, un permis simplifié est nécessaire.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold">Combien de temps durent les travaux ?</AccordionTrigger>
                <AccordionContent>
                  Pour une toiture moyenne de 100m², comptez entre 1 à 2 semaines selon les conditions météo et la complexité de la charpente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold">Gérez-vous les primes ?</AccordionTrigger>
                <AccordionContent>
                  Oui, Lazo Group est agréé par la Région Wallonne. Nous préparons le dossier technique pour vous faciliter l'obtention des primes. L'audit énergétique n'est pas toujours obligatoire selon l'ampleur des travaux, mais nous le recommandons pour maximiser vos aides financières.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="sticky top-24">
           {/* Lead Magnet Integration */}
           <LeadMagnet />
           
           <div className="mt-8 bg-slate-100 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-foreground mb-2">Zone d'intervention</h4>
              <p className="text-sm text-slate-600 mb-4">
                Nous intervenons rapidement à <strong>Herstal, Liège, Oupeye, Visé</strong> et dans toute la province de Liège.
              </p>
              <div className="h-48 bg-slate-300 rounded-lg flex items-center justify-center text-slate-500 font-mono text-xs">
                 [Carte Google Maps Intégrée ici]
              </div>
           </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Notre Processus de Rénovation</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnostic Gratuit", desc: "Visite sur site, analyse de la charpente et de l'état de la couverture existante" },
              { step: "02", title: "Devis Détaillé", desc: "Devis transparent avec calcul des primes et recommandations techniques" },
              { step: "03", title: "Planification", desc: "Planning adapté à vos contraintes et aux conditions météorologiques" },
              { step: "04", title: "Réalisation", desc: "Travaux réalisés par nos équipes agréées avec suivi qualité continu" },
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
