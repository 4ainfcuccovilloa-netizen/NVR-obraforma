import { MapPin, CheckCircle2 } from "lucide-react"

const serviceAreas = [
  "Barcelona ciudad",
  "Baix Llobregat",
  "Vallès Occidental",
  "Anoia",
  "Alt Penedès",
  "Berguedà",
]

export function MapSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map embed */}
          <div className="aspect-[4/3] overflow-hidden bg-card border border-border">
            <iframe
              title="Ubicación NVR Obraforma en Collbató"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.5484680892127!2d1.7753299999999999!3d41.556899999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a494c0c9282c31%3A0x0!2zQ29sbGJhdMOzLCBCYXJjZWxvbmE!5e0!3m2!1ses!2ses!4v1716380000000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-accent mb-4 block font-medium">
              Ubicación
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6">
              Sede en Collbató
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Prestamos servicio en toda el área metropolitana de Barcelona y comarcas limítrofes.
            </p>

            {/* Service Areas */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-foreground">{area}</span>
                </div>
              ))}
            </div>

            {/* Location Card */}
            <div className="bg-card border border-border p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-foreground text-background flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Sede principal
                </p>
                <p className="font-semibold text-foreground">Collbató, 08293</p>
                <p className="text-muted-foreground text-sm">Barcelona, España</p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
                  <span className="text-xs text-muted-foreground">
                    Disponible para nuevos proyectos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
