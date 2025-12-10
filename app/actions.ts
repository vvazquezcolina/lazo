"use server"

import { z } from "zod"

const LeadSchema = z.object({
  service: z.string(),
  urgency: z.string(),
  incomeCategory: z.string(),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9),
})

export type LeadState = {
  success?: boolean
  error?: string
  data?: any
}

export async function submitLead(prevState: LeadState | null, formData: FormData): Promise<LeadState> {
  const rawData = {
    service: formData.get("service"),
    urgency: formData.get("urgency"),
    incomeCategory: formData.get("incomeCategory"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
  }

  const validatedFields = LeadSchema.safeParse(rawData)

  if (!validatedFields.success) {
    return {
      error: "Veuillez vérifier les champs du formulaire.",
    }
  }

  // Simulate Email Sending / CRM Integration
  console.log("-----------------------------------------")
  console.log("🔥 NEW LEAD CAPTURED 🔥")
  console.log(validatedFields.data)
  console.log("-----------------------------------------")

  // TODO: Integrate Resend or SendGrid here
  // await resend.emails.send({ ... })

  return {
    success: true,
    data: validatedFields.data
  }
}
