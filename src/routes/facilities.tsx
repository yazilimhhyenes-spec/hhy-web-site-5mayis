import { Link, createFileRoute } from "@tanstack/react-router";
import factoryImg from "@/assets/ender-chocolate-factory.webp";
import processingImg from "@/assets/process-processing.jpg";
import waterFactoryImg from "@/assets/water-factory-hhy-group.jpg";
import kalecikFarmImg from "@/assets/kalecik-farm.png";
import manisaKulaImg from "@/assets/manisa-kula.png";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "About Us — HHY Group" },
      { name: "description", content: "We are a huge family within the borders of Türkiye, producing across multiple factories and 10 million square meters of agricultural land." },
      { property: "og:title", content: "About Us — HHY Group" },
      { property: "og:description", content: "HHY Group corporate history and facilities." },
      { property: "og:image", content: factoryImg },
    ],
  }),
  component: FacilitiesPage,
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
    img: processingImg,
  },
  {
    name: "Afyonkarahisar — Water Factory",
    role: "Premium Bottling & Source",
    size: "15,000 m²",
    focus: "Natural Spring Water",
    location: "İhsaniye, Afyonkarahisar",
    img: waterFactoryImg,
  },
  {
    name: "Manisa Kula — Agricultural Operations",
    role: "Sustainable Farmland & Orchards",
    size: "10,000,000+ m²",
    focus: "Walnuts & Almonds",
    location: "Kula, Manisa",
    img: manisaKulaImg,
  },
  {
    name: "Ankara Kalecik — Agricultural Operations",
    role: "Vineyards & Farmland",
    size: "Vast Area",
    focus: "Vineyards & Grapes",
    location: "Kalecik, Ankara",
    img: kalecikFarmImg,
  },
];

function FacilitiesPage() {
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
            There are many investments connected to the HHY GROUP family. We are a group of companies that take care of over 200,000 saplings in 10,000,000 square meters of agricultural land, produce with a chocolate factory, a nut factory, and a water factory, and export to over 50 countries. From farm to finished product, we craft exceptional products that combine tradition, innovation, and care.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-bone)]">
        <div className="container-screen py-20 md:py-28 space-y-px bg-[var(--color-anthracite)]/15">
          {SITES.map((s, i) => (
            <div key={s.name} className="bg-white grid grid-cols-12 gap-0">
              <div className={`col-span-12 lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.img} alt={s.name} loading="lazy" width={1600} height={1000} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 p-8 md:p-12 flex flex-col justify-center">
                <div className="font-mono text-[var(--color-gold-muted)] text-sm">0{i + 1}</div>
                <h2 className="font-display text-3xl md:text-4xl mt-4 tracking-tight">{s.name}</h2>
                <p className="mt-4 text-[var(--color-anthracite)]/75">{s.role}</p>
                <div className="mt-8 flex flex-col border-t border-[var(--color-anthracite)]/15">
                  {[{ k: "Size", v: s.size }, { k: "Core Focus", v: s.focus }, { k: "Location", v: s.location }].map((d) => (
                    <div key={d.k} className="py-4 border-b border-[var(--color-anthracite)]/15 flex flex-col sm:flex-row gap-2 sm:gap-6 items-start">
                      <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--color-anthracite)]/50 shrink-0 sm:w-24 pt-1">{d.k}</div>
                      <div className="font-display text-lg sm:text-xl font-bold text-[var(--color-navy-deep)] leading-tight">{d.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
