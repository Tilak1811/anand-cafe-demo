import {
  CAFE_NAME,
  CAFE_TAGLINE,
  NAV_LINKS,
  PHONE_NUMBER,
  EMAIL,
  ADDRESS,
  DEVELOPER_NAME,
  DEVELOPER_PHONE_DISPLAY,
} from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site footer"
      className="bg-espresso text-white border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl" role="img" aria-label="Coffee cup">
                ☕
              </span>
              <div>
                <span
                  className="text-2xl font-bold text-white tracking-tight block"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {CAFE_NAME}
                </span>
                <span className="text-xs text-caramel-light font-medium tracking-wider uppercase">
                  Anand • Vallabh Vidyanagar
                </span>
              </div>
            </div>

            <p
              className="text-white/70 text-sm leading-relaxed max-w-sm"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              {CAFE_TAGLINE}. A serene gathering place for students, faculty, and coffee lovers in Anand, Gujarat.
            </p>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-caramel-light/90">
              <p className="font-semibold mb-0.5">🛈 Portfolio Demonstration:</p>
              <p className="text-white/60">
                Created to showcase modern web capabilities for local food and hospitality businesses.
              </p>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4
              className="text-sm font-bold uppercase tracking-wider text-caramel mb-4"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Explore
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded py-0.5 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fictional Café Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4
              className="text-sm font-bold uppercase tracking-wider text-caramel mb-4"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Demo Café Location
            </h4>
            <ul className="space-y-2.5 text-white/70 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="text-caramel shrink-0 mt-0.5">📍</span>
                <span>{ADDRESS.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-caramel shrink-0">📞</span>
                <span>{PHONE_NUMBER} (Demo)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-caramel shrink-0">✉️</span>
                <span>{EMAIL}</span>
              </li>
            </ul>

            {/* Developer Discreet CTA */}
            <div className="pt-4 mt-4 border-t border-white/10">
              <a
                href="#portfolio-pitch"
                className="text-xs text-caramel-light hover:text-white transition-colors flex items-center gap-1.5 font-medium"
              >
                <span>Need a website like this for your shop in Anand?</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer Bar */}
      <div className="border-t border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50 text-center sm:text-left">
          <p>© {currentYear} {CAFE_NAME}. Fictional Demo Website.</p>
          <p>
            Designed &amp; Developed by{" "}
            <a
              href="#portfolio-pitch"
              className="text-caramel-light hover:underline font-semibold"
            >
              {DEVELOPER_NAME}
            </a>{" "}
            • WhatsApp: {DEVELOPER_PHONE_DISPLAY}
          </p>
        </div>
      </div>
    </footer>
  );
}
