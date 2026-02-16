"use client"

import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const services = [
    { label: "Toiture", href: "/toiture" },
    { label: "Bardage", href: "/bardage" },
    { label: "Plate-forme", href: "/plate-forme" },
    { label: "Photovoltaïque", href: "/photovoltaique" },
    { label: "Isolation façade et crépis", href: "/facade" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/lazo-logo-2025.png"
            alt="Lazo Group - Toiture & Photovoltaïque"
            width={120}
            height={50}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold text-primary hover:text-accent transition-colors">
            Accueil
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-colors">
              Nos services
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-border overflow-hidden z-50">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-5 py-3 text-sm text-primary hover:bg-accent/10 hover:text-accent transition-colors font-medium"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" className="text-sm font-semibold text-primary hover:text-accent transition-colors">
            Contact & localisation
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-2 bg-accent hover:bg-yellow-500 text-accent-foreground px-6 py-2.5 rounded-full font-bold transition-all hover:shadow-lg hover:shadow-yellow-400/40 text-sm"
        >
          DEVIS GRATUIT ▸
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-border bg-white px-4 py-4 flex flex-col gap-2 shadow-lg">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-primary hover:text-accent transition-colors py-2"
          >
            Accueil
          </Link>

          {/* Mobile Services Accordion */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex items-center justify-between text-sm font-semibold text-primary hover:text-accent transition-colors py-2"
          >
            Nos services
            <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
          </button>

          {mobileServicesOpen && (
            <div className="pl-4 flex flex-col gap-1 border-l-2 border-accent/30 ml-2">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-primary hover:text-accent transition-colors py-1.5 font-medium"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-primary hover:text-accent transition-colors py-2"
          >
            Contact & localisation
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center bg-accent hover:bg-yellow-500 text-accent-foreground px-6 py-3 rounded-full font-bold transition-all text-sm"
          >
            DEVIS GRATUIT ▸
          </Link>
        </nav>
      )}
    </header>
  )
}
