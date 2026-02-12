# Build a Website for "Chata za Studenym potokom"

## Project Overview

Create a modern, visually stunning website for a premium vacation cabin called **"Chata za Studenym potokom"** (Cottage by the Cold Stream), located in Habovka village, Orava region, Slovakia. The website should feel warm, inviting, and luxurious — blending the cozy mountain cabin atmosphere with modern design. The site is in **Slovak only** and must be mobile-first responsive.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React (`lucide-react`) — exclusively, no emoji, no FontAwesome
- **Language:** TypeScript
- **Images:** Placeholder components with descriptive `data-placeholder` attributes (real `.webp` images will be swapped in later)
- **Map:** Embedded Google Maps or OpenStreetMap iframe
- **Animations:** CSS transitions + Intersection Observer for scroll-reveal (keep it lightweight, no heavy animation libraries)
- **Fonts:** Google Fonts — elegant serif for headings (e.g., Playfair Display, Cormorant Garant) + clean sans-serif for body (e.g., DM Sans, Source Sans 3). Choose a pairing that feels warm and premium, not corporate.

---

## Critical Design Rules

1. **No hard divisions between sections.** Sections within each page must flow naturally into each other — use gradual background color transitions, overlapping elements, soft gradient fades, or organic shapes (SVG waves, curves, diagonal cuts). No abrupt color blocks, no harsh horizontal lines or borders.

2. **No emoji anywhere** — not in text, headings, buttons, or decorative elements. Use Lucide icons or custom SVG graphics instead.

3. **Image placeholders:** Create a reusable `<ImagePlaceholder>` component that renders a styled container with a label. Each placeholder must have a descriptive name using the pattern: `[section]-[subject]-[number]`.

   Example usage:

   ```tsx
   <ImagePlaceholder
     name="hero-exterior-1"
     alt="Chata za Studenym potokom - exterier"
     className="..."
   />
   ```

   The component should render a neutral-colored box with the placeholder name visible, sized to fit its container, so images can be easily swapped in later.

4. **Design direction:** Scandinavian lodge meets modern web — clean lines, generous whitespace, natural color tones, large immersive photography areas, soft shadows for cards. Warm and organic, not cold and corporate.

5. **Consistent navigation & layout:** Every page shares the same navigation bar and footer. Navigation should highlight the active page. Smooth page transitions are a bonus.

---

## Brand Identity & Tone

- **Name:** Chata za Studenym potokom
- **Tagline:** "Kde sa moderny komfort spaja s tichom prirody"
- **Tone:** Warm, welcoming, premium yet approachable. Not corporate — feels like an invitation from a friend who owns a beautiful cabin.
- **Color palette (nature-inspired):**
  - Primary: Deep forest green (`#2D5016` range)
  - Secondary: Warm wood brown (`#8B6914` range)
  - Background: Soft cream/warm white (`#FAF8F5` range)
  - Accent: Mountain blue (`#4A7C8F` range) or warm gold (`#C9A84C` range)
  - Dark sections: Deep charcoal/dark green for hero and moody sections
  - Fine-tune these values to create a cohesive, premium feel. The palette should evoke forest, wood, stone, and mountain sky.

---

## Available Photo Assets (69 WebP images)

These exist but are NOT to be hardcoded. Use placeholders only.

| Folder                   | Count | Content                                            |
| ------------------------ | ----- | -------------------------------------------------- |
| fotoOfHouse/             | 3     | Exterior shots of the cabin                        |
| livingroom/              | 8     | Living room with fireplace, couch, TV, dining area |
| kitchen/                 | 3     | Fully equipped kitchen                             |
| rooms/                   | 12    | 4 bedrooms (double beds, single beds, kids room)   |
| bathroom/                | 8     | 2 bathrooms (shower, bathtub) + separate toilet    |
| wellness/                | 3     | Sauna, hot tub area                                |
| viewOfTheTerraceandYard/ | 15    | Terrace, gazebo, grill, firepit, garden, yard      |
| spaceforchildre/         | 2     | Children's playroom, playground                    |
| activitiesNearby/        | 15    | Hiking, skiing, local attractions, nature          |

---

## Site Structure (5 pages)

```
/                → Landing page (hero, about, highlights, wellness teaser, reviews, CTA)
/interier        → Full interior gallery (living room, kitchen, bedrooms, bathrooms)
/wellness        → Dedicated wellness & exterior/garden page
/okolie          → Surroundings & activities (summer, winter, year-round)
/kontakt         → Practical info, phone, booking button, map
```

