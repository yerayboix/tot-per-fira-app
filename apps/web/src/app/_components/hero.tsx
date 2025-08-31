"use client"

import { Button } from "@/components/ui/button"
import { AvailabilityIndicator } from "@/components/availability-indicator"

export function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline - Restructurado */}
          <div className="space-y-6 mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[var(--primary-color)] font-bold leading-[0.9] tracking-tight">
              ¿Cansado de organizarlo todo?
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[var(--secondary-color)] leading-tight">
              ¡Déjalo en nuestras manos!
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-4 mb-10 max-w-2xl mx-auto">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
              Pídenos presupuesto y en <span className="text-[var(--primary-color)] font-semibold">Tot Per Fira</span> nos encargamos del resto.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Bebidas, congeladores, altavoces... lo llevamos todo hasta donde lo necesites.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="px-8 py-4 text-base font-semibold bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Solicitar presupuesto
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-base font-semibold border-2 border-[var(--secondary-color)] text-[var(--secondary-color)] hover:bg-[var(--secondary-color)] hover:text-white transition-all duration-300"
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