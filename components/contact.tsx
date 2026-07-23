import { ArrowUpRight, Mail } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

export function Contact() {
  return (
    <section id="contacto" className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-gradient-to-br from-primary/15 via-background/80 to-accent/10 p-8 shadow-[0_20px_80px_-24px_rgba(0,0,0,0.45)] sm:p-10 lg:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_45%)]" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionHeading label="Contactemos" />
            <h3 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Me encanta trabajar en ideas que mezclen diseño, tecnología y una experiencia
              memorable. Si quieres hablar de desarrollo, colaboración o simplemente saludar, aquí
              estoy.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:fernandocruzhdez@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/20"
            >
              <Mail className="h-4 w-4" />
              Escríbeme
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:text-primary"
            >
              Volver arriba
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
