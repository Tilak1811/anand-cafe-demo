import {
  PHONE_NUMBER,
  EMAIL,
  ADDRESS,
  OPENING_HOURS,
  GOOGLE_MAPS_URL,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

export default function Contact() {
  const cafeWhatsappMessage = encodeURIComponent(
    "Hello! I am viewing your Anand Café demo website and would like to ask a sample question."
  );
  const cafeWhatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, "")}?text=${cafeWhatsappMessage}`;

  return (
    <section
      id="contact"
      aria-label="Café contact details and location"
      className="py-20 md:py-28 bg-warm-bg scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span
            className="inline-block text-primary text-xs sm:text-sm tracking-[0.25em] uppercase font-bold mb-3"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Visit Our Sanctuary
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Find Us in Anand
          </h2>
          <p
            className="text-text-muted text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Centrally situated near V.V. Nagar Circle, welcoming you every day of the week for coffee, chai, and quiet moments.
          </p>

          <p className="text-[11px] text-text-muted/70 italic mt-2">
            ⓘ Fictional Demo Location: Address, telephone numbers, and hours below are mock details for presentation purposes.
          </p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Card 1: Direct Contact & Action Buttons */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-border-warm shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-warm-bg text-primary flex items-center justify-center text-xl mb-5">
                📞
              </div>
              <h3
                className="text-xl font-bold text-espresso mb-2"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Call &amp; WhatsApp
              </h3>
              <p className="text-sm text-text-muted mb-4">
                Inquire about table reservations, group bookings, or seasonal specials.
              </p>

              <div className="space-y-1.5 text-sm text-espresso font-medium mb-6">
                <p>Phone: {PHONE_NUMBER}</p>
                <p>Email: {EMAIL}</p>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-border-warm">
              <a
                href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, "")}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-espresso text-espresso hover:bg-espresso hover:text-white font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Call Sample Number</span>
              </a>
              <a
                href={cafeWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-xs"
              >
                <span>WhatsApp (Demo)</span>
              </a>
              <span className="text-[10px] text-center text-text-muted/60 block italic">
                Demo Placeholder: Not an active business line
              </span>
            </div>
          </div>

          {/* Card 2: Physical Address & Directions */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-border-warm shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-warm-bg text-primary flex items-center justify-center text-xl mb-5">
                📍
              </div>
              <h3
                className="text-xl font-bold text-espresso mb-2"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Café Location
              </h3>
              <p className="text-sm text-text-muted mb-4">
                Conveniently located in the educational and cultural corridor of Anand.
              </p>

              <address className="not-italic text-sm text-espresso leading-relaxed space-y-1 mb-6">
                <p className="font-semibold">{ADDRESS.line1}</p>
                <p>{ADDRESS.line2}</p>
                <p>{ADDRESS.city}, {ADDRESS.state} {ADDRESS.pincode}</p>
              </address>
            </div>

            <div className="pt-4 border-t border-border-warm">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-espresso hover:bg-primary text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-xs"
              >
                <span>Get Directions (Google Maps)</span>
                <span aria-hidden="true">↗</span>
              </a>
              <span className="text-[10px] text-center text-text-muted/60 block italic mt-2">
                Coordinates: Near V.V. Nagar Circle, Anand
              </span>
            </div>
          </div>

          {/* Card 3: Opening Hours */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-border-warm shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-warm-bg text-primary flex items-center justify-center text-xl mb-5">
                ⏱️
              </div>
              <h3
                className="text-xl font-bold text-espresso mb-2"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Opening Hours
              </h3>
              <p className="text-sm text-text-muted mb-5">
                Serving freshly brewed beverages and meals throughout the day and evening.
              </p>

              <div className="space-y-3">
                {OPENING_HOURS.map((slot) => (
                  <div
                    key={slot.day}
                    className="flex items-center justify-between py-2 border-b border-border-warm/50 text-xs sm:text-sm"
                  >
                    <span className="font-medium text-espresso">{slot.day}</span>
                    <span className="text-text-muted font-mono">{slot.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border-warm">
              <div className="inline-flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg w-full justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold">Open for Dine-in &amp; Takeaway (Demo)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
