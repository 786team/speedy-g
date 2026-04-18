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
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex h-11 items-center rounded-md px-5 text-sm font-medium transition-colors ${VARIANT_CLASS[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
