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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group"
            aria-label={`${CAFE_NAME} - Home`}
          >
            <span className="text-2xl" role="img" aria-label="Coffee cup">
              ☕
            </span>
            <span
              className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-primary" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {CAFE_NAME}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-accent relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled ? "text-text-dark" : "text-white"
                }`}
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? "bg-text-dark" : "bg-white"
              } ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? "bg-text-dark" : "bg-white"
              } ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? "bg-text-dark" : "bg-white"
              } ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-accent-light px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-4 py-3 text-text-dark font-medium tracking-wide uppercase text-sm rounded-lg hover:bg-warm-bg-dark transition-colors duration-200"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
