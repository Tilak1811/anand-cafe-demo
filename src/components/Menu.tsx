"use client";

import { useState } from "react";
import Image from "next/image";
import { MENU_ITEMS, MENU_CATEGORIES, type MenuCategory } from "@/lib/constants";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("All");

  const filteredItems =
    activeCategory === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      aria-label="Our café menu"
      className="py-20 md:py-28 bg-warm-bg scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span
            className="inline-block text-primary text-xs sm:text-sm tracking-[0.25em] uppercase font-bold mb-3"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Handcrafted Flavours
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Explore Our Menu
          </h2>
          <p
            className="text-text-muted text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-lato), sans-serif" }}
          >
            Prepared fresh to order with micro-batch roasted beans, single-estate Assam tea leaves, and premium locally sourced ingredients.
          </p>

          {/* Fictional Pricing Notice */}
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-text-muted/80 bg-white/70 border border-border-warm px-3 py-1 rounded-full">
            <span>ⓘ</span>
            <span>All items, descriptions, and prices are fictional samples for demonstration purposes.</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center mb-12">
          <div
            role="tablist"
            aria-label="Filter menu items by category"
            className="inline-flex p-1.5 rounded-full bg-white border border-border-warm shadow-sm gap-1 flex-wrap justify-center"
          >
            {MENU_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  id={`tab-${category}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${category}`}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? "bg-espresso text-white shadow-sm"
                      : "text-text-muted hover:text-espresso hover:bg-warm-bg"
                  }`}
                  style={{ fontFamily: "var(--font-lato), sans-serif" }}
                >
                  {category}
                  {category === "All" && (
                    <span className="ml-1.5 text-[11px] opacity-75">
                      ({MENU_ITEMS.length})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div
          role="tabpanel"
          id={`panel-${activeCategory}`}
          aria-labelledby={`tab-${activeCategory}`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-border-warm/70 shadow-sm hover:shadow-md hover:border-caramel/60 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-warm-bg-alt">
                <Image
                  src={item.image}
                  alt={`${item.name} — sample presentation at Anand Café`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Top Badge: Featured or Bestseller */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                  {item.badge && (
                    <span className="bg-espresso/90 backdrop-blur-sm text-caramel-light text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-full shadow-sm">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Category Pill */}
                <div className="absolute bottom-3 right-3">
                  <span className="bg-white/90 backdrop-blur-sm text-espresso text-[11px] font-medium px-2.5 py-0.5 rounded-full shadow-xs">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      {/* Vegetarian Indicator Icon (Green dot in square) */}
                      {item.isVeg && (
                        <span
                          className="w-4 h-4 border border-emerald-600 flex items-center justify-center shrink-0 rounded-xs p-0.5"
                          title="100% Vegetarian"
                          aria-label="Vegetarian"
                        >
                          <span className="w-2 h-2 rounded-full bg-emerald-600 block" />
                        </span>
                      )}
                      <h3
                        className="text-lg sm:text-xl font-bold text-espresso leading-snug group-hover:text-primary transition-colors duration-200"
                        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                      >
                        {item.name}
                      </h3>
                    </div>

                    {/* Price */}
                    <div className="text-right shrink-0">
                      <span
                        className="text-lg font-bold text-primary block"
                        style={{ fontFamily: "var(--font-lato), sans-serif" }}
                      >
                        {item.price}
                      </span>
                    </div>
                  </div>

                  <p
                    className="text-text-muted text-sm leading-relaxed mb-4"
                    style={{ fontFamily: "var(--font-lato), sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Card Footer: Demo Label & Quick Query */}
                <div className="pt-3 border-t border-border-warm/50 flex items-center justify-between text-xs text-text-muted/70">
                  <span className="tracking-wider uppercase text-[10px] font-semibold">
                    Sample Price
                  </span>
                  <a
                    href="#contact"
                    className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-1 group/link"
                  >
                    <span>Reserve in Café</span>
                    <span className="group-hover/link:translate-x-0.5 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Menu Note & CTA */}
        <div className="mt-14 p-6 sm:p-8 bg-white rounded-2xl border border-border-warm text-center max-w-2xl mx-auto shadow-xs">
          <p
            className="text-espresso font-semibold text-base mb-1"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Looking for something tailored?
          </p>
          <p className="text-text-muted text-sm mb-4">
            We customize dairy alternatives, sweetness levels, and spice strengths to your liking.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark underline underline-offset-4 decoration-caramel"
          >
            <span>Have dietary preferences? Ask our baristas</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
