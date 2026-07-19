import Image from "next/image"
import { Download } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

export function AboutMe() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-24 sm:px-10"
    >
      <SectionHeading label="AboutMe" />

      <div className="mt-12 grid items-center gap-10 md:grid-cols-[1.2fr_1fr] md:gap-14">
        <div className="space-y-5 text-pretty text-base leading-relaxed text-muted-foreground">
          <p>
            {"¡Hola! Soy "}
            <span className="text-foreground">Fer Cruz</span>
            {
              ", Ingeniera de Software. Me apasiona crear soluciones que viven en internet y resolver problemas reales a través del código. Mi interés en el desarrollo comenzó cuando descubrí que podía convertir ideas en productos funcionales."
            }
          </p>
          <p>
            {
              "Disfruto construir aplicaciones desde cero, cuidando la arquitectura, el rendimiento y la experiencia de usuario. Aprender tecnologías nuevas y llevar conceptos hasta su versión final es lo que más me motiva."
            }
          </p>
          <p>
            {
              "Hoy mi enfoque está en desarrollar interfaces limpias e interactivas y sistemas escalables, combinando buenas prácticas de ingeniería con un ojo para el diseño."
            }
          </p>

          <div className="pt-4">
            <a
              href="#contacto"
              className="inline-flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
              aria-label="Descargar CV"
            >
              <Download className="size-5" />
            </a>
          </div>
        </div>

        <div className="group relative mx-auto w-full max-w-sm">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
          />
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <Image
              src="/about-portrait.png"
              alt="Retrato de Fer Cruz, Ingeniera de Software"
              width={600}
              height={720}
              className="h-auto w-full object-cover grayscale transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
              priority
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-primary/20 opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
