import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm light surfaces
        bg: {
          DEFAULT: "#F7F2E8",
          section: "#EFE5D8",
          card: "#FFF9F2",
        },
        // Text on warm surfaces
        ink: {
          DEFAULT: "#1E1A17",
          muted: "#5C524B",
          faint: "#7A6F67",
        },
        // CTA / brand orange
        cta: {
          DEFAULT: "#C96A3D",
          hover: "#A95531",
        },
        // Accent (AI / agent vocabulary)
        accent: {
          DEFAULT: "#5C435F",
        },
        // Status
        success: "#8DAA91",
        warn: "#D89A3D",
        critical: "#C85D52",
        // Borders
        line: {
          DEFAULT: "#D8CCBF",
          strong: "#C7B8A6",
        },
        // Dark console zone (Speedy G section)
        console: {
          bg: "#2A2320",
          card: "#342C29",
        },
        "on-dark": "#FFF8F1",
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(30,26,23,0.04), 0 8px 32px -12px rgba(30,26,23,0.08)",
        glow: "0 0 0 1px rgba(201,106,61,0.25), 0 20px 80px -10px rgba(201,106,61,0.25)",
        consoleGlow:
          "0 0 0 1px rgba(255,255,255,0.06), 0 40px 120px -20px rgba(0,0,0,0.6), 0 0 80px -20px rgba(141,170,145,0.15)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(201,106,61,0.10), transparent 60%)",
      },
      borderRadius: {
        xl2: "18px",
      },
    },
  },
  plugins: [],
};
export default config;
