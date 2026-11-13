import type { Metadata } from "next";
import { besley, franklin, plexMono } from "@/lib/fonts-site";
import { SHARE_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  openGraph: { siteName: "StabilisIQ", images: [SHARE_IMAGE] },
  twitter: { card: "summary_large_image", images: [SHARE_IMAGE.url] },
};

// Shell for stabilisiq.com. Sets the typefaces and the paper background;
// every page underneath renders its own header and footer.

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${besley.variable} ${franklin.variable} ${plexMono.variable} font-sans min-h-screen bg-sheet text-ink-900`}
    >
      {children}
    </div>
  );
}
