import { Sparkles, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pt-32 pb-20 sm:px-10"
    >
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-1.5 font-mono text-xs text-foreground backdrop-blur-md">
          <Sparkles className="size-3.5 text-primary" />
          Hola, bienvenida a mi portafolio
        </span>

        <h1 className="mt-6 text-balance font-sans text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Construyo{" "}
          <span className="italic font-medium text-primary">experiencias</span>
          <br />
          digitales que importan.
        </h1>

        <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Soy{" "}
          <span className="text-foreground">[Fer Cruz]</span>, Ingeniera de
          Software. Diseño y desarrollo aplicaciones limpias, interactivas y de
          alto rendimiento, cuidando cada detalle desde el código hasta la
          experiencia final.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3 font-mono text-sm text-foreground backdrop-blur-md transition-colors hover:bg-primary/10"
          >
            Contactemos
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Bajar a la sección Sobre mí"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowDown className="size-4 animate-bounce" />
        scroll
      </a>
    </section>
  )
}
