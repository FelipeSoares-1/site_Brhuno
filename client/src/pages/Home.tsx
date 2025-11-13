import Hero from "@/components/Hero";
import About from "@/components/About";
import Statistics from "@/components/Statistics";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background">
      <Header />
      <Hero />
      <About />
      <Statistics />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
