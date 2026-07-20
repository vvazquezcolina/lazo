import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { site } from "@/lib/site"

/**
 * Réception des demandes de devis.
 *
 * ⚠️ La version d'origine (générée par v0) se contentait d'un console.log et
 * renvoyait un succès : les demandes n'arrivaient nulle part alors que le
 * visiteur recevait une confirmation. Cette version échoue explicitement si
 * l'envoi n'est pas configuré.
 *
 * Configuration (variables d'environnement) :
 *   RESEND_API_KEY   clé API Resend — https://resend.com
 *   CONTACT_FROM     expéditeur sur un domaine vérifié (ex. devis@lazotoiture.be)
 *   CONTACT_TO       destinataire — par défaut l'adresse de lib/site.ts
 */

const schema = z.object({
  name: z.string().trim().min(2, "Merci d'indiquer votre nom.").max(120),
  email: z.string().trim().email("Cette adresse e-mail semble incorrecte.").max(200),
  phone: z.string().trim().min(6, "Ce numéro de téléphone semble incomplet.").max(40),
  commune: z.string().trim().max(120).optional().default(""),
  service: z.string().trim().max(120).optional().default(""),
  urgency: z.string().trim().max(60).optional().default(""),
  message: z.string().trim().max(5000).optional().default(""),
})

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string,
  )
}

export async function POST(request: NextRequest) {
  let payload: Record<string, unknown>
  try {
    payload = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 })
  }

  // Piège à robots — traité AVANT et EN DEHORS du schéma.
  // Il ne doit jamais pouvoir produire un message d'erreur visible par
  // l'utilisateur : les navigateurs remplissent parfois ces champs cachés
  // par autocomplétion, et l'internaute se retrouverait bloqué sans
  // comprendre pourquoi. En cas de remplissage, on renvoie un succès neutre.
  const trap = typeof payload.lz_ref === "string" ? payload.lz_ref.trim() : ""
  if (trap) return NextResponse.json({ success: true })

  const parsed = schema.safeParse(payload)
  if (!parsed.success) {
    const first = parsed.error.issues[0]
    return NextResponse.json(
      { error: first?.message ?? "Merci de vérifier les champs du formulaire." },
      { status: 400 },
    )
  }

  const d = parsed.data

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO || site.email
  const from = process.env.CONTACT_FROM

  if (!apiKey || !from) {
    console.error(
      "[contact] Envoi non configuré (RESEND_API_KEY et/ou CONTACT_FROM manquants). " +
        "Demande NON transmise :",
      { name: d.name, email: d.email, phone: d.phone, commune: d.commune, service: d.service },
    )
    return NextResponse.json(
      {
        error:
          "Le formulaire n'est pas encore opérationnel. Merci de nous appeler directement :",
      },
      { status: 503 },
    )
  }

  const rows: [string, string][] = [
    ["Nom", d.name],
    ["Téléphone", d.phone],
    ["E-mail", d.email],
    ["Commune", d.commune],
    ["Prestation", d.service],
    ["Délai souhaité", d.urgency],
  ]

  const html = `
    <h2 style="font-family:system-ui,sans-serif">Nouvelle demande de devis</h2>
    <table cellpadding="8" style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">
      ${rows
        .filter(([, v]) => v)
        .map(
          ([k, v]) =>
            `<tr><td style="border:1px solid #e3e3ee;background:#f4f4f9"><strong>${k}</strong></td><td style="border:1px solid #e3e3ee">${escapeHtml(v)}</td></tr>`,
        )
        .join("")}
    </table>
    ${
      d.message
        ? `<h3 style="font-family:system-ui,sans-serif">Description</h3><p style="font-family:system-ui,sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(d.message)}</p>`
        : ""
    }
    <p style="font-family:system-ui,sans-serif;font-size:12px;color:#666">
      Envoyé depuis le formulaire de ${site.url}
    </p>
  `

  const text = [
    "Nouvelle demande de devis",
    "",
    ...rows.filter(([, v]) => v).map(([k, v]) => `${k} : ${v}`),
    d.message ? `\nDescription :\n${d.message}` : "",
  ].join("\n")

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: d.email,
        subject: `Devis ${d.service || "toiture"} — ${d.name}${d.commune ? ` (${d.commune})` : ""}`,
        html,
        text,
      }),
    })

    if (!res.ok) {
      const detail = await res.text()
      console.error("[contact] Échec Resend:", res.status, detail.slice(0, 500))
      return NextResponse.json(
        { error: "L'envoi a échoué. Merci de nous appeler directement :" },
        { status: 502 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[contact] Erreur réseau:", err)
    return NextResponse.json(
      { error: "L'envoi a échoué. Merci de nous appeler directement :" },
      { status: 502 },
    )
  }
}