---

## Page 1: LANDING PAGE (`/`)

The homepage is the sales pitch — punchy, visual, conversion-focused. Visitors should scroll, get excited, and click "Rezervovat".

### 1.1 HERO

- Full-viewport hero with placeholder: `hero-exterior-1`
- Cabin name in elegant serif typography
- Tagline: "Kde sa moderny komfort spaja s tichom prirody"
- CTA button: **"Rezervovat pobyt"** → links to `https://www.megaubytovanie.sk/chata-za-studenym-potokom`
- Subtle scroll-down indicator (Lucide `ChevronDown` icon, animated bounce)
- Dark overlay on the image placeholder to ensure text readability

### 1.2 O CHATE (About the Cabin)

Welcoming description:

> Hľadáte miesto, kde sa moderný komfort prirodzene spája s tichom prírody? Chata za Studeným potokom sa nachádza v obci Habovka, v atraktívnom regióne Orava. Situovaná na okraji obce, v blízkosti lesa a 50 metrov od potoka — príjemná atmosféra pokoja a súkromia. Moderný dizajn, kvalitné vybavenie a vlastné wellness zázemie so saunou a vírivkou.

Key highlights displayed as icon cards (Lucide icons):

| Lucide Icon | Label                                     |
| ----------- | ----------------------------------------- |
| `BedDouble` | 11 lôžok + 2 prístelky                    |
| `DoorOpen`  | 4 spálne                                  |
| `Bath`      | 2 kúpeľne, 2 toalety                      |
| `Wifi`      | Vysokorýchlostné WiFi                     |
| `Flame`     | Sauna & Vírivka                           |
| `Heater`    | Krb                                       |
| `Snowflake` | Klimatizácia                              |
| `Car`       | 6 parkovacích miest (oplotené & strážené) |
| `Baby`      | Pre rodiny s deťmi                        |
| `Ticket`    | Rekreačné poukážky akceptované            |

### 1.3 WELLNESS TEASER

A visually striking preview section to drive visitors to the `/wellness` page.

- Large image placeholder: `wellness-hottub-1`
- Short text: _"Súkromná sauna, vírivka a vonkajšie sprchy — ideálne na oddych po dni strávenom v horách."_
- CTA button: **"Objavte náš wellness"** → links to `/wellness`
- This section should feel immersive — darker background, wide image, premium feel

### 1.4 INTERIER TEASER

A curated preview (3–4 best placeholders) driving visitors to the full gallery.

- Placeholders: `livingroom-overview-1`, `rooms-bedroom1-1`, `kitchen-overview-1`
- Short text: _"Moderný interiér s dôrazom na pohodlie. Štýlová obývačka s krbom, plne vybavená kuchyňa a 4 pohodlné spálne."_
- CTA button: **"Prezrieť interiér"** → links to `/interier`

### 1.5 HODNOTENIA (Reviews)

- Overall rating prominently displayed: **10/10 "Výnimočné"** — 7 recenzií
- Individual scores with visual progress bars:
  - Čistota: 10
  - Vybavenie: 10
  - Služby: 10
  - Personál: 10
  - Poloha: 9.9
  - Aktivity a atrakcie: 10
  - Pomer ceny a kvality: 10
- Link to full reviews on megaubytovanie.sk

### 1.6 PRIVACY SELLING POINT

Prominent callout/banner somewhere on the landing page (between sections or as a floating badge):

- Lucide `Lock` icon
- **"Len jedna skupina hostí naraz — plné súkromie!"**
- This is a key differentiator — make it impossible to miss

### 1.7 LANDING CTA (Bottom)

Final call-to-action before footer:

- **"Rezervujte si svoj pobyt"**
- Phone number: `+421 XXX XXX XXX` (clickable `tel:` link)
- Button: **"Rezervovať online"** → `https://www.megaubytovanie.sk/chata-za-studenym-potokom`

---

## Page 2: INTERIER (`/interier`)

Full interior photo gallery organized by room/area. This page is for visitors who want to explore every detail.

### Page header

- Heading: "Interiér chaty"
- Subheading: _"Každý detail navrhnutý pre váš komfort"_

### 2.1 Obývacia miestnosť (Living Room)

- Fireplace, comfortable couch, TV, spoločenské hry, jedáleň
- Placeholders: `livingroom-overview-1`, `livingroom-fireplace-1`, `livingroom-dining-1`, `livingroom-couch-1`, `livingroom-detail-1`, `livingroom-detail-2`, `livingroom-detail-3`, `livingroom-games-1`
- Short description of the space

