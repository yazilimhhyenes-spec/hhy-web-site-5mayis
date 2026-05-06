import * as React from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import introVideo from "@/assets/Videos/eng-altyazili-hhy-group-tanitim-videosu.mp4";
import heroImg from "@/assets/hero-facility.jpg";
import agriAreasImg from "@/assets/agricultural-areas.webp";
import harvestImg from "@/assets/process-harvest.jpg";
import chocFactoryImg from "@/assets/chocolate-factory-ender-chocolate.png";
import nutProcessingImg from "@/assets/nut-processing.png";
import packagingImg from "@/assets/process-packaging.jpg";
import exportImg from "@/assets/process-export.jpg";
import productsImg from "@/assets/products-detail.jpg";
import videoThumb from "@/assets/video-thumb-image.png";
import callebautLogo from "@/assets/Logos/partners/callebaut-chocolate-oem-private-label.png";
import tarimKrediLogo from "@/assets/Logos/partners/tarim-kredi-logo.png";
import carrefourLogo from "@/assets/Logos/partners/carrefour-logo.svg";
import migrosLogo from "@/assets/Logos/partners/migros-logo.jpg";
import lidlLogo from "@/assets/Logos/partners/lidl-logo.webp";
import kalecikImg from "@/assets/kalecik-farm.png";
import manisaImg from "@/assets/manisa-kula.png";
import { Counter } from "@/components/Counter";
import { BRANDS } from "@/data/brands";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "HHY Group — Global Private Label Food Manufacturer" },
      { name: "description", content: "HHY Group is a vertically integrated food manufacturer in Türkiye. Private label chocolate, nuts, protein bars & snack production for global B2B partners." },
      { property: "og:title", content: "HHY Group — Global Private Label Food Manufacturer" },
      { property: "og:description", content: "Vertically integrated food production — agriculture to finished product. Private label & OEM for global partners." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
}));

const PARTNERS = [
  { name: "Callebaut", logo: callebautLogo },
  { name: "Tarim Kredi", logo: tarimKrediLogo, scale: "scale-[1.5]" },
  { name: "Carrefour", logo: carrefourLogo },
  { name: "Migros", logo: migrosLogo },
  { name: "Lidl", logo: lidlLogo },
];

const CAPABILITIES = [
  { title: "Agriculture", desc: "10M+ m² of managed farmland — walnuts, olives, almonds, seedless grapes. Traceable from soil to supply.", img: agriAreasImg },
  { title: "Chocolate Manufacturing", desc: "Bars, filled chocolates, coated wafers, compound products. 42,000 m² facility with 11 active lines.", img: chocFactoryImg },
  { title: "Nut Processing", desc: "Raw, roasted, seasoned, coated, sauced nuts. Retail-ready packaging with full batch traceability.", img: nutProcessingImg },
  { title: "Protein & Functional Foods", desc: "Protein bars, snack bars, nut-based formats. Custom formulation for modern retail channels.", img: productsImg },
];

const PL_STEPS = [
  {
    n: "01",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    t: "Idea & Brief",
    d: "Product concept, target market, and initial specifications."
  },
  {
    n: "02",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 000 2.828l.596.596a2 2 0 002.828 0l2.387-2.387a2 2 0 00.547-1.022l.477-2.387a6 6 0 01.517-3.86l.158-.318a6 6 0 00.517-3.86L9.428 6.05a2 2 0 01.547-1.022l2.387-2.387a2 2 0 012.828 0l.596.596a2 2 0 010 2.828l-2.387 2.387a2 2 0 01-1.022.547l-2.387.477a6 6 0 01-3.86-.517l-.318-.158a6 6 0 00-3.86-.517L6.05 9.428a2 2 0 01-.547 1.022l-2.387 2.387" />
      </svg>
    ),
    t: "R&D Development",
    d: "Recipe formulation, sample iterations, shelf-life testing."
  },
  {
    n: "03",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    t: "Production",
    d: "Scaled manufacturing on dedicated, HACCP-controlled lines."
  },
  {
    n: "04",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    t: "Packaging",
    d: "Custom artwork integration, retail-ready formats."
  },
  {
    n: "05",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2 2 2 0 012 2v.654M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    t: "Distribution",
    d: "Export documentation, logistics coordination, global delivery."
  },
];

const BRAND_COLORS: Record<string, string> = {
  "ender-chocolate": "#5C2D0E",
  "dedem-kuruyemis": "#8B6914",
  "sn4ck": "#C53030",
  "cerezshop": "#2B6CB0",
  "hhy-agro": "#276749",
};

