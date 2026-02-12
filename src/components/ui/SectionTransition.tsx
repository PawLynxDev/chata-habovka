interface SectionTransitionProps {
  from?: string;
  to?: string;
  variant?: "wave" | "curve" | "angle";
}

function getWavePath(variant: "wave" | "curve" | "angle"): string {
  switch (variant) {
    case "wave":
      return "M0,64 C320,120 480,0 720,64 C960,128 1120,8 1440,64 L1440,150 L0,150 Z";
    case "curve":
      return "M0,96 Q720,0 1440,96 L1440,150 L0,150 Z";
    case "angle":
      return "M0,128 L720,32 L1440,128 L1440,150 L0,150 Z";
  }
}

export default function SectionTransition({
  from = "#FAF6F0",
  to = "#2C2C2C",
  variant = "wave",
}: SectionTransitionProps) {
  const wavePath = getWavePath(variant);

  return (
    <div className="relative w-full leading-[0] -my-[3px]">
      <svg
        className="block w-full"
        viewBox="0 -2 1440 152"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: "clamp(50px, 8vw, 100px)" }}
      >
        {/* Background: 'from' color fills entire area including 2px bleed */}
        <rect x="-2" y="-4" width="1444" height="158" fill={from} />
        {/* Wave: 'to' color with bottom extending beyond viewBox */}
        <path d={wavePath} fill={to} />
      </svg>
    </div>
  );
}
