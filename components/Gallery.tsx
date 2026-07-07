"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const mainImages = [
  { src: "/Imagen Galeria 1.jpg", alt: "Decoración elegante de salón en Kairós Eventos" },
  { src: "/Imagen Galeria 2.jpg", alt: "Mesa principal ambientada para una celebración premium" },
  { src: "/Imagen galeria 3.jpg", alt: "Iluminación y detalles exclusivos en eventos Kairós" },
  { src: "/Imagen Galeria 4.jpg", alt: "Espacio amplio para fiestas y eventos sociales" },
  { src: "/Imagen Galeria.jpg", alt: "Entrada del salón de eventos Kairós en Monte Grande" },
  { src: "/Imagen principal.png", alt: "Vista principal del salón Kairós Eventos" },
];

const bottomImages = [
  { src: "/Imagen galeria 5.jpeg", alt: "Celebración íntima con estilo en Kairós Eventos" },
  { src: "/Imagen galeria 6.jpeg", alt: "Ambiente sofisticado para eventos y reuniones" },
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-emerald mb-4">Galería de Momentos</h2>
          <p className="text-sage tracking-widest uppercase text-xs">Visualizá tu evento ideal</p>
        </div>

        {/* Main Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 mb-4">
          {mainImages.map((image, index) => (
            <GalleryImage key={image.src} image={image} index={index} />
          ))}
        </div>

        {/* Bottom Side-by-Side Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {bottomImages.map((image, index) => (
            <GalleryImage key={image.src} image={image} index={mainImages.length + index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const GalleryImage = ({ image, index }: { image: { src: string; alt: string }; index: number }) => {
  const [error, setError] = React.useState(false);

  if (error) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative overflow-hidden group cursor-pointer break-inside-avoid"
    >
      <div className="aspect-[3/4] relative w-full overflow-hidden bg-emerald/5">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          onError={() => setError(true)}
        />
      </div>
      <div className="absolute inset-0 bg-emerald/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <span className="text-white font-serif text-2xl tracking-widest">✦</span>
      </div>
    </motion.div>
  );
};

export default Gallery;
