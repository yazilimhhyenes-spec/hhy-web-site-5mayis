import { Link, createFileRoute } from "@tanstack/react-router";
import { CertLogos } from "@/components/CertLogos";
import callebautLogo from "@/assets/Logos/callebaut-chocolate-oem-private-label.png";
import tarimKrediLogo from "@/assets/Logos/tarim-kredi-logo.png";
import carrefourLogo from "@/assets/Logos/carrefour-logo.svg";
import migrosLogo from "@/assets/Logos/migros-logo.svg";
import patiswissLogo from "@/assets/Logos/patiswiss-logo.webp";

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
  { n: "06", t: "Logistics & Delivery", d: "Export-ready shipment planning, customs documentation, and delivery coordination for international orders." },
];

const CERTS = [
  { name: "BRC v9", Logo: CertLogos.BRC },
  { name: "ISO 22000", Logo: CertLogos.ISO22000 },
  { name: "ISO 9001", Logo: CertLogos.ISO9001 },
  { name: "HACCP", Logo: CertLogos.HACCP },
  { name: "Halal", Logo: CertLogos.Halal },
  { name: "Kosher", Logo: CertLogos.Kosher },
  { name: "IFS Food", Logo: CertLogos.IFS },
  { name: "SEDEX", Logo: CertLogos.SEDEX },
];

const PARTNERS = [
  { name: "Callebaut", logo: callebautLogo },
  { name: "Tarim Kredi", logo: tarimKrediLogo },
  { name: "Carrefour", logo: carrefourLogo },
  { name: "Migros", logo: migrosLogo },
  { name: "Patiswiss", logo: patiswissLogo },
];

const PARTNER_ROWS = Array.from({ length: 4 }, (_, rowIndex) =>
  Array.from({ length: 5 }, (_, columnIndex) => PARTNERS[(rowIndex * 2 + columnIndex) % PARTNERS.length]),
);

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
          <p className="mt-8 text-white/70 max-w-3xl text-lg leading-relaxed">
            HHY Group provides private label and OEM food manufacturing for retailers,
            distributors, and confectionery brands. Our production capabilities cover
            protein bars, wafers, chocolate bars, filled chocolates, chocolate-coated products,
            roasted nuts, raw nuts, coated nuts, sauced nuts, mixed nut formulations,
            and export-ready snack products — all produced on dedicated lines under
            strict NDA, HACCP-controlled processes, and full batch traceability.
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

      <section className="bg-white py-20 md:py-28">
        <div className="container-screen">
          <div className="grid grid-cols-12 gap-8 mb-14">
            <div className="col-span-12 md:col-span-4">
              <span className="rule-gold mb-6" />
              <div className="eyebrow mt-6">Partners</div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-[1.05] text-[var(--color-navy-deep)]">
                Companies working with us.
                <br />
                <span className="text-[var(--color-anthracite)]/55">Long-term production partners.</span>
              </h2>
            </div>
          </div>

          <div className="bg-white">
            {PARTNER_ROWS.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-2 md:grid-cols-5"
              >
                {row.map((brand, brandIndex) => (
                  <div
                    key={`${brand.name}-${rowIndex}-${brandIndex}`}
                    className="h-32 md:h-40 p-8 flex items-center justify-center hover:bg-[var(--color-bone)] transition-colors"
                  >
                    <img src={brand.logo} alt={brand.name} loading="lazy" className="max-h-16 md:max-h-20 max-w-full object-contain" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bone)]">
        <div className="container-screen py-20 md:py-28">
          <div className="grid grid-cols-12 gap-8 mb-12">
            <div className="col-span-12 md:col-span-5">
              <span className="rule-gold mb-6" />
              <div className="eyebrow mt-6">Global Standards & Certifications</div>
              <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-[1.05] mt-6">
                Audited.
                <br />
                <span className="text-[var(--color-anthracite)]/60">Verified. Repeatable.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-12">
              <p className="text-[var(--color-anthracite)]/75 leading-relaxed max-w-xl">
                Every production line operates under continuously audited quality and food-safety
                regimes recognized by the world's largest retailers and importers. Certificates
                are issued, controlled, and re-audited annually by accredited third parties.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {CERTS.map((c) => (
              <div
                key={c.name}
                className="bg-white border border-[var(--color-anthracite)]/10 p-4 md:p-6 flex flex-col items-center justify-center aspect-[4/3] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-[var(--color-gold)] transition-all duration-300 group rounded-sm"
              >
                <div className="w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 max-h-16 md:max-h-20 flex items-center justify-center">
                  <c.Logo />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
