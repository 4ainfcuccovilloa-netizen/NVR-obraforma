"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#portfolio", label: "Portafolio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className={cn(
              "text-xl font-semibold tracking-tight transition-colors",
              isScrolled ? "text-foreground" : "text-foreground"
            )}>
              NVR
            </span>
            <span className={cn(
              "text-xs uppercase tracking-[0.2em] text-muted-foreground"
            )}>
              Obraforma
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground",
                  isScrolled ? "text-muted-foreground" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+34626724630" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>626 724 630</span>
            </a>
            <Button asChild>
              <Link href="#contacto">Solicitar Presupuesto</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-foreground hover:text-muted-foreground transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t mt-2">
              <Button asChild className="w-full">
                <Link href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
                  Solicitar Presupuesto
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
