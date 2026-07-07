"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Galería", href: "#galeria" },
    { name: "Experiencias", href: "#experiencias" },
  ];

  const textColor = isScrolled ? "text-emerald" : "text-white";
  const borderColor = isScrolled ? "border-emerald/20" : "border-white/20";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${
        isScrolled 
          ? "bg-cream/95 backdrop-blur-md py-4 shadow-[0_2px_20px_rgba(0,0,0,0,02)]" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex justify-between items-center">
        
        {/* 1. LOGO - Refinado y con tracking elegante */}
        <div className="flex-1 flex justify-start">
          <Link 
            href="/" 
            className={`text-xl md:text-2xl font-serif tracking-[0.3em] uppercase transition-colors duration-500 ${textColor}`}
          >
            Kairós
          </Link>
        </div>

        {/* 2. MENU CENTRAL - Estilo Editorial */}
        <div className="hidden md:flex flex-[2] justify-center items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-xs tracking-[0.25em] uppercase font-sans font-light hover:text-sage transition-all duration-300 relative group ${textColor}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-sage transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* 3. CTA - Minimalista y liviano */}
        <div className="hidden md:flex flex-1 justify-end">
          <Link
            href="#contacto"
            className={`px-8 py-2.5 border-[0.5px] text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:bg-emerald hover:text-white hover:border-emerald ${textColor} ${borderColor}`}
          >
            Consultá tu fecha
          </Link>
        </div>

        {/* Mobile Toggle - Más sutil */}
        <button
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`block w-6 h-[1px] transition-all duration-500 ${isScrolled ? "bg-emerald" : "bg-white"}`}></span>
          <span className={`block w-4 h-[1px] ml-auto transition-all duration-500 ${isScrolled ? "bg-emerald" : "bg-white"}`}></span>
        </button>
      </div>

      {/* Mobile Menu - Manteniendo coherencia */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-screen bg-emerald z-[60] flex flex-col items-center justify-center space-y-10"
          >
            <button
              className="absolute top-10 right-10 text-white/50 hover:text-white text-xl font-light tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CERRAR
            </button>
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif text-white tracking-[0.2em] uppercase hover:text-nude transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-12 h-[1px] bg-white/20 my-4"></div>
              <Link
                href="#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-10 py-4 border border-white/30 text-white text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-emerald transition-all"
              >
                Consultá tu fecha
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
