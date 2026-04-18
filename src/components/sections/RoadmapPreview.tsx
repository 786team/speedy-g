import { Section, H2 } from "@/components/ui/Section";
import { CTAButton } from "@/components/ui/Button";

const PHASES = [
  {
    n: "Phase 1",
    name: "Agentic Web App",
    body: "Single-image intake, pricing, listing, messaging, fulfillment, and live workflow visibility.",
  },
  {
    n: "Phase 2",
    name: "Control Tower",
    body: "Multi-user operations software with dashboards, approvals, integrations, reporting, and recovery analytics.",
  },
  {
    n: "Phase 3",
    name: "myali Pod",
    body: "Physical intake infrastructure with controlled imaging, scanning, label printing, and warehouse deployment.",
  },
];

export default function RoadmapPreview() {
  return (
    <Section id="roadmap-preview">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <H2>From workflow software to physical infrastructure</H2>
        <CTAButton href="/roadmap" variant="ghost">
          See the full roadmap →
        </CTAButton>
      </div>

      <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {PHASES.map((p) => (
          <li
            key={p.n}
            className="rounded-2xl border border-line bg-bg-card p-6 shadow-card"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              {p.n}
            </div>
            <div className="mt-3 font-heading text-xl font-semibold text-ink">
              {p.name}
            </div>
            <p className="mt-3 text-sm text-ink-muted">{p.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
