import { NextRequest, NextResponse } from "next/server";
import {
  deleteOrphanedImages,
  readContentRaw,
  writeContent,
} from "@/lib/blob-content";
import { SEED_CONTENT } from "@/lib/seed";
import { siteContentSchema } from "@/lib/content-schema";
import { requireAuth } from "@/lib/auth";

export const runtime = "nodejs";

/** Načíta aktuálny obsah pre admin editor (fallback na SEED_CONTENT). Chránené. */
export async function GET() {
  const unauth = await requireAuth();
  if (unauth) return unauth;

  const stored = await readContentRaw();
  return NextResponse.json(stored ?? SEED_CONTENT);
}

/** Uloží celý obsah. Validuje cez zod, zapíše do Blob a revaliduje verejný web. Chránené. */
export async function PUT(req: NextRequest) {
  const unauth = await requireAuth();
  if (unauth) return unauth;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Neplatný JSON" }, { status: 400 });
  }

  const parsed = siteContentSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Neplatný obsah", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  try {
    const old = await readContentRaw();
    const saved = await writeContent(parsed.data);
    if (old) {
      // Zmaž fotky, ktoré boli odstránené z galérií (best-effort, neblokuje odpoveď).
      await deleteOrphanedImages(old, saved);
    }
    return NextResponse.json(saved);
  } catch (e) {
    return NextResponse.json(
      { error: "Uloženie zlyhalo", detail: String(e) },
      { status: 500 }
    );
  }
}
