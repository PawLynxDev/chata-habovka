import type { ReactNode } from "react";

interface IconCardProps {
  icon: ReactNode;
  label: string;
  description?: string;
}

export default function IconCard({ icon, label, description }: IconCardProps) {
  return (
    <div
      className="
        flex flex-col items-center text-center
        bg-cream rounded-xl
        border border-cream-dark
        p-6
        transition-shadow duration-300
        hover:shadow-md
      "
    >
      <div className="text-forest mb-4 flex items-center justify-center w-12 h-12">
        {icon}
      </div>
      <h3 className="font-serif text-lg font-semibold text-charcoal mb-1">
        {label}
      </h3>
      {description && (
        <p className="text-sm text-charcoal/60 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
