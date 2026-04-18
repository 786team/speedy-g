"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Line =
  | { kind: "plan"; text: string }
  | { kind: "tool"; tool: string; args: string; status?: string }
  | { kind: "log"; text: string }
  | { kind: "result"; text: string };

const PROMPT =
  "reship the 14 ORM-D exceptions stuck at IAD, use UPS ground, notify customers";

const SCRIPT: Line[] = [
  {
    kind: "plan",
    text: "pull exceptions → validate hazmat docs → rebook UPS ground → email customers",
  },
  {
    kind: "tool",
    tool: "wms.query",
    args: 'status="exception" region="IAD" hazmat=true limit=50',
    status: "14 orders",
  },
  {
    kind: "tool",
    tool: "hazmat.validate",
    args: "orders=#IAD-0482…0495",
    status: "ok",
  },
  {
    kind: "tool",
    tool: "carrier.rate_shop",
    args: 'carrier="ups" service="ground" hazmat=true',
    status: "$148.22 avg · 2-day",
  },
  {
    kind: "tool",
    tool: "carrier.book",
    args: "orders=14 carrier=ups service=ground",
    status: "labels printed",
  },
  {
    kind: "tool",
    tool: "comm.email.send",
    args: 'template="reship_delay" to=14',
    status: "sent",
  },
  { kind: "log", text: "sla recovered · 14/14 · saved ~3h20m of ops time" },
  {
    kind: "result",
    text: "done — 14 reshipments booked, customers notified, ETA within SLA.",
  },
];

export default function Console() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!root.current) return;
      const q = gsap.utils.selector(root);

      const lines = q(".console-line");
      const prompt = q(".console-prompt")[0];
      const typed = root.current.querySelector<HTMLSpanElement>(".typed");
      const caret = q(".console-caret")[0];

      gsap.set(lines, { opacity: 0, y: 6 });
      if (typed) typed.textContent = "";

      // Blinking caret (independent loop)
      if (caret) {
        gsap.to(caret, {
          opacity: 0,
          duration: 0.55,
          repeat: -1,
          yoyo: true,
          ease: "steps(1)",
        });
      }

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 2.8,
        defaults: { ease: "power2.out" },
      });

      // 1) reveal the prompt row
      tl.to(prompt, { opacity: 1, y: 0, duration: 0.3 });

      // 2) type the prompt text
      tl.to(
        {},
        {
          duration: Math.max(1.4, PROMPT.length * 0.028),
          ease: "none",
          onUpdate: function () {
            if (!typed) return;
            const p = this.progress();
            const n = Math.floor(PROMPT.length * p);
            typed.textContent = PROMPT.slice(0, n);
          },
          onComplete: () => {
            if (typed) typed.textContent = PROMPT;
          },
        }
      );

      // 3) reveal the remaining lines
      for (let i = 1; i < lines.length; i++) {
        tl.to(
          lines[i],
          { opacity: 1, y: 0, duration: 0.35 },
          i === 1 ? "+=0.15" : "+=0.22"
        );
      }

      // 4) pause then reset for the loop
      tl.to({}, { duration: 1.6 });
      tl.to(lines, { opacity: 0, duration: 0.4 });
      tl.add(() => {
        if (typed) typed.textContent = "";
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="relative mx-auto max-w-5xl">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -inset-x-10 -inset-y-10 rounded-[32px] bg-[radial-gradient(ellipse_at_center,rgba(124,92,255,0.22),transparent_60%)] blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-term-bg shadow-consoleGlow">
        {/* Chrome header */}
        <div className="flex h-10 items-center gap-3 border-b border-line bg-term-header px-4">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="mx-auto font-mono text-xs tracking-wide text-ink-faint">
            speedy-g · session · iad-reship-ops
          </div>
          <div className="ml-auto font-mono text-[10px] text-ink-faint">
            ●&nbsp;&nbsp;live
          </div>
        </div>

        {/* Body */}
        <div className="min-h-[420px] p-5 font-mono text-[13px] leading-relaxed md:p-6">
          {/* prompt */}
          <div className="console-line console-prompt flex items-start gap-2">
            <span className="select-none text-brand-accent">❯</span>
            <span className="text-ink">
              <span className="typed" />
              <span className="console-caret ml-0.5 inline-block h-4 w-2 translate-y-0.5 align-middle bg-ink" />
            </span>
          </div>

          {/* rest */}
          <div className="mt-4 space-y-2">
            {SCRIPT.map((line, i) => (
              <Row key={i} line={line} />
            ))}
          </div>
        </div>

        {/* footer status bar */}
        <div className="flex h-8 items-center justify-between border-t border-line bg-term-header/70 px-4 font-mono text-[10px] text-ink-faint">
          <div className="flex items-center gap-4">
            <span>agent: speedy-g/0.9.1</span>
            <span>tools: 23</span>
            <span>memory: 48 orders</span>
          </div>
          <div className="flex items-center gap-3">
            <span>latency 312ms</span>
            <span className="text-brand-accent">● connected</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ line }: { line: Line }) {
  if (line.kind === "plan") {
    return (
      <div className="console-line text-ink-muted">
        <span className="text-brand">plan</span>{" "}
        <span className="text-ink-faint">›</span>{" "}
        <span>{line.text}</span>
      </div>
    );
  }

  if (line.kind === "tool") {
    return (
      <div className="console-line flex items-start gap-3">
        <span className="inline-flex shrink-0 items-center gap-2 rounded-md border border-line bg-bg-elevated px-2 py-0.5 text-[11px] text-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" /> call
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-ink">
            <span className="text-brand-accent">{line.tool}</span>
            <span className="text-ink-faint">(</span>
            <span className="text-ink-muted">{line.args}</span>
            <span className="text-ink-faint">)</span>
          </div>
          {line.status && (
            <div className="text-[12px] text-ink-faint">
              → <span className="text-ink-muted">{line.status}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (line.kind === "log") {
    return (
      <div className="console-line text-ink-faint">{"// "}{line.text}</div>
    );
  }

  return (
    <div className="console-line text-brand-accent">✓ {line.text}</div>
  );
}
