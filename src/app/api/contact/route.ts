import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/validators";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const result = contactSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json(
      { message: "Validation failed.", errors: result.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, message } = result.data;

  console.info("Contact submission received", {
    name,
    email,
    message,
  });

  // TODO: Integrate an email service (Resend, Nodemailer, SendGrid).

  return NextResponse.json({ ok: true }, { status: 200 });
}
