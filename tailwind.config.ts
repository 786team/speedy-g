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
        bg: {
          DEFAULT: "#07080B",
          elevated: "#0C0E13",
          subtle: "#12151C",
        },
        line: {
          DEFAULT: "rgba(255,255,255,0.06)",
          strong: "rgba(255,255,255,0.12)",
        },
        ink: {
          DEFAULT: "#E8ECF1",
          muted: "#9BA3B2",
          faint: "#6B7384",
        },
        brand: {
          DEFAULT: "#7C5CFF",
          accent: "#19E3B1",
          warn: "#F2B64C",
          danger: "#FF5C7A",
        },
        term: {
          bg: "#0A0C10",
          header: "#11141A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(124,92,255,0.35), 0 20px 80px -10px rgba(124,92,255,0.35)",
        consoleGlow:
          "0 0 0 1px rgba(255,255,255,0.06), 0 40px 120px -20px rgba(0,0,0,0.6), 0 0 80px -20px rgba(25,227,177,0.15)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(124,92,255,0.18), transparent 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
