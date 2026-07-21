"use client";

import type { Dispatch, SetStateAction } from "react";
import { Plus, Trash2 } from "lucide-react";
import type {
  Amenity,
  Attraction,
  InfoItem,
  PracticalInfoItem,
  SiteContent,
} from "@/lib/content-types";
import { Card, Field, IconSelect, TextArea, TextInput } from "./ui";
import SingleImageEditor from "./SingleImageEditor";

type Setter = Dispatch<SetStateAction<SiteContent>>;

export default function TextsTab({
  content,
  setContent,
}: {
  content: SiteContent;
  setContent: Setter;
}) {
  // --- updatery jednotlivých sekcií (immutable) ---
  const patch = (p: Partial<SiteContent>) => setContent((c) => ({ ...c, ...p }));
  const patchHero = (p: Partial<SiteContent["hero"]>) =>
    setContent((c) => ({ ...c, hero: { ...c.hero, ...p } }));
  const patchAbout = (p: Partial<SiteContent["about"]>) =>
    setContent((c) => ({ ...c, about: { ...c.about, ...p } }));
  const patchITeaser = (p: Partial<SiteContent["interiorTeaser"]>) =>
    setContent((c) => ({ ...c, interiorTeaser: { ...c.interiorTeaser, ...p } }));
  const patchWTeaser = (p: Partial<SiteContent["wellnessTeaser"]>) =>
    setContent((c) => ({ ...c, wellnessTeaser: { ...c.wellnessTeaser, ...p } }));
  const patchReviews = (p: Partial<SiteContent["reviews"]>) =>
    setContent((c) => ({ ...c, reviews: { ...c.reviews, ...p } }));
  const patchPrivacy = (p: Partial<SiteContent["privacyBanner"]>) =>
    setContent((c) => ({ ...c, privacyBanner: { ...c.privacyBanner, ...p } }));
  const patchCta = (p: Partial<SiteContent["bottomCta"]>) =>
    setContent((c) => ({ ...c, bottomCta: { ...c.bottomCta, ...p } }));
  const patchInterier = (p: Partial<SiteContent["interier"]>) =>
    setContent((c) => ({ ...c, interier: { ...c.interier, ...p } }));
  const patchWellness = (p: Partial<SiteContent["wellness"]>) =>
    setContent((c) => ({ ...c, wellness: { ...c.wellness, ...p } }));
  const patchOkolie = (p: Partial<SiteContent["okolie"]>) =>
    setContent((c) => ({ ...c, okolie: { ...c.okolie, ...p } }));
  const patchContact = (p: Partial<SiteContent["contact"]>) =>
    setContent((c) => ({ ...c, contact: { ...c.contact, ...p } }));

  // amenities
  const updAmenity = (id: string, p: Partial<Amenity>) =>
    patchAbout({
      amenities: content.about.amenities.map((a) =>
        a.id === id ? { ...a, ...p } : a
      ),
    });
  const addAmenity = () =>
    patchAbout({
      amenities: [
        ...content.about.amenities,
        { id: crypto.randomUUID(), iconKey: "bed-double", label: "", description: "" },
      ],
    });
  const delAmenity = (id: string) =>
    patchAbout({
      amenities: content.about.amenities.filter((a) => a.id !== id),
    });

  // wellness infoItems
  const updInfo = (id: string, p: Partial<InfoItem>) =>
    patchWellness({
      infoItems: content.wellness.infoItems.map((it) =>
        it.id === id ? { ...it, ...p } : it
      ),
    });
  const addInfo = () =>
    patchWellness({
      infoItems: [
        ...content.wellness.infoItems,
        { id: crypto.randomUUID(), iconKey: "bike", title: "", desc: "" },
      ],
    });
  const delInfo = (id: string) =>
    patchWellness({
      infoItems: content.wellness.infoItems.filter((it) => it.id !== id),
    });

  // contact practicalInfo
  const updPractical = (id: string, p: Partial<PracticalInfoItem>) =>
    patchContact({
      practicalInfo: content.contact.practicalInfo.map((it) =>
        it.id === id ? { ...it, ...p } : it
      ),
    });
  const addPractical = () =>
    patchContact({
      practicalInfo: [
        ...content.contact.practicalInfo,
        { id: crypto.randomUUID(), iconKey: "map-pin", label: "", value: "" },
      ],
    });
  const delPractical = (id: string) =>
    patchContact({
      practicalInfo: content.contact.practicalInfo.filter((it) => it.id !== id),
    });

  // okolie attractions
  const updAttraction = (id: string, p: Partial<Attraction>) =>
    patchOkolie({
      attractions: content.okolie.attractions.map((a) =>
        a.id === id ? { ...a, ...p } : a
      ),
    });
  const addAttraction = () =>
    patchOkolie({
      attractions: [
        ...content.okolie.attractions,
        {
          id: crypto.randomUUID(),
          image: { id: crypto.randomUUID(), url: "", alt: "" },
          title: "",
          subtitle: "",
          distance: "",
        },
      ],
    });
  const delAttraction = (id: string) =>
    patchOkolie({
      attractions: content.okolie.attractions.filter((a) => a.id !== id),
    });

  return (
    <div className="space-y-4">
      <Card title="Kontakt a odkazy (globálne)">
        <div className="grid sm:grid-cols-3 gap-3">
          <Field label="Telefón (zobrazený)">
            <TextInput value={content.phone} onChange={(v) => patch({ phone: v })} />
          </Field>
          <Field label="Telefón (pre odkaz tel:)" hint="bez medzier, napr. +421948280363">
            <TextInput
              value={content.phoneHref}
              onChange={(v) => patch({ phoneHref: v })}
            />
          </Field>
          <Field label="Rezervačný odkaz (URL)">
            <TextInput
              value={content.bookingUrl}
              onChange={(v) => patch({ bookingUrl: v })}
            />
          </Field>
        </div>
      </Card>

      <Card title="Úvod (hero)">
        <div className="space-y-3">
          <Field label="Malý nadpis (eyebrow)">
            <TextInput value={content.hero.eyebrow} onChange={(v) => patchHero({ eyebrow: v })} />
          </Field>
          <Field label="Hlavný nadpis">
            <TextInput value={content.hero.title} onChange={(v) => patchHero({ title: v })} />
          </Field>
          <Field label="Podnadpis">
            <TextInput value={content.hero.subtitle} onChange={(v) => patchHero({ subtitle: v })} />
          </Field>
        </div>
      </Card>

      <Card title="O chate">
        <div className="space-y-3">
          <Field label="Nadpis">
            <TextInput value={content.about.heading} onChange={(v) => patchAbout({ heading: v })} />
          </Field>
          <Field label="Popis">
            <TextArea value={content.about.text} onChange={(v) => patchAbout({ text: v })} rows={5} />
          </Field>
          <div>
            <p className="text-sm font-medium text-charcoal mb-2">Vybavenie (ikony)</p>
            <div className="space-y-2">
              {content.about.amenities.map((a) => (
                <div key={a.id} className="grid grid-cols-2 sm:grid-cols-12 gap-2 items-end">
                  <div className="sm:col-span-3">
                    <Field label="Ikona">
                      <IconSelect value={a.iconKey} onChange={(v) => updAmenity(a.id, { iconKey: v })} />
                    </Field>
                  </div>
                  <div className="sm:col-span-4">
                    <Field label="Názov">
                      <TextInput value={a.label} onChange={(v) => updAmenity(a.id, { label: v })} />
                    </Field>
                  </div>
                  <div className="sm:col-span-4">
                    <Field label="Popis">
                      <TextInput value={a.description} onChange={(v) => updAmenity(a.id, { description: v })} />
                    </Field>
                  </div>
                  <div className="sm:col-span-1 pb-2">
                    <button type="button" onClick={() => delAmenity(a.id)} className="text-red-600 hover:bg-red-50 rounded p-1" aria-label="Zmazať">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
              <button type="button" onClick={addAmenity} className="inline-flex items-center gap-2 text-forest font-medium text-sm hover:text-forest-dark">
                <Plus className="w-4 h-4" /> Pridať vybavenie
              </button>
            </div>
          </div>
        </div>
      </Card>

      <Card title="Náhľady na úvodnej stránke">
        <div className="space-y-3">
          <Field label="Interiér – nadpis">
            <TextInput value={content.interiorTeaser.heading} onChange={(v) => patchITeaser({ heading: v })} />
          </Field>
          <Field label="Interiér – text">
            <TextArea value={content.interiorTeaser.text} onChange={(v) => patchITeaser({ text: v })} />
          </Field>
          <Field label="Wellness – malý nadpis">
            <TextInput value={content.wellnessTeaser.eyebrow} onChange={(v) => patchWTeaser({ eyebrow: v })} />
          </Field>
          <Field label="Wellness – nadpis">
            <TextInput value={content.wellnessTeaser.heading} onChange={(v) => patchWTeaser({ heading: v })} />
          </Field>
          <Field label="Wellness – text">
            <TextArea value={content.wellnessTeaser.text} onChange={(v) => patchWTeaser({ text: v })} />
          </Field>
        </div>
      </Card>

      <Card title="Recenzie">
        <div className="space-y-3">
          <Field label="Malý nadpis">
            <TextInput value={content.reviews.eyebrow} onChange={(v) => patchReviews({ eyebrow: v })} />
          </Field>
          <Field label="Nadpis">
            <TextInput value={content.reviews.heading} onChange={(v) => patchReviews({ heading: v })} />
          </Field>
          <Field label="Citát hosťa">
            <TextArea value={content.reviews.quote} onChange={(v) => patchReviews({ quote: v })} />
          </Field>
        </div>
      </Card>

      <Card title="Banner – súkromie">
        <div className="space-y-3">
          <Field label="Nadpis">
            <TextInput value={content.privacyBanner.heading} onChange={(v) => patchPrivacy({ heading: v })} />
          </Field>
          <Field label="Text">
            <TextArea value={content.privacyBanner.text} onChange={(v) => patchPrivacy({ text: v })} />
          </Field>
        </div>
      </Card>

      <Card title="Spodná výzva (CTA)">
        <div className="space-y-3">
          <Field label="Nadpis">
            <TextInput value={content.bottomCta.heading} onChange={(v) => patchCta({ heading: v })} />
          </Field>
          <Field label="Text">
            <TextInput value={content.bottomCta.text} onChange={(v) => patchCta({ text: v })} />
          </Field>
        </div>
      </Card>

      <Card title="Stránka Interiér – texty">
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="Nadpis stránky">
              <TextInput value={content.interier.headerTitle} onChange={(v) => patchInterier({ headerTitle: v })} />
            </Field>
            <Field label="Podnadpis stránky">
              <TextInput value={content.interier.headerSubtitle} onChange={(v) => patchInterier({ headerSubtitle: v })} />
            </Field>
          </div>
          <Field label="Obývačka – nadpis">
            <TextInput value={content.interier.living.heading} onChange={(v) => patchInterier({ living: { ...content.interier.living, heading: v } })} />
          </Field>
          <Field label="Obývačka – popis">
            <TextArea value={content.interier.living.description} onChange={(v) => patchInterier({ living: { ...content.interier.living, description: v } })} />
          </Field>
          <Field label="Kuchyňa – nadpis">
            <TextInput value={content.interier.kitchen.heading} onChange={(v) => patchInterier({ kitchen: { ...content.interier.kitchen, heading: v } })} />
          </Field>
          <Field label="Kuchyňa – popis">
            <TextArea value={content.interier.kitchen.description} onChange={(v) => patchInterier({ kitchen: { ...content.interier.kitchen, description: v } })} />
          </Field>

          <Field label="Spálne – nadpis sekcie">
            <TextInput value={content.interier.bedroomsHeading} onChange={(v) => patchInterier({ bedroomsHeading: v })} />
          </Field>
          <Field label="Spálne – popis sekcie">
            <TextArea value={content.interier.bedroomsDescription} onChange={(v) => patchInterier({ bedroomsDescription: v })} />
          </Field>
          {content.interier.bedrooms.map((b, i) => (
            <div key={i} className="grid sm:grid-cols-2 gap-3 border-t border-cream-dark pt-3">
              <Field label={`Spálňa ${i + 1} – nadpis`}>
                <TextInput value={b.heading} onChange={(v) => patchInterier({ bedrooms: content.interier.bedrooms.map((x, j) => (j === i ? { ...x, heading: v } : x)) })} />
              </Field>
              <Field label={`Spálňa ${i + 1} – popis`}>
                <TextInput value={b.description} onChange={(v) => patchInterier({ bedrooms: content.interier.bedrooms.map((x, j) => (j === i ? { ...x, description: v } : x)) })} />
              </Field>
            </div>
          ))}
          <Field label="Spálne – poznámka pod galériou">
            <TextInput value={content.interier.bedroomsFootnote} onChange={(v) => patchInterier({ bedroomsFootnote: v })} />
          </Field>

          <Field label="Kúpeľne – nadpis sekcie">
            <TextInput value={content.interier.bathroomsHeading} onChange={(v) => patchInterier({ bathroomsHeading: v })} />
          </Field>
          <Field label="Kúpeľne – popis sekcie">
            <TextArea value={content.interier.bathroomsDescription} onChange={(v) => patchInterier({ bathroomsDescription: v })} />
          </Field>
          {content.interier.bathrooms.map((b, i) => (
            <div key={i} className="grid sm:grid-cols-2 gap-3 border-t border-cream-dark pt-3">
              <Field label={`Kúpeľňa ${i + 1} – nadpis`}>
                <TextInput value={b.heading} onChange={(v) => patchInterier({ bathrooms: content.interier.bathrooms.map((x, j) => (j === i ? { ...x, heading: v } : x)) })} />
              </Field>
              <Field label={`Kúpeľňa ${i + 1} – popis`}>
                <TextInput value={b.description} onChange={(v) => patchInterier({ bathrooms: content.interier.bathrooms.map((x, j) => (j === i ? { ...x, description: v } : x)) })} />
              </Field>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Stránka Wellness – texty">
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="Nadpis stránky">
              <TextInput value={content.wellness.headerTitle} onChange={(v) => patchWellness({ headerTitle: v })} />
            </Field>
            <Field label="Podnadpis stránky">
              <TextInput value={content.wellness.headerSubtitle} onChange={(v) => patchWellness({ headerSubtitle: v })} />
            </Field>
          </div>
          <Field label="Wellness – nadpis">
            <TextInput value={content.wellness.wellness.heading} onChange={(v) => patchWellness({ wellness: { ...content.wellness.wellness, heading: v } })} />
          </Field>
          <Field label="Wellness – popis">
            <TextArea value={content.wellness.wellness.description} onChange={(v) => patchWellness({ wellness: { ...content.wellness.wellness, description: v } })} />
          </Field>
          <Field label="Wellness – poznámka">
            <TextInput value={content.wellness.wellnessFootnote} onChange={(v) => patchWellness({ wellnessFootnote: v })} />
          </Field>
          <Field label="Terasa – nadpis">
            <TextInput value={content.wellness.terrace.heading} onChange={(v) => patchWellness({ terrace: { ...content.wellness.terrace, heading: v } })} />
          </Field>
          <Field label="Terasa – popis">
            <TextArea value={content.wellness.terrace.description} onChange={(v) => patchWellness({ terrace: { ...content.wellness.terrace, description: v } })} />
          </Field>
          <Field label="Detský kútik – nadpis">
            <TextInput value={content.wellness.kids.heading} onChange={(v) => patchWellness({ kids: { ...content.wellness.kids, heading: v } })} />
          </Field>
          <Field label="Detský kútik – popis">
            <TextArea value={content.wellness.kids.description} onChange={(v) => patchWellness({ kids: { ...content.wellness.kids, description: v } })} />
          </Field>

          <Field label="Praktické info – nadpis">
            <TextInput value={content.wellness.infoHeading} onChange={(v) => patchWellness({ infoHeading: v })} />
          </Field>
          <div className="space-y-2">
            {content.wellness.infoItems.map((it) => (
              <div key={it.id} className="grid grid-cols-2 sm:grid-cols-12 gap-2 items-end">
                <div className="sm:col-span-3">
                  <Field label="Ikona">
                    <IconSelect value={it.iconKey} onChange={(v) => updInfo(it.id, { iconKey: v })} />
                  </Field>
                </div>
                <div className="sm:col-span-4">
                  <Field label="Nadpis">
                    <TextInput value={it.title} onChange={(v) => updInfo(it.id, { title: v })} />
                  </Field>
                </div>
                <div className="sm:col-span-4">
                  <Field label="Popis">
                    <TextInput value={it.desc} onChange={(v) => updInfo(it.id, { desc: v })} />
                  </Field>
                </div>
                <div className="sm:col-span-1 pb-2">
                  <button type="button" onClick={() => delInfo(it.id)} className="text-red-600 hover:bg-red-50 rounded p-1" aria-label="Zmazať">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
            <button type="button" onClick={addInfo} className="inline-flex items-center gap-2 text-forest font-medium text-sm hover:text-forest-dark">
              <Plus className="w-4 h-4" /> Pridať položku
            </button>
          </div>
        </div>
      </Card>

      <Card title="Stránka Okolie – texty a atrakcie">
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="Nadpis stránky">
              <TextInput value={content.okolie.headerTitle} onChange={(v) => patchOkolie({ headerTitle: v })} />
            </Field>
            <Field label="Podnadpis stránky">
              <TextInput value={content.okolie.headerSubtitle} onChange={(v) => patchOkolie({ headerSubtitle: v })} />
            </Field>
          </div>
          <Field label="Nadpis sekcie">
            <TextInput value={content.okolie.heading} onChange={(v) => patchOkolie({ heading: v })} />
          </Field>
          <Field label="Popis sekcie">
            <TextInput value={content.okolie.description} onChange={(v) => patchOkolie({ description: v })} />
          </Field>

          <p className="text-sm font-medium text-charcoal pt-2">Atrakcie</p>
          <div className="space-y-4">
            {content.okolie.attractions.map((a) => (
              <div key={a.id} className="border border-cream-dark rounded-xl p-3 space-y-3">
                <SingleImageEditor
                  image={a.image}
                  onChange={(img) => updAttraction(a.id, { image: img })}
                />
                <div className="grid sm:grid-cols-3 gap-2">
                  <Field label="Názov">
                    <TextInput value={a.title} onChange={(v) => updAttraction(a.id, { title: v })} />
                  </Field>
                  <Field label="Podnadpis">
                    <TextInput value={a.subtitle} onChange={(v) => updAttraction(a.id, { subtitle: v })} />
                  </Field>
                  <Field label="Vzdialenosť (km)">
                    <TextInput value={a.distance} onChange={(v) => updAttraction(a.id, { distance: v })} />
                  </Field>
                </div>
                <button type="button" onClick={() => delAttraction(a.id)} className="inline-flex items-center gap-1.5 text-red-600 text-sm hover:bg-red-50 rounded px-2 py-1">
                  <Trash2 className="w-4 h-4" /> Zmazať atrakciu
                </button>
              </div>
            ))}
            <button type="button" onClick={addAttraction} className="inline-flex items-center gap-2 text-forest font-medium text-sm hover:text-forest-dark">
              <Plus className="w-4 h-4" /> Pridať atrakciu
            </button>
          </div>
          <Field label="Poznámka pod atrakciami">
            <TextInput value={content.okolie.footnote} onChange={(v) => patchOkolie({ footnote: v })} />
          </Field>
        </div>
      </Card>

      <Card title="Stránka Kontakt – texty">
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="Nadpis stránky">
              <TextInput value={content.contact.headerTitle} onChange={(v) => patchContact({ headerTitle: v })} />
            </Field>
            <Field label="Podnadpis stránky">
              <TextInput value={content.contact.headerSubtitle} onChange={(v) => patchContact({ headerSubtitle: v })} />
            </Field>
          </div>
          <Field label="Rezervácia – nadpis">
            <TextInput value={content.contact.reservationHeading} onChange={(v) => patchContact({ reservationHeading: v })} />
          </Field>
          <Field label="Rezervácia – text">
            <TextArea value={content.contact.reservationText} onChange={(v) => patchContact({ reservationText: v })} />
          </Field>

          <p className="text-sm font-medium text-charcoal pt-2">Praktické informácie</p>
          <div className="space-y-2">
            {content.contact.practicalInfo.map((it) => (
              <div key={it.id} className="grid grid-cols-2 sm:grid-cols-12 gap-2 items-end">
                <div className="sm:col-span-3">
                  <Field label="Ikona">
                    <IconSelect value={it.iconKey} onChange={(v) => updPractical(it.id, { iconKey: v })} />
                  </Field>
                </div>
                <div className="sm:col-span-4">
                  <Field label="Označenie">
                    <TextInput value={it.label} onChange={(v) => updPractical(it.id, { label: v })} />
                  </Field>
                </div>
                <div className="sm:col-span-4">
                  <Field label="Hodnota">
                    <TextInput value={it.value} onChange={(v) => updPractical(it.id, { value: v })} />
                  </Field>
                </div>
                <div className="sm:col-span-1 pb-2">
                  <button type="button" onClick={() => delPractical(it.id)} className="text-red-600 hover:bg-red-50 rounded p-1" aria-label="Zmazať">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
            <button type="button" onClick={addPractical} className="inline-flex items-center gap-2 text-forest font-medium text-sm hover:text-forest-dark">
              <Plus className="w-4 h-4" /> Pridať informáciu
            </button>
          </div>

          <Field label="Mapa – nadpis">
            <TextInput value={content.contact.mapHeading} onChange={(v) => patchContact({ mapHeading: v })} />
          </Field>
          <Field label="Adresa">
            <TextInput value={content.contact.address} onChange={(v) => patchContact({ address: v })} />
          </Field>
          <Field label="GPS">
            <TextInput value={content.contact.gps} onChange={(v) => patchContact({ gps: v })} />
          </Field>
          <Field label="Mapa – URL vloženej Google mapy (embed src)">
            <TextArea value={content.contact.mapEmbedUrl} onChange={(v) => patchContact({ mapEmbedUrl: v })} />
          </Field>
          <Field label="Poznámka o ceste">
            <TextInput value={content.contact.travelNote} onChange={(v) => patchContact({ travelNote: v })} />
          </Field>
        </div>
      </Card>
    </div>
  );
}
