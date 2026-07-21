// Edge-kompatibilná časť autentifikácie (len jose, žiadny bcrypt ani next/headers).
// Používa sa v middleware.ts (Edge runtime) aj na serveri.
import { SignJWT, jwtVerify } from "jose";

export const SESSION_COOKIE = "chata_session";
const ALG = "HS256";

function getSecret(): Uint8Array {
  const s = process.env.AUTH_SECRET;
  if (!s) throw new Error("Chýba env premenná AUTH_SECRET");
  return new TextEncoder().encode(s);
}

/** Vytvorí podpísaný session JWT (platnosť 7 dní). */
export async function createSessionToken(): Promise<string> {
  return new SignJWT({ role: "owner" })
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getSecret());
}

/** Overí platnosť session tokenu. */
export async function verifySessionToken(
  token: string | undefined | null
): Promise<boolean> {
  if (!token) return false;
  try {
    await jwtVerify(token, getSecret());
    return true;
  } catch {
    return false;
  }
}
