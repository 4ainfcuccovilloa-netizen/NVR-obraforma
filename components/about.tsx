import { CheckCircle2 } from "lucide-react"

const values = [
  {
    number: "01",
    title: "Precisión",
    description:
      "Cada medida, cada ángulo, cada detalle cuenta. Trabajamos con exactitud milimétrica para garantizar resultados impecables.",
  },
  {
    number: "02",
    title: "Innovación",
    description:
      "Incorporamos las últimas tendencias y tecnologías en construcción sostenible y diseño de interiores.",
  },
  {
    number: "03",
    title: "Transparencia",
    description:
      "Presupuestos claros, plazos realistas y comunicación constante durante todo el proceso de reforma.",
  },
]

const benefits = [
  "Equipo multidisciplinar de arquitectos e ingenieros",
  "Materiales de primera calidad certificados",
  "Garantía post-entrega de 2 años",
  "Cumplimiento estricto de normativas",
  "Gestión integral de permisos y licencias",
  "Seguimiento digital del proyecto en tiempo real",
]

const guarantees = [
  { title: "Garantía de 2 años", subtitle: "En todas nuestras obras con cobertura total" },
  { title: "Responsabilidad Civil", subtitle: "Seguros completos en cada proyecto" },
  { title: "Plazos Garantizados", subtitle: "Cerrados por contrato y respetados" },
]

export function About() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-accent mb-4 block font-medium">
              Sobre Nosotros
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6">
              Donde la visión se convierte en realidad
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-muted-foreground leading-relaxed mb-6">
              En NVR Obraforma creemos que cada espacio cuenta una historia. Con más de 15 años de
              experiencia, hemos perfeccionado el arte de transformar ideas en ambientes que inspiran,
              funcionan y perduran.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-6xl font-serif text-foreground">15+</span>
              <span className="text-sm uppercase tracking-widest text-muted-foreground max-w-[150px] leading-relaxed">
                Años creando espacios excepcionales
              </span>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {values.map((value) => (
            <div key={value.number} className="border-t border-border pt-8">
              <span className="text-4xl font-serif text-muted-foreground/20 block mb-4">
                {value.number}
              </span>
              <h3 className="text-xl font-serif text-foreground mb-3">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Why choose us */}
        <div className="grid lg:grid-cols-2 gap-16 bg-secondary/40 p-10 lg:p-14 mb-16">
          <div>
            <h3 className="text-3xl font-serif text-foreground mb-4">¿Por qué elegirnos?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Combinamos experiencia, tecnología y pasión para ofrecer resultados que superan
              expectativas en cada proyecto.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle2
                  className="h-4 w-4 text-accent flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-sm text-foreground leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="grid md:grid-cols-3 gap-6">
          {guarantees.map((g) => (
            <div key={g.title} className="bg-card border border-border p-8">
              <h4 className="font-serif text-xl text-foreground mb-2">{g.title}</h4>
              <p className="text-sm text-muted-foreground">{g.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
