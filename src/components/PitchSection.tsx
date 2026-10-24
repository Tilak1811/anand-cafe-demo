import {
  DEVELOPER_WHATSAPP_NUMBER,
  DEVELOPER_PHONE_DISPLAY,
  DEVELOPER_SERVICES,
} from "@/lib/constants";

export default function PitchSection() {
  const prefilledMessage = encodeURIComponent(
    "Hi! I saw your café demo website and would like to discuss building an affordable website for my business."
  );
  const whatsappUrl = `https://wa.me/${DEVELOPER_WHATSAPP_NUMBER.replace(/[^\d]/g, "")}?text=${prefilledMessage}`;

  return (
    <section
      id="portfolio-pitch"
      className="py-16 md:py-24 bg-gradient-to-b from-warm-bg to-warm-bg-dark border-t border-accent-light/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Badge */}
          <span
            className="inline-block bg-primary/10 text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Web Design &amp; Development
          </span>

          {/* Section Title */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Want a Website Like This?
          </h2>

          {/* Short Explanation */}
          <p
            className="text-text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            I build modern, mobile-responsive, and affordable websites tailored
            for local businesses looking to establish a professional digital
            presence.
          </p>

          {/* Clear Portfolio Demo Note */}
          <div className="mt-4 inline-flex items-center gap-2 bg-white/80 border border-accent-light px-4 py-2 rounded-lg text-xs text-text-muted">
            <span aria-hidden="true">💡</span>
            <span>
              <strong>Portfolio Note:</strong> The café shown above is a
              fictional demonstration project to showcase layout and design capabilities.
            </span>
          </div>
        </div>

        {/* 3 Service Examples */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {DEVELOPER_SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-accent-light/40 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl mb-4">
                  <span role="img" aria-label={service.title}>
                    {service.icon}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold text-text-dark mb-2"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-text-muted text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-lato), sans-serif" }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl text-base tracking-wide"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Discuss Your Website</span>
            </a>
            <a
              href={`tel:${DEVELOPER_WHATSAPP_NUMBER}`}
              className="inline-flex items-center gap-2 px-6 py-4 bg-white text-text-dark border border-accent hover:border-primary font-medium rounded-full hover:bg-warm-bg-dark transition-all duration-300 text-base"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              <span>📞</span>
              <span>{DEVELOPER_PHONE_DISPLAY}</span>
            </a>
          </div>
          <p
            className="text-xs text-text-muted/70 mt-3"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Direct WhatsApp &amp; Call: {DEVELOPER_PHONE_DISPLAY}
          </p>
        </div>
      </div>
    </section>
  );
}
