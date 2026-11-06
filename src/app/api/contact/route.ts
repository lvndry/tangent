import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL || process.env.RESEND_FROM_EMAIL || "lvndry@protonmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    const emailSubject = `New Contact Form Submission${service ? ` - ${service}` : ""}`;

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      ${service ? `<p><strong>Service:</strong> ${service}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;

    const emailText = `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ""}
${service ? `Service: ${service}` : ""}

Message:
${message}
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: email,
      subject: emailSubject,
      html: emailHtml,
      text: emailText,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { message: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

