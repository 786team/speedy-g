import { Section } from "@/components/ui/Section";
import { CTAButton } from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <Section tone="section" id="final-cta">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-ink md:text-5xl">
          One photo. Five agents. Less wasted inventory.
        </h2>
        <p className="text-balance text-base text-ink-muted md:text-lg">
          myali.ai is the visual operating system for reverse logistics — built
          to turn messy returns into structured recovery workflows.
        </p>
        <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row">
          <CTAButton href="/contact" variant="primary">
            Deploy Pilot →
          </CTAButton>
          <CTAButton href="/contact" variant="secondary">
            Talk to Sales
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}
