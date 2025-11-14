import Hero from "@/components/Hero";
import About from "@/components/About";
import Statistics from "@/components/Statistics";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-animated opacity-30" />
        
        {/* Blurred Blobs */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        
        {/* Floating Particles */}
        <div className="floating-particle particle-1" />
        <div className="floating-particle particle-2" />
        <div className="floating-particle particle-3" />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/40 backdrop-blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen w-full">
        <Header />
        <Hero />
        <ScrollAnimation direction="left" delay={0.2}>
          <About />
        </ScrollAnimation>
        <ScrollAnimation direction="right" delay={0.2}>
          <Statistics />
        </ScrollAnimation>
        <ScrollAnimation direction="left" delay={0.2}>
          <Gallery />
        </ScrollAnimation>
        <ScrollAnimation direction="right" delay={0.2}>
          <Contact />
        </ScrollAnimation>
        <Footer />
      </div>
    </>
  );
}
