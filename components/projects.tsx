"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.56 22.29 24 17.8 24 12.5 24 5.87 18.63.5 12 .5Z" />
    </svg>
  )
}

interface Project {
  index: string
  title: string
  description: string
  image: string
  tags: string[]
  repo: string
  demo: string
}

const projects: Project[] = [
  {
    index: "01",
    title: "Hobby Match",
    description:
      "Hobby Match es un sistema que usa lógica difusa para recomendarte entre 37 hobbies, basándose en 20 variables de tu personalidad y estado de ánimo actual.",
    image: "/projects/hobbymatch.png",
    tags: ["React", "Vite", "TypeScript", "FastAPI + Python", "Fuzzy Logic"],
    repo: "https://github.com/Amari05fc/HobbyMatch.git",
    demo: "https://hobbymatchfl.netlify.app/",
  },
  { 
    index: "02",
    title: "Bateria",
    description:
      "Es una batería virtual web creada con HTML, CSS y JavaScript que reproduce sonidos de batería al presionar las teclas A, S, D, F, G, H, J, K o L. El objetivo del proyecto fue practicar habilidades de programación en JS.",
    image: "/projects/bateria.png",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/Amari05fc/bateria.git",
    demo: "https://bateria-fch.netlify.app/",
  },
  {
    index: "03",
    title: "Clon de Google",
    description:
      "Es un clon de la página de inicio de Google creado para practicar HTML y CSS como parte del bootcamp de Tecnolochicas PRO. El proyecto se enfoca únicamente en replicar la estructura y el diseño visual de Google sin funcionalidad de búsqueda real.",
    image: "/projects/clongoogle.png",
    tags: ["HTML", "CSS"],
    repo: "https://github.com/Amari05fc/clon-google-b4-g2.git",
    demo: "https://clon-google-fercruzh.netlify.app/",
  },
]

export function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8">
      <SectionHeading label="Proyectos" />

      <div className="mt-12 flex flex-col gap-10 lg:gap-16">
        {projects.map((project, i) => {
          const reversed = i % 2 === 1
          return (
            <article key={project.title} className="group relative lg:min-h-[19rem]">
              {/* Imagen / demo (capa de fondo) */}
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver demo de ${project.title}`}
                className={`relative z-0 block overflow-hidden rounded-2xl border border-border/60 lg:absolute lg:top-1/2 lg:w-[50%] lg:-translate-y-1/2 ${
                  reversed ? "lg:right-0" : "lg:left-0"
                }`}
              >
                <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`Captura del proyecto ${project.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-all duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Overlay verde que se aclara al hover */}
                  <div className="absolute inset-0 bg-background/40 transition-colors duration-500 group-hover:bg-background/10" />
                  {/* Etiqueta "Ver demo" */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-full border border-primary/40 bg-popover/80 px-4 py-2 font-mono text-sm text-primary backdrop-blur-md">
                      Ver demo <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </a>

              {/* Contenido (capa superior, superpuesta a la imagen) */}
              <div
                className={`pointer-events-none relative z-10 mt-6 flex flex-col lg:mt-0 lg:h-full lg:w-[52%] lg:justify-center ${
                  reversed
                    ? "lg:mr-auto lg:items-start lg:text-left"
                    : "lg:ml-auto lg:items-end lg:text-right"
                }`}
              >
                <p className="pointer-events-auto font-mono text-xs uppercase tracking-[0.25em] text-accent">
                  Proyecto destacado
                </p>
                <h3 className="pointer-events-auto mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {project.title}
                </h3>

                <div className="pointer-events-auto mt-4 w-full rounded-xl border border-border/60 bg-popover/85 p-4 shadow-xl shadow-background/40 backdrop-blur-md sm:p-5">
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <ul
                  className={`pointer-events-auto mt-4 flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs text-muted-foreground ${
                    reversed ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <div
                  className={`pointer-events-auto mt-3 flex items-center gap-3 ${
                    reversed ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver repositorio de ${project.title}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver demo de ${project.title}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
