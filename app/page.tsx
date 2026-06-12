import { SpiralBackground } from "@/components/spiral-background"
import { BlackCat } from "@/components/black-cat"

export default function Page() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-background flex items-center justify-center">
      {/* Animated spiral background */}
      <SpiralBackground />

      <div className="relative z-10">
        <BlackCat />
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
