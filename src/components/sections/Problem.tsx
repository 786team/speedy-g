import { Section, H2, Lede, Card } from "@/components/ui/Section";

const CARDS = [
  {
    title: "Manual dispositioning is too slow",
    body: "Sorting, grading, and routing returns by hand caps how much inventory a team can move per day.",
  },
  {
    title: "Low-value inventory becomes labor-negative",
    body: "When recovery cost exceeds resale value, items get destroyed or written off instead of resold.",
  },
  {
    title: "Item-level visibility is missing",
    body: "Spreadsheets and PDFs lose the per-item story regulators and operators now require.",
  },
];

export default function Problem() {
  return (
    <Section tone="section" id="problem">
      <H2>Returns are too expensive to manage with manual workflows</H2>
      <Lede className="mt-5">
        Consumers returned nearly $1 trillion in merchandise in the United States
        in 2024, and retailers spend roughly $200 billion annually trying to
        recover value from returned goods. Processing a return can cost 20–39%
        of the item&apos;s value and require about 2× the labor of outbound
        fulfillment.{" "}
        <span className="font-mono text-xs text-ink-faint">
          Source: McKinsey · Optoro
        </span>
      </Lede>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {CARDS.map((c) => (
          <Card key={c.title}>
            <div className="font-heading text-lg font-semibold text-ink">
              {c.title}
            </div>
            <div className="mt-2 text-sm text-ink-muted">{c.body}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
