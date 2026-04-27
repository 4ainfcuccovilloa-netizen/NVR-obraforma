import { ArrowRight } from "lucide-react"

interface Service {
  number: string
  title: string
  description: string
  features: string[]
  image: string
}

const services: Service[] = [
  {
    number: "01",
    title: "Reformas de Viviendas",
    description:
      "Transformación integral de espacios residenciales. Desde la concepción hasta la entrega, cuidamos cada detalle para crear hogares que inspiran.",
    features: ["Diseño personalizado", "Materiales premium", "Acabados de lujo"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_558878341_17858253501515870_4542029304754462090_n-3W5txcZke6F9lUTGmnwpLEQUERqUMl.jpg",
  },
  {
    number: "02",
    title: "Locales Comerciales",
    description:
      "Espacios comerciales que potencian tu marca. Creamos ambientes funcionales que maximizan el impacto visual y la experiencia del cliente.",
    features: ["Identidad de marca", "Optimización de espacios", "Normativas comerciales"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_559072241_17858253474515870_5722673154396909356_n-Hf47jglTjfCcAmd8CMICdusy2F068q.jpg",
  },
  {
    number: "03",
    title: "Dirección Técnica",
    description:
      "Supervisión experta de principio a fin. Garantizamos calidad, cumplimiento normativo y coordinación perfecta de todos los gremios.",
    features: ["Control de calidad", "Gestión integral", "Certificaciones"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_624055207_17871593937515870_3792647124803990463_n%20%281%29-bCkkwDLZJJBosznR0gONfdlpOpTtJn.jpg",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-accent mb-4 block font-medium">
            Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground max-w-xl leading-tight mb-6">
            Soluciones integrales para cada proyecto
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Ofrecemos un servicio completo que abarca desde el diseño inicial hasta la entrega final,
            con atención obsesiva al detalle.
          </p>
        </div>

        {/* Services list */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="group grid md:grid-cols-[80px_1fr_280px] gap-8 bg-card border border-border p-8 hover:border-accent transition-colors duration-300"
            >
              {/* Number */}
              <span className="text-5xl font-serif text-muted-foreground/20 self-start leading-none">
                {service.number}
              </span>

              {/* Info */}
              <div>
                <h3 className="text-2xl font-serif mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-lg">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="group/link inline-flex items-center gap-2 text-sm uppercase tracking-widest text-accent border-b border-accent/50 hover:border-accent pb-0.5 transition-all"
                >
                  Consultar
                  <ArrowRight
                    className="h-4 w-4 group-hover/link:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </a>
              </div>

              {/* Image */}
              <div className="hidden md:block relative aspect-[4/3] overflow-hidden bg-secondary">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ animationDelay: `${index * 150}ms` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
