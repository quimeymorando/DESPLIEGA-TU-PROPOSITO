import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Despliega tu Propósito | Entrenamiento Gratuito de 3 Días",
  description: "Descubre el 'Mapa de Ruta' para activar tu Misión Divina y dejar de postergar tu vida en solo 3 días.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans text-celestial-deep bg-celestial-deep`}
      >
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
