import { Section, H2, Lede } from "@/components/ui/Section";

export default function WhyFashionFirst() {
  return (
    <Section tone="section" id="why-fashion-first">
      <H2>Fashion First. Enterprise Always.</H2>
      <Lede className="mt-5">
        We start with circular fashion and sneakers because they are visually
        messy, high-frequency, and difficult to grade from a single image. If
        the workflow works here, it extends to broader warehouse return streams.
        The global secondhand market is projected to reach $393 billion by 2030.{" "}
        <span className="font-mono text-xs text-ink-faint">Source: ThredUp</span>
      </Lede>

      <p className="mt-8 max-w-2xl font-heading text-xl font-semibold text-ink md:text-2xl">
        Fashion is the wedge. Reverse logistics is the market.
      </p>
    </Section>
  );
}
