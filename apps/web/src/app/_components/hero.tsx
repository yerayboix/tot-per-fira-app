"use client"

import { Button } from "@/components/ui/button"
import { AvailabilityIndicator } from "@/components/availability-indicator"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden border border-b-0 border-gray-300 container mx-auto">

      <div className="container mx-auto px-4 py-24 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline - Restructurado */}
            <div className="mb-2">
              <span className="text-sm lg:text-xl font-medium font-clash-display">¡No te estreses más!</span>
            </div>
          <div className="space-y-6 mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[var(--primary-color)] font-semibold tracking-tight font-clash-display">
              La manera más sencilla de organizar tus fiestas
            </h1>
          </div>
          {/* Description */}
          <div className="mb-10 max-w-2xl mx-auto">
            <p className="text-sm lg:text-xl text-gray-600 leading-relaxed font-clash-display">
              Bebidas, congeladores, altavoces y mucho más... <br />
              No tengas miedo en pedirnos presupuesto, nosotros nos encargamos de todo.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="px-8 py-4 text-base font-semibold bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-clash-display"
            >
              Solicitar presupuesto
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-base font-semibold border-2 border-[var(--secondary-color)] text-[var(--secondary-color)] hover:bg-[var(--secondary-color)] hover:text-white transition-all duration-300 font-clash-display"
            >
              Contactar
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <AvailabilityIndicator
              variant="dot"
              text="Rápido servicio"
              className="text-[var(--primary-color)] text-sm"
            />
            <AvailabilityIndicator
              variant="dot"
              text="Trato personal"
              className="text-[var(--primary-color)] text-sm"
            />
            <AvailabilityIndicator
              variant="dot"
              text="Transporte y montaje"
              className="text-[var(--primary-color)] text-sm"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 