interface BookingButtonProps {
  variant?: "primary" | "outline";
  size?: "default" | "large";
  className?: string;
}

const BOOKING_URL =
  "https://www.megaubytovanie.sk/chata-za-studenym-potokom";

export default function BookingButton({
  variant = "primary",
  size = "default",
  className = "",
}: BookingButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-sans font-medium rounded-full transition-all duration-300 cursor-pointer";

  const sizeClasses =
    size === "large" ? "px-8 py-4 text-lg" : "px-6 py-3 text-sm";

  const variantClasses =
    variant === "primary"
      ? "bg-forest text-white hover:bg-forest-light active:bg-forest-dark shadow-sm hover:shadow-md"
      : "border-2 border-forest text-forest hover:bg-forest hover:text-white active:bg-forest-dark";

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`.trim()}
    >
      Rezervovať pobyt
    </a>
  );
}
