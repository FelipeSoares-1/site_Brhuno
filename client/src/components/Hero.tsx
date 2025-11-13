import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-2.jpg')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
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

      {/* Animated Background Elements */}
      <div className="absolute -bottom-1/2 -right-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute -top-1/2 -left-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
    </section>
  );
}
