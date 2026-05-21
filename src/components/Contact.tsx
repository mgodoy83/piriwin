"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-50 dark:bg-brand-950/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 z-0"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-3">Contacto</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Comienza tu proyecto hoy</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">
              Estamos listos para asesorarte. Escríbenos y un experto de nuestro equipo se pondrá en contacto contigo a la brevedad.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-slate-800 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-lg mb-1">Teléfono</h4>
                  <p className="text-slate-600 dark:text-slate-400">+56 9 1234 5678</p>
                  <p className="text-slate-600 dark:text-slate-400">+56 2 2345 6789</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-slate-800 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-lg mb-1">Correo Electrónico</h4>
                  <p className="text-slate-600 dark:text-slate-400">contacto@piriwin.cl</p>
                  <p className="text-slate-600 dark:text-slate-400">cotizaciones@piriwin.cl</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-slate-800 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-lg mb-1">Ubicación</h4>
                  <p className="text-slate-600 dark:text-slate-400">Av. Las Condes 12345, Oficina 402.</p>
                  <p className="text-slate-600 dark:text-slate-400">Santiago, Chile.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800"
          >
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Envíanos un mensaje</h4>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Nombre completo</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Teléfono</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                    placeholder="+56 9 XXXX XXXX"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Correo electrónico</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Tipo de Proyecto</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all">
                  <option>Instalación de Piscina Nueva</option>
                  <option>Renovación / Revestimiento</option>
                  <option>Bordes de Piscina</option>
                  <option>Mantención</option>
                  <option>Otro Proyecto</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Mensaje</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  placeholder="Cuéntanos más sobre tu proyecto..."
                ></textarea>
              </div>
              
              <button 
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-brand-500/40 font-semibold text-lg"
              >
                <Send size={20} />
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center group">
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75 duration-1000"></div>
        <a 
          href="https://wa.me/56912345678" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
        <span className="absolute right-full mr-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-slate-100 dark:border-slate-700 pointer-events-none">
          ¡Escríbenos por WhatsApp!
        </span>
      </div>
    </section>
  );
}
