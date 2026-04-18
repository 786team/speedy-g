"use client";

import { useState } from "react";
import PageShell from "@/components/PageShell";
import { Section, Lede } from "@/components/ui/Section";

type FormState = "idle" | "submitting" | "success" | "error";

const FIELDS: { name: string; label: string; type?: string; required?: boolean }[] = [
  { name: "name", label: "Name", required: true },
  { name: "company", label: "Company", required: true },
  { name: "email", label: "Work email", type: "email", required: true },
  { name: "inventoryType", label: "Inventory type" },
  { name: "monthlyVolume", label: "Monthly volume" },
  { name: "currentSystems", label: "Current systems" },
];

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [errorDetail, setErrorDetail] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorDetail("");

    const formData = new FormData(e.currentTarget);
    const payload: Record<string, string> = {};
    formData.forEach((value, key) => {
      payload[key] = String(value);
    });

    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) {
        const text = await r.text();
        throw new Error(text || `HTTP ${r.status}`);
      }
      setState("success");
    } catch (err) {
      setState("error");
      setErrorDetail(err instanceof Error ? err.message : String(err));
    }
  }

  return (
    <PageShell>
      <Section>
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-ink md:text-6xl">
          Deploy a pilot
        </h1>
        <Lede className="mt-6">
          Tell us about your inventory flow, current bottlenecks, and recovery
          goals.
        </Lede>
      </Section>

      <Section tone="section">
        <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-bg-card p-6 shadow-card md:p-8">
          {state === "success" ? (
            <div className="text-center">
              <div className="font-heading text-2xl font-semibold text-ink">
                Thanks — we&apos;ll be in touch.
              </div>
              <p className="mt-3 text-sm text-ink-muted">
                A member of the myali.ai team will reach out within one business
                day to schedule a pilot deployment call.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {FIELDS.map((f) => (
                <Field key={f.name} {...f} />
              ))}
              <Field name="message" label="Message" type="textarea" />

              {state === "error" && (
                <div className="rounded-md border border-critical/40 bg-critical/10 p-3 text-sm text-critical">
                  Something went wrong{errorDetail ? `: ${errorDetail}` : ""}.
                  Please try again, or email us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={state === "submitting"}
                className="inline-flex h-11 w-full items-center justify-center rounded-md bg-cta px-5 text-sm font-medium text-on-dark transition-colors hover:bg-cta-hover disabled:opacity-60"
              >
                {state === "submitting" ? "Sending…" : "Submit"}
              </button>
            </form>
          )}
        </div>
      </Section>
    </PageShell>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  const baseClass =
    "mt-1 block w-full rounded-md border border-line-strong bg-bg px-3 py-2 text-sm text-ink placeholder:text-ink-faint focus:border-cta focus:outline-none focus:ring-1 focus:ring-cta";
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-1 text-cta">*</span>}
      </span>
      {type === "textarea" ? (
        <textarea name={name} rows={4} required={required} className={baseClass} />
      ) : (
        <input name={name} type={type} required={required} className={baseClass} />
      )}
    </label>
  );
}
