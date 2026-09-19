import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { listing } from "../data/listing";

export default function NearbyStays() {
  const trackRef = useRef(null);

  function scrollByCard(dir) {
    trackRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  }

  return (
    <section className="mx-auto max-w-content border-t border-line px-6 py-10 lg:px-20">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">More stays nearby</h2>
        <div className="flex items-center gap-2">
          <span className="mr-2 text-sm text-subtle">1 / 2</span>
          <button
            onClick={() => scrollByCard(-1)}
            aria-label="Scroll left"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line hover:bg-black/5"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scrollByCard(1)}
            aria-label="Scroll right"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line hover:bg-black/5"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div ref={trackRef} className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth">
        {listing.nearbyStays.map((stay) => (
          <a
            key={stay.title}
            href="#"
            className="w-48 flex-shrink-0 sm:w-56"
          >
            <div className="mb-2 aspect-square overflow-hidden rounded-xl">
              <img
                src={stay.image}
                alt={stay.title}
                className="h-full w-full object-cover transition hover:brightness-90"
              />
            </div>
            <p className="line-clamp-2 text-sm font-medium">{stay.title}</p>
            <div className="mt-1 flex items-center justify-between text-sm">
              <span>
                {listing.price.currency}
                {stay.price.toLocaleString("en-IN")}
              </span>
              <span className="flex items-center gap-1">
                <Star size={12} className="fill-ink text-ink" />
                {stay.rating.toFixed(2)}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
