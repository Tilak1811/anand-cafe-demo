import Image from "next/image";
import { CAFE_NAME, CAFE_TAGLINE, CAFE_DESCRIPTION } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Welcome section"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Depth Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&h=1080&fit=crop&q=85"
          alt="Atmospheric coffee shop interior with warm amber lighting in Anand"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Layered high-contrast dark vignette overlay for typography legibility */}
        <div className="absolute inset-0 bg-espresso/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-black/45 to-espresso/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Opening Hours & Location Chip */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-caramel-light text-xs sm:text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          <span>Open Daily • 8:00 AM – 10:00 PM • V.V. Nagar Circle, Anand</span>
        </div>

        {/* Café Name Heading */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-5 drop-shadow-md"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          {CAFE_NAME}
        </h1>

        {/* Tagline */}
        <p
          className="text-xl sm:text-2xl md:text-3xl font-light text-caramel-light italic tracking-wide mb-6"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          &ldquo;{CAFE_TAGLINE}&rdquo;
        </p>

        {/* Description */}
        <p
          className="max-w-2xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed mb-10 font-normal"
          style={{ fontFamily: "var(--font-lato), sans-serif" }}
        >
          {CAFE_DESCRIPTION}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-caramel hover:bg-caramel/90 text-espresso font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-base tracking-wide hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            <span>Explore Our Menu</span>
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/15 text-white font-medium rounded-full border border-white/40 hover:border-white transition-all duration-200 text-base tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Contact &amp; Location
          </a>
        </div>

        {/* Subtle Feature Pills */}
        <div className="mt-14 pt-8 border-t border-white/15 flex items-center justify-center gap-6 sm:gap-12 flex-wrap text-white/80 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="text-caramel">☕</span>
            <span>Micro-Roasted Beans</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-caramel">🌱</span>
            <span>100% Pure Vegetarian</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-caramel">⚡</span>
            <span>High-Speed Study Wi-Fi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
