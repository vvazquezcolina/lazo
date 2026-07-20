import { Plus } from "lucide-react"

/**
 * Accordéon FAQ en <details>/<summary> natifs : accessible au clavier,
 * fonctionnel sans JavaScript, et le texte des réponses reste dans le DOM
 * pour l'indexation.
 */
export function Faq({
  items,
  title = "Questions fréquentes",
}: {
  items: { q: string; a: string }[]
  title?: string
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <h2 className="rule-gold">{title}</h2>
      <div className="prose-lazo mt-8 divide-y divide-border border-y border-border">
        {items.map((item) => (
          <details key={item.q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-navy-900 marker:content-none">
              <span>{item.q}</span>
              <Plus
                className="mt-0.5 h-5 w-5 shrink-0 text-gold-500 transition-transform duration-200 group-open:rotate-45"
                aria-hidden
              />
            </summary>
            <p className="mt-3 text-muted-foreground">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
