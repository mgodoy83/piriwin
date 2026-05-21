import Image from "next/image";
import { Waves } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="relative bg-white rounded-2xl mb-6 overflow-hidden w-56 h-16 shadow-md flex items-center justify-center">
              <Image 
                src="/logo/Logo.png" 
                alt="Piriwin Logo" 
                fill
                className="object-contain scale-[1.8] md:scale-[2] translate-y-1"
              />
            </div>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              Especialistas en piscinas, bordes y proyectos personalizados con garantía y compromiso. Transformamos tus espacios en lugares increíbles.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>

            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">Inicio</a></li>
              <li><a href="#servicios" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">Nuestros Servicios</a></li>
              <li><a href="#modelos" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">Catálogo de Modelos</a></li>
              <li><a href="#galeria" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">Galería de Proyectos</a></li>
              <li><a href="#contacto" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">Instalación de Piscinas</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">Bordes y Terminaciones</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">Revestimientos Premium</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">Mantención Periódica</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors text-sm">Reparaciones Técnicas</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Atención</h4>
            <ul className="space-y-4">
              <li className="text-slate-400 text-sm">
                <strong className="block text-slate-300 mb-1">Horario Comercial:</strong>
                Lunes a Viernes: 09:00 - 18:00 hrs.<br/>
                Sábados: 09:00 - 14:00 hrs.
              </li>
              <li className="text-slate-400 text-sm">
                <strong className="block text-slate-300 mb-1">Soporte y Garantías:</strong>
                soporte@piriwin.cl
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Piriwin. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>Desarrollado con</span>
            <Waves size={16} className="text-brand-500" />
            <span>por Antigravity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
