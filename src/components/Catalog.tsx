"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Ruler, ArrowRight } from "lucide-react";

const allModels = [
  { id: 1, name: "Modelo 1", size: "8,0 x 3,0 mt", image: "/Piscinas/1.png" },
  { id: 2, name: "Modelo 2", size: "11,50 x 3,50 mt", image: "/Piscinas/2.png" },
  { id: 3, name: "Modelo 3", size: "6,0 x 3,10 mt", image: "/Piscinas/3.png" },
  { id: 4, name: "Modelo 4", size: "7,0 x 3,40 mt", image: "/Piscinas/4.png" },
  { id: 5, name: "Modelo 5", size: "8,0 x 3,30 mt", image: "/Piscinas/5.png" },
  { id: 6, name: "Modelo 6", size: "9,0 x 3,40 mt", image: "/Piscinas/6.png" },
  { id: 7, name: "Modelo 7", size: "6,30 x 3,30 mt", image: "/Piscinas/7.png" },
  { id: 8, name: "Modelo 8", size: "10,5 x 4,0 mt", image: "/Piscinas/8.png" },
  { id: 9, name: "Modelo 9", size: "4,80 x 2,60 mt", image: "/Piscinas/9.png" },
  { id: 10, name: "Modelo 10", size: "2,5 x 2,5 mt", image: "/Piscinas/10.png" },
  { id: 11, name: "Modelo 11", size: "4,0 x 2,50 mt", image: "/Piscinas/11.png" },
  { id: 12, name: "Modelo 12", size: "5,50 x 3,0 mt", image: "/Piscinas/12.png" },
  { id: 13, name: "Modelo 13", size: "10,5 x 3,5 mt", image: "/Piscinas/13.png" },
  { id: 14, name: "Modelo 14", size: "9,5 x 4,0 mt", image: "/Piscinas/14.png" },
];

export default function Catalog() {
  return (
    <section id="modelos" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-3">Catálogo Piriwin</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Nuestros Modelos</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Explora nuestra exclusiva colección de piscinas. Cada modelo ha sido diseñado pensando en diferentes espacios y necesidades para transformar tu patio.
            </p>
          </motion.div>
        </div>

        {/* Grid of Models */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allModels.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
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
                </div>
                
                <a 
                  href={`https://wa.me/56941913009?text=Hola, me gustaría cotizar el ${model.name} con dimensiones de ${model.size}`}
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
        </div>
      </div>
    </section>
  );
}
