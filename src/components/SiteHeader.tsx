import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import hhyLogo from "@/assets/hhy-logo-w.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/our-brands", label: "Our Brands" },
  { to: "/facilities", label: "About Us" },
  { to: "/insights", label: "Blog" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--color-navy-deep)]/95 backdrop-blur-sm border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-screen flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={hhyLogo} alt="HHY Group Logo" className="h-10 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[13px] uppercase tracking-[0.14em] text-white/75 hover:text-[var(--color-gold)] transition-colors font-medium"
              activeProps={{ className: "text-[var(--color-gold)]" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-gold)] text-[var(--color-navy-deep)] text-[12px] uppercase tracking-[0.16em] font-bold hover:bg-white transition-colors"
          >
            Become a Partner
          </Link>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-white p-2"
        >
          <div className="w-6 h-px bg-white mb-1.5" />
          <div className="w-6 h-px bg-white mb-1.5" />
          <div className="w-6 h-px bg-white" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[var(--color-navy-deep)] border-t border-white/10">
          <nav className="container-screen py-6 flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.14em] text-white/80 py-2"
                activeProps={{ className: "text-[var(--color-gold)]" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
