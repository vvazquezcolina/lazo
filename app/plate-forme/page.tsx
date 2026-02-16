import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LayoutGrid, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Toiture Plate Herstal & Liège | Étanchéité EPDM — Devis Gratuit",
    description: "Installation et rénovation de toitures plates à Herstal et Liège. Étanchéité EPDM, isolation K60. Matériaux durables. Devis gratuit ☎ 0470 10 95 25.",
    keywords: "toiture plate Herstal, toiture plate Liège, étanchéité EPDM, toiture plate isolation, plate-forme toiture Wallonie",
    openGraph: {
        title: "Toiture Plate Herstal & Liège | Lazo Group",
        description: "Toitures plates et étanchéité EPDM à Herstal. Installation et rénovation. Devis gratuit.",
        url: "https://www.lazotoiture.be/plate-forme",
    },
}

export default function PlateFormePage() {
    return (
        <main className="min-h-screen">
            <TopBar />
            <Header />

            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-900 to-primary py-20 md:py-28">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 mb-6 bg-accent/20 text-accent px-4 py-2 rounded-full border border-accent/40">
                            <LayoutGrid className="w-4 h-4" />
                            <span className="text-sm font-semibold">Nos services</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                            Plate-forme
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
                            Nos services incluent l'installation de toitures plates pour les bâtiments modernes, avec des
                            matériaux adaptés et une étanchéité optimale garantie.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="bg-accent hover:bg-yellow-500 text-accent-foreground px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-yellow-400/50"
                            >
                                Devis gratuit
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a
                                href="tel:0470109525"
                                className="border-2 border-accent text-white px-8 py-4 rounded-full font-bold hover:bg-accent hover:text-accent-foreground transition-colors text-center"
                            >
                                📞 0470 10 95 25
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Toitures plates et étanchéité</h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground">
                        <p className="leading-relaxed mb-6">
                            Les toitures plates nécessitent une expertise particulière pour assurer une étanchéité parfaite et durable.
                            Lazo Group utilise les meilleurs matériaux et techniques pour garantir la longévité de votre toiture plate.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 my-10">
                            {[
                                { title: "Étanchéité garantie", desc: "Systèmes d'étanchéité EPDM et bitumineux pour une protection maximale." },
                                { title: "Isolation performante", desc: "Isolation thermique conforme aux normes K60 pour un confort optimal." },
                                { title: "Drainage efficace", desc: "Systèmes de drainage conçus pour évacuer l'eau efficacement." },
                                { title: "Toitures végétalisées", desc: "Options de toitures vertes pour un habitat écologique et durable." },
                            ].map((item) => (
                                <div key={item.title} className="bg-card border border-border rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-accent hover:bg-yellow-500 text-accent-foreground px-8 py-4 rounded-full font-bold transition-all hover:shadow-lg"
                        >
                            Demandez votre devis gratuit
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
