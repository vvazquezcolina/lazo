import type { Metadata } from "next"
import { LeadMagnet } from "@/components/features/LeadMagnet"
import { Button } from "@/components/ui/button"
import { Phone, Clock, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Réparation Fuite Toiture Urgence 24/7 | Liège & Herstal",
  description: "Intervention rapide pour fuites de toiture, tuiles cassées et dégâts tempête. Service d'urgence 24h/24 à Herstal et environs.",
}

export default function UrgencePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <section className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-red-700 px-4 py-1 rounded-full text-sm font-bold mb-4 animate-pulse">
                <Clock className="w-4 h-4" /> Service d'Urgence 24/7
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
                Réparation de Fuite & Dépannage
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-8 font-medium">
                Une infiltration ? Des tuiles envolées ? Nous intervenons en priorité pour sécuriser votre habitation à Liège et Herstal.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-slate-100 font-bold text-xl px-8 h-14 gap-2">
                    <Phone className="w-6 h-6" /> Appeler le 04 123 45 67
                </Button>
            </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Nos Services de Réparation</h2>
                <ul className="space-y-3">
                    {["Recherche de fuite (Infiltration)", "Remplacement de tuiles/ardoises cassées", "Réparation de cheminée", "Pose de bâche d'urgence", "Réparation de corniche percée"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <ShieldCheck className="w-5 h-5 text-green-500" />
                            <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="prose prose-slate">
                <h3>Pourquoi agir vite ?</h3>
                <p>
                    Une fuite non traitée peut causer des dégâts structurels majeurs à votre charpente et favoriser l'apparition de mérule.
                    Nos équipes interviennent dans les 4h pour la mise hors d'eau (bâchage) avant la réparation définitive.
                </p>
            </div>
        </div>

        <div>
            <div className="bg-white p-1 rounded-2xl shadow-xl border border-slate-200">
                <LeadMagnet />
            </div>
        </div>
      </section>
    </div>
  )
}
