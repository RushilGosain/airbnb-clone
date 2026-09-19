import { createContext, useCallback, useContext, useMemo, useState } from "react";

const LightboxContext = createContext(null);

export function LightboxProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback((photoList, startIndex = 0) => {
    setPhotos(photoList);
    setIndex(startIndex);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const next = useCallback(() => {
    setIndex((i) => (photos.length ? (i + 1) % photos.length : 0));
  }, [photos.length]);

  const prev = useCallback(() => {
    setIndex((i) => (photos.length ? (i - 1 + photos.length) % photos.length : 0));
  }, [photos.length]);

  const value = useMemo(
    () => ({ photos, index, isOpen, open, close, next, prev }),
    [photos, index, isOpen, open, close, next, prev]
  );

  return <LightboxContext.Provider value={value}>{children}</LightboxContext.Provider>;
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}
