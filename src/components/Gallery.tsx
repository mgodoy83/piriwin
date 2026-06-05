"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "/instalaciones/instalacion1.png", alt: "Instalación 1", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
  { src: "/instalaciones/instalacion2.png", alt: "Instalación 2", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/instalaciones/instalacion3.png", alt: "Instalación 3", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/instalaciones/instalacion4.png", alt: "Instalación 4", colSpan: "md:col-span-3", rowSpan: "md:row-span-1" },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
      if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

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
              onClick={() => setSelectedIndex(index)}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${image.colSpan} ${image.rowSpan} shadow-sm hover:shadow-xl transition-all duration-300`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/50 shadow-lg">
                    <Maximize2 size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 z-[110] p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md border border-white/10"
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
            >
              <X size={28} />
            </button>

            {/* Prev Button */}
            <button 
              className="absolute left-4 md:left-8 z-[110] p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md border border-white/10 group"
              onClick={prevImage}
            >
              <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
            </button>

            {/* Next Button */}
            <button 
              className="absolute right-4 md:right-8 z-[110] p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md border border-white/10 group"
              onClick={nextImage}
            >
              <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Main Image */}
            <div className="relative w-full h-full max-w-6xl max-h-[85vh] mx-4 md:mx-24 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={galleryImages[selectedIndex].src}
                    alt={galleryImages[selectedIndex].alt}
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                  
                  {/* Image Counter */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-medium border border-white/10">
                    {selectedIndex + 1} de {galleryImages.length}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
