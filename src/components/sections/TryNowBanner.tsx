import { CTAButton } from "@/components/ui/Button";

const DEMO_URL = "https://github.com/786team/hackathon";

export default function TryNowBanner() {
  return (
    <section
      className="relative w-full overflow-hidden border-b border-line"
      aria-label="Try the live myali.ai demo"
    >
      {/* NVIDIA-style green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-nvidia-bright via-nvidia to-success" />
      <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 text-center md:flex-row md:gap-8 md:py-10 md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-on-dark backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-on-dark opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-on-dark" />
            </span>
            Live demo
          </div>
          <h2 className="mt-3 font-heading text-2xl font-semibold leading-tight text-on-dark md:text-3xl lg:text-4xl">
            Try the thrifting workflow now —{" "}
            <span className="underline decoration-on-dark/40 decoration-2 underline-offset-4">
              snap a photo, get a price
            </span>
            .
          </h2>
          <p className="mt-2 max-w-xl text-sm text-on-dark/85 md:text-base">
            See the Intake + Pricing agents run live in your browser. No signup.
          </p>
        </div>

        <CTAButton
          href={DEMO_URL}
          external
          variant="dark-primary"
          className="!h-12 !px-7 text-base font-semibold shadow-lg ring-1 ring-white/20 hover:scale-[1.02]"
        >
          Try Now →
        </CTAButton>
      </div>
    </section>
  );
}
