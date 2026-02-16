export function ProjectGallery({ serviceType }: { serviceType: string }) {
  const projects: Record<
    string,
    Array<{
      title: string
      location: string
      date: string
      image: string
      description: string
    }>
  > = {
    toiture: [
      {
        title: "Rénovation tuiles K60 - Villa Herstal",
        location: "Herstal",
        date: "Jan 2025",
        image: "/renovation-toiture-tuiles-herstal.jpg",
        description: "Remplacement 150m² tuiles béton + isolant 12cm K50, prime 5.500€. Chauffage -28% estimé.",
      },
      {
        title: "Ardoise naturelle premium - Château Liège",
        location: "Liège",
        date: "Déc 2024",
        image: "/reparation-ardoise-liege.jpg",
        description:
          "Restauration 80m² ardoise naturelle 100+ ans + isolation K60, prime 5.200€. Durée 50+ ans garantie.",
      },
      {
        title: "Zinc-cuivre K60 design - Oupeye",
        location: "Oupeye",
        date: "Nov 2024",
        image: "/toiture-zinc-cuivre-oupeye.jpg",
        description: "Installation zinc-cuivre 50m² + isolant 10cm K60, prime 5.400€ + bonus K60 500€. ROI 8 ans.",
      },
      {
        title: "Toiture-solaire intégrée K60 - Résidence Herstal",
        location: "Herstal",
        date: "Oct 2024",
        image: "/toiture-solaire-integree.jpg",
        description: "Panneaux solaires intégrés toiture K60 renovée, 4kWc + batterie 10kWh, prime cumulée 10.500€.",
      },
    ],
    solaire: [
      {
        title: "Installation 4kWc monocristallin 2025 - Maison Herstal",
        location: "Herstal",
        date: "Fév 2025",
        image: "/panneaux-solaires-4kwc-herstal-2025.jpg",
        description:
          "Panneaux monocristallin 2025 (22% rendement) + batterie LiFePO4 10kWh, autonomie 75%, prime 8.000€.",
      },
      {
        title: "Batterie seule retrofit - Liège",
        location: "Liège",
        date: "Jan 2025",
        image: "/batterie-lifepo4-stockage-energie-2025.jpg",
        description:
          "Ajout batterie LiFePO4 8kWh sur panneaux existants, augmente autonomie 40% → 70%, prime batterie 2.500€.",
      },
      {
        title: "Système complet autonome - Oupeye",
        location: "Oupeye",
        date: "Déc 2024",
        image: "/panneau-solaire-5kwc-pompe-chaleur-oupeye-2025.jpg",
        description: "5kWc panneaux + 12kWh batterie + pompe chaleur électrique 2025, autonomie 80%, prime 9.200€.",
      },
      {
        title: "Carport solaire avec batterie - Rocourt",
        location: "Rocourt",
        date: "Nov 2024",
        image: "/carport-solaire-electrique-oupeye-2025.jpg",
        description: "Carport solaire 3kWc + batterie 8kWh pour recharge VE, autonomie 100% électrique, prime 7.500€.",
      },
    ],
    facade: [
      {
        title: "Crépis isolant K50 blanc - Villa Herstal",
        location: "Herstal",
        date: "Jan 2025",
        image: "/crepi-isolant-gris-moderne-facade-2025.jpg",
        description: "Façade 200m² crépis isolant 10cm K50 (λ=0.03), prime 4.800€ + bonus K50 500€. Chauffage -28%.",
      },
      {
        title: "Panneaux PSE K60 beige - Immeuble Liège",
        location: "Liège",
        date: "Déc 2024",
        image: "/isolation-facade-beige-clair-liege-2025.jpg",
        description: "Isolation façade 300m² panneaux PSE 12cm K60 + teinte beige clair, prime 6.800€ pour multi-logi.",
      },
      {
        title: "Crépis isolant K60 gris anthracite - Maison Oupeye",
        location: "Oupeye",
        date: "Nov 2024",
        image: "/facade-anthracite-k60-combo-toiture-2025.jpg",
        description: "Façade 180m² crépis isolant 10cm K60 (λ=0.035) gris foncé moderne, prime 4.500€, durée 25 ans.",
      },
      {
        title: "Combo façade+toiture K60 - Maison Herstal",
        location: "Herstal",
        date: "Oct 2024",
        image: "/facade-toiture-k60-renovation-herstal-2025.jpg",
        description:
          "Façade K60 crépis 200m² (4.800€) + Toiture K60 150m² (5.500€) = Prime cumulée 10.300€. ROI 5 ans.",
      },
    ],
  }

  const galleryItems = projects[serviceType] || projects.toiture

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="mb-12">Projets réalisés 2024-2025 en région liégeoise</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {galleryItems.map((project, idx) => (
            <div
              key={idx}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg group-hover:text-accent transition-colors flex-1">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="font-medium text-accent">{project.location}</span>
                  <span>{project.date}</span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Découvrez nos 50+ projets geotagués avec primes obtenues</p>
          <a
            href="/projects"
            className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            Voir la galerie complète
          </a>
        </div>
      </div>
    </section>
  )
}
