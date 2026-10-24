import Image from "next/image";
import { MENU_ITEMS } from "@/lib/constants";

export default function Menu() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-semibold"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Our Menu
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Popular Favourites
          </h2>
          <p
            className="text-text-muted max-w-2xl mx-auto text-base md:text-lg"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Discover our most loved dishes and beverages, crafted with care and
            the finest ingredients.
          </p>
          <p
            className="text-xs text-text-muted/70 italic mt-2"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            ⓘ All items, descriptions, and prices shown are fictional samples
            for demonstration purposes.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.name} — sample image for demo`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3
                    className="text-lg font-bold text-text-dark"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {item.name}
                  </h3>
                  <span
                    className="text-primary font-bold text-lg whitespace-nowrap"
                    style={{ fontFamily: "var(--font-lato), sans-serif" }}
                  >
                    {item.price}
                  </span>
                </div>
                <p
                  className="text-text-muted text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-lato), sans-serif" }}
                >
                  {item.description}
                </p>
                <p className="text-[10px] text-text-muted/50 mt-2 italic">SAMPLE PRICE</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
