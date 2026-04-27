"use client"

import { useState } from "react"
import { Phone, MapPin, Clock, Instagram, Send, Shield, CheckCircle2 } from "lucide-react"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 5.1-1.81V9.4a6.84 6.84 0 0 0-5.1 2.81v4.3a6.83 6.83 0 0 0 12.19 4.72v-4.28a3.52 3.52 0 0 0 2.04-.66z" />
    </svg>
  )
}

const projectTypes = [
  { value: "", label: "Seleccionar tipo de proyecto..." },
  { value: "residencial", label: "Reforma residencial" },
  { value: "local", label: "Local comercial" },
  { value: "direccion", label: "Dirección técnica" },
  { value: "otro", label: "Otro" },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
    privacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    }))
  }

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-accent mb-4 block font-medium">
              Contacto
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6">
              Hablemos de tu proyecto
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cada gran proyecto comienza con una conversación. Cuéntanos tu visión y juntos la
              haremos realidad.
            </p>
          </div>

          {/* Contact details */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-foreground/5 flex items-center justify-center flex-shrink-0">
                <Phone className="h-4 w-4 text-foreground" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-0.5">
                  Teléfono
                </p>
                <a
                  href="tel:+34626724630"
                  className="text-foreground hover:text-accent transition-colors font-medium"
                >
                  +34 626 724 630
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-foreground/5 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-4 w-4 text-foreground" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-0.5">
                  Ubicación
                </p>
                <p className="text-foreground">Collbató, 08293, Barcelona</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-foreground/5 flex items-center justify-center flex-shrink-0">
                <Clock className="h-4 w-4 text-foreground" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-0.5">
                  Horario
                </p>
                <p className="text-foreground text-sm leading-relaxed">
                  Lunes – Viernes: 07:30 – 18:00
                  <br />
                  Sábado: 07:30 – 14:00
                  <br />
                  Domingo: Cerrado
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://www.instagram.com/nvr_obraforma/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
                <span className="hidden sm:inline">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@nvr.obraforma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                <TikTokIcon className="h-5 w-5" />
                <span className="hidden sm:inline">TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-card border border-border p-8 lg:p-12">
          <h3 className="text-2xl font-serif text-foreground mb-8">Solicitar presupuesto</h3>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <CheckCircle2 className="h-16 w-16 text-accent mb-6" aria-hidden="true" />
              <h4 className="text-2xl font-serif text-foreground mb-3">Mensaje recibido</h4>
              <p className="text-muted-foreground max-w-md">
                Te responderemos en menos de 24 horas. Gracias por contactarnos.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Nombre <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground/50"
                  placeholder="Tu nombre completo"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground/50"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Teléfono
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground/50"
                  placeholder="+34 600 000 000"
                />
              </div>

              {/* Project type */}
              <div>
                <label htmlFor="projectType" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Tipo de proyecto
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none transition-colors text-foreground"
                >
                  {projectTypes.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none transition-colors resize-none text-foreground placeholder:text-muted-foreground/50"
                  placeholder="Cuéntanos sobre tu proyecto: espacios, plazos, ideas..."
                />
              </div>

              {/* Privacy */}
              <div className="md:col-span-2 flex items-start gap-3">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  required
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="mt-0.5 h-4 w-4 border-border bg-background accent-foreground"
                />
                <label htmlFor="privacy" className="text-xs text-muted-foreground leading-relaxed">
                  He leído y acepto la{" "}
                  <a href="/privacidad" className="underline hover:text-foreground transition-colors">
                    Política de Privacidad
                  </a>{" "}
                  y autorizo el tratamiento de mis datos personales.
                </label>
              </div>

              {/* Submit */}
              <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm uppercase tracking-widest hover:bg-accent hover:text-accent-foreground disabled:opacity-50 transition-colors duration-300"
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
                <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <Shield className="h-3 w-3" aria-hidden="true" />
                  Tus datos están protegidos según la LOPD
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
