"use client";

import { useState } from "react";
import PresupuestoForm from "@/components/presupuesto/PresupuestoForm";
import Button from "@/components/ui/retro-btn";
import { ArrowRight } from "lucide-react";

export default function SolicitarPresupuestoPage() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  if (!mostrarFormulario) {
    return (
      <section className="min-h-screen relative overflow-hidden border border-b-0 border-gray-300 container mx-auto mt-10">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* Header */}
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold font-khand text-[var(--primary-color)] mb-6 md:mb-8">
              SOLICITAR PRESUPUESTO
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--secondary-color)] mb-12 md:mb-16 font-clash-display max-w-2xl mx-auto">
              Completa el formulario para recibir tu presupuesto personalizado
            </p>

            {/* Simple Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
              <div className="text-center">
                <h3 className="font-bold font-khand text-[var(--primary-color)] text-xl md:text-2xl mb-2">
                  7 Pasos
                </h3>
                <p className="text-sm md:text-base font-clash-display text-[var(--secondary-color)]">
                  Rápido y sencillo
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-bold font-khand text-[var(--complementary-color-green)] text-xl md:text-2xl mb-2">
                  Personalizado
                </h3>
                <p className="text-sm md:text-base font-clash-display text-[var(--secondary-color)]">
                  Solo lo que necesites
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-bold font-khand text-[var(--complementary-color-turquoise)] text-xl md:text-2xl mb-2">
                  Sin Compromiso
                </h3>
                <p className="text-sm md:text-base font-clash-display text-[var(--secondary-color)]">
                  Presupuesto gratuito
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center">
              <Button
                onClick={() => setMostrarFormulario(true)}
                variant="default"
                size="md"
                className="text-xl"
              >
                Comenzar
                <ArrowRight size={20} className="ml-3" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen py-15 px-2 pb-24">
      <section className="relative overflow-hidden container mx-auto">
        <div className="container mx-auto border border-gray-300">
            <PresupuestoForm />
        </div>
      </section>
    </div>
  );
}