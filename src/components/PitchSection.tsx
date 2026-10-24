import {
  DEVELOPER_NAME,
  DEVELOPER_WHATSAPP_NUMBER,
  DEVELOPER_PHONE_DISPLAY,
  DEVELOPER_LOCATION,
  DEVELOPER_SERVICES,
} from "@/lib/constants";

export default function PitchSection() {
  const prefilledMessage = encodeURIComponent(
    "Hi! I saw your Anand Café demo website and would like to discuss building a modern website for my business."
  );
  const whatsappUrl = `https://wa.me/${DEVELOPER_WHATSAPP_NUMBER.replace(/[^\d]/g, "")}?text=${prefilledMessage}`;

  return (
    <section
      id="portfolio-pitch"
      aria-label="Web development services for local businesses"
      className="py-20 md:py-28 bg-gradient-to-b from-warm-bg to-white border-t border-border-warm scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-espresso text-caramel-light text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 shadow-xs">
            <span>💻</span>
            <span>Web Design &amp; Development • {DEVELOPER_LOCATION}</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Want a Website Like This for Your Business?
          </h2>

          <p
            className="text-text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            I build modern, mobile-friendly websites for cafés, restaurants, coaching classes, salons, and other local businesses in Anand, Vallabh Vidyanagar, and across Gujarat.
          </p>

          {/* Strict Separation Callout */}
          <div className="mt-5 inline-flex items-center gap-2 bg-warm-bg border border-border-warm px-4 py-2 rounded-xl text-xs text-text-muted max-w-xl mx-auto">
            <span aria-hidden="true">💡</span>
            <span>
              <strong>Developer Note:</strong> The Anand Café above is my portfolio demonstration. Contact details below connect directly with me ({DEVELOPER_NAME}) to discuss your own project.
            </span>
          </div>
        </div>

        {/* 4 Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {DEVELOPER_SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-border-warm shadow-xs hover:shadow-md hover:border-caramel/70 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-warm-bg rounded-xl flex items-center justify-center text-2xl mb-4 border border-border-warm/60">
                  <span role="img" aria-label={service.title}>
                    {service.icon}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold text-espresso mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-text-muted text-xs sm:text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-lato), sans-serif" }}
                >
                  {service.description}
                </p>
              </div>

              {/* Feature Tags */}
              <div className="pt-3 border-t border-border-warm/60 flex flex-wrap gap-1.5">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] bg-warm-bg text-espresso px-2 py-0.5 rounded font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Developer Action Card */}
        <div className="bg-espresso text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-xl relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-caramel/15 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <h3
            className="text-2xl sm:text-3xl font-bold mb-3 text-white"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Ready to upgrade your business&apos;s digital presence?
          </h3>
          <p
            className="text-white/80 text-sm sm:text-base max-w-xl mx-auto mb-8"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Get a tailored, mobile-responsive website with fast loading speeds, WhatsApp integration, and Google Maps location setup.
          </p>

          {/* Action Buttons: WhatsApp & Call */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-full shadow-lg transition-all duration-200 text-sm sm:text-base tracking-wide hover:scale-105"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Discuss Your Website</span>
            </a>
            <a
              href={`tel:${DEVELOPER_WHATSAPP_NUMBER}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full border border-white/30 transition-all duration-200 text-sm sm:text-base hover:scale-105"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              <span>📞</span>
              <span>Call: {DEVELOPER_PHONE_DISPLAY}</span>
            </a>
          </div>

          <p className="text-xs text-caramel-light/80 mt-6 font-mono">
            Direct Developer Line: {DEVELOPER_PHONE_DISPLAY} • Based in Anand, Gujarat
          </p>
        </div>
      </div>
    </section>
  );
}
