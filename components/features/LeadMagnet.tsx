"use client"

import { useState, useTransition } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check, AlertTriangle, Calculator, Calendar, Phone, Loader2 } from "lucide-react"
import { submitLead } from "@/app/actions"
// @ts-ignore
import { useFormStatus } from "react-dom"

type Step = "type" | "urgency" | "income" | "result" | "success"

type UserData = {
  service: string
  urgency: string
  incomeCategory: string
  contact: {
    name: string
    email: string
    phone: string
  }
}

const INCOME_CATEGORIES = [
  { id: "R1", label: "R1: < 26.900 € (Ménage)", multiplier: "6x" },
  { id: "R2", label: "R2: 26.900 € - 38.300 €", multiplier: "4x" },
  { id: "R3", label: "R3: 38.300 € - 54.500 €", multiplier: "3x" },
  { id: "R4", label: "R4: 54.500 € - 104.400 €", multiplier: "2x" },
  { id: "R5", label: "R5: > 104.400 €", multiplier: "1x" },
]

export function LeadMagnet() {
  const [step, setStep] = useState<Step>("type")
  const [data, setData] = useState<UserData>({
    service: "",
    urgency: "",
    incomeCategory: "",
    contact: { name: "", email: "", phone: "" },
  })
  const [isPending, startTransition] = useTransition()

  const calculateEligibility = () => {
    if (data.service === "solar") {
      return {
        title: "Eligible pour Rénoprêt à 0%",
        description: "L'installation photovoltaïque ne bénéficie plus de primes directes, mais vous pouvez financer 100% des travaux à taux zéro.",
        amount: "Jusqu'à 60.000€ empruntables",
      }
    }

    if (data.service === "toiture" || data.service === "facade") {
      if (data.incomeCategory === "R1") {
        return {
          title: "Eligible à la Prime Maximum (x6)",
          description: "Vos revenus vous permettent de récupérer jusqu'à 70-80% de votre investissement via les primes de la Région Wallonne.",
          amount: "Estimation: Récupérez jusqu'à 6x le montant de base",
        }
      }
      if (data.incomeCategory === "R2" || data.incomeCategory === "R3") {
         return {
          title: "Eligible aux Primes Majorées",
          description: "Vous êtes éligible à un multiplicateur important sur les primes de base.",
          amount: "Multiplicateur x3 ou x4 actif",
        }
      }
    }

    return {
      title: "Eligible aux Primes de Base",
      description: "Vous avez droit aux primes de base pour la rénovation énergétique.",
      amount: "Primes standard Wallonie 2025",
    }
  }

  const result = calculateEligibility()

  const handleNext = () => {
    if (step === "type") setStep("urgency")
    else if (step === "urgency") {
      if (data.urgency === "emergency") {
        setStep("result") 
      } else {
        setStep("income")
      }
    }
    else if (step === "income") setStep("result")
  }
  
  const handleFormSubmit = async (formData: FormData) => {
      // Append state to formData
      formData.set("service", data.service)
      formData.set("urgency", data.urgency)
      formData.set("incomeCategory", data.incomeCategory)
      
      startTransition(async () => {
          const res = await submitLead(null, formData)
          if(res.success) {
              setStep("success")
          }
      })
  }

  const isEmergency = data.urgency === "emergency"

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl border-0 ring-1 ring-slate-200 bg-white/95 backdrop-blur-sm relative overflow-hidden text-foreground">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-red-500" />
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-black tracking-tight">
          <Calculator className="w-6 h-6 text-primary" />
          Assistant Primes & Devis 2025
        </CardTitle>
        <CardDescription className="text-base">
          Vérifiez votre éligibilité aux aides de l'État en <span className="font-bold text-primary">30 secondes</span>.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          {step === "type" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <Label className="text-lg">Quel type de projet envisagez-vous ?</Label>
              <RadioGroup
                onValueChange={(v) => setData({ ...data, service: v })}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {[
                  { id: "toiture", label: "Toiture", icon: "🏠" },
                  { id: "solar", label: "Panneaux Solaires", icon: "☀️" },
                  { id: "facade", label: "Façade / Isolation", icon: "🧱" },
                ].map((item) => (
                  <label
                    key={item.id}
                    className={`flex flex-col items-center justify-center gap-3 rounded-xl border-2 p-6 hover:bg-slate-50 hover:border-black cursor-pointer transition-all ${
                      data.service === item.id ? "border-black bg-slate-50 scale-105 shadow-md" : "border-slate-100"
                    }`}
                  >
                    <RadioGroupItem value={item.id} id={item.id} className="sr-only" />
                    <span className="text-4xl">{item.icon}</span>
                    <span className="font-semibold text-center leading-tight">{item.label}</span>
                  </label>
                ))}
              </RadioGroup>
            </motion.div>
          )}

          {step === "urgency" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <Label className="text-lg">Quelle est l'urgence des travaux ?</Label>
              <RadioGroup
                onValueChange={(v) => setData({ ...data, urgency: v })}
                className="grid gap-4"
              >
                <label className={`flex items-center space-x-4 border-2 p-4 rounded-xl cursor-pointer transition-all ${data.urgency === 'emergency' ? 'border-red-500 bg-red-50' : 'border-slate-100 hover:border-red-200'}`}>
                  <RadioGroupItem value="emergency" id="emergency" className="text-red-500 border-red-500" />
                  <div className="flex-1 flex items-center gap-3 text-red-700">
                    <AlertTriangle className="w-6 h-6" />
                    <div>
                        <div className="font-bold">Urgence / Fuite (24h)</div>
                        <div className="text-sm opacity-80">Intervention dans les 4h pour sécurisation</div>
                    </div>
                  </div>
                </label>
                
                <label className={`flex items-center space-x-4 border-2 p-4 rounded-xl cursor-pointer transition-all ${data.urgency === 'plan2025' ? 'border-black' : 'border-slate-100 hover:border-slate-300'}`}>
                  <RadioGroupItem value="plan2025" id="plan2025" />
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-slate-700" />
                    <div className="font-medium">Planification 2025</div>
                  </div>
                </label>

                <label className={`flex items-center space-x-4 border-2 p-4 rounded-xl cursor-pointer transition-all ${data.urgency === 'info' ? 'border-black' : 'border-slate-100 hover:border-slate-300'}`}>
                   <RadioGroupItem value="info" id="info" />
                    <div className="font-medium text-slate-600">Juste pour information</div>
                </label>
              </RadioGroup>
            </motion.div>
          )}

          {step === "income" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <Label className="text-lg">Catégorie de revenus (Ménage)</Label>
                <p className="text-sm text-slate-500">
                    C'est le facteur #1 qui détermine le montant de vos primes.
                </p>
              </div>
              <Select onValueChange={(v) => setData({ ...data, incomeCategory: v })}>
                <SelectTrigger className="h-14 text-lg">
                  <SelectValue placeholder="Sélectionnez votre tranche de revenus" />
                </SelectTrigger>
                <SelectContent>
                  {INCOME_CATEGORIES.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id} className="py-3">
                      <span className="font-bold mr-2">{cat.id}</span>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <div className="p-4 bg-blue-50 text-blue-800 text-sm rounded-lg border border-blue-100">
                Les montants sont basés sur le "Revenu de Référence" du ménage (Dernier avertissement extrait de rôle).
              </div>
            </motion.div>
          )}

          {step === "result" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6 text-center"
            >
              {isEmergency ? (
                 <div className="p-8 bg-red-50 rounded-xl border-2 border-red-100 shadow-inner">
                    <h3 className="text-2xl font-black text-red-700 mb-2 uppercase">Intervention Rapide Requise</h3>
                    <p className="mb-6 text-red-800 font-medium">
                      Nous avons une équipe de garde disponible sur votre région.
                    </p>
                    <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 gap-3 text-xl h-14 shadow-lg shadow-red-200">
                      <Phone className="w-6 h-6 animate-pulse" />
                      Appeler le 04 123 45 67
                    </Button>
                 </div>
              ) : (
                <div className="p-8 bg-green-50 rounded-xl border border-green-200 shadow-sm relative overflow-hidden">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">{result.title}</h3>
                  <div className="text-3xl font-black text-green-700 my-4 tracking-tight">{result.amount}</div>
                  <p className="text-green-800 font-medium">{result.description}</p>
                </div>
              )}

              <div className="space-y-4 text-left pt-4">
                <h4 className="font-bold text-lg px-1">Recevoir mon rapport d'éligibilité détaillé</h4>
                <form action={handleFormSubmit} className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                     <Input name="name" placeholder="Nom Complet" className="bg-slate-50" required />
                     <Input name="postalCode" placeholder="Code Postal" className="bg-slate-50" />
                  </div>
                  <Input name="email" placeholder="Email" type="email" className="bg-slate-50" required />
                  <Input name="phone" placeholder="Numéro de téléphone" type="tel" className="bg-slate-50" required />
                  
                  {!isEmergency && (
                      <Button className="w-full bg-black text-white hover:bg-slate-800 h-12 text-lg font-semibold shadow-lg shadow-slate-200 mt-4" disabled={isPending}>
                        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Envoyer ma demande →
                      </Button>
                  )}
                </form>
              </div>
            </motion.div>
          )}

          {step === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 text-center py-10"
              >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-bold">Demande Reçue !</h2>
                  <p className="text-slate-600">
                      Un expert Lazo va analyser votre dossier et vous recontacter sous 24h ouvrables.
                  </p>
                  <Button variant="outline" onClick={() => setStep("type")}>Nouvelle simulation</Button>
              </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
      <CardFooter className="flex justify-between bg-slate-50/50 p-6 border-t border-slate-100">
         {step !== "type" && step !== "result" && step !== "success" && (
           <Button variant="ghost" onClick={() => setStep(step === "income" ? "urgency" : "type")}>
             ← Retour
           </Button>
         )}
         {step !== "result" && step !== "success" && (
           <Button 
             className="ml-auto bg-black text-white hover:bg-slate-800 px-8" 
             onClick={handleNext}
             disabled={
               (step === "type" && !data.service) ||
               (step === "urgency" && !data.urgency) ||
               (step === "income" && !data.incomeCategory)
             }
           >
             Continuer
           </Button>
         )}
      </CardFooter>
    </Card>
  )
}
