import Image from "next/image";
import { CAFE_NAME, CAFE_TAGLINE, CAFE_DESCRIPTION } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop&q=80"
          alt="Sample café ambience — demo image from Unsplash"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <p
          className="text-accent-light text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in"
          style={{ fontFamily: "var(--font-lato), sans-serif" }}
        >
          Welcome to
        </p>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {CAFE_NAME}
        </h1>
        <p
          className="text-xl sm:text-2xl md:text-3xl text-accent-light italic mb-6"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {CAFE_TAGLINE}
        </p>
        <p
          className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "var(--font-lato), sans-serif" }}
        >
          {CAFE_DESCRIPTION}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105 hover:shadow-xl text-base tracking-wide"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            View Menu
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 text-base tracking-wide"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
