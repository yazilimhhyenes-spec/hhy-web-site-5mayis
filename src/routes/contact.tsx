import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — HHY Group | Private Label Food Manufacturer" },
      { name: "description", content: "Contact HHY Group's export team. Schedule facility visits, request specifications, or start a private label project in chocolate, nuts, or protein bars." },
      { property: "og:title", content: "Contact — HHY Group" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[var(--color-hhy-dark)] text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-screen">
          <div className="max-w-3xl fade-in-up">
            <span className="eyebrow">Get in Touch</span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4 tracking-tight leading-[1.05] text-white">
              Let's discuss your
              <br />
              <span className="gradient-text">next project.</span>
            </h1>
            <p className="mt-5 text-white/50 max-w-xl text-base leading-relaxed">
              Whether you're exploring private label production, requesting specifications, or planning a facility visit — our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-[var(--color-hhy-surface)] section-padding">
        <div className="container-screen">
          <div className="reveal grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <div className="p-6 md:p-8 rounded-2xl bg-[var(--color-hhy-dark)] text-white">
                <span className="text-[10px] uppercase tracking-[0.12em] font-semibold text-[var(--color-hhy-accent)]">Headquarters</span>
                <address className="not-italic mt-4 leading-relaxed text-white/75 text-sm">
                  HHY Group A.Ş.<br />
                  106. Cadde no:24<br />
                  Saray Mah. Kahramankazan<br />
                  Ankara · Türkiye
                </address>

                <div className="mt-8 space-y-4 border-t border-white/10 pt-8">
                  {[
                    { label: "General", value: "merhaba@hhygroup.com", href: "mailto:merhaba@hhygroup.com" },
                    { label: "Private Label", value: "oem@hhygroup.com", href: "mailto:oem@hhygroup.com" },
                    { label: "Phone", value: "+90 539 231 12 71", href: "tel:+905392311271" },
                  ].map(c => (
                    <div key={c.label}>
                      <div className="text-[10px] uppercase tracking-[0.12em] text-white/30">{c.label}</div>
                      <a href={c.href} className="text-sm mt-1 block text-white/80 hover:text-[var(--color-hhy-accent)] transition-colors">{c.value}</a>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="text-[10px] uppercase tracking-[0.12em] text-white/30 mb-2">Operating Hours</div>
                  <div className="text-sm text-white/60">Monday – Friday · 09:00 – 22:00 GMT+3</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[var(--color-hhy-border)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-hhy-accent)]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[var(--color-hhy-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <span className="text-sm font-semibold text-[var(--color-hhy-charcoal)]">Visit our factory</span>
                </div>
                <p className="text-xs text-[var(--color-hhy-muted-text)] leading-relaxed">
                  We welcome facility visits for potential partners. Contact us to schedule a tour of our production lines.
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=HHY+Group,+Kahramankazan,+Ankara"
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-xs font-semibold text-[var(--color-hhy-accent)] hover:underline"
                >
                  Open in Google Maps
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="p-6 md:p-10 rounded-2xl bg-white border border-[var(--color-hhy-border)]">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-hhy-accent)]/10 flex items-center justify-center mx-auto mb-5">
                      <svg className="w-7 h-7 text-[var(--color-hhy-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h2 className="font-display text-2xl tracking-tight text-[var(--color-hhy-charcoal)]">Inquiry received.</h2>
                    <p className="mt-3 text-sm text-[var(--color-hhy-muted-text)] max-w-md mx-auto">Our team will respond within one business day. Thank you for your interest in HHY Group.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                    <div>
                      <h2 className="font-display text-2xl tracking-tight text-[var(--color-hhy-charcoal)]">Send us a message</h2>
                      <p className="text-sm text-[var(--color-hhy-muted-text)] mt-1">Fill out the form below and our team will get back to you shortly.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Field label="Full Name" name="name" required />
                      <Field label="Company" name="company" />
                      <Field label="Email" name="email" type="email" required />
                      <Field label="Country" name="country" required />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[var(--color-hhy-muted-text)] block mb-2">Inquiry Type</label>
                      <select className="w-full border border-[var(--color-hhy-border)] rounded-xl px-4 py-3 bg-white focus:outline-none focus:border-[var(--color-hhy-accent)] focus:ring-2 focus:ring-[var(--color-hhy-accent)]/20 text-sm transition-all">
                        <option>Private Label / OEM</option>
                        <option>Wholesale / Bulk Purchase</option>
                        <option>Facility Visit Request</option>
                        <option>Specifications & COA</option>
                        <option>Distribution Partnership</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[var(--color-hhy-muted-text)] block mb-2">Message</label>
                      <textarea rows={6} required className="w-full border border-[var(--color-hhy-border)] rounded-xl px-4 py-3 bg-white focus:outline-none focus:border-[var(--color-hhy-accent)] focus:ring-2 focus:ring-[var(--color-hhy-accent)]/20 text-sm resize-none transition-all" placeholder="Tell us about your project, target volumes, and timeline..." />
                    </div>
                    <button type="submit" className="w-full md:w-auto px-8 py-3.5 bg-[var(--color-hhy-accent)] text-[var(--color-hhy-dark)] text-sm font-bold rounded-full hover:shadow-[0_4px_20px_rgba(1,208,145,0.35)] hover:scale-[1.01] transition-all duration-300">
                      Submit Request →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[var(--color-hhy-muted-text)] block mb-2">{label}</label>
      <input id={name} name={name} type={type} required={required} className="w-full border border-[var(--color-hhy-border)] rounded-xl px-4 py-3 bg-white focus:outline-none focus:border-[var(--color-hhy-accent)] focus:ring-2 focus:ring-[var(--color-hhy-accent)]/20 text-sm transition-all" />
    </div>
  );
}
