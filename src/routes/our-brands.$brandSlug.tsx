import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { BRANDS, getBrandBySlug } from "@/data/brands";

export const Route = createFileRoute("/our-brands/$brandSlug")({
  loader: ({ params }) => {
    const brand = getBrandBySlug(params.brandSlug);

    if (!brand) {
      throw notFound();
    }

    return { brand };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.brand.name ?? "Brand"} — HHY Group` },
      {
        name: "description",
        content: loaderData?.brand.description ?? "HHY Group brand detail page.",
      },
      { property: "og:title", content: `${loaderData?.brand.name ?? "Brand"} — HHY Group` },
      {
        property: "og:description",
        content: loaderData?.brand.description ?? "HHY Group brand detail page.",
      },
    ],
  }),
  component: BrandDetailPage,
});

function BrandDetailPage() {
  const { brand } = Route.useLoaderData();
  const otherBrands = BRANDS.filter((item) => item.slug !== brand.slug);

  return (
    <>
      <section className="bg-[var(--color-navy-deep)] pt-28 md:pt-32">
        <div className="container-screen">
          <div className="h-[280px] md:h-[420px] overflow-hidden">
            <img src={brand.banner} alt={`${brand.name} banner`} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-navy-deep)] text-white pb-16 md:pb-20">
        <div className="container-screen">
          <Link
            to="/our-brands"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold)] hover:gap-3 transition-all mb-10"
          >
            ← Back to Our Brands
          </Link>

          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-8">
              <span className="rule-gold mb-6" />
              <div className="eyebrow mt-6">{brand.category}</div>
              <h1 className="font-display text-5xl md:text-7xl mt-6 tracking-tight leading-[0.98]">
                {brand.name}
              </h1>
              <p className="mt-8 text-xl md:text-2xl font-display leading-snug text-white/82 max-w-3xl">
                {brand.headline}
              </p>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <div className="bg-white p-8 md:p-10 min-h-40 flex items-center justify-center">
                <img src={brand.logo} alt={`${brand.name} logo`} className="max-h-20 max-w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bone)] py-20 md:py-28">
        <div className="container-screen grid grid-cols-12 gap-8 md:gap-12">
          <aside className="col-span-12 lg:col-span-4">
            <div className="bg-white p-8 md:p-10 border border-[var(--color-anthracite)]/10 sticky top-28">
              <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--color-anthracite)]/45">
                Brand Profile
              </div>
              <h2 className="font-display text-3xl mt-5 tracking-tight text-[var(--color-navy-deep)]">
                About {brand.name}
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-anthracite)]/70">
                {brand.description}
              </p>
            </div>
          </aside>

          <div className="col-span-12 lg:col-span-8">
            <article className="bg-white p-8 md:p-12 border border-[var(--color-anthracite)]/10">
              <p className="font-display text-2xl md:text-3xl leading-snug tracking-tight text-[var(--color-navy-deep)]">
                {brand.about}
              </p>

              <div className="mt-10 space-y-6">
                {brand.content.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-relaxed text-[var(--color-anthracite)]/75">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-[var(--color-anthracite)]/15 pt-8">
              <p className="text-sm text-[var(--color-anthracite)]/65">
                Interested in distribution, private label, or export collaboration with HHY Group brands?
              </p>
              <Link
                to="/contact"
                className="inline-flex w-fit px-7 py-3 bg-[var(--color-navy-deep)] text-white text-[12px] uppercase tracking-[0.16em] font-bold hover:bg-[var(--color-gold)] hover:text-[var(--color-navy-deep)] transition-colors"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-screen">
          <div className="flex items-end justify-between gap-8 mb-10">
            <div>
              <div className="eyebrow">Explore More</div>
              <h2 className="font-display text-3xl md:text-4xl mt-4 tracking-tight text-[var(--color-navy-deep)]">
                Other HHY Group brands
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-[var(--color-anthracite)]/15 border border-[var(--color-anthracite)]/15">
            {otherBrands.map((item) => (
              <Link
                key={item.slug}
                to="/our-brands/$brandSlug"
                params={{ brandSlug: item.slug }}
                className="bg-white h-36 p-6 flex items-center justify-center hover:bg-[var(--color-bone)] transition-colors"
              >
                <img src={item.logo} alt={`${item.name} logo`} loading="lazy" className="max-h-14 max-w-full object-contain" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
