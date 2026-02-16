"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react"

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
    })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const projectTypes = ["Toiture", "Bardage", "Plate-forme", "Photovoltaïque", "Isolation façade et crépis", "Autre"]

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })
            if (!response.ok) throw new Error("Erreur lors de l'envoi du formulaire")
            setSubmitted(true)
            setFormData({ name: "", email: "", phone: "", projectType: "", message: "" })
            setTimeout(() => setSubmitted(false), 5000)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Une erreur est survenue")
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-primary to-blue-900">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">Contactez-nous</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Une urgence ? Une question ?</h2>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                        Notre équipe est à votre disposition pour tous vos besoins. Contactez-nous dès aujourd'hui.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-2xl">
                        <h3 className="text-2xl font-bold text-primary mb-6">Envoyez-nous votre demande</h3>

                        {submitted && (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <div className="text-sm text-green-800">
                                    <p className="font-semibold">Message envoyé!</p>
                                    <p>Merci. Nous vous contacterons dans les 24 heures.</p>
                                </div>
                            </div>
                        )}

                        {error && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex gap-3">
                                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                                <p className="text-sm text-red-800">{error}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-semibold text-primary mb-2">Nom complet *</label>
                                <input
                                    type="text" id="contact-name" name="name" value={formData.name} onChange={handleChange} required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                                    placeholder="Jean Dupont"
                                />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="contact-email" className="block text-sm font-semibold text-primary mb-2">Email *</label>
                                    <input
                                        type="email" id="contact-email" name="email" value={formData.email} onChange={handleChange} required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                                        placeholder="jean@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-primary mb-2">Téléphone *</label>
                                    <input
                                        type="tel" id="contact-phone" name="phone" value={formData.phone} onChange={handleChange} required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                                        placeholder="+32 470 10 95 25"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="contact-project" className="block text-sm font-semibold text-primary mb-2">Type de projet</label>
                                <select
                                    id="contact-project" name="projectType" value={formData.projectType} onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                                >
                                    <option value="">Sélectionnez un type...</option>
                                    {projectTypes.map((type) => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-semibold text-primary mb-2">Message</label>
                                <textarea
                                    id="contact-message" name="message" value={formData.message} onChange={handleChange} rows={4}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                                    placeholder="Décrivez votre projet..."
                                />
                            </div>
                            <button
                                type="submit" disabled={loading}
                                className="w-full bg-accent text-accent-foreground py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 disabled:opacity-50 transition-all hover:shadow-lg hover:shadow-yellow-400/30"
                            >
                                {loading ? "Envoi en cours..." : "Envoyer ma demande"}
                            </button>
                        </form>
                    </div>

                    {/* Map + Info */}
                    <div className="space-y-8">
                        {/* Google Maps Embed */}
                        <div className="rounded-2xl overflow-hidden shadow-2xl h-72 lg:h-80">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.8!2d5.6397!3d50.6669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0f5e5b4a3b9a1%3A0x1234567890abcdef!2sRue+Hoyoux+90%2C+4040+Herstal!5e0!3m2!1sfr!2sbe!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lazo Group - Rue Hoyoux 90, 4040 Herstal"
                            />
                        </div>

                        {/* Contact Info Card */}
                        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-white mb-6">Infos pratiques</h3>
                            <div className="space-y-5">
                                <a href="tel:0470109525" className="flex items-center gap-4 text-white hover:text-accent transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">0470 10 95 25</p>
                                    </div>
                                </a>
                                <a href="mailto:info@lazogroup.be" className="flex items-center gap-4 text-white hover:text-accent transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-bold">info@lazogroup.be</p>
                                    </div>
                                </a>
                                <a href="https://maps.app.goo.gl/UpXr5Ehh2i2KtGeW8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-accent transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Rue Hoyoux 90</p>
                                        <p className="text-sm text-blue-200">4040 Herstal</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4 text-white">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Lundi - Samedi</p>
                                        <p className="text-sm text-blue-200">9:00 - 17h00 / Dimanche (Fermé)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
