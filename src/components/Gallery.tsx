"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Maximize2 } from "lucide-react";

const galleryImages = [
  { src: "/instalaciones/instalacion1.png", alt: "Instalación 1", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
  { src: "/instalaciones/instalacion2.png", alt: "Instalación 2", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/instalaciones/instalacion3.png", alt: "Instalación 3", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/instalaciones/instalacion4.png", alt: "Instalación 4", colSpan: "md:col-span-3", rowSpan: "md:row-span-1" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-3">Galería de Proyectos</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Inspiración para tu hogar</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Explora algunos de nuestros proyectos más recientes y descubre la calidad de nuestras terminaciones.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${image.colSpan} ${image.rowSpan}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/50">
                    <Maximize2 size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
