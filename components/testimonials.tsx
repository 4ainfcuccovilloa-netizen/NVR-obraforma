"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "NVR Obraforma transformo completamente nuestro espacio. Profesionales, puntuales y con un acabado impecable. Recomendacion 100%.",
    author: "Maria Garcia",
    company: "Garcia & Asociados",
  },
  {
    quote: "La direccion tecnica fue excelente. Resolvieron cada detalle con precision y profesionalismo. Trabajare con ellos nuevamente.",
    author: "Carlos Lopez",
    company: "Lopez Restauracion",
  },
  {
    quote: "La reforma integral de nuestro local fue perfecta. Respetaron plazos y presupuesto. Equipo altamente recomendado.",
    author: "Ana Martinez",
    company: "Martinez Diseno",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            Lo que dicen nuestros clientes
          </span>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Mas de 200 proyectos completados con satisfaccion de nuestros clientes. Aqui estan sus opiniones reales.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border rounded-2xl p-8"
            >
              <Quote className="w-8 h-8 text-muted-foreground/30 mb-4" />
              
              <p className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
