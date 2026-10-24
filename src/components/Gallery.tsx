"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { GALLERY_IMAGES, type GalleryItem } from "@/lib/constants";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedImage) {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section
      id="gallery"
      aria-label="Photo gallery of the café ambience and dishes"
      className="py-20 md:py-28 bg-warm-bg-alt scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span
            className="inline-block text-primary text-xs sm:text-sm tracking-[0.25em] uppercase font-bold mb-3"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Visual Journey
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            A Glimpse Inside Anand Café
          </h2>
          <p
            className="text-text-muted text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            From morning espresso extractions to cozy candlelit evening corners. Click any photo to expand.
          </p>

          <p className="text-[11px] text-text-muted/70 italic mt-2">
            ⓘ Sample photography from Unsplash used for website demonstration purposes.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((item, index) => (
            <figure
              key={index}
              className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border-warm bg-warm-bg cursor-pointer ${
                index === 0 ? "sm:col-span-2 lg:col-span-2 aspect-[16/10]" : "aspect-[4/3]"
              }`}
              onClick={() => setSelectedImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedImage(item);
                }
              }}
              aria-label={`View larger image: ${item.title}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Gradient Scrim & Hover Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6 text-white">
                <span className="text-[11px] uppercase tracking-wider text-caramel-light font-semibold mb-1">
                  Click to Expand
                </span>
                <h3
                  className="text-lg sm:text-xl font-bold mb-1 text-white"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-xs sm:text-sm text-white/80 line-clamp-2"
                  style={{ fontFamily: "var(--font-lato), sans-serif" }}
                >
                  {item.caption}
                </p>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-espresso rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close image preview"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-cover"
              />
            </div>

            {/* Modal Caption */}
            <div className="p-6 bg-espresso text-white">
              <h4
                id="lightbox-title"
                className="text-xl sm:text-2xl font-bold mb-2 text-caramel-light"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {selectedImage.title}
              </h4>
              <p
                className="text-sm text-white/80"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
