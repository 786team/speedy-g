import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid JSON" }, { status: 400 });
  }

  // Soft lead capture — log only. Replace with Resend / SendGrid / Slack / Supabase later.
  console.log("[lead] new updates signup:", body);

  return NextResponse.json({ ok: true });
}
