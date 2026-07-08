import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-emerald text-white/70 py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="text-3xl font-serif tracking-[0.3em] text-white mb-8">
            KAIRÓS EVENTOS
          </Link>
          
          <div className="flex space-x-8 mb-12">
            <a 
              href="https://www.instagram.com/kairos.eventos.mg?igsh=MW1vaXM5YXF1MXZuaA==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-nude transition-colors flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="text-xs uppercase tracking-widest font-sans">Instagram</span>
            </a>
            <a 
              href="https://www.tiktok.com/@kairos.eventos.mg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-nude transition-colors flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.5 2h3.2c.3 1.1 1.1 2 2.2 2.4v3.2c-1.3-.1-2.5-.5-3.6-1.2v7.2c0 3.1-2.5 5.6-5.6 5.6S4.7 16.7 4.7 13.6 7.2 8 10.3 8c.3 0 .6 0 .9.1v3.3c-.3-.1-.6-.1-.9-.1-1.4 0-2.6 1.2-2.6 2.6s1.2 2.6 2.6 2.6c1.4 0 2.6-1.2 2.6-2.6V2z" />
              </svg>
              <span className="text-xs uppercase tracking-widest font-sans">TikTok</span>
            </a>
          </div>

          <div className="w-full max-w-4xl grid md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
             <div>
               <h5 className="text-white text-xs uppercase tracking-widest mb-4">Ubicación</h5>
               <p className="text-xs font-light">Julio Argentino Roca 1122<br />Monte Grande, Buenos Aires</p>
             </div>
             <div>
               <h5 className="text-white text-xs uppercase tracking-widest mb-4">Contacto</h5>
               <p className="text-xs font-light">Kairoseventos29@gmail.com<br />+54 9 11 3670 1175</p>
             </div>
             <div>
               <h5 className="text-white text-xs uppercase tracking-widest mb-4">Horarios</h5>
               <p className="text-xs font-light">Trabajamos con visitas programadas para brindarte una mejor experiencia. Contactanos para coordinar tu cita.</p>
             </div>
          </div>

          <div className="mt-20 flex flex-col items-center space-y-4">
            <div className="text-nude text-lg">✦</div>
            <p className="text-[10px] uppercase tracking-[0.4em] font-sans">
              © {new Date().getFullYear()} Kairós Eventos — Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
