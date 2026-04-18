import { Section, H2, Lede } from "@/components/ui/Section";

const BULLETS = [
  "Item-level circularity records",
  "DPP-ready traceability workflows",
  "Audit-ready recovery logs",
  "Better recovery before destruction becomes a liability",
];

export default function Compliance() {
  return (
    <Section id="compliance">
      <H2>Circularity Is Becoming an Operating Requirement</H2>
      <Lede className="mt-5">
        Under the EU&apos;s Ecodesign for Sustainable Products Regulation, large
        companies will be banned from destroying unsold apparel, clothing
        accessories, and footwear from 19 July 2026, with standardized
        disclosure on discarded unsold goods beginning in February 2027.
        Enterprises need item-level visibility, traceability, and recovery
        workflows to respond.{" "}
        <span className="font-mono text-xs text-ink-faint">
          Source: European Commission
        </span>
      </Lede>

      <ul className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2">
        {BULLETS.map((b) => (
          <li
            key={b}
            className="flex items-start gap-3 rounded-xl border border-line bg-bg-card p-4 text-sm text-ink"
          >
            <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-cta" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
