"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full"
          >
            <Image
              src="/Imagen Nosotros.png"
              alt="Ambiente Kairós"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-emerald hidden lg:block -z-10" />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <div className="text-sage text-4xl">✦</div>
            <h2 className="text-4xl md:text-5xl font-serif text-emerald leading-tight">
              Donde la sofisticación <br /> se encuentra con la emoción.
            </h2>
            <p className="text-lg text-emerald/80 leading-relaxed font-sans font-light">
              En Kairós, entendemos que cada celebración es un hito irrepetible. 
              Ubicado en el corazón de Monte Grande, nuestro salón combina arquitectura 
              moderna con una calidez excepcional para crear el escenario de tus sueños.
            </p>
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-nude/30">
              <div>
                <h4 className="text-nude tracking-widest uppercase text-xs mb-2">Capacidad</h4>
                <p className="text-emerald text-xl font-serif">Hasta 80 personas</p>
              </div>
              <div>
                <h4 className="text-nude tracking-widest uppercase text-xs mb-2">Atencion</h4>
                <p className="text-emerald text-xl font-serif">Atención cercana y personalizada</p>
              </div>
            </div>
            <p className="text-emerald/70 font-sans italic">
              "Nuestra misión es transformar instantes en recuerdos eternos."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
