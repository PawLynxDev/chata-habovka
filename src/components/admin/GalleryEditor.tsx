"use client";

import { useState } from "react";
import Image from "next/image";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
  useSortable,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Trash2, Upload, Loader2 } from "lucide-react";
import type { GalleryImage } from "@/lib/content-types";
import { uploadImage } from "@/lib/upload-client";
import { inputCls } from "./ui";

function SortableImage({
  image,
  onAlt,
  onDelete,
}: {
  image: GalleryImage;
  onAlt: (id: string, alt: string) => void;
  onDelete: (id: string) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: image.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-cream rounded-xl border border-cream-dark p-2"
    >
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-cream-dark">
        {image.url && (
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="200px"
            className="object-cover"
          />
        )}
        <button
          type="button"
          {...attributes}
          {...listeners}
          className="absolute top-1 left-1 bg-white/85 rounded p-1 cursor-grab active:cursor-grabbing"
          aria-label="Presunúť fotku"
        >
          <GripVertical className="w-4 h-4 text-charcoal" />
        </button>
        <button
          type="button"
          onClick={() => onDelete(image.id)}
          className="absolute top-1 right-1 bg-white/85 rounded p-1 hover:bg-red-50"
          aria-label="Zmazať fotku"
        >
          <Trash2 className="w-4 h-4 text-red-600" />
        </button>
      </div>
      <input
        value={image.alt}
        onChange={(e) => onAlt(image.id, e.target.value)}
        placeholder="Popis fotky (alt)"
        className={`${inputCls} mt-2 text-xs`}
      />
    </div>
  );
}

export default function GalleryEditor({
  images,
  onChange,
}: {
  images: GalleryImage[];
  onChange: (imgs: GalleryImage[]) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  function handleDragEnd(e: DragEndEvent) {
    const { active, over } = e;
    if (over && active.id !== over.id) {
      const oldIndex = images.findIndex((i) => i.id === active.id);
      const newIndex = images.findIndex((i) => i.id === over.id);
      if (oldIndex !== -1 && newIndex !== -1) {
        onChange(arrayMove(images, oldIndex, newIndex));
      }
    }
  }

  function setAlt(id: string, alt: string) {
    onChange(images.map((i) => (i.id === id ? { ...i, alt } : i)));
  }
  function remove(id: string) {
    onChange(images.filter((i) => i.id !== id));
  }

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);
    setError("");
    const added: GalleryImage[] = [];
    for (const file of Array.from(files)) {
      try {
        const url = await uploadImage(file);
        added.push({ id: crypto.randomUUID(), url, alt: "" });
      } catch (e) {
        setError(`Nahrávanie zlyhalo: ${(e as Error).message}`);
      }
    }
    if (added.length) onChange([...images, ...added]);
    setUploading(false);
  }

  return (
    <div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={images.map((i) => i.id)}
          strategy={rectSortingStrategy}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {images.map((image) => (
              <SortableImage
                key={image.id}
                image={image}
                onAlt={setAlt}
                onDelete={remove}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {images.length === 0 && (
        <p className="text-sm text-charcoal-light py-6 text-center">
          Žiadne fotky. Pridajte nové nižšie.
        </p>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <label className="inline-flex items-center gap-2 rounded-full bg-forest text-white px-4 py-2 text-sm font-medium cursor-pointer hover:bg-forest-light transition">
          {uploading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Upload className="w-4 h-4" />
          )}
          {uploading ? "Nahrávam…" : "Pridať fotky"}
          <input
            type="file"
            accept="image/*"
            multiple
            hidden
            disabled={uploading}
            onChange={(e) => handleFiles(e.target.files)}
          />
        </label>
        <span className="text-xs text-charcoal-light/70">
          Potiahnutím za úchyt zmeníte poradie.
        </span>
      </div>
      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
    </div>
  );
}
