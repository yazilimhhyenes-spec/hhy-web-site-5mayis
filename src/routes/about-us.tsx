import { Link, createFileRoute } from "@tanstack/react-router";
import factoryImg from "@/assets/ender-chocolate-factory.webp";
import nutProcessingImg from "@/assets/nut-processing.png";
import kalecikFarmImg from "@/assets/kalecik-farm.png";
import manisaKulaImg from "@/assets/manisa-kula.png";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — HHY Group" },
      { name: "description", content: "We are a huge family within the borders of Türkiye, producing across multiple factories and 10 million square meters of agricultural land." },
      { property: "og:title", content: "About Us — HHY Group" },
      { property: "og:description", content: "HHY Group corporate history and facilities." },
      { property: "og:image", content: factoryImg },
    ],
  }),
  component: AboutUsPage,
});

const SITES = [
  {
    name: "Ankara — Chocolate Manufacturing Facility",
    role: "Headquarters & Chocolate Production",
    size: "42,000 m²",
    focus: "Chocolates & Wafers",
    location: "Kahramankazan, Ankara",
    img: factoryImg,
  },
  {
    name: "Kırıkkale — Nut Processing Factory",
    role: "Roasting · Seasoning · Packaging",
    size: "10,000 m²",
    focus: "Nuts & Dried Fruits",
    location: "Balışeyh, Kırıkkale",
    img: nutProcessingImg,
  },
  {
    name: "Kula — Agricultural Operations",
    role: "Sustainable Farmland & Orchards",
    size: "6,000,000 m²",
    focus: "High-Volume Walnuts & Olives",
    location: "Kula, Manisa",
    img: manisaKulaImg,
  },
  {
    name: "Kalecik — Agricultural Operations",
    role: "Vineyards & Farmland",
    size: "4,200,000 m²",
    focus: "Almonds & Seedless Grapes",
    location: "Kalecik, Ankara",
    img: kalecikFarmImg,
  },
];

const CATEGORIES = [
  {
    name: "Private Label & OEM Manufacturing",
    items: [
      "Turnkey private label food production",
      "Retail-ready product development",
      "Custom recipes and formulations",
      "Brand-specific packaging support",
      "Export-ready B2B manufacturing",
    ],
  },
  {
    name: "Chocolate, Wafer & Bar Production",
    items: [
      "Chocolate bars and filled chocolates",
      "Wafer and coated wafer production",
      "Protein bars and snack bars",
      "Reduced-sugar product options",
      "High-capacity production lines",
    ],
  },
  {
    name: "Nut Processing & Snack Formulations",
    items: [
      "Raw and roasted nut processing",
      "Coated and sauced nut products",
      "Custom seasoning blends",
      "Premium mixed nut formulations",
      "Bulk and retail export packaging",
    ],
  },
  {
    name: "Agricultural Raw Material Supply",
    items: [
      "Sustainable farmland operations",
      "High-volume walnut supply",
      "Almond and seedless grape sourcing",
      "Traceable agricultural raw materials",
      "Integrated farm-to-factory control",
    ],
  },
];

