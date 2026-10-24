import Image from "next/image";
import { CAFE_NAME } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&h=500&fit=crop&q=80"
                alt="Sample café interior — demo image from Unsplash"
                width={600}
                height={500}
                className="object-cover w-full h-[400px] lg:h-[500px]"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-light/30 rounded-2xl -z-10 hidden lg:block" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10 hidden lg:block" />
          </div>

          {/* Text Content */}
          <div>
            <p
              className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-semibold"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              Our Story
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              A Taste of Tradition, A Touch of Modern
            </h2>
            <div
              className="space-y-4 text-text-muted leading-relaxed text-base md:text-lg"
              style={{ fontFamily: "var(--font-lato), sans-serif" }}
            >
              <p>
                {CAFE_NAME} is a fictional sample café created for this website
                demonstration. In this story, we are a cosy neighbourhood café
                nestled in the vibrant city of Anand, Gujarat — where the aroma
                of freshly brewed coffee meets the warmth of homemade delicacies.
              </p>
              <p>
                Our imaginary team of passionate chefs and baristas would craft
                every dish and drink with care, using locally sourced ingredients
                and time-honoured recipes passed down through generations. From
                the first sip of morning chai to the last bite of evening
                dessert, every moment at our café would be designed to delight.
              </p>
              <p className="text-xs text-text-muted/70 italic mt-4 border-t border-accent-light pt-4">
                ⓘ This is a demonstration website with fictional content. No real
                business exists at this address.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-playfair), serif" }}>5+</p>
                <p className="text-sm text-text-muted" style={{ fontFamily: "var(--font-lato), sans-serif" }}>Years (Sample)</p>
              </div>
              <div className="w-px h-12 bg-accent-light" />
              <div className="text-center">
                <p className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-playfair), serif" }}>50+</p>
                <p className="text-sm text-text-muted" style={{ fontFamily: "var(--font-lato), sans-serif" }}>Menu Items (Sample)</p>
              </div>
              <div className="w-px h-12 bg-accent-light" />
              <div className="text-center">
                <p className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-playfair), serif" }}>❤️</p>
                <p className="text-sm text-text-muted" style={{ fontFamily: "var(--font-lato), sans-serif" }}>Made with Love</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
