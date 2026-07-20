import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { site } from "@/lib/site"

/**
 * ⚠️ Page à compléter avec les données légales réelles avant mise en ligne.
 * En Belgique, l'identification de l'entreprise (dénomination, adresse du
 * siège, numéro d'entreprise BCE et numéro de TVA) doit figurer sur le site.
 * Les valeurs manquantes proviennent de lib/site.ts.
 */

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales de ${site.legalName}.`,
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
}

const trail = [
  { name: "Accueil", path: "/" },
  { name: "Mentions légales", path: "/mentions-legales" },
]

export default function MentionsPage() {
  return (
    <>
      <section className="border-b border-border bg-navy-50">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Breadcrumbs trail={trail} />
        </div>
      </section>

      <article className="prose-lazo mx-auto max-w-3xl px-6 py-14 sm:py-20">
        <h1 className="text-navy-900">Mentions légales</h1>

        <h2 className="rule-gold mt-10 text-navy-900">Éditeur du site</h2>
        <ul className="mt-5 space-y-1.5 text-muted-foreground">
          <li>
            <strong className="text-navy-900">Dénomination :</strong> {site.legalName}
          </li>
          <li>
            <strong className="text-navy-900">Siège :</strong>{" "}
            {site.address.street ? `${site.address.street}, ` : ""}
            {site.address.postalCode} {site.address.locality}, Belgique
          </li>
          <li>
            <strong className="text-navy-900">Numéro d&apos;entreprise (BCE) :</strong>{" "}
            {site.bce || "à compléter"}
          </li>
          <li>
            <strong className="text-navy-900">Numéro de TVA :</strong> {site.vat || "à compléter"}
          </li>
          <li>
            <strong className="text-navy-900">Téléphone :</strong> {site.phoneDisplay}
          </li>
          <li>
            <strong className="text-navy-900">E-mail :</strong> {site.email}
          </li>
        </ul>

        <h2 className="rule-gold mt-10 text-navy-900">Activité</h2>
        <p className="mt-5 text-muted-foreground">
          Entreprise de couverture : rénovation de toiture, isolation de toiture et de combles,
          étanchéité de toiture plate, installation de panneaux photovoltaïques et pose de
          bardage de façade, en province de Liège.
        </p>

        <h2 className="rule-gold mt-10 text-navy-900">Propriété intellectuelle</h2>
        <p className="mt-5 text-muted-foreground">
          L&apos;ensemble des contenus de ce site — textes, visuels, logo et charte graphique — est
          protégé. Toute reproduction ou représentation, totale ou partielle, sans autorisation
          écrite préalable est interdite.
        </p>

        <h2 className="rule-gold mt-10 text-navy-900">Visuels</h2>
        <p className="mt-5 text-muted-foreground">
          Certains visuels illustrant les types d&apos;intervention sont des images
          d&apos;illustration et ne représentent pas des chantiers spécifiques réalisés par
          l&apos;entreprise. Ils sont identifiés comme tels sur les pages concernées.
        </p>

        <h2 className="rule-gold mt-10 text-navy-900">Responsabilité</h2>
        <p className="mt-5 text-muted-foreground">
          Les informations relatives aux primes, aux taux de TVA et aux obligations urbanistiques
          sont fournies à titre indicatif et à des fins d&apos;information générale. Elles évoluent
          régulièrement et ne constituent ni un conseil juridique ni un engagement. Seules les
          sources officielles des administrations compétentes font foi.
        </p>

        <h2 className="rule-gold mt-10 text-navy-900">Règlement des litiges</h2>
        <p className="mt-5 text-muted-foreground">
          En cas de différend, nous vous invitons à nous contacter en premier lieu afin de
          rechercher une solution amiable. Le consommateur dispose par ailleurs des voies de
          recours prévues par le droit belge, notamment auprès du Service public fédéral Économie.
        </p>
      </article>
    </>
  )
}
