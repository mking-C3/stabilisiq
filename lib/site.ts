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
