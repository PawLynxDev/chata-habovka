// Vrstva čítania obsahu pre verejné (server) stránky.
// Číta Blob pri každom requeste (no-store). Verejné stránky sú dynamické
// (force-dynamic v (public)/layout.tsx), takže zmeny z admina sa prejavia ihneď.
import "server-only";
import { SEED_CONTENT } from "./seed";
import { readContentRaw } from "./blob-content";
import type { SiteContent } from "./content-types";

/** Vráti aktuálny obsah webu (z Blob, alebo SEED_CONTENT ako fallback). */
export async function getContent(): Promise<SiteContent> {
  try {
    const stored = await readContentRaw();
    return stored ?? SEED_CONTENT;
  } catch {
    return SEED_CONTENT;
  }
}
