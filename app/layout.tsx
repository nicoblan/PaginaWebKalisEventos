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
  title: {
    default: "Kairós Eventos | Salón de Eventos Premium — Monte Grande, Buenos Aires",
    template: "%s | Kairós Eventos",
  },
  description:
    "Casamientos, fiestas de 15, eventos corporativos y celebraciones exclusivas en Monte Grande, Zona Sur Buenos Aires. Salón premium con atención personalizada.",
  keywords: [
    "salón de eventos monte grande",
    "casamientos zona sur buenos aires",
    "fiestas de 15 monte grande",
    "eventos corporativos buenos aires",
    "salones para eventos premium",
  ],
  authors: [
    { name: "Kairós Eventos", url: "https://kairoseventosmg.com.ar" },
  ],
  creator: "Kairós Eventos",
  metadataBase: new URL("https://kairoseventosmg.com.ar"),
  alternates: {
    canonical: "https://kairoseventosmg.com.ar",
    languages: {
      "es-AR": "https://kairoseventosmg.com.ar",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Kairós Eventos | Salón de Eventos Premium",
    description: "El momento perfecto es ahora. Eventos exclusivos en Monte Grande.",
    url: "https://kairoseventosmg.com.ar/",
    siteName: "Kairós Eventos",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Salón Kairós Eventos en Monte Grande",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kairós Eventos | Salón de Eventos Premium",
    description: "Casamientos, fiestas de 15 y eventos corporativos en Monte Grande, Buenos Aires.",
    creator: "Kairós Eventos",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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
