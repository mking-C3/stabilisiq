import type { Metadata } from "next";

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
  themeColor: "#0B0D10",
};

export default function HvacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
