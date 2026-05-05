import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — HHY Group" },
      { name: "description", content: "Market reports, harvest calendars and export intelligence from our trade desk." },
      { property: "og:title", content: "Insights — HHY Group" },
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
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      <section className="bg-[var(--color-hhy-dark)] text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-screen">
          <div className="max-w-3xl fade-in-up">
            <span className="eyebrow">Insights</span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4 tracking-tight leading-[1.05]">
              Market intelligence
              <br />
              <span className="text-white/40">from the source.</span>
            </h1>
            <p className="mt-5 text-white/50 max-w-xl text-base">
              Quarterly harvest forecasts, export-grade pricing analysis, and regulatory briefings — written by our trade desk for procurement professionals.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-hhy-surface)] section-padding">
        <div className="container-screen">
          <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ARTICLES.map((a) => (
              <Link
                key={a.slug}
                to="/insights/$articleId"
                params={{ articleId: a.slug }}
                className="group bg-white rounded-2xl border border-[var(--color-hhy-border)] p-6 md:p-8 flex flex-col hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-[var(--color-hhy-accent)]/20 transition-all duration-400"
              >
                <span className="text-[10px] uppercase tracking-[0.12em] font-semibold text-[var(--color-hhy-accent)]">
                  {a.tag}
                </span>
                <h2 className="font-display text-lg mt-4 tracking-tight leading-snug text-[var(--color-hhy-charcoal)] group-hover:text-[var(--color-hhy-accent)] transition-colors">
                  {a.title}
                </h2>
                <div className="mt-auto pt-8 border-t border-[var(--color-hhy-border)] flex justify-between items-center text-[11px] text-[var(--color-hhy-muted-text)]">
                  <span>{a.date}</span>
                  <span className="flex items-center gap-1">
                    {a.read} read
                    <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
