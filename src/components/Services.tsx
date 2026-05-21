"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    image: "/images/s_install.png",
    title: "Instalación de Piscinas",
    description: "Proceso completo de excavación, instalación y puesta en marcha con los más altos estándares de calidad."
  },
  {
    image: "/images/borders.png",
    title: "Bordes de Piscina",
    description: "Terminaciones elegantes y seguras, usando materiales antideslizantes de primera calidad."
  },
  {
    image: "/images/s_coating.png",
    title: "Revestimientos",
    description: "Amplia variedad de texturas y colores para darle un toque único y duradero a tu piscina."
  },
  {
    image: "/images/s_maintenance.png",
    title: "Mantención",
    description: "Servicio periódico para asegurar que tu agua esté siempre cristalina y lista para disfrutar."
  },
  {
    image: "/images/s_custom.png",
    title: "Proyectos Personalizados",
    description: "Diseños a medida que se adaptan perfectamente a tu espacio y requerimientos específicos."
  },
  {
    image: "/images/s_repair.png",
    title: "Reparaciones y Garantía",
    description: "Servicio técnico especializado y garantía real sobre nuestras instalaciones y productos."
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-3">Nuestros Servicios</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Soluciones integrales para tu piscina</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Ofrecemos un servicio completo, desde el diseño inicial hasta la mantención, asegurando la máxima calidad en cada etapa del proceso.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
