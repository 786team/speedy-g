import PageShell from "@/components/PageShell";
import { Section, Lede, Card } from "@/components/ui/Section";
import { CTAButton } from "@/components/ui/Button";

const SECTIONS = [
  {
    title: "Observability",
    body: "Structured execution logs, agent status, confidence scores, and operator-readable reasoning.",
  },
  {
    title: "Guardrails",
    body: "Human review triggers, schema-constrained outputs, and pricing thresholds.",
  },
  {
    title: "State control",
    body: "Global item lock after sale or settlement event.",
  },
  {
    title: "Audit trail",
    body: "Disposition reports, workflow history, and compliance-ready item records.",
  },
  {
    title: "Integration-first",
    body: "API-first design that fits into warehouse systems, commerce systems, and ERP-connected workflows.",
  },
];

export const metadata = {
  title: "Trust · myali.ai",
  description:
    "Built for governed enterprise workflows: observability, guardrails, state control, audit trails, and integrations.",
};

export default function TrustPage() {
  return (
    <PageShell>
      <Section>
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-ink md:text-6xl">
          Built for governed enterprise workflows
        </h1>
        <Lede className="mt-6">
          Enterprises do not buy magic. They buy governed workflows with an
          audit trail.
        </Lede>
      </Section>

      <Section tone="section">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {SECTIONS.map((s) => (
            <Card key={s.title}>
              <div className="font-heading text-lg font-semibold text-ink">
                {s.title}
              </div>
              <div className="mt-2 text-sm text-ink-muted">{s.body}</div>
            </Card>
          ))}
        </div>

        <p className="mt-12 max-w-2xl font-heading text-xl font-semibold text-ink md:text-2xl">
          Enterprises do not buy magic. They buy governed workflows with an audit
          trail.
        </p>

        <div className="mt-8">
          <CTAButton href="/contact" variant="primary">
            Request Enterprise Access →
          </CTAButton>
        </div>
      </Section>
    </PageShell>
  );
}
