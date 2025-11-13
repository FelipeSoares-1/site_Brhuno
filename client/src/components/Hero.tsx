import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="/bruno_2.png"
          alt="Brhuno Santana"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Badge */}
          <motion.div variants={itemVariants} className="mb-6 inline-block">
            <div className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 backdrop-blur-sm">
              <p className="text-sm font-medium text-accent">Jovem Talento em Ascensão</p>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
          >
            Brhuno <span className="text-accent">Santana</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mb-8 text-xl text-white/80 sm:text-2xl"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
          >
            Volante / Zagueiro • Talento Promissor do Futebol Brasileiro
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <button
              onClick={scrollToAbout}
              className="group relative inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 active:scale-95"
            >
              Ver Perfil Completo
              <ChevronDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
            </button>
          </motion.div>
        </motion.div>
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
