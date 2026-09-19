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
  Droplets,
  ShowerHead,
  WashingMachine,
  Shirt,
  Bed,
  Blinds,
  Archive,
  Baby,
  Tv,
  AirVent,
  Fan,
  Cctv,
  Laptop,
  CookingPot,
  Refrigerator,
  Microwave,
  Coffee,
  Wine,
  Blender,
  Sun,
} from "lucide-react";

export const ICONS = {
  // Existing icons
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

  // Bathroom
  droplets: Droplets,
  "shower-head": ShowerHead,

  // Bedroom and laundry
  "washing-machine": WashingMachine,
  shirt: Shirt,
  bed: Bed,
  blinds: Blinds,
  archive: Archive,
  baby: Baby,

  // Entertainment
  tv: Tv,

  // Heating and cooling
  "air-vent": AirVent,
  fan: Fan,

  // Home safety
  cctv: Cctv,

  // Internet and office
  laptop: Laptop,

  // Kitchen and dining
  "cooking-pot": CookingPot,
  refrigerator: Refrigerator,
  microwave: Microwave,
  coffee: Coffee,
  wine: Wine,
  blender: Blender,

  // Outdoor
  sun: Sun,
};

export function Icon({ name, ...props }) {
  const Cmp = ICONS[name] || Tag;

  return <Cmp {...props} />;
}