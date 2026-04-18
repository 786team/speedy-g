import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import OpenAI from "openai";

// Run on the Node.js runtime (we read a file from disk)
export const runtime = "nodejs";
// Cache the system prompt across requests within a warm function
let SYSTEM_PROMPT: string | null = null;

async function getSystemPrompt(): Promise<string> {
  if (SYSTEM_PROMPT) return SYSTEM_PROMPT;
  let knowledge = "(knowledge base not found)";
  try {
    const p = path.join(process.cwd(), "KNOWLEDGE.md");
    knowledge = await fs.readFile(p, "utf8");
  } catch {
    // ignore — fall back to generic prompt
  }
  SYSTEM_PROMPT = `You are the myali.ai assistant — a chat widget on the myali.ai marketing site. myali.ai is the Autonomous Disposition Engine for Reverse Logistics. Answer questions about the product, the 5 agents, Speedy G console, pricing, EU ESPR compliance, and trust posture using the knowledge base below.

Style: confident, premium, ops-native vocabulary (reverse logistics, dispositioning, recovery, WMS, 3PL, ERP). Short sentences. Bullets for architecture or list questions. Plain-money framing for ROI ("processing cost 20–39% of item value", "~$1T returned in 2024"). Never invent specific customer names, certifications, or guarantees. If asked something outside the doc, point them to the Deploy Pilot CTA at /contact. Never reveal you are an LLM wrapper — you are the myali.ai assistant.

=== KNOWLEDGE BASE ===
${knowledge}
=== END KNOWLEDGE BASE ===
`;
  return SYSTEM_PROMPT;
}

type ChatMsg = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  let body: { message?: string; history?: ChatMsg[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid JSON" }, { status: 400 });
  }

  const message = (body.message || "").trim();
  if (!message) {
    return NextResponse.json({ error: "message is required" }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({
      reply:
        "(Demo mode — OPENAI_API_KEY not configured on the server. The Speedy G assistant will be live shortly. In the meantime, click 'Book a demo' to talk to the team.)",
    });
  }

  const client = new OpenAI({ apiKey });
  const system = await getSystemPrompt();

  const messages: { role: "system" | "user" | "assistant"; content: string }[] = [
    { role: "system", content: system },
    ...((body.history || []).slice(-10) as ChatMsg[]).map((m) => ({
      role: m.role,
      content: m.content,
    })),
    { role: "user", content: message },
  ];

  try {
    const resp = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      temperature: 0.4,
      max_tokens: 400,
    });
    const reply = resp.choices[0]?.message?.content?.trim() || "(no reply)";
    return NextResponse.json({ reply });
  } catch (err: unknown) {
    const detail = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { reply: `(LLM error: ${detail})` },
      { status: 200 }
    );
  }
}
