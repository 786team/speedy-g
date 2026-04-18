import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid JSON" }, { status: 400 });
  }

  // For now just log on the server. Replace with Resend / SendGrid / Slack later.
  console.log("[contact] new pilot request:", body);

  return NextResponse.json({ ok: true });
}
