import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Never miss a job again — HVAC Missed Call Text Back",
  description:
    "Every missed call gets a text back in 5 seconds, qualified, and booked into your calendar — 24/7. Built for HVAC contractors.",
  openGraph: {
    title: "Never miss a job again — HVAC Missed Call Text Back",
    description:
      "Every missed call gets a text back in 5 seconds, qualified, and booked into your calendar — 24/7.",
    type: "website",
    url: "https://hvac.stabilisiq.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0B0D10",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-ink-900">
        {children}
      </body>
    </html>
  );
}
