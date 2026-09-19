import TopNav from "../components/TopNav";
import StickyBar from "../components/StickyBar";
import Gallery from "../components/Gallery";
import PropertyHeader from "../components/PropertyHeader";
import AmenitiesSection from "../components/AmenitiesSection";
import BookingCard, { DateRangePicker } from "../components/BookingCard";
import ReviewsSection from "../components/ReviewsSection";
import ThingsToKnow from "../components/ThingsToKnow";
import NearbyStays from "../components/NearbyStays";
import LocationSection from "../components/LocationSection";

export default function ListingPage() {
  function scrollToBooking() {
    document.getElementById("booking-card")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="min-h-screen bg-white">
      <TopNav />
      <StickyBar onReserve={scrollToBooking} />

      <Gallery />

      <div id="amenities" className="mx-auto max-w-content px-6 pt-8 lg:px-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <PropertyHeader />
            <AmenitiesSection />
          </div>
          <BookingCard id="booking-card" />
        </div>
      </div>

      <DateRangePicker />
      <ReviewsSection />
      <ThingsToKnow />
      <NearbyStays />
      <LocationSection />

      
    </div>
  );
}