### 2.2 Kuchyňa (Kitchen)

- Fully equipped: elektrický sporák, mikrovlnka, indukčný varič, rýchlovarná kanvica, chladnička s mrazničkou, umývačka riadu, toaster, kávovar
- Placeholders: `kitchen-overview-1`, `kitchen-appliances-1`, `kitchen-detail-1`
- List of key equipment

### 2.3 Spálne (Bedrooms)

Four rooms, each with its own sub-section:

**Spálňa 1:** 2-lôžková izba (dve single postele)

- Placeholder: `rooms-bedroom1-1`, `rooms-bedroom1-2`, `rooms-bedroom1-3`

**Spálňa 2:** 3-lôžková izba (manželská posteľ + single)

- Placeholder: `rooms-bedroom2-1`, `rooms-bedroom2-2`, `rooms-bedroom2-3`

**Spálňa 3:** 3-lôžková izba (manželská posteľ + single + rozkladacie kreslo)

- Placeholder: `rooms-bedroom3-1`, `rooms-bedroom3-2`, `rooms-bedroom3-3`

**Spálňa 4:** 3-lôžková izba (manželská posteľ + single + rozkladacie kreslo)

- Placeholder: `rooms-bedroom4-1`, `rooms-bedroom4-2`, `rooms-bedroom4-3`

Note: Každá izba má TV. Detská postieľka k dispozícii zdarma na vyžiadanie.

### 2.4 Kúpeľne (Bathrooms)

**Kúpeľňa 1 (poschodie):** sprchový kút, WC, umývadlo, fén, sušiak, uteráky

- Placeholders: `bathroom-shower-1`, `bathroom-shower-2`, `bathroom-shower-3`

**Kúpeľňa 2 (prízemie):** vaňa, sprcha, umývadlo, uteráky

- Placeholders: `bathroom-bathtub-1`, `bathroom-bathtub-2`, `bathroom-bathtub-3`

**Samostatné WC (prízemie):** umývadlo, WC, uteráky

- Placeholders: `bathroom-toilet-1`, `bathroom-toilet-2`

### Gallery features (applies to all sub-sections):

- Clicking any image opens a lightbox/modal for full-screen viewing
- Navigation between images in lightbox (prev/next arrows)
- Image counter (e.g., "3 / 8")
- Close button (Lucide `X` icon)

### Bottom CTA:

- **"Páči sa vám?"** + booking button → megaubytovanie.sk

---

## Page 3: WELLNESS & EXTERIER (`/wellness`)

This is the **biggest selling point** — give it premium, immersive treatment.

### Page header

- Heading: "Wellness & Záhrada"
- Subheading: _"Váš súkromný wellness priamo pri chate"_

### 3.1 WELLNESS & RELAX

Large, immersive photo layout. Consider a darker/moodier background section.

- Súkromná sauna
- Vírivka (hot tub)
- Dva vonkajšie sprchy
- Ochladzovacia kaďa
- Atmospheric quote: _"Ideálne na oddych po dni strávenom v horách"_
- Placeholders: `wellness-sauna-1`, `wellness-hottub-1`, `wellness-outdoor-1`

### 3.2 TERASA & ZÁHRADA (Terrace & Garden)

Transition smoothly from the wellness section into outdoor spaces.

- Terasa s vonkajším sedením
- Altánok (gazebo)
- Gril & ohnisko
- Kotlík na guláš
- Záhradná hojdačka
- Stolný futbal
- Placeholders: `exterior-terrace-1`, `exterior-terrace-2`, `exterior-gazebo-1`, `exterior-grill-1`, `exterior-garden-1`, `exterior-garden-2`, `exterior-yard-1`, `exterior-yard-2`

### 3.3 DETSKÝ RAJ (Kids' Area)

- Detské ihrisko s hojdačkou a preliezkami
- Detská herňa s hračkami
- Futbalové ihrisko v blízkosti
- Placeholders: `exterior-playground-1`, `exterior-playground-2`, `exterior-playroom-1`, `exterior-playroom-2`

### 3.4 PRAKTICKÉ

- Úložný priestor na bicykle a lyže
- 6 oplotených parkovacích miest

### Bottom CTA:

- Booking button → megaubytovanie.sk

---

## Page 4: OKOLIE & AKTIVITY (`/okolie`)

### Page header

- Heading: "Okolie & Aktivity"
- Subheading: _"Zážitky v každom ročnom období"_

### 4.1 LETO (Summer)

