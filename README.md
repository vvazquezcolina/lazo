# Lazo — Couvreur en province de Liège

Site vitrine de **Lazo**, entreprise de couverture à Herstal (province de Liège) :
rénovation de toiture, isolation, toiture plate, photovoltaïque et bardage.

Next.js 16 · React 19 · Tailwind CSS v4 · TypeScript.

## Développement

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # build de production
npm run start    # sert le build de production
```

## Variables d'environnement

Le formulaire de devis envoie les demandes par e-mail via [Resend](https://resend.com).
Sans ces variables, il refuse l'envoi et invite à téléphoner (il ne fait jamais semblant
d'avoir envoyé). Voir `.env.local.example`.

| Variable | Rôle |
|---|---|
| `RESEND_API_KEY` | Clé API Resend |
| `CONTACT_FROM` | Expéditeur, sur un domaine vérifié dans Resend (SPF + DKIM) |
| `CONTACT_TO` | Destinataire des demandes (par défaut : l'adresse de `lib/site.ts`) |
| `NEXT_PUBLIC_GA_ID` | Identifiant Google Analytics 4 (optionnel) |

À configurer dans Vercel → Settings → Environment Variables.

## Structure

```
app/
  (site)/          Pages de contenu (en-tête + pied de page + avis)
  (legal)/         Mentions légales, confidentialité (sans bloc d'avis)
  devis/           Parcours de demande de devis (mise en page épurée, sans navigation)
  api/contact/     Réception du formulaire → e-mail via Resend
components/        En-tête, pied de page, formulaire guidé, avis, consentement cookies…
lib/
  site.ts          Configuration centrale (NAP, horaires, réseaux, GA)
  services.ts      Catalogue des 5 prestations
  communes.ts      14 communes desservies
  reviews.ts       Avis Google (preuve sociale)
  schema.tsx       Données structurées schema.org
public/img/        Photographies
```

Le contenu métier (services, communes, coordonnées, avis) est centralisé dans `lib/` :
une modification s'y propage au menu, au plan de site, aux pages et au balisage schema.org.
