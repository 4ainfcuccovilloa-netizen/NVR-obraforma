"use client"

import { motion } from "framer-motion"
import { Home, Store, ClipboardCheck, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    number: "01",
    title: "Reformas de Viviendas",
    description: "Transformacion integral de espacios residenciales. Desde la concepcion hasta la entrega, cuidamos cada detalle para crear hogares que inspiran.",
    features: ["Diseno personalizado", "Materiales premium", "Acabados de lujo"],
    icon: Home,
  },
  {
    number: "02",
    title: "Locales Comerciales",
    description: "Espacios comerciales que potencian tu marca. Creamos ambientes funcionales que maximizan el impacto visual y la experiencia del cliente.",
    features: ["Identidad de marca", "Optimizacion de espacios", "Normativas comerciales"],
    icon: Store,
  },
  {
    number: "03",
    title: "Direccion Tecnica",
    description: "Supervision experta de principio a fin. Garantizamos calidad, cumplimiento normativo y coordinacion perfecta de todos los gremios.",
    features: ["Control de calidad", "Gestion integral", "Certificaciones"],
    icon: ClipboardCheck,
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            Servicios
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif mb-4">
            Soluciones integrales para cada proyecto
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos un servicio completo que abarca desde el diseno inicial hasta la entrega final, con atencion obsesiva al detalle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card rounded-2xl p-8 border hover:shadow-lg transition-all duration-300"
            >
              {/* Number */}
              <span className="text-5xl font-serif text-muted-foreground/20 block mb-4">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link 
                href="#contacto"
                className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
              >
                Consultar
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
