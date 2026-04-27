"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb, Eye, Users, Award, Shield, FileCheck, Cog, MonitorSmartphone } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Cada medida, cada angulo, cada detalle cuenta. Trabajamos con exactitud milimetrica.",
  },
  {
    icon: Lightbulb,
    title: "Innovacion",
    description: "Incorporamos las ultimas tendencias y tecnologias en construccion sostenible.",
  },
  {
    icon: Eye,
    title: "Transparencia",
    description: "Presupuestos claros, plazos realistas y comunicacion constante durante todo el proceso.",
  },
]

const benefits = [
  { icon: Users, text: "Equipo multidisciplinar de arquitectos e ingenieros" },
  { icon: Award, text: "Materiales de primera calidad certificados" },
  { icon: Shield, text: "Garantia post-entrega de 2 anos" },
  { icon: FileCheck, text: "Cumplimiento estricto de normativas" },
  { icon: Cog, text: "Gestion integral de permisos y licencias" },
  { icon: MonitorSmartphone, text: "Seguimiento digital del proyecto en tiempo real" },
]

const guarantees = [
  { title: "Garantia de 2 anos", subtitle: "En todas nuestras obras con cobertura total" },
  { title: "Responsabilidad Civil", subtitle: "Seguros completos en cada proyecto" },
  { title: "Plazos Garantizados", subtitle: "Cerrados por contrato y respetados" },
]

export function About() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Years Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="bg-foreground text-background rounded-full px-8 py-4 text-center">
            <span className="text-3xl font-semibold">15+</span>
            <span className="block text-xs mt-1 opacity-80">Anos creando espacios excepcionales</span>
          </div>
        </motion.div>

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            Sobre Nosotros
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif mb-4">
            Donde la vision se convierte en realidad
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            En NVR Obraforma creemos que cada espacio cuenta una historia. Con mas de 15 anos de experiencia, hemos perfeccionado el arte de transformar ideas en ambientes que inspiran, funcionan y perduran.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary mb-4">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-secondary/50 rounded-2xl p-8 lg:p-12 mb-16">
          <h3 className="text-xl font-semibold mb-2 text-center">Por que elegirnos</h3>
          <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
            Combinamos experiencia, tecnologia y pasion para ofrecer resultados que superan expectativas.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-background rounded-lg p-4"
              >
                <benefit.icon className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <span className="text-sm">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="grid md:grid-cols-3 gap-6">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border rounded-xl p-6 text-center"
            >
              <h4 className="font-semibold mb-1">{guarantee.title}</h4>
              <p className="text-sm text-muted-foreground">{guarantee.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
