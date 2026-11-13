import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Hostname-based routing.
//
// hvac.stabilisiq.com/*        →  /hvac/*        (app/hvac/page.tsx)
// locksmith.stabilisiq.com/*   →  /locksmith/*   (app/locksmith/page.tsx)
// www.stabilisiq.com/*         →  /*              (app/page.tsx)
// stabilisiq.com/*             →  /*
//
// Adding a new vertical: register a new prefix in VERTICAL_HOSTS, create
// app/<vertical>/page.tsx + layout.tsx, and add the domain in Vercel + DNS.
//
// Local dev:
//   hvac.localhost:3000        →  hits the HVAC site
//   locksmith.localhost:3000   →  hits the locksmith site
//   localhost:3000             →  hits the main site
//
// The rewrite is invisible to the browser — visitors see clean URLs like
// https://hvac.stabilisiq.com/, not /hvac.

// hostname prefix → app-router path segment
const VERTICAL_HOSTS: Record<string, string> = {
  "hvac.": "/hvac",
  "locksmith.": "/locksmith",
};

function verticalPathFor(host: string): string | null {
  for (const prefix in VERTICAL_HOSTS) {
    if (host.startsWith(prefix)) return VERTICAL_HOSTS[prefix];
  }
  return null;
}

export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") || "").toLowerCase();
  const url = req.nextUrl.clone();
  const verticalPath = verticalPathFor(host);

  // www.stabilisiq.com served a full duplicate of the site. Send it to the
  // bare domain so there is one address for people and search engines.
  if (host === "www.stabilisiq.com") {
    return NextResponse.redirect(
      `https://stabilisiq.com${url.pathname}${url.search}`,
      308,
    );
  }

  // Legal / compliance pages live on the operator's main site
  // (stabilisiq.com/sms). If someone hits <vertical>.stabilisiq.com/sms —
  // e.g. a Twilio reviewer following an older link — permanent-redirect
  // them to the canonical URL rather than 404.
  if (verticalPath && url.pathname === "/sms") {
    return NextResponse.redirect("https://stabilisiq.com/sms", 301);
  }

  // Files at the site root (icon.svg, apple-icon.png, share.png, images in
  // /public) are shared by every hostname. Rewriting them under /hvac or
  // /locksmith made the favicon 404 on the vertical sites.
  const isRootFile = /\.[a-z0-9]+$/i.test(url.pathname);

  if (verticalPath && !isRootFile) {
    const alreadyRewritten = url.pathname.startsWith(verticalPath);
    if (!alreadyRewritten) {
      url.pathname =
        url.pathname === "/" ? verticalPath : `${verticalPath}${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // If someone hits the apex domain at /hvac or /locksmith directly, leave
  // it alone — makes for an easy preview link on stabilisiq.vercel.app.

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Run on everything EXCEPT api routes, static assets, Next internals.
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
