import type { Metadata } from "next";
import { Cormorant_Garamond, Josefin_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cormorant",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: "Kairós Eventos | Salón de Eventos Premium — Monte Grande, Buenos Aires",
  description:
    "Casamientos, fiestas de 15, corporativos y eventos exclusivos en Monte Grande, Zona Sur Buenos Aires. Capacidad para 350 personas. Atención personalizada.",
  keywords: [
    "salón de eventos monte grande",
    "casamientos zona sur buenos aires",
    "eventos premium buenos aires",
  ],
  openGraph: {
    title: "Kairós Eventos | Salón de Eventos Premium",
    description: "El momento perfecto es ahora. Eventos exclusivos en Monte Grande.",
    url: "https://kairoseventos.com.ar",
    siteName: "Kairós Eventos",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${cormorant.variable} ${josefin.variable} font-sans bg-cream antialiased`}>
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
