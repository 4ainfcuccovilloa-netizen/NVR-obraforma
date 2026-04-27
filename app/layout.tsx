import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "NVR Obraforma | Reformas Integrales en Barcelona y Collbató | Arquitectos y Construcción",
  description:
    "Empresa de reformas integrales en Barcelona y Collbató. Especialistas en reformas de viviendas, locales comerciales y dirección técnica. +15 años de experiencia. Presupuesto sin compromiso.",
  keywords:
    "reformas integrales Barcelona,reformas Collbató,arquitectos Barcelona,construcción Barcelona,reformas viviendas,locales comerciales Barcelona,dirección técnica",
  openGraph: {
    title: "NVR Obraforma | Reformas Integrales en Barcelona y Collbató",
    description:
      "Empresa de reformas integrales en Barcelona. Especialistas en viviendas, locales comerciales y dirección técnica. Presupuesto sin compromiso.",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "NVR Obraforma | Reformas Integrales en Barcelona y Collbató",
    description:
      "Empresa de reformas integrales en Barcelona. Especialistas en viviendas, locales comerciales y dirección técnica. Presupuesto sin compromiso.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth bg-background" suppressHydrationWarning>
      <body
        className="bg-background font-sans antialiased"
        style={
          {
            "--font-sans": inter.style.fontFamily,
            "--font-serif": playfairDisplay.style.fontFamily,
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  )
}
