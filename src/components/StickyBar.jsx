import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { listing } from "../data/listing";

const TABS = [
  { id: "photos", label: "Photos" },
  { id: "amenities", label: "Amenities" },
  { id: "reviews", label: "Reviews" },
  { id: "location", label: "Location" },
];

export default function StickyBar({ onReserve }) {
  const [active, setActive] = useState("photos");

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
    <div className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-6 py-4 lg:px-20">
        <nav className="no-scrollbar flex items-center gap-8 overflow-x-auto" aria-label="Listing sections">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={`whitespace-nowrap border-b-2 pb-1 pt-1 text-sm font-semibold transition-colors ${
                active === tab.id
                  ? "border-ink text-ink"
                  : "border-transparent text-subtle hover:text-ink"
              }`}
              aria-current={active === tab.id ? "true" : undefined}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="flex flex-shrink-0 items-center gap-5">
          <div className="hidden text-right text-sm leading-tight sm:block">
            <div>
              <span className="font-semibold">
                {listing.price.currency}
                {listing.price.amount.toLocaleString("en-IN")}
              </span>{" "}
              <span className="text-subtle">for {listing.price.nights} nights</span>
            </div>
            <div className="flex items-center justify-end gap-1 text-subtle">
              <Star size={12} className="fill-ink text-ink" />
              <span className="text-ink">{listing.rating.toFixed(2)}</span>
              <span>· {listing.reviewCount} reviews</span>
            </div>
          </div>
          <button
            onClick={onReserve}
            className="rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-hover"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}
