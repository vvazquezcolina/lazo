"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, Phone, Hammer, HardHat } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Toiture", href: "/toiture" },
  { name: "Photovoltaïque", href: "/photovoltaique" },
  { name: "Façade", href: "/facade" },
  { name: "Réalisations", href: "/realisations" },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Lazo Toiture" width={160} height={45} className="h-10 w-auto object-contain" priority />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === item.href ? "text-foreground" : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-white group">
            <Phone className="mr-2 h-4 w-4 animate-pulse" />
            Urgence 24/7
          </Button>
          <Button variant="secondary" className="font-bold">
            <Hammer className="mr-2 h-4 w-4" />
            Diagnostiquer mon Projet
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pl-1 pr-0">
            <div className="px-7">
              <Link
                href="/"
                className="flex items-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                 <Image src="/logo.png" alt="Lazo Toiture" width={140} height={40} className="h-9 w-auto object-contain" />
              </Link>
            </div>
            <div className="flex flex-col gap-4 mt-8 px-7">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground border",
                    pathname === item.href && "bg-accent"
                  )}
                >
                  <div className="text-sm font-medium leading-none">{item.name}</div>
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                 <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Diagnostiquer mon Projet
                 </Button>
                 <Button variant="outline" className="w-full border-destructive text-destructive">
                    Urgence 24/7
                 </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
