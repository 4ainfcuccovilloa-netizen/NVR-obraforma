"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bath, ChefHat, Sofa, Home, Store, ArrowLeft, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const spaceOptions = [
  { id: "bano", label: "Bano", price: "Desde 4500 euros", icon: Bath },
  { id: "cocina", label: "Cocina", price: "Desde 7000 euros", icon: ChefHat },
  { id: "salon", label: "Salon / Comedor", price: "Desde 6000 euros", icon: Sofa },
  { id: "integral", label: "Reforma Integral", price: "Desde 18.000 euros", icon: Home },
  { id: "local", label: "Local Comercial", price: "Desde 12.000 euros", icon: Store },
]

const sizeOptions = [
  { id: "pequeno", label: "Pequeno", description: "Hasta 50m2", multiplier: 1 },
  { id: "mediano", label: "Mediano", description: "50-100m2", multiplier: 1.5 },
  { id: "grande", label: "Grande", description: "Mas de 100m2", multiplier: 2.2 },
]

const qualityOptions = [
  { id: "estandar", label: "Estandar", description: "Materiales de calidad media", multiplier: 1 },
  { id: "premium", label: "Premium", description: "Materiales de alta gama", multiplier: 1.4 },
  { id: "lujo", label: "Lujo", description: "Materiales exclusivos", multiplier: 1.8 },
]

const basePrices: Record<string, number> = {
  bano: 4500,
  cocina: 7000,
  salon: 6000,
  integral: 18000,
  local: 12000,
}

export function Calculator() {
  const [step, setStep] = useState(1)
  const [selectedSpace, setSelectedSpace] = useState("")
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedQuality, setSelectedQuality] = useState("")

  const calculateEstimate = () => {
    if (!selectedSpace || !selectedSize || !selectedQuality) return null
    
    const basePrice = basePrices[selectedSpace]
    const sizeMultiplier = sizeOptions.find(s => s.id === selectedSize)?.multiplier || 1
    const qualityMultiplier = qualityOptions.find(q => q.id === selectedQuality)?.multiplier || 1
    
    const estimate = basePrice * sizeMultiplier * qualityMultiplier
    return Math.round(estimate / 100) * 100
  }

  const estimate = calculateEstimate()

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleReset = () => {
    setStep(1)
    setSelectedSpace("")
    setSelectedSize("")
    setSelectedQuality("")
  }

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            Herramienta gratuita
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif mb-4">
            Calcula tu presupuesto estimado
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tres preguntas simples para orientarte antes de contactarnos. Sin compromiso.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border rounded-2xl p-6 lg:p-10">
            {/* Progress Steps */}
            <div className="flex items-center justify-center gap-4 mb-10">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div 
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                      s === step 
                        ? "bg-foreground text-background" 
                        : s < step 
                          ? "bg-foreground/20 text-foreground"
                          : "bg-secondary text-muted-foreground"
                    )}
                  >
                    {s < step ? <Check className="w-4 h-4" /> : s}
                  </div>
                  {s < 3 && (
                    <div className={cn(
                      "w-12 h-0.5 hidden sm:block",
                      s < step ? "bg-foreground/20" : "bg-secondary"
                    )} />
                  )}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {/* Step 1: Space Selection */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-medium mb-6 text-center">
                    Paso 1 - Que espacio quieres reformar?
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {spaceOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSelectedSpace(option.id)}
                        className={cn(
                          "flex flex-col items-start p-4 rounded-xl border transition-all text-left",
                          selectedSpace === option.id
                            ? "border-foreground bg-foreground/5"
                            : "border-border hover:border-foreground/30"
                        )}
                      >
                        <option.icon className="w-5 h-5 mb-2 text-muted-foreground" />
                        <span className="font-medium">{option.label}</span>
                        <span className="text-xs text-muted-foreground">{option.price}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Size Selection */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-medium mb-6 text-center">
                    Paso 2 - Que tamano tiene el espacio?
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {sizeOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSelectedSize(option.id)}
                        className={cn(
                          "flex flex-col items-center p-6 rounded-xl border transition-all",
                          selectedSize === option.id
                            ? "border-foreground bg-foreground/5"
                            : "border-border hover:border-foreground/30"
                        )}
                      >
                        <span className="font-medium mb-1">{option.label}</span>
                        <span className="text-xs text-muted-foreground">{option.description}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Quality Selection */}
              {step === 3 && !estimate && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-medium mb-6 text-center">
                    Paso 3 - Que nivel de acabados buscas?
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {qualityOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setSelectedQuality(option.id)}
                        className={cn(
                          "flex flex-col items-center p-6 rounded-xl border transition-all",
                          selectedQuality === option.id
                            ? "border-foreground bg-foreground/5"
                            : "border-border hover:border-foreground/30"
                        )}
                      >
                        <span className="font-medium mb-1">{option.label}</span>
                        <span className="text-xs text-muted-foreground text-center">{option.description}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Result */}
              {step === 3 && estimate && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <h3 className="text-lg font-medium mb-2">Tu presupuesto estimado</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Basado en tus selecciones, el precio aproximado seria:
                  </p>
                  
                  <div className="bg-foreground text-background rounded-2xl p-8 mb-6">
                    <span className="text-4xl lg:text-5xl font-semibold">
                      {estimate.toLocaleString("es-ES")} euros
                    </span>
                    <p className="text-sm opacity-70 mt-2">
                      *Precio orientativo. El presupuesto final dependera de la visita tecnica.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild size="lg">
                      <a href="#contacto">Solicitar Presupuesto Real</a>
                    </Button>
                    <Button variant="outline" size="lg" onClick={handleReset}>
                      Calcular de nuevo
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            {!(step === 3 && estimate) && (
              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button 
                  variant="ghost" 
                  onClick={handleBack}
                  disabled={step === 1}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Atras
                </Button>
                <Button 
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !selectedSpace) ||
                    (step === 2 && !selectedSize) ||
                    (step === 3 && !selectedQuality)
                  }
                >
                  {step === 3 ? "Ver Resultado" : "Siguiente"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
