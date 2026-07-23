function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.56 22.29 24 17.8 24 12.5 24 5.87 18.63.5 12 .5Z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38a1.56 1.56 0 0 0 0 3.12ZM5.5 9.75h2.88V18H5.5V9.75Zm4.83 0h2.76v1.12h.04c.38-.72 1.32-1.48 2.71-1.48 2.9 0 3.43 1.91 3.43 4.39V18H16.5v-7.57c0-1.8-.03-4.12-2.51-4.12-2.51 0-2.9 1.96-2.9 3.98V18H10.33V9.75Z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/70 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-center text-sm text-muted-foreground sm:flex-row sm:px-8">
        <p>© 2026 Fer Cruz. Todos los derechos reservados.</p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em]">
            <a href="#top" className="transition-colors hover:text-primary">
              Inicio
            </a>
            <a href="#projects" className="transition-colors hover:text-primary">
              Proyectos
            </a>
            <a href="#contacto" className="transition-colors hover:text-primary">
              Contacto
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Amari05fc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-border/70 p-2 transition-colors hover:border-primary/40 hover:text-primary"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-border/70 p-2 transition-colors hover:border-primary/40 hover:text-primary"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
