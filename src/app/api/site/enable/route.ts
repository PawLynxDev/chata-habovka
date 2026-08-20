import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { readContentRaw, writeContent } from "@/lib/content-store";
import { SEED_CONTENT } from "@/lib/seed";

export const runtime = "nodejs";

/** Znova zapne web (siteEnabled=true). */
export async function POST() {
  const unauth = await requireAuth();
  if (unauth) return unauth;

  const current = (await readContentRaw()) ?? SEED_CONTENT;
  const saved = await writeContent({ ...current, siteEnabled: true });
  return NextResponse.json({ ok: true, siteEnabled: saved.siteEnabled });
}
