import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import PitchSection from "@/components/PitchSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import DemoBanner from "@/components/DemoBanner";

export default function Home() {
  return (
    <>
      <DemoBanner />
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <Contact />
        <PitchSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
