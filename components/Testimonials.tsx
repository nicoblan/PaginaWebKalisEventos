"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Fue la noche más increíble de nuestras vidas. El equipo de Kairós superó todas nuestras expectativas.",
    author: "MARÍA & JUAN",
    event: "Casamiento",
  },
  {
    quote: "La elegancia del salón y la calidez del personal hicieron que mis 15 fueran realmente mágicos.",
    author: "SOFÍA LÓPEZ",
    event: "Cumpleaños de 15",
  },
  {
    quote: "Excelente nivel de servicio para nuestro evento corporativo. Impecable coordinación y gastronomía.",
    author: "TECH SOLUTIONS",
    event: "Evento Corporativo",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif text-emerald mb-4">Lo que dicen nuestros clientes</h2>
          <div className="text-sage text-2xl">✦</div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="border-t-2 border-nude pt-8 flex flex-col justify-between"
            >
              <p className="text-xl font-serif text-emerald italic leading-relaxed mb-8">
                "{t.quote}"
              </p>
              <div>
                <p className="text-xs tracking-[0.3em] text-sage uppercase font-sans mb-1">
                  {t.author}
                </p>
                <p className="text-[10px] tracking-widest text-emerald/40 uppercase">
                  {t.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