Use warm color tones. Flow naturally from the page header.

- Turistika v Roháčoch (Sivý vrch, Brestová, Baníkov)
- Cyklistika & horská cyklistika
- Múzeum oravskej dediny
- Tarzánia (lanový park)
- Podroháčske folklórne slávnosti
- Studený potok — otužovanie & kúpanie
- Jazda na koni, fitness, tenis, bazén
- Placeholders: `activities-hiking-1`, `activities-hiking-2`, `activities-cycling-1`, `activities-nature-1`, `activities-nature-2`, `activities-museum-1`, `activities-summer-1`

### 4.2 ZIMA (Winter)

Transition from warm summer tones to cool winter tones — no hard break.

- Lyžiarske strediská: Zuberec – Janovky, Roháče – Spálená, Brežovica, Nižná Uhliská
- Snowboarding
- Bežkárske trasy
- Placeholders: `activities-skiing-1`, `activities-skiing-2`, `activities-skiing-3`, `activities-winter-1`

### 4.3 CELOROČNE (Year-round)

- Chochołowskie Termy (termálne kúpalisko, Poľsko) — 20 min autom
- Zakopane (Poľsko) — 45 min autom
- Reštaurácie a pizzerie do 200m
- Potraviny 200m
- Placeholders: `activities-thermal-1`, `activities-zakopane-1`

### Optional: Interactive map showing activity locations relative to the cabin

### Bottom CTA:

- Booking button → megaubytovanie.sk

---

## Page 5: KONTAKT (`/kontakt`)

### Page header

- Heading: "Kontakt & Rezervácia"
- Subheading: _"Budeme sa tešiť na vašu návštevu"_

### 5.1 RESERVATION

Two main actions, displayed prominently:

**Phone:**

- Large phone number: `+421 XXX XXX XXX` (placeholder for owner to fill in)
- Clickable `tel:` link on mobile
- Lucide `Phone` icon
- Text: "Zavolajte nám pre rýchlu rezerváciu"

**Online booking:**

- Large CTA button: **"Rezervovať online"**
- Links to: `https://www.megaubytovanie.sk/chata-za-studenym-potokom` (opens in new tab)
- Lucide `ExternalLink` icon

**Email:**

- `info@example.com` (placeholder)
- Lucide `Mail` icon

### 5.2 PRAKTICKÉ INFORMÁCIE (Practical Info)

Clean info cards with Lucide icons:

| Icon           | Info                                           |
| -------------- | ---------------------------------------------- |
| `MapPin`       | Pod Jamami 514/37, 027 32, Habovka             |
| `Navigation`   | GPS: 49.274138, 19.602702                      |
| `Clock`        | Check-in: 15:00 – 19:00                        |
| `LogOut`       | Check-out: 08:00 – 10:00                       |
| `Users`        | Kapacita: 11 lôžok + 2 prístelky               |
| `CigaretteOff` | Fajčenie zakázané v interiéri                  |
| `PawPrint`     | Zvieratá nie sú povolené                       |
| `Lock`         | Len jedna skupina hostí naraz — plné súkromie! |
| `Thermometer`  | Podlahové kúrenie, krb, klimatizácia           |
| `Languages`    | Slovenčina, čeština, angličtina, poľština      |
| `Smartphone`   | Telekom, Orange, O2, 4ka                       |
| `Utensils`     | Reštaurácia: 100m                              |
| `ShoppingCart` | Potraviny: 200m                                |
| `Bus`          | Zastávka autobusu: 1km                         |
| `TrainFront`   | Vlaková stanica: 12km                          |

### 5.3 MAPA

- Embedded Google Map with pin at GPS: 49.274138, 19.602702
- Full-width map section
- Address repeated below the map

### 5.4 SOCIAL MEDIA

- Facebook icon + link (placeholder)
- Instagram icon + link (placeholder)

---

## NAVIGATION (shared across all pages)

**Desktop:** Sticky top navigation bar

- Logo/cabin name on the left
- Nav links: Domov, Interiér, Wellness, Okolie, Kontakt
- "Rezervovať" button on the right (accent color, links to megaubytovanie.sk)
- Phone number visible in nav (optional, on larger screens)

**Mobile:** Hamburger menu

- Full-screen or slide-in menu overlay
- Same links + phone number + booking button
- Lucide `Menu` and `X` icons for toggle

**Active state:** Current page link should be visually highlighted

**Scroll behavior:** Navigation becomes slightly opaque/blurred background on scroll (glassmorphism effect)

---

