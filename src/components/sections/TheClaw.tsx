import { Section, H2, Lede, Card } from "@/components/ui/Section";

const AGENTS = [
  {
    name: "Intake Agent",
    nickname: "The Eye",
    body: "Reads category, brand, model, condition, and confidence from raw images.",
  },
  {
    name: "Pricing Agent",
    nickname: "The Brain",
    body: "Analyzes comps and recommends a target price, floor price, and recovery path.",
  },
  {
    name: "Listing Agent",
    nickname: "The Mouth",
    body: "Creates listing-ready content and structured drafts for active channels.",
  },
  {
    name: "Negotiation Agent",
    nickname: "The Closer",
    body: "Captures buyer intent and supports guided messaging workflows.",
  },
  {
    name: "Fulfillment Agent",
    nickname: "The Sentinel",
    body: "Generates shipping artifacts and closes the loop from intake to recovery.",
  },
];

export default function TheClaw() {
  return (
    <Section id="the-claw">
      <H2>Full-Stack Agentic Orchestration</H2>
      <Lede className="mt-5">
        Most AI tools stop at generating text. myali.ai continues into execution.
        We own workflow state, event handoffs, and operational outputs that move
        inventory from intake to recovery.
      </Lede>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {AGENTS.map((a) => (
          <Card key={a.name}>
            <div className="flex items-baseline justify-between gap-2">
              <div className="font-heading text-lg font-semibold text-ink">
                {a.name}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {a.nickname}
              </div>
            </div>
            <div className="mt-3 text-sm text-ink-muted">{a.body}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
