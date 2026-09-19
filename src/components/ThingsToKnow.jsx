import { Icon } from "./icons";
import { listing } from "../data/listing";

export default function ThingsToKnow() {
  return (
    <section className="mx-auto max-w-content border-t border-line px-6 py-10 lg:px-20">
      <h2 className="mb-6 text-2xl font-semibold">Things to know</h2>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
        {listing.thingsToKnow.map((block) => (
          <div key={block.title}>
            <Icon name={block.icon} size={26} strokeWidth={1.5} className="mb-4" />
            <h3 className="mb-3 font-semibold">{block.title}</h3>
            <div className="space-y-1 text-sm text-ink">
              {block.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <a href="#" className="mt-3 inline-block text-sm font-semibold underline">
              {block.linkLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
