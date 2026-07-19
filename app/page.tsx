import { ShaderBackground } from "@/components/shader-background"
import { FloatingNav } from "@/components/floating-nav"
import { Hero } from "@/components/hero"
import { AboutMe } from "@/components/about-me"
import { Projects } from "@/components/projects"

export default function Page() {
  return (
    <main className="relative min-h-svh text-foreground">
      <ShaderBackground />
      <FloatingNav />
      <Hero />
      <AboutMe />
      <Projects />
    </main>
  )
}
