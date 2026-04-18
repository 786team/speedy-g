import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-mono text-sm">
            speedy<span className="text-brand-accent">.g</span>
          </div>
          <div className="mt-1 text-xs text-ink-faint">
            © {new Date().getFullYear()} 786team. The AI operator for logistics.
          </div>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-muted">
          <Link href="#product" className="hover:text-ink">
            Product
          </Link>
          <Link href="#enterprise" className="hover:text-ink">
            Enterprise
          </Link>
          <Link href="#security" className="hover:text-ink">
            Security
          </Link>
          <Link href="#careers" className="hover:text-ink">
            Careers
          </Link>
          <Link href="#contact" className="hover:text-ink">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
