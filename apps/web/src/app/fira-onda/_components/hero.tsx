"use client"

import Button from "@/components/ui/retro-btn"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react";
import { Confetti, type ConfettiRef } from "@/components/magicui/confetti";
import GlitchText from "@/components/ui/glitch-text";

export function Hero() {
  const confettiRef = useRef<ConfettiRef>(null);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden border border-b-0 border-gray-300 container mx-auto pt-20">
      <Confetti
        ref={confettiRef}
        options={{
          particleCount: 400,
          spread: 100,
          origin: { y: 0.6 }
        }}
        className="absolute left-0 top-0 z-20 size-full"
      />
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Cartel_Fira_d_Onda_2025.jpg"
          alt="Cartel Feria d'Onda 2025"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 justify-center relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <div className="mb-8 text-center">
            <span className="text-md lg:text-xl font-semibold font-clash-display text-white">¡Fira d'Onda 2025!</span>
          </div>
          <div className="mb-12 text-center">
            <GlitchText className="text-5xl lg:text-7xl text-white font-bold font-khand">
              LO QUE NECESITES PARA TUS FIESTAS
            </GlitchText>
          </div>
          
          {/* Description */}
          <div className="mb-16 max-w-2xl mx-auto text-center">
            <p className="text-base lg:text-xl text-gray-200 leading-relaxed tracking-wider font-clash-display">
              SOMOS GENTE DE ONDA <br />
              <span className="text-white font-semibold">NADIE MEJOR PARA QUE NO TE FALTE DE NADA</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
            <Link href="/contacto">
              <Button
                size="md"
                variant="default"
              >
                Crea tu presupuesto
              </Button>
            </Link>
            <Link href="/contacto">
              <Button
                size="md"
                variant="secondary"
              >
                Contacta con nosotros
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
