import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export type GalleryPhoto = {
  src: string;
  caption?: string;
  alt?: string;
};

const COLUMN_COUNT_DESKTOP = 4;
const COLUMN_COUNT_TABLET = 3;
const COLUMN_COUNT_MOBILE = 2;
const INITIAL_BATCH = 16;
const BATCH_INCREMENT = 16;

function distributeIntoColumns(items: GalleryPhoto[], cols: number) {
  const columns: GalleryPhoto[][] = Array.from({ length: cols }, () => []);
  items.forEach((item, i) => columns[i % cols].push(item));
  return columns;
}

function useColumnCount() {
  const [cols, setCols] = useState(COLUMN_COUNT_DESKTOP);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setCols(COLUMN_COUNT_MOBILE);
      else if (w < 1024) setCols(COLUMN_COUNT_TABLET);
      else setCols(COLUMN_COUNT_DESKTOP);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return cols;
}

export function Gallery({ photos }: { photos: GalleryPhoto[] }) {
  const [visible, setVisible] = useState(INITIAL_BATCH);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const cols = useColumnCount();

  const shown = photos.slice(0, visible);
  const columns = distributeIntoColumns(shown, cols);

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
      <div className="flex gap-3 md:gap-4">
        {columns.map((col, ci) => (
          <div key={ci} className="flex-1 flex flex-col gap-3 md:gap-4">
            {col.map((photo) => {
              const idx = photos.indexOf(photo);
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setLightbox(idx)}
                  className="group relative block w-full overflow-hidden rounded-xl bg-muted shadow-soft focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt ?? photo.caption ?? `Gallery photo ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {photo.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-xs text-primary-foreground translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
                      {photo.caption}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {visible < photos.length && (
        <div className="mt-12 flex flex-col items-center gap-3">
          <div className="text-sm text-muted-foreground">
            Showing {visible} of {photos.length} photos
          </div>
          <Button
            onClick={() => setVisible((v) => Math.min(photos.length, v + BATCH_INCREMENT))}
            size="lg"
            className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Load more
          </Button>
        </div>
      )}

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
