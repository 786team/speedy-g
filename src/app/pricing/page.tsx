import PageShell from "@/components/PageShell";
import { Section, Lede, H2 } from "@/components/ui/Section";
import { CTAButton } from "@/components/ui/Button";

type Plan = {
  name: string;
  price: string;
  blurb: string;
  features: string[];
  cta: { label: string; href: string };
  highlight?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "Free",
    blurb: "Best for pilots and proof-of-value",
    features: ["5 free postings", "Self-serve", "Speedy G read-only console"],
    cta: { label: "Start Free", href: "/contact" },
  },
  {
    name: "Usage",
    price: "$1 / posting",
    blurb: "Best for pay-as-you-go volume",
    features: ["No monthly minimum", "All channels", "Workflow audit log"],
    cta: { label: "Start Posting", href: "/contact" },
  },
  {
    name: "Pro",
    price: "$29 / mo",
    blurb: "For active operators and small teams",
    features: [
      "Up to 100 postings",
      "Speedy G dashboard",
      "Alerts and workflow visibility",
    ],
    cta: { label: "Start Pro", href: "/contact" },
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    blurb: "Annual platform agreement",
    features: [
      "Integrations and reporting",
      "Item-level compliance workflows",
      "Support and onboarding",
      "Future myali Pod deployment options",
    ],
    cta: { label: "Talk to Sales", href: "/contact" },
  },
];

const FAQ = [
  {
    q: "What counts as a posting?",
    a: "A posting is a completed item workflow that results in a listing or disposition-ready output.",
  },
  {
    q: "Can I start with a pilot?",
    a: "Yes. The first 5 postings are free so your team can validate the workflow before scaling.",
  },
  {
    q: "Is enterprise pricing volume-based?",
    a: "Enterprise plans can include platform licensing, usage thresholds, integrations, reporting, and support.",
  },
  {
    q: "Do you support compliance workflows?",
    a: "Yes. Enterprise plans are designed to support item-level traceability, circularity records, and reporting workflows.",
  },
];

export const metadata = {
  title: "Pricing · myali.ai",
  description:
    "Pricing for modern reverse-logistics teams. Start with a pilot. Prove the workflow. Expand into a deeper operating layer.",
};

export default function PricingPage() {
  return (
    <PageShell>
      <Section>
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-ink md:text-6xl">
          Pricing for modern reverse-logistics teams
        </h1>
        <Lede className="mt-6">
          Start with a pilot. Prove the workflow. Expand into a deeper operating
          layer as recovery volume grows.
        </Lede>
      </Section>

      <Section tone="section">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl border p-6 shadow-card ${
                p.highlight
                  ? "border-cta bg-bg-card ring-1 ring-cta/30"
                  : "border-line bg-bg-card"
              }`}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                {p.name}
              </div>
              <div className="mt-3 font-heading text-2xl font-semibold text-ink">
                {p.price}
              </div>
              <div className="mt-2 text-sm text-ink-muted">{p.blurb}</div>
              <ul className="mt-5 space-y-2 text-sm text-ink">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cta" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <CTAButton
                  href={p.cta.href}
                  variant={p.highlight ? "primary" : "secondary"}
                  className="w-full justify-center"
                >
                  {p.cta.label}
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <H2>FAQ</H2>
        <dl className="mt-10 space-y-6">
          {FAQ.map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-line bg-bg-card p-6 shadow-card"
            >
              <dt className="font-heading text-lg font-semibold text-ink">
                {item.q}
              </dt>
              <dd className="mt-2 text-sm text-ink-muted">{item.a}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </PageShell>
  );
}
