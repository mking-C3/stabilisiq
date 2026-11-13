import type { Metadata } from "next";
import { SHARE_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Matt King",
  alternates: { canonical: "/about" },
  description:
    "Matt King runs StabilisIQ. Process improvement and operational efficiency, done rather than recommended.",
  openGraph: {
    images: [SHARE_IMAGE],
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
