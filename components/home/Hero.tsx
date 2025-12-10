import { PlannerWizard } from "@/components/features/planner/PlannerWizard"
import { CheckCircle2 } from "lucide-react"

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
            <span className="block mt-2 font-semibold text-white">Eligible aux Primes Habitation 2025.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-slate-200 text-sm font-medium">
             <div className="flex items-center gap-2"><CheckCircle2 className="text-secondary h-5 w-5"/> Devis Gratuit</div>
             <div className="flex items-center gap-2"><CheckCircle2 className="text-secondary h-5 w-5"/> Agrée CSTC & Rescert</div>
             <div className="flex items-center gap-2"><CheckCircle2 className="text-secondary h-5 w-5"/> Garantie 10 ans</div>
          </div>
        </div>

        {/* Wizard / Lead Magnet */}
        <div className="w-full lg:w-[480px] shrink-0">
          <PlannerWizard />
        </div>
      </div>
    </section>
  )
}
