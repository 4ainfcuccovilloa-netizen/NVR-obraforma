import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
})

export const metadata: Metadata = {
  title: "NVR Obraforma | Reformas Integrales en Barcelona y Collbato | Arquitectos y Construccion",
  description: "Reformas integrales, locales comerciales y direccion tecnica en Barcelona y Collbato. Mas de 15 anos de experiencia transformando espacios con precision y excelencia.",
  keywords: ["reformas", "Barcelona", "Collbato", "construccion", "arquitectura", "reformas integrales", "locales comerciales"],
  authors: [{ name: "NVR Obraforma" }],
  openGraph: {
    title: "NVR Obraforma | Reformas Integrales en Barcelona",
    description: "Transformamos espacios con precision. Reformas integrales, locales comerciales y direccion tecnica.",
    type: "website",
    locale: "es_ES",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a1a",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
