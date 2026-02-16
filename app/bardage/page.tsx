import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Layers, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Bardage Herstal & Liège | Protection & Isolation — Devis Gratuit",
    description: "Solutions de bardage à Herstal et Liège. Protection, isolation thermique et embellissement de façade. Matériaux durables. Devis gratuit ☎ 0470 10 95 25.",
    keywords: "bardage Herstal, bardage Liège, bardage isolation thermique, protection façade Herstal, entreprise bardage Wallonie",
    openGraph: {
        title: "Bardage Herstal & Liège | Lazo Group",
        description: "Solutions de bardage professionnelles à Herstal. Protection, isolation et esthétique. Devis gratuit.",
        url: "https://www.lazotoiture.be/bardage",
    },
}

export default function BardagePage() {
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
                            <Layers className="w-4 h-4" />
                            <span className="text-sm font-semibold">Nos services</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                            Bardage
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
                            Lazo Group propose des solutions de bardage pour protéger et embellir votre bâtiment tout en
                            améliorant son efficacité énergétique. Nos experts vous accompagnent de A à Z.
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
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Nos solutions de bardage</h2>
                    <div className="prose prose-lg max-w-none text-muted-foreground">
                        <p className="leading-relaxed mb-6">
                            Le bardage est une solution idéale pour améliorer l'isolation thermique et l'aspect esthétique de votre bâtiment.
                            Chez Lazo Group, nous proposons différents types de bardage adaptés à vos besoins et à votre budget.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 my-10">
                            {[
                                { title: "Protection durable", desc: "Le bardage protège vos murs contre les intempéries et l'humidité." },
                                { title: "Isolation thermique", desc: "Améliorez le confort de votre habitat et réduisez vos factures d'énergie." },
                                { title: "Esthétique moderne", desc: "Un large choix de finitions pour embellir votre façade." },
                                { title: "Entretien minimal", desc: "Nos solutions de bardage nécessitent très peu d'entretien au fil des années." },
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
