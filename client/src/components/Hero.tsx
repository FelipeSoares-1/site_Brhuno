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
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-background/50 to-background">
      {/* Animated Particle Effect Background */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        {/* Glowing Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-accent/30 to-transparent blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "-10%", left: "-5%" }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-l from-accent/20 to-transparent blur-3xl"
          animate={{
            x: [-50, 50, -50],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ bottom: "-5%", right: "-10%" }}
        />
      </div>

      {/* Dynamic Light Rays */}
      <div className="absolute inset-0 z-8 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-2 h-96 bg-gradient-to-b from-accent/60 via-accent/20 to-transparent blur-xl"
          animate={{
            rotate: [0, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{ top: "50%", left: "50%", transformOrigin: "center" }}
        />
        <motion.div
          className="absolute w-1 h-80 bg-gradient-to-b from-accent/40 via-accent/10 to-transparent blur-lg"
          animate={{
            rotate: [360, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          style={{ top: "50%", right: "20%", transformOrigin: "center" }}
        />
      </div>

      {/* Animated Grid Background */}
      {/* Removido - não deixava bom */}

      {/* Floating Particles */}
      <div className="absolute inset-0 z-9 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent"
            animate={{
              y: [0, -200, 0],
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "0%",
            }}
          />
        ))}
      </div>

      {/* Background Image with improved overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="/bruno_2.png"
          alt="Brhuno Santana"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      </motion.div>

      {/* Glowing Border Effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-4/5 h-3/4 border-2 border-accent/20 rounded-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        animate={{
          boxShadow: [
            "0 0 20px rgba(var(--accent), 0.3)",
            "0 0 60px rgba(var(--accent), 0.6)",
            "0 0 20px rgba(var(--accent), 0.3)",
          ],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

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
            <div className="rounded-full border border-accent/50 bg-accent/15 px-6 py-3 backdrop-blur-lg shadow-lg">
              <p className="text-sm font-semibold text-accent tracking-wide">🚀 Jovem Talento em Ascensão</p>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="mb-4 text-5xl font-black tracking-tighter text-white drop-shadow-lg sm:text-6xl lg:text-7xl"
            style={{ 
              textShadow: "0 4px 20px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.2)",
              letterSpacing: "-0.02em"
            }}
          >
            Brhuno <span className="bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent">Santana</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mb-8 text-xl font-medium text-white/90 sm:text-2xl drop-shadow"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
          >
            <span className="text-accent">Volante / Zagueiro<br/>• Talento Promissor do Futebol Brasileiro</span>
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="flex gap-4 justify-center">
            <button
              onClick={scrollToAbout}
              className="group relative inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 font-bold text-accent-foreground transition-all duration-300 hover:shadow-2xl hover:shadow-accent/60 active:scale-95 hover:scale-105"
            >
              Ver Perfil Completo
              <ChevronDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-muted-foreground font-medium">Deslize para explorar</p>
          <ChevronDown className="h-5 w-5 text-accent drop-shadow" />
        </div>
      </motion.div>
    </section>
  );
}
