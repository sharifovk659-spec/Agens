import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        black: "#060504",
        dark: {
          DEFAULT: "#0d0b08",
          900: "#060504",
          800: "#0d0b08",
          700: "#0d0b08",
          600: "#141210",
        },
        gold: {
          DEFAULT: "#c89b5c",
          light: "#d4a96a",
        },
        beige: {
          DEFAULT: "#e7c99a",
          muted: "#8b7a66",
        },
        muted: "#8b7a66",
        background: "#060504",
        foreground: "#e7c99a",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 48px rgba(200, 155, 92, 0.14)",
        play: "0 0 30px rgba(200, 155, 92, 0.15)",
        card: "0 8px 32px rgba(0, 0, 0, 0.55)",
        premium:
          "0 20px 60px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(200, 155, 92, 0.04)",
        cta: "0 8px 32px rgba(200, 155, 92, 0.28)",
        fab: "0 0 24px rgba(200, 155, 92, 0.34)",
      },
      backgroundImage: {
        "cinematic-overlay":
          "linear-gradient(180deg, rgba(6,5,4,0.4) 0%, rgba(6,5,4,0.75) 50%, rgba(6,5,4,0.95) 100%)",
        "card-gradient":
          "linear-gradient(145deg, #0d0b08 0%, #0a0907 50%, #060504 100%)",
        "radial-glow":
          "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(200,155,92,0.14) 0%, transparent 70%)",
        "gold-line":
          "linear-gradient(90deg, transparent, #c89b5c, transparent)",
        "gold-gradient":
          "linear-gradient(135deg, #d4a96a, #c89b5c)",
        "cta-banner": "linear-gradient(135deg, #f0a030, #d97a18)",
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "play-pulse": "play-pulse 2.2s ease-in-out infinite",
        "fab-border": "fab-border 2.8s linear infinite",
        "fab-glow": "fab-glow 4.6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "play-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.06)" },
        },
        "fab-border": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fab-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
