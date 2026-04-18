import { Section, H2 } from "@/components/ui/Section";
import { CTAButton } from "@/components/ui/Button";

const PLANS = [
  { name: "Starter", price: "Free", note: "First 5 postings free" },
  { name: "Usage", price: "$1 / posting", note: "Pay-as-you-go volume" },
  { name: "Pro", price: "$29 / mo", note: "Up to 100 postings + Speedy G" },
  { name: "Enterprise", price: "Custom", note: "Annual platform + integrations" },
];

export default function PricingPreview() {
  return (
    <Section tone="section" id="pricing-preview">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <H2>Start self-serve. Expand into enterprise infrastructure.</H2>
        </div>
        <CTAButton href="/pricing" variant="ghost">
          See full pricing →
        </CTAButton>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {PLANS.map((p) => (
          <div
            key={p.name}
            className="flex flex-col rounded-2xl border border-line bg-bg-card p-6 shadow-card"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
              {p.name}
            </div>
            <div className="mt-3 font-heading text-2xl font-semibold text-ink">
              {p.price}
            </div>
            <div className="mt-2 text-sm text-ink-muted">{p.note}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
