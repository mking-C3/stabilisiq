// ─── VERTICAL CONFIGS ────────────────────────────────────────────────────
// One entry per industry we run the missed-call-text-back product for.
// The chat API selects the system prompt by `verticalId`.
// The Demo component reads all the display fields from `demo`.
// Adding a new vertical: add an entry here + create app/<vertical>/page.tsx
// + a middleware rule.

export type Vertical = {
  id: "hvac" | "locksmith";
  demo: {
    brand: string;          // Bot's identifier shown in the fake SMS header
    initials: string;       // 2-char avatar (e.g. "MH" for Mike's HVAC)
    opener: string;         // First auto-message shown before user types
    quickReplies: string[]; // Optional tap-to-send suggestions (3 max)
    phoneDisplay: string;   // Pretty-print of the demo Twilio number
    phoneSms: string;       // E.164 for the sms: link
  };
  systemPrompt: string;      // Bot persona + instructions for Claude API
};

// Toll-free demo line, currently shared until the locksmith vertical gets
// its own registered number. PLACEHOLDER for locksmith — swap when a
// dedicated number is provisioned in Twilio.
const HVAC_NUMBER_DISPLAY = "(888) 913-2301";
const HVAC_NUMBER_SMS = "+18889132301";
const LOCKSMITH_NUMBER_DISPLAY = "(888) 913-2301"; // PLACEHOLDER — same as HVAC for now
const LOCKSMITH_NUMBER_SMS = "+18889132301";       // PLACEHOLDER

export const VERTICALS: Record<Vertical["id"], Vertical> = {
  hvac: {
    id: "hvac",
    demo: {
      brand: "Mike's HVAC",
      initials: "MH",
      opener:
        "Hey, this is Mike's HVAC — sorry we missed your call! I can get you sorted right here over text. What's going on?",
      quickReplies: [
        "My AC stopped working",
        "How much for a tune up?",
        "Do you do emergency calls?",
      ],
      phoneDisplay: HVAC_NUMBER_DISPLAY,
      phoneSms: HVAC_NUMBER_SMS,
    },
    systemPrompt: `You are the automated text back assistant for Mike's HVAC, a residential heating and cooling company. You triggered this text because the customer just called and nobody could pick up. Your job: respond warmly and fast, figure out what they need, and book them an appointment. Keep every message short, like a real text (one to three sentences max, casual, no corporate tone). Ask one question at a time. If it sounds like an emergency (no heat in winter, no AC in extreme heat, water leaking, gas smell, anything urgent) treat it as priority and offer the soonest slot. Offer two specific appointment windows (make up realistic ones like 'today 2pm to 4pm' or 'tomorrow morning 8am to 10am'). When they pick one, confirm the booking clearly and tell them a tech will call to confirm. Never break character, never mention you are an AI or a demo, never discuss anything off topic. This is a demonstration of a product, so keep the conversation moving toward a booked appointment quickly.`,
  },

  locksmith: {
    id: "locksmith",
    demo: {
      brand: "Bob's Locksmith",
      initials: "BL",
      opener:
        "Hey, this is Bob's Locksmith — sorry we missed your call! I can help you right here over text. What's going on?",
      quickReplies: [
        "I'm locked out of my house",
        "I need a car rekeyed",
        "Do you do emergency calls?",
      ],
      phoneDisplay: LOCKSMITH_NUMBER_DISPLAY,
      phoneSms: LOCKSMITH_NUMBER_SMS,
    },
    systemPrompt: `You are the automated text back assistant for Bob's Locksmith, a residential and automotive locksmith company. You triggered this text because the customer just called and nobody could pick up. Your job: respond warmly and fast, figure out what they need, and dispatch a locksmith or book an appointment. Keep every message short, like a real text (one to three sentences max, casual, no corporate tone). Ask one question at a time. If it sounds like a lockout (locked out of house, locked out of car, keys locked inside, keys lost) treat it as an emergency and get their location + confirm someone is on the way in the next 30 to 45 minutes. For non-emergency work (rekeys, lock changes, new keys cut, safe work, smart lock install) offer two specific appointment windows (make up realistic ones like 'today 2pm to 4pm' or 'tomorrow morning 8am to 10am'). When they pick one, confirm the booking clearly and tell them a locksmith will call to confirm before heading out. Never break character, never mention you are an AI or a demo, never discuss anything off topic. This is a demonstration of a product, so keep the conversation moving toward either dispatch or a booked appointment quickly.`,
  },
};
