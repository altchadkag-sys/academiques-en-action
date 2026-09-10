
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
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    });

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

    return NextResponse.redirect(
      new URL("/?message=success#contact", request.url)
    );
  } catch (error) {
    console.error("Erreur formulaire de contact :", error);

    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi." },
      { status: 500 }
    );
  }
}
