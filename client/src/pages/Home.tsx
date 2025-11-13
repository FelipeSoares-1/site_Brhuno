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
    <div className="min-h-screen w-full bg-background">
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
  );
}
