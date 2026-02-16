import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { name, email, phone, projectType, urgency, message } = body

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Les champs nom, email et téléphone sont obligatoires" }, { status: 400 })
    }

    console.log("[v0] New contact submission:", {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      projectType,
      urgency,
      message,
    })

    // TODO: In production, integrate with:
    // - SendGrid / Brevo for email notifications
    // - Database to store leads
    // - CRM integration

    // For now, return success
    return NextResponse.json(
      {
        success: true,
        message: "Formulaire reçu. Nous vous contacterons bientôt.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ error: "Erreur lors du traitement du formulaire" }, { status: 500 })
  }
}
