"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Instagram, Menu, X } from "lucide-react"

const navLinks = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#calculadora", label: "Presupuesto" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
]

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 5.1-1.81V9.4a6.84 6.84 0 0 0-5.1 2.81v4.3a6.83 6.83 0 0 0 12.19 4.72v-4.28a3.52 3.52 0 0 0 2.04-.66z" />
    </svg>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a className="group flex items-center gap-3" href="/">
            <Image src="/logo.jpg" alt="NVR Obraforma Logo" width={48} height={48} className="h-12 w-12" />
            <span className="hidden sm:block">
              <span className="block text-lg font-serif tracking-tight text-foreground">NVR</span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Obraforma</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social + Hamburger */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/nvr_obraforma/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://www.tiktok.com/@nvr.obraforma"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
            <button
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-background z-40 transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-serif text-foreground hover:text-accent transition-colors"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/nvr_obraforma/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground mt-8"
          >
            <Instagram className="h-6 w-6" aria-hidden="true" />
            <span className="text-sm uppercase tracking-widest">Instagram</span>
          </a>
          <a
            href="https://www.tiktok.com/@nvr.obraforma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground"
          >
            <TikTokIcon className="h-5 w-5" />
            <span className="text-sm uppercase tracking-widest">TikTok</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
