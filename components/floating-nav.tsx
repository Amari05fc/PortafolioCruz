"use client"

import { useEffect, useState } from "react"
import { Code2 } from "lucide-react"

const LINKS = [
  { label: "AboutMe", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contactemos", href: "#contacto" },
]

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <nav
        aria-label="Navegación principal"
        className={`mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-border px-4 py-2.5 backdrop-blur-xl transition-all duration-300 sm:px-6 ${
          scrolled
            ? "bg-background/55 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
            : "bg-background/30"
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-sm font-medium text-foreground"
        >
          <span className="hidden sm:inline">
            {"<"}
            <span className="text-primary">Cruz</span>
            {"/>"}
          </span>
        </a>

        <ul className="flex items-center gap-1 sm:gap-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-1.5 font-mono text-xs tracking-wide text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground sm:text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>


      </nav>
    </header>
  )
}
