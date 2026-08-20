import { NextRequest, NextResponse } from "next/server";
import { requireAuth, verifyPassword } from "@/lib/auth";
import { readContentRaw, writeContent } from "@/lib/content-store";
import { SEED_CONTENT } from "@/lib/seed";

export const runtime = "nodejs";

export const DISABLE_CONFIRM_PHRASE = "VYPNÚŤ";

/** Vypne web (siteEnabled=false). Vyžaduje opätovné zadanie hesla a potvrdzovaciu frázu. */
export async function POST(req: NextRequest) {
  const unauth = await requireAuth();
  if (unauth) return unauth;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Neplatný JSON" }, { status: 400 });
  }
  const password = (body as { password?: unknown })?.password;
  const confirmText = (body as { confirmText?: unknown })?.confirmText;

  if (typeof password !== "string" || !(await verifyPassword(password))) {
    return NextResponse.json({ error: "Nesprávne heslo" }, { status: 401 });
  }
  if (confirmText !== DISABLE_CONFIRM_PHRASE) {
    return NextResponse.json(
      { error: `Pre potvrdenie napíšte presne: ${DISABLE_CONFIRM_PHRASE}` },
      { status: 400 }
    );
  }

  const current = (await readContentRaw()) ?? SEED_CONTENT;
  const saved = await writeContent({ ...current, siteEnabled: false });
  return NextResponse.json({ ok: true, siteEnabled: saved.siteEnabled });
}
