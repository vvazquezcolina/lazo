import type { Metadata } from "next"
import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import ContactForm from "@/components/contact-form"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact | Devis Gratuit Toiture, Solaire & Façade — Herstal, Liège",
  description:
    "Contactez Lazo Group à Herstal pour un devis gratuit. Toiture, panneaux solaires, bardage, isolation façade. Réponse rapide ☎ 0470 10 95 25.",
  keywords: "devis toiture Herstal, devis panneaux solaires Liège, contact couvreur Herstal, Lazo Group contact",
  openGraph: {
    title: "Contact Lazo Group | Devis Gratuit à Herstal",
    description: "Demandez votre devis gratuit pour vos travaux de rénovation à Herstal et Liège.",
    url: "https://www.lazotoiture.be/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Header />

      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 mt-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contactez-nous</h1>
          <p className="text-xl text-muted-foreground">
            Vous avez un projet? Notre équipe est prête à vous aider. Remplissez le formulaire ci-dessous et nous vous
            répondrons dans les 24 heures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="md:col-span-1 space-y-8">
            <div>
              <h3 className="font-bold text-lg mb-2">Téléphone</h3>
              <a href="tel:0470109525" className="text-accent font-semibold text-lg hover:underline">
                0470 10 95 25
              </a>
              <p className="text-sm text-muted-foreground mt-2">Lun-Sam: 9h00-17h00</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <a href="mailto:info@lazogroup.be" className="text-accent font-semibold hover:underline">
                info@lazogroup.be
              </a>
              <p className="text-sm text-muted-foreground mt-2">Réponse sous 24h</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Siège social</h3>
              <p className="text-sm text-foreground">
                Rue Hoyoux 90
                <br />
                4040 Herstal, Belgique
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Zones d'intervention</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Herstal</li>
                <li>Liège</li>
                <li>Oupeye</li>
                <li>Et alentours</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
