import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Geometric, neutral, operator-feel. Variable weights give us range across
// the whole site — Display weights at hero scale, regular for body, mono
// for technical labels and numerals.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  axes: ["opsz"],
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Universal root. Per-site metadata lives in nested layouts (app/hvac/layout.tsx, etc).
// The actual <title> and OG tags get set by whichever sub-layout matches the route.

export const metadata: Metadata = {
  metadataBase: new URL("https://stabilisiq.com"),
  title: {
    default: "StabilisIQ — Fix what's broken. Automate what shouldn't break again.",
    template: "%s — StabilisIQ",
  },
  description:
    "We fix broken operations and build the automations that keep them fixed. Managed engagements when you need a fixer; productized builds when you want it to stick.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="font-sans bg-ink-900 text-paper">{children}</body>
    </html>
  );
}
