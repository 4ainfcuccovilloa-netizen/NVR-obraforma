"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "150+", label: "Proyectos Finalizados" },
  { value: "10+", label: "Anos de Experiencia" },
  { value: "100%", label: "Clientes Satisfechos" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Arquitectura y Construccion
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] mb-6">
              Transformamos
              <br />
              <span className="text-muted-foreground">espacios con</span>
              <br />
              precision
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Reformas integrales, locales comerciales y direccion tecnica. Cada proyecto refleja nuestra pasion por el detalle y la excelencia.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group">
                <Link href="#contacto">
                  Solicitar Presupuesto
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#portfolio">Ver Proyectos</Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="bg-card border rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl lg:text-4xl font-semibold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground leading-tight">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link 
          href="#portfolio"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
