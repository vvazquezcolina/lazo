"use client"

import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { ServicesGrid } from "@/components/services-grid"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ReviewsSection } from "@/components/reviews-section"
import { ArrowRight, Shield, Zap, Clock, Award } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lazo Group",
    url: "https://www.lazotoiture.be",
    logo: "/images/lazo-logo-2025.png",
    description: "Expert en toiture, photovoltaïque et isolation de façade à Herstal et région Liégeoise",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+32 470 10 95 25",
    },
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />

      <TopBar />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-900 to-primary py-24 md:py-36">
        {/* Background accent elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-[url('/images/lazo-logo-2025.png')] bg-no-repeat bg-right-bottom bg-contain opacity-[0.03]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 bg-accent/20 text-accent px-4 py-2 rounded-full border border-accent/40">
              <span className="text-sm font-semibold tracking-wide uppercase">Lazo Group — Herstal, Belgique</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Votre expert en toiture,
              <br />
              <span className="text-accent">photovoltaïque et isolation.</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              Notre mission : offrir des solutions solides et de confiance pour protéger votre maison et embellir
              votre quotidien. Toitures, bardages, plates-formes, panneaux solaires et façades isolantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-accent hover:bg-yellow-500 text-accent-foreground px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-yellow-400/50 text-lg"
              >
                Contactez-nous
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:0470109525"
                className="border-2 border-accent text-white px-8 py-4 rounded-full font-bold hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center gap-2 text-lg"
              >
                📞 0470 10 95 25
              </a>
            </div>

            {/* Trust metrics */}
            <div className="mt-16 grid grid-cols-3 gap-6 md:gap-12">
              <div>
                <div className="text-4xl md:text-5xl font-black text-accent">500+</div>
                <p className="text-blue-200 text-sm mt-2 font-medium">Projets réalisés</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-accent">15 ans</div>
                <p className="text-blue-200 text-sm mt-2 font-medium">D&apos;expertise</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-accent">5/5</div>
                <p className="text-blue-200 text-sm mt-2 font-medium">Avis clients ⭐</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid />

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-4">
            <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">Pourquoi nous choisir ?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Les meilleurs services experts pour votre habitat
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Lazo Group vous garantit un service de haute qualité pour tous vos travaux. Chaque projet est réalisé avec soin et professionnalisme.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: Shield,
                title: "Expertise et expérience",
                description: "Plus de 15 ans d'expertise dans le domaine de la toiture et de la rénovation.",
              },
              {
                icon: Award,
                title: "Travail de qualité",
                description: "Matériaux de haute qualité et finitions soignées pour une durabilité optimale.",
              },
              {
                icon: Zap,
                title: "Satisfaction client",
                description: "Note de 5/5 sur Google. Nos clients nous recommandent les yeux fermés.",
              },
              {
                icon: Clock,
                title: "Tarification transparente",
                description: "Devis gratuit et détaillé. Pas de surprises. Transparence totale sur les prix.",
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="p-8 bg-card rounded-2xl border border-border hover:border-accent hover:shadow-lg transition-all group text-center"
                >
                  <div className="mb-5 inline-flex items-center justify-center w-14 h-14 bg-primary rounded-full group-hover:bg-accent transition-colors">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Contact Section with Map */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
