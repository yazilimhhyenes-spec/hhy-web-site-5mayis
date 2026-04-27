import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/private-label")({
  head: () => ({
    meta: [
      { title: "Private Label & OEM — HHY Group" },
      { name: "description", content: "End-to-end private label manufacturing for retailers, distributors, and confectionery brands worldwide." },
      { property: "og:title", content: "Your Brand. Our Production Power." },
      { property: "og:description", content: "Industrial OEM partnerships under NDA." },
    ],
  }),
  component: PrivateLabelPage,
});

const STEPS = [
  { n: "01", t: "Brief & NDA", d: "Initial scoping call, mutual NDA, and product brief intake by our R&D team." },
  { n: "02", t: "Recipe Development", d: "Sample formulation, sensory panel iteration, and shelf-life validation." },
  { n: "03", t: "Pilot Run", d: "Pre-production batch on the target line with full quality documentation." },
  { n: "04", t: "Industrial Production", d: "Scaled production with HACCP control and dedicated batch traceability." },
  { n: "05", t: "Packaging & Artwork", d: "In-house design support or your supplied artwork integrated to line specs." },
  { n: "06", t: "Logistics & Delivery", d: "FOB Mersin / Ambarlı, or DAP to your warehouse with full export documentation." },
];

function PrivateLabelPage() {
  return (
    <>
      <section className="bg-[var(--color-anthracite)] text-white pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="container-screen">
          <span className="rule-gold mb-6" />
          <div className="eyebrow mt-6">Private Label · OEM</div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] mt-6 tracking-tight leading-[0.95] max-w-5xl">
            Your Brand.
            <br />
            Our Production Power.
          </h1>
          <p className="mt-8 text-white/70 max-w-2xl text-lg">
            We manufacture for retailers, distributors and confectionery brands across four
            continents — under strict NDA, on dedicated lines, with full traceability.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-bone)] py-20 md:py-28">
        <div className="container-screen">
          <h2 className="font-display text-3xl md:text-5xl tracking-tight max-w-3xl">A six-stage production partnership.</h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-anthracite)]/15 border border-[var(--color-anthracite)]/15">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-white p-8 md:p-10">
                <div className="font-mono text-[var(--color-gold-muted)] text-sm">{s.n}</div>
                <h3 className="font-display text-xl mt-4 tracking-tight">{s.t}</h3>
                <p className="mt-4 text-[15px] text-[var(--color-anthracite)]/75 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link to="/contact" className="inline-flex px-8 py-4 bg-[var(--color-navy-deep)] text-white text-[12px] uppercase tracking-[0.18em] font-bold hover:bg-[var(--color-gold)] hover:text-[var(--color-navy-deep)] transition-colors">
              Start Private Label Project →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
