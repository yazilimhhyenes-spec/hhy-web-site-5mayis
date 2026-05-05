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
      <header className="bg-[var(--color-hhy-dark)] text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-screen">
          <Link to="/insights" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[var(--color-hhy-accent)] hover:gap-3 transition-all mb-10 group">
            <svg className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            Back to Insights
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.12em] text-white/40 mb-5">
              <span className="text-[var(--color-hhy-accent)] font-semibold">Market Report</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>March 20, 2026</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>8 min read</span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">{title}</h1>
          </div>
        </div>
      </header>

      <section className="section-padding">
        <div className="container-screen grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl font-display leading-relaxed text-[var(--color-hhy-charcoal)] mb-10">
                As global markets navigate evolving supply chain dynamics, the agricultural landscape in Turkey continues to demonstrate resilience and strategic growth.
              </p>

              <h2 className="font-display text-2xl tracking-tight text-[var(--color-hhy-charcoal)] mt-10 mb-4">Introduction to Market Dynamics</h2>
              <p className="text-[var(--color-hhy-muted-text)] leading-relaxed mb-6">
                The first quarter of 2026 has brought unique challenges and opportunities to the food production sector. With fluctuating climate conditions and shifting trade regulations, industrial buyers are increasingly looking for stable, high-capacity partners who can guarantee both quality and volume.
              </p>

              <blockquote className="border-l-3 border-[var(--color-hhy-accent)] pl-6 py-2 my-8 text-lg italic text-[var(--color-hhy-charcoal)]">
                "Stability in supply chains is no longer a luxury; it's a fundamental requirement for global food security and brand integrity."
              </blockquote>

              <h2 className="font-display text-2xl tracking-tight text-[var(--color-hhy-charcoal)] mt-10 mb-4">Technical Specifications and Compliance</h2>
              <p className="text-[var(--color-hhy-muted-text)] leading-relaxed mb-6">
                HHY Group's commitment to international standards remains unwavering. Our facilities continue to exceed BRC v9 requirements, ensuring that every batch of chocolate and processed nuts meets the rigorous demands of the EU and North American markets.
              </p>

              <ul className="space-y-3 text-[var(--color-hhy-muted-text)] mb-8">
                <li className="flex items-start gap-3"><span className="text-[var(--color-hhy-accent)] mt-1">•</span>Advanced traceability systems from farm to factory.</li>
                <li className="flex items-start gap-3"><span className="text-[var(--color-hhy-accent)] mt-1">•</span>Climate-controlled storage to preserve nutrient density.</li>
                <li className="flex items-start gap-3"><span className="text-[var(--color-hhy-accent)] mt-1">•</span>Zero-touch automated packaging lines for maximum hygiene.</li>
              </ul>

              <h2 className="font-display text-2xl tracking-tight text-[var(--color-hhy-charcoal)] mt-10 mb-4">Looking Ahead: Q2 Forecast</h2>
              <p className="text-[var(--color-hhy-muted-text)] leading-relaxed">
                As we approach the mid-year harvest window, early indicators suggest a robust yield for hazelnut and walnut varieties across our Manisa and Ankara estates. We recommend our partners to finalize volume commitments early to hedge against seasonal price volatility.
              </p>
            </div>

            <div className="mt-14 pt-10 border-t border-[var(--color-hhy-border)] flex items-center gap-5">
              <div className="w-11 h-11 rounded-full bg-[var(--color-hhy-accent)]/10 flex items-center justify-center text-xs font-bold text-[var(--color-hhy-accent)]">HHY</div>
              <div>
                <div className="text-sm font-semibold text-[var(--color-hhy-charcoal)]">HHY Group Trade Desk</div>
                <div className="text-xs text-[var(--color-hhy-muted-text)]">Export Intelligence Division</div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="p-6 rounded-2xl bg-[var(--color-hhy-surface)] border border-[var(--color-hhy-border)]">
              <h3 className="font-display text-lg tracking-tight mb-3 text-[var(--color-hhy-charcoal)]">Request Data Sheet</h3>
              <p className="text-sm text-[var(--color-hhy-muted-text)] leading-relaxed mb-5">
                Looking for detailed technical specifications or compliance reports related to this topic?
              </p>
              <Link to="/contact" className="block w-full py-3 bg-[var(--color-hhy-accent)] text-[var(--color-hhy-dark)] text-center text-sm font-bold rounded-xl hover:shadow-[0_4px_16px_rgba(1,208,145,0.3)] transition-all">
                Contact Our Team →
              </Link>
            </div>

            <div className="p-6 rounded-2xl border border-[var(--color-hhy-border)]">
              <h3 className="font-display text-lg tracking-tight mb-5 text-[var(--color-hhy-charcoal)]">Related Insights</h3>
              <div className="space-y-5">
                {[
                  "Harvest Calendar 2026: Variety Windows",
                  "EU Aflatoxin Limits & Compliance Brief",
                  "Container Freight Rates: 2025 Review",
                ].map((t) => (
                  <div key={t} className="group cursor-pointer border-b border-[var(--color-hhy-border)] pb-4">
                    <div className="text-[10px] uppercase tracking-[0.12em] text-[var(--color-hhy-accent)] font-semibold mb-1.5">Analysis</div>
                    <h4 className="text-sm font-medium text-[var(--color-hhy-charcoal)] group-hover:text-[var(--color-hhy-accent)] transition-colors">{t}</h4>
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
