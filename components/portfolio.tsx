"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Heart, MessageCircle, Play } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "Todos", count: 17 },
  { id: "banos", label: "Banos", count: 8 },
  { id: "integrales", label: "Integrales", count: 9 },
  { id: "cocinas", label: "Cocinas", count: 0 },
]

const projects = [
  {
    id: 1,
    title: "Bano Lujo Remodelado",
    category: "banos",
    likes: 324,
    comments: 18,
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Reforma Integral Bano",
    category: "banos",
    likes: 287,
    comments: 12,
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Construccion Cocina Moderna",
    category: "integrales",
    likes: 456,
    comments: 34,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Reforma Suelos Premium",
    category: "integrales",
    likes: 0,
    comments: 0,
    isVideo: true,
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Bano Spa Contemporaneo",
    category: "banos",
    likes: 312,
    comments: 25,
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Reforma en Construccion",
    category: "integrales",
    likes: 221,
    comments: 15,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=600&fit=crop",
  },
  {
    id: 7,
    title: "Habitacion Renovada",
    category: "integrales",
    likes: 276,
    comments: 19,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=600&fit=crop",
  },
  {
    id: 8,
    title: "Bano Moderno Completo",
    category: "banos",
    likes: 401,
    comments: 31,
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=600&fit=crop",
  },
  {
    id: 9,
    title: "Reforma en Proceso",
    category: "integrales",
    likes: 0,
    comments: 0,
    isVideo: true,
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=600&fit=crop",
  },
  {
    id: 10,
    title: "Bano Antes y Despues",
    category: "banos",
    likes: 534,
    comments: 48,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=600&fit=crop",
  },
  {
    id: 11,
    title: "Bano Moderno con Espejo LED",
    category: "banos",
    likes: 289,
    comments: 22,
    image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&h=600&fit=crop",
  },
  {
    id: 12,
    title: "Salon Terrazzo Moderno",
    category: "integrales",
    likes: 445,
    comments: 41,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop",
  },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  )

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif mb-4">Nuestro Portafolio</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            +150 proyectos finalizados con +10 anos de experiencia y 100% clientes satisfechos
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeCategory === category.id
                  ? "bg-foreground text-background"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {category.label}
              <span className="ml-1.5 text-xs opacity-60">{category.count}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-secondary"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Video Badge */}
                {project.isVideo && (
                  <div className="absolute top-3 right-3 bg-foreground/80 backdrop-blur-sm rounded-full p-2">
                    <Play className="w-4 h-4 text-background" fill="currentColor" />
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  {/* Stats */}
                  {!project.isVideo && (
                    <div className="flex items-center gap-4 text-background mb-2">
                      <span className="flex items-center gap-1.5 text-sm">
                        <Heart className="w-4 h-4" fill="currentColor" />
                        {project.likes}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm">
                        <MessageCircle className="w-4 h-4" fill="currentColor" />
                        {project.comments}
                      </span>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <span className="text-xs uppercase tracking-wider text-background/70 mb-1">
                    {project.category === "banos" ? "Banos" : "Integral"}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-background font-medium text-sm leading-tight">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
