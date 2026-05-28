# HVAC Missed Call Text Back — Marketing Site

Single-page conversion site for the HVAC missed-call-text-back product.
Lives at **hvac.stabilisiq.com** and acts as the landing target for the
YouTube demo videos.

The centerpiece is a live SMS demo backed by Claude that lets the visitor
play the role of a homeowner whose AC just died.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- One serverless API route (`/app/api/chat/route.ts`) that calls the
  Anthropic Messages API

## Run locally

```bash
npm install
cp .env.example .env.local      # then edit .env.local
npm run dev
```

Visit http://localhost:3000.

### Required env var
- `ANTHROPIC_API_KEY` — your Anthropic API key. Get one at
  https://console.anthropic.com.

## Placeholders to replace before going live

Search the codebase for `PLACEHOLDER` — these are the only values you need
to swap:

| Constant | File | What it is |
| --- | --- | --- |
| `TWILIO_DEMO_NUMBER_DISPLAY` | `components/Demo.tsx`, `app/page.tsx` | The pretty-printed demo phone number, e.g. `(555) 123-4567` |
| `TWILIO_DEMO_NUMBER_SMS` | `components/Demo.tsx`, `app/page.tsx` | The same number in `sms:` link format, e.g. `+15551234567` |
| `CALENDLY_URL` | `app/page.tsx` | The Calendly booking link for the final CTA button |

Update the model in `app/api/chat/route.ts` (`MODEL` constant) only if you
want to switch off the default.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, **New Project → Import** the repo. Framework auto-detects as
   Next.js.
3. Under **Environment Variables**, add:
   - `ANTHROPIC_API_KEY` = your key (for Production, Preview, and
     Development).
4. Deploy.

### Point hvac.stabilisiq.com at Vercel

1. In the Vercel project: **Settings → Domains → Add** →
   `hvac.stabilisiq.com`.
2. Vercel will tell you to add one of:
   - **CNAME** record: `hvac` → `cname.vercel-dns.com` (recommended), **or**
   - **A record**: `hvac` → `76.76.21.21`
3. In your DNS provider for `stabilisiq.com`, add that record. TTL of 300 is
   fine.
4. Wait for DNS to propagate (usually < 5 min). Vercel will auto-issue an
   SSL cert.

## Project layout

```
app/
  layout.tsx           Root layout, fonts, meta
  page.tsx             Marketing page (hero → demo → steps → CTA)
  globals.css          Tailwind + tiny global tweaks
  api/chat/route.ts    POST endpoint — wraps Anthropic Messages API
components/
  Demo.tsx             The interactive iMessage-style demo
```

## Notes

- Conversation state lives in the browser (`useState` in `Demo.tsx`).
  No database, no auth, no cookies.
- The API route has a tiny in-memory per-IP rate limit (20 msgs/min). It
  resets on cold starts — good enough for a demo, not for production
  scale.
- The system prompt for the demo bot is embedded in
  `app/api/chat/route.ts`. Tweak it there.
