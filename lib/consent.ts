// ─── SMS CONSENT — SINGLE SOURCE OF TRUTH ────────────────────────────────
// This exact string is what the user sees next to the opt-in checkbox AND
// what gets written to the sms_optins record for every submission. Keeping
// one constant means the stored proof can never drift from what was shown.
//
// Required elements for CTIA / carrier review, all present below:
//   1. Brand name .................. "StabilisIQ"
//   2. Message frequency ........... "Message frequency varies."
//   3. Pricing disclosure .......... "Message and data rates may apply."
//   4. HELP and STOP instructions .. "Reply HELP for help or STOP to opt out."
//   5. Privacy Policy + Terms links  rendered as <a> to /privacy and /terms
//
// If this text changes, older records keep the wording that was actually
// shown at their submission time — that is the point of storing it per row.
// Do not edit casually; it is quoted in the Twilio toll-free registration.

export const SMS_CONSENT_TEXT =
  "By checking this box, I agree to receive text messages from StabilisIQ at " +
  "the phone number provided, including appointment updates and replies to my " +
  "inquiry. Message frequency varies. Message and data rates may apply. Reply " +
  "HELP for help or STOP to opt out. See our Privacy Policy and Terms.";

// Version tag stored alongside each record so you can group submissions by
// which wording they saw. Bump when SMS_CONSENT_TEXT materially changes.
export const SMS_CONSENT_VERSION = "2026-12-02.v1";
