const steps = [
  {
    number: "01",
    title: "Contacto",
    subtitle: "Respondemos en 24h",
    description:
      "Nos escribes o llamas. En menos de 24 horas te respondemos para conocer tu proyecto y concretar una visita.",
  },
  {
    number: "02",
    title: "Visita Técnica",
    subtitle: "Gratuita y sin compromiso",
    description:
      "Nuestro equipo va a tu espacio, toma medidas, valora el estado actual y escucha en detalle lo que necesitas.",
  },
  {
    number: "03",
    title: "Propuesta",
    subtitle: "Presupuesto detallado",
    description:
      "Recibes un presupuesto transparente con partidas desglosadas, planos iniciales y calendario de ejecución.",
  },
  {
    number: "04",
    title: "Obra",
    subtitle: "Llave en mano y con garantía",
    description:
      "Ejecutamos con nuestro equipo propio. Coordinamos todos los gremios y te entregamos el espacio terminado con garantía de 2 años.",
  },
]

export function Process() {
  return (
    <section id="proceso" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-accent mb-4 block font-medium">
              Nuestro proceso
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
              Qué pasa después de contactarnos
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Sin sorpresas. Sabemos que las obras generan incertidumbre, por eso hacemos cada paso
            predecible y tranquilo.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps.map((step) => (
            <div key={step.number} className="bg-background p-8 lg:p-10">
              {/* Number */}
              <span className="block text-5xl font-serif text-muted-foreground/20 mb-6 leading-none">
                {step.number}
              </span>
              <h3 className="text-xl font-serif text-foreground mb-1">{step.title}</h3>
              <p className="text-xs uppercase tracking-widest text-accent mb-4">{step.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 bg-foreground text-background p-8 lg:p-10">
          <div>
            <p className="text-xl font-serif mb-1">¿Listo para empezar tu reforma?</p>
            <p className="text-background/70 text-sm">Contacta hoy y recibe respuesta en menos de 24h.</p>
          </div>
          <a
            href="#contacto"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-3 text-sm uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
          >
            Solicitar presupuesto
          </a>
        </div>
      </div>
    </section>
  )
}
