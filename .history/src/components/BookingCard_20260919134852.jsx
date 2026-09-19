import { useState } from "react";
import { ChevronDown, Flag } from "lucide-react";
import { listing } from "../data/listing";
import { PromoBanner } from "./AmenitiesSection";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function buildMonth(year, month) {
  const first = new Date(year, month, 1);
  const startDay = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = Array(startDay).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}

// Booked date is 10/20/2026 - 10/25/2026 per the reference; a couple of
// unrelated dates in November are shown greyed out to mirror the screenshot.
const SELECTED_START = 20;
const SELECTED_END = 23;
const UNAVAILABLE_NOV = [18, 19, 20, 21, 22, 23, 29, 30];

function MonthGrid({ year, month, highlight }) {
  const cells = buildMonth(year, month);
  const isOct2026 = year === 2026 && month === 9;
  const isNov2026 = year === 2026 && month === 10;

  return (
    <div>
      <p className="mb-3 text-center font-semibold">
        {MONTH_NAMES[month]} {year}
      </p>
      <div className="grid grid-cols-7 gap-y-1 text-center text-xs text-subtle">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div key={i}>{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-1 text-center text-sm">
        {cells.map((day, i) => {
          if (!day) return <div key={i} />;
          const selected = isOct2026 && (day === SELECTED_START || day === SELECTED_END);
          const inRange = isOct2026 && day > SELECTED_START && day < SELECTED_END;
          const disabled = isNov2026 && UNAVAILABLE_NOV.includes(day);
          return (
            <div key={i} className="flex items-center justify-center py-0.5">
              <button
                disabled={disabled}
                className={[
                  "flex h-9 w-9 items-center justify-center rounded-full transition",
                  selected ? "bg-ink text-white" : "",
                  inRange ? "bg-gray-100" : "",
                  disabled ? "text-gray-300 line-through" : "hover:border hover:border-ink",
                ].join(" ")}
              >
                {day}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function DateRangePicker() {
  return (
    <section className="mx-auto max-w-content px-6 py-8 lg:px-20">
      <h2 className="mb-1 text-xl font-semibold">
        {listing.price.nights} nights in Candolim
      </h2>
      <p className="mb-6 text-subtle">
        {listing.dates.checkInLabel} - {listing.dates.checkOutLabel}
      </p>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:max-w-xl">
        <MonthGrid year={2026} month={9} />
        <MonthGrid year={2026} month={10} />
      </div>
      <button className="mt-6 text-sm font-semibold underline">Clear dates</button>
    </section>
  );
}

export default function BookingCard({ id }) {
  const [guests, setGuests] = useState(listing.guestsSelected);

  return (
    <aside id={id} className="lg:sticky lg:top-24">
      <PromoBanner />
      <div className="rounded-xl border border-line p-6 shadow-card">
        <div className="mb-4 flex items-baseline gap-1">
          <span className="text-xl font-semibold">
            {listing.price.currency}
            {listing.price.amount.toLocaleString("en-IN")}
          </span>
          <span className="text-subtle">for {listing.price.nights} nights</span>
        </div>

        <div className="mb-4 overflow-hidden rounded-lg border border-line">
          <div className="grid grid-cols-2">
            <div className="border-b border-r border-line p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wide">Check-in</p>
              <p className="text-sm">{listing.dates.checkIn}</p>
            </div>
            <div className="border-b border-line p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wide">Checkout</p>
              <p className="text-sm">{listing.dates.checkOut}</p>
            </div>
          </div>
          <button
            onClick={() => setGuests((g) => (g >= listing.guests ? 1 : g + 1))}
            className="flex w-full items-center justify-between p-3 text-left"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide">Guests</p>
              <p className="text-sm">
                {guests} guest{guests > 1 ? "s" : ""}
              </p>
            </div>
            <ChevronDown size={16} />
          </button>
        </div>

        <div className="mb-4 rounded-lg bg-gray-100 px-3 py-2 text-center text-sm text-subtle">
          Free cancellation before <span className="font-semibold text-ink">{listing.dates.freeCancellationBefore}</span>
        </div>

        <button className="w-full rounded-lg bg-brand py-3.5 text-center font-semibold text-white transition hover:bg-brand-hover">
          Reserve
        </button>
        <p className="mt-3 text-center text-sm text-subtle">You won't be charged yet</p>
      </div>

      <button className="mt-4 flex items-center gap-2 text-sm font-semibold underline">
        <Flag size={14} />
        Report this listing
      </button>
    </aside>
  );
}
