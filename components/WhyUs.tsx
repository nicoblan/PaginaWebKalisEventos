"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Atención personalizada",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Espacios únicos",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Cocina de autor",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Experiencias memorables",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
      </svg>
    ),
  },
];

const WhyUs = () => {
  return (
    <section id="experiencias" className="py-24 lg:py-32 bg-emerald text-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Cabecera Centralizada */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-nude font-sans tracking-[0.3em] uppercase text-xs mb-6"
          >
            La diferencia está en los detalles
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif leading-tight"
          >
            ¿Por qué elegir <span className="italic">Kairós?</span>
          </motion.h2>
          <div className="w-16 h-[1px] bg-nude/30 mt-10"></div>
        </div>

        {/* Grid de Highlights más compacto y centrado */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-nude mb-8 transition-transform duration-500 group-hover:scale-110 flex items-center justify-center h-12">
                {item.icon}
              </div>
              <div className="min-h-[70px] flex items-center justify-center mb-5">
                <h3 className="text-2xl font-serif tracking-wide leading-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-white/70 text-sm md:text-base leading-relaxed font-sans max-w-[240px]">
                Elevamos cada estándar para asegurar que tu única preocupación sea disfrutar.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
