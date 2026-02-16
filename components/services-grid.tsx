import { Home, Layers, LayoutGrid, Zap, Building2, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesGrid() {
    const services = [
        {
            icon: Home,
            title: "Toiture",
            description:
                "Notre équipe de spécialistes assure l'installation et la rénovation de toitures avec des matériaux de haute qualité pour une durabilité optimale.",
            link: "/toiture",
        },
        {
            icon: Layers,
            title: "Bardage",
            description:
                "Lazo Group propose des solutions de bardage pour protéger et embellir votre bâtiment tout en améliorant son efficacité énergétique.",
            link: "/bardage",
        },
        {
            icon: LayoutGrid,
            title: "Plate-forme",
            description:
                "Nos services incluent l'installation de toitures plates pour les bâtiments modernes, avec des matériaux adaptés et une étanchéité optimale.",
            link: "/plate-forme",
        },
        {
            icon: Zap,
            title: "Photovoltaïque",
            description:
                "Installations de panneaux solaires et batteries de stockage pour générer votre propre énergie et réduire vos factures.",
            link: "/photovoltaique",
        },
        {
            icon: Building2,
            title: "Isolation façade et crépis",
            description:
                "Crépis isolants et rénovation thermique de façades pour optimiser votre confort et réduire votre consommation énergétique.",
            link: "/facade",
        },
    ]

    return (
        <section className="py-20 md:py-28 bg-card/50 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-4">
                    <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">Nos services</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Des professionnels à votre service
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Lazo Group propose une large gamme de services pour vos projets de rénovation ou de construction.
                        Notre équipe d'experts est là pour vous accompagner.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    {services.map((service) => {
                        const Icon = service.icon
                        return (
                            <Link
                                key={service.title}
                                href={service.link}
                                className="group bg-white border border-border rounded-2xl overflow-hidden hover:border-accent hover:shadow-xl transition-all duration-300"
                            >
                                {/* Icon area */}
                                <div className="pt-8 pb-2 flex justify-center">
                                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 pt-4 text-center">
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-full font-semibold text-sm group-hover:shadow-lg group-hover:shadow-yellow-400/30 transition-all">
                                        En savoir plus
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
