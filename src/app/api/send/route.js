// import { EmailTemplate } from "../../../components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const body = await req.json();

  const { email, subject, message,phone } = body;

  try {
    const data = await resend.emails.send({
      from: "Resend <onboarding@resend.dev>",
      to: "runaboutfarm@hotmail.com",
      subject: subject,
      react: (
        <>
          <h3>Lori, {email} is trying to contact you from your Runabout Farm website</h3>
          <p>Phone:{phone}</p>
          <p>{message}</p>

        </>
      ),
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Failed to send email",
    });
  }
}
