"use client"

import Image from "next/image"

export function BlackCat() {
  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ width: 380, height: 380 }}
    >
      {/* Outer glow aura — olive/yellow-green to match real eye color */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 55%, rgba(160,170,30,0.18) 0%, rgba(60,80,10,0.10) 40%, transparent 70%)",
          filter: "blur(22px)",
          animation: "pulseAura 4s ease-in-out infinite",
        }}
      />

      {/* Cat face image */}
      <div className="relative z-10" style={{ width: 340, height: 340 }}>
        <Image
          src="/black-cat.png"
          alt="Cute black cat face with yellow-green eyes and white whiskers"
          fill
          className="object-contain"
          style={{
            filter:
              "drop-shadow(0 0 18px rgba(160,180,20,0.45)) drop-shadow(0 0 40px rgba(80,100,0,0.3)) drop-shadow(0 0 8px rgba(200,220,50,0.5))",
            animation: "floatCat 5s ease-in-out infinite",
          }}
          priority
        />
      </div>

      {/* Ground shadow */}
      <div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        style={{
          width: 200,
          height: 24,
          background:
            "radial-gradient(ellipse, rgba(100,120,10,0.3) 0%, transparent 75%)",
          filter: "blur(12px)",
          animation: "shadowPulse 5s ease-in-out infinite",
        }}
      />
    </div>
  )
}
