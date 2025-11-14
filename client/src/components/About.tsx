import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="relative py-20 sm:py-32 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={itemVariants} className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Sobre <span className="text-accent">Brhuno</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground font-medium">Conheça o jogador por trás do uniforme</motion.p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid gap-12 lg:grid-cols-2 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left: Image */}
          <motion.div variants={itemVariants} className="flex items-center justify-center">
            <div className="relative h-96 w-full overflow-hidden rounded-2xl border border-accent/30 bg-card/50 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <img
                src="/hero-3.jpg"
                alt="Brhuno Santana em ação"
                className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-6">
            <motion.div variants={itemVariants}>
              <h3 className="mb-2 text-2xl font-bold text-foreground">Perfil do Jogador</h3>
              <p className="text-muted-foreground leading-relaxed">
                Brhuno Santana é um jovem talento do futebol brasileiro, nascido em 30 de outubro de 2008. Com apenas 16 anos, já demonstra grande potencial e dedicação ao esporte.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="mb-3 text-2xl font-bold text-foreground">Características Físicas</h3>
              <div className="space-y-3">
                <motion.div 
                  className="flex items-center justify-between rounded-lg bg-accent/10 border border-accent/20 p-4 hover:bg-accent/20 transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <span className="text-muted-foreground font-medium">Altura</span>
                  <span className="font-bold text-accent">1,80 m</span>
                </motion.div>
                <motion.div 
                  className="flex items-center justify-between rounded-lg bg-accent/10 border border-accent/20 p-4 hover:bg-accent/20 transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <span className="text-muted-foreground font-medium">Peso</span>
                  <span className="font-bold text-accent">72 kg</span>
                </motion.div>
                <motion.div 
                  className="flex items-center justify-between rounded-lg bg-accent/10 border border-accent/20 p-4 hover:bg-accent/20 transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <span className="text-muted-foreground font-medium">Data de Nascimento</span>
                  <span className="font-bold text-accent">30/10/2008</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="mb-3 text-2xl font-bold text-foreground">Posição</h3>
              <div className="flex gap-3">
                <div className="rounded-lg bg-accent/20 border border-accent/40 px-6 py-3 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300">
                  <p className="font-bold text-accent">⚽ Volante</p>
                </div>
                <div className="rounded-lg bg-accent/20 border border-accent/40 px-6 py-3 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300">
                  <p className="font-bold text-accent">🛡️ Zagueiro</p>
                </div>
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-muted-foreground italic font-medium">
              💪 Com dedicação, disciplina e paixão pelo futebol, Brhuno trabalha constantemente para aprimorar suas habilidades e alcançar seus objetivos no esporte.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
