// Constants shared across stabilisiq.com pages.

export const CALENDLY_URL = "https://calendly.com/matt-stabilisiq/30min";
export const EMAIL = "matt@stabilisiq.com";

// sessionStorage key the calculator uses to hand its worksheet to the
// contact form. Session-scoped and same-origin only: nothing leaves the
// browser unless the visitor then presses Send on the form.
export const WORKSHEET_KEY = "siq.worksheet";

// One button style for the whole main site: a square black tab that turns
// highlighter-yellow on hover. No pills, no arrows-in-circles.
export const BUTTON =
  "inline-flex items-center justify-center rounded-[3px] border-2 border-ink-900 bg-ink-900 px-5 py-3 text-[16px] font-medium text-white transition-colors hover:bg-hl hover:text-ink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-900";

export const BUTTON_QUIET =
  "inline-flex items-center justify-center rounded-[3px] border-2 border-ink-900 bg-transparent px-5 py-3 text-[16px] font-medium text-ink-900 transition-colors hover:bg-ink-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-900";

// Inline text link.
export const LINK =
  "underline decoration-ink-900/40 decoration-1 underline-offset-[5px] transition-colors hover:decoration-ink-900 hover:bg-hl";

// Social share image (public/share.png, 1200x630). Listed explicitly in each
// page's openGraph block: a page that defines its own openGraph does NOT
// inherit an image from a parent segment, so the file convention
// (opengraph-image.png) silently dropped it on half the pages.
export const SHARE_IMAGE = {
  url: "/share.png",
  width: 1200,
  height: 630,
  alt: "StabilisIQ. Something in your operation is leaking money. Work out what it costs, then talk to the person who fixes it.",
};
