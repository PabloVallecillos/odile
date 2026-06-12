import { SpiralBackground } from "@/components/spiral-background"
import { BlackCat } from "@/components/black-cat"

export default function Page() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-background flex items-center justify-center">
      {/* Animated spiral background */}
      <SpiralBackground />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Creepy title */}
        <h1
          className="text-foreground font-sans text-sm tracking-[0.4em] uppercase opacity-60"
          style={{
            textShadow: "0 0 20px rgba(180,0,0,0.8), 0 0 40px rgba(100,0,120,0.5)",
            letterSpacing: "0.45em",
          }}
        >
          ✦ do not look into its eyes ✦
        </h1>

        {/* The cat */}
        <BlackCat />

        {/* Bottom tag */}
        <p
          className="text-foreground font-sans text-xs tracking-widest uppercase opacity-40"
          style={{
            textShadow: "0 0 12px rgba(180,0,0,0.6)",
          }}
        >
          &hellip; it stares back &hellip;
        </p>
      </div>

      {/* Global keyframe animations */}
      <style>{`
        @keyframes floatCat {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50%       { transform: translateY(-18px) rotate(1deg); }
        }
        @keyframes pulseAura {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.12); }
        }
        @keyframes shadowPulse {
          0%, 100% { opacity: 0.5; transform: translateX(-50%) scaleX(1); }
          50%       { opacity: 0.8; transform: translateX(-50%) scaleX(0.85); }
        }
      `}</style>
    </main>
  )
}
