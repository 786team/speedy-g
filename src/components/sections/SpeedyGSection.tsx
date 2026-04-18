"use client";

import { useState } from "react";

type Severity = "INFO" | "WARN" | "CRIT" | "SUCCESS";
type Tab = "live" | "why" | "next";

const SEVERITY_COLOR: Record<Severity, string> = {
  INFO: "text-ink-faint",
  WARN: "text-warn",
  CRIT: "text-critical",
  SUCCESS: "text-success",
};

const EVENTS: { sev: Severity; text: string }[] = [
  { sev: "INFO", text: "Item uploaded" },
  { sev: "INFO", text: "Condition classified" },
  { sev: "INFO", text: "Target price calculated" },
  { sev: "WARN", text: "Low confidence — human review requested" },
  { sev: "CRIT", text: "Compliance packet generated" },
  { sev: "SUCCESS", text: "Label ready" },
];

const WHY_LINES = [
  { sev: "INFO" as Severity, text: "Visual signal: scuffed leather, worn sole, original box absent" },
  { sev: "INFO" as Severity, text: "Comp set: 38 sold listings · median $112 · IQR $94–$138" },
  { sev: "WARN" as Severity, text: "Confidence below 0.75 threshold → escalate to operator" },
];

const NEXT_LINES = [
  { sev: "INFO" as Severity, text: "Suggested action: list at $118 with 7-day floor at $96" },
  { sev: "INFO" as Severity, text: "Channel mix: marketplace (60%) · liquidator (40%)" },
  { sev: "SUCCESS" as Severity, text: "Operator approval routes label to fulfillment in 1 click" },
];

export default function SpeedyGSection() {
  const [tab, setTab] = useState<Tab>("live");
  const lines = tab === "live" ? EVENTS : tab === "why" ? WHY_LINES : NEXT_LINES;

  return (
    <section id="speedy-g" className="bg-console-bg text-on-dark">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-on-dark/50">
          Operator Console
        </div>
        <h2 className="mt-3 max-w-3xl font-heading text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Speedy G turns black-box AI into visible enterprise workflow
        </h2>
        <p className="mt-5 max-w-2xl text-balance text-base text-on-dark/70 md:text-lg">
          Speedy G is the live operator console inside myali.ai. It shows what
          each agent is doing, why a decision was made, and what should happen
          next.
        </p>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-white/10 pb-1">
          {[
            { id: "live", label: "Live Events" },
            { id: "why", label: "Why This Happened" },
            { id: "next", label: "Next Best Action" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id as Tab)}
              className={`relative -mb-px rounded-t-md px-4 py-2 text-sm font-medium transition-colors ${
                tab === t.id
                  ? "bg-console-card text-on-dark"
                  : "text-on-dark/60 hover:text-on-dark"
              }`}
            >
              {t.label}
              {tab === t.id && (
                <span className="absolute inset-x-2 -bottom-px h-px bg-cta" />
              )}
            </button>
          ))}
        </div>

        {/* Console card */}
        <div className="mt-0 overflow-hidden rounded-b-2xl border border-white/10 bg-console-card shadow-consoleGlow">
          <div className="flex h-10 items-center gap-3 border-b border-white/10 bg-black/30 px-4">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="mx-auto font-mono text-xs tracking-wide text-on-dark/50">
              speedy-g · session · disposition-pipeline
            </div>
            <div className="ml-auto flex items-center gap-1 font-mono text-[10px] text-success">
              <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_currentColor]" />
              live
            </div>
          </div>

          <div className="min-h-[300px] p-5 font-mono text-[13px] leading-relaxed md:p-6">
            {lines.map((l, i) => (
              <div key={i} className="flex items-start gap-3 py-1">
                <span className="select-none text-on-dark/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`shrink-0 ${SEVERITY_COLOR[l.sev]}`}>
                  [{l.sev}]
                </span>
                <span className="text-on-dark/85">{l.text}</span>
              </div>
            ))}
          </div>

          <div className="flex h-8 items-center justify-between border-t border-white/10 bg-black/20 px-4 font-mono text-[10px] text-on-dark/50">
            <div className="flex items-center gap-4">
              <span>agent: speedy-g/0.9.2</span>
              <span>workflow: disposition</span>
              <span>items in flight: 14</span>
            </div>
            <div className="flex items-center gap-3">
              <span>latency 287ms</span>
              <span className="text-success">● connected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
