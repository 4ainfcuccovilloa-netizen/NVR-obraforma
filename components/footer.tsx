import Link from "next/link"
import Image from "next/image"
import { Instagram, Phone, Mail, MapPin } from "lucide-react"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 5.1-1.81V9.4a6.84 6.84 0 0 0-5.1 2.81v4.3a6.83 6.83 0 0 0 12.19 4.72v-4.28a3.52 3.52 0 0 0 2.04-.66z" />
    </svg>
  )
}

const navLinks = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#calculadora", label: "Presupuesto" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
]

const serviceLinks = [
  "Reformas de Viviendas",
  "Locales Comerciales",
  "Dirección Técnica",
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image src="/logo.jpg" alt="NVR Obraforma" width={40} height={40} className="h-10 w-10 brightness-0 invert" />
              <span>
                <span className="block text-base font-serif text-background">NVR</span>
                <span className="text-xs uppercase tracking-[0.2em] text-background/50">Obraforma</span>
              </span>
            </Link>
            <p className="text-sm text-background/60 leading-relaxed mb-6 max-w-xs">
              Transformamos espacios con precisión. Más de 15 años creando hogares y locales
              comerciales excepcionales en Barcelona.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/nvr_obraforma/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram de NVR Obraforma"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.tiktok.com/@nvr.obraforma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="TikTok de NVR Obraforma"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-background/50 mb-5">Navegación</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-background/50 mb-5">Servicios</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    href="#servicios"
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-background/50 mb-5">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+34626724630"
                  className="flex items-center gap-3 text-sm text-background/60 hover:text-background transition-colors"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  +34 626 724 630
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@nvrobraforma.com"
                  className="flex items-center gap-3 text-sm text-background/60 hover:text-background transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  info@nvrobraforma.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-background/60">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Collbató, 08293
                  <br />
                  Barcelona, España
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            &copy; {year} NVR Obraforma. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacidad"
              className="text-xs text-background/40 hover:text-background/80 transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/legal"
              className="text-xs text-background/40 hover:text-background/80 transition-colors"
            >
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
