import { useEffect, useRef } from "react";

export default function HeroEffects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating particles
    const createParticle = () => {
      const particle = document.createElement("div");
      const size = Math.random() * 4 + 2;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 2;

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent);
        border-radius: 50%;
        left: ${x}%;
        top: ${y}%;
        pointer-events: none;
        box-shadow: 0 0 ${size * 2}px rgba(59, 130, 246, 0.6);
        animation: float ${duration}s ease-in-out ${delay}s infinite;
      `;

      container.appendChild(particle);

      // Remove old particles to prevent memory leak
      setTimeout(() => {
        if (Math.random() > 0.7) {
          particle.remove();
        }
      }, (duration + delay) * 1000 * 2);
    };

    // Create initial particles
    for (let i = 0; i < 15; i++) {
      setTimeout(() => createParticle(), i * 100);
    }

    // Create new particles periodically
    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        createParticle();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Animated energy lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))" }}>
        <defs>
          <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Animated lines */}
        <line x1="20%" y1="30%" x2="80%" y2="50%" stroke="url(#energyGradient)" strokeWidth="2" filter="url(#glow)" style={{ animation: "energyPulse 3s ease-in-out infinite" }} />
        <line x1="70%" y1="20%" x2="30%" y2="70%" stroke="url(#energyGradient)" strokeWidth="2" filter="url(#glow)" style={{ animation: "energyPulse 4s ease-in-out infinite 0.5s" }} />
        <line x1="10%" y1="60%" x2="90%" y2="40%" stroke="url(#energyGradient)" strokeWidth="1.5" filter="url(#glow)" style={{ animation: "energyPulse 3.5s ease-in-out infinite 1s" }} />

        {/* Animated circles */}
        <circle cx="50%" cy="50%" r="15%" fill="none" stroke="url(#energyGradient)" strokeWidth="1" filter="url(#glow)" style={{ animation: "expandPulse 4s ease-out infinite" }} />
        <circle cx="50%" cy="50%" r="10%" fill="none" stroke="url(#energyGradient)" strokeWidth="1" filter="url(#glow)" style={{ animation: "expandPulse 4s ease-out infinite 0.5s" }} />
      </svg>

      {/* Corner accent lights */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl" style={{ animation: "pulse 4s ease-in-out infinite" }} />
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent/15 to-transparent rounded-full blur-2xl" style={{ animation: "pulse 5s ease-in-out infinite 1s" }} />
      <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-gradient-to-t from-accent/10 to-transparent rounded-full blur-3xl" style={{ animation: "pulse 6s ease-in-out infinite 2s" }} />

      {/* Animated scan lines */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59, 130, 246, 0.1) 2px, rgba(59, 130, 246, 0.1) 4px)", animation: "scanlines 8s linear infinite" }} />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-accent/60 blur-sm" style={{ animation: "float 6s ease-in-out infinite" }} />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-accent/50 blur-sm" style={{ animation: "float 7s ease-in-out infinite 1s" }} />
      <div className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 rounded-full bg-accent/40 blur-sm" style={{ animation: "float 5s ease-in-out infinite 2s" }} />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-accent/45 blur-sm" style={{ animation: "float 8s ease-in-out infinite 1.5s" }} />

      {/* Radial burst effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-full h-full" style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
          animation: "radiusExpand 4s ease-out infinite"
        }} />
      </div>
    </div>
  );
}
