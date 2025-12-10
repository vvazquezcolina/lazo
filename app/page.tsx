import { Hero } from "@/components/home/Hero"
import { ServiceGrid } from "@/components/home/ServiceGrid"
import { LeadMagnet } from "@/components/features/LeadMagnet"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Lazo Group Toiture & Photovoltaïque",
    "image": "https://www.lazotoiture.be/logo.png",
    "@id": "https://www.lazotoiture.be",
    "url": "https://www.lazotoiture.be",
    "telephone": "+3241234567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rue de l'exemple 123",
      "addressLocality": "Herstal",
      "postalCode": "4040",
      "addressCountry": "BE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.66,
      "longitude": 5.63
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "07:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.facebook.com/lazotoiture",
      "https://www.instagram.com/lazotoiture"
    ]
  }

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Hero />
      
      {/* Lead Magnet Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-200" id="devis">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-3xl mx-auto mb-10">
              <Badge className="mb-4 bg-green-600 hover:bg-green-700 text-base px-4 py-1">Gratuit & Sans Engagement</Badge>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                 Demandez votre Devis Gratuit
              </h2>
              <p className="text-xl text-slate-600">
                Recevez un devis personnalisé et une consultation gratuite pour votre projet de rénovation énergétique. 
                Nos experts vous accompagnent de A à Z.
              </p>
           </div>
           
           <div className="relative z-10">
              <LeadMagnet />
           </div>
        </div>
      </section>

      {/* Knowledge Graph / Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-foreground">Une Expertise Complète</h2>
             <p className="text-slate-500 mt-2">Nous connectons l'enveloppe de votre bâtiment (Toit + Façade) à sa production d'énergie (Solaire).</p>
           </div>
           <ServiceGrid />
        </div>
      </section>
      
      {/* Trust Section */}
      <section className="bg-primary py-12 text-white border-t border-primary/20">
        <div className="container text-center">
           <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-white/80">Certifications & Partenaires</h3>
           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 text-white/90 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Mock Logos - Replace with real Images in production */}
             <span className="text-2xl font-bold text-white">RESCERT</span>
             <span className="text-2xl font-bold text-white">CSTC</span>
             <span className="text-2xl font-bold text-white">Wallonie.be</span>
             <span className="text-2xl font-bold text-white">SMA Solar</span>
             <span className="text-2xl font-bold text-white">Rockwool</span>
           </div>
        </div>
      </section>
    </div>
  )
}
