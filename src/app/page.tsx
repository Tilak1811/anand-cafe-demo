import DemoBanner from "@/components/DemoBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import SignatureSpecial from "@/components/SignatureSpecial";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import PitchSection from "@/components/PitchSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-warm-bg">
      <DemoBanner />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Menu />
        <SignatureSpecial />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
        <PitchSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
