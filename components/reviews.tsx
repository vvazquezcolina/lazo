import { Star, ExternalLink } from "lucide-react"
import { REVIEWS, hasReviews, REVIEW_SUMMARY } from "@/lib/reviews"
import { site } from "@/lib/site"

/**
 * Avis Google affichés comme preuve sociale.
 *
 * Volontairement SANS balisage schema.org Review : Google interdit de baliser
 * des avis collectés sur une plateforme tierce et republiés sur son propre
 * site. La note agrégée reste portée par la fiche Google elle-même, vers
 * laquelle on renvoie.
 *
 * La section disparaît entièrement si lib/reviews.ts est vide — mieux vaut
 * pas d'avis qu'un faux avis.
 */
export function Reviews() {
  if (!hasReviews) return null

  const profile = site.reviews.profileUrl

  return (
    <section className="border-y border-border bg-navy-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="rule-gold">Ce que disent nos clients</h2>
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="flex items-center gap-1" aria-hidden>
                {Array.from({ length: 5 }, (_, s) => (
                  <Star key={s} className="h-5 w-5 fill-gold-400 text-gold-400" />
                ))}
              </span>
              <span className="font-display text-lg font-extrabold text-navy-900">
                {REVIEW_SUMMARY.rating.toLocaleString("fr-BE", { minimumFractionDigits: 1 })} / 5
              </span>
              <span className="text-muted-foreground">
                sur {REVIEW_SUMMARY.count} avis Google
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Avis publiés sur notre fiche Google, repris ici mot pour mot.
            </p>
          </div>

          {profile && (
            <a
              href={profile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-navy-900 hover:underline"
            >
              Voir tous les avis sur Google
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          )}
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <li
              key={`${r.author}-${i}`}
              className="flex flex-col rounded-xl border border-border bg-background p-6"
            >
              <div className="flex items-center gap-1" aria-label={`${r.rating} sur 5`}>
                {Array.from({ length: 5 }, (_, s) => (
                  <Star
                    key={s}
                    className={
                      s < r.rating ? "h-4 w-4 fill-gold-400 text-gold-400" : "h-4 w-4 text-navy-100"
                    }
                    aria-hidden
                  />
                ))}
              </div>

              <blockquote className="prose-lazo mt-4 flex-1">
                <p className="text-sm leading-relaxed text-muted-foreground">« {r.text} »</p>
              </blockquote>

              <footer className="mt-5 flex items-baseline justify-between gap-3 border-t border-border pt-4">
                <span className="text-sm font-semibold text-navy-900">{r.author}</span>
                <span className="text-xs text-muted-foreground">{r.date}</span>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
