// All content below (copy, prices, review text, host details, amenities)
// is transcribed directly from screenshots of the reference site:
// https://airbnb-clone-umber-two.vercel.app/
//
// Photos are placeholder stock images (picsum.photos, seeded so they're
// stable across reloads) standing in for the real listing photography —
// swap the `img()` seeds below for real asset URLs before shipping.
import {
  Car,
  Waves,
  Dumbbell,
  PawPrint,
  SprayCan,
  CalendarDays,
  DoorOpen,
  Wifi,
  Tv,
  Bed,
  Shirt,
  Fan,
  Coffee,
  Utensils,
} from "lucide-react";
const img1 = (seed, w = 1200, h = 900) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const img = (filename) => `/images/${filename}`;
export const photoCategories = [
  {
    id: "living-room-1",
    label: "Living room 1",
    tags: ["Sofa", "Air conditioning", "Ceiling fan", "TV"],
    cover: img("Living Room 1.png"),
    photos: [img("Living Room 1.png"), img("Living Room 1(2).png"), img("Living Room 1(3).png")],
  },
  {
    id: "living-room-2",
    label: "Living room 2",
    tags: ["Ceiling fan", "Hot tub"],
    cover: img("Living Room 2.png"),
    photos: [img("Living Room 2.png"), img("Living Room 2(2).png"), img("Living Room 2(3).png"), img("Living Room 2(4).png"),img("Living Room 2(5).png"),img("Living Room 2(6).png")],
  },
  {
    id: "full-kitchen",
    label: "Full kitchen",
    tags: [
      "Freezer",
      "Fridge",
      "Blender",
      "Cooker",
      "Cooking basics",
      "Kettle",
      "Microwave",
      "Toaster",
      "Wine glasses",
      "Coffee",
      "Crockery and cutlery",
    ],
    cover: img("Full Kitchen.png"),
    photos: [img("Full Kitchen.png"), img("Full Kitchen 2.png")],
  },
  {
    id: "bedroom",
    label: "Bedroom",
    tags: [
      "Double bed",
      "Air conditioning",
      "Bed linen",
      "Ceiling fan",
      "Clothes storage",
      "Cot",
      "Hangers",
      "Iron",
      "Room-darkening blinds",
      "Cleaning available during stay",
      "Cleaning products",
      "Long-term stays allowed",
      "Private entrance",
      "Wifi",
    ],
    cover: img("Bedroom.png"),
    photos: [img("Bedroom.png"),img("Bedroom (1).png"), img("Bedroom (2).png"), img("Bedroom (3).png"), img("Bedroom (4).png"),img("Bedroom (5).png")],
  },
  {
    id: "full-bathroom",
    label: "Full bathroom",
    tags: ["Hairdryer", "Hot water", "Shampoo", "Shower gel"],
    cover: img("Full bathroom.png"),
    photos: [img("Full bathroom.png")],
  },
  {
    id: "gym",
    label: "Gym",
    tags: ["Air conditioning", "Gym", "Exercise equipment", "Ceiling fan"],
    cover: img("Gym.png"),
    photos: [img("Gym.png"), img("Gym (1).png"), img("Gym (2).png"), img("Gym (3).png"), img("Gym (4).png")],
  },
  {
    id: "exterior",
    label: "Exterior",
    tags: [],
    cover: img("Exterior.png"),
    photos: [img("Exterior.png"), img("Exterior(1).png"), img("Exterior(2).png"), img("Exterior(3).png"), img("Exterior(4).png")],
  },
  {
    id: "pool",
    label: "Pool",
    tags: ["Pool"],
    cover: img("Pool(1).png"),
    photos: [img("Pool.png"), img("Pool(1).png")],
  
  },
  {
    id: "additional-photos",
    label: "Additional photos",
    tags: [],
    cover: img("Additional photos.png"),
    photos: [img("Additional photos.png"), img("Additional photos(1).png"), img("Additional photos(2).png"),img("Additional photos(3).png")],
  },
];

// Flat ordered list of every photo, used by the lightbox for prev/next
export const allPhotos = photoCategories.flatMap((c) =>
  c.photos.map((src) => ({ src, category: c.label }))
);

export const heroImages = [
  photoCategories[0].photos[1], // Living room 1
  photoCategories[1].photos[0], // Living room 2
  photoCategories[2].photos[0], // Kitchen
  photoCategories[3].photos[0], // Bedroom
  photoCategories[7].photos[0], // Pool
];

