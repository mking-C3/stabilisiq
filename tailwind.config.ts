import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ─── SHARED ────────────────────────────────────────────────────
        // Off-white page background — more confident than pure white,
        // pairs well with the dark hero blocks on the main site.
        paper: "#F7F5F1",
        // ─── HVAC ACCENT (existing, do not change) ─────────────────────
        // Warm industrial orange. Used across hvac.stabilisiq.com.
        accent: {
          DEFAULT: "#F25C1F",
          dark: "#C8410C",
          light: "#FF7A3D",
        },
        // ─── STABILISIQ MAIN-SITE ACCENTS ──────────────────────────────
        // Cool operator blue: primary action color (buttons, "Live" badges,
        // dot bullets on dots that demand attention).
        siq: {
          DEFAULT: "#1F4DBA",
          dark: "#163B92",
          light: "#3D6CD9",
          tint: "#E8EDF9",
        },
        // Warm dark bronze: secondary accent for editorial detail —
        // section kickers, italic emphasis, the IQ wordmark, the playbook
        // badge, and any place we want warmth against the cool blue.
        bronze: {
          DEFAULT: "#B5882D",   // primary bronze, readable on dark
          dark: "#8C6822",       // deeper for hover/press
          light: "#D2A547",      // gleam, for highlights and italics
          glow: "#E8BF6A",       // brightest, for small decorative marks
        },
        ink: {
          DEFAULT: "#0B0D10",
          900: "#0B0D10",
          800: "#15181C",
          700: "#1F242A",
          600: "#2A3038",
          500: "#404853",
          400: "#6B7480",
          300: "#9AA3AE",
          200: "#D4D9DF",
          100: "#EAEDF1",
          50: "#F5F7F9",
        },
        // Reserved for the missed-call pain visual ONLY.
        alarm: "#E11D2A",
        // iMessage-style blue for the bot's bubbles in the demo.
        imsg: "#0B84FE",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "var(--font-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
        "blink": "blink 1.2s ease-in-out infinite",
        "bubble-in": "bubbleIn 0.25s cubic-bezier(0.18, 1.2, 0.4, 1) forwards",
        "ring": "ringPulse 1.4s ease-out infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "1" },
        },
        bubbleIn: {
          "0%": { opacity: "0", transform: "translateY(6px) scale(0.96)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        ringPulse: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
