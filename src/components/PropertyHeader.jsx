import { useState } from "react";
import { Sofa, Fan, DoorOpen, Waves } from "lucide-react";
import { listing } from "../data/listing";

const HIGHLIGHT_ICONS = { waves: Waves, fan: Fan, "door-open": DoorOpen };

export default function PropertyHeader() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p className="text-lg">{listing.propertyType}</p>
          <p className="mb-6 text-subtle">
            {listing.guests} guests · {listing.bedrooms} bedroom · {listing.beds} bed · {listing.bathrooms}{" "}
            bathroom
          </p>

          {listing.isGuestFavourite && (
            <div className="mb-6 flex flex-col items-start gap-4 rounded-xl border border-line p-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3 text-3xl leading-none">
                <span aria-hidden="true">🌿</span>
                <span className="font-semibold">Guest favourite</span>
                <span aria-hidden="true">🌿</span>
              </div>
              <p className="text-sm text-subtle">
                One of the most loved homes on Airbnb, according to guests
              </p>
              <div className="flex items-center gap-4 sm:ml-auto">
                <div className="text-center">
                  <div className="text-lg font-semibold">{listing.rating.toFixed(2)}</div>
                  <div className="text-xs text-subtle">★★★★★</div>
                </div>
                <div className="h-8 w-px bg-line" />
                <div className="text-center">
                  <div className="text-lg font-semibold">{listing.reviewCount}</div>
                  <div className="text-xs text-subtle">Reviews</div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center gap-4 border-b border-line pb-6">
            <img
              src={listing.host.logo}
              alt={listing.host.name}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">Hosted by {listing.host.name}</p>
              <p className="text-sm text-subtle">{listing.host.yearsHosting} years hosting</p>
            </div>
          </div>

          <div className="space-y-6 py-6">
            {listing.highlights.map((h) => {
              const Icon = HIGHLIGHT_ICONS[h.icon] || Sofa;
              return (
                <div key={h.title} className="flex items-start gap-4">
                  <Icon size={26} strokeWidth={1.5} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{h.title}</p>
                    <p className="text-sm text-subtle">{h.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-t border-line py-6">
            <p
              className={`whitespace-pre-line leading-relaxed ${expanded ? "" : "line-clamp-4"}`}
            >
              {listing.description}
            </p>
            <button
              onClick={() => setExpanded((v) => !v)}
              className="mt-3 flex items-center gap-1 font-semibold underline"
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          </div>
    </div>
  );
}
