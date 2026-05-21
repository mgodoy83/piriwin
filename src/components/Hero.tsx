"use client";

import { motion } from "framer-motion";
import { ArrowRight, Waves } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Piscina moderna"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/20 text-white/90 mb-6">
              <Waves size={16} className="text-brand-300" />
              <span className="text-sm font-medium tracking-wide">Calidad Premium Garantizada</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Construimos espacios para <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-accent-400">disfrutar</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
              Especialistas en piscinas, bordes y proyectos personalizados con garantía y compromiso. Transforma tu patio en un oasis de relajación.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#modelos" className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-brand-500/40 font-medium text-lg">
                Ver modelos
              </a>
              <a href="#contacto" className="flex items-center justify-center gap-2 glass-card hover:bg-white/20 text-white px-8 py-4 rounded-xl transition-all font-medium text-lg border border-white/30 group">
                Cotizar proyecto
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-[50px] md:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,123.15,198.8,111.41C241.97,104.22,283.47,82.35,321.39,56.44Z"
            className="fill-background"
          ></path>
        </svg>
      </div>
    </section>
  );
}
