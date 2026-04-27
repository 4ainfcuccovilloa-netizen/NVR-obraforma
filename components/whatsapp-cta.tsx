"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Clock, CalendarDays, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const timeSlots = [
  { id: "morning", label: "Mananas (9h - 13h)" },
  { id: "midday", label: "Mediodia (13h - 15h)" },
  { id: "afternoon", label: "Tardes (16h - 18h)" },
]

export function WhatsAppCTA() {
  const [selectedSlot, setSelectedSlot] = useState("")

  const handleWhatsAppClick = () => {
    const message = selectedSlot 
      ? `Hola, me gustaria reservar una llamada de 15 minutos. Mi preferencia horaria es: ${timeSlots.find(s => s.id === selectedSlot)?.label}.`
      : `Hola, me gustaria reservar una llamada de 15 minutos para hablar sobre mi proyecto.`
    
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/34626724630?text=${encodedMessage}`, "_blank")
  }

  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] opacity-60 mb-4 block">
              Sin esperar
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif mb-4">
              Reserva una llamada de 15 minutos
            </h2>
            <p className="opacity-70 max-w-xl mx-auto">
              Elige el horario que mejor te venga y nosotros te llamamos. Sin formularios infinitos, sin esperar dias. Una conversacion rapida para saber si podemos ayudarte.
            </p>
          </div>

          {/* Benefits */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-4 mb-10"
          >
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Clock className="w-5 h-5 opacity-60" />
              <span className="text-sm">Solo 15 minutos, sin compromiso</span>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Phone className="w-5 h-5 opacity-60" />
              <span className="text-sm">Te llamamos nosotros a la hora acordada</span>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <CalendarDays className="w-5 h-5 opacity-60" />
              <span className="text-sm">Disponibilidad de lunes a sabado</span>
            </div>
          </motion.div>

          {/* Time Slot Selection */}
          <div className="bg-background/10 rounded-2xl p-6 lg:p-8">
            <p className="text-center mb-6 text-sm opacity-80">
              Elige tu franja horaria preferida
            </p>
            
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              {timeSlots.map((slot) => (
                <button
                  key={slot.id}
                  onClick={() => setSelectedSlot(slot.id)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-all",
                    selectedSlot === slot.id
                      ? "bg-background text-foreground"
                      : "bg-background/10 hover:bg-background/20"
                  )}
                >
                  {slot.label}
                </button>
              ))}
            </div>

            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Reservar via WhatsApp
            </Button>

            <p className="text-center text-xs opacity-50 mt-4">
              Al hacer clic se abrira WhatsApp con el mensaje prellenado. Confirmamos disponibilidad en minutos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
