import type { Metadata } from "next";
import { SHARE_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  // absolute: the root title template would otherwise append the brand twice
  title: { absolute: "SMS Terms & Opt-In — StabilisIQ" },
  alternates: { canonical: "/sms" },
  description:
    "Terms, consent and opt-out details for text messages from StabilisIQ at (888) 913-2301.",
  openGraph: {
    images: [SHARE_IMAGE],
    title: "SMS Terms & Opt-In — StabilisIQ",
    description:
      "Terms, consent and opt-out details for text messages from StabilisIQ at (888) 913-2301.",
    type: "website",
    url: "https://stabilisiq.com/sms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SmsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
