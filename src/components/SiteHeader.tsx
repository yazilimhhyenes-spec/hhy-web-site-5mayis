import { Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import hhyLogo from "@/assets/hhy-logo-w.png";
import { BRANDS } from "@/data/brands";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/our-brands", label: "Our Brands" },
  { to: "/about-us", label: "About Us" },
  { to: "/private-label", label: "Private Label" },
  { to: "/contact", label: "Contact" },
] as const;

const BRAND_COLORS: Record<string, { bg: string; text: string; glow: string }> = {
  "ender-chocolate": { bg: "#5C2D0E", text: "#FFF", glow: "rgba(139, 69, 19, 0.35)" },
  "dedem-kuruyemis": { bg: "#8B6914", text: "#FFF", glow: "rgba(212, 168, 67, 0.35)" },
  "sn4ck": { bg: "#C53030", text: "#FFF", glow: "rgba(229, 62, 62, 0.35)" },
  "cerezshop": { bg: "#2B6CB0", text: "#FFF", glow: "rgba(43, 108, 176, 0.35)" },
  "hhy-agro": { bg: "#276749", text: "#FFF", glow: "rgba(56, 161, 105, 0.35)" },
};

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] border-b border-[var(--color-hhy-border)]"
          : "bg-transparent"
        }`}
    >
      <div className="container-screen flex items-center justify-between h-18 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group relative z-10">
          <div className={`transition-all duration-500 ${scrolled ? "brightness-0" : ""}`}>
            <img src={hhyLogo} alt="HHY Group Logo" className="h-9 md:h-10 w-auto object-contain" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            if (item.to === "/our-brands") {
              return (
                <div key={item.to} className="relative group/menu">
                  <Link
                    to={item.to}
                    className={`relative px-4 py-2.5 text-[13px] font-semibold tracking-[0.02em] transition-colors duration-300 flex items-center gap-1.5 rounded-lg ${scrolled
                        ? "text-[var(--color-hhy-charcoal)] hover:text-[var(--color-hhy-accent)] hover:bg-[var(--color-hhy-accent-soft)]"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                    activeProps={{ className: scrolled ? "text-[var(--color-hhy-accent)]" : "text-white" }}
                  >
                    {item.label}
                    <svg
                      className="w-3 h-3 opacity-50 group-hover/menu:opacity-100 group-hover/menu:rotate-180 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-300 translate-y-3 group-hover/menu:translate-y-0">
                    <div className="bg-white rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] p-3 min-w-[520px] overflow-hidden">
                      {/* Menu header */}
                      <div className="px-4 py-3 mb-1">
                        <div className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[var(--color-hhy-muted-text)]">
                          Our Brands
                        </div>
                      </div>

                      {/* Brand items */}
                      <div className="grid grid-cols-1 gap-0.5">
                        {BRANDS.map((brand) => {
                          const colors = BRAND_COLORS[brand.slug] || { bg: "#01d091", text: "#FFF", glow: "rgba(1,208,145,0.3)" };
                          const isHovered = hoveredBrand === brand.slug;

                          return (
                            <Link
                              key={brand.slug}
                              to="/our-brands/$brandSlug"
                              params={{ brandSlug: brand.slug }}
                              onMouseEnter={() => setHoveredBrand(brand.slug)}
                              onMouseLeave={() => setHoveredBrand(null)}
                              className="flex items-center gap-5 px-4 py-3.5 rounded-xl transition-all duration-300 group/brand relative overflow-hidden"
                              style={{
                                background: isHovered ? colors.bg : "transparent",
                                boxShadow: isHovered ? `0 4px 20px ${colors.glow}` : "none",
                              }}
                            >
                              {/* Logo container */}
                              <div className={`h-10 w-20 flex items-center justify-center shrink-0 rounded-lg p-1.5 transition-all duration-300 ${
                                isHovered ? "bg-white shadow-sm scale-105" : "bg-[var(--color-hhy-surface)]"
                              }`}>
                                <img
                                  src={brand.logo}
                                  alt={brand.name}
                                  className="max-h-full max-w-full object-contain"
                                />
                              </div>

                              {/* Brand info */}
                              <div className="flex-1 min-w-0">
                                <div className={`text-sm font-semibold transition-colors duration-300 ${isHovered ? "text-white" : "text-[var(--color-hhy-charcoal)]"
                                  }`}>
                                  {brand.name}
                                </div>
                                <div className={`text-[11px] mt-0.5 transition-colors duration-300 ${isHovered ? "text-white/70" : "text-[var(--color-hhy-muted-text)]"
                                  }`}>
                                  {brand.category}
                                </div>
                              </div>

                              {/* Arrow */}
                              <svg
                                className={`w-4 h-4 transition-all duration-300 ${isHovered ? "text-white/70 translate-x-0 opacity-100" : "text-transparent -translate-x-2 opacity-0"
                                  }`}
                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Footer */}
                      <div className="mt-2 pt-3 border-t border-[var(--color-hhy-border)] px-4 pb-1">
                        <Link
                          to="/our-brands"
                          className="text-[11px] uppercase tracking-[0.12em] font-semibold text-[var(--color-hhy-muted-text)] hover:text-[var(--color-hhy-accent)] transition-colors py-2 flex items-center gap-2"
                        >
                          View All Brands
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.to}
                to={item.to}
                className={`px-4 py-2.5 text-[13px] font-semibold tracking-[0.02em] transition-colors duration-300 rounded-lg ${scrolled
                    ? "text-[var(--color-hhy-charcoal)] hover:text-[var(--color-hhy-accent)] hover:bg-[var(--color-hhy-accent-soft)]"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                activeProps={{ className: scrolled ? "text-[var(--color-hhy-accent)]" : "text-white" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300 ${scrolled
                ? "bg-[var(--color-hhy-accent)] text-[var(--color-hhy-dark)] hover:shadow-[0_4px_16px_rgba(1,208,145,0.3)] hover:scale-[1.02]"
                : "bg-white/15 text-white border border-white/20 hover:bg-white hover:text-[var(--color-hhy-dark)]"
              }`}
          >
            Start a Project
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`block w-5 h-0.5 transition-all duration-300 ${open ? "rotate-45 translate-y-[4px]" : ""
            } ${scrolled && !open ? "bg-[var(--color-hhy-charcoal)]" : "bg-white"}`} />
          <span className={`block w-5 h-0.5 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[4px]" : ""
            } ${scrolled && !open ? "bg-[var(--color-hhy-charcoal)]" : "bg-white"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[var(--color-hhy-dark)]/95 backdrop-blur-xl" onClick={() => setOpen(false)} />

        <nav className="relative z-10 h-full overflow-y-auto pt-24 pb-8 px-6">
          <div className="space-y-1">
            {NAV.map((item) => (
              <div key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block text-2xl font-semibold text-white py-3 hover:text-[var(--color-hhy-accent)] transition-colors"
                  activeProps={{ className: "text-[var(--color-hhy-accent)]" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
                {item.to === "/our-brands" && (
                  <div className="pl-4 pb-3 space-y-1 border-l-2 border-white/10 ml-2 mt-1 mb-4">
                    {BRANDS.map((brand) => {
                      const colors = BRAND_COLORS[brand.slug] || { bg: "#01d091", text: "#FFF", glow: "" };
                      return (
                        <Link
                          key={brand.slug}
                          to="/our-brands/$brandSlug"
                          params={{ brandSlug: brand.slug }}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group/brand"
                        >
                          <div className="w-14 h-8 flex items-center justify-center shrink-0 rounded-lg p-1.5 bg-white/10 group-hover/brand:bg-white transition-colors"
                          >
                            <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-white/80 group-hover/brand:text-[var(--color-hhy-accent)] transition-colors block">
                              {brand.name}
                            </span>
                            <span className="text-[10px] text-white/40">{brand.category}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[var(--color-hhy-accent)] text-[var(--color-hhy-dark)] rounded-xl text-sm font-bold"
            >
              Start a Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
