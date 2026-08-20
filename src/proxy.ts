import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth-edge";

// Next.js 16 "proxy" (predtým middleware): chráni /admin a write API.
export async function proxy(req: NextRequest) {
  const token = req.cookies.get(SESSION_COOKIE)?.value;
  const authed = await verifySessionToken(token);

  if (authed) return NextResponse.next();

  const { pathname } = req.nextUrl;

  // Write API → 401 JSON (auth routy /api/auth/* nie sú v matcheri, ostávajú dostupné).
  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Neautorizované" }, { status: 401 });
  }

  // Admin stránky → presmerovanie na /login.
  const url = req.nextUrl.clone();
  url.pathname = "/login";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/content/:path*",
    "/api/site/:path*",
    "/api/upload/:path*",
  ],
};
