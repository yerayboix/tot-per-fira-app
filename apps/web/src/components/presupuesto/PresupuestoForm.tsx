"use client";

import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { z } from "zod";
import Button from "@/components/ui/retro-btn";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { type Presupuesto, type LineaPresupuesto } from "@/types/presupuesto";
import PersonalInfoStep from "./PersonalInfoStep";
import BebidasStep from "./BebidasStep";
import CongeladorHielosStep from "./CongeladorHielosStep";
import AltavocesStep from "./AltavocesStep";
import PackLimpiezaStep from "./PackLimpiezaStep";
import PackMenajeStep from "./PackMenajeStep";
import ResumenStep from "./ResumenStep";

const PASOS = [
  { id: 1, titulo: "Información Personal", required: true },
  { id: 2, titulo: "Añadir Bebidas", required: false },
  { id: 3, titulo: "Añadir Congelador y Hielos", required: false },
  { id: 4, titulo: "Añadir Altavoces", required: false },
  { id: 5, titulo: "Añadir Pack Limpieza", required: false },
  { id: 6, titulo: "Añadir Pack Menaje", required: false },
  { id: 7, titulo: "Resumen", required: true },
];

export default function PresupuestoForm() {
  const [pasoActual, setPasoActual] = useState(1);
  const [presupuesto, setPresupuesto] = useState<Presupuesto>({
    nombreCompleto: '',
    correoElectronico: '',
    numeroTelefono: '',
    objetosPedido: []
  });

  const form = useForm({
    defaultValues: {
      nombreCompleto: '',
      correoElectronico: '',
      numeroTelefono: '',
    },
    validators: {
      onChange: z.object({
        nombreCompleto: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
        correoElectronico: z.string().email("Email inválido"),
        numeroTelefono: z.string().min(9, "El teléfono debe tener al menos 9 dígitos"),
      }),
    },
  });

  const actualizarInformacionPersonal = (data: Partial<Presupuesto>) => {
    setPresupuesto(prev => ({ ...prev, ...data }));
  };

  const añadirProducto = (producto: LineaPresupuesto) => {
    setPresupuesto(prev => ({
      ...prev,
      objetosPedido: [...prev.objetosPedido, producto]
    }));
    toast.success(`${producto.nombre} añadido al presupuesto`);
  };

  const eliminarProducto = (index: number) => {
    const producto = presupuesto.objetosPedido[index];
    setPresupuesto(prev => ({
      ...prev,
      objetosPedido: prev.objetosPedido.filter((_, i) => i !== index)
    }));
    toast.success(`${producto.nombre} eliminado del presupuesto`);
  };

  const siguientePaso = () => {
    if (pasoActual < PASOS.length) {
      setPasoActual(pasoActual + 1);
    }
  };

  const pasoAnterior = () => {
    if (pasoActual > 1) {
      setPasoActual(pasoActual - 1);
    }
  };

  const omitirPaso = () => {
    siguientePaso();
  };

  const puedeEnviar = () => {
    return presupuesto.nombreCompleto && 
           presupuesto.correoElectronico && 
           presupuesto.numeroTelefono && 
           presupuesto.objetosPedido.length > 0;
  };

  const enviarPresupuesto = () => {
    if (!puedeEnviar()) {
      toast.error("Debe completar la información personal y añadir al menos un producto");
      return;
    }

    // Simular envío - aquí irá la API
    console.log("=== PRESUPUESTO ENVIADO ===");
    console.log(JSON.stringify(presupuesto, null, 2));
    toast.success("¡Presupuesto enviado correctamente!");
    
    // Reset del formulario
    setPresupuesto({
      nombreCompleto: '',
      correoElectronico: '',
      numeroTelefono: '',
      objetosPedido: []
    });
    setPasoActual(1);
  };

  const renderPaso = () => {
    switch (pasoActual) {
      case 1:
        return (
          <PersonalInfoStep
            form={form}
            presupuesto={presupuesto}
            onUpdate={actualizarInformacionPersonal}
          />
        );
      case 2:
        return (
          <BebidasStep
            objetosPedido={presupuesto.objetosPedido}
            onAddProduct={añadirProducto}
            onRemoveProduct={eliminarProducto}
          />
        );
      case 3:
        return (
          <CongeladorHielosStep
            objetosPedido={presupuesto.objetosPedido}
            onAddProduct={añadirProducto}
            onRemoveProduct={eliminarProducto}
          />
        );
      case 4:
        return (
          <AltavocesStep
            objetosPedido={presupuesto.objetosPedido}
            onAddProduct={añadirProducto}
            onRemoveProduct={eliminarProducto}
          />
        );
      case 5:
        return (
          <PackLimpiezaStep
            objetosPedido={presupuesto.objetosPedido}
            onAddProduct={añadirProducto}
            onRemoveProduct={eliminarProducto}
          />
        );
      case 6:
        return (
          <PackMenajeStep
            objetosPedido={presupuesto.objetosPedido}
            onAddProduct={añadirProducto}
            onRemoveProduct={eliminarProducto}
          />
        );
      case 7:
        return (
          <ResumenStep
            presupuesto={presupuesto}
            onEnviar={enviarPresupuesto}
            puedeEnviar={puedeEnviar() as boolean}
          />
        );
      default:
        return null;
    }
  };

  const pasoActualData = PASOS[pasoActual - 1];

  // Función para obtener pasos visibles en móvil
  const getPasosMovil = () => {
    const pasos = [];
    
    // Solo mostrar el actual
    pasos.push(PASOS[pasoActual - 1]);
    
    return pasos;
  };

  return (
    <div className="p-4">
      {/* Indicador de progreso */}
      <div className="border-b border-gray-300 pb-6 mb-6">
        {/* Versión móvil - solo pasos contextuales */}
        <div className="block lg:hidden">
          <div className="text-center mb-4">
            <span className="text-sm font-clash-display text-[var(--secondary-color)]">
              Paso {pasoActual} de {PASOS.length}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 mb-4">
            {getPasosMovil().map((paso, index) => (
              <div key={paso.id} className="flex items-center">
                <div
                  className={`w-10 h-10 border-2 border-[#000000] shadow-[2px_2px_0px_0px_#000000] flex items-center justify-center text-sm font-bold font-clash-display ${
                    paso.id < pasoActual
                      ? "bg-[var(--complementary-color-green)] text-white"
                      : paso.id === pasoActual
                      ? "bg-[var(--primary-color)] text-white"
                      : "bg-white text-[var(--secondary-color)]"
                  }`}
                >
                  {paso.id < pasoActual ? <Check size={16} /> : paso.id}
                </div>
                {paso.id === pasoActual && (
                  <span className="ml-2 text-sm font-clash-display font-bold text-[var(--primary-color)] truncate max-w-[120px]">
                    {paso.titulo}
                  </span>
                )}
                {index < getPasosMovil().length - 1 && (
                  <div className="w-4 h-px bg-gray-300 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Versión desktop - todos los pasos */}
        <div className="hidden lg:block">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            {PASOS.map((paso, index) => (
              <div key={paso.id} className="flex items-center">
                <div
                  className={`w-10 h-10 border-2 border-[#000000] shadow-[2px_2px_0px_0px_#000000] flex items-center justify-center text-sm font-bold font-clash-display ${
                    paso.id < pasoActual
                      ? "bg-[var(--complementary-color-green)] text-white"
                      : paso.id === pasoActual
                      ? "bg-[var(--primary-color)] text-white"
                      : "bg-white text-[var(--secondary-color)]"
                  }`}
                >
                  {paso.id < pasoActual ? <Check size={16} /> : paso.id}
                </div>
                <span className={`ml-2 text-sm font-clash-display ${paso.id === pasoActual ? "font-bold text-[var(--primary-color)]" : "text-[var(--secondary-color)]"}`}>
                  {paso.titulo}
                </span>
                {index < PASOS.length - 1 && (
                  <div className="w-8 h-px bg-gray-300 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Barra de progreso */}
        <div className="w-full bg-gray-300 h-3 border-2 border-[#000000] shadow-[2px_2px_0px_0px_#000000]">
          <div
            className="bg-[var(--primary-color)] h-full transition-all duration-300"
            style={{ width: `${(pasoActual / PASOS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Contenido del paso */}
      <div className="border-2 border-[#000000] shadow-[4px_4px_0px_0px_#000000] bg-white mb-6">
        <div className="border-b-2 border-[#000000] bg-[var(--complementary-color-yellow)]/20 p-4">
          <h2 className="text-2xl md:text-4xl font-bold font-khand text-[var(--secondary-color)]">
            {pasoActualData.titulo}
            {!pasoActualData.required && (
              <span className="text-sm font-normal text-gray-600 ml-2 font-clash-display">(Opcional)</span>
            )}
          </h2>
        </div>
        <div className="p-6">{renderPaso()}</div>
      </div>

      {/* Navegación */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={pasoAnterior}
          disabled={pasoActual === 1}
          size="md"
        >
          <ChevronLeft size={16} className="mr-2" />
          Anterior
        </Button>

        <div className="flex gap-4">
          {!pasoActualData.required && pasoActual !== PASOS.length && (
            <Button variant="secondary" onClick={omitirPaso} size="md">
              Omitir
            </Button>
          )}
          
          {pasoActual < PASOS.length && (
            <Button onClick={siguientePaso} variant="default" size="md">
              Siguiente
              <ChevronRight size={16} className="ml-2" />
            </Button>
          )}
        </div>
      </div>

      {/* Info del presupuesto actual */}
      {presupuesto.objetosPedido.length > 0 && (
        <div className="mt-6 p-4 border-2 border-[#000000] shadow-[2px_2px_0px_0px_#000000] bg-[var(--complementary-color-turquoise)]/20">
          <p className="text-sm font-clash-display text-[var(--secondary-color)]">
            <strong>Productos añadidos:</strong> {presupuesto.objetosPedido.length}
          </p>
        </div>
      )}
    </div>
  );
} 