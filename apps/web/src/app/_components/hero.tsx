"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Todo lo que necesitas para tu{" "}
                <span className="text-lime-400">evento perfecto</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Organizamos cumpleaños, fiestas, peñas y cualquier celebración. 
                Altavoces, hielos, cerveza, bebidas y mucho más. 
                ¡Hacemos que tu evento sea inolvidable!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-lime-500 hover:bg-lime-600 text-blue-900 font-bold px-8 py-4 text-lg">
                Reserva Ahora
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-blue-900">
                Ver Catálogo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
                <span className="text-sm text-gray-200">Disponible 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
                <span className="text-sm text-gray-200">Entrega rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
                <span className="text-sm text-gray-200">Zona local</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Visual */}
          <div className="relative">
            <Card className="bg-card border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-lime-500/20 p-4 rounded-lg border border-lime-400">
                      <h3 className="font-semibold text-lime-400">🎵 Altavoces</h3>
                      <p className="text-sm text-lime-200">Sistema de sonido profesional</p>
                    </div>
                    <div className="bg-yellow-500/20 p-4 rounded-lg border border-yellow-400">
                      <h3 className="font-semibold text-yellow-400">🍺 Cerveza</h3>
                      <p className="text-sm text-yellow-200">Barriles y grifos incluidos</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-400">
                      <h3 className="font-semibold text-blue-400">🧊 Hielos</h3>
                      <p className="text-sm text-blue-200">Congeladores portátiles</p>
                    </div>
                    <div className="bg-lime-500/20 p-4 rounded-lg border border-lime-400">
                      <h3 className="font-semibold text-lime-400">🍹 Bebidas</h3>
                      <p className="text-sm text-lime-200">Amplia selección</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 