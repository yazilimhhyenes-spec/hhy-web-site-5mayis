import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — HHY Group" },
      { name: "description", content: "Reach our export team in Ankara. Schedule facility visits, request specifications, or start a private label project." },
      { property: "og:title", content: "Contact — HHY Group" },
      { property: "og:description", content: "Reach our export team in Ankara, Türkiye." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-[var(--color-navy-deep)] text-white pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="container-screen">
          <span className="rule-gold mb-6" />
          <div className="eyebrow mt-6">Contact Export Desk</div>
          <h1 className="font-display text-5xl md:text-7xl mt-6 tracking-tight leading-[0.98] max-w-4xl">
            Speak with the
            <br />
            <span className="text-[var(--color-gold)]">production team.</span>
          </h1>
        </div>
      </section>

      <section className="bg-[var(--color-bone)] py-20 md:py-28">
        <div className="container-screen grid grid-cols-12 gap-px bg-[var(--color-anthracite)]/15 border border-[var(--color-anthracite)]/15">
          <div className="col-span-12 lg:col-span-5 bg-[var(--color-navy-deep)] text-white p-8 md:p-12">
            <div className="eyebrow !text-[var(--color-gold)]">Headquarters</div>
            <address className="not-italic mt-4 leading-relaxed text-white/85 text-[15px]">
              HHY Group A.Ş.<br />
              106. Cadde no:24<br />
              Saray Mah. Kahramankazan<br />
              Ankara · Türkiye
            </address>

            <div className="mt-10 space-y-6 border-t border-white/15 pt-10">
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">Email</div>
                <a href="mailto:merhaba@hhygroup.com" className="font-display text-lg mt-1 block hover:text-[var(--color-gold)]">merhaba@hhygroup.com</a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">Private Label</div>
                <a href="mailto:oem@hhygroup.com" className="font-display text-lg mt-1 block hover:text-[var(--color-gold)]">oem@hhygroup.com</a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">Phone</div>
                <a href="tel:+905392311271" className="font-display text-lg mt-1 block hover:text-[var(--color-gold)]">+90 539 231 12 71</a>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-white/15">
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/40 mb-3">Operating Hours</div>
              <div className="text-sm text-white/70">Monday – Friday · 09:00 – 22:00 GMT+3</div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 bg-white p-8 md:p-12">
            {submitted ? (
              <div className="h-full flex flex-col justify-center">
                <span className="rule-gold mb-6" />
                <h2 className="font-display text-3xl tracking-tight">Inquiry received.</h2>
                <p className="mt-4 text-[var(--color-anthracite)]/75 max-w-md">
                  Our team will respond to your inquiry within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-6"
              >
                <h2 className="font-display text-2xl tracking-tight">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Full Name" name="name" required />
                  <Field label="Country" name="country" required />
                  <Field label="Email" name="email" type="email" required />
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-anthracite)]/55 block mb-2">How can we assist you?</label>
                    <select className="w-full border border-[var(--color-anthracite)]/20 px-4 py-3 bg-white focus:outline-none focus:border-[var(--color-gold)] text-sm">
                      <option>Wholesale / Bulk Purchase</option>
                      <option>Private Label / OEM</option>
                      <option>Facility Visit Request</option>
                      <option>Specifications & COA</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-anthracite)]/55 block mb-2">Message</label>
                  <textarea rows={8} required className="w-full border border-[var(--color-anthracite)]/20 px-4 py-3 bg-white focus:outline-none focus:border-[var(--color-gold)] text-sm" />
                </div>
                <button type="submit" className="px-8 py-4 bg-[var(--color-navy-deep)] text-white text-[12px] uppercase tracking-[0.18em] font-bold hover:bg-[var(--color-gold)] hover:text-[var(--color-navy-deep)] transition-colors">
                  Submit Request →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-anthracite)]/55 block mb-2">{label}</label>
      <input id={name} name={name} type={type} required={required} className="w-full border border-[var(--color-anthracite)]/20 px-4 py-3 bg-white focus:outline-none focus:border-[var(--color-gold)] text-sm" />
    </div>
  );
}
