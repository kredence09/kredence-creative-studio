import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeader, PlaceholderBlock, DoodleStar, DoodleArrow } from "./bits";

const SITES = [
  { name: "Aurelio Motors", url: "aureliomotors.com", tag: "Automotive" },
  { name: "Maison Vera", url: "maisonvera.co", tag: "Luxury Retail" },
  { name: "Terra Interiors", url: "terra-interiors.in", tag: "Furniture" },
  { name: "Sable & Salt", url: "sableandsalt.com", tag: "Hospitality" },
  { name: "Nocturne Parfums", url: "nocturne.parfums", tag: "Fragrance" },
  { name: "Fieldnote Capital", url: "fieldnote.capital", tag: "Finance" },
];

export function Websites() {
  return (
    <section id="work" className="bg-charcoal px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="03"
          label="Websites we've built"
          title="Sites with a pulse"
          ghost="SITES"
          invert
          note="Hover a frame to wake the site up."
        />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {SITES.map((s, i) => (
            <Reveal key={s.name} delay={i * 60} rotate={i % 2 ? 1.5 : -1.5}>
              <article className="group bg-paper border-teal/60 relative border-2 p-3 transition-all duration-500 hover:-translate-y-2 hover:rotate-0 hover:shadow-lift">
                <div className="border-charcoal/15 mb-2 flex items-center gap-2 border-b pb-2">
                  <span className="bg-teal size-2.5 rounded-full" />
                  <span className="bg-charcoal/25 size-2.5 rounded-full" />
                  <span className="bg-charcoal/25 size-2.5 rounded-full" />
                  <span className="bg-paper-dim font-mono text-charcoal/60 ml-2 flex-1 truncate px-2 py-1 text-[10px] tracking-wider">
                    {s.url}
                  </span>
                </div>
                <div className="relative overflow-hidden">
                  <PlaceholderBlock label="Website Screenshot" tall />
                  <div className="bg-teal/90 absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-500 group-hover:translate-y-0">
                    <span className="font-mono text-charcoal inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase">
                      View project <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <h3 className="font-display text-charcoal text-2xl">{s.name}</h3>
                  <span className="font-mono text-charcoal/60 text-[10px] tracking-[0.2em] uppercase">
                    {s.tag}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const GRAPHICS = [
  { title: "After Hours", type: "Campaign Key Visual", format: "4:5", layout: "portrait" },
  { title: "Common Ground", type: "Editorial Spread", format: "A3", layout: "wide" },
  { title: "Freshly Poured", type: "Social Campaign", format: "1:1", layout: "square" },
  { title: "Nocturne No. 04", type: "Packaging System", format: "3:4", layout: "portrait" },
  { title: "City in Motion", type: "Event Poster", format: "A2", layout: "tall" },
  { title: "Field Notes", type: "Launch Toolkit", format: "16:9", layout: "wide" },
];

export function Graphics() {
  return (
    <section id="graphics" className="paper-grain border-charcoal/15 border-y px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="04"
          label="Static graphics"
          title="Made to hold a gaze"
          ghost="GRAPHICS"
          note="Campaigns, posters, social systems and printed pieces — pinned to one working wall."
        />
        <div className="grid auto-rows-[15rem] gap-6 md:grid-cols-2 lg:grid-cols-4">
          {GRAPHICS.map((graphic, i) => (
            <Reveal
              key={graphic.title}
              delay={i * 60}
              rotate={i % 3 === 0 ? -1.5 : i % 3 === 1 ? 1 : -0.5}
              className={cn(
                "min-h-0",
                graphic.layout === "wide" && "lg:col-span-2",
                graphic.layout === "tall" && "md:row-span-2",
              )}
            >
              <article className="group bg-card border-charcoal/20 relative flex h-full flex-col border p-3 shadow-paper transition-all duration-500 hover:-translate-y-2 hover:rotate-0 hover:border-teal hover:shadow-lift">
                <div className="grid-lines bg-paper-dim relative min-h-0 flex-1 overflow-hidden border border-charcoal/15">
                  <div className="absolute inset-4 border border-charcoal/20 transition-transform duration-500 group-hover:scale-[0.97]">
                    <span className="bg-teal absolute left-0 top-0 h-2 w-2/3" />
                    <span className="font-display text-charcoal/15 absolute bottom-1 left-2 text-6xl leading-none md:text-7xl">
                      0{i + 1}
                    </span>
                    <span className="bg-charcoal absolute right-3 top-3 h-1/3 w-px" />
                    <span className="bg-charcoal/10 absolute bottom-3 right-3 h-1/3 w-1/3" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-paper/90 font-mono text-charcoal border-charcoal/30 border px-3 py-2 text-center text-[10px] tracking-[0.2em] uppercase shadow-paper">
                      {graphic.type}
                    </span>
                  </div>
                  <div className="bg-teal/90 absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-500 group-hover:translate-y-0">
                    <span className="font-mono text-charcoal inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase">
                      View piece <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-charcoal/50 text-[9px] tracking-[0.2em] uppercase">
                      {graphic.type}
                    </p>
                    <h3 className="font-display text-charcoal mt-1 text-2xl">{graphic.title}</h3>
                  </div>
                  <span className="font-mono text-charcoal/55 shrink-0 text-[9px] tracking-[0.18em] uppercase">
                    {graphic.format}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const VIDEOS = [
  "Brand Film — Automotive",
  "Reel Series — Beauty",
  "Launch Teaser — Fragrance",
  "Docu Cut — Hospitality",
  "Product Loop — Furniture",
  "Event Recap — Fashion",
  "Founder Story — Tech",
  "Campaign TVC — Retail",
];

export function Videos() {
  return (
    <section className="paper-grain px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="05"
          label="Videos edited"
          title="Cuts that hold"
          ghost="CUTS"
          note="Scroll sideways. Hover to arm the player."
        />
      </div>
      <div className="scrollbar-none -mx-6 flex snap-x gap-6 overflow-x-auto px-6 pb-6">
        {VIDEOS.map((v, i) => (
          <Reveal key={v} delay={i * 50} rotate={i % 2 ? 1 : -1} className="shrink-0 snap-start">
            <article className="group bg-card border-charcoal/20 w-[19rem] border p-3 shadow-paper transition-transform duration-400 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <PlaceholderBlock label="Video Thumbnail" tall />
                <span className="bg-teal text-charcoal absolute inset-0 m-auto grid size-16 place-items-center rounded-full transition-all duration-400 group-hover:scale-125 group-hover:rotate-12">
                  <Play className="size-6 fill-current" />
                </span>
                <span className="bg-charcoal text-paper font-mono absolute bottom-2 right-2 px-2 py-1 text-[10px] tracking-widest">
                  0{i + 1}:2{i}
                </span>
              </div>
              <h3 className="font-mono text-charcoal mt-3 text-[11px] tracking-[0.2em] uppercase">
                {v}
              </h3>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const LOGOS = [
  { name: "Orbit", shape: "rounded-full" },
  { name: "Vertex", shape: "" },
  { name: "Lume", shape: "rounded-full" },
  { name: "Kite", shape: "" },
  { name: "Anvil", shape: "rounded-full" },
  { name: "Petal", shape: "" },
  { name: "Nomad", shape: "rounded-full" },
  { name: "Quarry", shape: "" },
];

export function Logos() {
  return (
    <section className="bg-paper-dim border-charcoal/15 relative border-y px-6 py-28">
      <DoodleStar className="text-teal absolute top-16 right-12 size-16 rotate-12" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="06"
          label="Logos designed"
          title="Marks on paper"
          ghost="MARKS"
          note="Each one pinned up, slightly crooked. Hover to bring it into focus."
        />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {LOGOS.map((l, i) => (
            <Reveal key={l.name} delay={i * 50} rotate={i % 3 === 0 ? -3 : i % 3 === 1 ? 2 : -1}>
              <div
                className={cn(
                  "bg-card border-charcoal/20 group grid aspect-square place-items-center border p-6 shadow-paper transition-all duration-400 hover:rotate-0 hover:scale-[1.04] hover:shadow-lift",
                  l.shape,
                )}
              >
                <div className="text-center">
                  <div className="border-charcoal/30 group-hover:border-teal group-hover:bg-teal/15 mx-auto grid size-16 place-items-center border-2 transition-all duration-400">
                    <span className="font-display text-charcoal text-2xl">{l.name[0]}</span>
                  </div>
                  <p className="font-mono text-charcoal/60 group-hover:text-charcoal mt-3 text-[10px] tracking-[0.24em] uppercase transition-colors">
                    {l.name}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const BRANDS = ["Halcyon", "Verdant", "Mono&Co", "Saffron", "Northbay", "Ellis", "Pilot", "Dune", "Studio 9"];
const OFFSETS = ["-6deg", "3deg", "-2deg", "4deg", "-4deg", "2deg", "-3deg", "5deg", "-1deg"];

export function Brands() {
  return (
    <section className="relative px-6 py-28">
      <DoodleArrow className="text-charcoal/40 absolute left-10 top-24 hidden size-24 lg:block" />
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="07"
          label="Brands we've worked with"
          title="Good company"
          ghost="GOOD"
          note="Grey until you look at them properly."
        />
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {BRANDS.map((b, i) => (
            <Reveal key={b} delay={i * 55} rotate={0}>
              <div
                className="group border-teal/70 bg-card grid h-32 place-items-center border-2 grayscale transition-all duration-400 hover:grayscale-0 hover:scale-105 hover:shadow-lift"
                style={{ rotate: OFFSETS[i], marginTop: i % 3 === 1 ? "1.5rem" : undefined }}
              >
                <span className="font-display text-charcoal/50 group-hover:text-teal text-3xl transition-colors duration-300">
                  {b}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const INDUSTRIES = [
  "Automotive",
  "Luxury & Retail",
  "Beauty",
  "Real Estate",
  "Furniture & Interiors",
  "Food & Hospitality",
  "Fragrance & Lifestyle",
  "Media",
  "Personal Brands",
  "Fashion",
  "Technology",
  "Hospitality",
  "Wellness",
  "Education",
];

export function Industries() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setTilt({
        x: ((e.clientX - r.left) / r.width - 0.5) * 14,
        y: ((e.clientY - r.top) / r.height - 0.5) * 14,
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="bg-charcoal overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="08"
          label="Industries"
          title="Where we've worked"
          ghost="WHERE"
          invert
          note="Move your cursor — the cloud leans with you."
        />
        <div ref={wrapRef} className="flex flex-wrap justify-center gap-4 py-6">
          {INDUSTRIES.map((tag, i) => (
            <Reveal key={tag} delay={i * 40} rotate={0}>
              <span
                className={cn(
                  "wiggle-hover font-mono inline-block cursor-default px-5 py-3 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:scale-110",
                  i % 2
                    ? "bg-teal text-charcoal"
                    : "text-paper border-teal/70 border-2 hover:bg-teal hover:text-charcoal",
                )}
                style={{
                  transform: `translate3d(${tilt.x * ((i % 4) + 1) * 0.35}px, ${tilt.y * ((i % 3) + 1) * 0.35}px, 0) rotate(${i % 2 ? 1.5 : -1.5}deg)`,
                }}
              >
                {tag}
              </span>
            </Reveal>
          ))}
        </div>
        <div className="border-teal/25 mt-14 overflow-hidden border-y py-4">
          <div className="marquee-track flex w-max gap-10">
            {[...INDUSTRIES, ...INDUSTRIES].map((t, i) => (
              <span key={`${t}-${i}`} className="font-display text-paper/25 text-4xl whitespace-nowrap">
                {t} <span className="text-teal">✳</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
