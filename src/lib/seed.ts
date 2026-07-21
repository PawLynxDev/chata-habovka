// Východiskový obsah webu poskladaný 1:1 z pôvodného (natvrdo zapísaného) kódu.
// Dvojaký účel: (a) fallback v getContent() keď ešte neexistuje Blob dokument,
// (b) payload pre jednorazový seed skript (scripts/seed-blob.ts).
// ID sú deterministické (nie náhodné), aby boli stabilné naprieč nasadeniami.

import imageMap from "./imageMap";
import {
  CONTENT_SCHEMA_VERSION,
  type GalleryImage,
  type SiteContent,
} from "./content-types";

const BOOKING_URL = "https://www.megaubytovanie.sk/chata-za-studenym-potokom";

function img(key: string, alt: string): GalleryImage {
  return { id: key, url: imageMap[key] ?? "", alt };
}

/** Vytvorí pole fotiek key-prefix-1..count s altom "<altBase> - foto N". */
function seq(prefix: string, count: number, altBase: string): GalleryImage[] {
  return Array.from({ length: count }, (_, i) =>
    img(`${prefix}-${i + 1}`, `${altBase} - foto ${i + 1}`)
  );
}

/** Z konkrétnych čísel (napr. bedroom-4,5,6) s vlastným altom prenumerovaným od 1. */
function pick(prefix: string, nums: number[], altBase: string): GalleryImage[] {
  return nums.map((n, i) => img(`${prefix}-${n}`, `${altBase} - foto ${i + 1}`));
}

