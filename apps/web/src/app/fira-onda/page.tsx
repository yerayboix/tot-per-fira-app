import { Hero } from "./_components/hero"
import { ConfidenceSection } from "./_components/confidence-section"
import { ServicesSection } from "./_components/services-section"
import { AnniversarySection } from "./_components/anniversary-section"
import { DrinksSection } from "./_components/drinks-section"
import { CTASection } from "./_components/cta-section"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "¡Fira d'Onda 2025! - ¡Organiza las fiestas de Onda con nosotros!",
  description: "Solicita tu presupuesto para estas ferias de Onda 2025 y deja que nosotros nos ocupemos de todo.",
  keywords: [
    "fira d'onda",
    "fiestas",
    "alquiler de equipos de sonido",
    "alquiler de congeladores", 
    "alquiler de botelleros",
    "alquiler de grifos de cerveza",
    "alquiler de mesas y sillas",
    "alquiler de iluminación",
    "bebidas",
    "botellas de agua",
    "botellas de refresco",
    "botellas de cerveza",
    "botellas de vino",
    "botellas de agua",
    "botellas de refresco",
    "organización de fiestas",
    "organización de eventos",
    "organización de fiestas en Onda",
    "organización de eventos en Onda",
    "organización de fiestas en Castellón",
    "organización de eventos en Castellón",
    "confianza",
    "conocemos ambiente",
    "precios justos"
  ],
};

export default function FiraOndaPage() {
  return (
    <div className="min-h-screen">
      <div className="px-2">
        <Hero />
      </div>
      <div className="px-2">
        <ConfidenceSection />
        <ServicesSection />
        <DrinksSection />
        <AnniversarySection />
        <CTASection />
      </div>
    </div>
  )
}
