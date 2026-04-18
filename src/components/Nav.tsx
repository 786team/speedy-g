import Image from "next/image";
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
        <Link href="/" className="flex items-center gap-3" aria-label="myali home">
          <Image
            src="/myali-logo.jpeg"
            alt="myali"
            width={420}
            height={224}
            priority
            className="h-7 w-auto mix-blend-multiply md:h-8"
          />
          <span
            className="hidden items-center gap-1 rounded-full border border-cta/30 bg-cta/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-cta sm:inline-flex"
            aria-label="Live"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cta shadow-[0_0_6px_currentColor]" />
            live
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

