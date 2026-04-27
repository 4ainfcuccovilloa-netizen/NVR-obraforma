"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, MessageCircle, Plus } from "lucide-react"

const BLOB = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com"

const categories = [
  { id: "all", label: "Todos", count: 17 },
  { id: "banos", label: "Baños", count: 8 },
  { id: "integrales", label: "Integrales", count: 9 },
  { id: "cocinas", label: "Cocinas", count: 0 },
]

const projects = [
  {
    id: 1,
    title: "Baño Lujo Remodelado",
    category: "banos",
    badge: "Baños",
    likes: 324,
    comments: 18,
    image: `${BLOB}/SnapInsta.to_558878341_17858253501515870_4542029304754462090_n-3W5txcZke6F9lUTGmnwpLEQUERqUMl.jpg`,
  },
  {
    id: 2,
    title: "Reforma Integral Baño",
    category: "banos",
    badge: "Baños",
    likes: 287,
    comments: 12,
    image: `${BLOB}/SnapInsta.to_559072241_17858253474515870_5722673154396909356_n-Hf47jglTjfCcAmd8CMICdusy2F068q.jpg`,
  },
  {
    id: 3,
    title: "Construcción Cocina Moderna",
    category: "integrales",
    badge: "Integral",
    likes: 456,
    comments: 34,
    image: `${BLOB}/SnapInsta.to_624055207_17871593937515870_3792647124803990463_n%20%281%29-bCkkwDLZJJBosznR0gONfdlpOpTtJn.jpg`,
  },
  {
    id: 4,
    title: "Reforma Suelos Premium",
    category: "integrales",
    badge: "Video",
    isVideo: true,
    videoSrc: `${BLOB}/SnapInsta.to_AQPScVS-bH_rw4r6eV-3rNSzI5azWqtpcXOr_pTKHiW0-VP2r5UgB2jOxVv1DFJomE3XF3sZBZxVWjpMszaxJpkQzhL2KrQC3Ab7tQM-zfjb8HtU7jaf0yTXkiveeTlc4YukK5.mp4`,
  },
  {
    id: 5,
    title: "Baño Spa Contemporáneo",
    category: "banos",
    badge: "Baños",
    likes: 312,
    comments: 25,
    image: `${BLOB}/SnapInsta.to_558660017_17858253489515870_8483901608587359789_n-0NFJELtRm4Rk5CCmZq887ap3uowH0I.jpg`,
  },
  {
    id: 6,
    title: "Reforma en Construcción",
    category: "integrales",
    badge: "Integral",
    likes: 221,
    comments: 15,
    image: `${BLOB}/SnapInsta.to_623564578_17871593955515870_3224764598751784232_n-9Z8P35w8eCP8tZSd9WBAyprSAI10Oo.jpg`,
  },
  {
    id: 7,
    title: "Habitación Renovada",
    category: "integrales",
    badge: "Integral",
    likes: 276,
    comments: 19,
    image: `${BLOB}/SnapInsta.to_623688274_17871593973515870_1726677065943758671_n-gP7XQR0RRVEOVPyiiaq0K7Ccs7Oxrq.jpg`,
  },
  {
    id: 8,
    title: "Baño Moderno Completo",
    category: "banos",
    badge: "Baños",
    likes: 401,
    comments: 31,
    image: `${BLOB}/SnapInsta.to_623421914_17871593946515870_513165199631360897_n-DMkhvcdi50pMMui6vjcRpf9rBBJsUT.jpg`,
  },
  {
    id: 9,
    title: "Reforma en Proceso",
    category: "integrales",
    badge: "Video",
    isVideo: true,
    videoSrc: `${BLOB}/SnapInsta.to_AQO38YUNxQS3itvmo3I-6QHPbrp59eu7NkGq5tv1BpbiPebqWFpz7WswfXz06k11SNAaA9xtQf8HtUkafoojPrK5qDRC5JuvYQQH7dI-VdwLMX3q8vVcU8u7MGVvagQbr9UL1p.mp4`,
  },
  {
    id: 10,
    title: "Baño Antes y Después",
    category: "banos",
    badge: "Baños",
    likes: 534,
    comments: 48,
    image: `${BLOB}/SnapInsta.to_558976649_17858253492515870_8097748686251251720_n-Bt3farCZY2hknhLSoVtdDcYRA6ez4g.jpg`,
  },
  {
    id: 11,
    title: "Baño Moderno con Espejo LED",
    category: "banos",
    badge: "Baños",
    likes: 289,
    comments: 22,
    image: `${BLOB}/SnapInsta.to_542209855_17855054538515870_2703756320337077027_n-MdWcAVQi3MXby6FCPzj9cpCWoLLwtf.jpg`,
  },
  {
    id: 12,
    title: "Salón Terrazzo Moderno",
    category: "integrales",
    badge: "Integral",
    likes: 445,
    comments: 41,
    image: `${BLOB}/SnapInsta.to_542802937_17855054505515870_7964679006420640725_n-swq3IuEFi6Bh56A8a6ryq32B91GVtU.jpg`,
  },
  {
    id: 13,
    title: "Baño Minimalista Reformado",
    category: "banos",
    badge: "Baños",
    likes: 356,
    comments: 28,
    image: `${BLOB}/SnapInsta.to_542281932_17855054523515870_4528114413393264321_n-QGpn3V3PUjUqIkw46LzNzqM3rDBjTi.jpg`,
  },
  {
    id: 14,
    title: "Salón con Tarima Premium",
    category: "integrales",
    badge: "Integral",
    likes: 512,
    comments: 39,
    image: `${BLOB}/SnapInsta.to_541880272_17855054496515870_8073003618551324355_n-HYhi11kilc38cRW8xhKkPozajR7aqT.jpg`,
  },
  {
    id: 15,
    title: "Reforma Integral Cocina Baño",
    category: "integrales",
    badge: "Integral",
    likes: 623,
    comments: 52,
    image: `${BLOB}/SnapInsta.to_542030326_17855054487515870_4260540682933643519_n-9SsemRGK3foVuBNhrrFlFqxOsIapgP.jpg`,
  },
  {
    id: 16,
    title: "Cocina Moderna en Reforma",
    category: "integrales",
    badge: "Integral",
    likes: 298,
    comments: 17,
    image: `${BLOB}/SnapInsta.to_543353801_17855054541515870_621328439150890952_n-bl5hwbYG7Jor32HO7yesUu9ZSRqxaF.jpg`,
  },
  {
    id: 17,
    title: "Baño Vintage en Transformación",
    category: "banos",
    badge: "Baños",
    likes: 267,
    comments: 14,
    image: `${BLOB}/SnapInsta.to_541935678_17855054514515870_8716048444825286414_n-JPYGrahQfD3QykL6IebpkGOvjyNFr1.jpg`,
  },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered = projects.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  )

  return (
    <section id="proyectos" className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Nuestro Portafolio</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            +150 proyectos finalizados con +10 años de experiencia y 100% clientes satisfechos
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group flex items-center gap-2 px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat.id
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
                <span
                  className={`text-[10px] tabular-nums transition-colors ${
                    activeCategory === cat.id
                      ? "text-accent-foreground/70"
                      : "text-muted-foreground/60 group-hover:text-foreground/60"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div key={project.id} className="group relative overflow-hidden bg-card border border-border">
              <div className="relative aspect-square overflow-hidden bg-secondary">
                {project.isVideo ? (
                  <video
                    src={project.videoSrc}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    Tu navegador no soporta video HTML5.
                  </video>
                ) : (
                  <>
                    <Image
                      src={project.image!}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover w-full h-full transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 ease-out" />
                    {/* Plus icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full border-2 border-white/90 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400 ease-out">
                        <Plus className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                    </div>
                    {/* Bottom info on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <p className="text-white font-serif text-base leading-snug mb-3">{project.title}</p>
                      <div className="flex items-center gap-4 text-white/80">
                        <div className="flex items-center gap-1.5">
                          <Heart className="h-3.5 w-3.5 fill-white/80" aria-hidden="true" />
                          <span className="text-xs">{project.likes}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                          <span className="text-xs">{project.comments}</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-accent text-accent-foreground text-xs uppercase tracking-widest px-3 py-1 font-semibold">
                    {project.badge}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground text-sm mb-1">{project.title}</h3>
                <p className="text-xs text-muted-foreground">{project.badge}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
