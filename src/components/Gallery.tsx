import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-warm-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-semibold"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Gallery
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            A Glimpse Inside
          </h2>
          <p
            className="text-text-muted max-w-2xl mx-auto text-base md:text-lg"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Take a peek at our cosy ambience and delightful creations.
          </p>
          <p
            className="text-xs text-text-muted/70 italic mt-2"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            ⓘ These are sample images from Unsplash used for demonstration only.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                  <p className="text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
