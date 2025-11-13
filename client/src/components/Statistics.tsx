import { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import {
  Swords,
  ShieldCheck,
  ArrowRight,
  FastForward,
  BatteryCharging,
  Users,
  Trophy,
  Goal,
  Handshake,
  Clock,
} from "lucide-react";

interface StatItem {
  label: string;
  value: string;
  icon: React.ReactNode;
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
    { label: "Jogos na Temporada", value: "24", icon: <Trophy className="w-8 h-8" /> },
    { label: "Gols Marcados", value: "3", icon: <Goal className="w-8 h-8" /> },
    { label: "Assistências", value: "5", icon: <Handshake className="w-8 h-8" /> },
    { label: "Desarmes por Jogo", value: "4.2", icon: <ShieldCheck className="w-8 h-8" /> },
    { label: "Passes Certos", value: "87%", icon: <ArrowRight className="w-8 h-8" /> },
    { label: "Minutos em Campo", value: "1850", icon: <Clock className="w-8 h-8" /> },
  ];

  const skillsData = [
    { subject: "Posicionamento", A: 95, fullMark: 100, desc: "Leitura de jogo apurada para antecipar jogadas e se posicionar de forma estratégica, tanto na defesa quanto na transição para o ataque." },
    { subject: "Marcação", A: 92, fullMark: 100, desc: "Capacidade de pressionar o adversário, realizar desarmes precisos e proteger a linha defensiva com eficiência." },
    { subject: "Passe", A: 88, fullMark: 100, desc: "Qualidade na distribuição de passes curtos e longos, iniciando a construção de jogadas e mantendo a posse de bola." },
    { subject: "Velocidade", A: 90, fullMark: 100, desc: "Agilidade e piques rápidos para cobrir grandes áreas do campo, acompanhar atacantes e participar de contra-ataques." },
    { subject: "Resistência", A: 93, fullMark: 100, desc: "Fôlego e vigor físico para manter um alto nível de intensidade durante toda a partida, do primeiro ao último minuto." },
    { subject: "Liderança", A: 85, fullMark: 100, desc: "Postura de líder em campo, orientando os companheiros, organizando a defesa e motivando a equipe." },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border border-border bg-card p-4 shadow-lg">
          <p className="label font-bold text-foreground">{`${label} : ${payload[0].value}`}</p>
          <p className="intro text-muted-foreground">{skillsData.find(s => s.subject === label)?.desc}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <section id="statistics" className="relative bg-card/30 py-20 sm:py-32 animate-fade-in">
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
                <div className="mb-4 text-4xl text-accent">{stat.icon}</div>
                <div className="mb-2 text-3xl font-bold text-foreground">
                  {stat.value.includes("%" ) || stat.value.includes(".") ? stat.value : <AnimatedCounter target={parseInt(stat.value)} />}
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
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                  <PolarGrid stroke="var(--color-border)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--color-foreground)', fontSize: 14 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Nível de Habilidade" dataKey="A" stroke="var(--color-accent)" fill="var(--color-accent)" fillOpacity={0.6} strokeWidth={2} />
                  <Legend wrapperStyle={{ color: 'var(--color-foreground)' }} />
                  <Tooltip content={<CustomTooltip />} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-6">
              {skillsData.map((item, index) => (
                <div key={index}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-lg font-semibold text-foreground">{item.subject}</span>
                    <span className="text-lg font-bold text-accent">{item.A}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-card">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-accent/70"
                      style={{ width: `${item.A}%` }}
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

