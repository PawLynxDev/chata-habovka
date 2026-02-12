import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interier",
  description:
    "Pozrite si interier nasej luxusnej horskej chaty - obyvacka, kuchyna, spalne a kupelne.",
};

export default function InterierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
