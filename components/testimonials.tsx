import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "NVR Obraforma transformó completamente nuestro baño. Profesionales, puntuales y con un acabado impecable. El resultado superó todas nuestras expectativas.",
    author: "María García",
    location: "Collbató, Barcelona",
    stars: 5,
  },
  {
    quote:
      "La dirección técnica fue excelente. Resolvieron cada detalle con precisión y profesionalismo. Sin duda volveré a trabajar con ellos en mi próxima reforma.",
    author: "Carlos López",
    location: "Sant Sadurní, Barcelona",
    stars: 5,
  },
  {
    quote:
      "La reforma integral de nuestro local fue perfecta. Respetaron plazos y presupuesto al pie de la letra. Equipo totalmente recomendado.",
    author: "Ana Martínez",
    location: "Igualada, Barcelona",
    stars: 5,
  },
  {
    quote:
      "Contraté a NVR para una reforma de cocina y comedor. El resultado es espectacular. La comunicación durante toda la obra fue excelente y transparente.",
    author: "Jordi Puig",
    location: "Martorell, Barcelona",
    stars: 5,
  },
  {
    quote:
      "Llevamos 3 reformas con ellos y siempre con el mismo nivel de profesionalidad. Presupuesto detallado, cumplimiento de plazos y un acabado de lujo.",
    author: "Laura Fernández",
    location: "Esparraguera, Barcelona",
    stars: 5,
  },
  {
    quote:
      "Reformaron nuestro baño completo en menos tiempo del previsto. Cada detalle fue cuidado al máximo. El antes y después es increíble.",
    author: "Miguel Torres",
    location: "Piera, Barcelona",
    stars: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-accent mb-4 block font-medium">
              Testimonios
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
              Lo que dicen nuestros clientes
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Más de 150 proyectos completados con la satisfacción total de nuestros clientes. Sus palabras
            son nuestro mejor aval.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-card border border-border p-8 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-6" role="img" aria-label={`${t.stars} estrellas`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-foreground leading-relaxed text-sm mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-5">
                <p className="font-semibold text-foreground text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
