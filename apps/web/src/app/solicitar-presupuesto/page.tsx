"use client";

import { useState } from "react";
import PresupuestoForm from "@/components/presupuesto/PresupuestoForm";
import Button from "@/components/ui/retro-btn";
import { ArrowRight } from "lucide-react";

export default function SolicitarPresupuestoPage() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  if (!mostrarFormulario) {
    return (
      <div className="min-h-screen pt-20">
        <section className="relative overflow-hidden border border-b-0 border-gray-300 container mx-auto">
          <div className="container mx-auto">
            <div className="p-8 md:p-16 text-center">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-8xl font-bold font-khand text-[var(--primary-color)] mb-6">
                  SOLICITAR PRESUPUESTO
                </h1>
                <p className="text-lg md:text-xl text-[var(--secondary-color)] max-w-2xl mx-auto mb-8 font-clash-display">
                  Completa el formulario paso a paso para recibir un presupuesto personalizado
                  para tu evento. Puedes omitir las secciones que no necesites.
                </p>
                
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    <div className="p-6 text-center">
                      <h3 className="font-bold font-khand text-[var(--primary-color)] text-xl md:text-2xl mb-3">Rápido y Fácil</h3>
                      <p className="text-sm md:text-base font-clash-display text-[var(--secondary-color)]">Solo 7 pasos sencillos para completar tu solicitud</p>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-bold font-khand text-[var(--complementary-color-green)] text-xl md:text-2xl mb-3">Personalizado</h3>
                      <p className="text-sm md:text-base font-clash-display text-[var(--secondary-color)]">Elige solo los servicios que necesitas para tu evento</p>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-bold font-khand text-[var(--complementary-color-turquoise)] text-xl md:text-2xl mb-3">Sin Compromiso</h3>
                      <p className="text-sm md:text-base font-clash-display text-[var(--secondary-color)]">Recibe tu presupuesto sin ningún tipo de compromiso</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button
                      onClick={() => setMostrarFormulario(true)}
                      variant="default"
                      size="md"
                      className="px-12 py-4 text-xl"
                    >
                      Comenzar
                      <ArrowRight size={20} className="ml-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-15 px-2 pb-24"> {/* Added pb-24 for cart bar space */}
      <section className="relative overflow-hidden border border-b-0 border-gray-300 container mx-auto">
        <div className="container mx-auto">
          <div className="border-b border-gray-300">
            <PresupuestoForm />
          </div>
        </div>
      </section>
    </div>
  );
}