import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/savannah-hero.jpg";
import cyclistImg from "@/assets/cyclist-savannah.jpg";
import bwindiImg from "@/assets/bwindi-forest.jpg";
import murchisonImg from "@/assets/murchison-falls.jpg";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
  { t: "Seven Hills", d: "Cycle Kampala's urban heartbeat" },
  { t: "Ziwa Rhinos", d: "Track white rhinos on two wheels" },
  { t: "Murchison Falls", d: "Game drives & a Nile boat cruise" },
  { t: "Rift Valley", d: "Roll through Albertine landscapes" },
  { t: "Crater Lakes", d: "Tea plantations near Fort Portal" },
  { t: "Bwindi", d: "Misty jungles of the gorilla region" },
  { t: "Kabale Highlands", d: "The Switzerland of Africa" },
  { t: "Lake Mburo", d: "Cycle among zebras and giraffes" },
  { t: "Ssese Islands", d: "Cross Lake Victoria, recover, exhale" },
];

const itinerary = [
  ["01", "Arrival in Kampala", "Welcome dinner & cultural storytelling"],
  ["02", "Kampala Urban Ride", "The Seven Hills Challenge"],
  ["03", "Ziwa Rhino Sanctuary", "Track rhinos on bike"],
  ["04", "Murchison Falls NP", "Safari & Nile cruise"],
  ["05", "Nile Ride", "Transition to Hoima"],
  ["06", "Rift Valley to Semuliki", "Hot springs visit"],
  ["07", "Climb to Fort Portal", "Highland ascent"],
  ["08", "Crater Lakes", "On to Queen Elizabeth NP"],
  ["09", "Savannah & Boat Safari", "Kazinga Channel"],
  ["10", "Into Bwindi", "Enter the gorilla region"],
  ["11", "Ruhija to Twin Lakes", "Mountain forest riding"],
  ["12", "Lake-to-Lake Kabale", "The Switzerland of Africa"],
  ["13", "Transfer to Lake Mburo", "Recovery & transit"],
  ["14", "Lake Mburo Safari Ride", "Cycle with zebras"],
  ["15", "Mburo to Kalisizo", "Rolling rural roads"],
  ["16", "Lake Victoria Crossing", "Ferry to the islands"],
  ["17", "Ssese Island Recovery", "Rest day in paradise"],
  ["18", "Return to Entebbe", "Farewell & departure"],
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
            <a href="#includes" className="hover:text-accent transition">Includes</a>
            <a href="#faq" className="hover:text-accent transition">FAQ</a>
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
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#book">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-base shadow-warm">
                  Reserve Your Spot
                </Button>
              </a>
              <a href="#journey">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base bg-bone/10 border-bone/30 text-primary-foreground hover:bg-bone/20">
                  Explore the Journey
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Stat bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-bone/20 bg-foreground/40 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-primary-foreground">
            {[
              ["18", "Days"],
              ["1,400+ km", "Cycled"],
              ["10", "National Parks & Lakes"],
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
      <section id="journey" className="py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-clay mb-4">The Expedition</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              From savannah<br />to rainforest.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              A trans-Uganda cycling expedition that weaves together untamed wilderness, vibrant culture,
              and breathtaking landscapes. From the energy of Kampala's seven hills to the ancient
              rainforests of Bwindi Impenetrable National Park — a continuous immersion in the Pearl of Africa.
            </p>
            <p>
              Ride through rolling savannahs alive with wildlife, navigate crater lakes and highland ridges,
              and connect with local communities along the way. Each stage reveals a new rhythm —
              urban buzz, rural calm, deep jungle silence.
            </p>
            <p className="text-foreground font-medium">
              This is more than a cycling tour. It's a full-country traverse for explorers who seek
              authenticity, challenge, and unforgettable encounters at every turn.
            </p>
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
              <div key={h.t} className="bg-card p-8 hover:bg-accent/10 transition-colors">
                <div className="font-display text-xs text-clay">0{i + 1}</div>
                <div className="font-display text-2xl mt-3">{h.t}</div>
                <div className="text-sm text-muted-foreground mt-2 leading-relaxed">{h.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section id="itinerary" className="py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-clay mb-3">Day by Day</div>
            <h2 className="font-display text-4xl md:text-5xl">The 18-day route</h2>
          </div>
          <ol className="relative">
            <div className="absolute left-[42px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-primary to-acacia opacity-40 hidden sm:block" />
            {itinerary.map(([day, title, sub]) => (
              <li key={day} className="relative flex gap-6 sm:gap-10 py-5 group">
                <div className="font-display text-2xl text-clay w-12 shrink-0 text-right tabular-nums">{day}</div>
                <div className="hidden sm:flex items-center justify-center w-8 shrink-0">
                  <span className="h-3 w-3 rounded-full bg-primary ring-4 ring-background group-hover:scale-150 transition-transform" />
                </div>
                <div className="flex-1 border-b border-border pb-5">
                  <div className="font-display text-xl">{title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{sub}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Includes / Excludes */}
      <section id="includes" className="bg-foreground text-primary-foreground py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-foreground/85" />
        <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Included</div>
            <h3 className="font-display text-3xl md:text-4xl mb-8">Everything you need on the road.</h3>
            <ul className="space-y-3 text-primary-foreground/85">
              {[
                "17 nights — lodges, safari camps, boutique hotels",
                "Full board: breakfast, lunch & dinner",
                "Drinking water during all rides",
                "Professional cycling guides (lead + sweep)",
                "Fully equipped support vehicle & mechanic",
                "Daily route briefing & navigation",
                "Luggage transfers throughout",
                "Rhino tracking at Ziwa",
                "Game drives in Murchison Falls",
                "Boat safaris — Kazinga & the Nile",
                "Cycling safari in Lake Mburo",
                "Hot springs in Semuliki",
                "Ssese Island ferry & experience",
                "Airport transfers & all park fees",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="text-accent mt-1">✦</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Not Included</div>
            <h3 className="font-display text-3xl md:text-4xl mb-8">Plan for these separately.</h3>
            <ul className="space-y-3 text-primary-foreground/85">
              {[
                "International flights",
                "Uganda visa fees",
                "Travel & medical insurance (mandatory)",
                "Bike rental, if not bringing your own",
                "Gorilla trekking permit (~$700–$800, optional)",
                "Chimpanzee tracking permit (optional)",
                "Alcoholic & premium beverages",
                "Personal expenses, laundry, tips, souvenirs",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="text-clay mt-1">○</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.25em] text-clay mb-3">Questions</div>
            <h2 className="font-display text-4xl md:text-5xl">Everything you'd want to ask.</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="font-display text-lg text-left hover:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
