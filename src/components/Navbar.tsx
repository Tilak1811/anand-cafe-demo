"use client";

import { useState, useEffect } from "react";
import { CAFE_NAME, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border-warm/60"
          : "bg-white/80 backdrop-blur-sm border-b border-border-warm/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo & Brand */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
            aria-label={`${CAFE_NAME} - Home`}
          >
            <span
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl text-primary group-hover:scale-105 transition-transform duration-200"
              role="img"
              aria-label="Coffee cup icon"
            >
              ☕
            </span>
            <div className="flex flex-col">
              <span
                className="text-lg sm:text-xl font-bold tracking-tight text-espresso transition-colors duration-200"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {CAFE_NAME}
              </span>
              <span className="text-[11px] text-text-muted tracking-wider uppercase font-medium">
                Anand • V.V. Nagar
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-7"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-text-dark/90 hover:text-primary transition-colors duration-200 relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-full border border-caramel text-espresso hover:bg-caramel hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Visit Us
            </a>
            <a
              href="#portfolio-pitch"
              className="text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-full bg-primary text-white hover:bg-primary-dark transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Build Your Website
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg text-espresso focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <span
              className={`block w-6 h-0.5 bg-espresso transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-espresso transition-all duration-300 ${
                isOpen ? "opacity-0" : "my-0.5"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-espresso transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-navigation"
        className={`lg:hidden transition-all duration-300 ease-in-out border-b border-border-warm bg-warm-bg/98 backdrop-blur-md overflow-hidden ${
          isOpen ? "max-h-[32rem] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-4 py-3 text-espresso font-medium text-base rounded-lg hover:bg-white/80 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-border-warm flex flex-col gap-2 px-4">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="text-center py-2.5 rounded-full border border-caramel text-espresso text-sm font-semibold hover:bg-caramel hover:text-white transition-colors"
            >
              Visit Us in Anand
            </a>
            <a
              href="#portfolio-pitch"
              onClick={handleLinkClick}
              className="text-center py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors shadow-sm"
            >
              Want a Website Like This?
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
