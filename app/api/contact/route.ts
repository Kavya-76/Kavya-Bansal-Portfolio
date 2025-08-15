import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const myEmail = process.env.MY_EMAIL as string;

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "onboarding@resend.dev", 
      to: myEmail,
      subject: `Portfolio Contact Form: ${subject}`,
      html: `
      <p>A client wants to connect to you via your portfolio</p>
      <p><strong>From:</strong> ${email}</p>
      <p><strong>Name:</strong> ${name}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to send message." },
      { status: 500 }
    );
  }
}
