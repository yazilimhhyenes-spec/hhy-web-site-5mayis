import { Link } from "@tanstack/react-router";
import hhyLogo from "@/assets/hhy-logo-w.png";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-navy-deep)] text-white/70">
      <div className="container-screen py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src={hhyLogo} alt="HHY Group Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed max-w-md text-white/60">
              Global food producer operating in agriculture, chocolate manufacturing,
              and nut processing — managing extensive farmland and advanced production facilities in Türkiye.
            </p>
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="text-[10px] uppercase tracking-[0.22em] text-white/40 mb-3">Headquarters</div>
              <address className="not-italic text-sm leading-relaxed text-white/75">
                HHY Group A.Ş.<br />
                106. Cadde no:24<br />
                Saray Mah. Kahramankazan / Ankara · Türkiye<br />
                <span className="text-white/50">+90 539 231 12 71 · merhaba@hhygroup.com</span>
              </address>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.22em] text-white/40 mb-4">Company</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-[var(--color-gold)]">Home</Link></li>
              <li><Link to="/what-we-do" className="hover:text-[var(--color-gold)]">What We Do</Link></li>
              <li><Link to="/facilities" className="hover:text-[var(--color-gold)]">About Us</Link></li>
              <li><Link to="/insights" className="hover:text-[var(--color-gold)]">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--color-gold)]">Contact Us</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.22em] text-white/40 mb-4">Trade</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/contact" className="hover:text-[var(--color-gold)]">Become a Partner</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--color-gold)]">Request Specifications</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--color-gold)]">Visit Our Facilities</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.22em] text-white/40 mb-4">Standards</div>
            <div className="grid grid-cols-3 gap-2">
              {["BRC", "ISO 22000", "FDA", "Halal", "Kosher", "IFS"].map((c) => (
                <div
                  key={c}
                  className="border border-white/15 text-[10px] uppercase tracking-[0.14em] text-white/70 px-2 py-2 text-center"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[11px] uppercase tracking-[0.14em] text-white/40">
          <div>© {new Date().getFullYear()} HHY Group A.Ş. — All rights reserved.</div>
          <div className="flex gap-6">
            <span>VAT TR-0000000000</span>
            <span>Global Food Producer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
