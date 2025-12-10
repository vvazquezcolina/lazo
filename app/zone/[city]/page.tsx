import { Metadata } from "next"
import { notFound } from "next/navigation"
import { LeadMagnet } from "@/components/features/LeadMagnet"
import { ServiceGrid } from "@/components/home/ServiceGrid"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Props = {
  params: { city: string }
}

const ZONES: Record<string, { name: string; zip: string; title: string }> = {
  herstal: { name: "Herstal", zip: "4040", title: "Couvreur à Herstal" },
  liege: { name: "Liège", zip: "4000", title: "Toiture & Solaire à Liège" },
  oupeye: { name: "Oupeye", zip: "4680", title: "Rénovation Toiture Oupeye" },
  vise: { name: "Visé", zip: "4600", title: "Expert Toiture à Visé" },
  ans: { name: "Ans", zip: "4430", title: "Couvreur Ans & Alleur" },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = params.city.toLowerCase()
  const zone = ZONES[city]

  if (!zone) return { title: "Zone non trouvée" }

  return {
    title: `${zone.title} | Devis Gratuit & Urgence 24/7 - Lazo Group`,
    description: `Besoin d'un couvreur à ${zone.name} (${zone.zip}) ? Réparation fuite, rénovation complète et panneaux solaires. Intervention rapide dans le quartier et alentours.`,
  }
}

export default function ZonePage({ params }: Props) {
  const city = params.city.toLowerCase()
  const zone = ZONES[city]

  if (!zone) notFound()

  // Local Schema.org
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": `Lazo Toiture ${zone.name}`,
    "url": `https://www.lazotoiture.be/zone/${city}`,
    "areaServed": {
      "@type": "City",
      "name": zone.name,
      "postalCode": zone.zip
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": zone.name,
      "addressCountry": "BE"
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Local */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 bg-primary rounded-full text-xs font-bold uppercase tracking-wide mb-4">
              Intervention Locale : {zone.zip}
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Entrepreneur de Toiture & Photovoltaïque à <span className="text-secondary">{zone.name}</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Lazo Group accompagne les propriétaires de {zone.name} pour tous travaux de toiture, isolation et énergie solaire. 
              Primes Région Wallonne garanties.
            </p>
            <div className="flex gap-4">
                <Button size="lg" className="bg-white text-foreground hover:bg-slate-100 font-bold">
                    Demander mon devis à {zone.name}
                </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Strategy: Why Us in This City? */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-12">
         <div className="md:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
               <h2 className="text-2xl font-bold mb-4">Pourquoi choisir Lazo Group à {zone.name} ?</h2>
               <div className="prose prose-slate max-w-none">
                  <p>
                    Situés à proximité immédiate de <strong>{zone.name}</strong>, nous connaissons parfaitement les spécificités architecturales locales 
                    et les prescriptions urbanistiques de la commune. Que vous soyez près du centre ou en périphérie, 
                    nos équipes interviennent rapidement.
                  </p>
                  <h3>Nos Services Locaux :</h3>
                  <ul>
                    <li><strong>Rénovation complète :</strong> Tuiles, ardoises, plate-forme zinc/EPDM.</li>
                    <li><strong>Dépannage Urgence :</strong> Intervention sous 4h sur {zone.name}.</li>
                    <li><strong>Solaire :</strong> Installation panneaux Huawei/SMA.</li>
                  </ul>
                  <p>
                    Nous aidons également les résidents de {zone.name} à obtenir les primes communales (si disponibles) et régionales.
                  </p>
               </div>
            </div>

            <ServiceGrid />
         </div>

         <div className="space-y-8">
            {/* Lead Magnet "Local" */}
            <div className="sticky top-24">
                <LeadMagnet />
            </div>
         </div>
      </section>

      {/* SEO Internal Links */}
      <section className="bg-white py-12 border-t border-slate-100">
         <div className="container mx-auto px-4 text-center">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Zones limitrophes</h3>
            <div className="flex flex-wrap justify-center gap-4">
               {Object.entries(ZONES).map(([key, z]) => (
                   key !== city && (
                       <Link key={key} href={`/zone/${key}`} className="text-slate-600 hover:text-primary hover:underline">
                          Toiture {z.name}
                       </Link>
                   )
               ))}
            </div>
         </div>
      </section>
    </div>
  )
}
