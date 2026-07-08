"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  { src: "/Imagen Galeria 1.jpg", alt: "Decoración elegante de salón en Kairós Eventos" },
  { src: "/Imagen Galeria 2.jpg", alt: "Mesa principal ambientada para una celebración premium" },
  { src: "/Imagen galeria 3.jpg", alt: "Iluminación y detalles exclusivos en eventos Kairós" },
  { src: "/Imagen Galeria 4.jpg", alt: "Espacio amplio para fiestas y eventos sociales" },
  { src: "/Imagen Galeria.jpg", alt: "Entrada del salón de eventos Kairós en Monte Grande" },
  { src: "/Imagen principal.png", alt: "Vista principal del salón Kairós Eventos" },
  { src: "/Imagen galeria 5.jpeg", alt: "Celebración íntima con estilo en Kairós Eventos" },
  { src: "/Imagen galeria 6.jpeg", alt: "Ambiente sofisticado para eventos y reuniones" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = React.useState<null | (typeof galleryImages)[number]>(null);

  return (
    <section id="galeria" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-emerald mb-4">Galería de Momentos</h2>
          <p className="text-sage tracking-widest uppercase text-xs">Visualizá tu evento ideal</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <GalleryImage
              key={image.src}
              image={image}
              index={index}
              onOpen={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg font-semibold text-emerald shadow-lg transition hover:bg-white"
                aria-label="Cerrar galería"
              >
                ×
              </button>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-cream/10">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const GalleryImage = ({
  image,
  index,
  onOpen,
}: {
  image: { src: string; alt: string };
  index: number;
  onOpen: () => void;
}) => {
  const [error, setError] = React.useState(false);

  if (error) return null;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.03, opacity: 0.95 }}
      onClick={onOpen}
      className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-white/70 bg-emerald/5 shadow-sm"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        onError={() => setError(true)}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-emerald/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="text-white font-serif text-xl tracking-widest">✦</span>
      </div>
    </motion.button>
  );
};

export default Gallery;