export const listing = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  propertyType: "Entire serviced apartment in Candolim, India",
  guests: 5,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  rating: 4.95,
  reviewCount: 19,
  isGuestFavourite: true,
  location: {
    city: "Candolim, Goa, India",
    neighbourhood:
      "Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.",
  },
  price: {
    amount: 28499,
    nights: 5,
    currency: "₹",
  },
  dates: {
    checkIn: "10/20/2026",
    checkOut: "10/25/2026",
    checkInLabel: "20 Oct 2026",
    checkOutLabel: "25 Oct 2026",
    freeCancellationBefore: "19 October",
  },
  guestsSelected: 5,
  highlights: [
    {
      icon: "waves",
      title: "Outdoor entertainment",
      description: "The pool and alfresco dining are great for summer trips.",
    },
    {
      icon: "fan",
      title: "Designed for staying cool",
      description: "Beat the heat with the A/C and ceiling fan.",
    },
    {
      icon: "door-open",
      title: "Self check-in",
      description: "You can check in with the building staff.",
    },
  ],
  description:
    "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴",
  rooms: [
    { label: "Bedroom", detail: "1 double bed", image: img("Bedroom.png") },
    { label: "Living room", detail: "1 sofa", image: img("Living Room 2.png") },
  ],
  amenitiesPreview: [
    { icon: "utensils", label: "Kitchen", available: true },
    { icon: "wifi", label: "Wifi", available: true },
    { icon: "briefcase", label: "Dedicated workspace", available: true },
    { icon: "car", label: "Free parking on premises", available: true },
    { icon: "waves", label: "Pool", available: true },
    { icon: "flame", label: "Hot tub", available: true },
    { icon: "paw-print", label: "Pets allowed", available: true },
    { icon: "camera", label: "Exterior security cameras on property", available: true },
    { icon: "alarm-smoke", label: "Carbon monoxide alarm", available: false },
    { icon: "alarm-smoke", label: "Smoke alarm", available: false },
  ],
 amenitiesTotal: 50,

