"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowLeft, Check, Euro, Calendar, FileText, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

const incomeCategories = [
  { id: "R1", label: "Catégorie R1 (Revenu < 36.6k€)", refund: "max. 6x le montant de base", info: "Revenu ménage inférieur à 36.600€ (majoré par enfant)" },
  { id: "R2", label: "Catégorie R2 (36.6k - 46.9k€)", refund: "max. 4x le montant de base", info: "Revenus modestes" },
  { id: "R3", label: "Catégorie R3 (46.9k - 104k€)", refund: "max. 3x le montant de base", info: "Revenus moyens" },
  { id: "R4", label: "Catégorie R4 (104k - 114k€)", refund: "max. 2x le montant de base", info: "Revenus supérieurs" },
  { id: "R5", label: "Catégorie R5 (> 114k€)", refund: "Montant de base", info: "Revenus élevés" },
]

export function PlannerWizard() {
  const [step, setStep] = React.useState(1)
  const [formData, setFormData] = React.useState({
    income: "",
    projectType: "",
    description: "",
    timing: "",
    name: "",
    email: "",
    phone: "",
    zip: "",
  })

  const updateData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => setStep(prev => prev + 1)
  const prevStep = () => setStep(prev => prev - 1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Integrate with EmailJS or backend here
    console.log("Form Submitted:", formData)
    alert("Merci! Votre demande a été envoyée. Un expert vous contactera sous 24h.")
  }

  const progress = (step / 3) * 100

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="relative h-2 w-full bg-secondary/20 rounded-full mb-8 overflow-hidden">
        <motion.div 
          className="h-full bg-secondary" 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
             <Card className="border-t-4 border-t-secondary shadow-lg">
               <CardHeader>
                 <CardTitle className="flex items-center gap-2"><Euro className="text-secondary"/> Votre Profil Prime 2025</CardTitle>
                 <CardDescription>Vérifiez votre éligibilité aux primes de la Région Wallonne.</CardDescription>
               </CardHeader>
               <CardContent className="space-y-6">
                 <div className="space-y-3">
                   <Label>Quel est votre type de projet ?</Label>
                   <Select onValueChange={(v) => updateData("projectType", v)}>
                     <SelectTrigger>
                       <SelectValue placeholder="Sélectionnez..." />
                     </SelectTrigger>
                     <SelectContent>
                       <SelectItem value="toiture">Rénovation Toiture</SelectItem>
                       <SelectItem value="isolation">Isolation</SelectItem>
                       <SelectItem value="solar">Panneaux Photovoltaïques</SelectItem>
                       <SelectItem value="facade">Façade</SelectItem>
                     </SelectContent>
                   </Select>
                 </div>

                 <div className="space-y-3">
                    <Label>Catégorie de Revenus (Ménage)</Label>
                    <RadioGroup onValueChange={(v) => updateData("income", v)} className="grid gap-4 pt-2">
                       {incomeCategories.map((cat) => (
                         <div key={cat.id} className="flex items-start space-x-2 border p-3 rounded-lg hover:bg-slate-50 cursor-pointer [&:has(:checked)]:border-secondary [&:has(:checked)]:bg-secondary/5 transition-all">
                           <RadioGroupItem value={cat.id} id={cat.id} className="mt-1" />
                           <div className="grid gap-1.5 cursor-pointer w-full" onClick={() => updateData("income", cat.id)}>
                             <Label htmlFor={cat.id} className="font-semibold cursor-pointer">{cat.label}</Label>
                             <p className="text-sm text-muted-foreground">{cat.info}</p>
                             {formData.income === cat.id && (
                               <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="text-secondary font-bold text-sm mt-1">
                                  <Check className="inline h-4 w-4 mr-1"/>
                                  {cat.refund}
                               </motion.div>
                             )}
                           </div>
                         </div>
                       ))}
                    </RadioGroup>
                 </div>
               </CardContent>
               <CardFooter>
                 <Button className="w-full bg-primary" onClick={nextStep} disabled={!formData.income || !formData.projectType}>
                   Continuer <ArrowRight className="ml-2 h-4 w-4"/>
                 </Button>
               </CardFooter>
             </Card>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
             key="step2"
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             exit={{ opacity: 0, x: 20 }}
          >
            <Card className="border-t-4 border-t-secondary shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><FileText className="text-secondary"/> Détails du Projet</CardTitle>
                <CardDescription>Aidez-nous à préparer notre visite.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Description du projet</Label>
                  <Textarea 
                    placeholder="Ex: Je souhaite rénover ma toiture plate de 80m² et isoler..." 
                    value={formData.description}
                    onChange={(e) => updateData("description", e.target.value)}
                    className="min-h-[120px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Quand souhaitez-vous commencer ?</Label>
                  <Select onValueChange={(v) => updateData("timing", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">Dès que possible (Urgent)</SelectItem>
                      <SelectItem value="3months">Dans les 3 mois</SelectItem>
                      <SelectItem value="6months">Dans les 6 mois</SelectItem>
                      <SelectItem value="2026">En 2026</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" onClick={prevStep}><ArrowLeft className="mr-2 h-4 w-4"/> Retour</Button>
                <Button className="bg-primary" onClick={nextStep} disabled={!formData.timing}>Suivant <ArrowRight className="ml-2 h-4 w-4"/></Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}

        {step === 3 && (
           <motion.div
             key="step3"
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             exit={{ opacity: 0, x: 20 }}
           >
             <Card className="border-t-4 border-t-secondary shadow-lg">
               <CardHeader>
                 <CardTitle className="flex items-center gap-2"><User className="text-secondary"/> Vos Coordonnées</CardTitle>
                 <CardDescription>Pour recevoir votre analyse gratuite.</CardDescription>
               </CardHeader>
               <CardContent className="space-y-4">
                 <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <Label>Nom</Label>
                     <Input placeholder="Votre nom" value={formData.name} onChange={(e) => updateData("name", e.target.value)}/>
                   </div>
                   <div className="space-y-2">
                     <Label>Code Postal</Label>
                     <Input placeholder="Ex: 4040" value={formData.zip} onChange={(e) => updateData("zip", e.target.value)}/>
                   </div>
                 </div>
                 <div className="space-y-2">
                   <Label>Email</Label>
                   <Input type="email" placeholder="nom@exemple.be" value={formData.email} onChange={(e) => updateData("email", e.target.value)}/>
                 </div>
                 <div className="space-y-2">
                   <Label>Téléphone</Label>
                   <Input type="tel" placeholder="04..." value={formData.phone} onChange={(e) => updateData("phone", e.target.value)}/>
                 </div>
               </CardContent>
               <CardFooter className="flex justify-between">
                  <Button variant="ghost" onClick={prevStep}><ArrowLeft className="mr-2 h-4 w-4"/> Retour</Button>
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-1/2 font-bold" onClick={handleSubmit} disabled={!formData.name || !formData.phone}>
                    Recevoir mon Analyse
                  </Button>
               </CardFooter>
             </Card>
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
