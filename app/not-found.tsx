"use client"

import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-primary flex items-center justify-center p-4">
            <div className="text-center space-y-8 max-w-lg">
                {/* Abstract graphic */}
                <div className="relative w-32 h-32 mx-auto">
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl w-full h-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
                        404
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Page introuvable</h1>
                    <p className="text-lg text-blue-200">
                        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                    >
                        <Home className="w-5 h-5" />
                        Retour à l'accueil
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/10 backdrop-blur"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Retour en arrière
                    </button>
                </div>
            </div>
        </div>
    )
}
