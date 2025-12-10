import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export type ComparisonRow = {
  material: string
  lifespan: string
  price: string
  insulation: string
  isRecommended?: boolean
}

interface ComparisonTableProps {
  data: ComparisonRow[]
  title?: string
}

export function ComparisonTable({ data, title = "Comparatif des Matériaux" }: ComparisonTableProps) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white my-8">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 p-4">
        <h3 className="font-bold text-lg text-slate-800">{title}</h3>
      </div>
      
      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-500 uppercase bg-slate-50/50">
            <tr>
              <th className="px-6 py-4 font-medium">Matériau</th>
              <th className="px-6 py-4 font-medium">Durée de vie</th>
              <th className="px-6 py-4 font-medium">Budget Est.</th>
              <th className="px-6 py-4 font-medium">Isolation (R)</th>
              <th className="px-6 py-4 font-medium text-center">Lazo Choice</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((row, idx) => (
              <tr 
                key={idx} 
                className={cn(
                  "hover:bg-slate-50 transition-colors",
                  row.isRecommended ? "bg-blue-50/30" : ""
                )}
              >
                <td className="px-6 py-4 font-medium text-foreground border-l-4 border-transparent">
                  {row.isRecommended && <div className="absolute left-0 w-1 h-full bg-blue-500" />}
                  {row.material}
                </td>
                <td className="px-6 py-4 text-slate-600">{row.lifespan}</td>
                <td className="px-6 py-4 text-slate-600">{row.price}</td>
                <td className="px-6 py-4 text-slate-600">{row.insulation}</td>
                <td className="px-6 py-4 text-center">
                  {row.isRecommended && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
                      <Check className="w-3 h-3" /> Recommandé
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
