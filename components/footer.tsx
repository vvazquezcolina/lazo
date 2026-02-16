import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-10">
          {/* Column 1: Menu */}
          <div>
            <h4 className="font-bold text-accent text-lg mb-5">Menu</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-blue-200 hover:text-accent transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-accent transition-colors">
                  Contact & devis
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-bold text-accent text-lg mb-5">Nos services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/toiture" className="text-blue-200 hover:text-accent transition-colors">
                  Toiture
                </Link>
              </li>
              <li>
                <Link href="/bardage" className="text-blue-200 hover:text-accent transition-colors">
                  Bardage
                </Link>
              </li>
              <li>
                <Link href="/plate-forme" className="text-blue-200 hover:text-accent transition-colors">
                  Plate-forme
                </Link>
              </li>
              <li>
                <Link href="/photovoltaique" className="text-blue-200 hover:text-accent transition-colors">
                  Photovoltaïque
                </Link>
              </li>
              <li>
                <Link href="/facade" className="text-blue-200 hover:text-accent transition-colors">
                  Isolation façade et crépis
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Practical Info */}
          <div>
            <h4 className="font-bold text-accent text-lg mb-5">Infos pratiques</h4>
            <div className="space-y-4 text-sm">
              <a href="tel:0470109525" className="flex items-center gap-3 text-blue-200 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                0470 10 95 25
              </a>
              <a href="mailto:info@lazogroup.be" className="flex items-center gap-3 text-blue-200 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                info@lazogroup.be
              </a>
              <a
                href="https://maps.app.goo.gl/UpXr5Ehh2i2KtGeW8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-200 hover:text-accent transition-colors"
              >
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                Rue Hoyoux 90, 4040 Herstal
              </a>
              <div className="flex items-center gap-3 text-blue-200">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <div>
                  <p>Lundi - Samedi: 9:00 - 17h00</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </div>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/Lazo-Toitures-et-Photovolta%C3%AFques/100094147226820/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-200 hover:text-accent transition-colors mt-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/lazo.toiture/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-200 hover:text-accent transition-colors mt-2 ml-4"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-800 pt-8 text-center text-sm text-blue-300">
          <p>&copy; 2025 Lazo Group. Tous droits réservés. TVA: BE 0802 601 457</p>
        </div>
      </div>
    </footer>
  )
}
