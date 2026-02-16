"use client"

import { Star, MessageSquareQuote, ExternalLink } from "lucide-react"

export function ReviewsSection() {
    const reviews = [
        {
            author: "Hasan Erdogan",
            rating: 5,
            text: "Les travailleurs ont été d'une méticulosité extrême, le patron était sur place et a fait tout son possible pour avoir un résultat vraiment parfait ! Cette société utilise du matériel de haute qualité et connaît son métier ! Un grand merci pour votre professionnalisme et je vous recommanderai c'est sûr !",
            date: "il y a un mois",
        },
        {
            author: "RACHEL NOIROT",
            rating: 5,
            text: "Nous avons choisi la société Lazo pour refaire entièrement notre toiture. Nous sommes ravis du travail effectué. Cela a pris 9 jours et le travail a été très propre et très bien réalisé.",
            date: "il y a 2 mois",
        },
        {
            author: "Mickaël Rommes",
            rating: 5,
            text: "Un tout grand merci à la société LAZO Energy pour ce magnifique travail ! (Rénovation complète toiture) 🏠😍 Une très bonne équipe sympathique que je recommande sans hésiter ! ☺️",
            date: "il y a 3 mois",
        },
        {
            author: "Maunaert Energie",
            rating: 5,
            text: "Service au top, très professionnel, serviable, gentil et avec beaucoup d'humour. Ils ont un expert technique au top et un service après-vente excellent.",
            date: "il y a 4 mois",
        },
    ]

    return (
        <section className="py-20 md:py-24 bg-secondary/30 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">Témoignages</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Ce que disent nos clients</h2>

                    <div className="flex flex-col items-center gap-2 mt-6">
                        <div className="flex items-center gap-1">
                            <span className="text-3xl font-bold text-primary">5.0</span>
                            <div className="flex text-yellow-500">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="w-6 h-6 fill-current" />
                                ))}
                            </div>
                        </div>
                        <p className="text-muted-foreground text-sm font-medium">Basé sur 22 avis Google</p>

                        <a
                            href="https://maps.app.goo.gl/bD3JB9MwB4UaY7vx8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors mt-2"
                        >
                            Voir tous les avis
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-2xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex text-yellow-500">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <MessageSquareQuote className="w-8 h-8 text-accent/20" />
                            </div>

                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow italic relative">
                                "{review.text}"
                            </p>

                            <div className="mt-auto border-t border-gray-100 pt-4">
                                <p className="font-bold text-primary truncate text-sm">{review.author}</p>
                                <div className="flex items-center justify-between mt-1">
                                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Google Review</span>
                                    <span className="text-xs text-muted-foreground">{review.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
