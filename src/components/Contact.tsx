import {
  PHONE_NUMBER,
  EMAIL,
  ADDRESS,
  OPENING_HOURS,
  GOOGLE_MAPS_URL,
} from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-semibold"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Get In Touch
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Visit Us Today
          </h2>
          <p
            className="text-text-muted max-w-2xl mx-auto text-base md:text-lg"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            We would love to hear from you. Drop by for a coffee or reach out to
            us.
          </p>
          <p
            className="text-xs text-text-muted/70 italic mt-2"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            ⓘ All contact information below is fictional and for demonstration
            purposes only.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone & Email */}
          <div className="bg-warm-bg rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3
              className="text-xl font-bold text-text-dark mb-3"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Call or Email
            </h3>
            <p
              className="text-text-muted mb-1"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              <span className="font-semibold">Phone:</span> {PHONE_NUMBER}
            </p>
            <p
              className="text-text-muted text-sm"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              <span className="font-semibold">Email:</span> {EMAIL}
            </p>
            <p className="text-[10px] text-text-muted/50 mt-2 italic">
              DEMO PLACEHOLDER
            </p>
          </div>

          {/* Address */}
          <div className="bg-warm-bg rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3
              className="text-xl font-bold text-text-dark mb-3"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Our Address
            </h3>
            <p
              className="text-text-muted leading-relaxed"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              {ADDRESS.line1}
              <br />
              {ADDRESS.line2}
              <br />
              {ADDRESS.city}, {ADDRESS.state} {ADDRESS.pincode}
            </p>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-4 hover:text-primary-dark transition-colors"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Get Directions (Demo)
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p className="text-[10px] text-text-muted/50 mt-2 italic">
              DEMO PLACEHOLDER ADDRESS
            </p>
          </div>

          {/* Opening Hours */}
          <div className="bg-warm-bg rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3
              className="text-xl font-bold text-text-dark mb-3"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Opening Hours
            </h3>
            <div className="space-y-2">
              {OPENING_HOURS.map((schedule) => (
                <div
                  key={schedule.day}
                  className="flex justify-between items-center text-text-muted text-sm"
                  style={{ fontFamily: "var(--font-lato), sans-serif" }}
                >
                  <span className="font-medium">{schedule.day}</span>
                  <span>{schedule.hours}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-text-muted/50 mt-4 italic">
              SAMPLE HOURS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
