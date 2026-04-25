import { useEffect, useState } from "react";

export type GalleryPhoto = {
  src: string;
  caption?: string;
  alt?: string;
};

function Row({
  photos,
  direction = "left",
  duration = 80,
  onOpen,
}: {
  photos: GalleryPhoto[];
  direction?: "left" | "right";
  duration?: number;
  onOpen: (idx: number) => void;
}) {
  // Duplicate the list so the translate loop is seamless.
  const loop = [...photos, ...photos];
  return (
    <div
      className="group relative overflow-hidden"
      style={{ maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)" }}
    >
      <div
        className="flex gap-4 w-max animate-gallery-marquee group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: direction === "left" ? "normal" : "reverse",
        }}
      >
        {loop.map((photo, i) => {
          const realIdx = i % photos.length;
          return (
            <button
              key={i}
              type="button"
              onClick={() => onOpen(realIdx)}
              className="relative shrink-0 h-56 md:h-72 w-72 md:w-96 overflow-hidden rounded-xl bg-muted shadow-soft focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={photo.caption ?? `Gallery photo ${realIdx + 1}`}
            >
              <img
                src={photo.src}
                alt={photo.alt ?? photo.caption ?? `Gallery photo ${realIdx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {photo.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-3">
                  <p className="text-xs text-primary-foreground">{photo.caption}</p>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Gallery({ photos }: { photos: GalleryPhoto[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Split into two rows for visual interest
  const mid = Math.ceil(photos.length / 2);
  const rowA = photos.slice(0, mid);
  const rowB = photos.slice(mid);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((v) => (v === null ? null : Math.min(photos.length - 1, v + 1)));
      if (e.key === "ArrowLeft") setLightbox((v) => (v === null ? null : Math.max(0, v - 1)));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, photos.length]);

  return (
    <>
      <div className="space-y-4 md:space-y-6">
        <Row photos={rowA} direction="left" duration={180} onOpen={(i) => setLightbox(i)} />
        <Row photos={rowB} direction="right" duration={220} onOpen={(i) => setLightbox(mid + i)} />}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 h-10 w-10 rounded-full bg-bone/10 border border-bone/30 text-primary-foreground hover:bg-bone/20 transition flex items-center justify-center"
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            aria-label="Close"
          >✕</button>

          <button
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-bone/10 border border-bone/30 text-primary-foreground hover:bg-bone/20 transition flex items-center justify-center disabled:opacity-30"
            onClick={(e) => { e.stopPropagation(); setLightbox((v) => (v === null ? null : Math.max(0, v - 1))); }}
            disabled={lightbox === 0}
            aria-label="Previous"
          >‹</button>

          <button
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-bone/10 border border-bone/30 text-primary-foreground hover:bg-bone/20 transition flex items-center justify-center disabled:opacity-30"
            onClick={(e) => { e.stopPropagation(); setLightbox((v) => (v === null ? null : Math.min(photos.length - 1, v + 1))); }}
            disabled={lightbox === photos.length - 1}
            aria-label="Next"
          >›</button>

          <figure className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[lightbox].src}
              alt={photos[lightbox].alt ?? photos[lightbox].caption ?? ""}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <figcaption className="mt-4 text-center text-primary-foreground/80 text-sm">
              {photos[lightbox].caption}
              <span className="ml-3 text-primary-foreground/50">{lightbox + 1} / {photos.length}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
