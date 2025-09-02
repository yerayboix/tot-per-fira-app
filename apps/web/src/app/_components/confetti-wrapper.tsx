"use client"

import { Confetti, type ConfettiRef } from "@/components/magicui/confetti"
import { useRef } from "react"

export function ConfettiWrapper() {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <Confetti
        ref={confettiRef}
        options={{
          particleCount: 400,
          spread: 100,
          origin: { y: 0.6 }
        }}
        className="absolute left-0 top-0 z-20 size-full"
      />
  )
}