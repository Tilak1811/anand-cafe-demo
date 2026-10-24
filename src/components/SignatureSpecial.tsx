import Image from "next/image";
import { SIGNATURE_SPECIAL } from "@/lib/constants";

export default function SignatureSpecial() {
  return (
    <section
      id="special"
      aria-label="Chef's signature special creation"
      className="py-20 md:py-28 bg-espresso text-white relative overflow-hidden scroll-mt-20"
    >
      {/* Decorative Warm Ambient Glows */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-caramel/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Visual Showcase (5 columns on desktop) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card border */}
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-espresso/60 aspect-[4/5]">
                <Image
                  src={SIGNATURE_SPECIAL.image}
                  alt={`${SIGNATURE_SPECIAL.name} — signature creation at Anand Café`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-80" />

                {/* Floating Price Tag on Image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-caramel-light block">
                      Demo Sample Price
                    </span>
                    <span
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "var(--font-lato), sans-serif" }}
                    >
                      {SIGNATURE_SPECIAL.price}
                    </span>
                  </div>
                  <span className="text-xs bg-terracotta/90 text-white font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    Must Try
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content (7 columns on desktop) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-caramel/20 border border-caramel/40 text-caramel-light text-xs font-semibold uppercase tracking-wider mb-5">
              <span>⭐</span>
              <span>{SIGNATURE_SPECIAL.badge}</span>
            </div>

            <p
              className="text-caramel font-medium text-sm sm:text-base tracking-widest uppercase mb-2"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              {SIGNATURE_SPECIAL.tagline}
            </p>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {SIGNATURE_SPECIAL.name}
            </h2>

            <p
              className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              {SIGNATURE_SPECIAL.description}
            </p>

            {/* Ingredient Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 border-y border-white/10 py-6">
              {SIGNATURE_SPECIAL.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-caramel/20 text-caramel flex items-center justify-center text-xs shrink-0">
                    ✓
                  </span>
                  <span className="text-sm text-white/90 font-medium">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-caramel hover:bg-caramel/90 text-espresso font-semibold rounded-full shadow-lg transition-all duration-200 text-sm sm:text-base tracking-wide hover:-translate-y-0.5"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                <span>View on Menu</span>
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full border border-white/30 transition-all duration-200 text-sm sm:text-base"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                Inquire for Table Booking
              </a>
            </div>

            <p className="text-[11px] text-white/50 italic mt-6">
              ⓘ Promotional spotlight layout designed to showcase high-margin featured drinks or seasonal chef specials on client café websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
