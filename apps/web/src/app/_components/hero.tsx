"use client"

import { Button } from "@/components/ui/button"
import { AvailabilityIndicator } from "@/components/availability-indicator"
import { EmeraldVoid } from "@/components/backgrounds/emerald-void"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <EmeraldVoid />
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Título principal */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Todo lo necesario para el{" "}
              <span className="text-lime-400">evento perfecto</span>
            </h1>

            {/* Frase inspiradora */}
            <div className="space-y-4">
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed font-medium">
                ¡Nosotros ponemos la fiesta, tú pones las ganas!
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Cumpleaños, bodas, peñas, fiestas de barrio...
                Da igual el evento, nosotros nos encargamos de que
                la música no pare y las bebidas bien frías no falten.
              </p>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="subtle" size="2xl" className="px-10 py-4">
              Reserva Ahora
            </Button>
            <Button variant="subtle" size="2xl" className="px-10 py-4">
              Ver Catálogo
            </Button>
          </div>

          {/* Indicadores de disponibilidad */}
          <div className="flex items-center justify-center gap-8 pt-4">
            <AvailabilityIndicator
              variant="dot"
              text="Rápida disponibilidad"
              className="text-gray-200"
            />
            <AvailabilityIndicator
              variant="dot"
              text="Trato personalizado"
              className="text-gray-200"
            />
            <AvailabilityIndicator
              variant="dot"
              text="Envío a zonas disponibles"
              className="text-gray-200"
            />
          </div>
        </div>
      </div>

    </section>
  )
} 