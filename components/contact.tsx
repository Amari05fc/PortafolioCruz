import { ArrowUpRight, Mail } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

export function Contact() {
  return (
    <section id="contacto" className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-primary/15 bg-[linear-gradient(135deg,rgba(10,18,15,0.98)_0%,rgba(4,8,7,0.96)_60%,rgba(8,14,11,0.98)_100%)] p-8 shadow-[0_0_120px_rgba(34,197,94,0.08)] sm:p-10 lg:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_25%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />

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
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/15 px-5 py-3 text-sm font-medium text-primary transition-all hover:-translate-y-0.5 hover:bg-primary/25"
            >
              <Mail className="h-4 w-4" />
              Escríbeme
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-5 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
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
