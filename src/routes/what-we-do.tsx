import { Link, createFileRoute } from "@tanstack/react-router";
import productsImg from "@/assets/products-detail.jpg";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What We Do — HHY Group" },
      { name: "description", content: "From farm to finished product, we specialize in every step — cultivating raw ingredients, crafting premium chocolates, processing fine nuts, and bottling spring water." },
      { property: "og:title", content: "What We Do — HHY Group" },
      { property: "og:description", content: "Extensive industrial and retail product portfolio." },
      { property: "og:image", content: productsImg },
    ],
  }),
  component: ProductsPage,
});

const CATEGORIES = [
  {
    name: "Agricultural Raw Material",
    items: [
      "Sustainable farmland operations",
      "Premium walnuts and almonds",
      "Seedless black grapes",
      "Eco-friendly farming yields",
      "Solar and wind-powered irrigation",
    ],
  },
  {
    name: "Chocolate Manufacturing",
    items: [
      "BRC, ISO, Halal & FDA certified",
      "Premium filled chocolates",
      "Chocolate bars and wafers",
      "Reduced-sugar options",
      "High-capacity production lines",
    ],
  },
  {
    name: "Nut Processing Factory",
    items: [
      "Industrial-scale roasting",
      "Custom seasoning blends",
      "Bulk export packaging",
      "Almonds, cashews, and peanuts",
      "Premium mixed nut formulations",
    ],
  },
  {
    name: "Private Label Production",
    items: [
      "Turnkey OEM services",
      "Product R&D and formulation",
      "Custom branding and design",
      "Export-compliant packaging",
      "Global B2B partnership models",
    ],
  },
];

function ProductsPage() {
  return (
    <>
      <section className="relative bg-[var(--color-navy-deep)] text-white pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <img src={productsImg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy-deep)] via-[var(--color-navy-deep)]/85 to-transparent" />
        <div className="container-screen relative">
          <span className="rule-gold mb-6" />
          <div className="eyebrow mt-6">What We Do</div>
          <h1 className="font-display text-5xl md:text-7xl mt-6 tracking-tight leading-[0.98] max-w-4xl">
            From farm to
            <br />
            <span className="text-[var(--color-gold)]">finished product.</span>
          </h1>
          <p className="mt-8 text-white/70 max-w-2xl text-lg">
            We specialize in every step — cultivating raw ingredients, crafting premium chocolates, processing fine nuts, and creating custom brands. Our passion for quality ensures exceptional products tailored to global industrial buyers.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-bone)] py-20 md:py-28">
        <div className="container-screen grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-anthracite)]/15 border border-[var(--color-anthracite)]/15">
          {CATEGORIES.map((c, i) => (
            <div key={c.name} className="bg-white p-8 md:p-10">
              <div className="font-mono text-[var(--color-gold-muted)] text-sm">0{i + 1}</div>
              <h2 className="font-display text-2xl mt-4 tracking-tight">{c.name}</h2>
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
      </section>
    </>
  );
}
