import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Hostname-based routing.
//
// hvac.stabilisiq.com/*    →  /hvac/*    (served by app/hvac/page.tsx)
// www.stabilisiq.com/*     →  /*          (served by app/page.tsx)
// stabilisiq.com/*         →  /*
//
// Local dev:
//   hvac.localhost:3000   →  hits the HVAC site
//   localhost:3000        →  hits the main site
//
// The rewrite is invisible to the browser — visitors see clean URLs like
// https://hvac.stabilisiq.com/, not /hvac.

export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") || "").toLowerCase();
  const url = req.nextUrl.clone();

  const isHvac = host.startsWith("hvac.");
  const alreadyRewritten = url.pathname.startsWith("/hvac");

  if (isHvac && !alreadyRewritten) {
    url.pathname = url.pathname === "/" ? "/hvac" : `/hvac${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // If someone hits the apex domain at /hvac, leave it alone — direct access
  // to /hvac on www. is also fine, makes for an easy preview link.

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Run on everything EXCEPT api routes, static assets, Next internals.
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
