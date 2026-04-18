import PageShell from "@/components/PageShell";
import { Section, H2, Lede, Card } from "@/components/ui/Section";
import { CTAButton } from "@/components/ui/Button";

const SECTIONS = [
  {
    title: "Visual-first intake",
    body: "Start from the real world, not perfect catalog data.",
  },
  {
    title: "Governed agent execution",
    body: "Strict schemas, confidence checks, and event-driven state changes.",
  },
  {
    title: "Operator visibility",
    body: "Every workflow step is visible in Speedy G.",
  },
  {
    title: "Guardrails",
    body: "Low-confidence items escalate to human review. Sold items lock globally. Outputs stay structured and auditable.",
  },
  {
    title: "Operational outputs",
    body: "Listing drafts, pricing recommendations, labels, and disposition reports.",
  },
];

export const metadata = {
  title: "Product · myali.ai",
  description:
    "Governed workflows for reverse logistics. Visual intake, agent orchestration, guardrails, observability, auditability.",
};

export default function ProductPage() {
  return (
    <PageShell>
      <Section>
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-ink md:text-6xl">
          Governed workflows for reverse logistics
        </h1>
        <Lede className="mt-6">
          myali.ai turns visual intake into structured recovery actions with
          agent orchestration, guardrails, observability, and auditability.
        </Lede>
      </Section>

      <Section tone="section">
        <H2>How it shows up in product</H2>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {SECTIONS.map((s) => (
            <Card key={s.title}>
              <div className="font-heading text-lg font-semibold text-ink">
                {s.title}
              </div>
              <div className="mt-2 text-sm text-ink-muted">{s.body}</div>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <CTAButton href="/contact" variant="primary">
            See the Workflow →
          </CTAButton>
        </div>
      </Section>
    </PageShell>
  );
}
