"use client"

import { motion } from "framer-motion"
import { MapPin, CheckCircle } from "lucide-react"

const serviceAreas = [
  "Barcelona ciudad",
  "Baix Llobregat",
  "Valles Occidental",
  "Anoia",
  "Alt Penedes",
]

export function MapSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto bg-card border rounded-2xl p-8 flex items-center justify-center">
              {/* Simple Map Representation */}
              <div className="relative w-full h-full">
                {/* Barcelona Area Representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border-2 border-dashed border-muted-foreground/30" />
                  <div className="w-48 h-48 rounded-full border-2 border-dashed border-muted-foreground/20 absolute" />
                  <div className="w-32 h-32 rounded-full bg-foreground/5 absolute" />
                </div>
                
                {/* Center Pin - Collbato */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-foreground animate-ping absolute" />
                    <div className="w-4 h-4 rounded-full bg-foreground relative z-10" />
                  </div>
                </div>

                {/* Barcelona Label */}
                <div className="absolute top-1/4 right-1/4 text-xs font-medium text-muted-foreground">
                  Barcelona
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-serif mb-4">
              Sede en Collbato
            </h2>
            <p className="text-muted-foreground mb-8">
              Prestamos servicio en toda el area metropolitana de Barcelona y comarcas limitrofes.
            </p>

            {/* Service Areas */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-foreground" />
                  <span className="text-sm">{area}</span>
                </div>
              ))}
            </div>

            {/* Location Card */}
            <div className="bg-card border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Sede principal</p>
                  <p className="font-semibold">Collbato, 08293</p>
                  <p className="text-muted-foreground">Barcelona, Espana</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm text-muted-foreground">Disponible para nuevos proyectos</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
