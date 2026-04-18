import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark-primary";

const VARIANT_CLASS: Record<Variant, string> = {
  primary:
    "bg-cta text-on-dark hover:bg-cta-hover",
  secondary:
    "border border-line-strong bg-bg-card text-ink hover:bg-bg-section",
  ghost:
    "text-ink hover:text-cta",
  "dark-primary":
    "bg-on-dark text-ink hover:bg-white",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  const cls = `inline-flex h-11 items-center rounded-md px-5 text-sm font-medium transition-colors ${VARIANT_CLASS[variant]} ${className}`;
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
