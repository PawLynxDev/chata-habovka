import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interiér chaty - Spálne, Obývačka, Kuchyňa",
  description:
    "Pozrite si interiér Chaty za Studeným potokom v Habovke. 4 spálne pre 13 hostí, plne vybavená kuchyňa, útulná obývačka s krbom a kúpeľne s podlahovým kúrením.",
  alternates: {
    canonical: "https://chatazastudenympotokom.sk/interier",
  },
};

export default function InterierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
