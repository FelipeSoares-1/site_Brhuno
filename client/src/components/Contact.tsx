import { useState } from "react";
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

  return (
    <section id="contact" className="relative bg-card/30 py-20 sm:py-32">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Entre em <span className="text-accent">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Interessado em conhecer mais sobre Brhuno? Envie uma mensagem!
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-foreground">Informações de Contato</h3>
              <p className="mb-8 text-muted-foreground">
                Estamos sempre abertos para oportunidades, parcerias e conversas sobre futebol.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-lg border border-accent/20 bg-background p-4">
                <Mail className="mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">contato@brhuno.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-accent/20 bg-background p-4">
                <Phone className="mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">WhatsApp</p>
                  <p className="text-muted-foreground">(11) 9 XXXX-XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-accent/20 bg-background p-4">
                <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">Localização</p>
                  <p className="text-muted-foreground">São Paulo, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl border border-accent/20 bg-background p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full rounded-lg border border-accent/20 bg-card/50 px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full rounded-lg border border-accent/20 bg-card/50 px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                  Telefone (Opcional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(11) 9 XXXX-XXXX"
                  className="w-full rounded-lg border border-accent/20 bg-card/50 px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Sua mensagem aqui..."
                  rows={5}
                  className="w-full rounded-lg border border-accent/20 bg-card/50 px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 disabled:opacity-50 active:scale-95"
              >
                <div className="flex items-center justify-center gap-2">
                  <Send className="h-5 w-5" />
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
