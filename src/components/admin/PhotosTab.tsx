"use client";

import { useState, type Dispatch, type SetStateAction } from "react";
import type { SiteContent } from "@/lib/content-types";
import { GALLERIES } from "@/lib/galleries";
import GalleryEditor from "./GalleryEditor";
import SingleImageEditor from "./SingleImageEditor";
import { Card, inputCls } from "./ui";

type Setter = Dispatch<SetStateAction<SiteContent>>;

export default function PhotosTab({
  content,
  setContent,
}: {
  content: SiteContent;
  setContent: Setter;
}) {
  const [selected, setSelected] = useState(GALLERIES[0].key);
  const desc = GALLERIES.find((g) => g.key === selected) ?? GALLERIES[0];

  return (
    <div className="space-y-4">
      <Card>
        <label className="block">
          <span className="block text-sm font-medium text-charcoal mb-1">
            Vyberte galériu alebo fotku
          </span>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className={inputCls}
          >
            {GALLERIES.map((g) => (
              <option key={g.key} value={g.key}>
                {g.label}
              </option>
            ))}
          </select>
        </label>
      </Card>

      <Card title={desc.label}>
        {desc.type === "multi" ? (
          <GalleryEditor
            images={desc.get(content)}
            onChange={(imgs) => setContent((c) => desc.set(c, imgs))}
          />
        ) : (
          <SingleImageEditor
            image={desc.get(content)}
            onChange={(img) => setContent((c) => desc.set(c, img))}
          />
        )}
      </Card>
    </div>
  );
}
