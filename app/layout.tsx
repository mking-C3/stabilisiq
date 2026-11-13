import type { Metadata } from "next";
import "./globals.css";

// Universal root. It only owns <html>/<body> and the fallback metadata.
// Fonts and page chrome are set one level down, because this app serves
// three differently-styled sites:
//   app/(site)/*      stabilisiq.com          (lib/fonts-site.ts)
//   app/hvac/*        hvac.stabilisiq.com     (lib/fonts-vertical.ts)
//   app/locksmith/*   locksmith.stabilisiq.com

export const metadata: Metadata = {
  metadataBase: new URL("https://stabilisiq.com"),
  title: {
    default: "StabilisIQ: find the leak in your operation and fix it",
    template: "%s — StabilisIQ",
  },
  description:
    "Missed calls, slow quotes, work done twice, jobs that never get billed. StabilisIQ fixes the leak and builds the automation that keeps it fixed. Work out what yours costs.",
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
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
