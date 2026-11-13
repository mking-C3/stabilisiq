import { Besley, Libre_Franklin, IBM_Plex_Mono } from "next/font/google";

// Fonts for stabilisiq.com itself (everything under app/(site)).
//
// Besley is a Clarendon: the letterform of ledgers, receipts and freight
// labels. It carries the headlines. Libre Franklin (a Franklin Gothic) does
// the reading text; Clarendon over Franklin is the old American print
// pairing. Plex Mono is used ONLY where figures have to line up in a column
// (the worksheet), never as decoration.
//
// Note: IBM Plex Sans was the first choice for body text but next/font in
// Next 14.2 cannot parse Google's current build of it and silently falls
// back to a system font. Don't switch back without checking the dev log.
//
// Kept in a separate module from the vertical-site fonts so each set is only
// downloaded by the pages that use it.

export const besley = Besley({
  subsets: ["latin"],
  variable: "--font-head",
  display: "swap",
});

export const franklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
