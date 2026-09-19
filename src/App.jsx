import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LightboxProvider } from "./context/LightboxContext";
import Lightbox from "./components/Lightbox";
import ListingPage from "./pages/ListingPage";
import PhotoTourPage from "./components/PhotoTourPage";

function ScrollToTopOnNavigate() {
  // react-router keeps scroll position by default; reset it on route change
  // so the photo tour page and the listing page each open at the top.
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LightboxProvider>
      <BrowserRouter>
        <ScrollToTopOnNavigate />
        <Routes>
          <Route path="/" element={<ListingPage />} />
          <Route path="/photos" element={<PhotoTourPage />} />
        </Routes>
        <Lightbox />
      </BrowserRouter>
    </LightboxProvider>
  );
}
