// Serverová časť autentifikácie (bcrypt overenie hesla, čítanie cookie session).
import "server-only";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { SESSION_COOKIE, verifySessionToken } from "./auth-edge";

export { SESSION_COOKIE, createSessionToken } from "./auth-edge";

/** Overí heslo majiteľa proti ADMIN_PASSWORD_HASH (bcrypt). */
export async function verifyPassword(password: string): Promise<boolean> {
  const hash = process.env.ADMIN_PASSWORD_HASH;
  if (!hash || !password) return false;
  try {
    return await bcrypt.compare(password, hash);
  } catch {
    return false;
  }
}

/** Zistí, či má aktuálna požiadavka platnú session cookie. */
export async function isAuthenticated(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  return verifySessionToken(token);
}

/** Vráti 401 response ak nie je prihlásený, inak null (obranná kontrola v route handleroch). */
export async function requireAuth(): Promise<NextResponse | null> {
  if (await isAuthenticated()) return null;
  return NextResponse.json({ error: "Neautorizované" }, { status: 401 });
}
