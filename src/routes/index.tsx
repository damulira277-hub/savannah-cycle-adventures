import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/savannah-hero.jpg";
import cyclistImg from "@/assets/cyclist-savannah.jpg";
import bwindiImg from "@/assets/bwindi-forest.jpg";
import murchisonImg from "@/assets/murchison-falls.jpg";
import rhinoImg from "@/assets/rhino.jpg";
import craterImg from "@/assets/crater-lakes.jpg";
import zebrasImg from "@/assets/cyclists-zebras.jpg";
import lakeImg from "@/assets/lake-victoria.jpg";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Gallery, type GalleryPhoto } from "@/components/Gallery";
import { BedDouble, Bike, Sparkles, Plane, Check, Minus } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uganda Epic — 18 Day Cycling Expedition | Pearl of Africa" },
      { name: "description", content: "Ride across Uganda — from Kampala's seven hills to the misty rainforests of Bwindi. An 18-day cycling expedition through savannah, rift valleys, and wildlife." },
      { property: "og:title", content: "Uganda Epic — 18 Day Cycling Expedition" },
      { property: "og:description", content: "From savannah to rainforest. A trans-Uganda cycling expedition departing March 31, 2026." },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

const highlights = [
  { t: "Seven Hills", d: "Cycle Kampala's urban heartbeat", img: cyclistImg },
  { t: "Ziwa Rhinos", d: "Track white rhinos on two wheels", img: rhinoImg },
  { t: "Murchison Falls", d: "Game drives & a Nile boat cruise", img: murchisonImg },
  { t: "Rift Valley", d: "Roll through Albertine landscapes", img: heroImg },
  { t: "Crater Lakes", d: "Tea plantations near Fort Portal", img: craterImg },
  { t: "Bwindi", d: "Misty jungles of the gorilla region", img: bwindiImg },
  { t: "Kabale Highlands", d: "The Switzerland of Africa", img: craterImg },
  { t: "Lake Mburo", d: "Cycle among zebras and giraffes", img: zebrasImg },
  { t: "Ssese Islands", d: "Cross Lake Victoria, recover, exhale", img: lakeImg },
];

type Stage = {
  day: string;
  title: string;
  theme: string;
  km?: string;
  region: string;
  img: string;
};

const itinerary: Stage[] = [
  { day: "01", title: "Arrival in Kampala", theme: "Welcome dinner & cultural storytelling", region: "Central", img: cyclistImg },
  { day: "02", title: "Kampala Urban Ride", theme: "The Seven Hills Challenge", km: "55 km", region: "Central", img: cyclistImg },
  { day: "03", title: "Ziwa Rhino Sanctuary", theme: "Track rhinos on bike", km: "85 km", region: "North", img: rhinoImg },
  { day: "04", title: "Murchison Falls NP", theme: "Safari & Nile cruise", km: "70 km", region: "North", img: murchisonImg },
  { day: "05", title: "Nile Ride to Hoima", theme: "River-side cycling", km: "110 km", region: "West", img: murchisonImg },
  { day: "06", title: "Rift Valley to Semuliki", theme: "Hot springs visit", km: "95 km", region: "West", img: heroImg },
  { day: "07", title: "Climb to Fort Portal", theme: "Highland ascent", km: "75 km", region: "West", img: craterImg },
  { day: "08", title: "Crater Lakes", theme: "On to Queen Elizabeth NP", km: "90 km", region: "West", img: craterImg },
  { day: "09", title: "Savannah & Boat Safari", theme: "Kazinga Channel", km: "60 km", region: "Southwest", img: zebrasImg },
  { day: "10", title: "Into Bwindi", theme: "Enter the gorilla region", km: "80 km", region: "Southwest", img: bwindiImg },
  { day: "11", title: "Ruhija to Twin Lakes", theme: "Mountain forest riding", km: "65 km", region: "Southwest", img: bwindiImg },
  { day: "12", title: "Lake-to-Lake Kabale", theme: "The Switzerland of Africa", km: "70 km", region: "Southwest", img: craterImg },
  { day: "13", title: "Transfer to Lake Mburo", theme: "Recovery & transit", region: "South", img: zebrasImg },
  { day: "14", title: "Lake Mburo Safari Ride", theme: "Cycle with zebras", km: "55 km", region: "South", img: zebrasImg },
  { day: "15", title: "Mburo to Kalisizo", theme: "Rolling rural roads", km: "120 km", region: "South", img: heroImg },
  { day: "16", title: "Lake Victoria Crossing", theme: "Ferry to the islands", region: "Lake Victoria", img: lakeImg },
  { day: "17", title: "Ssese Island Recovery", theme: "Rest day in paradise", region: "Lake Victoria", img: lakeImg },
  { day: "18", title: "Return to Entebbe", theme: "Farewell & departure", region: "Central", img: cyclistImg },
];

