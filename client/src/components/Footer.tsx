export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-accent/20 bg-card/50 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-foreground">Brhuno Santana</h3>
            <p className="text-sm text-muted-foreground">
              Jovem talento do futebol brasileiro, dedicado a alcançar seus objetivos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground transition-colors hover:text-accent">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#statistics" className="text-muted-foreground transition-colors hover:text-accent">
                  Estatísticas
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-foreground transition-colors hover:text-accent">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground transition-colors hover:text-accent">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Redes Sociais</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-accent">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-accent">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-accent">
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:contato@brhuno.com" className="text-muted-foreground transition-colors hover:text-accent">
                  contato@brhuno.com
                </a>
              </li>
              <li className="text-muted-foreground">(11) 9 XXXX-XXXX</li>
              <li className="text-muted-foreground">São Paulo, Brasil</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-accent/20" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Brhuno Santana. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Desenvolvido com <span className="text-accent">❤️</span> para o futebol
          </p>
        </div>
      </div>
    </footer>
  );
}
