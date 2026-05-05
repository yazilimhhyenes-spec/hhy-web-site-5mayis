import { Link, Outlet, createFileRoute, useRouterState } from "@tanstack/react-router";
import { BRANDS } from "@/data/brands";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/our-brands")({
  head: () => ({
    meta: [
      { title: "Our Brands — HHY Group" },
      { name: "description", content: "Explore HHY Group brands: Ender Chocolate, Dedem Kuruyemiş, SN4CK, Çerezshop, and HHY Agro." },
      { property: "og:title", content: "Our Brands — HHY Group" },
    ],
  }),
  component: OurBrandsPage,
});

const BRAND_COLORS: Record<string, string> = {
  "ender-chocolate": "#5C2D0E",
  "dedem-kuruyemis": "#8B6914",
  "sn4ck": "#C53030",
  "cerezshop": "#2B6CB0",
  "hhy-agro": "#276749",
};

function OurBrandsPage() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  if (pathname !== "/our-brands") return <Outlet />;

  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      <section className="bg-[var(--color-hhy-dark)] text-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-screen">
          <div className="max-w-3xl fade-in-up">
            <span className="eyebrow">Our Brands</span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4 tracking-tight leading-[1.05] text-white">
              Multi-brand
              <br />
              <span className="gradient-text">production ecosystem.</span>
            </h1>
            <p className="mt-6 text-white/55 max-w-2xl text-base md:text-lg leading-relaxed">
              Each brand operates in its own market segment — together, they showcase the breadth and depth of HHY Group's manufacturing capability across chocolate, nuts, snacks, and agriculture.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-hhy-surface)] section-padding">
        <div className="container-screen">
          <div className="reveal grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {BRANDS.map((brand, i) => {
              const color = BRAND_COLORS[brand.slug] || "#01d091";
              return (
                <Link
                  key={brand.slug}
                  to="/our-brands/$brandSlug"
                  params={{ brandSlug: brand.slug }}
                  className="group relative bg-white rounded-2xl border border-[var(--color-hhy-border)] overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:border-transparent transition-all duration-500"
                >
                  {/* Banner */}
                  <div className="relative h-44 overflow-hidden">
                    <img src={brand.banner} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${color}cc, ${color}33)` }} />
                    <div className="absolute bottom-4 left-5">
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 inline-flex items-center justify-center">
                        <img src={brand.logo} alt={brand.name} className="max-h-8 max-w-[120px] object-contain" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="text-[9px] uppercase tracking-[0.12em] font-bold text-white/80 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {brand.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="font-display text-xl font-bold text-[var(--color-hhy-charcoal)]">{brand.name}</h2>
                    <p className="mt-2 text-sm text-[var(--color-hhy-muted-text)] leading-relaxed line-clamp-3">{brand.headline}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {brand.capabilities.slice(0, 3).map(cap => (
                        <span key={cap} className="text-[10px] font-medium px-2 py-1 rounded-md bg-[var(--color-hhy-surface)] text-[var(--color-hhy-muted-text)]">{cap}</span>
                      ))}
                    </div>
                    <div className="mt-5 pt-4 border-t border-[var(--color-hhy-border)] flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[var(--color-hhy-accent)]">Explore Brand</span>
                      <div className="w-7 h-7 rounded-full bg-[var(--color-hhy-accent)]/10 flex items-center justify-center group-hover:bg-[var(--color-hhy-accent)] transition-colors duration-300">
                        <svg className="w-3 h-3 text-[var(--color-hhy-accent)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-6 rounded-2xl bg-white border border-[var(--color-hhy-border)]">
            <p className="text-sm text-[var(--color-hhy-muted-text)] max-w-xl">
              Looking for private label, export partnership, or distribution opportunities with HHY Group brands?
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-hhy-accent)] text-[var(--color-hhy-dark)] text-sm font-bold rounded-full hover:shadow-[0_4px_16px_rgba(1,208,145,0.3)] transition-all shrink-0">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
