"use client"


import { AvailabilityIndicator } from "@/components/availability-indicator"
import { NumberTicker } from "@/components/magicui/number-ticker"
import Button from "@/components/ui/retro-btn"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react";
import { Confetti, type ConfettiRef } from "@/components/magicui/confetti";

interface ExperienceCounterProps {
  value: number
  text: string
  prefix?: string
  className?: string
}

function ExperienceCounter({ value, text, prefix = "+", className = "" }: ExperienceCounterProps) {
  return (
    <div className={className}>
      <div className="flex items-center justify-center gap-4">
        <span className="text-sm lg:text-4xl leading-relaxed font-clash-display">
          {prefix}
        </span>
        <NumberTicker
          value={value}
          className="text-2xl sm:text-3xl lg:text-4xl text-[var(--primary-color)] font-semibold font-clash-display"
        />
      </div>
      <span className="text-sm lg:text-xl text-gray-600 leading-relaxed tracking-wider font-clash-display">
        {text}
      </span>
    </div>
  )
}

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
          src="/images/pexels-kampus-6760884.jpg"
          alt="Event background"
          fill
          className="object-cover blur-[5px]"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 justify-center relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline - Restructurado */}
          <div className="mb-8 text-center">
            <span className="text-md lg:text-xl font-semibold font-clash-display text-white">¡No te estreses más!</span>
          </div>
          <div className="mb-12 text-center">
            <h1 className="text-6xl lg:text-8xl text-white font-bold font-khand">
              ORGANIZAMOS TU EVENTO IDEAL
            </h1>
          </div>
          {/* Description */}
          <div className="mb-16 max-w-2xl mx-auto text-center">
            <p className="text-base lg:text-xl text-gray-200 leading-relaxed tracking-wider font-clash-display">
              BEBIDAS, CONGELADORES, ALTAVOCES Y MUCHOS MÁS... <br />
              <span className="text-white font-semibold">¡Nosotros nos encargamos de todo!</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-6 items-center justify-center mb-16">
            <Link href="/contact">
              <Button
                size="md"
                variant="default"
              >
                Crear presupuesto
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="md"
                variant="secondary"
              >
                Contactar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 