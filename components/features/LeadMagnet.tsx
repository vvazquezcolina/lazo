"use client"

import { useState, useTransition } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check, FileText, Loader2, Calendar, MapPin } from "lucide-react"
import { submitLead } from "@/app/actions"

type Step = "form" | "success"

export function LeadMagnet() {
  const [step, setStep] = useState<Step>("form")
  const [isPending, startTransition] = useTransition()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    region: "",
    timing: "",
  })

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formDataObj = new FormData()
    formDataObj.set("name", formData.name)
    formDataObj.set("email", formData.email)
    formDataObj.set("phone", formData.phone)
    formDataObj.set("service", formData.projectType)
    formDataObj.set("postalCode", formData.region)
    formDataObj.set("message", `Région: ${formData.region}, Timing: ${formData.timing}`)
    
    startTransition(async () => {
      const res = await submitLead(null, formDataObj)
      if (res.success) {
        setStep("success")
      }
    })
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl border-0 ring-1 ring-slate-200 bg-white/95 backdrop-blur-sm relative overflow-hidden text-foreground">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-black tracking-tight">
          <FileText className="w-6 h-6 text-primary" />
          Demandez votre Devis Gratuit
        </CardTitle>
        <CardDescription className="text-base">
          Répondez à 3 questions simples et recevez un devis personnalisé pour votre projet.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {step === "form" && (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleFormSubmit}
            className="space-y-6"
          >
            {/* Question 1: Type de projet */}
            <div className="space-y-2">
              <Label htmlFor="projectType" className="text-base font-semibold">
                Quel est votre projet ? *
              </Label>
              <Select
                value={formData.projectType}
                onValueChange={(value) => setFormData({ ...formData, projectType: value })}
              >
                <SelectTrigger className="bg-slate-50 h-12">
                  <SelectValue placeholder="Sélectionnez votre type de projet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="toiture">Rénovation de Toiture</SelectItem>
                  <SelectItem value="isolation">Isolation (Toiture / Façade)</SelectItem>
                  <SelectItem value="photovoltaique">Panneaux Photovoltaïques</SelectItem>
                  <SelectItem value="facade">Isolation de Façade (ITE)</SelectItem>
                  <SelectItem value="reparation">Réparation / Urgence</SelectItem>
                  <SelectItem value="autre">Autre projet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Question 2: Région */}
            <div className="space-y-2">
              <Label htmlFor="region" className="text-base font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Dans quelle région vous trouvez-vous ? *
              </Label>
              <Select
                value={formData.region}
                onValueChange={(value) => setFormData({ ...formData, region: value })}
              >
                <SelectTrigger className="bg-slate-50 h-12">
                  <SelectValue placeholder="Sélectionnez votre région ou ville" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="liege">Province de Liège</SelectItem>
                  <SelectItem value="herstal">Herstal</SelectItem>
                  <SelectItem value="liege-ville">Liège (Ville)</SelectItem>
                  <SelectItem value="oupeye">Oupeye</SelectItem>
                  <SelectItem value="vise">Visé</SelectItem>
                  <SelectItem value="huy">Huy</SelectItem>
                  <SelectItem value="waremme">Waremme</SelectItem>
                  <SelectItem value="autre-liege">Autre commune (Province de Liège)</SelectItem>
                  <SelectItem value="autre">Autre région</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Question 3: Timing */}
            <div className="space-y-2">
              <Label htmlFor="timing" className="text-base font-semibold flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Quand souhaitez-vous commencer ? *
              </Label>
              <Select
                value={formData.timing}
                onValueChange={(value) => setFormData({ ...formData, timing: value })}
              >
                <SelectTrigger className="bg-slate-50 h-12">
                  <SelectValue placeholder="Sélectionnez votre timing" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="urgence">Urgence (sous 48h)</SelectItem>
                  <SelectItem value="1mois">Dans le mois</SelectItem>
                  <SelectItem value="3mois">Dans les 3 mois</SelectItem>
                  <SelectItem value="6mois">Dans les 6 mois</SelectItem>
                  <SelectItem value="2025">En 2025</SelectItem>
                  <SelectItem value="2026">En 2026 ou plus tard</SelectItem>
                  <SelectItem value="info">Juste pour information</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Coordonnées */}
            <div className="pt-4 border-t border-slate-200 space-y-4">
              <h3 className="font-semibold text-sm text-slate-700">Vos coordonnées</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-slate-50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="04..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-slate-50"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre@email.be"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-slate-50"
                  required
                />
              </div>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-lg p-4 text-sm text-green-800">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" />
                <div>
                  <strong>Ce que vous recevrez :</strong>
                  <ul className="mt-1 space-y-1 list-disc list-inside">
                    <li>Devis détaillé et personnalisé</li>
                    <li>Consultation gratuite sur site</li>
                    <li>Conseils d'expert adaptés à votre projet</li>
                  </ul>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg font-semibold shadow-lg"
              disabled={isPending || !formData.name || !formData.email || !formData.phone || !formData.projectType || !formData.region || !formData.timing}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  Recevoir mon Devis Gratuit
                </>
              )}
            </Button>

            <p className="text-xs text-center text-slate-500">
              En soumettant ce formulaire, vous acceptez d'être contacté par Lazo Group concernant votre demande de devis.
            </p>
          </motion.form>
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
              Un expert Lazo Group va analyser votre demande et vous recontacter sous <strong>24h ouvrables</strong> pour planifier une visite gratuite.
            </p>
            <div className="bg-slate-50 rounded-lg p-4 text-left space-y-2">
              <div className="flex items-center gap-2 text-slate-700">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">Prochaines étapes :</span>
              </div>
              <ul className="text-sm text-slate-600 space-y-1 ml-6 list-disc">
                <li>Analyse de votre demande par notre équipe</li>
                <li>Prise de contact sous 24h</li>
                <li>Visite gratuite sur site</li>
                <li>Devis détaillé personnalisé</li>
              </ul>
            </div>
            <Button variant="outline" onClick={() => {
              setStep("form")
              setFormData({
                name: "",
                email: "",
                phone: "",
                projectType: "",
                region: "",
                timing: "",
              })
            }}>
              Nouvelle demande
            </Button>
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
}
