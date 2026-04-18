import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Speedy G — The AI operator for logistics.",
  description:
    "Speedy G plugs into your WMS, 3PL, carriers, and ERP — then runs the ops work you hate. Exceptions, routing, returns, EDI, support. One operator. One console. Every order on time.",
  openGraph: {
    title: "Speedy G — The AI operator for logistics.",
    description:
      "An AI operator for fulfillment and supply chain ops. Live console. Real work done.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Speedy G — The AI operator for logistics.",
    description:
      "An AI operator for fulfillment and supply chain ops. Live console. Real work done.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="bg-bg text-ink font-sans antialiased">{children}</body>
    </html>
  );
}
