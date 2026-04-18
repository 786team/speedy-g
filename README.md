# myali.ai (formerly speedy-g)

Marketing site for **myali.ai** — the Autonomous Disposition Engine for Reverse Logistics. Built by Team 786. Speedy G now lives as the **operator console section** of the homepage.

Deployed to https://speedy-g.vercel.app (production domain `myali.ai` to be pointed at this Vercel project later).

## Stack

- [Next.js 14](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) — dark-first premium palette
- [GSAP](https://gsap.com) + [`@gsap/react`](https://gsap.com/resources/React/) for entrance + console timeline animations
- Inter (UI) + JetBrains Mono (console) via `next/font/google`

## Run it

```bash
npm install
npm run dev
# open http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build
npm run start   # serve production build
npm run lint    # next lint
```

## Routes

* `/` — Home (Hero, Problem, The Claw, Why Fashion First, Compliance, Speedy G console, Pricing preview, Roadmap preview, Final CTA)
* `/product` — Governed workflows for reverse logistics
* `/use-cases` — Circular fashion, reverse-logistics teams, liquidation, 3PL
* `/pricing` — Starter / Usage / Pro / Enterprise + FAQ
* `/roadmap` — Phase 1 Web App → Phase 2 Control Tower → Phase 3 myali Pod
* `/trust` — Observability, guardrails, state control, audit trail, integrations
* `/contact` — Pilot deployment form

## API routes

* `POST /api/chat` — floating chat bubble (`Ask myali`) backed by OpenAI + `KNOWLEDGE.md`. Requires `OPENAI_API_KEY`.
* `POST /api/contact` — stub that logs the form submission. Replace with Resend / SendGrid / Slack later.

## Structure

```
src/
├─ app/
│  ├─ layout.tsx               # fonts (Manrope/Inter/IBM Plex Mono) + metadata + ChatBubble mount
│  ├─ page.tsx                 # composes home sections
│  ├─ globals.css              # warm-first tokens + utilities
│  ├─ product/page.tsx
│  ├─ use-cases/page.tsx
│  ├─ pricing/page.tsx
│  ├─ roadmap/page.tsx
│  ├─ trust/page.tsx
│  ├─ contact/page.tsx
│  └─ api/
│     ├─ chat/route.ts         # OpenAI-backed Q&A grounded in KNOWLEDGE.md
│     └─ contact/route.ts      # pilot form stub
└─ components/
   ├─ Nav.tsx                   # myali.ai wordmark + nav + Deploy Pilot CTA
   ├─ Footer.tsx                # 4-column footer
   ├─ PageShell.tsx             # Nav + main + Footer wrapper for sub-pages
   ├─ ChatBubble.tsx            # floating Ask myali widget
   ├─ sections/                 # one file per home section
   │  ├─ Hero.tsx
   │  ├─ Problem.tsx
   │  ├─ TheClaw.tsx
   │  ├─ WhyFashionFirst.tsx
   │  ├─ Compliance.tsx
   │  ├─ SpeedyGSection.tsx     # dark zone
   │  ├─ PricingPreview.tsx
   │  ├─ RoadmapPreview.tsx
   │  └─ FinalCTA.tsx
   └─ ui/                       # primitives
      ├─ Section.tsx            # Section / Eyebrow / H2 / Lede / Card
      └─ Button.tsx             # CTAButton variants
```

## Design inspirations

- **Warp** — the live console feel, terminal chrome, traffic lights, agent/operator framing (`Console.tsx`).
- **Linear** — crisp headline copy, single-message-per-section rhythm.
- **Vercel** — dark UI polish, grid + radial glow background, quiet motion.
- **Stripe** — spacing, trust layer, conversion button hierarchy.
- **Ramp** — ROI-forward CTA ("See ROI calculator") and plain-money framing.
- **Flexport / ShipBob** — logistics-native vocabulary (WMS, 3PL, EDI, exceptions, carriers).
- **Scale AI** — enterprise-AI tone and seriousness.
- **Perplexity** — AI-native simplicity in the prompt composition.

## Next up (not in this draft)

- Product / How it works sections
- ROI calculator
- Logistics credibility strip (carriers, WMS, integrations)
- Enterprise trust (SOC2, SSO, audit log)
- Pricing + case studies
- Footer CTA block
