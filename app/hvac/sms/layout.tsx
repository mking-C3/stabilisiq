import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMS Terms & Opt-In — Mike's HVAC",
  description:
    "Text messaging terms and consent for the (888) 913-2301 auto text-back service operated by StabilisIQ LLC.",
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
