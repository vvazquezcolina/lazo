import { CheckCircle2, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative bg-primary pt-10 pb-20 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background Pattern/Image Placeholder */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1628135899981-d143c7b8979a?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary via-primary/90 to-primary/50" />

      <div className="container relative z-10 flex flex-col lg:flex-row gap-12 items-center">
        {/* Text Content */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            Votre Expert <span className="text-secondary">Toiture & Énergie</span> à Herstal et Liège
          </h1>
          <p className="text-lg text-slate-300 md:text-xl max-w-2xl mx-auto lg:mx-0">
            Rénovez votre maison et réduisez vos factures d'énergie. 
            Solution 360° : Toiture, Isolation, Photovoltaïque. 
            <span className="block mt-2 font-semibold text-white">Expert agréé pour vos travaux de rénovation énergétique.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-slate-200 text-sm font-medium">
             <div className="flex items-center gap-2"><CheckCircle2 className="text-secondary h-5 w-5"/> Devis Gratuit</div>
             <div className="flex items-center gap-2"><CheckCircle2 className="text-secondary h-5 w-5"/> Agrée CSTC & Rescert</div>
             <div className="flex items-center gap-2"><CheckCircle2 className="text-secondary h-5 w-5"/> Garantie 10 ans</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold text-lg px-8 h-14">
              <Link href="#devis">
                Demander un Devis Gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white font-semibold h-14">
              <Link href="tel:+3241234567">
                <Phone className="mr-2 h-5 w-5" />
                Appeler maintenant
              </Link>
            </Button>
          </div>
        </div>

        {/* CTA Card */}
        <div className="w-full lg:w-[480px] shrink-0">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-black text-foreground mb-4">
              Consultation Gratuite
            </h3>
            <p className="text-slate-600 mb-6">
              Recevez un devis personnalisé et des conseils d'expert pour votre projet de rénovation énergétique.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Devis détaillé gratuit</span>
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Visite sur site offerte</span>
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Conseils personnalisés</span>
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>Accompagnement complet</span>
              </li>
            </ul>
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12">
              <Link href="#devis">
                Demander mon Devis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
