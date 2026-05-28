import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Decisive accent: warm industrial orange. Picked once, used everywhere.
        accent: {
          DEFAULT: "#F25C1F",
          dark: "#C8410C",
          light: "#FF7A3D",
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
          "var(--font-body)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
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
