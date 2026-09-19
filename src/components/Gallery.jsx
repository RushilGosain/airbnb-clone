import { useNavigate } from "react-router-dom";
import { Share, Heart, Grid3x3 } from "lucide-react";
import { heroImages, listing, allPhotos } from "../data/listing";
import { useLightbox } from "../context/LightboxContext";

export default function Gallery() {
  const navigate = useNavigate();
  const { open } = useLightbox();

  function openLightboxAt(src) {
    const idx = allPhotos.findIndex((p) => p.src === src);
    open(allPhotos, idx === -1 ? 0 : idx);
  }

  return (
    <section id="photos" className="mx-auto max-w-content px-6 pt-6 lg:px-20">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h1 className="text-2xl font-semibold sm:text-3xl">{listing.title}</h1>
        <div className="flex flex-shrink-0 items-center gap-1">
          <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold underline hover:bg-black/5">
            <Share size={16} /> Share
          </button>
          <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold underline hover:bg-black/5">
            <Heart size={16} /> Save
          </button>
        </div>
      </div>

      <div className="relative grid grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-xl">
        <button
          onClick={() => openLightboxAt(heroImages[0])}
          className="col-span-4 row-span-2 aspect-[4/3] overflow-hidden sm:col-span-2"
        >
          <img
            src={heroImages[0]}
            alt="Living room"
            className="h-full w-full object-cover transition duration-300 hover:brightness-90"
          />
        </button>
        {heroImages.slice(1, 5).map((src, i) => (
          <button
            key={src}
            onClick={() => openLightboxAt(src)}
            className={`hidden aspect-square overflow-hidden sm:block ${i === 3 ? "relative" : ""}`}
          >
            <img
              src={src}
              alt="Listing detail"
              className="h-full w-full object-cover transition duration-300 hover:brightness-90"
            />
          </button>
        ))}

        <button
          onClick={() => navigate("/photos")}
          className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold shadow-card transition hover:bg-gray-50"
        >
          <Grid3x3 size={16} />
          Show all photos
        </button>
      </div>
    </section>
  );
}
