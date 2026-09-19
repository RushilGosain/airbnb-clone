import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Icon } from "./icons";
import { listing } from "../data/listing";

export default function AmenitiesModal({ onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = original;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="All amenities"
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-8 shadow-popover animate-scaleIn"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="mb-6 flex h-8 w-8 items-center justify-center rounded-full hover:bg-black/5"
        >
          <X size={20} />
        </button>

        {listing.amenityGroups.map((group, gi) => (
          <div key={group.title} className={gi > 0 ? "mt-8" : ""}>
            <h3 className="mb-4 text-xl font-semibold">{group.title}</h3>
            <ul>
              {group.items.map((item, i) => (
                <li
                  key={item.label}
                  className={`flex items-center gap-4 py-4 ${
                    i < group.items.length - 1 ? "border-b border-line" : ""
                  }`}
                >
                  <Icon name={item.icon} size={22} strokeWidth={1.5} />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
