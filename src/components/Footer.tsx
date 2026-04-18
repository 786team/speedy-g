import Link from "next/link";

const COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "Product", href: "/product" },
      { label: "Pricing", href: "/pricing" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Trust", href: "/trust" },
    ],
  },
  {
    heading: "Use Cases",
    links: [
      { label: "Circular Fashion", href: "/use-cases#circular-fashion" },
      { label: "Reverse Logistics Teams", href: "/use-cases#reverse-logistics" },
      { label: "Liquidation & Recommerce", href: "/use-cases#liquidation" },
      { label: "3PL Operations", href: "/use-cases#3pl" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Deploy Pilot", href: "/contact" },
      { label: "GitHub", href: "https://github.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-bg-section">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <p className="max-w-3xl text-balance text-base text-ink md:text-lg">
          <span className="font-heading font-semibold">myali.ai</span> —
          autonomous disposition and compliance workflows for enterprise reverse
          logistics.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                {col.heading}
              </div>
              <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="transition-colors hover:text-ink">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-6 text-xs text-ink-faint">
          © {new Date().getFullYear()} myali.ai — all rights reserved.
        </div>
      </div>
    </footer>
  );
}
