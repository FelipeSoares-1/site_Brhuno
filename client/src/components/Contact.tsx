import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulating form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error("Erro ao enviar a mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="relative py-20 sm:py-32 animate-fade-in">
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
            Entre em <span className="text-accent">Contato</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground font-medium">
            💬 Interessado em conhecer mais sobre Brhuno? Envie uma mensagem!
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid gap-12 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-foreground">📍 Informações de Contato</h3>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Estamos sempre abertos para oportunidades, parcerias e conversas sobre futebol.
              </p>
            </div>

            {/* Contact Items */}
            <motion.div className="space-y-4" variants={containerVariants}>
              <motion.div 
                variants={itemVariants}
                className="flex items-start gap-4 rounded-lg border border-accent/30 bg-accent/10 p-5 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 cursor-pointer group"
              >
                <Mail className="mt-1 h-6 w-6 flex-shrink-0 text-accent group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-bold text-foreground">Email</p>
                  <p className="text-muted-foreground">contato@brhuno.com</p>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex items-start gap-4 rounded-lg border border-accent/30 bg-accent/10 p-5 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 cursor-pointer group"
              >
                <Phone className="mt-1 h-6 w-6 flex-shrink-0 text-accent group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-bold text-foreground">WhatsApp</p>
                  <p className="text-muted-foreground">(11) 9 XXXX-XXXX</p>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex items-start gap-4 rounded-lg border border-accent/30 bg-accent/10 p-5 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 cursor-pointer group"
              >
                <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-accent group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-bold text-foreground">Localização</p>
                  <p className="text-muted-foreground">São Paulo, Brasil</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="rounded-xl border border-accent/30 bg-gradient-to-br from-card/50 to-background/50 backdrop-blur-sm p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-foreground">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full rounded-lg border border-accent/20 bg-background/50 backdrop-blur-sm px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 hover:border-accent/40"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-foreground">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full rounded-lg border border-accent/20 bg-background/50 backdrop-blur-sm px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 hover:border-accent/40"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-foreground">
                  Telefone (Opcional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(11) 9 XXXX-XXXX"
                  className="w-full rounded-lg border border-accent/20 bg-background/50 backdrop-blur-sm px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 hover:border-accent/40"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Sua mensagem aqui..."
                  rows={5}
                  className="w-full rounded-lg border border-accent/20 bg-background/50 backdrop-blur-sm px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 hover:border-accent/40 resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden rounded-lg bg-accent px-6 py-3 font-bold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 disabled:opacity-50 active:scale-95 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-center gap-2">
                  <Send className="h-5 w-5 group-hover:animate-pulse" />
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </div>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
