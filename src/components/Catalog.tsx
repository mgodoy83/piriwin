"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Ruler, Droplets, ArrowRight } from "lucide-react";

const allModels = [
  { id: 1, category: "Romana", name: "Romana S (Piriwin)", size: "6 x 3 mt", depth: "1 mt a 1,60 mt", image: "/images/catalog1.png" },
  { id: 2, category: "Romana", name: "Romana L", size: "8 x 3,40 mt", depth: "1,30 mt a 1,70 mt", image: "/images/catalog2.png" },
  { id: 3, category: "Romana", name: "Romana L (Piriwin)", size: "8 x 3,40 mt", depth: "1,10 mt a 1,70 mt", image: "/images/catalog1.png" },
  { id: 4, category: "Romana", name: "Romanal L", size: "8 x 3,40 mt", depth: "1,10 mt a 1,80 mt", image: "/images/catalog2.png" },
  { id: 5, category: "Riñón", name: "Riñón S (Piriwin)", size: "4,20 x 2,20 mt", depth: "0,85 mt", image: "/images/catalog1.png" },
  { id: 6, category: "Riñón", name: "Riñón M (Versión 2)", size: "5,50 x 2,60 mt", depth: "1 mt a 1,50 mt", image: "/images/catalog2.png" },
  { id: 7, category: "Riñón", name: "Riñón M (Piriwin)", size: "5,50 x 2,80 mt", depth: "0,90 mt a 1,50 mt", image: "/images/catalog1.png" },
  { id: 8, category: "Griega", name: "Griega M (Piriwin)", size: "6,20 x 3,10 mt", depth: "1 mt a 1,60 mt", image: "/images/catalog2.png" },
  { id: 9, category: "Griega", name: "Griega L (Piriwin)", size: "8,20 x 3,10 mt", depth: "1 mt a 1,80 mt", image: "/images/catalog1.png" },
  { id: 10, category: "Venecia", name: "Venecia S (Versión 2)", size: "4 x 2,50 mt", depth: "1,20 mt", image: "/images/catalog2.png" },
  { id: 11, category: "Venecia", name: "Venecia S", size: "4,80 x 2,60 mt", depth: "1 mt a 1,35 mt", image: "/images/catalog1.png" },
  { id: 12, category: "Venecia", name: "Venecia M", size: "5,50 x 3 mt", depth: "1,10 mt a 1,60 mt", image: "/images/catalog2.png" },
  { id: 13, category: "Rectangular", name: "Rectangular", size: "5,30 x 3,20 mt", depth: "1 mt a 1,60 mt", image: "/images/catalog1.png" },
  { id: 14, category: "Americana", name: "Americana", size: "5,50 x 2,50 mt", depth: "1 mt a 1,50 mt", image: "/images/catalog2.png" },
  { id: 15, category: "Americana", name: "Americana Compacta", size: "4,40 x 2,90 mt", depth: "1 mt a 1,40 mt", image: "/images/catalog1.png" },
  { id: 16, category: "Americana", name: "Americana Grande", size: "6,40 x 3,30 mt", depth: "1,05 mt a 1,60 mt", image: "/images/catalog2.png" },
  { id: 17, category: "Americana", name: "Americana Mediana", size: "5,20 x 3 mt", depth: "1,10 mt a 1,50 mt", image: "/images/catalog1.png" },
  { id: 18, category: "Americana", name: "Americana L", size: "6,40 x 3,30 mt", depth: "1,10 mt a 1,60 mt", image: "/images/catalog2.png" },
];

const categories = ["Todos", "Romana", "Riñón", "Griega", "Venecia", "Americana", "Rectangular"];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredModels = activeCategory === "Todos" 
    ? allModels 
    : allModels.filter(model => model.category === activeCategory);

  return (
    <section id="modelos" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-3">Catálogo Piriwin</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Nuestros Modelos</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Encuentra la piscina perfecta para tu espacio. Ofrecemos una amplia variedad de tamaños, formas y profundidades.
            </p>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-brand-600 text-white shadow-lg shadow-brand-500/30"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid of Models */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredModels.map((model) => (
              <motion.div
                layout
                key={model.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-600 dark:text-brand-400">
                    {model.category}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    {model.name}
                  </h4>
                  
                  <div className="space-y-3 mb-6 flex-1">
                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                      <div className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-slate-800 flex items-center justify-center text-brand-500 shrink-0">
                        <Ruler size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Dimensiones</p>
                        <p className="font-semibold">{model.size}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                      <div className="w-10 h-10 rounded-lg bg-cyan-50 dark:bg-slate-800 flex items-center justify-center text-cyan-500 shrink-0">
                        <Droplets size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Profundidad</p>
                        <p className="font-semibold">{model.depth}</p>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href={`https://wa.me/56912345678?text=Hola, me gustaría cotizar el modelo ${model.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-slate-50 dark:bg-slate-800 hover:bg-brand-600 dark:hover:bg-brand-500 text-slate-900 dark:text-white hover:text-white py-3 rounded-xl transition-colors font-semibold group/btn"
                  >
                    Cotizar Modelo
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
