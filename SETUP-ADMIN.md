# Admin panel – návod na nastavenie

Web má teraz administráciu, cez ktorú majiteľ spravuje obsah bez programátora:

- **Prihlásenie:** nenápadný odkaz „Prihlásiť sa" v pätičke → `/login`
- **Administrácia:** `/admin` (po prihlásení)
  - **Fotky** – pridať / zmazať / zmeniť poradie (ťahaním) vo všetkých galériách
  - **Cenník** – ceny, sezóny, minimálne noci, doplatky
  - **Texty** – všetky popisy, vybavenie, atrakcie, kontakt
  - **Vypnutie webu** – stmaví web na „Stránka nie je k dispozícii" (dá sa zapnúť späť)

Obsah sa ukladá do **Vercel Blob** (vrátane nahraných fotiek). Pôvodné fotky v `/public/images` zostávajú a slúžia ako východiskový stav.

---

## 1. Jednorazové nastavenie na Verceli

### a) Vytvoriť Blob úložisko

Vercel → projekt → **Storage** → **Create Database** → **Blob** → priraď k projektu.
Tým sa automaticky pridá env premenná `BLOB_READ_WRITE_TOKEN`.

### b) Vygenerovať heslo a tajný kľúč

Lokálne v priečinku projektu spusti (nahraď si vlastné heslo):

```bash
npm run hash "MojeTajneHeslo123"
```

Vypíše dve premenné, napr.:

```
ADMIN_PASSWORD_HASH=$2b$12$...
AUTH_SECRET=Xk9....=
```

### c) Nastaviť env premenné

Vercel → projekt → **Settings** → **Environment Variables** → pridaj (pre Production, Preview aj Development):

| Premenná | Hodnota |
|---|---|
| `BLOB_READ_WRITE_TOKEN` | (pridané automaticky v kroku a) |
| `ADMIN_PASSWORD_HASH` | hash z kroku b |
| `AUTH_SECRET` | secret z kroku b |

### d) Nasadiť (redeploy)

Vercel → **Deployments** → posledný deployment → **Redeploy** (aby sa načítali nové premenné).

### e) (Voliteľné) Naplniť počiatočný obsah

Web funguje aj bez tohto kroku (použije východiskový obsah). Ak chceš mať obsah hneď v úložisku:

```bash
vercel env pull .env.local   # stiahne BLOB_READ_WRITE_TOKEN lokálne
npm run seed                 # nahrá počiatočný content.json do Blob
```

---

## 2. Ako sa to používa

1. Choď na `https://tvojadomena.sk/login` (alebo klikni „Prihlásiť sa" v pätičke).
2. Zadaj heslo (to, z ktorého si generoval hash).
3. V `/admin` upravuj fotky, cenník a texty. Po úpravách klikni **Uložiť zmeny**.
4. Zmeny sa na webe prejavia ihneď.

**Vypnutie webu:** záložka „Vypnutie webu" → zadaj heslo a napíš `VYPNÚŤ` → web sa stmaví. Znova zapneš tlačidlom „Znova zapnúť web".

---

## 3. Lokálny vývoj

```bash
vercel env pull .env.local   # stiahne všetky env premenné lokálne
npm run dev
```

Bez `.env.local` (teda bez premenných) web beží s východiskovým obsahom, ale prihlásenie a ukladanie nefungujú.

---

## 4. Poznámky

- **Zmena hesla:** znova spusti `npm run hash "noveHeslo"` a aktualizuj `ADMIN_PASSWORD_HASH` vo Verceli (potom redeploy).
- **Reset obsahu na pôvodný:** `npm run seed` prepíše `content.json` východiskovými hodnotami.
- Bezpečnosť: heslo je uložené len ako bcrypt hash; prihlásenie drží podpísaná cookie (7 dní). `/admin` a ukladacie API sú chránené.
