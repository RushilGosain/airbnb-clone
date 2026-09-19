import {
  Utensils,
  Wifi,
  Briefcase,
  Car,
  Waves,
  Flame,
  PawPrint,
  Camera,
  BellOff,
  Dumbbell,
  SprayCan,
  CalendarDays,
  DoorOpen,
  CalendarX,
  KeyRound,
  Shield,
  BadgeCheck,
  MessageCircle,
  Map,
  Tag,
} from "lucide-react";

export const ICONS = {
  utensils: Utensils,
  wifi: Wifi,
  briefcase: Briefcase,
  car: Car,
  waves: Waves,
  flame: Flame,
  "paw-print": PawPrint,
  camera: Camera,
  "alarm-smoke": BellOff,
  dumbbell: Dumbbell,
  "spray-can": SprayCan,
  "calendar-days": CalendarDays,
  "door-open": DoorOpen,
  "calendar-x": CalendarX,
  "key-round": KeyRound,
  shield: Shield,
  "badge-check": BadgeCheck,
  "message-circle": MessageCircle,
  map: Map,
  tag: Tag,
};

export function Icon({ name, ...props }) {
  const Cmp = ICONS[name] || Tag;
  return <Cmp {...props} />;
}
