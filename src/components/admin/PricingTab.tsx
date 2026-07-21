"use client";

import type { Dispatch, SetStateAction } from "react";
import { Plus, Trash2 } from "lucide-react";
import type {
  PricingSeason,
  ServicePrice,
  SiteContent,
} from "@/lib/content-types";
import { ICON_KEYS } from "@/lib/icons";
import { Card, Field, NumberInput, TextInput, inputCls } from "./ui";

type Setter = Dispatch<SetStateAction<SiteContent>>;

function IconSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={inputCls}
    >
      {ICON_KEYS.map((k) => (
        <option key={k} value={k}>
          {k}
        </option>
      ))}
    </select>
  );
}

export default function PricingTab({
  content,
  setContent,
}: {
  content: SiteContent;
  setContent: Setter;
}) {
  const pricing = content.pricing;

  const patchPricing = (patch: Partial<SiteContent["pricing"]>) =>
    setContent((c) => ({ ...c, pricing: { ...c.pricing, ...patch } }));

  const updateSeason = (id: string, patch: Partial<PricingSeason>) =>
    patchPricing({
      seasons: pricing.seasons.map((s) =>
        s.id === id ? { ...s, ...patch } : s
      ),
    });

  const addSeason = () =>
    patchPricing({
      seasons: [
        ...pricing.seasons,
        {
          id: crypto.randomUUID(),
          name: "Nová sezóna",
          dates: "",
          price: 0,
          minNights: 1,
        },
      ],
    });

  const removeSeason = (id: string) =>
    patchPricing({ seasons: pricing.seasons.filter((s) => s.id !== id) });

  const updateService = (id: string, patch: Partial<ServicePrice>) =>
    patchPricing({
      services: pricing.services.map((s) =>
        s.id === id ? { ...s, ...patch } : s
      ),
    });

  return (
    <div className="space-y-4">
      <Card title="Cenník – nadpis">
        <div className="space-y-3">
          <Field label="Nadpis sekcie">
            <TextInput
              value={pricing.heading}
              onChange={(v) => patchPricing({ heading: v })}
            />
          </Field>
          <Field label="Poznámka pod nadpisom">
            <TextInput
              value={pricing.note}
              onChange={(v) => patchPricing({ note: v })}
            />
          </Field>
        </div>
      </Card>

      <Card title="Sezóny a ceny">
        <div className="space-y-3">
          {pricing.seasons.map((s) => (
            <div
              key={s.id}
              className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-end border-b border-cream-dark pb-3"
            >
              <div className="sm:col-span-4">
                <Field label="Názov">
                  <TextInput
                    value={s.name}
                    onChange={(v) => updateSeason(s.id, { name: v })}
                  />
                </Field>
              </div>
              <div className="sm:col-span-3">
                <Field label="Termín">
                  <TextInput
                    value={s.dates}
                    onChange={(v) => updateSeason(s.id, { dates: v })}
                  />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Cena €">
                  <NumberInput
                    value={s.price}
                    onChange={(v) => updateSeason(s.id, { price: v })}
                  />
                </Field>
              </div>
              <div className="sm:col-span-1">
                <Field label="Min. nocí">
                  <NumberInput
                    value={s.minNights}
                    onChange={(v) => updateSeason(s.id, { minNights: v })}
                  />
                </Field>
              </div>
              <div className="sm:col-span-2 flex items-center gap-3 pb-2">
                <label className="inline-flex items-center gap-1.5 text-sm text-charcoal">
                  <input
                    type="checkbox"
                    checked={!!s.highlight}
                    onChange={(e) =>
                      updateSeason(s.id, { highlight: e.target.checked })
                    }
                  />
                  Zvýrazniť
                </label>
                <button
                  type="button"
                  onClick={() => removeSeason(s.id)}
                  className="text-red-600 hover:bg-red-50 rounded p-1"
                  aria-label="Zmazať sezónu"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addSeason}
            className="inline-flex items-center gap-2 text-forest font-medium text-sm hover:text-forest-dark"
          >
            <Plus className="w-4 h-4" /> Pridať sezónu
          </button>
        </div>
      </Card>

      <Card title="Doplatok za služby">
        <div className="space-y-4">
          <Field label="Nadpis sekcie služieb">
            <TextInput
              value={pricing.servicesHeading}
              onChange={(v) => patchPricing({ servicesHeading: v })}
            />
          </Field>

          {pricing.services.map((s) => (
            <div
              key={s.id}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 items-end border-t border-cream-dark pt-3"
            >
              <Field label="Názov">
                <TextInput
                  value={s.name}
                  onChange={(v) => updateService(s.id, { name: v })}
                />
              </Field>
              <Field label="Cena €">
                <NumberInput
                  value={s.price}
                  onChange={(v) => updateService(s.id, { price: v })}
                />
              </Field>
              <Field label="Jednotka">
                <TextInput
                  value={s.unit}
                  onChange={(v) => updateService(s.id, { unit: v })}
                />
              </Field>
              <Field label="Ikona">
                <IconSelect
                  value={s.iconKey}
                  onChange={(v) => updateService(s.id, { iconKey: v })}
                />
              </Field>
            </div>
          ))}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 items-end border-t border-cream-dark pt-3">
            <Field label="Kombinácia – názov">
              <TextInput
                value={pricing.combined.name}
                onChange={(v) =>
                  patchPricing({
                    combined: { ...pricing.combined, name: v },
                  })
                }
              />
            </Field>
            <Field label="Cena €">
              <NumberInput
                value={pricing.combined.price}
                onChange={(v) =>
                  patchPricing({
                    combined: { ...pricing.combined, price: v },
                  })
                }
              />
            </Field>
            <Field label="Jednotka">
              <TextInput
                value={pricing.combined.unit}
                onChange={(v) =>
                  patchPricing({
                    combined: { ...pricing.combined, unit: v },
                  })
                }
              />
            </Field>
            <Field label="Ikona">
              <IconSelect
                value={pricing.combined.iconKey}
                onChange={(v) =>
                  patchPricing({
                    combined: { ...pricing.combined, iconKey: v },
                  })
                }
              />
            </Field>
          </div>

          <Field label="Text pod cenníkom (pred odkazom na megaubytovanie)">
            <TextInput
              value={pricing.footnote}
              onChange={(v) => patchPricing({ footnote: v })}
            />
          </Field>
        </div>
      </Card>
    </div>
  );
}