export const SEED_CONTENT: SiteContent = {
  schemaVersion: CONTENT_SCHEMA_VERSION,
  updatedAt: "2026-01-01T00:00:00.000Z",
  siteEnabled: true,

  bookingUrl: BOOKING_URL,
  phone: "+421 948 280 363",
  phoneHref: "+421948280363",

  hero: {
    eyebrow: "HABOVKA | ZÁPADNÉ TATRY",
    title: "Chata za Studeným potokom",
    subtitle: "Kde sa moderný komfort spája s tichom prírody",
    image: img("hero-exterior-1", "Chata za Studeným potokom - exteriér"),
  },

  about: {
    heading: "O chate",
    text: "Hľadáte miesto, kde sa moderný komfort prirodzene spája s tichom prírody? Chata za Studeným potokom sa nachádza v obci Habovka, v atraktívnom regióne Orava. Situovaná na okraji obce, v blízkosti lesa a 50 metrov od potoka — príjemná atmosféra pokoja a súkromia. Moderný dizajn, kvalitné vybavenie a vlastné wellness zázemie so saunou a vírivkou.",
    amenities: [
      { id: "amenity-1", iconKey: "bed-double", label: "11 lôžok + 2 prístelky", description: "Kapacita" },
      { id: "amenity-2", iconKey: "door-open", label: "4 spálne", description: "Každá s TV" },
      { id: "amenity-3", iconKey: "bath", label: "2 kúpeľne, 2 toalety", description: "Podlahové kúrenie" },
      { id: "amenity-4", iconKey: "wifi", label: "Vysokorýchlostné WiFi", description: "V celej chate" },
      { id: "amenity-5", iconKey: "flame", label: "Sauna & Vírivka", description: "Privátny wellness" },
      { id: "amenity-6", iconKey: "heater", label: "Krb", description: "Romantické večery" },
      { id: "amenity-7", iconKey: "snowflake", label: "Klimatizácia", description: "Celoročný komfort" },
      { id: "amenity-8", iconKey: "car", label: "6 parkovacích miest", description: "Oplotené & strážené" },
      { id: "amenity-9", iconKey: "baby", label: "Pre rodiny s deťmi", description: "Detské ihrisko" },
      { id: "amenity-10", iconKey: "ticket", label: "Rekreačné poukážky", description: "Akceptované" },
    ],
  },

  interiorTeaser: {
    heading: "Interiér chaty",
    text: "Moderný interiér s dôrazom na pohodlie. Štýlová obývačka s krbom, plne vybavená kuchyňa a 4 pohodlné spálne.",
    living: img("interior-living-1", "Obývačka"),
    kitchen: img("interior-kitchen-1", "Kuchyňa"),
    bedroom: img("interior-bedroom-1", "Spálňa"),
  },

  wellnessTeaser: {
    eyebrow: "WELLNESS & RELAX",
    heading: "Váš privátny wellness priamo v chate",
    text: "Súkromná sauna, vírivka a vonkajšie sprchy — ideálne na oddych po dni strávenom v horách.",
    image: img("wellness-hottub", "Virivka pod holym nebom"),
  },

  reviews: {
    eyebrow: "HODNOTENIE HOSTÍ",
    heading: "Naši hostia nás milujú",
    quote:
      "Úžasné miesto, skvelý wellness, čistý vzduch a neskutočný pokoj. Určite sa vrátime!",
  },

  privacyBanner: {
    heading: "Len jedna skupina hostí naraz",
    text: "Celou chatou disponuje vždy len jedna skupina. Žiadni cudzinci na chodbe, žiadne zdieľané priestory. Užívajte si absolútne súkromie.",
  },

  bottomCta: {
    heading: "Rezervujte si svoj pobyt",
    text: "Kontaktujte nás alebo si rovno rezervujte termín.",
  },

  pricing: {
    heading: "Cenník",
    note: "Cena za celý objekt / noc · min. 1 osoba · min. 2–3 noci podľa sezóny",
    seasons: [
      { id: "season-1", name: "Zimná sezóna", dates: "2. 1. – 31. 3.", price: 250, minNights: 3 },
      { id: "season-2", name: "Letná mimosezóna", dates: "1. 4. – 30. 6.", price: 250, minNights: 2 },
      { id: "season-3", name: "Veľkonočný pobyt", dates: "3. 4. – 6. 4.", price: 350, minNights: 3, highlight: true },
      { id: "season-4", name: "Letná sezóna", dates: "1. 7. – 31. 8.", price: 250, minNights: 3 },
      { id: "season-5", name: "Zimná mimosezóna", dates: "1. 9. – 22. 12.", price: 250, minNights: 2 },
      { id: "season-6", name: "Vianočný pobyt", dates: "23. 12. – 28. 12.", price: 350, minNights: 3, highlight: true },
      { id: "season-7", name: "Silvester", dates: "29. 12. – 1. 1.", price: 450, minNights: 3, highlight: true },
    ],
    servicesHeading: "Doplatok za služby",
    services: [
      { id: "service-sauna", name: "Sauna", price: 80, unit: "/ pobyt", iconKey: "flame" },
      { id: "service-virivka", name: "Vírivka / Jacuzzi", price: 80, unit: "/ pobyt", iconKey: "waves" },
    ],
    combined: { id: "service-combined", name: "Sauna + Vírivka spolu", price: 150, unit: "/ pobyt", iconKey: "sparkles" },
    footnote: "Aktuálne ceny a dostupnosť nájdete na",
  },

  interier: {
    headerTitle: "Interiér chaty",
    headerSubtitle: "Každý detail navrhovaný pre váš komfort",
    living: {
      heading: "Obývačka s krbom",
      description: "Priestranná obývačka s krbom, pohodlnými sedačkami a výhľadom na hory. Ideálne miesto na spoločné večery.",
      images: seq("living", 8, "Obývačka s krbom"),
    },
    kitchen: {
      heading: "Plne vybavená kuchyňa",
      description: "Moderná kuchyňa so všetkým čo potrebujete — umývačka riadu, mikrovlnka, trouba, kávovar.",
      images: seq("kitchen", 3, "Plne vybavená kuchyňa"),
    },
    bedroomsHeading: "Spálne",
    bedroomsDescription: "4 pohodlné spálne s kvalitnými matracmi. Kapacita 11 lôžok + 2 prístelky.",
    bedrooms: [
      { heading: "Spálňa 1", description: "2-lôžková izba (dve single postele)", images: pick("bedroom", [1, 2, 3], "Spálňa 1") },
      { heading: "Spálňa 2", description: "3-lôžková izba (manželská posteľ + single)", images: pick("bedroom", [4, 5, 6], "Spálňa 2") },
      { heading: "Spálňa 3", description: "3-lôžková izba (manželská posteľ + single + rozkladacie kreslo)", images: pick("bedroom", [7, 8, 9], "Spálňa 3") },
      { heading: "Spálňa 4", description: "3-lôžková izba (manželská posteľ + single + rozkladacie kreslo)", images: pick("bedroom", [10, 11, 12], "Spálňa 4") },
    ],
    bedroomsFootnote: "Každá izba má TV. Detská postieľka k dispozícii zdarma na vyžiadanie.",
    bathroomsHeading: "Kúpeľne",
    bathroomsDescription: "2 kúpeľne a samostatné WC s podlahovým kúrením.",
    bathrooms: [
      { heading: "Kúpeľňa 1 (poschodie)", description: "sprchovací kút, WC, umývadlo, fén, sušiak, uteráky", images: pick("bathroom", [1, 2, 3], "Kúpeľňa 1 (poschodie)") },
      { heading: "Kúpeľňa 2 (prízemie)", description: "vaňa, sprcha, umývadlo, uteráky", images: pick("bathroom", [4, 5, 6], "Kúpeľňa 2 (prízemie)") },
      { heading: "Samostatné WC (prízemie)", description: "umývadlo, WC, uteráky", images: pick("bathroom", [7, 8], "Samostatné WC (prízemie)") },
    ],
  },

  wellness: {
    headerTitle: "Wellness & Záhrada",
    headerSubtitle: "Váš súkromný wellness priamo pri chate",
    wellness: {
      heading: "Váš privátny wellness",
      description: "Súkromná sauna pre 6 osôb, vírivka pod holým nebom s výhľadom na hory, dva vonkajšie sprchy a ochladzovacia kaďa. Všetko len pre vás.",
      images: [
        img("wellness-sauna", "Fínska sauna pre 6 osôb"),
        img("wellness-hottub", "Vírivka pod holým nebom s výhľadom na hory"),
        img("wellness-shower", "Dažďové sprchy"),
      ],
    },
    wellnessFootnote: "Ideálne na oddych po dni strávenom v horách",
    terrace: {
      heading: "Terasa a záhrada",
      description: "Rozľahlá terasa s vonkajším sedením, altánok s grilom a ohniskom, kotlík na guláš, záhradná hojdačka a stolný futbal. Ideálne na grilovanie a večerné posedenia pri ohni.",
      images: seq("terrace", 17, "Terasa a záhrada"),
    },
    kids: {
      heading: "Detský raj",
      description: "Detské ihrisko s hojdačkou a preliezkami, detská herňa s hračkami a futbalové ihrisko v blízkosti. Deti sa u nás nudiť nebudú.",
      images: seq("kids", 2, "Detský kútik"),
    },
    infoHeading: "Praktické informácie",
    infoItems: [
      { id: "info-1", iconKey: "bike", title: "Úloženie bicyklov", desc: "Uzamykateľná miestnosť" },
      { id: "info-2", iconKey: "snowflake", title: "Úloženie lyží", desc: "Vyhrievaná skiroom" },
      { id: "info-3", iconKey: "car", title: "Parkovanie", desc: "6 oplotených miest pri chate" },
      { id: "info-4", iconKey: "dog", title: "Zvieratá", desc: "Nie sú povolené" },
    ],
  },

  okolie: {
    headerTitle: "Okolie & Aktivity",
    headerSubtitle: "Zážitky v každom ročnom období",
    heading: "Atrakcie v okolí",
    description: "Vzdialenosti sú uvedené vzdušnou čiarou.",
    attractions: [
      { id: "attraction-1", image: img("summer-stream", "Studený potok"), title: "Studený potok", subtitle: "Otužovanie a kúpanie priamo pri chate", distance: "0,1" },
      { id: "attraction-2", image: img("winter-ski", "Skipark Roháče"), title: "Skipark Roháče – Janovky", subtitle: "Zjazdovky pre všetkých", distance: "1,2" },
      { id: "attraction-3", image: img("summer-folklore", "Podroháčske folklórne slávnosti"), title: "Podroháčske folklórne slávnosti", subtitle: "Tradičné folklórne slávnosti v regióne", distance: "1,6" },
      { id: "attraction-4", image: img("summer-hiking", "Turistika v Roháčoch"), title: "Turistika v Roháčoch", subtitle: "Sivý vrch, Brestová, Baníkov, Roháčske plesá", distance: "2" },
      { id: "attraction-5", image: img("summer-cycling", "Cyklistika"), title: "Cyklistika", subtitle: "Horské aj cestné trasy pre každú úroveň", distance: "2" },
      { id: "attraction-6", image: img("winter-crosscountry", "Bežkovanie"), title: "Bežkovanie", subtitle: "Upravené bežkárske trate v okolí", distance: "3" },
      { id: "attraction-7", image: img("summer-sports", "Športové aktivity"), title: "Šport a rekreácia", subtitle: "Jazda na koni, fitness, tenis, bazén", distance: "3" },
      { id: "attraction-8", image: img("summer-nature", "Tarzánia — lanový park"), title: "Tarzánia – lanový park", subtitle: "Adrenalín pre deti aj dospelých", distance: "4,6" },
      { id: "attraction-9", image: img("summer-museum", "Múzeum oravskej dediny"), title: "Múzeum oravskej dediny", subtitle: "Skanzen v Zuberci", distance: "4,6" },
      { id: "attraction-10", image: img("winter-snowboard", "Snowboarding"), title: "Snowboarding", subtitle: "Snowpark a freeride možnosti", distance: "5" },
      { id: "attraction-11", image: img("winter-hiking", "Zimná turistika"), title: "Zimná turistika", subtitle: "Zasnežená krajina Roháčov", distance: "5" },
      { id: "attraction-12", image: img("thermal-baths", "Termálne kúpele"), title: "Termálne kúpele", subtitle: "Oravice, Bešeňová, Chochołowskie Termy", distance: "15" },
      { id: "attraction-13", image: img("summer-rafting", "Splav Oravy"), title: "Splav Oravy", subtitle: "Raftovanie a kanoistika na rieke Orava", distance: "15" },
      { id: "attraction-14", image: img("summer-lake", "Oravská priehrada"), title: "Oravská priehrada", subtitle: "Kúpanie, vodné športy a plavba loďou", distance: "20" },
      { id: "attraction-15", image: img("summer-castle", "Oravský hrad"), title: "Oravský hrad", subtitle: "Jeden z najkrajších hradov na Slovensku", distance: "28" },
      { id: "attraction-16", image: img("zakopane", "Zakopane"), title: "Zakopane, Poľsko", subtitle: "Obľúbený poľský Smokovec", distance: "45" },
    ],
    footnote: "Reštaurácie a pizzérie do 200 m od chaty. Potraviny 200 m.",
  },

  contact: {
    headerTitle: "Kontakt",
    headerSubtitle: "Budeme sa tešiť na vašu návštevu",
    reservationHeading: "Rezervácia pobytu",
    reservationText: "Rezervovať si pobyt môžete telefonicky, emailom alebo cez náš rezervačný systém.",
    practicalInfo: [
      { id: "practical-1", iconKey: "map-pin", label: "Adresa", value: "Pod Jamami 514/37, 027 32, Habovka" },
      { id: "practical-2", iconKey: "navigation", label: "GPS", value: "49.274138, 19.602702" },
      { id: "practical-3", iconKey: "clock", label: "Check-in", value: "15:00 – 19:00" },
      { id: "practical-4", iconKey: "log-out", label: "Check-out", value: "08:00 – 10:00" },
      { id: "practical-5", iconKey: "users", label: "Kapacita", value: "11 lôžok + 2 prístelky" },
      { id: "practical-6", iconKey: "cigarette-off", label: "Fajčenie", value: "Zakázané v interiéri" },
      { id: "practical-7", iconKey: "paw-print", label: "Zvieratá", value: "Nie sú povolené" },
      { id: "practical-8", iconKey: "lock", label: "Súkromie", value: "Len jedna skupina hostí naraz" },
      { id: "practical-9", iconKey: "thermometer", label: "Vykurovanie", value: "Podlahové kúrenie, krb, klimatizácia" },
      { id: "practical-10", iconKey: "languages", label: "Jazyky", value: "Slovenčina, čeština, angličtina, poľština" },
      { id: "practical-11", iconKey: "smartphone", label: "Signál", value: "Telekom, Orange, O2, 4ka" },
      { id: "practical-12", iconKey: "utensils", label: "Reštaurácia", value: "100m" },
      { id: "practical-13", iconKey: "shopping-cart", label: "Potraviny", value: "200m" },
      { id: "practical-14", iconKey: "bus", label: "Autobus", value: "Zastávka 1km" },
      { id: "practical-15", iconKey: "train-front", label: "Vlak", value: "Stanica 12km" },
    ],
    mapHeading: "Kde nás nájdete",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612.5!2d19.602702!3d49.274138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDE2JzI2LjkiTiAxOcKwMzYnMDkuNyJF!5e0!3m2!1sen!2ssk!4v1",
    address: "Pod Jamami 514/37, 027 32, Habovka",
    gps: "49.274138, 19.602702",
    travelNote: "Z Bratislavy 2,5 hod, z Krakova 2 hod",
  },
};
