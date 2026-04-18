"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CTAButton } from "@/components/ui/Button";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!root.current) return;
      const q = gsap.utils.selector(root);

      gsap.set(
        [
          q(".anim-eyebrow"),
          q(".anim-headline > span"),
          q(".anim-sub"),
          q(".anim-cta > *"),
          q(".anim-proof > *"),
        ],
        { opacity: 0, y: 14 }
      );

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(q(".anim-eyebrow"), { opacity: 1, y: 0, duration: 0.5 })
        .to(
          q(".anim-headline > span"),
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.06 },
          "-=0.15"
        )
        .to(q(".anim-sub"), { opacity: 1, y: 0, duration: 0.55 }, "-=0.35")
        .to(
          q(".anim-cta > *"),
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.07 },
          "-=0.25"
        )
        .to(
          q(".anim-proof > *"),
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 },
          "-=0.2"
        );
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative bg-bg">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[700px] -z-10 bg-grid-fade" />
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:pt-24">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="anim-eyebrow inline-flex items-center gap-2 rounded-full border border-line bg-bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
            <span className="h-1.5 w-1.5 rounded-full bg-cta" />
            Enterprise Reverse Logistics
          </span>

          <h1 className="anim-headline max-w-5xl text-balance font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-7xl">
            <span className="inline-block">The Autonomous</span>{" "}
            <span className="inline-block">Disposition Engine</span>{" "}
            <span className="inline-block text-ink-muted">for Reverse Logistics.</span>
          </h1>

          <p className="anim-sub max-w-2xl text-balance text-base text-ink-muted md:text-lg">
            Stop letting returns destroy your margin. myali.ai orchestrates
            specialized AI agents to identify, value, list, message, and move
            inventory from a single visual input.
          </p>

          <div className="anim-cta flex flex-col items-center gap-3 pt-2 sm:flex-row">
            <CTAButton href="/contact" variant="primary">
              Deploy Pilot →
            </CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Analyze Your Inventory
            </CTAButton>
          </div>

          <p className="text-xs text-ink-faint">
            Built for reverse-logistics teams, recommerce operators, liquidation
            partners, and circular retail programs.
          </p>
        </div>

        <div className="anim-proof mt-16 grid grid-cols-1 gap-3 md:grid-cols-3">
          {[
            "One photo in. Structured recovery workflow out.",
            "Visual-first intake for messy inventory.",
            "Fashion-first wedge. Enterprise-scale platform.",
          ].map((line) => (
            <div
              key={line}
              className="rounded-xl border border-line bg-bg-card px-4 py-3 text-center font-mono text-[12px] text-ink-muted"
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
