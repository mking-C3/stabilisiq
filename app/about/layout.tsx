import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who I am — Matt at StabilisIQ",
  description:
    "I run StabilisIQ. I focus on process improvement and operational efficiency — but the part that matters is that I do the work.",
  openGraph: {
    title: "Who I am — Matt at StabilisIQ",
    description:
      "Operations partner. Builder. Operator of record at StabilisIQ.",
    type: "profile",
    url: "https://stabilisiq.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
