import { Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-svh flex-col justify-center overflow-hidden px-6 pt-32 pb-20 sm:px-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(34,197,94,0.28),transparent_24%),radial-gradient(circle_at_15%_80%,rgba(16,185,129,0.12),transparent_32%),linear-gradient(120deg,rgba(9,14,12,0.98)_0%,rgba(5,10,8,0.96)_45%,rgba(10,18,15,0.96)_100%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-[8%] -z-10 w-[18%] rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-background via-background/70 to-transparent" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-1.5 font-mono text-xs text-foreground backdrop-blur-md">
              <Sparkles className="size-3.5 text-primary" />
              Curiosidad que construye
            </span>

            <h1 className="mt-6 text-balance font-sans text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Construyo{" "}
              <span className="italic font-medium text-primary">experiencias</span>
              <br />
              digitales que importan.
            </h1>

            <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Soy{" "}
              <span className="text-foreground">Fer Cruz</span>, Ingeniera de Software apasionada por entender el ecosistema completo de cada proyecto para crear resultados que funcionen y tengan sentido.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Ver mis proyectos
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3 font-mono text-sm text-foreground backdrop-blur-md transition-colors hover:bg-primary/10"
              >
                ¡Contactemos!
              </a>
            </div>
          </div>

          <div className="w-full max-w-[14rem] self-center rounded-[1rem] border border-white/10 bg-white/10 px-4 py-3 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.75)] backdrop-blur-xl lg:self-start lg:mt-12">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-primary/90">
              <span>Stack</span>
              <span>Live</span>
            </div>
            <div className="mt-3 space-y-2 border-t border-white/10 pt-3 text-sm text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Proyectos</span>
                <span className="font-semibold text-foreground">6+</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Hackathons</span>
                <span className="font-semibold text-foreground">4</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Años</span>
                <span className="font-semibold text-foreground">2+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
