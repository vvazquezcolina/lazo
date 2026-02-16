import { Home, Zap, Building2 } from "lucide-react"

export function KnowledgeGraph() {
  const services = [
    {
      icon: Home,
      title: "Toiture",
      description: "Rénovation, réparation et protection complète de vos toits.",
      link: "/toiture",
    },
    {
      icon: Zap,
      title: "Solaire",
      description: "Installations photovoltaïques et batteries de stockage.",
      link: "/photovoltaique",
    },
    {
      icon: Building2,
      title: "Façade",
      description: "Crépis isolants et rénovation thermique de façades.",
      link: "/facade",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-accent mb-4">Nos trois piliers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une approche holistique de la rénovation : protéger votre toiture, isoler votre façade, et générer votre
            propre énergie.
          </p>
        </div>

        {/* Knowledge Graph Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <a
                key={service.title}
                href={service.link}
                className="group p-8 bg-background border border-border rounded-lg hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </a>
            )
          })}
        </div>

        {/* Connection visualization */}
        <div className="mt-12 relative hidden md:block h-24">
          <svg className="w-full h-full" viewBox="0 0 800 100" preserveAspectRatio="none">
            {/* Connecting lines */}
            <line x1="150" y1="30" x2="400" y2="30" stroke="#d4a574" strokeWidth="2" opacity="0.3" />
            <line x1="650" y1="30" x2="400" y2="30" stroke="#d4a574" strokeWidth="2" opacity="0.3" />

            {/* Center node */}
            <circle cx="400" cy="30" r="6" fill="#d4a574" />
          </svg>
        </div>
      </div>
    </section>
  )
}