amenityGroups: [
  {
    title: "Bathroom",
    items: [
      { icon: "hairdryer", label: "Hairdryer" },
      { icon: "spray-can", label: "Cleaning products" },
      { icon: "droplets", label: "Shampoo" },
      { icon: "waves", label: "Hot water" },
      { icon: "shower-head", label: "Shower gel" },
    ],
  },

  {
    title: "Bedroom and laundry",
    items: [
      { icon: "washing-machine", label: "Washing machine" },
      { icon: "shirt", label: "Hangers" },
      { icon: "bed", label: "Bed linen" },
      { icon: "blinds", label: "Room-darkening blinds" },
      { icon: "shirt", label: "Iron" },
      { icon: "archive", label: "Clothes storage" },
      { icon: "baby", label: "Cot" },
    ],
  },

  {
    title: "Entertainment",
    items: [
      { icon: "tv", label: "TV" },
    ],
  },

  {
    title: "Family",
    items: [
      { icon: "baby", label: "Cot" },
    ],
  },

  {
    title: "Heating and cooling",
    items: [
      { icon: "air-vent", label: "Air conditioning" },
      { icon: "fan", label: "Ceiling fan" },
    ],
  },

  {
    title: "Home safety",
    items: [
      {
        icon: "cctv",
        label: "Exterior security cameras on property",
      },
      {
        icon: "alarm-smoke",
        label: "Carbon monoxide alarm",
      },
      {
        icon: "alarm-smoke",
        label: "Smoke alarm",
      },
    ],
  },

  {
    title: "Internet and office",
    items: [
      { icon: "wifi", label: "Wifi" },
      { icon: "laptop", label: "Dedicated workspace" },
    ],
  },

  {
    title: "Kitchen and dining",
    items: [
      { icon: "cooking-pot", label: "Kitchen" },
      { icon: "refrigerator", label: "Fridge" },
      { icon: "refrigerator", label: "Freezer" },
      { icon: "microwave", label: "Microwave" },
      { icon: "cooking-pot", label: "Cooking basics" },
      { icon: "utensils", label: "Crockery and cutlery" },
      { icon: "coffee", label: "Kettle" },
      { icon: "coffee", label: "Coffee" },
      { icon: "wine", label: "Wine glasses" },
      { icon: "utensils", label: "Toaster" },
      { icon: "blender", label: "Blender" },
      { icon: "cooking-pot", label: "Cooker" },
    ],
  },

  {
    title: "Location features",
    items: [
      { icon: "door-open", label: "Private entrance" },
    ],
  },

  {
    title: "Outdoor",
    items: [
      { icon: "sun", label: "Patio or balcony" },
      { icon: "utensils", label: "Outdoor dining area" },
    ],
  },

  {
    title: "Parking and facilities",
    items: [
      { icon: "car", label: "Free parking on premises" },
      { icon: "waves", label: "Pool" },
      { icon: "waves", label: "Hot tub" },
      { icon: "dumbbell", label: "Gym" },
    ],
  },

  {
    title: "Services",
    items: [
      { icon: "paw-print", label: "Pets allowed" },
      {
        icon: "spray-can",
        label: "Cleaning available during stay",
      },
      {
        icon: "calendar-days",
        label: "Long-term stays allowed",
      },
      { icon: "door-open", label: "Self check-in" },
    ],
  },
],
  thingsToKnow: [
    {
      icon: "calendar-x",
      title: "Cancellation policy",
      lines: [
        "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.",
        "Review this host's full policy for details.",
      ],
      linkLabel: "Learn more",
    },
    {
      icon: "key-round",
      title: "House rules",
      lines: ["Check-in after 2:00 pm", "Checkout before 11:00 am", "3 guests maximum"],
      linkLabel: "Learn more",
    },
    {
      icon: "shield",
      title: "Safety & property",
      lines: [
        "Carbon monoxide alarm not reported",
        "Smoke alarm not reported",
        "Exterior security cameras on property",
      ],
      linkLabel: "Learn more",
    },
  ],
  reviewBreakdown: {
    overall: 4.95,
    distribution: [
      { stars: 5, pct: 95 },
      { stars: 4, pct: 5 },
      { stars: 3, pct: 0 },
      { stars: 2, pct: 0 },
      { stars: 1, pct: 0 },
    ],
    categories: [
      { icon: "spray-can", label: "Cleanliness", score: 5.0 },
      { icon: "badge-check", label: "Accuracy", score: 5.0 },
      { icon: "key-round", label: "Check-in", score: 5.0 },
      { icon: "message-circle", label: "Communication", score: 5.0 },
      { icon: "map", label: "Location", score: 4.8 },
      { icon: "tag", label: "Value", score: 4.8 },
    ],
  },
  reviewTags: [
    { icon: "🛋️", label: "Comfort", count: 6 },
    { icon: "✅", label: "Accuracy", count: 5 },
    { icon: "🛁", label: "Hot tub", count: 5 },
    { icon: "📦", label: "Condition", count: 4 },
    { icon: "🎁", label: "Hospitality", count: 8 },
    { icon: "🧼", label: "Cleanliness", count: 4 },
    { icon: "🎀", label: "Amenities", count: 2 },
  ],
  reviews: [
    {
      name: "Amit",
      tenure: "2 months on Airbnb",
      rating: 5,
      when: "1 week ago",
      text: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.",
    },
    {
      name: "Aheesh",
      tenure: "3 years on Airbnb",
      rating: 5,
      when: "2 weeks ago",
      text: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.",
    },
    {
      name: "Samiksha",
      tenure: "8 months on Airbnb",
      rating: 5,
      when: "May 2026",
      text: "the host nitish was really great help",
    },
    {
      name: "Vedant",
      tenure: "4 years on Airbnb",
      rating: 5,
      when: "May 2026",
      text: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine….",
    },
    {
      name: "Vaibhav S",
      tenure: "3 years on Airbnb",
      rating: 5,
      when: "May 2026",
      text: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.",
    },
    {
      name: "Mohd",
      tenure: "5 years on Airbnb",
      rating: 5,
      when: "May 2026",
      text: "Great place. Exactly as described in the listing.",
    },
  ],
  host: {
    name: "Mirashya Homes",
    logo: img1("mirashya-host-logo", 200, 200),
    reviews: 1463,
    rating: 4.68,
    yearsHosting: 2,
    bornDecade: "Born in the 80s",
    school: "Where I went to school: NICMAR GOA",
    responseRate: "100%",
    responseTime: "Responds within an hour",
  },
  coHosts: [
    { name: "Sharath", avatar: img1("cohost-sharath", 80, 80) },
    { name: "Aman Dev Pahwa", avatar: img1("cohost-aman", 80, 80) },
    { name: "Maria Karen Priyanka", avatar: img1("cohost-maria", 80, 80) },
    { name: "Simran", avatar: img1("cohost-simran", 80, 80) },
    { name: "Pallavi", avatar: img1("cohost-pallavi", 80, 80) },
    { name: "Sanyukta", avatar: img1("cohost-sanyukta", 80, 80) },
    { name: "Shruti", initials: "S" },
    { name: "Amisha", initials: "A" },
  ],
  nearbyStays: [
    { title: "The Tropical Studio | 5 mins to Beach", price: 22824, rating: 4.96, image: img("nearby-1") },
    { title: "Luxury Casa Bella 1BHK with plunge pool, Calangute", price: 39942, rating: 4.95, image: img("nearby-2") },
    { title: "Kanso by Earthen Window | Jacuzzi | Terrace | Pool", price: 45648, rating: 5.0, image: img("nearby-3") },
    { title: "Luxury Apt | Private Pool | 6 Mins from Beach", price: 48786, rating: 4.93, image: img("nearby-4") },
    { title: "Serendipity Cottage - Calm Stay in Calangute-Baga.", price: 22824, rating: 4.92, image: img("nearby-5") },
  ],
};
