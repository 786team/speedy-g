"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const WELCOME: Msg = {
  role: "assistant",
  content:
    "Hi — I'm the myali.ai assistant. Ask me about the disposition pipeline, the 5 agents, pricing, EU ESPR compliance, or how Speedy G makes the workflow visible.",
};

export default function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // First-open welcome message
  useEffect(() => {
    if (open && messages.length === 0) setMessages([WELCOME]);
    if (open) setTimeout(() => inputRef.current?.focus(), 60);
  }, [open, messages.length]);

  // Auto-scroll on new message
  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, busy]);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setBusy(true);
    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: next.filter((m) => m !== WELCOME),
        }),
      });
      const data = (await r.json()) as { reply?: string; error?: string };
      const reply =
        data.reply || data.error || "(no reply — try again in a moment)";
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content: "(network error — please try again)",
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-cta text-on-dark shadow-glow transition-transform hover:scale-105 hover:bg-cta-hover focus:outline-none focus:ring-2 focus:ring-cta"
      >
        {open ? (
          <span className="text-xl leading-none">×</span>
        ) : (
          <ChatIcon />
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[30rem] w-[22rem] flex-col overflow-hidden rounded-2xl border border-line bg-bg-card shadow-card md:w-[26rem]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-line bg-bg-section px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-success shadow-[0_0_8px_currentColor]" />
              <div>
                <div className="font-heading text-sm font-semibold text-ink">
                  Ask myali
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                  disposition assistant · online
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-ink-muted hover:text-ink"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div
            ref={listRef}
            className="flex-1 space-y-2 overflow-y-auto bg-bg px-3 py-3 text-sm"
          >
            {messages.map((m, i) => (
              <Bubble key={i} role={m.role} content={m.content} />
            ))}
            {busy && (
              <Bubble role="assistant" content="…" italic />
            )}
          </div>

          {/* Composer */}
          <form
            onSubmit={send}
            className="flex gap-2 border-t border-line bg-bg-section p-2"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about agents, pricing, compliance…"
              className="flex-1 rounded-md border border-line-strong bg-bg-card px-3 py-2 text-sm text-ink placeholder:text-ink-faint focus:border-cta focus:outline-none focus:ring-1 focus:ring-cta"
              disabled={busy}
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="rounded-md bg-cta px-4 text-sm font-medium text-on-dark transition-colors hover:bg-cta-hover disabled:opacity-40"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}

function Bubble({
  role,
  content,
  italic,
}: {
  role: "user" | "assistant";
  content: string;
  italic?: boolean;
}) {
  const isUser = role === "user";
  return (
    <div
      className={[
        "max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2",
        isUser
          ? "ml-auto rounded-br-sm bg-cta text-on-dark"
          : "mr-auto rounded-bl-sm border border-line bg-bg-card text-ink",
        italic ? "italic text-ink-muted" : "",
      ].join(" ")}
    >
      {content}
    </div>
  );
}

function ChatIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}
