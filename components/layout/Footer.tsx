import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background text-foreground/80">
      <div className="container px-4 md:px-6 py-10 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
               <Image src="/logo.png" alt="Lazo Toiture" width={150} height={40} className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Votre expert local en toiture, façade et panneaux photovoltaïques. 
              Intervention rapide et garantie décennale.
            </p>
            <div className="flex flex-col gap-2 text-sm mt-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Rue Hoyoux 88, 4040 Herstal</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+32 4 123 45 67</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span>contact@lazotoiture.be</span>
              </div>
            </div>
          </div>
          
          <div className="grid gap-4">
            <h3 className="text-base font-semibold text-foreground">Services</h3>
            <ul className="grid gap-2 text-sm">
               <li><Link href="/toiture">Toiture & Rénovation</Link></li>
               <li><Link href="/photovoltaique">Panneaux Solaires</Link></li>
               <li><Link href="/facade">Isolation de Façade</Link></li>
               <li><Link href="/realisations">Nos Réalisations</Link></li>
            </ul>
          </div>

          <div className="grid gap-4">
            <h3 className="text-base font-semibold text-foreground">Zones d'intervention</h3>
            <ul className="grid gap-2 text-sm">
               <li><Link href="/zone/herstal">Herstal</Link></li>
               <li><Link href="/zone/liege">Liège</Link></li>
               <li><Link href="/zone/oupeye">Oupeye</Link></li>
               <li><Link href="/zone/visé">Visé</Link></li>
               <li><Link href="/zone/ans">Ans</Link></li>
            </ul>
          </div>

          <div className="grid gap-4">
            <h3 className="text-base font-semibold text-foreground">Légal</h3>
            <ul className="grid gap-2 text-sm">
               <li><Link href="/mentions-legales">Mentions Légales</Link></li>
               <li><Link href="/confidentialite">Politique de Confidentialité</Link></li>
               <li><Link href="/cookies">Gestion des Cookies</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Lazo Group. Tous droits réservés. BE 0xxx.xxx.xxx</p>
        </div>
      </div>
    </footer>
  )
}
