import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLightbox } from "../context/LightboxContext";

export default function Lightbox() {
  const { isOpen, photos, index, close, next, prev } = useLightbox();
  const closeBtnRef = useRef(null);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(e) {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, next, prev, close]);

  // Prevent background scrolling
  useEffect(() => {
    if (!isOpen) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeBtnRef.current?.focus();

    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  if (!isOpen || photos.length === 0) return null;

  const current = photos[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/95"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${photos.length}`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-4 sm:px-6">
        <button
          ref={closeBtnRef}
          onClick={close}
          aria-label="Close photo viewer"
          className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10"
        >
          <X size={22} />
        </button>

        <span className="text-sm font-medium text-white/80">
          {index + 1} / {photos.length}
        </span>
      </div>

      {/* Image stage */}
      <div className="relative flex flex-1 items-center justify-center px-4 pb-6 sm:px-16">
        {/* Previous button */}
        {photos.length > 1 && (
          <button
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-popover transition hover:scale-105 sm:left-6 sm:h-12 sm:w-12"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        {/* Image */}
        <img
          key={current.src}
          src={current.src}
          alt={
            current.category
              ? `${current.category} photo`
              : "Listing photo"
          }
          className="h-auto w-auto max-h-[70vh] max-w-[75vw] rounded-md object-contain select-none"
          draggable={false}
        />

        {/* Next button */}
        {photos.length > 1 && (
          <button
            onClick={next}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-popover transition hover:scale-105 sm:right-6 sm:h-12 sm:w-12"
          >
            <ChevronRight size={22} />
          </button>
        )}
      </div>

      {/* Category */}
      {current.category && (
        <div className="pb-6 text-center text-sm text-white/70">
          {current.category}
        </div>
      )}
    </div>
  );
}