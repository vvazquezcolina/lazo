// ── Envoi de courrier transactionnel ────────────────────────────────────────
// Calqué sur Back-CMS-MG/lib/email.ts (Mandala Group) : deux transports, SMTP
// en priorité, Resend en repli. Le site n'a qu'un seul usage — les demandes de
// devis — mais garder la même forme que le CMS permet de réutiliser telles
// quelles les variables SMTP_* déjà en service côté Mandala.
//
// Les variables sont lues DANS les fonctions, pas au chargement du module :
// sur Vercel le module peut être évalué avant que l'environnement complet soit
// disponible, et un script CLI peut charger son .env après les imports.
import nodemailer from "nodemailer"

export interface SendResult {
  ok: boolean
  id?: string
  error?: string
  via?: "smtp" | "resend"
}

interface MailOpts {
  to: string
  subject: string
  html: string
  text?: string
  /** Adresse saisie par le visiteur : c'est à elle que doit répondre Lazo. */
  replyTo?: string
}

/**
 * Copie cachée facultative (CONTACT_BCC), pensée pour la phase de recette :
 * elle permet de vérifier ce qui part réellement sans encombrer la boîte de
 * Lazo d'un second destinataire visible. La retirer = supprimer la variable
 * d'environnement, aucun changement de code.
 *
 * En copie CACHÉE et non en copie simple : le destinataire principal ne doit
 * pas voir une adresse tierce sur ses demandes de devis.
 */
function bcc(): string | undefined {
  const v = process.env.CONTACT_BCC?.trim()
  return v || undefined
}

/** Un transport est-il configuré ? Sert à répondre 503 sans tenter d'envoi. */
export function isEmailConfigured(): boolean {
  const smtp = Boolean(
    process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS,
  )
  const resend = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_FROM)
  return smtp || resend
}

export async function sendEmail(opts: MailOpts): Promise<SendResult> {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const result = await sendViaSmtp(opts)
    // Si le SMTP tombe et qu'une clé Resend existe, on tente le repli plutôt
    // que de perdre le lead. Un devis perdu ne se rattrape pas.
    if (!result.ok && process.env.RESEND_API_KEY && process.env.CONTACT_FROM) {
      console.warn("[email] SMTP en échec, repli sur Resend :", result.error)
      return sendViaResend(opts)
    }
    return result
  }
  if (process.env.RESEND_API_KEY && process.env.CONTACT_FROM) {
    return sendViaResend(opts)
  }
  return { ok: false, error: "Aucun transport de courrier configuré (ni SMTP ni Resend)." }
}

async function sendViaSmtp(opts: MailOpts): Promise<SendResult> {
  const host = process.env.SMTP_HOST as string
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER as string
  const pass = process.env.SMTP_PASS as string
  const from = process.env.SMTP_FROM || `Devis Lazo Toiture <${user}>`

  let transporter: nodemailer.Transporter | undefined
  try {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // 465 = TLS direct ; 587 = STARTTLS
      auth: { user, pass },
    })
    const info = await transporter.sendMail({
      from,
      to: opts.to,
      bcc: bcc(),
      replyTo: opts.replyTo,
      subject: opts.subject,
      html: opts.html,
      text: opts.text,
    })
    return { ok: true, id: info.messageId, via: "smtp" }
  } catch (e) {
    return {
      ok: false,
      via: "smtp",
      error: e instanceof Error ? e.message : "Erreur d'envoi SMTP.",
    }
  } finally {
    transporter?.close()
  }
}

async function sendViaResend(opts: MailOpts): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY as string
  const from = process.env.CONTACT_FROM as string

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [opts.to],
        ...(bcc() ? { bcc: [bcc()] } : {}),
        reply_to: opts.replyTo,
        subject: opts.subject,
        html: opts.html,
        text: opts.text,
      }),
    })
    const body = (await res.json().catch(() => ({}))) as { id?: string; message?: string }
    if (!res.ok) {
      return {
        ok: false,
        via: "resend",
        error: body.message || `Resend a répondu HTTP ${res.status}.`,
      }
    }
    return { ok: true, id: body.id, via: "resend" }
  } catch (e) {
    return {
      ok: false,
      via: "resend",
      error: e instanceof Error ? e.message : "Erreur réseau au contact de Resend.",
    }
  }
}
