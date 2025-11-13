import { useEffect, useState } from "react";

interface StatItem {
  label: string;
  value: string;
  icon: string;
}

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}</span>;
}

export default function Statistics() {
  const stats: StatItem[] = [
    { label: "Jogos na Temporada", value: "24", icon: "⚽" },
    { label: "Gols Marcados", value: "3", icon: "🎯" },
    { label: "Assistências", value: "5", icon: "🤝" },
    { label: "Desarmes por Jogo", value: "4.2", icon: "🛡️" },
    { label: "Passes Certos", value: "87%", icon: "📊" },
    { label: "Minutos em Campo", value: "1850", icon: "⏱️" },
  ];

  return (
    <section id="statistics" className="relative bg-card/30 py-20 sm:py-32">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Estatísticas da <span className="text-accent">Temporada</span>
          </h2>
          <p className="text-lg text-muted-foreground">Desempenho em números</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-accent/20 bg-background p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4 text-4xl">{stat.icon}</div>
                <div className="mb-2 text-3xl font-bold text-accent">
                  {stat.value.includes("%") ? stat.value : <AnimatedCounter target={parseInt(stat.value)} />}
                  {stat.value.includes("%") && "%"}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>

              {/* Border Animation */}
              <div className="absolute inset-0 rounded-xl border border-accent/0 transition-all group-hover:border-accent/30" />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 rounded-xl border border-accent/20 bg-background p-8">
          <h3 className="mb-6 text-2xl font-bold text-foreground">Habilidades Principais</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { skill: "Posicionamento", level: 95 },
              { skill: "Marcação", level: 92 },
              { skill: "Passe", level: 88 },
              { skill: "Velocidade", level: 90 },
              { skill: "Resistência", level: 93 },
              { skill: "Liderança", level: 85 },
            ].map((item, index) => (
              <div key={index}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{item.skill}</span>
                  <span className="text-sm text-accent">{item.level}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-card">
                  <div
                    className="h-full bg-gradient-to-r from-accent to-accent/70 transition-all duration-1000"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
