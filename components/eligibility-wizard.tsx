"use client"

import { useState } from "react"
import { CheckCircle2, Home, Zap, Building2, AlertCircle } from "lucide-react"

export function EligibilityWizard() {
  const [step, setStep] = useState(1)
  const [projectType, setProjectType] = useState<string | null>(null)
  const [urgency, setUrgency] = useState<string | null>(null)
  const [incomeCategory, setIncomeCategory] = useState<string | null>(null)
  const [showResults, setShowResults] = useState(false)

  const projectTypes = [
    { id: "roof", label: "Toiture", icon: Home, emoji: "🏠" },
    { id: "solar", label: "Solaire", icon: Zap, emoji: "☀️" },
    { id: "facade", label: "Façade", icon: Building2, emoji: "🏢" },
  ]

  const urgencyLevels = [
    { id: "emergency", label: "Urgence/Fuite", description: "Problème immédiat" },
    { id: "planned", label: "Planification 2025", description: "Projet budgété" },
    { id: "curious", label: "Curiosité", description: "Pour en savoir plus" },
  ]

  const incomeCategories = [
    { id: "r1", label: "R1", description: "< 26.900€ (Très modeste)" },
    { id: "r2", label: "R2", description: "26.900€ - 44.000€ (Modeste)" },
    { id: "r3", label: "R3", description: "44.000€ - 63.000€ (Intermédiaire)" },
    { id: "r4", label: "R4", description: "> 63.000€ (Aisée)" },
  ]

  const calculateSubsidy = () => {
    const baseSubsidies: Record<string, Record<string, number>> = {
      roof: {
        r1: 5000,
        r2: 4000,
        r3: 3000,
        r4: 2000,
      },
      solar: {
        r1: 8000,
        r2: 6500,
        r3: 5000,
        r4: 3500,
      },
      facade: {
        r1: 4500,
        r2: 3500,
        r3: 2500,
        r4: 1500,
      },
    }

    return baseSubsidies[projectType || "roof"][incomeCategory || "r4"] || 2000
  }

  const getRecommendation = () => {
    if (projectType === "solar") {
      return "Rénoprêt 0% (Sans prime directe, mais taux privilégié)"
    }
    if (projectType === "roof" || projectType === "facade") {
      return "Eligible pour prime jusqu'à 6x votre investissement"
    }
    return "Eligible pour des aides spécifiques"
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
    else setShowResults(true)
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
      setShowResults(false)
    }
  }

  const resetWizard = () => {
    setStep(1)
    setProjectType(null)
    setUrgency(null)
    setIncomeCategory(null)
    setShowResults(false)
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="mb-4">Assistant d'Éligibilité aux Primes 2025</h2>
          <p className="text-lg text-muted-foreground">
            Découvrez en 3 questions vos aides disponibles pour votre projet de rénovation.
          </p>
        </div>

        {/* Progress Bar */}
        {!showResults && (
          <div className="mb-8 flex gap-2">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`h-2 flex-1 rounded-full transition-colors ${num <= step ? "bg-accent" : "bg-border"}`}
              />
            ))}
          </div>
        )}

        {/* Results View */}
        {showResults ? (
          <div className="space-y-8">
            {/* Success Icon */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Vous êtes éligible!</h3>
              <p className="text-muted-foreground">
                Basé sur votre profil, voici les aides disponibles pour votre projet.
              </p>
            </div>

            {/* Results Card */}
            <div className="bg-card border-2 border-accent rounded-lg p-8 space-y-6">
              {/* Project & Category Summary */}
              <div className="grid md:grid-cols-3 gap-4 pb-6 border-b border-border">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Type de projet</p>
                  <p className="font-semibold capitalize">{projectTypes.find((t) => t.id === projectType)?.label}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Urgence</p>
                  <p className="font-semibold capitalize">{urgencyLevels.find((u) => u.id === urgency)?.label}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Catégorie de revenus</p>
                  <p className="font-semibold">{incomeCategories.find((i) => i.id === incomeCategory)?.label}</p>
                </div>
              </div>

              {/* Main Subsidy */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground">Montant estimé de recouvrement</p>
                <div className="text-4xl font-bold text-accent">
                  {calculateSubsidy().toLocaleString("fr-BE", { style: "currency", currency: "EUR" })}
                </div>
                <p className="text-sm text-muted-foreground">Basé sur une estimation. Résultat final après visite.</p>
              </div>

              {/* Recommendation */}
              <div className="bg-primary/5 border border-accent/20 rounded-lg p-4">
                <p className="text-sm font-semibold mb-2">Type d'aide recommandée</p>
                <p className="text-base font-medium">{getRecommendation()}</p>
              </div>

              {/* Info Box */}
              {urgency === "emergency" && (
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-destructive mb-1">Urgence détectée</p>
                    <p className="text-foreground">
                      Vous pouvez contacter notre équipe d'urgence 24/7 pour une intervention rapide.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <p className="text-center text-sm text-muted-foreground">
                Pour confirmer votre éligibilité et planifier votre visite technique gratuite:
              </p>
              <div className="bg-card border-2 border-border rounded-lg p-6 space-y-4">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="tel"
                  placeholder="+32 4 XX XX XX XX"
                  className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button className="w-full bg-accent text-accent-foreground py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">
                  Recevoir mon devis et planifier visite
                </button>
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetWizard}
              className="w-full text-muted-foreground hover:text-foreground transition-colors py-2 text-sm underline"
            >
              Refaire le diagnostic
            </button>
          </div>
        ) : (
          /* Steps View */
          <div className="bg-card border border-border rounded-lg p-8">
            {/* Step 1: Project Type */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Quel projet avez-vous en tête?</h3>
                  <p className="text-muted-foreground mb-6">Sélectionnez le type de travaux</p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {projectTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setProjectType(type.id)}
                      className={`p-6 rounded-lg border-2 transition-all text-center ${
                        projectType === type.id ? "border-accent bg-accent/5" : "border-border hover:border-accent/50"
                      }`}
                    >
                      <div className="text-4xl mb-3">{type.emoji}</div>
                      <p className="font-semibold">{type.label}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Urgency */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Quelle est l'urgence?</h3>
                  <p className="text-muted-foreground mb-6">Aidez-nous à comprendre votre timeline</p>
                </div>

                <div className="space-y-3">
                  {urgencyLevels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setUrgency(level.id)}
                      className={`w-full p-4 rounded-lg border-2 transition-all text-left flex items-center gap-4 ${
                        urgency === level.id ? "border-accent bg-accent/5" : "border-border hover:border-accent/50"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 ${
                          urgency === level.id ? "border-accent bg-accent" : "border-border"
                        }`}
                      />
                      <div className="flex-1">
                        <p className="font-semibold">{level.label}</p>
                        <p className="text-sm text-muted-foreground">{level.description}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {urgency === "emergency" && (
                  <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 flex gap-3">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                    <p className="text-sm text-foreground">
                      Contactez notre équipe d'urgence maintenant: <span className="font-bold">+32 4 XXX XXXX</span>
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Income Category */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Catégorie de revenus</h3>
                  <p className="text-muted-foreground mb-6">
                    Cette information détermine le montant des aides disponibles
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {incomeCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setIncomeCategory(cat.id)}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        incomeCategory === cat.id ? "border-accent bg-accent/5" : "border-border hover:border-accent/50"
                      }`}
                    >
                      <p className="font-bold mb-1">{cat.label}</p>
                      <p className="text-sm text-muted-foreground">{cat.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 justify-between mt-8 pt-6 border-t border-border">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className="px-6 py-2 rounded-md border border-border font-semibold hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Précédent
              </button>
              <button
                onClick={handleNext}
                disabled={(step === 1 && !projectType) || (step === 2 && !urgency) || (step === 3 && !incomeCategory)}
                className="px-6 py-2 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              >
                {step === 3 ? "Voir les résultats" : "Suivant"}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
