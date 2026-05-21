"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const allTestimonials = [
  {
    name: "Carlos Martínez",
    role: "Cliente Residencial",
    text: "Excelente servicio de principio a fin. El equipo de Piriwin fue muy profesional, cumplieron con los plazos y la piscina quedó espectacular. Totalmente recomendados.",
    rating: 5,
    initials: "CM",
    color: "bg-blue-500"
  },
  {
    name: "Andrea Soto",
    role: "Proyecto Familiar",
    text: "Nos asesoraron en todo momento sobre el mejor diseño para nuestro patio. La calidad de los materiales y los bordes es increíble. Mis hijos están felices.",
    rating: 5,
    initials: "AS",
    color: "bg-emerald-500"
  },
  {
    name: "Fernando Rojas",
    role: "Renovación de Piscina",
    text: "Contratamos a Piriwin para renovar nuestra piscina antigua y el resultado superó nuestras expectativas. El revestimiento y las luces le dieron una nueva vida.",
    rating: 5,
    initials: "FR",
    color: "bg-purple-500"
  },
  {
    name: "Lorena Silva",
    role: "Diseño Personalizado",
    text: "Quería una piscina con forma irregular y cascada. Ellos hicieron mi sueño realidad, el diseño superó por mucho lo que tenía en mente. Simplemente impecable.",
    rating: 5,
    initials: "LS",
    color: "bg-pink-500"
  },
  {
    name: "Roberto Gómez",
    role: "Instalación en Parcela",
    text: "El trabajo de excavación e instalación fue muy rápido. Mantuvieron todo muy ordenado y el equipo fue súper respetuoso. Muy conforme con la garantía que ofrecen.",
    rating: 5,
    initials: "RG",
    color: "bg-orange-500"
  },
  {
    name: "María Paz Valdés",
    role: "Servicio de Mantención",
    text: "Además de instalarnos la piscina, contratamos la mantención mensual. Nunca he tenido el agua tan cristalina. Son puntuales y muy detallistas en su trabajo.",
    rating: 5,
    initials: "MV",
    color: "bg-teal-500"
  },
  {
    name: "Javier Aránguiz",
    role: "Cambio de Bordes",
    text: "Teníamos bordes antiguos que resbalaban. Piriwin nos instaló bordes atérmicos de alta calidad. El cambio visual es tremendo y ahora estamos mucho más seguros.",
    rating: 5,
    initials: "JA",
    color: "bg-indigo-500"
  },
  {
    name: "Camila Fuentes",
    role: "Cliente Residencial",
    text: "Desde la cotización hasta la entrega final demostraron ser una empresa seria. Transparencia total en los costos y un nivel de terminaciones premium.",
    rating: 5,
    initials: "CF",
    color: "bg-rose-500"
  },
  {
    name: "Felipe Morales",
    role: "Proyecto Completo",
    text: "Dejamos todo en sus manos: excavación, piscina, revestimiento y paisajismo alrededor. El resultado es digno de una revista. 100% recomendados.",
    rating: 5,
    initials: "FM",
    color: "bg-cyan-500"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(allTestimonials.length / itemsPerPage);

  // Auto rotate every 6 seconds
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [totalPages, isHovered]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalPages);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);

  // Get current 3 testimonials
  const currentTestimonials = allTestimonials.slice(
    currentIndex * itemsPerPage, 
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-3">Testimonios</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">Lo que dicen nuestros clientes</h3>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        </div>

        <div 
          className="relative min-h-[350px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {currentTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 relative h-full flex flex-col"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 italic flex-1 text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className={`w-14 h-14 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-xl shadow-inner`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 dark:text-white text-lg">{testimonial.name}</h5>
                      <p className="text-sm text-brand-600 dark:text-brand-400 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-8 bg-brand-600" : "w-2 bg-slate-300 dark:bg-slate-700"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
