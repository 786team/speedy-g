import type { Metadata } from "next";
import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ChatBubble from "@/components/ChatBubble";

const heading = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "myali.ai — The Autonomous Disposition Engine for Reverse Logistics",
  description:
    "myali.ai orchestrates specialized AI agents to identify, value, list, message, and move inventory from a single visual input. Stop letting returns destroy your margin.",
  openGraph: {
    title:
      "myali.ai — The Autonomous Disposition Engine for Reverse Logistics",
    description:
      "Autonomous disposition and compliance workflows for enterprise reverse logistics. One photo in. Structured recovery workflow out.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "myali.ai — The Autonomous Disposition Engine for Reverse Logistics",
    description:
      "Autonomous disposition and compliance workflows for enterprise reverse logistics. One photo in. Structured recovery workflow out.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="bg-bg text-ink font-sans antialiased">
        {children}
        <ChatBubble />
      </body>
    </html>
  );
}
