"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, MapPin, Clock, MessageCircle, CheckCircle, Shield, Send, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const contactInfo = [
  { icon: Phone, label: "Telefono", value: "+34 626 724 630", href: "tel:+34626724630" },
  { icon: MapPin, label: "Ubicacion", value: "Collbato, 08293, Barcelona" },
  { icon: Clock, label: "Horario", value: "Lunes - Viernes: 07:30h - 18:00h\nSabado: 07:30h - 14:00h\nDomingo: Cerrado" },
]

const benefits = [
  "Consultar disponibilidad por WhatsApp",
  "Visita tecnica gratuita y sin compromiso",
  "Respuesta garantizada en menos de 24/48 horas",
  "Cumplimiento estricto de la LSSI y Privacidad",
]

const projectTypes = [
  { value: "", label: "Seleccionar..." },
  { value: "residencial", label: "Reforma residencial" },
  { value: "local", label: "Local comercial" },
  { value: "direccion", label: "Direccion tecnica" },
  { value: "otro", label: "Otro" },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            Contacto
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif mb-4">
            Hablemos de tu proyecto
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cada gran proyecto comienza con una conversacion. Cuentanos tu vision y juntos la haremos realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-medium hover:underline whitespace-pre-line">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="bg-secondary/50 rounded-xl p-6">
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-foreground flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Siguenos</p>
              <div className="flex gap-3">
                <Link 
                  href="https://instagram.com" 
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link 
                  href="https://facebook.com" 
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <a 
                  href="https://wa.me/34626724630"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border rounded-2xl p-6 lg:p-8">
              <h3 className="text-lg font-semibold mb-6">Solicitar presupuesto</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-foreground/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Mensaje enviado</h4>
                  <p className="text-muted-foreground text-sm">
                    Te responderemos en menos de 24 horas. Gracias por contactarnos.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Nombre <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                      Telefono
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      placeholder="+34 600 000 000"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="text-sm font-medium mb-2 block">
                      Tipo de proyecto
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    >
                      {projectTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                      placeholder="Cuentanos sobre tu proyecto..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1.5">
                    <Shield className="w-3 h-3" />
                    Tus datos estan protegidos segun la LOPD
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
