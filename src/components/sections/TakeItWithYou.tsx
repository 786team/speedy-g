"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const DEMO_URL = "https://github.com/786team/hackathon";

type State = "idle" | "submitting" | "success" | "error";

export default function TakeItWithYou() {
  const [state, setState] = useState<State>("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim()) return;
    setState("submitting");
    try {
      const r = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, source: "take-it-with-you" }),
      });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <section
      id="try-on-phone"
      className="relative w-full bg-bg-section"
      aria-label="Take the demo with you"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* QR card */}
          <div className="flex flex-col rounded-2xl border border-line bg-bg-card p-6 shadow-card md:p-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Open on your phone
            </div>
            <h3 className="mt-3 font-heading text-2xl font-semibold text-ink md:text-3xl">
              Scan to launch the demo
            </h3>
            <p className="mt-2 text-sm text-ink-muted">
              Point your phone&apos;s camera at the QR code. The thrifting demo
              opens in your mobile browser — no install, no account.
            </p>
            <div className="mt-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <div className="rounded-xl border border-line bg-bg p-3">
                <QRCodeSVG
                  value={DEMO_URL}
                  size={168}
                  bgColor="#F7F2E8"
                  fgColor="#1E1A17"
                  level="M"
                  includeMargin={false}
                />
              </div>
              <div className="flex-1 text-sm">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                  Or open the link directly
                </div>
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block break-all font-mono text-xs text-cta underline decoration-cta/40 underline-offset-4 hover:text-cta-hover"
                >
                  {DEMO_URL}
                </a>
                <p className="mt-3 text-xs text-ink-faint">
                  No signup required. We don&apos;t store anything you don&apos;t
                  give us.
                </p>
              </div>
            </div>
          </div>

          {/* Lead capture card */}
          <div className="flex flex-col rounded-2xl border border-line bg-bg-card p-6 shadow-card md:p-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              Optional · stay in the loop
            </div>
            <h3 className="mt-3 font-heading text-2xl font-semibold text-ink md:text-3xl">
              Get updates as we ship
            </h3>
            <p className="mt-2 text-sm text-ink-muted">
              Drop your name and phone and we&apos;ll text you when new agents,
              integrations, or pilot slots open up. No spam, no marketing
              firehose.
            </p>

            {state === "success" ? (
              <div className="mt-6 rounded-xl border border-success/40 bg-success/10 p-4 text-sm text-ink">
                ✅ You&apos;re on the list. We&apos;ll text you when there&apos;s
                something worth a tap.
              </div>
            ) : (
              <form onSubmit={submit} className="mt-6 space-y-4">
                <Field
                  label="Name"
                  name="name"
                  value={name}
                  onChange={setName}
                  required
                  placeholder="Alex"
                />
                <Field
                  label="Phone (optional)"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={setPhone}
                  placeholder="+1 555 123 4567"
                />
                <p className="text-[11px] text-ink-faint">
                  We&apos;ll only text product updates. Reply STOP anytime to
                  unsubscribe. Skip this and just use the Try Now button if
                  you&apos;d rather stay anonymous.
                </p>

                {state === "error" && (
                  <div className="rounded-md border border-critical/40 bg-critical/10 p-3 text-xs text-critical">
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state === "submitting" || !name.trim()}
                  className="inline-flex h-11 w-full items-center justify-center rounded-md bg-cta px-5 text-sm font-medium text-on-dark transition-colors hover:bg-cta-hover disabled:opacity-50"
                >
                  {state === "submitting" ? "Sending…" : "Keep me posted"}
                </button>
              </form>
            )}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-ink-faint">
          Skip the form, skip the QR, just hit{" "}
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-cta underline underline-offset-2 hover:text-cta-hover"
          >
            Try Now
          </a>
          . Auth is never required to use the demo.
        </p>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-1 text-cta">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full rounded-md border border-line-strong bg-bg px-3 py-2 text-sm text-ink placeholder:text-ink-faint focus:border-cta focus:outline-none focus:ring-1 focus:ring-cta"
      />
    </label>
  );
}
