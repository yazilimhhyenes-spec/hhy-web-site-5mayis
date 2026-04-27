import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/insights/$articleId")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.articleId.replace(/-/g, " ")} — HHY Group` },
      { name: "description", content: "Detailed industry insights and market analysis from HHY Group trade desk." },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const { articleId } = Route.useParams();
  const title = articleId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <article className="bg-white min-h-screen">
      {/* Article Header */}
      <header className="bg-[var(--color-navy-deep)] text-white pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="container-screen">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold)] hover:gap-3 transition-all mb-12"
          >
            ← Back to Insights
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.18em] text-white/50 mb-6">
              <span className="text-[var(--color-gold)]">Market Report</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>March 20, 2026</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>8 min read</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
              {title}
            </h1>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <section className="py-20 md:py-32">
        <div className="container-screen grid grid-cols-12 gap-8 md:gap-16">
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8">
            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:tracking-tight prose-headings:text-[var(--color-navy-deep)] prose-p:text-[var(--color-anthracite)]/85 prose-p:leading-relaxed prose-strong:text-[var(--color-navy-deep)]">
              <p className="text-xl md:text-2xl font-display leading-relaxed text-[var(--color-navy-deep)] mb-12">
                As global markets navigate evolving supply chain dynamics, the agricultural landscape in Turkey continues to demonstrate resilience and strategic growth.
              </p>
              
              <h2>Introduction to Market Dynamics</h2>
              <p>
                The first quarter of 2026 has brought unique challenges and opportunities to the food production sector. With fluctuating climate conditions and shifting trade regulations, industrial buyers are increasingly looking for stable, high-capacity partners who can guarantee both quality and volume.
              </p>

              <blockquote>
                "Stability in supply chains is no longer a luxury; it's a fundamental requirement for global food security and brand integrity."
              </blockquote>

              <h2>Technical Specifications and Compliance</h2>
              <p>
                HHY Group's commitment to international standards remains unwavering. Our facilities continue to exceed BRC v9 requirements, ensuring that every batch of chocolate and processed nuts meeting the rigorous demands of the EU and North American markets.
              </p>
              
              <ul>
                <li>Advanced traceability systems from farm to factory.</li>
                <li>Climate-controlled storage to preserve nutrient density.</li>
                <li>Zero-touch automated packaging lines for maximum hygiene.</li>
              </ul>

              <h2>Looking Ahead: Q2 Forecast</h2>
              <p>
                As we approach the mid-year harvest window, early indicators suggest a robust yield for hazelnut and walnut varieties across our Manisa and Ankara estates. We recommend our partners to finalize volume commitments early to hedge against seasonal price volatility.
              </p>
            </div>

            {/* Author / Footer info */}
            <div className="mt-16 pt-12 border-t border-[var(--color-anthracite)]/10 flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-[var(--color-gold)] flex items-center justify-center text-white font-bold">
                HHY
              </div>
              <div>
                <div className="text-sm font-bold text-[var(--color-navy-deep)]">HHY Group Trade Desk</div>
                <div className="text-xs text-[var(--color-anthracite)]/60">Export Intelligence Division</div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="col-span-12 lg:col-span-4 space-y-12">
            <div className="bg-[var(--color-bone)] p-8">
              <h3 className="font-display text-xl tracking-tight mb-4">Request Data Sheet</h3>
              <p className="text-sm text-[var(--color-anthracite)]/75 leading-relaxed mb-6">
                Are you looking for detailed technical specifications or compliance reports related to this topic?
              </p>
              <Link
                to="/contact"
                className="block w-full py-4 bg-[var(--color-navy-deep)] text-white text-center text-[11px] uppercase tracking-[0.18em] font-bold hover:bg-[var(--color-gold)] hover:text-[var(--color-navy-deep)] transition-colors"
              >
                Contact Our Team →
              </Link>
            </div>

            <div>
              <h3 className="font-display text-xl tracking-tight mb-6">Related Insights</h3>
              <div className="space-y-8">
                {[
                  "Harvest Calendar 2026: Variety Windows",
                  "EU Aflatoxin Limits & Compliance Brief",
                  "Container Freight Rates: 2025 Review",
                ].map((t) => (
                  <div key={t} className="group cursor-pointer border-b border-[var(--color-anthracite)]/10 pb-4">
                    <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--color-gold-muted)] mb-2">Analysis</div>
                    <h4 className="font-display text-sm group-hover:text-[var(--color-gold)] transition-colors">
                      {t}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </article>
  );
}
