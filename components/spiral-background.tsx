"use client"

import { useEffect, useRef } from "react"

export function SpiralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const draw = () => {
      timeRef.current += 0.004
      const t = timeRef.current
      const W = canvas.width
      const H = canvas.height
      const cx = W / 2
      const cy = H / 2

      // Deep black background with slight fade for trail effect
      ctx.fillStyle = "rgba(5, 2, 10, 0.18)"
      ctx.fillRect(0, 0, W, H)

      const maxRadius = Math.sqrt(W * W + H * H) * 0.72
      const arms = 3
      const turnsPerArm = 7
      const pointsPerArm = 420

      for (let arm = 0; arm < arms; arm++) {
        const armOffset = (arm / arms) * Math.PI * 2

        for (let i = 0; i < pointsPerArm; i++) {
          const frac = i / pointsPerArm
          const angle = frac * Math.PI * 2 * turnsPerArm + armOffset + t * (arm % 2 === 0 ? 1 : -0.7)
          const radius = frac * maxRadius

          const wobble = Math.sin(frac * 18 + t * 2.5 + arm) * 14
          const r = radius + wobble

          const x = cx + Math.cos(angle) * r
          const y = cy + Math.sin(angle) * r

          // Color cycling: deep reds, blood crimsons, dark purples, sickly greens
          const hue1 = 0    // blood red
          const hue2 = 300  // dark purple
          const hue3 = 140  // eerie dark green

          let hue: number
          const cycle = (frac + t * 0.08 + arm * 0.33) % 1
          if (cycle < 0.4) {
            hue = hue1 + (hue2 - hue1) * (cycle / 0.4)
          } else if (cycle < 0.7) {
            hue = hue2 + (hue3 - hue2) * ((cycle - 0.4) / 0.3)
          } else {
            hue = hue3 + (hue1 - hue3 + 360) * ((cycle - 0.7) / 0.3)
          }

          const brightness = 30 + frac * 25
          const saturation = 80 + Math.sin(frac * 10 + t) * 15
          const alpha = (0.06 + frac * 0.25) * (0.6 + Math.sin(frac * 20 + t * 3) * 0.4)

          const size = 0.8 + frac * 2.8

          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${brightness}%, ${alpha})`
          ctx.fill()
        }
      }

      // Pulsing central void — dark glow
      const voidGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 200)
      voidGrad.addColorStop(0, "rgba(5, 2, 10, 0.85)")
      voidGrad.addColorStop(0.5, "rgba(30, 5, 40, 0.4)")
      voidGrad.addColorStop(1, "rgba(0,0,0,0)")
      ctx.fillStyle = voidGrad
      ctx.beginPath()
      ctx.arc(cx, cy, 200, 0, Math.PI * 2)
      ctx.fill()

      // Outer dark vignette
      const vigGrad = ctx.createRadialGradient(cx, cy, maxRadius * 0.4, cx, cy, maxRadius)
      vigGrad.addColorStop(0, "rgba(0,0,0,0)")
      vigGrad.addColorStop(1, "rgba(0,0,0,0.92)")
      ctx.fillStyle = vigGrad
      ctx.fillRect(0, 0, W, H)

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      aria-hidden="true"
    />
  )
}