## FOOTER (shared across all pages)

- Cabin name: Chata za Studeným potokom
- Address: Pod Jamami 514/37, 027 32, Habovka
- Phone: `+421 XXX XXX XXX`
- Email: `info@example.com`
- Quick navigation links: Domov, Interiér, Wellness, Okolie, Kontakt
- "Rezervovať" button → megaubytovanie.sk
- Small note: "We speak English and Polish"
- Social media icons (Facebook, Instagram — placeholders)
- Copyright: © 2025 Chata za Studeným potokom. Všetky práva vyhradené.
- GDPR link: "Ochrana osobných údajov" (placeholder page)

---

## Performance & SEO Requirements

- **Lazy loading** on all image placeholders (ready for when real images are added)
- **Semantic HTML** with proper heading hierarchy (h1 → h2 → h3)
- **Meta tags per page:** unique title and description for each page
  - `/` — "Chata za Studeným potokom | Prémiové ubytovanie Habovka, Orava"
  - `/interier` — "Interiér | Chata za Studeným potokom"
  - `/wellness` — "Wellness & Záhrada | Chata za Studeným potokom"
  - `/okolie` — "Okolie & Aktivity | Chata za Studeným potokom"
  - `/kontakt` — "Kontakt & Rezervácia | Chata za Studeným potokom"
- **Open Graph tags** for social sharing (each page)
- **Structured data:** Schema.org `LodgingBusiness` JSON-LD on the homepage
- **Language:** `<html lang="sk">`
- **Accessibility:** alt texts in Slovak, ARIA labels on interactive elements, keyboard navigation, focus states
- **Smooth scrolling** for any in-page anchor links
- **Responsive:** Mobile-first — tested at 375px, 768px, 1024px, 1440px breakpoints
- **Next.js optimizations:** Use `next/image` component (configured for placeholder mode), `next/link` for internal navigation, `next/font` for Google Fonts

---

## Key Selling Points to Emphasize Visually

1. **Wellness (sauna + hot tub)** — gets its own page, teaser on homepage, immersive treatment
2. **10/10 rating** — trust badge on homepage, impossible to miss
3. **"Only one group at a time"** — full privacy and exclusivity, displayed as a banner/callout on homepage
4. **Year-round appeal** — the `/okolie` page shows seasonal variety
5. **Family-friendly** — kids amenities mentioned naturally on `/wellness` page and in about section
6. **Location** — edge of village, near forest, 50m from stream — tranquility

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: nav, footer, fonts, metadata
│   ├── page.tsx                # Landing page (/)
│   ├── interier/
│   │   └── page.tsx            # Interior gallery page
│   ├── wellness/
│   │   └── page.tsx            # Wellness & exterior page
│   ├── okolie/
│   │   └── page.tsx            # Activities & surroundings page
│   ├── kontakt/
│   │   └── page.tsx            # Contact & booking page
│   └── globals.css             # Tailwind config + custom CSS variables
├── components/
│   ├── ui/
│   │   ├── ImagePlaceholder.tsx    # Reusable image placeholder
│   │   ├── IconCard.tsx            # Icon + label card component
│   │   ├── SectionTransition.tsx   # SVG wave/gradient dividers
│   │   ├── Lightbox.tsx            # Full-screen image viewer
│   │   ├── ScrollReveal.tsx        # Intersection Observer wrapper
│   │   ├── BookingButton.tsx       # Reusable CTA → megaubytovanie.sk
│   │   └── RatingBadge.tsx         # 10/10 rating display component
│   ├── layout/
│   │   ├── Navigation.tsx          # Sticky nav with mobile hamburger
│   │   └── Footer.tsx              # Shared footer
│   └── sections/                   # Landing page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── WellnessTeaser.tsx
│       ├── InteriorTeaser.tsx
│       ├── Reviews.tsx
│       ├── PrivacyBanner.tsx
│       └── BottomCTA.tsx
```

---

## Important Reminders

- All 69 photos exist as `.webp` — but use the `ImagePlaceholder` component everywhere. No hardcoded image paths.
- No emoji anywhere in the output.
- Lucide React icons only — verify icon names exist before using them.
- Sections within pages must blend into each other visually. No harsh separators.
- The "Rezervovať online" button should always link to: `https://www.megaubytovanie.sk/chata-za-studenym-potokom` and open in a new tab.
- The site is Slovak-only. No language switcher needed.
- Every page ends with a CTA (booking button + phone number) before the footer.
- Keep the codebase clean and well-organized — this will be a real production site.
