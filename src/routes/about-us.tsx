import { Link, createFileRoute } from "@tanstack/react-router";
import factoryImg from "@/assets/ender-chocolate-factory.webp";
import nutProcessingImg from "@/assets/nut-processing.png";
import kalecikFarmImg from "@/assets/kalecik-farm.png";
import manisaKulaImg from "@/assets/manisa-kula.png";
import buildingImg from "@/assets/hhy-group-building.png";
import { Counter } from "@/components/Counter";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — HHY Group | Global Food Production Company" },
      { name: "description", content: "HHY Group: vertically integrated food manufacturer in Türkiye with 10M+ m² farmland, chocolate & nut factories, exporting to 50+ countries since 1998." },
      { property: "og:title", content: "About Us — HHY Group" },
      { property: "og:description", content: "Our story, facilities, and production capabilities." },
      { property: "og:image", content: factoryImg },
    ],
  }),
  component: AboutUsPage,
});

const TIMELINE = [
  { 
    year: "1998", 
    title: "Strategic Foundation", 
    desc: "HHY Group was established in Ankara with a vision to revolutionize the food supply chain in Türkiye. Starting with core commodity trading, the company laid the groundwork for what would become a vertically integrated powerhouse in the global food sector." 
  },
  { 
    year: "2005", 
    title: "Industrial Manufacturing Excellence", 
    desc: "The launch of the Ender Chocolate factory marked our entry into high-tech manufacturing. Spanning 42,000 m², the facility was equipped with 11 specialized lines to produce premium chocolates and wafers, setting new standards for industrial-scale confectionery production." 
  },
  { 
    year: "2012", 
    title: "The Agricultural Revolution", 
    desc: "Recognizing that quality begins at the source, HHY Group acquired over 10 million square meters of managed farmland. This strategic move in Kula and Kalecik ensured total control over raw material quality, from soil health to harvest consistency." 
  },
  { 
    year: "2018", 
    title: "Advanced Nut Processing", 
    desc: "We expanded our manufacturing footprint with a dedicated 10,000 m² nut processing facility in Kırıkkale. This plant introduced advanced roasting and seasoned coating technologies, allowing us to serve the growing global demand for premium snack products." 
  },
  { 
    year: "2022", 
    title: "Global Export Leadership", 
    desc: "With a presence in over 50 countries, HHY Group solidified its position as a top-tier global exporter. We implemented end-to-end Private Label & OEM solutions, partnering with world-renowned retailers to bring Turkish production excellence to global shelves." 
  },
  { 
    year: "2024", 
    title: "Innovation & Functional Foods", 
    desc: "The launch of the SN4CK brand and our entry into the US market marked a new era of functional nutrition. By combining our agricultural heritage with modern R&D, we are now leading the way in protein bars and health-conscious snack innovation." 
  },
];

const SITES = [
  { name: "Chocolate Manufacturing Facility", role: "Headquarters & Chocolate Production", size: "42,000 m²", focus: "Chocolates & Wafers", location: "Kahramankazan, Ankara", img: factoryImg },
  { name: "Nut Processing Factory", role: "Roasting · Seasoning · Packaging", size: "10,000 m²", focus: "Nuts & Dried Fruits", location: "Balışeyh, Kırıkkale", img: nutProcessingImg },
  { name: "Kula Agricultural Operations", role: "Sustainable Farmland & Orchards", size: "6,000,000 m²", focus: "Walnuts & Olives", location: "Kula, Manisa", img: manisaKulaImg },
  { name: "Kalecik Agricultural Operations", role: "Vineyards & Farmland", size: "4,200,000 m²", focus: "Almonds & Grapes", location: "Kalecik, Ankara", img: kalecikFarmImg },
];

