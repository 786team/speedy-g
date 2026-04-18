import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { GoogleGenerativeAI } from "@google/generative-ai";

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

  // Accept either GEMINI_API_KEY (preferred) or GOOGLE_API_KEY (alias)
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    return NextResponse.json({
      reply:
        "The myali.ai assistant is being provisioned. In the meantime, head to /contact and click Deploy Pilot — the team will get back to you within one business day.",
    });
  }

  const system = await getSystemPrompt();
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: system,
    generationConfig: {
      temperature: 0.4,
      maxOutputTokens: 400,
    },
  });

  // Map our {role: user|assistant} history to Gemini's {role: user|model} format
  const history = ((body.history || []).slice(-10) as ChatMsg[]).map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  try {
    const chat = model.startChat({ history });
    const result = await chat.sendMessage(message);
    const reply = result.response.text().trim() || "(no reply)";
    return NextResponse.json({ reply });
  } catch (err: unknown) {
    const detail = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { reply: `(LLM error: ${detail})` },
      { status: 200 }
    );
  }
}
