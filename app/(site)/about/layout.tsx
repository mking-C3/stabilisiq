import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Matt King",
  alternates: { canonical: "/about" },
  description:
    "Matt King runs StabilisIQ. Process improvement and operational efficiency, done rather than recommended.",
  openGraph: {
    title: "About Matt King, StabilisIQ",
    description:
      "Matt King runs StabilisIQ. Process improvement and operational efficiency, done rather than recommended.",
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
