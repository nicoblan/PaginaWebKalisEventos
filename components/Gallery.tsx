"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const mainImages = [
  "/Imagen Galeria 1.jpg",
  "/Imagen Galeria 2.jpg",
  "/Imagen galeria 3.jpg",
  "/Imagen Galeria 4.jpg",
  "/Imagen Galeria.jpg",
  "/Imagen principal.png",
];

const bottomImages = [
  "/Imagen galeria 5.jpeg",
  "/Imagen galeria 6.jpeg",
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
          {mainImages.map((src, index) => (
            <GalleryImage key={src} src={src} index={index} />
          ))}
        </div>

        {/* Bottom Side-by-Side Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {bottomImages.map((src, index) => (
            <GalleryImage key={src} src={src} index={mainImages.length + index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const GalleryImage = ({ src, index }: { src: string; index: number }) => {
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
          src={src}
          alt={`Evento Kairós ${index + 1}`}
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
