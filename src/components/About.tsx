import Image from "next/image";
import { CAFE_NAME } from "@/lib/constants";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About our café and philosophy"
      className="py-20 md:py-28 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Lead */}
        <div className="max-w-3xl mb-16">
          <span
            className="inline-block text-primary text-xs sm:text-sm tracking-[0.25em] uppercase font-bold mb-3"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Our Story &amp; Philosophy
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            A Sanctuary for Thoughtful Conversations, Deep Roasts &amp; Honest Chai
          </h2>
        </div>

        {/* Editorial Layout: Dual Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase (7 columns) */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Primary Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/11] border border-border-warm">
                <Image
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&h=700&fit=crop&q=85"
                  alt="Sunny interior dining area at Anand Café demo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>

              {/* Overlapping Floating Quote Card */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 max-w-xs bg-warm-bg-alt border border-border-warm p-6 rounded-2xl shadow-lg">
                <span className="text-3xl text-caramel leading-none block mb-2 font-serif">“</span>
                <p
                  className="text-xs sm:text-sm text-espresso font-medium leading-relaxed italic"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  We wanted to build a place in Anand where time slows down and genuine hospitality is poured into every cup.
                </p>
                <span className="text-[11px] text-text-muted mt-2 block font-sans uppercase tracking-wider font-semibold">
                  — Fictional Café Ethos
                </span>
              </div>
            </div>
          </div>

          {/* Narrative Content (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <h3
              className="text-2xl sm:text-3xl font-bold text-espresso"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Rooted in the Academic Heart of Anand &amp; Vidyanagar
            </h3>

            <div
              className="space-y-4 text-text-muted leading-relaxed text-base"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              <p>
                {CAFE_NAME} is an imaginary neighbourhood café crafted for this website demonstration. In our story, we serve the vibrant student and faculty community near V.V. Nagar Circle along with Anand&apos;s lifelong coffee enthusiasts.
              </p>
              <p>
                From hand-pressed South Indian filter brews and chilled saffron lattes to comforting pots of ginger-infused masala chai, every recipe is imagined with wholesome local ingredients and heartfelt care.
              </p>
            </div>

            {/* 3 Pillars / Highlights */}
            <div className="pt-4 space-y-3.5 border-t border-border-warm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-warm-bg flex items-center justify-center text-primary text-sm font-bold shrink-0">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-espresso">Micro-Batch Roasting</h4>
                  <p className="text-xs text-text-muted">Freshly sourced beans roasted for sweet aroma and balanced acidity.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-warm-bg flex items-center justify-center text-primary text-sm font-bold shrink-0">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-espresso">Warm Gujarati Hospitality</h4>
                  <p className="text-xs text-text-muted">Pure vegetarian kitchen with freshly pressed toasts, bakes, and chai.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-warm-bg flex items-center justify-center text-primary text-sm font-bold shrink-0">
                  03
                </div>
                <div>
                  <h4 className="text-sm font-bold text-espresso">Quiet Work &amp; Reading Spaces</h4>
                  <p className="text-xs text-text-muted">Comfortable charging hubs, reliable Wi-Fi, and gentle background acoustics.</p>
                </div>
              </div>
            </div>

            {/* Demo Notice */}
            <div className="pt-2">
              <p className="text-[11px] text-text-muted/70 italic border-l-2 border-caramel pl-3">
                ⓘ Demo Transparency: {CAFE_NAME} is a demonstration showcase. All brand stories and personnel details are fictional concepts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
