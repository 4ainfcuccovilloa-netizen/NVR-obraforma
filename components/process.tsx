"use client"

import { motion } from "framer-motion"
import { Phone, ClipboardList, FileText, Hammer } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Contacto",
    subtitle: "Respondemos en 24h",
    description: "Nos escribes o llamas. En menos de 24 horas te respondemos para conocer tu proyecto y concretar una visita.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Visita Tecnica",
    subtitle: "Gratuita y sin compromiso",
    description: "Nuestro equipo va a tu espacio, toma medidas, valora el estado actual y escucha en detalle lo que necesitas.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Propuesta",
    subtitle: "Presupuesto detallado",
    description: "Recibes un presupuesto transparente con partidas desglosadas, planos iniciales y calendario de ejecucion.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Obra",
    subtitle: "Llave en mano y con garantia",
    description: "Ejecutamos con nuestro equipo propio. Coordinamos todos los gremios y te entregamos el espacio terminado con garantia de 2 anos.",
    icon: Hammer,
  },
]

export function Process() {
  return (
    <section id="proceso" className="py-24 lg:py-32 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            Nuestro proceso
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif mb-4">
            Que pasa despues de contactarnos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Sin sorpresas. Sabemos que las obras generan incertidumbre, por eso hacemos cada paso predecible y tranquilo.
          </p>
        </div>

        {/* Process Steps - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute top-10 left-[calc(50%+30px)] right-0 h-0.5 bg-border" />
              )}
              
              <div className="bg-card border rounded-2xl p-6 relative">
                {/* Number Badge */}
                <div className="absolute -top-3 left-6 bg-foreground text-background text-xs font-medium px-3 py-1 rounded-full">
                  {step.number}
                </div>
                
                <div className="pt-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <step.icon className="w-5 h-5" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{step.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Steps - Mobile */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border rounded-xl p-5"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-medium">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-0.5">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{step.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
