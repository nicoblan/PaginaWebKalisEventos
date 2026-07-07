"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    fecha: "",
    tipo: "Casamiento",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola Kairos Eventos.

Me gustaría recibir información sobre un evento.

Nombre: ${formData.nombre}
Email: ${formData.email}
Fecha estimada: ${formData.fecha}
Tipo de evento: ${formData.tipo}

Mensaje:
${formData.mensaje}

Espero su respuesta. Muchas gracias.`;
    const whatsappUrl = `https://wa.me/5491136701175?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-emerald mb-8 leading-tight">
              Comencemos a planear <br /> <span className="italic">tu momento.</span>
            </h2>
            <p className="text-emerald/70 font-sans mb-12 max-w-md leading-relaxed">
              Estamos aquí para responder tus dudas y coordinar una visita a nuestro salón.
              Tu evento ideal comienza con una conversación.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-sage text-xs tracking-widest uppercase mb-2">Ubicación</h4>
                <p className="text-emerald font-serif text-xl">Julio Argentino Roca 1122, Monte Grande</p>
              </div>
              <div>
                <h4 className="text-sage text-xs tracking-widest uppercase mb-2">WhatsApp</h4>
                <p className="text-emerald font-serif text-xl">+54 9 11 3670 1175</p>
              </div>
              <div>
                <h4 className="text-sage text-xs tracking-widest uppercase mb-2">Email</h4>
                <p className="text-emerald font-serif text-xl">Kairoseventos29@gmail.com</p>
              </div>
              <div>
                <h4 className="text-sage text-xs tracking-widest uppercase mb-2">Instagram</h4>
                <a 
                  href="https://www.instagram.com/kairos.eventos.mg?igsh=MW1vaXM5YXF1MXZuaA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald font-serif text-xl hover:text-sage transition-colors"
                >
                  @Kairos.eventos.mg
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-cream p-10 lg:p-16"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] tracking-widest uppercase text-emerald/60">Nombre completo</label>
                  <input
                    required
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="bg-transparent border-b border-emerald/20 py-2 focus:border-emerald outline-none transition-colors font-serif text-emerald"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] tracking-widest uppercase text-emerald/60">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-transparent border-b border-emerald/20 py-2 focus:border-emerald outline-none transition-colors font-serif text-emerald"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] tracking-widest uppercase text-emerald/60">Fecha estimada</label>
                  <input
                    required
                    type="date"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    className="bg-transparent border-b border-emerald/20 py-2 focus:border-emerald outline-none transition-colors font-serif text-emerald"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] tracking-widest uppercase text-emerald/60">Tipo de evento</label>
                  <select
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                    className="bg-transparent border-b border-emerald/20 py-2 focus:border-emerald outline-none transition-colors font-serif text-emerald cursor-pointer"
                  >
                    <option value="Casamiento">Casamiento</option>
                    <option value="XV Años">XV Años</option>
                    <option value="Cumpleaños">Cumpleaños</option>
                    <option value="Bautismo">Bautismo</option>
                    <option value="Baby Shower">Baby Shower</option>
                    <option value="Evento Social">Evento Social</option>
                    <option value="Evento Empresarial">Evento Empresarial</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-[10px] tracking-widest uppercase text-emerald/60">Mensaje</label>
                <textarea
                  required
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="bg-transparent border-b border-emerald/20 py-2 focus:border-emerald outline-none transition-colors font-serif text-emerald resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald text-white py-4 px-8 tracking-[0.3em] uppercase text-xs hover:bg-emerald-dark transition-all duration-500 mt-8 font-bold"
              >
                🟢 ENVIAR POR WHATSAPP
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
