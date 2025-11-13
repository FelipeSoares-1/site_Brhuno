export default function About() {
  return (
    <section id="about" className="relative bg-background py-20 sm:py-32 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Sobre <span className="text-accent">Brhuno</span>
          </h2>
          <p className="text-lg text-muted-foreground">Conheça o jogador por trás do uniforme</p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Image */}
          <div className="flex items-center justify-center">
            <div className="relative h-96 w-full overflow-hidden rounded-2xl border border-accent/20 bg-card/50 shadow-2xl">
              <img
                src="/hero-3.jpg"
                alt="Brhuno Santana em ação"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="mb-2 text-2xl font-bold text-foreground">Perfil do Jogador</h3>
              <p className="text-muted-foreground">
                Brhuno Santana é um jovem talento do futebol brasileiro, nascido em 30 de outubro de 2008. Com apenas 16 anos, já demonstra grande potencial e dedicação ao esporte.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-2xl font-bold text-foreground">Características Físicas</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-card/50 border border-accent/10 p-4">
                  <span className="text-muted-foreground">Altura</span>
                  <span className="font-semibold text-accent">1,80 m</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-card/50 border border-accent/10 p-4">
                  <span className="text-muted-foreground">Peso</span>
                  <span className="font-semibold text-accent">72 kg</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-card/50 border border-accent/10 p-4">
                  <span className="text-muted-foreground">Data de Nascimento</span>
                  <span className="font-semibold text-accent">30/10/2008</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-2xl font-bold text-foreground">Posição</h3>
              <div className="flex gap-3">
                <div className="rounded-lg bg-accent/20 border border-accent/30 px-4 py-2">
                  <p className="font-semibold text-accent">Volante</p>
                </div>
                <div className="rounded-lg bg-accent/20 border border-accent/30 px-4 py-2">
                  <p className="font-semibold text-accent">Zagueiro</p>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground italic">
              Com dedicação, disciplina e paixão pelo futebol, Brhuno trabalha constantemente para aprimorar suas habilidades e alcançar seus objetivos no esporte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