function AboutUsPage() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={buildingImg} alt="HHY Group Building" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-hhy-dark)]/80 via-[var(--color-hhy-dark)]/70 to-[var(--color-hhy-dark)]/90" />
        </div>
        <div className="container-screen relative z-10">
          <div className="max-w-3xl fade-in-up">
            <span className="eyebrow">About Us</span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4 tracking-tight leading-[1.05] text-white">
              Global production power.
              <br />
              <span className="gradient-text">Integrated from farm to factory.</span>
            </h1>
            <p className="mt-6 text-white/60 max-w-2xl text-base md:text-lg leading-relaxed">
              A group of companies managing over 200,000 saplings across 10 million m² of agricultural land, producing in multiple factories, and exporting to 50+ countries. From farm to finished product — tradition, innovation, and care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="bg-white section-padding">
        <div className="container-screen">
          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group p-8 md:p-10 rounded-2xl overflow-hidden border border-[var(--color-hhy-border)] bg-white">
              <img src={factoryImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.07] group-hover:scale-105 transition-transform duration-700" />
              <div className="relative z-10">
                <span className="eyebrow text-[var(--color-hhy-accent)]">Mission</span>
                <h3 className="font-display text-2xl md:text-3xl tracking-tight mt-4 text-[var(--color-hhy-charcoal)]">Reliable production at global standards.</h3>
                <p className="mt-4 text-[var(--color-hhy-muted-text)] leading-relaxed">
                  To deliver high-quality food production services that empower brands worldwide — through vertically integrated agriculture, certified manufacturing, and dependable export partnerships.
                </p>
              </div>
            </div>
            <div className="relative group p-8 md:p-10 rounded-2xl overflow-hidden border border-[var(--color-hhy-border)] bg-white">
              <img src={manisaKulaImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.07] group-hover:scale-105 transition-transform duration-700" />
              <div className="relative z-10">
                <span className="eyebrow text-[var(--color-hhy-muted-text)]">Vision</span>
                <h3 className="font-display text-2xl md:text-3xl tracking-tight mt-4 text-[var(--color-hhy-charcoal)]">Leading private label partner for global food brands.</h3>
                <p className="mt-4 text-[var(--color-hhy-muted-text)] leading-relaxed">
                  To become the preferred production partner for private label food brands worldwide — recognized for agricultural strength, manufacturing capability, and the ability to turn product ideas into shelf-ready reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[var(--color-hhy-surface)] py-24 md:py-32">
        <div className="container-screen">
          <div className="reveal text-center max-w-2xl mx-auto mb-20">
            <span className="eyebrow">Our Journey</span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tight mt-4 text-[var(--color-hhy-charcoal)]">
              Building a legacy 
              <br />
              <span className="text-[var(--color-hhy-muted-text)]">since 1998.</span>
            </h2>
          </div>
          <div className="reveal relative max-w-4xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[var(--color-hhy-border)]" />
            {TIMELINE.map((t, i) => (
              <div key={t.year} className={`relative flex items-start gap-8 mb-16 md:mb-24 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`hidden md:block flex-1 ${i % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                  <div className="text-2xl font-display font-bold text-[var(--color-hhy-charcoal)]">{t.title}</div>
                  <p className="text-base text-[var(--color-hhy-muted-text)] mt-3 leading-relaxed">{t.desc}</p>
                </div>
                <div className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-[var(--color-hhy-accent)] flex items-center justify-center shrink-0 shadow-md group">
                  <span className="text-xs font-bold text-[var(--color-hhy-accent)] group-hover:scale-110 transition-transform">{t.year}</span>
                </div>
                <div className={`flex-1 md:${i % 2 === 0 ? "pl-12" : "pr-12"}`}>
                  <div className="md:hidden">
                    <div className="text-xl font-display font-bold text-[var(--color-hhy-charcoal)]">{t.title}</div>
                    <p className="text-sm text-[var(--color-hhy-muted-text)] mt-3 leading-relaxed">{t.desc}</p>
                  </div>
                  <div className="hidden md:block h-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-white section-padding">
        <div className="container-screen">
          <div className="reveal max-w-2xl mb-14">
            <span className="eyebrow">Operations Footprint</span>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight mt-4 text-[var(--color-hhy-charcoal)]">
              Factories and farmland
              <br />
              <span className="text-[var(--color-hhy-muted-text)]">working as one supply system.</span>
            </h2>
          </div>

          <div className="space-y-6">
            {SITES.map((s, i) => (
              <div key={s.name} className="reveal group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[var(--color-hhy-border)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-shadow duration-500">
                <div className={`relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px] overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}>
                  <img src={s.img} alt={s.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-hhy-dark)]/40 to-transparent" />
                  <div className="absolute left-5 bottom-5 flex items-center gap-3">
                    <span className="text-xs font-mono text-[var(--color-hhy-accent)] tracking-wider">0{i + 1}</span>
                    <span className="w-8 h-px bg-[var(--color-hhy-accent)]" />
                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/70">{s.location}</span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="eyebrow">{s.role}</span>
                  <h3 className="font-display text-2xl md:text-3xl mt-3 tracking-tight text-[var(--color-hhy-charcoal)]">{s.name}</h3>
                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {[{ k: "Size", v: s.size }, { k: "Focus", v: s.focus }, { k: "Location", v: s.location }].map((d) => (
                      <div key={d.k} className="p-4 rounded-xl bg-[var(--color-hhy-surface)]">
                        <div className="text-[10px] uppercase tracking-[0.12em] text-[var(--color-hhy-muted-text)]">{d.k}</div>
                        <div className="text-sm font-bold text-[var(--color-hhy-charcoal)] mt-1">{d.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-hhy-dark)] text-white section-padding">
        <div className="container-screen text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl tracking-tight">Schedule a facility visit with our team.</h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">See our production lines, meet our team, and discuss how we can support your brand goals.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[var(--color-hhy-accent)] text-[var(--color-hhy-dark)] text-sm font-bold rounded-full hover:shadow-[0_4px_20px_rgba(1,208,145,0.35)] transition-all duration-300">
            Request a Visit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
