import { useState } from "react";
import { Star } from "lucide-react";
import { Icon } from "./icons";
import { listing } from "../data/listing";

function Laurel({ flip = false }) {
  return (
    <span className={`text-4xl ${flip ? "-scale-x-100" : ""}`} aria-hidden="true">
      🌿
    </span>
  );
}

export default function ReviewsSection() {
  const [showAll, setShowAll] = useState(false);
  const [expandedReview, setExpandedReview] = useState(null);
  const visibleReviews = showAll ? listing.reviews : listing.reviews.slice(0, 6);

  return (
    <section id="reviews" className="mx-auto max-w-content px-6 py-10 lg:px-20">
      <div className="border-b border-line pb-10 text-center">
        <div className="mb-4 flex items-center justify-center gap-4">
          <Laurel />
          <span className="text-6xl font-semibold">{listing.reviewBreakdown.overall.toFixed(2)}</span>
          <Laurel flip />
        </div>
        <h2 className="mb-1 text-2xl font-semibold">Guest favourite</h2>
        <p className="mx-auto max-w-md text-subtle">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
       
      </div>

      <div className="grid grid-cols-2 gap-6 border-b border-line py-10 sm:grid-cols-3 lg:grid-cols-6">
        {[
          { label: "Overall rating", bars: listing.reviewBreakdown.distribution },
          ...listing.reviewBreakdown.categories,
        ].map((c, i) =>
          c.bars ? (
            <div key={i}>
              <p className="mb-2 text-sm font-semibold">{c.label}</p>
              <div className="space-y-1">
                {c.bars.map((b) => (
                  <div key={b.stars} className="flex items-center gap-2 text-xs text-subtle">
                    <span>{b.stars}</span>
                    <div className="h-1 flex-1 rounded-full bg-gray-200">
                      <div className="h-1 rounded-full bg-ink" style={{ width: `${b.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div key={i}>
              <p className="mb-2 text-sm font-semibold">{c.label}</p>
              <p className="mb-2 text-lg font-semibold">{c.score.toFixed(1)}</p>
              <Icon name={c.icon} size={22} strokeWidth={1.5} />
            </div>
          )
        )}
      </div>

      <div className="no-scrollbar flex gap-3 overflow-x-auto py-6">
        {listing.reviewTags.map((t) => (
          <span
            key={t.label}
            className="flex flex-shrink-0 items-center gap-2 rounded-full border border-line px-4 py-2 text-sm"
          >
            <span aria-hidden="true">{t.icon}</span>
            {t.label} <span className="text-subtle">{t.count}</span>
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
        {visibleReviews.map((r, i) => {
          const isLong = r.text.length > 180;
          const isExpanded = expandedReview === i;
          return (
            <div key={i}>
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-lg font-semibold text-orange-700">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-xs text-subtle">{r.tenure}</p>
                </div>
              </div>
              <div className="mb-2 flex items-center gap-2 text-xs">
                <div className="flex" aria-hidden="true">
                  {Array.from({ length: r.rating }).map((_, s) => (
                    <Star key={s} size={12} className="fill-ink text-ink" />
                  ))}
                </div>
                <span className="text-subtle">· {r.when}</span>
              </div>
              <p className={isExpanded || !isLong ? "" : "line-clamp-3"}>{r.text}</p>
              {isLong && (
                <button
                  onClick={() => setExpandedReview(isExpanded ? null : i)}
                  className="mt-1 font-semibold underline"
                >
                  {isExpanded ? "Show less" : "Show more"}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-10 rounded-lg border border-ink px-5 py-3 text-sm font-semibold hover:bg-black/5"
        >
          Show all {listing.reviewCount} reviews
        </button>
      )}
    </section>
  );
}
