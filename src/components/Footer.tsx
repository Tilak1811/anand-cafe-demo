import {
  CAFE_NAME,
  NAV_LINKS,
  PHONE_NUMBER,
  EMAIL,
  ADDRESS,
} from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">☕</span>
              <span
                className="text-2xl font-bold text-accent-light"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {CAFE_NAME}
              </span>
            </div>
            <p
              className="text-white/60 text-sm leading-relaxed max-w-md mb-4"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              A warm and welcoming café in the heart of Anand, Gujarat. This
              website is a demonstration project with fictional content, created
              to showcase modern café web design.
            </p>
            <p
              className="text-accent/80 text-xs italic border-l-2 border-accent/40 pl-3"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              🛈 DEMO PROJECT — All business information is fictional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-lg font-bold text-accent-light mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Quick Links
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-accent transition-colors text-sm"
                      style={{ fontFamily: "var(--font-lato), sans-serif" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-lg font-bold text-accent-light mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Contact (Demo)
            </h4>
            <ul className="space-y-3 text-white/60 text-sm" style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {ADDRESS.full}
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {PHONE_NUMBER}
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {EMAIL}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-white/40 text-sm text-center"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            © {currentYear} {CAFE_NAME}. Demo Project — All Rights Reserved.
          </p>
          <p
            className="text-white/30 text-xs text-center"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Designed as a portfolio demonstration. Not a real business.
          </p>
        </div>
      </div>
    </footer>
  );
}
