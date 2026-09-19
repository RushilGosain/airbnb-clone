import { Menu, Search, CircleUser, Globe } from "lucide-react";

export default function TopNav() {
  return (
    <header className="border-b border-line bg-white">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-6 py-4 lg:px-20">
        <a href="/" className="flex items-center gap-2 text-brand" aria-label="Airbnb home">
          <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor" aria-hidden="true">
            <path d="M16 1c2 0 3.6 1 4.8 2.9 1 1.7 5.8 10 7.4 13.9.7 1.7 1 3 1 4.2 0 4.3-3.3 7.6-7.5 7.6-2.4 0-4.7-1.4-6.3-3.6l-.4-.6-.4.6c-1.6 2.2-3.9 3.6-6.3 3.6C4.3 29.6 1 26.3 1 22c0-1.2.3-2.5 1-4.2 1.6-3.9 6.4-12.2 7.4-13.9C10.4 2 12 1 14 1h2zm-2.6 22.4c1.2 1.6 2.7 2.5 4.2 2.5 2.5 0 4.5-2 4.5-4.6 0-.5-.1-1-.4-1.8-.5-1.3-2.1-4.3-3.7-7.1-1.6 2.8-3.2 5.8-3.7 7.1-.3.8-.4 1.3-.4 1.8 0 .8.2 1.5.5 2.1v-.1z" />
          </svg>
          <span className="hidden text-xl font-extrabold tracking-tight sm:block">airbnb</span>
        </a>

        <button className="flex items-center gap-3 rounded-full border border-line py-2 pl-5 pr-2 text-sm font-medium shadow-sm transition hover:shadow-md">
          <span>Anywhere</span>
          <span className="hidden h-4 w-px bg-line sm:block" />
          <span className="hidden sm:block">Anytime</span>
          <span className="hidden h-4 w-px bg-line sm:block" />
          <span className="hidden text-subtle sm:block">Add guests</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
            <Search size={15} />
          </span>
        </button>

        <div className="flex items-center gap-3">
          <a href="#" className="hidden rounded-full px-4 py-2.5 text-sm font-semibold hover:bg-black/5 md:block">
            Become a host
          </a>
          <button
            aria-label="Menu"
            className="flex items-center gap-2 rounded-full border border-line py-2 pl-3 pr-2 shadow-sm hover:shadow-md"
          >
            <Menu size={16} />
            <CircleUser size={26} className="text-subtle" />
          </button>
        </div>
      </div>
    </header>
  );
}
