import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0E1420",
        "bg-raised": "#141C2B",
        "bg-card": "#101825",
        line: "#263145",
        ink: "#E7E9EE",
        "ink-dim": "#8B96A8",
        "ink-faint": "#5A6579",
        teal: "#5EEAD4",
        amber: "#F0B84F",
        danger: "#F0736A",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-inter)", "-apple-system", "sans-serif"],
      },
      keyframes: {
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(94,234,212,0.5)" },
          "70%": { boxShadow: "0 0 0 6px rgba(94,234,212,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(94,234,212,0)" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
        "fade-in": {
          to: { opacity: "1" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2s infinite",
        blink: "blink 1s step-end infinite",
        "fade-in": "fade-in 0.3s forwards",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
  plugins: [],
};

export default config;
