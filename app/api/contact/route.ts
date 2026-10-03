
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zohocloud.ca",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    });

    // 1. Envoyer le message à Académiques en Action
    await transporter.sendMail({
      from: `"Académiques en Action" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.ZOHO_EMAIL,
      replyTo: email,
      subject: `Nouveau message — Académiques en Action`,
      text: `Nom : ${name}
Email : ${email}

Message :
${message}`,
    });

    // 2. Envoyer automatiquement un accusé de réception au visiteur
    await transporter.sendMail({
      from: `"Académiques en Action" <${process.env.ZOHO_EMAIL}>`,
      to: email,
      replyTo: process.env.ZOHO_EMAIL,
      subject: `Nous avons bien reçu votre message — Académiques en Action`,
      text: `Bonjour ${name},

Nous vous remercions d’avoir communiqué avec Académiques en Action.

Votre message a bien été reçu et sera examiné avec attention. Nous vous répondrons dans les meilleurs délais.

Cordialement,

Dr. Samson N’Taadjèl KAGMATCHÉ
Fondateur et Directeur
Académiques en Action — Laboratoire R & RA
Réflexion & Référence Africaine

www.academiquesenaction.com`,
    });

    return NextResponse.redirect(
      new URL("/?message=success#contact", request.url),
      303
    );
  } catch (error) {
    console.error("Erreur formulaire de contact :", error);

    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}



