// Mapa kľúč -> Lucide ikona. content.json ukladá len string `iconKey`
// (komponenty ikon sa nedajú serializovať do JSON). Admin ponúka tieto kľúče v dropdowne.

import { createElement } from "react";
import type { LucideIcon, LucideProps } from "lucide-react";
import {
  BedDouble,
  DoorOpen,
  Bath,
  Wifi,
  Flame,
  Heater,
  Snowflake,
  Car,
  Baby,
  Ticket,
  Waves,
  Sparkles,
  Bike,
  Dog,
  MapPin,
  Navigation,
  Clock,
  LogOut,
  Users,
  CigaretteOff,
  PawPrint,
  Lock,
  Thermometer,
  Languages,
  Smartphone,
  Utensils,
  ShoppingCart,
  Bus,
  TrainFront,
  HelpCircle,
} from "lucide-react";

export const ICONS: Record<string, LucideIcon> = {
  "bed-double": BedDouble,
  "door-open": DoorOpen,
  bath: Bath,
  wifi: Wifi,
  flame: Flame,
  heater: Heater,
  snowflake: Snowflake,
  car: Car,
  baby: Baby,
  ticket: Ticket,
  waves: Waves,
  sparkles: Sparkles,
  bike: Bike,
  dog: Dog,
  "map-pin": MapPin,
  navigation: Navigation,
  clock: Clock,
  "log-out": LogOut,
  users: Users,
  "cigarette-off": CigaretteOff,
  "paw-print": PawPrint,
  lock: Lock,
  thermometer: Thermometer,
  languages: Languages,
  smartphone: Smartphone,
  utensils: Utensils,
  "shopping-cart": ShoppingCart,
  bus: Bus,
  "train-front": TrainFront,
};

/** Zoznam povolených kľúčov pre admin dropdown. */
export const ICON_KEYS = Object.keys(ICONS);

/** Vráti komponent ikony pre daný kľúč (fallback HelpCircle, ak kľúč neexistuje). */
export function getIcon(key: string): LucideIcon {
  return ICONS[key] ?? HelpCircle;
}

/** Vykreslí ikonu podľa kľúča. Použiť namiesto getIcon() priamo v JSX. */
export function DynamicIcon({
  iconKey,
  ...props
}: { iconKey: string } & LucideProps) {
  return createElement(getIcon(iconKey), props);
}
