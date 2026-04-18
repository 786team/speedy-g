# speedy-g

The AI operator for logistics. Front-end draft for **786team / Speedy G** — a live, Warp-style console for an AI agent that runs fulfillment & supply-chain ops.

This is a design draft, not the production site.

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

## Structure

```
src/
├─ app/
│  ├─ layout.tsx      # fonts + metadata
│  ├─ page.tsx        # Nav + Hero + Footer
│  └─ globals.css     # dark tokens + grid/mask utilities
└─ components/
   ├─ Nav.tsx         # sticky glass top nav
   ├─ Hero.tsx        # headline + CTAs + logo strip (GSAP entrance)
   ├─ Console.tsx     # Warp-style live console (GSAP timeline)
   └─ Footer.tsx
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
