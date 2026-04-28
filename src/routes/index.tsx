import * as React from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { CertLogos } from "@/components/CertLogos";
import heroImg from "@/assets/hero-facility.jpg";
import hhyGroupBuildingImg from "@/assets/hhy-group-building.png";
import agriAreasImg from "@/assets/agricultural-areas.webp";
import harvestImg from "@/assets/process-harvest.jpg";
import chocFactoryImg from "@/assets/chocolate-factory-ender-chocolate.png";
import nutProcessingImg from "@/assets/nut-processing.png";
import packagingImg from "@/assets/process-packaging.jpg";
import exportImg from "@/assets/process-export.jpg";
import productsImg from "@/assets/products-detail.jpg";
import videoThumb from "@/assets/video-thumb-image.png";
import hhyVideo from "@/assets/Videos/eng-altyazili-hhy-group-tanitim-videosu.mp4";
import bannerVideo from "@/assets/Videos/banner-video-hhy-group-uzun.mp4";
import callebautLogo from "@/assets/Logos/callebaut-chocolate-oem-private-label.png";
import tarimKrediLogo from "@/assets/Logos/tarim-kredi-logo.png";
import carrefourLogo from "@/assets/Logos/carrefour-logo.svg";
import migrosLogo from "@/assets/Logos/migros-logo.svg";
import patiswissLogo from "@/assets/Logos/patiswiss-logo.webp";
import { Counter } from "@/components/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HHY Group — High-Capacity Food Production Company" },
      {
        name: "description",
        content:
          "HHYGROUP is a global food producer operating in agriculture, chocolate manufacturing, and nut processing. Managing extensive farmland and advanced production facilities in Türkiye.",
      },
      { property: "og:title", content: "HHY Group — Bridging the gap between your brand and customer" },
      {
        property: "og:description",
        content: "Global food producer operating in agriculture, chocolate manufacturing, and nut processing.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  { step: "01", title: "Sustainable Agricultural Operations", desc: "Managing over 10 million square meters of fertile farmland across Manisa and Ankara. We cultivate premium walnuts, almonds, and vineyards using advanced, eco-friendly farming technologies.", img: agriAreasImg },
  { step: "02", title: "Chocolate & Confectionery Production", desc: "Operating a massive BRC and HACCP-certified manufacturing complex. Our high-capacity lines produce premium filled chocolates, couverture, and wafers tailored for global industrial buyers.", img: chocFactoryImg },
  { step: "03", title: "Industrial Nut Processing", desc: "Our 10,000 m² specialized facility manages high-volume roasting, seasoning, and packaging. We process premium almonds, cashews, and peanuts under strict international food safety regimes.", img: nutProcessingImg },
];

const CERTS = [
  { name: "BRC v9", Logo: CertLogos.BRC },
  { name: "ISO 22000", Logo: CertLogos.ISO22000 },
  { name: "ISO 9001", Logo: CertLogos.ISO9001 },
  { name: "HACCP", Logo: CertLogos.HACCP },
  { name: "Halal", Logo: CertLogos.Halal },
  { name: "Kosher", Logo: CertLogos.Kosher },
  { name: "IFS Food", Logo: CertLogos.IFS },
  { name: "SEDEX", Logo: CertLogos.SEDEX }
];

const PARTNERS = [
  { name: "Callebaut", logo: callebautLogo },
  { name: "Tarim Kredi", logo: tarimKrediLogo },
  { name: "Carrefour", logo: carrefourLogo },
  { name: "Migros", logo: migrosLogo },
  { name: "Patiswiss", logo: patiswissLogo },
];

