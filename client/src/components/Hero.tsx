import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import HeroEffects from "./HeroEffects";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      {/* Main Hero Image with Parallax Effect */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <img
          src="/hero-main.png"
          alt="Brhuno Santana"
          className="h-full w-full object-contain object-center drop-shadow-2xl"
          style={{
            filter: "drop-shadow(0 0 60px rgba(59, 130, 246, 0.4))",
          }}
        />
      </div>

      {/* Hero Effects Component */}
      <HeroEffects />

      {/* Animated Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent)",
            animation: "pulse 4s ease-in-out infinite",
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>

      {/* Overlay with gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center">
          {/* Animated Badge */}
          <div className="mb-6 inline-block animate-fade-in">
            <div className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 backdrop-blur-sm">
              <p className="text-sm font-medium text-accent">Jovem Talento em Ascensão</p>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="mb-4 animate-fade-in text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Brhuno <span className="text-accent">Santana</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 animate-fade-in text-xl text-muted-foreground sm:text-2xl">
            Volante / Zagueiro • Talento Promissor do Futebol Brasileiro
          </p>

          {/* Stats Preview */}
          <div className="mb-12 grid grid-cols-3 gap-4 animate-fade-in">
            <div className="rounded-lg border border-accent/20 bg-card/40 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-accent">1.80m</p>
              <p className="text-sm text-muted-foreground">Altura</p>
            </div>
            <div className="rounded-lg border border-accent/20 bg-card/40 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-accent">72kg</p>
              <p className="text-sm text-muted-foreground">Peso</p>
            </div>
            <div className="rounded-lg border border-accent/20 bg-card/40 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-accent">16 anos</p>
              <p className="text-sm text-muted-foreground">Idade</p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="group relative inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 active:scale-95"
          >
            Ver Perfil Completo
            <ChevronDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-muted-foreground">Deslize para explorar</p>
          <ChevronDown className="h-5 w-5 text-accent" />
        </div>
      </div>


    </section>
  );
}
