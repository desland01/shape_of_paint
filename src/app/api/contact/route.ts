import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Expected fields: name, phone, email, message (optional), projectType
    // TODO: Wire up to email service (Resend, SendGrid, etc.)
    console.log("Contact form submission:", {
      projectType: data.projectType,
      name: data.name,
      phone: data.phone,
      email: data.email,
      message: data.message,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
