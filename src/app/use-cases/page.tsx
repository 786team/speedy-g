import PageShell from "@/components/PageShell";
import { Section, Lede, Card } from "@/components/ui/Section";
import { CTAButton } from "@/components/ui/Button";

const USE_CASES = [
  {
    id: "circular-fashion",
    name: "Circular Fashion",
    body: "Used apparel and sneakers are high-frequency, visually complex, and circularity-sensitive.",
  },
  {
    id: "reverse-logistics",
    name: "Reverse Logistics Teams",
    body: "Speed up intake, disposition, pricing, and recovery across warehouse return streams.",
  },
  {
    id: "liquidation",
    name: "Liquidation & Recommerce",
    body: "Turn dead stock, shelf pulls, and loose inventory into structured recovery workflows.",
  },
  {
    id: "3pl",
    name: "3PL Operations",
    body: "Add item-level visibility and faster decisioning without replacing the customer's ERP.",
  },
];

export const metadata = {
  title: "Use Cases · myali.ai",
  description:
    "Use cases built for messy inventory: circular fashion, reverse logistics, liquidation, 3PL.",
};

export default function UseCasesPage() {
  return (
    <PageShell>
      <Section>
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-ink md:text-6xl">
          Use cases built for messy inventory
        </h1>
        <Lede className="mt-6">
          myali.ai is designed for categories and workflows where manual
          handling destroys margin fastest.
        </Lede>
      </Section>

      <Section tone="section">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {USE_CASES.map((u) => (
            <Card key={u.id} className="scroll-mt-24" >
              <div id={u.id} className="font-heading text-xl font-semibold text-ink">
                {u.name}
              </div>
              <p className="mt-3 text-sm text-ink-muted">{u.body}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <CTAButton href="/contact" variant="primary">
            Analyze Your Inventory →
          </CTAButton>
        </div>
      </Section>
    </PageShell>
  );
}
