"use client"

import { useEffect, useRef } from "react"

export function ShaderBackground() {
  const glowRef = useRef<HTMLDivElement>(null)
  const grainRef = useRef<HTMLCanvasElement>(null)

  // Glow that follows the cursor
  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    let raf = 0
    const target = { x: 0.5, y: 0.35 }
    const current = { x: 0.5, y: 0.35 }

    function onMove(e: MouseEvent) {
      target.x = e.clientX / window.innerWidth
      target.y = e.clientY / window.innerHeight
    }

    function animate() {
      current.x += (target.x - current.x) * 0.06
      current.y += (target.y - current.y) * 0.06
      if (glow) {
        glow.style.setProperty("--gx", `${(current.x * 100).toFixed(2)}%`)
        glow.style.setProperty("--gy", `${(current.y * 100).toFixed(2)}%`)
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", onMove)
    raf = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Animated crystalline grain via canvas
  useEffect(() => {
    const canvas = grainRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const size = 140
    canvas.width = size
    canvas.height = size

    let raf = 0
    let last = 0

    function drawGrain(t: number) {
      if (!ctx) return
      // Throttle to ~24fps for a subtle shimmer
      if (t - last > 42) {
        last = t
        const image = ctx.createImageData(size, size)
        const data = image.data
        for (let i = 0; i < data.length; i += 4) {
          const v = Math.random() * 255
          data[i] = v
          data[i + 1] = v
          data[i + 2] = v
          data[i + 3] = 12 // very low alpha
        }
        ctx.putImageData(image, 0, 0)
      }
      raf = requestAnimationFrame(drawGrain)
    }
    raf = requestAnimationFrame(drawGrain)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div
      className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-[#05100d]"
      aria-hidden="true"
    >
      {/* Deep emerald base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,#0a231c_0%,#061410_45%,#030b09_100%)]" />

      {/* Drifting crystalline orbs */}
      <div
        className="absolute -left-[10%] top-[-15%] h-[70vh] w-[70vh] rounded-full blur-[90px] opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,157,0.35) 0%, rgba(0,255,157,0) 70%)",
          animation: "drift-1 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute right-[-15%] top-[10%] h-[75vh] w-[75vh] rounded-full blur-[100px] opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,0.28) 0%, rgba(0,229,255,0) 70%)",
          animation: "drift-2 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-20%] left-[25%] h-[65vh] w-[65vh] rounded-full blur-[110px] opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.4) 0%, rgba(16,185,129,0) 70%)",
          animation: "drift-3 26s ease-in-out infinite",
        }}
      />

      {/* Faceted crystalline lines */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-screen"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(0,255,157,0.7) 0px, rgba(0,255,157,0) 2px, rgba(0,255,157,0) 60px)",
        }}
      />

      {/* Cursor-following glow */}
      <div
        ref={glowRef}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(400px circle at var(--gx,50%) var(--gy,35%), rgba(0,255,157,0.18), rgba(0,229,255,0.08) 40%, transparent 70%)",
        }}
      />

      {/* Animated grain overlay */}
      <canvas
        ref={grainRef}
        className="absolute inset-0 h-full w-full opacity-[0.5] mix-blend-overlay"
        style={{ imageRendering: "pixelated" }}
      />

      {/* Vignette + legibility layer */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_50%,transparent_40%,rgba(3,11,9,0.7)_100%)]" />
    </div>
  )
}
