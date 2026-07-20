import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
        {trail.map((t, i) => {
          const last = i === trail.length - 1
          return (
            <li key={t.path} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden />}
              {last ? (
                <span aria-current="page" className="font-medium text-foreground">
                  {t.name}
                </span>
              ) : (
                <Link href={t.path} className="transition hover:text-foreground hover:underline">
                  {t.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
