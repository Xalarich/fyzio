import { z } from 'zod'
import nodemailer from 'nodemailer'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
  message: z.string().min(5)
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid input' })
  }

  const config = useRuntimeConfig()
  const mail = config.mail

  if (!mail.host || !mail.user || !mail.pass) {
    throw createError({ statusCode: 500, statusMessage: 'Mail config missing' })
  }

  const transporter = nodemailer.createTransport({
    host: mail.host,
    port: mail.port,
    secure: mail.port === 465,
    auth: { user: mail.user, pass: mail.pass },
  })

  const { name, email, phone, message } = parsed.data
  const subject = `Nová zpráva z webu od ${name}`
  const text = `Jméno: ${name}\nEmail: ${email}\nTelefon: ${phone}\n\nZpráva:\n${message}`

  try {
    await transporter.sendMail({
      from: mail.from,
      to: mail.to,
      replyTo: email,
      subject,
      text,
    })
    return { ok: true }
  } catch (e) {
    throw createError({ statusCode: 500, statusMessage: 'Failed to send email' })
  }
})


