import Image from "next/image";
import { Camera } from "lucide-react";
import imageMap from "@/lib/imageMap";

interface ImagePlaceholderProps {
  /** Priama URL/cesta fotky (Blob URL alebo "/images/..."). Má prednosť pred name. */
  src?: string;
  /** Sémantický kľúč do imageMap (spätná kompatibilita) alebo popis pre fallback box. */
  name?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ImagePlaceholder({
  src,
  name,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: ImagePlaceholderProps) {
  const resolved = src ?? (name ? imageMap[name] : undefined);

  if (resolved) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={resolved}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
          quality={100}
          {...(priority ? { priority: true } : { loading: "lazy" as const })}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`
        flex flex-col items-center justify-center
        bg-cream-dark
        rounded-lg
        aspect-auto min-h-[200px]
        text-charcoal/40
        select-none
        ${className}
      `}
    >
      <Camera className="w-10 h-10 mb-3 opacity-40" strokeWidth={1.5} />
      <span className="text-sm font-sans tracking-wide uppercase opacity-50">
        {name ?? alt}
      </span>
    </div>
  );
}