function HomePage() {
  const containerRef = useScrollReveal();
  const [activeCap, setActiveCap] = React.useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);

  return (
    <div ref={containerRef}>
      {/* ═══ HERO (IMAGE BASED) ═══ */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="HHY Group Production Facility" className="w-full h-full object-cover scale-105 animate-[zoomOut_20s_linear_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-hhy-darker)]/80 via-[var(--color-hhy-dark)]/40 to-transparent" />
        </div>

        <div className="container-screen relative z-10 pt-20">
          <div className="max-w-3xl fade-in-up">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight font-bold text-white">
              High-Capacity Food
              <br />
              <span className="gradient-text">Production from Turkey.</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
              HHYGROUP is a global food producer operating across agriculture, chocolate, and nut processing.
              With advanced production facilities and extensive farmland in Turkey, we serve both
              private label clients and global retail markets under our own brands.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                to="/private-label"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--color-hhy-accent)] text-[var(--color-hhy-dark)] text-sm font-bold rounded-full hover:shadow-[0_4px_20px_rgba(1,208,145,0.35)] transition-all duration-300"
              >
                Private Label Solutions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link
                to="/about-us"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-white text-sm font-semibold rounded-full hover:bg-white hover:text-[var(--color-hhy-dark)] transition-all duration-300"
              >
                Our Facilities
              </Link>
            </div>
          </div>
        </div>

        {/* Metrics bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-[var(--color-hhy-darker)]/30 backdrop-blur-md">
          <div className="container-screen grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
            {[
              { v: 10, s: "M+ m²", l: "Farmland" },
              { v: 100, s: "K+", l: "Tons/Year" },
              { v: 50, s: "+", l: "Export Countries" },
              { v: 3, s: "", l: "Production Facilities" },
            ].map((m, i) => (
              <div key={i} className="py-4 md:py-6 px-4 text-center">
                <div className="text-xl md:text-2xl font-bold text-white">
                  <Counter to={m.v} /><span className="text-[var(--color-hhy-accent)] text-lg ml-0.5">{m.s}</span>
                </div>
                <div className="text-[9px] uppercase tracking-[0.1em] text-white/40 mt-0.5">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INTRODUCTION (VIDEO SECTION) ═══ */}
      <section className="bg-white section-padding overflow-hidden">
        <div className="container-screen">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 reveal">
              <span className="eyebrow">Who We Are</span>
              <h2 className="font-display text-3xl md:text-5xl tracking-tight mt-4 text-[var(--color-hhy-charcoal)] leading-tight">
                Industrial Production Power.
                <span className="text-[var(--color-hhy-muted-text)]">World-Class Precision.</span>
              </h2>
              <p className="mt-6 text-[var(--color-hhy-muted-text)] leading-relaxed max-w-lg">
                Since 1998, HHY Group has been building a vertically integrated ecosystem that spans from the soil to the shelf. Watch our corporate overview to see how we manage our agricultural assets and high-tech manufacturing facilities.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Vertically integrated from farm to factory",
                  "Exporting to 50+ countries worldwide",
                  "BRCGS, ISO, and Halal certified production",
                  "Dedicated R&D and private label expertise"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-medium text-[var(--color-hhy-charcoal)]">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-hhy-accent)]/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[var(--color-hhy-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 reveal">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                <img src={videoThumb} alt="Corporate Video Thumbnail" className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`} />
                <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-500 ${isVideoPlaying ? 'opacity-0' : 'opacity-100 group-hover:bg-black/30'}`}>
                  <div className="w-20 h-20 rounded-full bg-[var(--color-hhy-accent)] text-[var(--color-hhy-dark)] flex items-center justify-center shadow-[0_0_50px_rgba(1,208,145,0.4)] group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M5 3l14 9-14 9V3z" /></svg>
                  </div>
                </div>

                {isVideoPlaying && (
                  <video
                    autoPlay
                    controls
                    className="absolute inset-0 w-full h-full object-cover"
                    onEnded={() => setIsVideoPlaying(false)}
                  >
                    <source src={introVideo} type="video/mp4" />
                  </video>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PARTNERS ═══ */}
      <section className="bg-[var(--color-hhy-surface)] section-padding">
        <div className="container-screen">
          <div className="reveal text-center mb-16">
            <span className="eyebrow">Our Partners</span>
            <h2 className="text-[var(--color-hhy-muted-text)] mt-3">Collaborating with global retail leaders and established industry brands.</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-6xl mx-auto">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="reveal flex items-center justify-center w-[calc(50%-8px)] md:flex-1 md:min-w-[200px] p-6 md:p-10 bg-[var(--color-hhy-surface)] rounded-2xl md:rounded-3xl border border-[var(--color-hhy-border)] hover:border-[var(--color-hhy-accent)]/30 hover:shadow-[0_20px_50px_rgba(1,208,145,0.12)] hover:scale-[1.04] transition-all duration-500 group cursor-default"
              >
                <img src={p.logo} alt={p.name} className={`max-h-10 md:max-h-16 w-auto object-contain transition-transform duration-500 ${p.scale || ""}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES ═══ */}
      <section className="bg-[var(--color-hhy-dark)] section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
        <div className="container-screen relative">
          <div className="reveal max-w-2xl mb-14">
            <span className="eyebrow">What We Do</span>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight mt-4 text-white">
              Four pillars of
              <br />
              <span className="gradient-text">production strength.</span>
            </h2>
            <p className="mt-4 text-white/50 leading-relaxed max-w-xl">
              From managing our own farmland to delivering finished products globally — our vertically integrated model gives partners control, consistency, and confidence.
            </p>
          </div>

          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Left: tabs */}
            <div className="space-y-3">
              {CAPABILITIES.map((cap, i) => (
                <button
                  key={cap.title}
                  onClick={() => setActiveCap(i)}
                  className={`w-full text-left p-6 md:p-8 rounded-2xl transition-all duration-400 group border ${activeCap === i
                    ? "bg-white shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-transparent"
                    : "bg-white/[0.03] border-white/10 hover:bg-white/[0.07] hover:border-white/20"
                    }`}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-1">
                      <h3 className={`font-display text-lg md:text-xl font-bold transition-colors ${activeCap === i ? "text-[var(--color-hhy-charcoal)]" : "text-white/80"
                        }`}>{cap.title}</h3>
                      {activeCap === i && (
                        <p className={`mt-3 text-sm leading-relaxed fade-in-up ${activeCap === i ? "text-[var(--color-hhy-muted-text)]" : "text-white/40"
                          }`}>{cap.desc}</p>
                      )}
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${activeCap === i ? "bg-[var(--color-hhy-accent)] text-white shadow-[0_0_20px_rgba(1,208,145,0.4)]" : "bg-white/10 text-white/40"
                      }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right: image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto shadow-2xl">
              {CAPABILITIES.map((cap, i) => (
                <img
                  key={cap.title}
                  src={cap.img}
                  alt={cap.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeCap === i ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-hhy-dark)]/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass-dark rounded-2xl px-6 py-4 inline-flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-hhy-accent)] animate-pulse" />
                  <span className="text-sm font-bold tracking-wide text-white uppercase">{CAPABILITIES[activeCap].title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AGRO STRENGTH ═══ */}
      <section className="bg-[var(--color-hhy-surface)] section-padding">
        <div className="container-screen">
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow">Agricultural Foundation</span>
              <h2 className="font-display text-3xl md:text-5xl tracking-tight mt-4 text-[var(--color-hhy-charcoal)] leading-tight">
                Large-Scale Agricultural Infrastructure
                <br />
                <span className="text-xl md:text-3xl text-[var(--color-hhy-muted-text)]">
                  10 million m² of strategically managed farmland powering a fully integrated supply network.
                </span>
              </h2>
              <p className="mt-5 text-[var(--color-hhy-muted-text)] leading-relaxed max-w-lg">
                HHY Group manages over 10 million square meters of agricultural land across Kula and Kalecik regions, growing walnuts, olives, almonds, and seedless grapes. This vertical integration from farm to factory ensures traceable raw materials and consistent supply for all production lines.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { v: "6M m²", l: "Kula, Manisa" },
                  { v: "4.2M m²", l: "Kalecik, Ankara" },
                  { v: "200K+", l: "Saplings" },
                  { v: "4", l: "Crop Varieties" },
                ].map(s => (
                  <div key={s.l} className="p-4 rounded-xl bg-[var(--color-hhy-surface)] border border-[var(--color-hhy-border)]">
                    <div className="text-xl font-bold text-[var(--color-hhy-charcoal)]">{s.v}</div>
                    <div className="text-xs text-[var(--color-hhy-muted-text)] mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img src={kalecikImg} alt="Kalecik farmland" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] mt-8">
                <img src={manisaImg} alt="Kula Manisa farmland" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRIVATE LABEL (SOFT PITCH) ═══ */}
      <section className="bg-[var(--color-hhy-dark)] text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(1,208,145,0.3) 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
        <div className="container-screen relative">
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="eyebrow">Private Label & OEM</span>
              <h2 className="font-display text-3xl md:text-5xl tracking-tight mt-4">
                Your brand.
                <br />
                <span className="gradient-text">Our production infrastructure.</span>
              </h2>
              <p className="mt-5 text-white/55 leading-relaxed max-w-lg">
                From initial concept to shelf-ready product — we manage the entire private label process. Our R&D team, production lines, and export infrastructure are designed to bring your brand vision to market efficiently.
              </p>
              <Link
                to="/private-label"
                className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-[var(--color-hhy-accent)] text-[var(--color-hhy-dark)] text-sm font-bold rounded-full hover:shadow-[0_4px_20px_rgba(1,208,145,0.35)] transition-all duration-300"
              >
                Explore Private Label
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            <div className="space-y-2">
              {PL_STEPS.map((s) => (
                <div key={s.n} className="group flex items-start gap-4 p-4 rounded-xl border border-white/6 hover:border-[var(--color-hhy-accent)]/20 hover:bg-white/[0.03] transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-hhy-accent)]/10 flex items-center justify-center shrink-0 text-lg group-hover:bg-[var(--color-hhy-accent)]/20 transition-colors">
                    {s.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[var(--color-hhy-accent)] tracking-wider font-bold">{s.n}</span>
                      <h3 className="text-sm font-semibold text-white">{s.t}</h3>
                    </div>
                    <p className="text-xs text-white/40 mt-1 leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OUR BRANDS ═══ */}
      <section className="bg-white section-padding">
        <div className="container-screen">
          <div className="reveal text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Our Brands</span>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight mt-4 text-[var(--color-hhy-charcoal)]">
              Multi-brand production ecosystem.
            </h2>
            <p className="mt-4 text-[var(--color-hhy-muted-text)] leading-relaxed">
              Each brand operates in its own segment — together, they demonstrate the breadth of HHY Group's manufacturing capabilities.
            </p>
          </div>

          <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {BRANDS.map((brand) => {
              const color = BRAND_COLORS[brand.slug] || "#01d091";
              return (
                <Link
                  key={brand.slug}
                  to="/our-brands/$brandSlug"
                  params={{ brandSlug: brand.slug }}
                  className="group relative p-6 rounded-2xl border border-[var(--color-hhy-border)] hover:border-transparent bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" style={{ background: `linear-gradient(135deg, ${color}08, ${color}15)` }} />
                  <div className="relative">
                    <div className="h-16 flex items-center justify-center mb-5">
                      <img src={brand.logo} alt={brand.name} className="max-h-12 max-w-full object-contain group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h3 className="font-display text-base font-bold text-center text-[var(--color-hhy-charcoal)]">{brand.name}</h3>
                    <p className="text-[11px] text-center text-[var(--color-hhy-muted-text)] mt-1">{brand.category}</p>
                    <div className="mt-4 flex justify-center">
                      <span className="text-[10px] uppercase tracking-[0.1em] font-semibold text-[var(--color-hhy-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Brand →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CLOSING CTA ═══ */}
      <section className="bg-[var(--color-hhy-surface)] section-padding">
        <div className="container-screen">
          <div className="reveal max-w-4xl mx-auto text-center">
            <span className="eyebrow">Partnership</span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tight mt-4 text-[var(--color-hhy-charcoal)]">
              Collaborate with a manufacturing
              <br />
              partner built on <span className="gradient-text">scale, consistency,</span>
              <br />
              <span className="gradient-text">and experience.</span>
            </h2>
            <p className="mt-6 text-[var(--color-hhy-muted-text)] max-w-2xl mx-auto leading-relaxed">
              Whether you're launching a new product line or scaling an existing one — our production infrastructure, quality systems, and export expertise are ready to support your growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-hhy-accent)] text-[var(--color-hhy-dark)] text-sm font-bold rounded-full hover:shadow-[0_4px_20px_rgba(1,208,145,0.35)] hover:scale-[1.02] transition-all duration-300">
                Start a Conversation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/about-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[var(--color-hhy-border)] text-[var(--color-hhy-charcoal)] text-sm font-semibold rounded-full hover:bg-white hover:shadow-md transition-all duration-300">
                Visit Our Facilities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
