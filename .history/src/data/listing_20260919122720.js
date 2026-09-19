// All content below (copy, prices, review text, host details, amenities)
// is transcribed directly from screenshots of the reference site:
// https://airbnb-clone-umber-two.vercel.app/
//
// Photos are placeholder stock images (picsum.photos, seeded so they're
// stable across reloads) standing in for the real listing photography —
// swap the `img()` seeds below for real asset URLs before shipping.

const img = (seed, w = 1200, h = 900) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const photoCategories = [
  {
    id: "living-room-1",
    label: "Living room 1",
    tags: ["Sofa", "Air conditioning", "Ceiling fan", "TV"],
    cover: img("mirashya-lr1-cover"),
    photos: [img("/public/Living Room 1.png"), img("/public/Living Room 1(2).png"), img("mirashya-lr1-c"), img("mirashya-lr1-d")],
  },
  {
    id: "living-room-2",
    label: "Living room 2",
    tags: ["Ceiling fan", "Hot tub"],
    cover: img("mirashya-lr2-cover"),
    photos: [img("mirashya-lr2-cover"), img("mirashya-lr2-b"), img("mirashya-lr2-c"), img("mirashya-lr2-d")],
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
    cover: img("mirashya-kitchen-cover"),
    photos: [img("mirashya-kitchen-cover"), img("mirashya-kitchen-b"), img("mirashya-kitchen-c")],
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
    cover: img("mirashya-bed-cover"),
    photos: [img("mirashya-bed-cover"), img("mirashya-bed-b"), img("mirashya-bed-c"), img("mirashya-bed-d")],
  },
  {
    id: "full-bathroom",
    label: "Full bathroom",
    tags: ["Hairdryer", "Hot water", "Shampoo", "Shower gel"],
    cover: img("mirashya-bath-cover"),
    photos: [img("mirashya-bath-cover")],
  },
  {
    id: "gym",
    label: "Gym",
    tags: ["Air conditioning", "Gym", "Exercise equipment", "Ceiling fan"],
    cover: img("mirashya-gym-cover"),
    photos: [img("mirashya-gym-cover"), img("mirashya-gym-b"), img("mirashya-gym-c")],
  },
  {
    id: "exterior",
    label: "Exterior",
    tags: [],
    cover: img("mirashya-ext-cover"),
    photos: [img("mirashya-ext-cover"), img("mirashya-ext-b"), img("mirashya-ext-c"), img("mirashya-ext-d")],
  },
  {
    id: "pool",
    label: "Pool",
    tags: ["Pool"],
    cover: img("mirashya-pool-cover"),
    photos: [img("mirashya-pool-cover"), img("mirashya-pool-b"), img("mirashya-pool-c")],
  },
  {
    id: "additional-photos",
    label: "Additional photos",
    tags: [],
    cover: img("mirashya-extra-cover"),
    photos: [img("mirashya-extra-cover"), img("mirashya-extra-b"), img("mirashya-extra-c"), img("mirashya-extra-d")],
  },
];

// Flat ordered list of every photo, used by the lightbox for prev/next
export const allPhotos = photoCategories.flatMap((c) =>
  c.photos.map((src) => ({ src, category: c.label }))
);

export const heroImages = [
  photoCategories[0].photos[0],
  photoCategories[3].photos[0],
  photoCategories[1].photos[0],
  photoCategories[7].photos[0],
  photoCategories[2].photos[0],
];

export const listing = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  propertyType: "Entire serviced apartment in Candolim, India",
  guests: 3,
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
    checkIn: "10/18/2026",
    checkOut: "10/23/2026",
    checkInLabel: "18 Oct 2026",
    checkOutLabel: "23 Oct 2026",
    freeCancellationBefore: "17 October",
  },
  guestsSelected: 2,
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
    "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it's ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴",
  rooms: [
    { label: "Bedroom", detail: "1 double bed", image: img("mirashya-bed-cover") },
    { label: "Living room", detail: "1 sofa", image: img("mirashya-lr1-cover") },
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
      title: "Parking and facilities",
      items: [
        { icon: "car", label: "Free parking on premises" },
        { icon: "waves", label: "Pool" },
        { icon: "flame", label: "Hot tub" },
        { icon: "dumbbell", label: "Gym" },
      ],
    },
    {
      title: "Services",
      items: [
        { icon: "paw-print", label: "Pets allowed" },
        { icon: "spray-can", label: "Cleaning available during stay" },
        { icon: "calendar-days", label: "Long-term stays allowed" },
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
    logo: img("mirashya-host-logo", 200, 200),
    reviews: 1463,
    rating: 4.68,
    yearsHosting: 2,
    bornDecade: "Born in the 80s",
    school: "Where I went to school: NICMAR GOA",
    responseRate: "100%",
    responseTime: "Responds within an hour",
  },
  coHosts: [
    { name: "Sharath", avatar: img("cohost-sharath", 80, 80) },
    { name: "Aman Dev Pahwa", avatar: img("cohost-aman", 80, 80) },
    { name: "Maria Karen Priyanka", avatar: img("cohost-maria", 80, 80) },
    { name: "Simran", avatar: img("cohost-simran", 80, 80) },
    { name: "Pallavi", avatar: img("cohost-pallavi", 80, 80) },
    { name: "Sanyukta", avatar: img("cohost-sanyukta", 80, 80) },
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
