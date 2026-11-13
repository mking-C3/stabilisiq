import { Inter, JetBrains_Mono } from "next/font/google";

// Fonts for the vertical product sites (hvac.*, locksmith.*). These were
// previously loaded in the root layout; they live here so the main site
// doesn't download them.

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  axes: ["opsz"],
});

export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
