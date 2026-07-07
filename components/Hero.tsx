"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Imagen principal.png"
        alt="Kairós Eventos Luxury Hall"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 flex flex-col items-center"
        >
          <div className="flex items-center space-x-2 text-white/80 mb-4">
             <span className="h-[1px] w-12 bg-white/40"></span>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-nude">
               <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
             </svg>
             <span className="h-[1px] w-12 bg-white/40"></span>
          </div>
          <h2 className="text-white text-lg tracking-[0.5em] uppercase font-sans mb-6">
            Experiencias Exclusivas
          </h2>
          <h1 className="text-white text-6xl md:text-8xl font-serif mb-8 leading-tight">
            El momento perfecto <br /> <span className="italic">es ahora.</span>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <a
              href="#contacto"
              className="bg-transparent border border-white text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-emerald transition-all duration-500"
            >
              Reservá tu experiencia
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};

export default Hero;
