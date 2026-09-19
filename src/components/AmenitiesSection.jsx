import { useState } from "react";
import { Icon } from "./icons";
import { listing, allPhotos } from "../data/listing";
import { useLightbox } from "../context/LightboxContext";
import AmenitiesModal from "./AmenitiesModal";

export default function AmenitiesSection() {
  const [showModal, setShowModal] = useState(false);
  const { open } = useLightbox();

  function openLightboxAt(src) {
    const idx = allPhotos.findIndex((p) => p.src === src);
    open(allPhotos, idx === -1 ? 0 : idx);
  }

  return (
    <div>
          <div className="grid grid-cols-2 gap-3 border-b border-line pb-8">
            {listing.rooms.map((room) => (
              <button
                key={room.label}
                onClick={() => openLightboxAt(room.image)}
                className="text-left"
              >
                <div className="mb-2 aspect-[4/3] overflow-hidden rounded-xl">
                  <img
                    src={room.image}
                    alt={room.label}
                    className="h-full w-full object-cover transition hover:brightness-90"
                  />
                </div>
                <p className="font-semibold">{room.label}</p>
                <p className="text-sm text-subtle">{room.detail}</p>
              </button>
            ))}
          </div>

          <div className="border-b border-line py-8">
            <h2 className="mb-5 text-xl font-semibold">What this place offers</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {listing.amenitiesPreview.map((a) => (
                <div
                  key={a.label}
                  className={`flex items-center gap-4 ${!a.available ? "text-subtle" : ""}`}
                >
                  <Icon name={a.icon} size={22} strokeWidth={1.5} className="flex-shrink-0" />
                  <span className={!a.available ? "line-through" : ""}>{a.label}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="mt-6 rounded-lg border border-ink px-5 py-3 text-sm font-semibold transition hover:bg-black/5"
            >
              Show all {listing.amenitiesTotal} amenities
            </button>
          </div>

      {showModal && <AmenitiesModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export function PromoBanner() {
  return (
    <div className="mb-4 flex items-center justify-between gap-3 rounded-xl border border-line p-4">
      <div className="flex items-center gap-3">
        <span className="text-xl" aria-hidden="true">
          🏷️
        </span>
        <div className="text-sm">
          <p>Get 10% off your next stay.</p>
          <a href="#" className="font-semibold underline">
            Terms apply
          </a>
        </div>
      </div>
      <button className="flex-shrink-0 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold hover:bg-gray-200">
        Claim
      </button>
    </div>
  );
}
