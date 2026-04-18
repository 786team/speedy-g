import Link from "next/link";

const NAV_ITEMS: { href: string; label: string }[] = [
  { href: "/product", label: "Product" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/trust", label: "Trust" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
        <Link href="/" className="flex items-center gap-2">
          <LogoMark />
          <span className="font-heading text-base font-semibold tracking-tight text-ink">
            myali<span className="text-cta">.ai</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-ink-muted lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden h-9 items-center rounded-md border border-line-strong bg-bg-card px-3 text-sm font-medium text-ink transition-colors hover:bg-bg-section sm:inline-flex"
          >
            Analyze Your Inventory
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-9 items-center rounded-md bg-cta px-4 text-sm font-medium text-on-dark transition-colors hover:bg-cta-hover"
          >
            Deploy Pilot
          </Link>
        </div>
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <div className="relative grid h-7 w-7 place-items-center rounded-md bg-cta text-on-dark shadow-sm">
      <span className="font-heading text-sm font-bold leading-none">m</span>
    </div>
  );
}
