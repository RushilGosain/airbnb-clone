import { Search, Plus, Minus, House, MessageCircle, ShieldCheck, GraduationCap, MapPin } from "lucide-react";
import { listing } from "../data/listing";

function StylizedMap() {
  return (
    <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl bg-[#eef2ec]">
      {/* Abstract water / land shapes standing in for a real map tile layer */}
      <svg viewBox="0 0 800 340" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <rect width="800" height="340" fill="#eef2ec" />
        <polygon points="0,0 320,0 0,340" fill="#c8dff0" />
        <circle cx="280" cy="210" r="60" fill="#d9e8d3" />
        <circle cx="560" cy="270" r="90" fill="#d9e8d3" />
      </svg>
      <svg className="absolute inset-0 h-full w-full opacity-40" aria-hidden="true">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#c9c9c9" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-white shadow-popover">
        <House size={18} />
      </div>

      <button
        aria-label="Search this area"
        className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-card"
      >
        <Search size={16} />
      </button>

      <div className="absolute right-4 top-4 flex flex-col overflow-hidden rounded-lg bg-white shadow-card">
        <button aria-label="Zoom in" className="flex h-9 w-9 items-center justify-center hover:bg-black/5">
          <Plus size={16} />
        </button>
        <div className="h-px bg-line" />
        <button aria-label="Zoom out" className="flex h-9 w-9 items-center justify-center hover:bg-black/5">
          <Minus size={16} />
        </button>
      </div>
    </div>
  );
}

export default function LocationSection() {
  return (
    <section id="location" className="mx-auto max-w-content border-t border-line px-6 py-10 lg:px-20">
      <h2 className="mb-1 text-2xl font-semibold">Where you'll be</h2>
      <p className="mb-6 flex items-center gap-1 text-ink">
        <MapPin size={16} className="text-subtle" />
        {listing.location.city}
      </p>

      <StylizedMap />

      <p className="mt-4 text-sm text-subtle">Exact location will be provided after booking.</p>

      <div className="mt-8 border-t border-line pt-8">
        <h3 className="mb-2 text-xl font-semibold">Neighbourhood highlights</h3>
        <p className="max-w-2xl">{listing.location.neighbourhood}</p>
        <a href="#" className="mt-2 inline-flex items-center gap-1 font-semibold underline">
          Show more →
        </a>
      </div>

      <div className="mt-10 border-t border-line pt-10">
        <h3 className="mb-6 text-2xl font-semibold">Meet your host</h3>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex items-center gap-8 rounded-2xl border border-line p-6 shadow-card">
            <div className="text-center">
              <div className="relative mx-auto mb-2 h-24 w-24">
                <img
                  src={listing.host.logo}
                  alt={listing.host.name}
                  className="h-24 w-24 rounded-full object-cover"
                />
                <span className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white ring-2 ring-white">
                  <ShieldCheck size={14} />
                </span>
              </div>
              <p className="text-xl font-semibold">{listing.host.name}</p>
              <p className="text-sm text-subtle">Host</p>
            </div>
            <div className="flex flex-col gap-4 divide-y divide-line border-l border-line pl-8 text-center">
              <div>
                <p className="text-2xl font-semibold">{listing.host.reviews.toLocaleString()}</p>
                <p className="text-sm text-subtle">Reviews</p>
              </div>
              <div className="pt-4">
                <p className="text-2xl font-semibold">{listing.host.rating}★</p>
                <p className="text-sm text-subtle">Rating</p>
              </div>
              <div className="pt-4">
                <p className="text-2xl font-semibold">{listing.host.yearsHosting}</p>
                <p className="text-sm text-subtle">Years hosting</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Co-Hosts</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
              {listing.coHosts.map((h) => (
                <div key={h.name} className="flex items-center gap-3">
                  {h.avatar ? (
                    <img src={h.avatar} alt={h.name} className="h-9 w-9 rounded-full object-cover" />
                  ) : (
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-sm font-semibold text-pink-700">
                      {h.initials}
                    </span>
                  )}
                  <span className="text-sm">{h.name}</span>
                </div>
              ))}
            </div>

            <h4 className="mb-3 mt-8 font-semibold">Host details</h4>
            <p className="text-sm">Response rate: {listing.host.responseRate}</p>
            <p className="mb-4 text-sm">{listing.host.responseTime}</p>
            <button className="rounded-lg bg-gray-100 px-5 py-3 text-sm font-semibold hover:bg-gray-200">
              <span className="flex items-center gap-2">
                <MessageCircle size={16} />
                Message host
              </span>
            </button>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3 text-sm text-subtle">
          <div className="flex items-center gap-2">
            <MapPin size={16} /> {listing.host.bornDecade}
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2 text-sm text-subtle">
          <GraduationCap size={16} /> {listing.host.school}
        </div>

        <div className="mt-8 flex items-start gap-3 border-t border-line pt-6 text-sm text-subtle">
          <ShieldCheck size={18} className="mt-0.5 flex-shrink-0" />
          To help protect your payment, always use Airbnb to send money and communicate with hosts.
        </div>
      </div>
    </section>
  );
}
