import PageShell from "@/components/PageShell";
import { Section, Lede } from "@/components/ui/Section";
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

export const metadata = {
  title: "Roadmap · myali.ai",
  description:
    "From workflow software to physical intake infrastructure. Three phases of the myali.ai roadmap.",
};

export default function RoadmapPage() {
  return (
    <PageShell>
      <Section>
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-ink md:text-6xl">
          From workflow software to physical intake infrastructure
        </h1>
        <Lede className="mt-6">
          The myali.ai roadmap moves from agentic software, to multi-user
          operations control, to physical infrastructure inside the warehouse.
        </Lede>
      </Section>

      <Section tone="section">
        <ol className="space-y-6">
          {PHASES.map((p, i) => (
            <li
              key={p.n}
              className="rounded-2xl border border-line bg-bg-card p-8 shadow-card"
            >
              <div className="flex items-baseline gap-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {p.n}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                  step {i + 1} / {PHASES.length}
                </div>
              </div>
              <h2 className="mt-3 font-heading text-2xl font-semibold text-ink md:text-3xl">
                {p.name}
              </h2>
              <p className="mt-3 max-w-2xl text-base text-ink-muted">{p.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <CTAButton href="/contact" variant="primary">
            Talk to Sales →
          </CTAButton>
        </div>
      </Section>
    </PageShell>
  );
}
