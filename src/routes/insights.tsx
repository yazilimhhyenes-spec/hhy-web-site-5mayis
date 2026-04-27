import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — HHY Group" },
      { name: "description", content: "Market reports, harvest calendars and export intelligence from our trade desk." },
      { property: "og:title", content: "Insights — HHY Group" },
      { property: "og:description", content: "Market intelligence from the source." },
    ],
  }),
  component: InsightsPage,
});

const ARTICLES = [
  { slug: "turkiye-hazelnut-outlook-2026", tag: "Market Report · Q1 2026", title: "Türkiye Hazelnut Outlook: Yield, Frost Risk and Export Forecast", date: "March 2026", read: "8 min" },
  { slug: "harvest-calendar-manisa-2026", tag: "Harvest Calendar", title: "2026 Manisa Harvest Windows by Variety", date: "February 2026", read: "5 min" },
  { slug: "eu-aflatoxin-compliance-brief", tag: "Regulatory Brief", title: "EU Aflatoxin Limits & Compliance Pathways for Bulk Importers", date: "January 2026", read: "12 min" },
  { slug: "container-freight-rates-2025", tag: "Export Insight", title: "Container Freight Rates Mersin–Hamburg: 2025 Retrospective", date: "December 2025", read: "6 min" },
  { slug: "cocoa-price-volatility-trends", tag: "Market Report · Q4 2025", title: "Cocoa Price Volatility and Compound Chocolate Substitution Trends", date: "November 2025", read: "10 min" },
  { slug: "private-label-growth-emea", tag: "Industry Analysis", title: "Private Label Growth in EMEA Confectionery — A 5-Year Review", date: "October 2025", read: "9 min" },
];

function InsightsPage() {
  return (
    <>
      <section className="bg-[var(--color-navy-deep)] text-white pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="container-screen">
          <span className="rule-gold mb-6" />
          <div className="eyebrow mt-6">Insights</div>
          <h1 className="font-display text-5xl md:text-7xl mt-6 tracking-tight leading-[0.98] max-w-4xl">
            Market intelligence
            <br />
            <span className="text-white/55">from the source.</span>
          </h1>
        </div>
      </section>

      <section className="bg-[var(--color-bone)] py-20 md:py-28">
        <div className="container-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-anthracite)]/15 border border-[var(--color-anthracite)]/15">
          {ARTICLES.map((a) => (
            <Link
              key={a.slug}
              to="/insights/$articleId"
              params={{ articleId: a.slug }}
              className="bg-white p-8 md:p-10 group cursor-pointer hover:bg-[var(--color-navy-deep)] hover:text-white transition-colors flex flex-col"
            >
              <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-gold-muted)] group-hover:text-[var(--color-gold)]">
                {a.tag}
              </div>
              <h2 className="font-display text-xl mt-6 tracking-tight leading-snug">{a.title}</h2>
              <div className="mt-auto pt-12 border-t border-[var(--color-anthracite)]/15 group-hover:border-white/20 flex justify-between items-center text-[11px] uppercase tracking-[0.16em] text-[var(--color-anthracite)]/50 group-hover:text-white/55">
                <span>{a.date}</span>
                <span>{a.read} read</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
