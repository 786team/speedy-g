"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Console from "./Console";

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
          q(".anim-console"),
        ],
        { opacity: 0, y: 14 }
      );

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(q(".anim-eyebrow"), { opacity: 1, y: 0, duration: 0.6 })
        .to(
          q(".anim-headline > span"),
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 },
          "-=0.2"
        )
        .to(q(".anim-sub"), { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .to(
          q(".anim-cta > *"),
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          "-=0.3"
        )
        .to(
          q(".anim-console"),
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.35"
        );
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative">
      <div className="mx-auto max-w-7xl px-6 pb-28 pt-20 md:pb-36 md:pt-28">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="anim-eyebrow inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent shadow-[0_0_10px_theme(colors.brand.accent)]" />
            v0.9 · live in 11 warehouses · 2.4M orders shipped
          </span>

          <h1 className="anim-headline max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            <span className="inline-block">The AI operator</span>{" "}
            <span className="inline-block">for logistics.</span>
            <br className="hidden md:block" />
            <span className="inline-block text-ink-muted">Stop clicking.</span>{" "}
            <span className="inline-block text-ink-muted">Start shipping.</span>
          </h1>

          <p className="anim-sub max-w-2xl text-balance text-base text-ink-muted md:text-lg">
            Speedy G plugs into your WMS, 3PL, carriers, and ERP — then runs the
            ops work you hate. Exceptions, routing, returns, EDI, support. One
            operator. One console. Every order on time.
          </p>

          <div className="anim-cta flex flex-col items-center gap-3 pt-2 sm:flex-row">
            <Link
              href="#demo"
              className="inline-flex h-11 items-center rounded-md bg-ink px-5 font-medium text-bg transition-colors hover:bg-white"
            >
              Book a demo →
            </Link>
            <Link
              href="#pricing"
              className="inline-flex h-11 items-center rounded-md border border-line-strong px-5 text-ink transition-colors hover:bg-bg-subtle"
            >
              See ROI calculator
            </Link>
          </div>
        </div>

        <div className="anim-console mt-16 md:mt-24">
          <Console />
        </div>

        <LogoStrip />
      </div>
    </section>
  );
}

function LogoStrip() {
  const logos = [
    "Shopify",
    "NetSuite",
    "SAP",
    "Flexe",
    "UPS",
    "FedEx",
    "ShipBob",
    "Manhattan",
  ];
  return (
    <div className="mt-20 flex flex-col items-center gap-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
        plugs into the stack you already run
      </p>
      <div className="grid w-full grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4 md:grid-cols-8">
        {logos.map((l) => (
          <div
            key={l}
            className="text-center font-mono text-sm text-ink-faint transition-colors hover:text-ink"
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}
