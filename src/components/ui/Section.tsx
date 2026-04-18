import { ReactNode } from "react";

type Tone = "default" | "section" | "card" | "dark";

const TONE_BG: Record<Tone, string> = {
  default: "bg-bg",
  section: "bg-bg-section",
  card: "bg-bg-card",
  dark: "bg-console-bg text-on-dark",
};

export function Section({
  id,
  tone = "default",
  className = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative w-full ${TONE_BG[tone]} ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
      {children}
    </div>
  );
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-heading text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lede({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`max-w-3xl text-balance text-base text-ink-muted md:text-lg ${className}`}
    >
      {children}
    </p>
  );
}

export function Card({
  children,
  className = "",
  dark,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border ${
        dark ? "border-white/10 bg-console-card text-on-dark" : "border-line bg-bg-card text-ink"
      } p-6 shadow-card ${className}`}
    >
      {children}
    </div>
  );
}
