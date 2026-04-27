import Link from "next/link"
import { Instagram, Facebook, MessageCircle, Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { href: "#portfolio", label: "Portafolio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Sobre Nosotros" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
]

const services = [
  { href: "#servicios", label: "Reformas de Viviendas" },
  { href: "#servicios", label: "Locales Comerciales" },
  { href: "#servicios", label: "Direccion Tecnica" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-semibold tracking-tight">NVR</span>
              <span className="text-xs uppercase tracking-[0.2em] opacity-60 ml-2">
                Obraforma
              </span>
            </Link>
            <p className="text-sm opacity-70 mb-6 leading-relaxed">
              Transformamos espacios con precision. Mas de 15 anos creando hogares y locales comerciales excepcionales en Barcelona.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/34626724630" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces rapidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link 
                    href={service.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+34626724630"
                  className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Phone className="w-4 h-4" />
                  +34 626 724 630
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@nvrobraforma.com"
                  className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Mail className="w-4 h-4" />
                  info@nvrobraforma.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Collbato, 08293<br />Barcelona, Espana</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-60">
              &copy; {currentYear} NVR Obraforma. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="/privacidad" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                Politica de Privacidad
              </Link>
              <Link href="/legal" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                Aviso Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