function AboutUsPage() {
  return (
    <>
      <section className="bg-[var(--color-navy-deep)] text-white pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="container-screen">
          <span className="rule-gold mb-6" />
          <div className="eyebrow mt-6">About Us</div>
          <h1 className="font-display text-5xl md:text-7xl mt-6 tracking-tight leading-[0.98] max-w-4xl">
            Rooted in tradition.
            <br />
            <span className="text-[var(--color-gold)]">Driven by growth.</span>
          </h1>
          <p className="mt-8 text-white/70 max-w-3xl text-lg leading-relaxed">
            There are many investments connected to the HHY GROUP family. We are a group of companies that take care of over 200,000 saplings in 10,000,000 square meters of agricultural land, produce with a chocolate factory and a nut factory, and export to over 50 countries. From farm to finished product, we craft exceptional products that combine tradition, innovation, and care.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-bone)] py-20 md:py-28">
        <div className="container-screen">
          <div className="grid grid-cols-12 gap-8 mb-14">
            <div className="col-span-12 md:col-span-4">
              <span className="rule-gold mb-6" />
              <div className="eyebrow mt-6">Operations Footprint</div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-[1.05] text-[var(--color-navy-deep)]">
                Factories and farmland
                <br />
                <span className="text-[var(--color-anthracite)]/55">working as one supply system.</span>
              </h2>
            </div>
          </div>

          <div className="space-y-8 md:space-y-10">
          {SITES.map((s, i) => (
            <div key={s.name} className="bg-white border border-[var(--color-anthracite)]/10 grid grid-cols-12 gap-0 shadow-[0_18px_60px_rgb(11,31,58,0.08)]">
              <div className={`col-span-12 lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[16/10] lg:h-full lg:aspect-auto min-h-[320px] overflow-hidden">
                  <img src={s.img} alt={s.name} loading="lazy" width={1600} height={1000} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-deep)]/55 via-transparent to-transparent" />
                  <div className="absolute left-6 bottom-6 md:left-8 md:bottom-8 flex items-center gap-4 text-white">
                    <div className="font-mono text-sm tracking-[0.2em] text-[var(--color-gold)]">0{i + 1}</div>
                    <div className="h-px w-14 bg-[var(--color-gold)]" />
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/75">{s.location}</div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                <div className="eyebrow">{s.role}</div>
                <h2 className="font-display text-3xl md:text-5xl mt-5 tracking-tight leading-[1.02] text-[var(--color-navy-deep)]">{s.name}</h2>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-px bg-[var(--color-anthracite)]/12 border border-[var(--color-anthracite)]/12">
                  {[{ k: "Size", v: s.size }, { k: "Core Focus", v: s.focus }, { k: "Location", v: s.location }].map((d) => (
                    <div key={d.k} className="bg-white p-5 md:p-6">
                      <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--color-anthracite)]/45">{d.k}</div>
                      <div className="font-display text-lg md:text-xl font-bold text-[var(--color-navy-deep)] leading-tight mt-2">{d.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-screen">
          <div className="grid grid-cols-12 gap-8 mb-14">
            <div className="col-span-12 md:col-span-4">
              <span className="rule-gold mb-6" />
              <div className="eyebrow mt-6">Private Label Capabilities</div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-[1.05] text-[var(--color-navy-deep)]">
                From product idea to
                <br />
                <span className="text-[var(--color-anthracite)]/55">export-ready supply.</span>
              </h2>
              <p className="mt-6 text-[var(--color-anthracite)]/70 max-w-2xl leading-relaxed">
                HHY Group develops and manufactures private label food products for retailers,
                distributors, and industrial buyers. Our capabilities cover chocolate, wafers,
                protein bars, snack bars, raw and roasted nuts, coated and sauced nuts, mixed
                nut products, custom packaging, and export-compliant B2B supply.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-anthracite)]/15 border border-[var(--color-anthracite)]/15">
            {CATEGORIES.map((c, i) => (
              <div key={c.name} className="bg-white p-8 md:p-10">
                <div className="font-mono text-[var(--color-gold-muted)] text-sm">0{i + 1}</div>
                <h3 className="font-display text-2xl mt-4 tracking-tight">{c.name}</h3>
                <ul className="mt-8 space-y-4">
                  {c.items.map((it) => (
                    <li key={it} className="text-[15px] text-[var(--color-anthracite)]/85 flex gap-3">
                      <span className="text-[var(--color-gold)] mt-1">—</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-10 inline-flex text-[12px] uppercase tracking-[0.16em] font-bold text-[var(--color-navy-deep)] border-b-2 border-[var(--color-gold)] pb-1">
                  Request Specifications →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-navy-deep)] text-white py-20 md:py-28">
        <div className="container-screen">
          <h2 className="font-display text-3xl md:text-5xl tracking-tight max-w-3xl">Schedule a facility visit with our export team.</h2>
          <Link to="/contact" className="inline-flex mt-10 px-8 py-4 bg-[var(--color-gold)] text-[var(--color-navy-deep)] text-[12px] uppercase tracking-[0.18em] font-bold hover:bg-white transition-colors">
            Request Visit →
          </Link>
        </div>
      </section>
    </>
  );
}
