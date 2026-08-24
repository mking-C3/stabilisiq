import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Never miss a lockout again — Locksmith Missed Call Text Back",
  description:
    "Every missed call gets a text back in 5 seconds, qualified, and dispatched or booked into your calendar — 24/7. Built for locksmiths.",
  openGraph: {
    title: "Never miss a lockout again — Locksmith Missed Call Text Back",
    description:
      "Every missed call gets a text back in 5 seconds, qualified, and dispatched — 24/7.",
    type: "website",
    url: "https://locksmith.stabilisiq.com",
  },
};

export const viewport = {
  themeColor: "#0B0D10",
};

export default function LocksmithLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
