import Link from "next/link"
import { Home, Sun, Layers, ArrowRight, ShieldCheck, Zap, ThermometerSun } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    title: "Toiture",
    role: "Protection",
    icon: Home,
    iconColor: "text-slate-700",
    description: "La première ligne de défense de votre habitation. Rénovation complète, isolation et réparation de fuites.",
    href: "/toiture/renovation",
    badgeColor: "bg-slate-100 text-slate-800",
  },
  {
    title: "Solaire",
    role: "Energía",
    icon: Sun,
    iconColor: "text-secondary",
    description: "Produisez votre propre électricité avec des panneaux photovoltaïques et stockez-la (Batteries Huawei/SMA).",
    href: "/photovoltaique/installation-batterie",
    badgeColor: "bg-amber-100 text-amber-800",
  },
  {
    title: "Façade",
    role: "Isolation",
    icon: Layers,
    iconColor: "text-primary",
    description: "Optimisez l'enveloppe thermique de votre maison avec un crépi isolant ou un bardage moderne.",
    href: "/facade/crepi-isolant",
    badgeColor: "bg-blue-100 text-blue-800",
  },
]

export function ServiceGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {services.map((service) => (
        <Card key={service.title} className="group relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 border-slate-200">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-slate-400 opacity-50 transition-all" />
          <CardHeader>
            <div className="flex justify-between items-start mb-2">
               <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 shadow-sm group-hover:scale-110 transition-transform`}>
                 <service.icon className={`h-7 w-7 ${service.iconColor}`} />
               </div>
               <Badge variant="secondary" className={`${service.badgeColor} font-bold px-3`}>
                  {service.role}
               </Badge>
            </div>
            <CardTitle className="text-2xl font-bold mt-4">{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed min-h-[80px]">{service.description}</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full justify-between hover:bg-slate-50 group-hover:border-slate-400 transition-all">
              <Link href={service.href}>
                Découvrir <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
