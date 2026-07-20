"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Menu, Phone, ChevronDown, X } from "lucide-react"
import { site, telHref } from "@/lib/site"
import { SERVICES } from "@/lib/services"
import { COMMUNES } from "@/lib/communes"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Empêche le défilement de l'arrière-plan quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  // Échap ferme le menu mobile et le sous-menu « Nos services ».
  useEffect(() => {
    if (!open && !servicesOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return
      if (open) {
        setOpen(false)
        menuButtonRef.current?.focus() // rend le focus au déclencheur
      }
      setServicesOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, servicesOpen])

  // Piège à focus : au clavier, la tabulation ne doit pas sortir du panneau
  // ouvert pour aller parcourir la page masquée derrière lui.
  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    if (!panel) return

    const focusables = () =>
      panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )

    focusables()[0]?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return
      const items = focusables()
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    panel.addEventListener("keydown", onKey)
    return () => panel.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <>
      {/* Bandeau utilitaire — l'appel est la conversion principale du métier */}
      <div className="hidden bg-navy-900 text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
          <p className="text-white/80">
            Couvreur agréé en province de Liège · Devis gratuit sous 24 h
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/60">
              {site.address.street}, {site.address.postalCode} {site.address.locality}
            </span>
            <a
              href={telHref}
              className="flex items-center gap-2 font-semibold text-gold-400 transition hover:text-gold-300"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur transition-shadow",
          scrolled && "shadow-sm",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="shrink-0" aria-label={`${site.name} — accueil`}>
            <Image
              src="/images/lazo-logo-2025.png"
              alt={site.name}
              width={1000}
              height={397}
              priority
              className="h-9 w-auto sm:h-11"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-[0.95rem] font-medium transition hover:bg-navy-50"
              >
                Nos services
                <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} aria-hidden />
              </button>

              {servicesOpen && (
                <div className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-2">
                  <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-popover p-2 shadow-lg">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="rounded-lg px-3 py-2.5 transition hover:bg-navy-50"
                      >
                        <span className="block text-sm font-semibold text-navy-900">{s.navLabel}</span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">{s.tagline}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink href="/zones">Zones d&apos;intervention</NavLink>
            <NavLink href="/primes-wallonie">Primes 2026</NavLink>
            <NavLink href="/prix-toiture">Prix</NavLink>
            <NavLink href="/realisations">Réalisations</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={telHref}
              className="flex items-center gap-2 rounded-lg px-3 py-2 font-semibold text-navy-900 transition hover:bg-navy-50 lg:hidden"
              aria-label={`Appeler le ${site.phoneDisplay}`}
            >
              <Phone className="h-5 w-5" aria-hidden />
            </a>

            <Link
              href="/devis"
              className="hidden rounded-lg bg-gold-400 px-5 py-2.5 text-sm font-bold text-navy-900 shadow-sm transition hover:bg-gold-300 sm:block"
            >
              Devis gratuit
            </Link>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-haspopup="dialog"
              className="rounded-lg p-2 transition hover:bg-navy-50 lg:hidden"
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-6 w-6" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-navy-950/60"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-background shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <Image
                src="/images/lazo-logo-2025.png"
                alt={site.name}
                width={1000}
                height={397}
                className="h-8 w-auto"
              />
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  menuButtonRef.current?.focus()
                }}
                className="rounded-lg p-2 hover:bg-navy-50"
                aria-label="Fermer le menu"
              >
                <X className="h-6 w-6" aria-hidden />
              </button>
            </div>

            <div className="flex-1 px-4 py-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Nos services</p>
              <ul className="mb-6 space-y-0.5">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2.5 font-medium transition hover:bg-navy-50"
                    >
                      {s.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Informations</p>
              <ul className="mb-6 space-y-0.5">
                {[
                  { href: "/zones", label: "Zones d'intervention" },
                  { href: "/primes-wallonie", label: "Primes Wallonie 2026" },
                  { href: "/prix-toiture", label: "Prix d'une toiture" },
                  { href: "/realisations", label: "Réalisations" },
                  { href: "/a-propos", label: "À propos" },
                  { href: "/contact", label: "Contact" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2.5 font-medium transition hover:bg-navy-50"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Communes desservies
              </p>
              <div className="flex flex-wrap gap-1.5">
                {COMMUNES.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/zones/${c.slug}`}
                    onClick={() => setOpen(false)}
                    className="rounded-full bg-navy-50 px-3 py-1.5 text-sm transition hover:bg-navy-100"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="sticky bottom-0 space-y-2 border-t border-border bg-background p-4">
              <a
                href={telHref}
                className="flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-4 py-3 font-bold text-white"
              >
                <Phone className="h-5 w-5" aria-hidden />
                {site.phoneDisplay}
              </a>
              <Link
                href="/devis"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-gold-400 px-4 py-3 text-center font-bold text-navy-900"
              >
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-md px-3 py-2 text-[0.95rem] font-medium transition hover:bg-navy-50"
    >
      {children}
    </Link>
  )
}
