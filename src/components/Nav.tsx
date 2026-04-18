import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-bg/60 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <LogoMark />
          <span className="font-mono text-sm tracking-tight">
            speedy<span className="text-brand-accent">.g</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-ink-muted md:flex">
          <Link href="#product" className="hover:text-ink">
            Product
          </Link>
          <Link href="#how" className="hover:text-ink">
            How it works
          </Link>
          <Link href="#enterprise" className="hover:text-ink">
            Enterprise
          </Link>
          <Link href="#pricing" className="hover:text-ink">
            Pricing
          </Link>
          <Link href="#docs" className="hover:text-ink">
            Docs
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#login"
            className="hidden h-9 items-center rounded-md px-3 text-sm text-ink-muted hover:text-ink sm:inline-flex"
          >
            Sign in
          </Link>
          <Link
            href="#demo"
            className="inline-flex h-9 items-center rounded-md bg-ink px-3 text-sm font-medium text-bg transition-colors hover:bg-white"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <div className="relative grid h-6 w-6 place-items-center rounded-md border border-line-strong bg-bg-elevated">
      <span className="font-mono text-[11px] leading-none text-brand-accent">›_</span>
    </div>
  );
}
