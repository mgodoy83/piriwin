"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Servicios", href: "#servicios" },
    { name: "Modelos", href: "#modelos" },
    { name: "Proyectos", href: "#galeria" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`relative bg-white rounded-2xl shadow-md overflow-hidden flex items-center justify-center transition-all duration-300 ${
              isScrolled ? "w-40 h-12" : "w-56 h-16"
            }`}>
              <Image
                src="/logo/Logo.png"
                alt="Piriwin Logo"
                fill
                className="object-contain scale-[1.8] md:scale-[2] translate-y-1"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                  isScrolled ? "text-slate-800 dark:text-slate-200" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-5 py-2.5 rounded-full transition-all shadow-lg hover:shadow-brand-500/30 font-medium"
            >
              <Phone size={18} />
              <span>Cotizar</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={isScrolled ? "text-slate-800 dark:text-slate-200" : "text-white"}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full glass-card border-t border-slate-200 dark:border-slate-800 shadow-xl py-4 flex flex-col px-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 text-slate-800 dark:text-slate-200 font-medium border-b border-slate-100 dark:border-slate-800"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 flex justify-center items-center gap-2 bg-brand-600 text-white px-5 py-3 rounded-xl font-medium"
          >
            <Phone size={18} />
            <span>Cotizar Proyecto</span>
          </a>
        </motion.div>
      )}
    </nav>
  );
}
