"use client"


import { AvailabilityIndicator } from "@/components/availability-indicator"
import { NumberTicker } from "@/components/magicui/number-ticker"
import Button from "@/components/ui/retro-btn"
import Link from "next/link"

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
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden border border-b-0 border-gray-300 container mx-auto">

      <div className="container mx-auto px-4 justify-center relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline - Restructurado */}
          <div className="mb-2 text-center">
            <span className="text-sm lg:text-xl font-medium font-clash-display">¡No te estreses más!</span>
          </div>
          <div className="space-y-6 mb-4 text-center">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl text-[var(--primary-color)] font-semibold font-clash-display">
              Organiza tu evento ideal
            </h1>
          </div>
          {/* Description */}
          <div className="mb-10 max-w-2xl mx-auto text-center">
            <p className="text-sm lg:text-xl text-gray-600 leading-relaxed tracking-wider font-clash-display">
              Bebidas, congeladores, altavoces y mucho más... <br />
              Nosotros nos encargamos de todo.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-4 mb-12">
            <ExperienceCounter
              value={10}
              text="Años de experiencia"
            />
            <ExperienceCounter
              value={100}
              text="Clientes satisfechos"
            />
            <ExperienceCounter
              value={30}
              text="Eventos organizados"
              className="col-span-2 md:col-span-1"
            />
          </div>

                      {/* CTA Buttons */}
            <div className="flex flex-row gap-4 items-center justify-center mb-12">
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
                  variant="outline"
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