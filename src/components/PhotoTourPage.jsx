import { useNavigate } from "react-router-dom";
import { ChevronLeft, Share, Heart } from "lucide-react";
import { photoCategories, allPhotos } from "../data/listing";
import { useLightbox } from "../context/LightboxContext";

export default function PhotoTourPage() {
  const navigate = useNavigate();
  const { open } = useLightbox();

  function openLightboxAt(src) {
    const idx = allPhotos.findIndex((p) => p.src === src);
    open(allPhotos, idx === -1 ? 0 : idx);
  }

  function scrollToCategory(id) {
    document.getElementById(`cat-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-line bg-white px-4 py-4 sm:px-8">
        <button
          onClick={() => navigate("/")}
          aria-label="Back to listing"
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5"
        >
          <ChevronLeft size={22} />
        </button>
        <h1 className="text-base font-semibold">Photo tour</h1>
        <div className="flex items-center gap-1">
          <button
            aria-label="Share"
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5"
          >
            <Share size={18} />
          </button>
          <button
            aria-label="Save"
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5"
          >
            <Heart size={18} />
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-content px-4 py-10 sm:px-8">
        {/* Category jump grid */}
        <div className="mb-16 grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-5 lg:grid-cols-8">
          {photoCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className="text-left"
            >
              <div className="mb-2 aspect-square overflow-hidden rounded-lg">
                <img
                  src={cat.cover}
                  alt={cat.label}
                  className="h-full w-full object-cover transition hover:brightness-90"
                />
              </div>
              <p className="text-sm">{cat.label}</p>
            </button>
          ))}
        </div>

        {/* Per-category sections */}
        <div className="space-y-20">
          {photoCategories.map((cat) => (
            <section
              key={cat.id}
              id={`cat-${cat.id}`}
              className="grid scroll-mt-24 grid-cols-1 gap-8 lg:grid-cols-3"
            >
              <div>
                <h2 className="text-3xl font-semibold">{cat.label}</h2>
                {cat.tags.length > 0 && (
                  <p className="mt-2 text-subtle">{cat.tags.join(" · ")}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 lg:col-span-2">
                <button
                  onClick={() => openLightboxAt(cat.photos[0])}
                  className="col-span-2 aspect-[16/9] overflow-hidden rounded-xl"
                >
                  <img
                    src={cat.photos[0]}
                    alt={cat.label}
                    className="h-full w-full object-cover transition hover:brightness-90"
                  />
                </button>
                {cat.photos.slice(1).map((src, i) => (
                  <button
                    key={i}
                    onClick={() => openLightboxAt(src)}
                    className="aspect-square overflow-hidden rounded-xl"
                  >
                    <img
                      src={src}
                      alt={`${cat.label} detail`}
                      className="h-full w-full object-cover transition hover:brightness-90"
                    />
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
