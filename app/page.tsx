import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import Cases from "@/components/Cases";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Benefits />
        <Cases />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
