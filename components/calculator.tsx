"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

const spaceOptions = [
  { id: "bano", label: "Baño", price: "Desde 4.500€" },
  { id: "cocina", label: "Cocina", price: "Desde 7.000€" },
  { id: "salon", label: "Salón / Comedor", price: "Desde 6.000€" },
  { id: "integral", label: "Reforma Integral", price: "Desde 18.000€" },
  { id: "local", label: "Local Comercial", price: "Desde 12.000€" },
]

const sizeOptions = [
  { id: "pequeno", label: "Pequeño", description: "Hasta 50m²", multiplier: 1 },
  { id: "mediano", label: "Mediano", description: "50 – 100m²", multiplier: 1.5 },
  { id: "grande", label: "Grande", description: "Más de 100m²", multiplier: 2.2 },
]

const qualityOptions = [
  { id: "estandar", label: "Estándar", description: "Materiales de calidad media", multiplier: 1 },
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

  const estimate = (() => {
    if (!selectedSpace || !selectedSize || !selectedQuality) return null
    const base = basePrices[selectedSpace]
    const sm = sizeOptions.find((s) => s.id === selectedSize)?.multiplier || 1
    const qm = qualityOptions.find((q) => q.id === selectedQuality)?.multiplier || 1
    return Math.round((base * sm * qm) / 100) * 100
  })()

  const handleReset = () => {
    setStep(1)
    setSelectedSpace("")
    setSelectedSize("")
    setSelectedQuality("")
  }

  const canProceed =
    (step === 1 && selectedSpace) ||
    (step === 2 && selectedSize) ||
    (step === 3 && selectedQuality)

  return (
    <section id="calculadora" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-accent mb-4 block font-medium">
              Herramienta gratuita
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
              Calcula tu presupuesto estimado
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Tres preguntas simples para orientarte antes de contactarnos. Sin compromiso, sin registros.
          </p>
        </div>

        <div className="max-w-3xl">
          {/* Progress */}
          <div className="flex items-center gap-3 mb-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 flex items-center justify-center text-xs font-semibold transition-colors ${
                    s === step
                      ? "bg-foreground text-background"
                      : s < step
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {s < step ? <Check className="h-4 w-4" aria-hidden="true" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`h-px w-12 transition-colors ${
                      s < step ? "bg-accent" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Steps */}
          <div className="bg-card border border-border p-8 lg:p-10">
            {step === 1 && !estimate && (
              <div>
                <h3 className="font-serif text-xl text-foreground mb-8">
                  Paso 1 – ¿Qué espacio quieres reformar?
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {spaceOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedSpace(opt.id)}
                      className={`flex items-center justify-between p-5 border transition-colors text-left ${
                        selectedSpace === opt.id
                          ? "border-accent bg-accent/5"
                          : "border-border hover:border-foreground/40"
                      }`}
                    >
                      <span className="font-medium text-foreground">{opt.label}</span>
                      <span className="text-xs text-muted-foreground ml-4">{opt.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="font-serif text-xl text-foreground mb-8">
                  Paso 2 – ¿Qué tamaño tiene el espacio?
                </h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  {sizeOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedSize(opt.id)}
                      className={`flex flex-col items-start p-6 border transition-colors ${
                        selectedSize === opt.id
                          ? "border-accent bg-accent/5"
                          : "border-border hover:border-foreground/40"
                      }`}
                    >
                      <span className="font-medium text-foreground mb-1">{opt.label}</span>
                      <span className="text-xs text-muted-foreground">{opt.description}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && !estimate && (
              <div>
                <h3 className="font-serif text-xl text-foreground mb-8">
                  Paso 3 – ¿Qué nivel de acabados buscas?
                </h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  {qualityOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedQuality(opt.id)}
                      className={`flex flex-col items-start p-6 border transition-colors ${
                        selectedQuality === opt.id
                          ? "border-accent bg-accent/5"
                          : "border-border hover:border-foreground/40"
                      }`}
                    >
                      <span className="font-medium text-foreground mb-1">{opt.label}</span>
                      <span className="text-xs text-muted-foreground leading-relaxed">{opt.description}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && estimate && (
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Tu presupuesto estimado
                </p>
                <div className="bg-foreground text-background p-10 mb-8">
                  <span className="block text-5xl lg:text-6xl font-serif mb-3">
                    {estimate.toLocaleString("es-ES")}€
                  </span>
                  <p className="text-sm opacity-60">
                    * Precio orientativo. El presupuesto final dependerá de la visita técnica.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="#contacto"
                    className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
                  >
                    Solicitar presupuesto real
                  </a>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 text-sm uppercase tracking-widest hover:border-foreground transition-colors text-foreground"
                  >
                    Calcular de nuevo
                  </button>
                </div>
              </div>
            )}

            {/* Navigation */}
            {!(step === 3 && estimate) && (
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                <button
                  onClick={() => setStep((s) => Math.max(1, s - 1))}
                  disabled={step === 1}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground disabled:opacity-30 hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Atrás
                </button>
                <button
                  onClick={() => setStep((s) => Math.min(3, s + 1))}
                  disabled={!canProceed}
                  className="inline-flex items-center gap-2 bg-foreground text-background disabled:opacity-30 px-6 py-2.5 text-sm uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {step === 3 ? "Ver resultado" : "Siguiente"}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
