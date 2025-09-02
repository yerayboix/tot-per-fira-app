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
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
                    <div className="p-4 border-2 border-[#000000] shadow-[2px_2px_0px_0px_#000000] bg-[var(--complementary-color-yellow)]/10">
                      <h3 className="font-bold font-khand text-[var(--primary-color)] text-lg mb-2">Rápido y Fácil</h3>
                      <p className="text-sm font-clash-display text-[var(--secondary-color)]">Solo 7 pasos sencillos para completar tu solicitud</p>
                    </div>
                    <div className="p-4 border-2 border-[#000000] shadow-[2px_2px_0px_0px_#000000] bg-[var(--complementary-color-green)]/10">
                      <h3 className="font-bold font-khand text-[var(--primary-color)] text-lg mb-2">Personalizado</h3>
                      <p className="text-sm font-clash-display text-[var(--secondary-color)]">Elige solo los servicios que necesitas para tu evento</p>
                    </div>
                    <div className="p-4 border-2 border-[#000000] shadow-[2px_2px_0px_0px_#000000] bg-[var(--complementary-color-turquoise)]/10">
                      <h3 className="font-bold font-khand text-[var(--primary-color)] text-lg mb-2">Sin Compromiso</h3>
                      <p className="text-sm font-clash-display text-[var(--secondary-color)]">Recibe tu presupuesto sin ningún tipo de compromiso</p>
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
    <div className="min-h-screen pt-20">
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