const includedGroups = [
  {
    label: "Stay & Table",
    Icon: BedDouble,
    items: [
      "17 nights in lodges, safari camps & boutique hotels",
      "Full board — breakfast, lunch & dinner each day",
      "Drinking water during all rides",
    ],
  },
  {
    label: "On the Bike",
    Icon: Bike,
    items: [
      "Professional cycling guides (lead + sweep)",
      "Fully equipped support vehicle & mechanic",
      "Daily route briefing & GPS navigation",
      "Luggage transfers between every camp",
    ],
  },
  {
    label: "Wild Encounters",
    Icon: Sparkles,
    items: [
      "Rhino tracking at Ziwa Sanctuary",
      "Game drives in Murchison Falls",
      "Boat safaris — Kazinga & the Nile",
      "Cycling safari in Lake Mburo",
      "Hot springs in Semuliki",
      "Ssese Island ferry & experience",
    ],
  },
  {
    label: "Logistics",
    Icon: Plane,
    items: ["Airport transfers", "All national park entry fees"],
  },
];

const excludedItems = [
  { t: "International flights", n: "Book your own arrival to Entebbe (EBB)." },
  { t: "Uganda visa", n: "≈ $50, e-visa online before travel." },
  { t: "Travel & medical insurance", n: "Mandatory — must include evacuation." },
  { t: "Bike rental", n: "Optional, if not bringing your own." },
  { t: "Gorilla trekking permit", n: "~$700–$800, optional add-on." },
  { t: "Chimpanzee tracking permit", n: "Optional, bookable in advance." },
  { t: "Premium & alcoholic drinks", n: "Available at every lodge bar." },
  { t: "Tips, laundry, souvenirs", n: "Personal extras along the way." },
];

const faqs = [
  { q: "How difficult is this expedition?", a: "Moderate to challenging. Daily distances of 50–120 km on mixed terrain — tarmac, gravel, and climbs in western Uganda. Good endurance and prior cycling experience required." },
  { q: "Do I need to bring my own bike?", a: "Bring your own (recommended for serious riders) or rent a high-quality mountain or gravel bike locally." },
  { q: "Is gorilla trekking included?", a: "No — it's an optional add-on (~$700–$800) due to limited permits, taking place in Bwindi Impenetrable National Park. Highly recommended; book in advance." },
  { q: "What roads will we ride?", a: "Roughly 60% paved roads, 40% gravel, dirt and park tracks, with some remote and rugged sections in the west and southwest." },
  { q: "Is the trip safe?", a: "Fully supported and guided — professional lead and sweep riders, support vehicle, mechanic, and close coordination with park authorities." },
  { q: "What if I can't complete a stage?", a: "No problem. The support vehicle is always available — skip sections and rejoin whenever you're ready." },
  { q: "Best time to ride?", a: "June–August (dry season) or December–February. We avoid heavy rainy months for optimal conditions." },
  { q: "Are there rest days?", a: "Yes — Day 17 on Kalangala Island is a recovery day, with flexible pacing and optional shorter routes throughout." },
];

// Gallery seed: 8 unique images repeated with captions to demonstrate up to 100 photos.
// Replace src URLs with real photos as they become available.
const seedImages = [
  { src: cyclistImg, caption: "Dust roads at golden hour" },
  { src: murchisonImg, caption: "Murchison Falls on the Nile" },
  { src: bwindiImg, caption: "Bwindi's misty canopy" },
  { src: rhinoImg, caption: "Tracking white rhinos at Ziwa" },
  { src: craterImg, caption: "Crater lakes near Fort Portal" },
  { src: zebrasImg, caption: "Riding among zebras, Lake Mburo" },
  { src: lakeImg, caption: "Lake Victoria at dusk" },
  { src: heroImg, caption: "Acacia at sunset" },
];

