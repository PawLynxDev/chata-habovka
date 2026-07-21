"use client";

import { useState } from "react";
import Image from "next/image";
import { Upload, Loader2 } from "lucide-react";
import type { GalleryImage } from "@/lib/content-types";
import { uploadImage } from "@/lib/upload-client";
import { inputCls } from "./ui";

export default function SingleImageEditor({
  image,
  onChange,
}: {
  image: GalleryImage;
  onChange: (img: GalleryImage) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleFile(files: FileList | null) {
    const file = files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const url = await uploadImage(file);
      onChange({ ...image, url });
    } catch (e) {
      setError(`Nahrávanie zlyhalo: ${(e as Error).message}`);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative w-full sm:w-48 aspect-[4/3] rounded-lg overflow-hidden bg-cream-dark shrink-0">
        {image.url && (
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="200px"
            className="object-cover"
          />
        )}
      </div>
      <div className="flex-1 space-y-3">
        <label className="inline-flex items-center gap-2 rounded-full bg-forest text-white px-4 py-2 text-sm font-medium cursor-pointer hover:bg-forest-light transition">
          {uploading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Upload className="w-4 h-4" />
          )}
          {uploading ? "Nahrávam…" : "Nahradiť fotku"}
          <input
            type="file"
            accept="image/*"
            hidden
            disabled={uploading}
            onChange={(e) => handleFile(e.target.files)}
          />
        </label>
        <input
          value={image.alt}
          onChange={(e) => onChange({ ...image, alt: e.target.value })}
          placeholder="Popis fotky (alt)"
          className={inputCls}
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
      </div>
    </div>
  );
}
