import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <footer className="relative border-t border-accent/20 bg-gradient-to-b from-card/30 to-background/80 backdrop-blur-sm py-12">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-lg font-bold text-accent">⚽ Brhuno Santana</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Jovem talento do futebol brasileiro, dedicado a alcançar seus objetivos.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-4 font-bold text-foreground text-sm uppercase tracking-wide">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground transition-colors hover:text-accent font-medium">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#statistics" className="text-muted-foreground transition-colors hover:text-accent font-medium">
                  Estatísticas
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-foreground transition-colors hover:text-accent font-medium">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground transition-colors hover:text-accent font-medium">
                  Contato
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-4 font-bold text-foreground text-sm uppercase tracking-wide">Redes Sociais</h4>
            <div className="flex gap-3 flex-wrap">
              <a 
                href="#" 
                className="p-2 rounded-lg border border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/60 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg border border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/60 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg border border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/60 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg border border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/60 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-4 font-bold text-foreground text-sm uppercase tracking-wide">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:contato@brhuno.com" className="text-muted-foreground transition-colors hover:text-accent font-medium">
                  contato@brhuno.com
                </a>
              </li>
              <li className="text-muted-foreground font-medium">(11) 9 XXXX-XXXX</li>
              <li className="text-muted-foreground font-medium">São Paulo, Brasil</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="my-8 border-t border-accent/20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Copyright */}
        <motion.div 
          className="flex flex-col items-center justify-between gap-4 sm:flex-row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={itemVariants} className="text-sm text-muted-foreground">
            &copy; {currentYear} Brhuno Santana. Todos os direitos reservados.
          </motion.p>
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Desenvolvido com <span className="text-accent animate-pulse">❤️</span> para o futebol
            </p>
            <ThemeSwitcher />
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
