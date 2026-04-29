import { Link, Outlet, createFileRoute, useRouterState } from "@tanstack/react-router";
import { BRANDS } from "@/data/brands";

export const Route = createFileRoute("/our-brands")({
  head: () => ({
    meta: [
      { title: "Our Brands — HHY Group" },
      {
        name: "description",
        content:
          "Discover HHY Group consumer brands across chocolate, confectionery, nuts, and snack bars.",
      },
      { property: "og:title", content: "Our Brands — HHY Group" },
      {
        property: "og:description",
        content: "Trusted by consumers. Proven market presence.",
      },
    ],
  }),
  component: OurBrandsPage,
});

function OurBrandsPage() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  if (pathname !== "/our-brands") {
    return <Outlet />;
  }

  return (
    <>
      <section className="bg-[var(--color-navy-deep)] text-white pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="container-screen">
          <span className="rule-gold mb-6" />
          <div className="eyebrow mt-6">Our Brands</div>
          <h1 className="font-display text-5xl md:text-7xl mt-6 tracking-tight leading-[0.98] max-w-4xl">
            Trusted by consumers.
            <br />
            <span className="text-[var(--color-gold)]">Proven market presence.</span>
          </h1>
          <p className="mt-8 text-white/70 max-w-3xl text-lg leading-relaxed">
            HHY Group brings together consumer-facing brands across chocolate,
            snack bars, nuts, dried fruits, and agricultural raw materials. Each
            brand is supported by our production capability, quality standards,
            and market experience.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-bone)] py-20 md:py-28">
        <div className="container-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-[var(--color-anthracite)]/15 border border-[var(--color-anthracite)]/15">
            {BRANDS.map((brand, i) => (
              <Link
                key={brand.name}
                to="/our-brands/$brandSlug"
                params={{ brandSlug: brand.slug }}
                className="bg-white p-8 md:p-10 flex flex-col min-h-[360px] group hover:bg-[var(--color-navy-deep)] hover:text-white transition-colors"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="font-mono text-[var(--color-gold-muted)] text-sm">0{i + 1}</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--color-anthracite)]/45 text-right">
                    {brand.category}
                  </div>
                </div>

                <div className="mt-10 h-28 flex items-center justify-center bg-[var(--color-bone)]/35 p-8">
                  <img src={brand.logo} alt={`${brand.name} logo`} loading="lazy" className="max-h-16 max-w-full object-contain" />
                </div>

                <h2 className="font-display text-3xl mt-8 tracking-tight text-[var(--color-navy-deep)] group-hover:text-white transition-colors">
                  {brand.name}
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-anthracite)]/75 group-hover:text-white/70 transition-colors">
                  {brand.description}
                </p>
                <span className="mt-auto pt-8 text-[11px] uppercase tracking-[0.16em] font-bold text-[var(--color-gold-muted)] group-hover:text-[var(--color-gold)]">
                  View Brand →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-[var(--color-anthracite)]/15 pt-8">
            <p className="text-sm text-[var(--color-anthracite)]/65 max-w-2xl">
              Looking for private label, export partnership, or distribution opportunities with HHY Group brands?
            </p>
            <Link to="/contact" className="inline-flex w-fit px-7 py-3 bg-[var(--color-navy-deep)] text-white text-[12px] uppercase tracking-[0.16em] font-bold hover:bg-[var(--color-gold)] hover:text-[var(--color-navy-deep)] transition-colors">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
