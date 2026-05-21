"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Clock, Users, CheckCircle } from "lucide-react";

function Counter({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2500; // 2.5 seconds

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing function (easeOutExpo) para que frene suavemente al final
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setDisplayValue(Math.floor(easeProgress * value));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setDisplayValue(value); // Aseguramos el valor final exacto
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

const stats = [
  {
    icon: <Clock className="w-10 h-10 text-white" />,
    value: 10,
    prefix: "+",
    suffix: "",
    label: "Años de Experiencia",
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-white" />,
    value: 500,
    prefix: "+",
    suffix: "",
    label: "Proyectos Realizados",
  },
  {
    icon: <Shield className="w-10 h-10 text-white" />,
    value: 100,
    prefix: "",
    suffix: "%",
    label: "Garantía en Instalaciones",
  },
  {
    icon: <Users className="w-10 h-10 text-white" />,
    value: 24,
    prefix: "",
    suffix: "/7",
    label: "Atención Personalizada",
  }
];

export default function Guarantee() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 water-gradient z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/hero.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-white/80 font-semibold tracking-wider uppercase text-sm mb-3">Respaldo y Confianza</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Tu tranquilidad es nuestro compromiso</h3>
            <p className="text-white/90 text-lg">
              Construimos relaciones a largo plazo con nuestros clientes basadas en la transparencia, la calidad y la garantía real de todos nuestros trabajos.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-xl border border-white/30 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                {stat.icon}
              </div>
              <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 tabular-nums tracking-tight">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </h4>
              <p className="text-white/80 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
