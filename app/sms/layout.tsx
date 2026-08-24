import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMS Terms & Opt-In — StabilisIQ",
  description:
    "Text messaging terms and consent for the (888) 913-2301 auto text-back service operated by StabilisIQ LLC.",
  openGraph: {
    title: "SMS Terms & Opt-In — StabilisIQ",
    description:
      "Text messaging terms and consent for the (888) 913-2301 auto text-back service.",
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
