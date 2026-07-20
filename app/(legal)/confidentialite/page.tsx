import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { site } from "@/lib/site"

/**
 * ⚠️ À faire relire avant mise en ligne. Le RGPD impose d'indiquer
 * l'identité du responsable de traitement, les finalités, la base légale,
 * les durées de conservation et les destinataires réels des données.
 * Adaptez les durées si vos pratiques diffèrent de ce qui est écrit ici.
 */

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Traitement des données personnelles collectées via ce site.",
  alternates: { canonical: "/confidentialite" },
  robots: { index: false, follow: true },
}

const trail = [
  { name: "Accueil", path: "/" },
  { name: "Vie privée", path: "/confidentialite" },
]

export default function ConfidentialitePage() {
  return (
    <>
      <section className="border-b border-border bg-navy-50">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Breadcrumbs trail={trail} />
        </div>
      </section>

      <article className="prose-lazo mx-auto max-w-3xl px-6 py-14 sm:py-20">
        <h1 className="text-navy-900">Politique de confidentialité</h1>

        <p className="mt-6 text-muted-foreground">
          Cette page explique quelles données personnelles nous collectons via ce site, pourquoi,
          combien de temps nous les conservons et quels droits vous pouvez exercer.
        </p>

        <h2 className="rule-gold mt-10 text-navy-900">Responsable du traitement</h2>
        <p className="mt-5 text-muted-foreground">
          {site.legalName}
          {site.address.street ? `, ${site.address.street}` : ""}, {site.address.postalCode}{" "}
          {site.address.locality}, Belgique. Pour toute question relative à vos données :{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-navy-900 hover:underline">
            {site.email}
          </a>
          .
        </p>

        <h2 className="rule-gold mt-10 text-navy-900">Données collectées</h2>
        <p className="mt-5 text-muted-foreground">
          Lorsque vous remplissez le parcours de demande de devis, nous collectons votre nom,
          votre numéro de téléphone et votre adresse e-mail, ainsi que les informations
          nécessaires à la préparation de la visite : l&apos;adresse du bâtiment concerné (rue,
          numéro, code postal et commune), la nature des travaux envisagés, le type de bâtiment,
          le type de couverture existant lorsque la question s&apos;applique, et le délai
          souhaité.
        </p>
        <p className="mt-4 text-muted-foreground">
          L&apos;adresse du bâtiment nous sert uniquement à préparer le déplacement et à vérifier
          les contraintes d&apos;urbanisme applicables à la parcelle. Elle n&apos;est utilisée à
          aucune autre fin.
        </p>
        <p className="mt-4 text-muted-foreground">
          Nous ne collectons aucune donnée sensible et ne vous demandons jamais d&apos;information
          bancaire via ce site.
        </p>

        <h2 className="rule-gold mt-10 text-navy-900">Finalité et base légale</h2>
        <p className="mt-5 text-muted-foreground">
          Ces données servent exclusivement à traiter votre demande : vous recontacter, organiser
          une visite, établir un devis et assurer le suivi de la relation commerciale qui en
          découle. La base légale est votre demande explicite et, le cas échéant, l&apos;exécution
          de mesures précontractuelles.
        </p>

        <h2 className="rule-gold mt-10 text-navy-900">Destinataires</h2>
        <p className="mt-5 text-muted-foreground">
          Vos données sont traitées par notre équipe et par nos prestataires techniques
          d&apos;hébergement et d&apos;acheminement des e-mails, agissant pour notre compte. Elles
          ne sont ni vendues, ni louées, ni transmises à des tiers à des fins de prospection
          commerciale.
        </p>

        <h2 className="rule-gold mt-10 text-navy-900">Durée de conservation</h2>
        <p className="mt-5 text-muted-foreground">
          Les demandes sans suite sont conservées le temps nécessaire au traitement du contact,
          puis supprimées. Les données liées à un devis accepté ou à un chantier réalisé sont
          conservées le temps requis par nos obligations comptables, contractuelles et de garantie
          décennale.
        </p>

        <h2 className="rule-gold mt-10 text-navy-900">Vos droits</h2>
        <p className="mt-5 text-muted-foreground">
          Conformément au Règlement général sur la protection des données, vous disposez d&apos;un
          droit d&apos;accès, de rectification, d&apos;effacement, de limitation, d&apos;opposition
          et de portabilité. Écrivez-nous à{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-navy-900 hover:underline">
            {site.email}
          </a>{" "}
          pour les exercer.
        </p>
        <p className="mt-4 text-muted-foreground">
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une
          réclamation auprès de l&apos;Autorité de protection des données (Rue de la Presse 35,
          1000 Bruxelles).
        </p>

        <h2 className="rule-gold mt-10 text-navy-900">Cookies et mesure d&apos;audience</h2>
        <p className="mt-5 text-muted-foreground">
          Ce site dépose deux catégories de cookies. Les <strong>cookies strictement
          nécessaires</strong> mémorisent vos choix de consentement et sécurisent le formulaire ;
          ils ne servent à aucun suivi et ne peuvent pas être désactivés.
        </p>
        <p className="mt-4 text-muted-foreground">
          La <strong>mesure d&apos;audience</strong> repose sur Google Analytics 4, qui dépose des
          cookies (notamment <code>_ga</code>) permettant de savoir quelles pages sont consultées
          et d&apos;où viennent les visiteurs. Les adresses IP y sont anonymisées et aucune
          publicité personnalisée n&apos;est activée.
        </p>
        <p className="mt-4 text-muted-foreground">
          Ces cookies de mesure ne sont déposés <strong>qu&apos;après votre acceptation</strong>.
          Tant que vous n&apos;avez pas accepté, le service reste désactivé et n&apos;écrit rien
          sur votre appareil. Vous pouvez modifier ou retirer votre consentement à tout moment
          via le lien <strong>« Gérer les cookies »</strong> en pied de page — le retrait prend
          effet immédiatement et les cookies concernés sont supprimés.
        </p>
        <p className="mt-4 text-muted-foreground">
          Nous utilisons par ailleurs une mesure de fréquentation fournie par notre hébergeur,
          qui n&apos;emploie pas de cookie et ne permet pas de vous identifier.
        </p>
      </article>
    </>
  )
}