const partners: { name: string; href: string }[] = [
  { name: "BlackSmith Safaris", href: "https://blacksmithsafaris.tours" },
  { name: "Uganda Wildlife Authority", href: "#" },
  { name: "Ziwa Rhino Sanctuary", href: "#" },
  { name: "Bwindi Conservation", href: "#" },
  { name: "Nile Boat Cruises", href: "#" },
  { name: "Fort Portal Tea Co.", href: "#" },
  { name: "Kalangala Ferries", href: "#" },
  { name: "Pearl Cycles UG", href: "#" },
  { name: "Savannah Lodges", href: "#" },
  { name: "Murchison Camps", href: "#" },
  { name: "Trail Mechanics", href: "#" },
  { name: "Adventure Insure", href: "#" },
];

const galleryPhotos: GalleryPhoto[] = Array.from({ length: 100 }, (_, i) => {
  const base = seedImages[i % seedImages.length];
  return { src: base.src, caption: `${base.caption} · ${String(i + 1).padStart(3, "0")}` };
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <div className="font-display text-xl tracking-tight text-primary-foreground">
            <span className="text-accent">◐</span> Uganda Epic
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-primary-foreground/90">
            <a href="#journey" className="hover:text-accent transition">The Journey</a>
            <a href="#itinerary" className="hover:text-accent transition">Itinerary</a>
            <a href="#gallery" className="hover:text-accent transition">Gallery</a>
            <a href="#includes" className="hover:text-accent transition">Includes</a>
            <a href="#faq" className="hover:text-accent transition">FAQ</a>
            <a href="#partners" className="hover:text-accent transition">Partners</a>
          </nav>
          <a href="#book">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-5">
              Reserve a Spot
            </Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Acacia tree silhouette against an Ugandan savannah sunset"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="relative z-10 mx-auto max-w-7xl h-full px-6 flex flex-col justify-end pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full bg-bone/15 backdrop-blur-md border border-bone/20 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary-foreground/90 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Departure · 31 March 2026
            </div>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-primary-foreground leading-[0.95]">
              Ride the<br />
              <span className="italic text-accent">Pearl of Africa</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-primary-foreground/85 max-w-xl leading-relaxed">
              An 18-day trans-Uganda cycling expedition — from Kampala's seven hills,
              across golden savannahs, into the misty rainforests of Bwindi.
            </p>
          </div>
        </div>

        {/* Stat bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-bone/20 bg-foreground/40 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-primary-foreground">
            {[
              ["18", "Days"],
              ["1,400+ km", "Cycled"],
              ["10", "Parks & Lakes"],
              ["From $2,950", "Per Rider"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="font-display text-2xl md:text-3xl text-accent">{v}</div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/70 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section id="journey" className="py-28 md:py-36 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-warm relative">
                <img
                  src={cyclistImg}
                  alt="Cyclist on a savannah road at golden hour"
                  loading="lazy"
                  width={1280}
                  height={1280}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="hidden md:block absolute -bottom-8 -right-8 bg-card rounded-2xl shadow-warm p-6 max-w-[240px] border border-border">
                <div className="font-display text-3xl text-primary">18</div>
                <div className="text-xs uppercase tracking-widest text-clay mt-1">Days · 17 Nights</div>
                <div className="text-sm text-muted-foreground mt-3">A continuous traverse from city to wilderness.</div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-8">
              <div className="text-xs uppercase tracking-[0.25em] text-clay mb-4">The Expedition</div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                From savannah<br />to rainforest.
              </h2>
              <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  A trans-Uganda cycling expedition that weaves together untamed wilderness, vibrant culture,
                  and breathtaking landscapes. From the energy of Kampala's seven hills to the ancient
                  rainforests of Bwindi — a continuous immersion in the Pearl of Africa.
                </p>
                <p>
                  Ride through rolling savannahs alive with wildlife, navigate crater lakes and highland ridges,
                  and connect with local communities along the way. Each stage reveals a new rhythm —
                  urban buzz, rural calm, deep jungle silence.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
                <div>
                  <div className="font-display text-2xl text-primary">Medium</div>
                  <div className="text-xs uppercase tracking-widest text-clay mt-1">Difficulty</div>
                </div>
                <div>
                  <div className="font-display text-2xl text-primary">20–50</div>
                  <div className="text-xs uppercase tracking-widest text-clay mt-1">Group Size</div>
                </div>
                <div>
                  <div className="font-display text-2xl text-primary">60 / 40</div>
                  <div className="text-xs uppercase tracking-widest text-clay mt-1">Tarmac / Gravel</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trio of images */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-4 md:gap-6">
          {[
            { src: cyclistImg, label: "The Ride", caption: "Dust roads at golden hour" },
            { src: murchisonImg, label: "The Falls", caption: "Murchison on the Nile" },
            { src: bwindiImg, label: "The Forest", caption: "Bwindi's misty canopy" },
          ].map((img, i) => (
            <figure key={i} className="group relative overflow-hidden rounded-2xl shadow-soft aspect-[4/5]">
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                width={1280}
                height={1280}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <div className="text-xs uppercase tracking-[0.25em] text-accent">{img.label}</div>
                <div className="font-display text-2xl mt-1">{img.caption}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-secondary py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-clay mb-3">Trip Highlights</div>
              <h2 className="font-display text-4xl md:text-5xl">Nine moments<br />you won't forget.</h2>
            </div>
            <div className="text-sm text-muted-foreground max-w-xs">
              Carefully sequenced so each day reveals a different face of Uganda.
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden shadow-soft">
            {highlights.map((h, i) => (
              <div key={h.t} className="bg-card hover:bg-accent/10 transition-colors flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={h.img}
                    alt={h.t}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="font-display text-xs text-clay">0{i + 1}</div>
                  <div className="font-display text-2xl mt-3">{h.t}</div>
                  <div className="text-sm text-muted-foreground mt-2 leading-relaxed">{h.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section id="itinerary" className="py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-clay mb-3">Day by Day</div>
            <h2 className="font-display text-4xl md:text-5xl">The 18-day route</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Eighteen stages, six regions, one unforgettable arc across the Pearl of Africa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {itinerary.map((s) => (
              <article
                key={s.day}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary hover:shadow-warm transition-all"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground bg-foreground/40 backdrop-blur-sm border border-bone/30 rounded-full px-2.5 py-1">
                      {s.region}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 font-display text-5xl text-primary-foreground leading-none drop-shadow-lg">
                    {s.day}
                  </div>
                </div>
                <div className="p-6">
                  <div className="font-display text-xl leading-tight">{s.title}</div>
                  <div className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.theme}</div>
                  {s.km && (
                    <div className="mt-5 pt-4 border-t border-border flex items-center gap-2 text-xs text-clay">
                      <span className="font-display text-base text-foreground">{s.km}</span>
                      <span className="uppercase tracking-widest">cycling</span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-clay mb-3">Field Notes</div>
              <h2 className="font-display text-4xl md:text-5xl">Gallery</h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Moments from the road — landscapes, wildlife, and the riders who chase them.
                Click any photo to view full size.
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              {galleryPhotos.length} photos
            </div>
          </div>
          <Gallery photos={galleryPhotos} />
        </div>
      </section>

      {/* Includes / Excludes — editorial split */}
      <section id="includes" className="py-28 bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.25em] text-clay mb-3">What's in the box</div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Everything you need,<br />nothing you don't.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              A clear breakdown of what your expedition fee covers — and the few things to budget for separately.
            </p>
          </div>

          {/* Included — dark hero panel with feature image */}
          <div className="relative grid lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden shadow-soft mb-10 bg-foreground text-background">
            {/* Feature image rail */}
            <div className="relative lg:col-span-4 min-h-[260px] lg:min-h-full">
              <img
                src={cyclistImg}
                alt="Cyclists riding through the Ugandan savannah"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-foreground via-foreground/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 lg:top-6 lg:bottom-auto">
                <div className="text-[11px] uppercase tracking-[0.3em] text-primary mb-2">Included · 01</div>
                <div className="font-display text-2xl lg:text-3xl leading-tight max-w-xs">
                  Crafted, guided & taken care of.
                </div>
              </div>
            </div>

            {/* Categories grid */}
            <div className="lg:col-span-8 p-8 md:p-12 grid sm:grid-cols-2 gap-x-10 gap-y-10">
              {includedGroups.map((group, i) => {
                const Icon = group.Icon;
                return (
                  <div key={group.label} className="relative">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.25em] text-background/50">
                          0{i + 1}
                        </div>
                        <div className="font-display text-lg text-background leading-tight">
                          {group.label}
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2.5 pl-1">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-3 text-background/80 text-[14.5px] leading-relaxed">
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Excluded — horizontal numbered ledger */}
          <div className="relative bg-secondary/60 border border-border/60 rounded-3xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 pb-6 border-b border-border/70">
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-clay/80 mb-2">Plan separately · 02</div>
                <div className="font-display text-2xl text-foreground">A few things to handle yourself</div>
              </div>
              <div className="text-sm text-muted-foreground max-w-xs">
                Standard travel essentials and optional extras you'll book on your own.
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-7">
              {excludedItems.map((x, i) => (
                <div key={x.t} className="group">
                  <div className="flex items-center gap-2 mb-2 text-clay/80">
                    <Minus className="w-3.5 h-3.5" />
                    <span className="text-[10px] uppercase tracking-[0.25em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="font-display text-base text-foreground mb-1 leading-snug">{x.t}</div>
                  <div className="text-sm text-muted-foreground leading-snug">{x.n}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-28 bg-secondary">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <div className="text-xs uppercase tracking-[0.25em] text-clay mb-3">Questions</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Everything you'd want to ask.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Still curious? Email{" "}
              <a href="mailto:info@blacksmithsafaris.com" className="text-primary underline underline-offset-4">
                info@blacksmithsafaris.com
              </a>{" "}
              and we'll get back within 24 hours.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="font-display text-lg text-left hover:text-primary py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* PARTNERS / SPONSORS */}
      <section id="partners" className="py-24 bg-background border-y border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.25em] text-clay mb-3">Partners & Sponsors</div>
            <h2 className="font-display text-4xl md:text-5xl">Powered by those who believe in the ride.</h2>
            <p className="mt-4 text-muted-foreground">
              Trusted partners helping us deliver a world-class expedition across the Pearl of Africa.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-border rounded-2xl overflow-hidden shadow-soft">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                title={p.name}
                className="group bg-card aspect-[3/2] flex items-center justify-center p-6 hover:bg-accent/10 transition-colors"
              >
                <span className="font-display text-lg md:text-xl text-clay/70 group-hover:text-primary transition-colors text-center leading-tight">
                  {p.name}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Interested in partnering with Uganda Epic 2026?{" "}
              <a href="mailto:info@blacksmithsafaris.com?subject=Uganda Epic 2026 — Partnership" className="text-primary underline underline-offset-4">
                Get in touch
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section id="book" className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-sunset" />
        <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative mx-auto max-w-5xl px-6 text-center text-primary-foreground">
          <div className="text-xs uppercase tracking-[0.3em] text-bone/90 mb-4">Limited to 50 riders</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            The road to Uganda<br/><span className="italic">begins here.</span>
          </h2>
          <div className="mt-12 inline-flex flex-col sm:flex-row items-stretch gap-px rounded-2xl overflow-hidden shadow-warm bg-foreground/10 backdrop-blur-sm">
            <div className="bg-card text-card-foreground px-8 py-6 text-left">
              <div className="text-xs uppercase tracking-widest text-clay">Departs</div>
              <div className="font-display text-2xl mt-1">31 Mar 2026</div>
              <div className="text-sm text-muted-foreground">Returns 17 Apr 2026</div>
            </div>
            <div className="bg-card text-card-foreground px-8 py-6 text-left">
              <div className="text-xs uppercase tracking-widest text-clay">From</div>
              <div className="font-display text-2xl mt-1">$2,950</div>
              <div className="text-sm text-muted-foreground">per rider · 50 slots</div>
            </div>
            <a href="mailto:info@blacksmithsafaris.com?subject=Uganda Epic 2026 — Reservation" className="bg-foreground text-primary-foreground hover:bg-foreground/90 transition px-10 py-6 flex items-center justify-center font-display text-xl">
              Reserve →
            </a>
          </div>
          <p className="mt-8 text-sm text-bone/80">
            Questions? Email <a href="mailto:info@blacksmithsafaris.com" className="underline underline-offset-4">info@blacksmithsafaris.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground/70 py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between gap-6 text-sm">
          <div className="font-display text-xl text-primary-foreground">
            <span className="text-accent">◐</span> Uganda Epic 2026
          </div>
          <div>Operated by BlackSmith Safaris · Adventure Cycling in Africa</div>
          <div>© {new Date().getFullYear()} · All rights reserved</div>
        </div>
      </footer>
    </div>
  );
}
