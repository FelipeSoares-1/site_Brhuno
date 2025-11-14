import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  const [selectedPosition, setSelectedPosition] = useState<"volante" | "zagueiro">("volante");

  const stats: StatItem[] = [
    { label: "Jogos na Temporada", value: "24", icon: <Trophy className="w-8 h-8" /> },
    { label: "Gols Marcados", value: "3", icon: <Goal className="w-8 h-8" /> },
    { label: "Assistências", value: "5", icon: <Handshake className="w-8 h-8" /> },
    { label: "Desarmes por Jogo", value: "4.2", icon: <ShieldCheck className="w-8 h-8" /> },
    { label: "Passes Certos", value: "87%", icon: <ArrowRight className="w-8 h-8" /> },
    { label: "Minutos em Campo", value: "1850", icon: <Clock className="w-8 h-8" /> },
  ];

  // Dados de habilidades específicas por posição
  const skillsByPosition = {
    volante: [
      { subject: "Posicionamento", A: 95, fullMark: 100, desc: "Leitura de jogo apurada para interceptar passes no meio-campo defensivo." },
      { subject: "Marcação", A: 92, fullMark: 100, desc: "Pressão constante sobre os meias adversários e desarmes precisos." },
      { subject: "Passe", A: 88, fullMark: 100, desc: "Distribuição de passes para iniciar contra-ataques e construção de jogo." },
      { subject: "Velocidade", A: 87, fullMark: 100, desc: "Agilidade para cobrir grandes áreas do meio-campo." },
      { subject: "Resistência", A: 94, fullMark: 100, desc: "Fôlego excepcional para manter intensidade durante toda a partida." },
      { subject: "Liderança", A: 86, fullMark: 100, desc: "Organização da transição defesa-ataque." },
    ],
    zagueiro: [
      { subject: "Posicionamento", A: 96, fullMark: 100, desc: "Antecipação precisa de ataques adversários." },
      { subject: "Marcação", A: 94, fullMark: 100, desc: "Cobertura defensiva e neutralização de atacantes." },
      { subject: "Força", A: 93, fullMark: 100, desc: "Potência física em duelos e cabeceios defensivos." },
      { subject: "Velocidade", A: 89, fullMark: 100, desc: "Velocidade para acompanhar atacantes rápidos." },
      { subject: "Resistência", A: 91, fullMark: 100, desc: "Concentração máxima durante toda a partida." },
      { subject: "Comunicação", A: 90, fullMark: 100, desc: "Liderança defensiva e organização da linha de zaga." },
    ],
  };

  const skillsData = skillsByPosition[selectedPosition];

  const positionLabels = {
    volante: "VOL - Volante",
    zagueiro: "ZG - Zagueiro",
  };

  const positionDescriptions = {
    volante: "Posição defensiva no meio-campo. Responsável por interceptações, marcação e transição defesa-ataque.",
    zagueiro: "Posição de defesa. Responsável por antecipações, bloqueios e liderança da linha de zaga.",
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border border-accent/50 bg-background/95 backdrop-blur-sm p-4 shadow-lg border-b-2 border-b-accent">
          <p className="label font-bold text-foreground text-sm">{`${label} : ${payload[0].value}`}</p>
          <p className="intro text-muted-foreground text-xs mt-2 max-w-xs">{skillsData.find(s => s.subject === label)?.desc}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <section id="statistics" className="relative py-20 sm:py-32 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Estatísticas da <span className="text-accent">Temporada</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium">Desempenho em números</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-accent/20 bg-gradient-to-br from-card/50 to-background p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-accent/10 opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4 text-4xl text-accent group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="mb-2 text-3xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                  {stat.value.includes("%" ) || stat.value.includes(".") ? stat.value : <AnimatedCounter target={parseInt(stat.value)} />}
                  {stat.value.includes("%") && "%"}
                </div>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>

              {/* Border Animation */}
              <div className="absolute inset-0 rounded-xl border border-accent/0 transition-all group-hover:border-accent/40" />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="rounded-xl border border-accent/30 bg-gradient-to-br from-card/50 to-background/50 p-8 backdrop-blur-sm shadow-lg">
          <h3 className="mb-8 text-2xl font-bold text-foreground">💪 Habilidades Principais</h3>
          
          {/* Campo de Futebol - Seletor de Posição */}
          <div className="mb-8">
            <p className="mb-4 text-sm text-muted-foreground">Clique na posição do Brhuno no campo:</p>
            
            {/* Mini Mapa do Campo - Com Background Real */}
            <div className="relative mx-auto w-2/3 rounded-lg overflow-hidden border-2 border-accent/50 shadow-lg shadow-accent/20 mb-6">
              {/* Background - Mini Mapa */}
              <img 
                src="/mini_mapa.jpg" 
                alt="Campo de futebol"
                className="w-full h-auto object-cover"
              />

              {/* Posições numeradas (layout 1-4-3-3 conforme mini_mapa.jpg) */}
              <div className="absolute inset-0" style={{ pointerEvents: "none" }}>
                {/* NOTA: 
                    Usei style={{ top: 'Y%', left: 'X%', transform: 'translate(-50%, -50%)' }} 
                    para um posicionamento preciso. 
                    Ajuste os valores de Y% e X% se precisar de micro-ajustes.
                  */}

                {/* GOLEIRO (1) */}
                <div
                  className="absolute rounded-full bg-red-500/30 border-2 border-red-300 flex items-center justify-center font-bold text-white opacity-70 w-7 h-7 sm:w-10 sm:h-10 text-xs sm:text-sm"
                  style={{ top: "50%", left: "8%", transform: "translate(-50%, -50%)" }}
                >
                  1
                </div>

                {/* LATERAL DIREITO (2) */}
                <div
                  className="absolute rounded-full bg-white/20 border-2 border-white flex items-center justify-center font-bold text-white opacity-70 w-7 h-7 sm:w-10 sm:h-10 text-xs"
                  style={{ top: "85%", left: "25%", transform: "translate(-50%, -50%)" }}
                >
                  2
                </div>

                {/* ZAGUEIRO (3) */}
                <div
                  className="absolute rounded-full bg-white/20 border-2 border-white flex items-center justify-center font-bold text-white opacity-70 w-7 h-7 sm:w-10 sm:h-10 text-xs"
                  style={{ top: "65%", left: "25%", transform: "translate(-50%, -50%)" }}
                >
                  3
                </div>

                {/* ZAGUEIRO (4) - INTERATIVO */}
                <motion.button
                  onClick={() => setSelectedPosition("zagueiro")}
                  className={`absolute rounded-full flex items-center justify-center font-bold text-xs transition-all z-20 w-8 h-8 sm:w-12 sm:h-12 ${
                    selectedPosition === "zagueiro"
                      ? "scale-125 shadow-2xl"
                      : "opacity-75 hover:opacity-100"
                  }`}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  title="Zagueiro"
                  style={{
                    top: "35%",
                    left: "25%",
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "auto",
                  }}
                >
                  <div
                    className={`absolute inset-0 rounded-full transition-all ${
                      selectedPosition === "zagueiro"
                        ? "bg-purple-500/90 border-2 border-purple-300 shadow-lg shadow-purple-500/90"
                        : "bg-purple-400/60 border-2 border-purple-200"
                    }`}
                  />
                  <span className="relative z-10">4</span>
                </motion.button>

                {/* MEIA (5) */}
                <motion.button
                  onClick={() => setSelectedPosition("volante")}
                  className={`absolute rounded-full flex items-center justify-center font-bold text-xs transition-all z-20 w-8 h-8 sm:w-12 sm:h-12 ${
                    selectedPosition === "volante"
                      ? "scale-125 shadow-2xl"
                      : "opacity-75 hover:opacity-100"
                  }`}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  title="Volante"
                  style={{
                    top: "38%",
                    left: "45%",
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "auto",
                  }}
                >
                  <div
                    className={`absolute inset-0 rounded-full transition-all ${
                      selectedPosition === "volante"
                        ? "bg-blue-500/90 border-2 border-blue-300 shadow-lg shadow-blue-500/90"
                        : "bg-blue-400/60 border-2 border-blue-200"
                    }`}
                  />
                  <span className="relative z-10">5</span>
                </motion.button>

                {/* LATERAL ESQUERDO (6) */}
                <div
                  className="absolute rounded-full bg-white/20 border-2 border-white flex items-center justify-center font-bold text-white opacity-70 w-7 h-7 sm:w-10 sm:h-10 text-xs"
                  style={{ top: "15%", left: "25%", transform: "translate(-50%, -50%)" }}
                >
                  6
                </div>

                {/* PONTA DIREITA (7) */}
                <div
                  className="absolute rounded-full bg-white/20 border-2 border-white flex items-center justify-center font-bold text-white opacity-70 w-7 h-7 sm:w-10 sm:h-10 text-xs"
                  style={{ top: "75%", left: "75%", transform: "translate(-50%, -50%)" }}
                >
                  7
                </div>

                {/* VOLANTE (8) */}
                <div
                  className="absolute rounded-full bg-white/20 border-2 border-white flex items-center justify-center font-bold text-white opacity-70 w-7 h-7 sm:w-10 sm:h-10 text-xs"
                  style={{ top: "62%", left: "45%", transform: "translate(-50%, -50%)" }}
                >
                  8
                </div>

                {/* CENTROAVANTE (9) */}
                <div
                  className="absolute rounded-full bg-white/20 border-2 border-white flex items-center justify-center font-bold text-white opacity-70 w-7 h-7 sm:w-10 sm:h-10 text-xs"
                  style={{ top: "50%", left: "87%", transform: "translate(-50%, -50%)" }}
                >
                  9
                </div>

                {/* MEIA ATACANTE (10) */}
                <div
                  className="absolute rounded-full bg-white/20 border-2 border-white flex items-center justify-center font-bold text-white opacity-70 w-7 h-7 sm:w-10 sm:h-10 text-xs"
                  style={{ top: "50%", left: "60%", transform: "translate(-50%, -50%)" }}
                >
                  10
                </div>

                {/* PONTA ESQUERDA (11) */}
                <div
                  className="absolute rounded-full bg-white/20 border-2 border-white flex items-center justify-center font-bold text-white opacity-70 w-7 h-7 sm:w-10 sm:h-10 text-xs"
                  style={{ top: "25%", left: "75%", transform: "translate(-50%, -50%)" }}
                >
                  11
                </div>
              </div>
            </div>

            {/* Botões de atalho também */}
            <div className="grid grid-cols-2 gap-3">
              {/* Volante */}
              <motion.button
                onClick={() => setSelectedPosition("volante")}
                className={`py-3 px-4 rounded-lg font-bold text-sm transition-all ${
                  selectedPosition === "volante"
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/50"
                    : "bg-white/10 text-foreground hover:bg-white/20 border border-white/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-base font-bold">VOL (6)</div>
                <div className="text-xs opacity-75">Volante</div>
              </motion.button>

              {/* Zagueiro */}
              <motion.button
                onClick={() => setSelectedPosition("zagueiro")}
                className={`py-3 px-4 rounded-lg font-bold text-sm transition-all ${
                  selectedPosition === "zagueiro"
                    ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/50"
                    : "bg-white/10 text-foreground hover:bg-white/20 border border-white/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-base font-bold">ZG (4)</div>
                <div className="text-xs opacity-75">Zagueiro</div>
              </motion.button>
            </div>
          </div>

          {/* Info da Posição Selecionada */}
          <motion.div
            key={selectedPosition}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8 p-4 rounded-lg border border-accent/30 bg-accent/5"
          >
            <h4 className="text-lg font-bold text-accent mb-2">
              {selectedPosition === "volante" ? "VOL - Volante" : "ZG - Zagueiro"}
            </h4>
            <p className="text-sm text-muted-foreground">
              {selectedPosition === "volante"
                ? "Posição defensiva no meio-campo. Responsável por interceptações, marcação e transição defesa-ataque."
                : "Posição de defesa. Responsável por antecipações, bloqueios e liderança da linha de zaga."}
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                  <PolarGrid stroke="var(--color-border)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--color-foreground)', fontSize: 14, fontWeight: 500 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Nível de Habilidade" dataKey="A" stroke="var(--color-accent)" fill="var(--color-accent)" fillOpacity={0.7} strokeWidth={2} />
                  <Legend wrapperStyle={{ color: 'var(--color-foreground)', fontWeight: 500 }} />
                  <Tooltip content={<CustomTooltip />} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-6">
              {skillsData.map((item, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">{item.subject}</span>
                    <span className="text-sm font-bold text-accent">{item.A}%</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-card/50 border border-accent/10">
                    <motion.div
                      className="h-full bg-accent transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-accent/50"
                      initial={{ width: 0 }}
                      animate={{ width: `${item.A}%` }}
                      transition={{ duration: 0.8, delay: index * 0.05 }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