function HomePage() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroImg}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bannerVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[var(--color-navy-deep)]/75" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,31,58,0.4) 0%, rgba(11,31,58,0.85) 100%)",
          }}
        />

        <div className="container-screen relative z-10 pt-32 pb-24">
          <div className="max-w-4xl fade-in-up">
            <div className="flex items-center gap-4 mb-8">
              <span className="rule-gold" />
              <span className="eyebrow !text-[var(--color-gold)]">Welcome to HHY Group Official Website</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight font-bold">
              High-Capacity Food Production
              <br />
              Based in Türkiye
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/75 max-w-3xl leading-relaxed">
              Bridging the gap between your brand and your customers. HHYGROUP is a global food
              producer specializing in agriculture, chocolate manufacturing, and nut processing —
              delivering end-to-end private label solutions. From concept development and custom
              formulations to scalable production and packaging, we empower brands to create
              high-quality chocolate, protein bars, and nut products tailored to their market.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                to="/about-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-gold)] text-[var(--color-navy-deep)] text-[12px] uppercase tracking-[0.18em] font-bold hover:bg-white transition-colors"
              >
                Visit Our Facilities →
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white text-[12px] uppercase tracking-[0.18em] font-bold hover:bg-white hover:text-[var(--color-navy-deep)] transition-colors"
              >
                Become a Global Partner
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="container-screen flex items-center justify-between text-white/40 text-[10px] uppercase tracking-[0.2em]">
            <span>Headquartered in Ankara, Türkiye</span>
            <span className="hidden md:inline">Global Food Producer</span>
          </div>
        </div>
      </section>

      {/* TRUST METRICS */}
      <section className="bg-[var(--color-navy-deep)] text-white border-y border-white/10">
        <div className="container-screen py-16 md:py-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              { v: 10, suffix: "M+ m²", label: "Sustainable Farmland" },
              { v: 100, suffix: "k+", label: "Tons Annual Capacity" },
              { v: 50, suffix: "+", label: "Export Destinations" },
              { v: 3, suffix: "", label: "Major Factories" },
            ].map((m, i) => (
              <div key={i} className="bg-[var(--color-navy-deep)] p-8 md:p-10">
                <div className="font-display text-4xl md:text-6xl font-bold tracking-tight text-[var(--color-gold)]">
                  <Counter to={m.v} />
                  <span className="text-white/80 text-2xl md:text-4xl ml-1">{m.suffix}</span>
                </div>
                <div className="mt-4 text-[11px] uppercase tracking-[0.18em] text-white/55 leading-relaxed max-w-[220px]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF OF EXISTENCE */}
      <section className="bg-[var(--color-bone)]">
        <div className="container-screen py-20 md:py-32">
          <div className="grid grid-cols-12 gap-8 mb-12">
            <div className="col-span-12 md:col-span-4">
              <span className="rule-gold mb-6" />
              <div className="eyebrow mt-6">Global Infrastructure</div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-[1.05]">
                A real facility.
                <br />
                <span className="text-[var(--color-anthracite)]/60">Verifiable on the ground.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-px bg-[var(--color-anthracite)]/15">
            <div className="col-span-12 lg:col-span-7 bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={hhyGroupBuildingImg}
                  alt="HHY Group factory exterior in Sincan Organized Industrial Zone, Ankara"
                  loading="lazy"
                  width={1600}
                  height={1200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 bg-white p-8 md:p-12 flex flex-col">
              <div className="eyebrow">Headquarters & Main Plant</div>
              <h3 className="font-display text-2xl md:text-3xl mt-4 tracking-tight">
                Kahramankazan, Ankara
              </h3>
              <address className="not-italic mt-4 text-[var(--color-anthracite)]/80 leading-relaxed text-[15px]">
                106. Cadde no:24<br />
                Saray Mah. Kahramankazan / Ankara<br />
                Türkiye
              </address>

              <div className="mt-8 grid grid-cols-2 gap-px bg-[var(--color-anthracite)]/15 border border-[var(--color-anthracite)]/15">
                {[
                  { k: "Operational Since", v: "1998" },
                  { k: "Facility Size", v: "42,000 m²" },
                  { k: "Production Lines", v: "11 active" },
                  { k: "Cold Storage", v: "8,500 m³" },
                ].map((d) => (
                  <div key={d.k} className="bg-white p-5">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-anthracite)]/55">{d.k}</div>
                    <div className="font-display text-xl font-bold mt-1 text-[var(--color-navy-deep)]">{d.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--color-anthracite)]/15 flex-1 flex items-end">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=HHY+Group,+106.+Cadde+no:24,+Saray+Mah.,+Kahramankazan,+Ankara"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] font-bold text-[var(--color-navy-deep)] border-b-2 border-[var(--color-gold)] pb-1 hover:gap-4 transition-all"
                >
                  Open in Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Video embed */}
          <div className="mt-px aspect-[16/9] w-full bg-[var(--color-navy-deep)] overflow-hidden border border-[var(--color-anthracite)]/15 relative group">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls={isPlaying}
              poster={videoThumb}
              preload="none"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={hhyVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <button
                onClick={() => videoRef.current?.play()}
                className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors z-10"
                aria-label="Play video"
              >
                <div className="w-20 h-20 md:w-28 md:h-28 bg-[var(--color-gold)] text-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.3)] transform transition-transform duration-300 hover:scale-110">
                  <svg className="w-8 h-8 md:w-10 md:h-10 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                </div>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* OUR BRANDS */}
      <section className="bg-white">
        <div className="container-screen py-20 md:py-32">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-4">
              <span className="rule-gold mb-6" />
              <div className="eyebrow mt-6">Partners</div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-[1.05] text-[var(--color-navy-deep)]">
                Companies working with us.
                <br />
                <span className="text-[var(--color-anthracite)]/55">Long-term production partners.</span>
              </h2>
            </div>
          </div>

          <div className="overflow-hidden bg-white">
            <div className="flex w-fit animate-marquee pause-marquee-row">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex shrink-0">
                  {PARTNERS.map((brand) => (
                    <div
                      key={`${brand.name}-${i}`}
                      className="w-[180px] md:w-[240px] p-8 md:p-12 flex items-center justify-center hover:bg-[var(--color-bone)] transition-all duration-300 group/item"
                    >
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-h-16 md:max-h-20 w-auto transition-transform duration-500 group-hover/item:scale-110"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex w-fit animate-marquee-reverse pause-marquee-row">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex shrink-0">
                  {PARTNERS.map((brand) => (
                    <div
                      key={`${brand.name}-reverse-${i}`}
                      className="w-[180px] md:w-[240px] p-8 md:p-12 flex items-center justify-center hover:bg-[var(--color-bone)] transition-all duration-300 group/item"
                    >
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-h-16 md:max-h-20 w-auto transition-transform duration-500 group-hover/item:scale-110"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[var(--color-navy-deep)] text-white">
        <div className="container-screen py-20 md:py-32">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-4">
              <span className="rule-gold mb-6" />
              <div className="eyebrow mt-6">What We Do</div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-[1.05]">
                Core Services and
                <br />
                <span className="text-white/55">Production Facilities.</span>
              </h2>
            </div>
          </div>

          <div className="space-y-px bg-white/10">
            {SERVICES.map((p, i) => (
              <div
                key={p.step}
                className="grid grid-cols-12 gap-0 bg-[var(--color-navy-deep)] hover:bg-[var(--color-navy)] transition-colors group"
              >
                <div className="col-span-12 md:col-span-2 p-6 md:p-8 border-r border-white/10">
                  <div className="font-mono text-[var(--color-gold)] text-sm tracking-widest">{p.step}</div>
                </div>
                <div className="col-span-12 md:col-span-5 p-6 md:p-8 border-r border-white/10">
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight">{p.title}</h3>
                  <p className="mt-4 text-white/65 leading-relaxed text-[15px] max-w-md">{p.desc}</p>
                </div>
                <div className="col-span-12 md:col-span-5 aspect-[16/9] md:aspect-auto overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.title} — HHY Group`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-[var(--color-bone)]">
        <div className="container-screen py-20 md:py-28">
          <div className="grid grid-cols-12 gap-8 mb-12">
            <div className="col-span-12 md:col-span-5">
              <span className="rule-gold mb-6" />
              <div className="eyebrow mt-6">Global Standards & Certifications</div>
              <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-[1.05] mt-6">
                Audited.
                <br />
                <span className="text-[var(--color-anthracite)]/60">Verified. Repeatable.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-12">
              <p className="text-[var(--color-anthracite)]/75 leading-relaxed max-w-xl">
                Every production line operates under continuously audited quality and food-safety
                regimes recognized by the world's largest retailers and importers. Certificates
                are issued, controlled, and re-audited annually by accredited third parties.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {CERTS.map((c) => (
              <div
                key={c.name}
                className="bg-white border border-[var(--color-anthracite)]/10 p-4 md:p-6 flex flex-col items-center justify-center aspect-[4/3] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-[var(--color-gold)] transition-all duration-300 group rounded-sm"
              >
                <div className="w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 max-h-16 md:max-h-20 flex items-center justify-center">
                  <c.Logo />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVATE LABEL */}
      <section className="bg-[var(--color-anthracite)] text-white relative overflow-hidden">
        <img
          src={productsImg}
          alt=""
          aria-hidden
          loading="lazy"
          width={1600}
          height={1000}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-anthracite)] via-[var(--color-anthracite)]/90 to-transparent" />
        <div className="container-screen py-20 md:py-32 relative">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-7">
              <span className="rule-gold mb-6" />
              <div className="eyebrow mt-6">Private Label · OEM</div>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.02] mt-6 max-w-2xl">
                Your Brand.
                <br />
                Our Production Power.
              </h2>
              <p className="mt-8 text-white/70 leading-relaxed max-w-3xl text-lg">
                HHY Group manufactures private label and OEM snack products for retailers,
                distributors, and confectionery brands — including protein bars, wafers,
                chocolate bars, filled chocolates, chocolate-coated products, roasted nuts, raw nuts,
                coated nuts, sauced nuts, and mixed nut formulations with export-ready documentation.
              </p>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/15 border border-white/15">
                {[
                  { n: "01", t: "Product Development", d: "Recipe, ingredient sourcing, nutritional targets, and specification engineering with our R&D team." },
                  { n: "02", t: "Bars, Wafers & Chocolate", d: "Private label protein bars, wafers, chocolate bars, filled chocolates, and chocolate-coated product manufacturing." },
                  { n: "03", t: "Nuts & Export Supply", d: "Raw, roasted, coated, sauced, and mixed nut products prepared with traceability and export documentation." },
                ].map((s) => (
                  <div key={s.n} className="bg-[var(--color-anthracite)] p-6">
                    <div className="font-mono text-[var(--color-gold)] text-sm">{s.n}</div>
                    <h3 className="font-display text-xl mt-3 tracking-tight">{s.t}</h3>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.d}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  to="/private-label"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-gold)] text-[var(--color-navy-deep)] text-[12px] uppercase tracking-[0.18em] font-bold hover:bg-white transition-colors"
                >
                  Start Private Label Project →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="bg-[var(--color-bone)]">
        <div className="container-screen py-20 md:py-28">
          <div className="grid grid-cols-12 gap-8 mb-12">
            <div className="col-span-12 md:col-span-5">
              <span className="rule-gold mb-6" />
              <div className="eyebrow mt-6">Industry Insights</div>
              <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-[1.05] mt-6">
                Market intelligence
                <br />
                <span className="text-[var(--color-anthracite)]/60">from the source.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-12">
              <p className="text-[var(--color-anthracite)]/75 leading-relaxed max-w-xl">
                Quarterly harvest forecasts, export-grade pricing analysis, and regulatory
                briefings — written by our trade desk for procurement professionals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-anthracite)]/15 border border-[var(--color-anthracite)]/15">
            {[
              { slug: "turkiye-hazelnut-outlook-2026", tag: "Market Report · Q1 2026", title: "Türkiye Hazelnut Outlook: Yield, Frost Risk and Export Forecast", date: "March 2026" },
              { slug: "harvest-calendar-manisa-2026", tag: "Harvest Calendar", title: "2026 Manisa Harvest Windows by Variety", date: "February 2026" },
              { slug: "eu-aflatoxin-compliance-brief", tag: "Regulatory Brief", title: "EU Aflatoxin Limits & Compliance Pathways for Bulk Importers", date: "January 2026" },
            ].map((p) => (
              <Link
                key={p.slug}
                to="/insights/$articleId"
                params={{ articleId: p.slug }}
                className="bg-white p-8 md:p-10 group cursor-pointer hover:bg-[var(--color-navy-deep)] hover:text-white transition-colors flex flex-col"
              >
                <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-gold-muted)] group-hover:text-[var(--color-gold)]">
                  {p.tag}
                </div>
                <h3 className="font-display text-xl mt-6 tracking-tight leading-snug">{p.title}</h3>
                <div className="mt-auto pt-12 border-t border-[var(--color-anthracite)]/15 group-hover:border-white/20 flex justify-between items-center text-[11px] uppercase tracking-[0.16em] text-[var(--color-anthracite)]/50 group-hover:text-white/55">
                  <span>{p.date}</span>
                  <span>Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-[var(--color-navy-deep)] text-white">
        <div className="container-screen py-24 md:py-32">
          <div className="max-w-4xl">
            <span className="rule-gold mb-8" />
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.0]">
              Production capacity
              <br />
              <span className="text-[var(--color-gold)]">at an industrial scale.</span>
            </h2>
            <p className="mt-8 text-white/65 text-lg max-w-2xl leading-relaxed">
              Schedule a facility visit with our export team, or get in touch to learn more 
              about our production lines, certifications, and global partnership opportunities.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-gold)] text-[var(--color-navy-deep)] text-[12px] uppercase tracking-[0.18em] font-bold hover:bg-white transition-colors">
                Visit Our Facilities →
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white text-[12px] uppercase tracking-[0.18em] font-bold hover:bg-white hover:text-[var(--color-navy-deep)] transition-colors">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
