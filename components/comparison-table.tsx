export function ComparisonTable({ serviceType }: { serviceType: string }) {
  const comparisonData: Record<
    string,
    {
      columns: string[]
      rows: (string | number)[][]
    }
  > = {
    toiture: {
      columns: ["Matériau", "Durée de vie", "R-value (Isolation)", "Recommandé par Lazo"],
      rows: [
        ["Tuiles en béton", "25-30 ans", "Faible", "✓ Standard robuste"],
        ["Ardoise naturelle", "50-100+ ans", "Moyen", "✓✓ Premium & Durable"],
        ["Zinc-cuivre", "40-60 ans", "Moyen", "✓✓ Design & Longévité"],
        ["Fibrociment (Amiante-free)", "25-35 ans", "Faible", "Budget conscient"],
      ],
    },
    solaire: {
      columns: ["Type de panneau", "Rendement", "Garantie", "Meilleur choix"],
      rows: [
        ["Monocristallin", "18-22%", "25 ans", "✓✓ Haut rendement"],
        ["Polycristallin", "15-18%", "25 ans", "✓ Bon ratio qualité/fiabilité"],
        ["Batterie LiFePO4", "95% charge", "10 ans", "✓✓ Stockage optimal"],
      ],
    },
    facade: {
      columns: ["Type de crépis", "Isolation (λ)", "Durée", "Recommandé"],
      rows: [
        ["Crépis isolant 8cm", "0.04 W/m·K", "20-25 ans", "✓ Standard"],
        ["Crépis isolant 12cm", "0.035 W/m·K", "20-25 ans", "✓✓ Meilleure isolation"],
        ["Panneaux PSE", "0.04-0.035 W/m·K", "30+ ans", "✓✓ Durabilité maximale"],
      ],
    },
  }

  const data = comparisonData[serviceType] || comparisonData.toiture

  return (
    <section className="py-16 md:py-24 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="mb-12">Caractéristiques techniques des matériaux</h2>

        <div className="overflow-x-auto bg-card rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                {data.columns.map((col, idx) => (
                  <th key={idx} className="text-left px-6 py-4 font-semibold text-foreground">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, rowIdx) => (
                <tr key={rowIdx} className="border-b border-border hover:bg-muted/30 transition-colors">
                  {row.map((cell, colIdx) => (
                    <td
                      key={colIdx}
                      className={`px-6 py-4 ${colIdx === 0 ? "font-semibold text-foreground" : "text-muted-foreground"}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-muted-foreground mt-4">
          Les caractéristiques exactes et les options disponibles seront déterminées lors de votre diagnostic gratuit.
        </p>
      </div>
    </section>
  )
}
