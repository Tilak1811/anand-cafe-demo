import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section
      id="reviews"
      aria-label="Sample customer reviews"
      className="py-20 md:py-28 bg-white scroll-mt-20 border-t border-border-warm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span
            className="inline-block text-primary text-xs sm:text-sm tracking-[0.25em] uppercase font-bold mb-3"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Client Website Feature
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Customer Reviews Showcase
          </h2>
          <p
            className="text-text-muted text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Here is how real Google Reviews or customer testimonials will appear on your client&apos;s live website.
          </p>

          {/* Explicit Transparency Notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
            <span aria-hidden="true">⚠️</span>
            <span>
              <strong>Fictional Demo Notice:</strong> The testimonials below are sample placeholder personas to demonstrate layout, not genuine customer endorsements.
            </span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.id}
              className="bg-warm-bg rounded-2xl p-6 sm:p-8 border border-border-warm flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow duration-300 relative"
            >
              <div>
                {/* Rating Stars & Sample Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500 text-sm gap-0.5" aria-label={`Rating: ${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} aria-hidden="true">★</span>
                    ))}
                  </div>
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-text-muted/60 bg-white border border-border-warm px-2 py-0.5 rounded">
                    Sample Review
                  </span>
                </div>

                {/* Comment */}
                <p
                  className="text-espresso/90 text-sm sm:text-base leading-relaxed italic mb-6"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-border-warm/70">
                <div className="flex items-center justify-between">
                  <div>
                    <h4
                      className="text-sm font-bold text-espresso"
                      style={{ fontFamily: "var(--font-lato), sans-serif" }}
                    >
                      {t.author}
                    </h4>
                    <p className="text-xs text-text-muted">
                      {t.role} • {t.location}
                    </p>
                  </div>
                </div>

                {/* Favourite Item Tag */}
                <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-primary">
                  <span>Favourite:</span>
                  <span className="font-semibold">{t.favouriteItem}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
