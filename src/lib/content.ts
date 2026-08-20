// Vrstva čítania obsahu pre verejné (server) stránky.
// Číta R2 pri každom requeste; cache() z Reactu deduplikuje čítania v rámci
// jedného requestu (metadata + layout + stránka = 1 čítanie z R2).
// Verejné stránky sú dynamické (force-dynamic v (public)/layout.tsx),
// takže zmeny z admina sa prejavia ihneď.
import "server-only";
import { cache } from "react";
import { SEED_CONTENT } from "./seed";
import { readContentRaw } from "./content-store";
import type { SiteContent } from "./content-types";

/** Vráti aktuálny obsah webu (z R2, alebo SEED_CONTENT ako fallback). */
export const getContent = cache(async (): Promise<SiteContent> => {
  try {
    return (await readContentRaw()) ?? SEED_CONTENT;
  } catch {
    return SEED_CONTENT;
  }
});
