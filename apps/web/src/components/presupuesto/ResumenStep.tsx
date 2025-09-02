"use client";

import Button from "@/components/ui/retro-btn";
import { CheckCircle, Send } from "lucide-react";
import { type Presupuesto } from "@/types/presupuesto";

interface ResumenStepProps {
  presupuesto: Presupuesto;
  onEnviar: () => void;
  puedeEnviar: boolean;
}

export default function ResumenStep({ presupuesto, onEnviar, puedeEnviar }: ResumenStepProps) {
  const calcularTotal = () => {
    return presupuesto.objetosPedido.reduce((total, producto) => {
      return total + (producto.precio ? producto.precio * producto.unidades : 0);
    }, 0);
  };

  const productosAgrupados = presupuesto.objetosPedido.reduce((grupos, producto) => {
    if (!grupos[producto.categoria]) {
      grupos[producto.categoria] = [];
    }
    grupos[producto.categoria].push(producto);
    return grupos;
  }, {} as Record<string, typeof presupuesto.objetosPedido>);

  const getCategoriaLabel = (categoria: string) => {
    const labels: Record<string, string> = {
      alcohol: 'Alcohol',
      cervezas: 'Cervezas',
      mezcla: 'Mezcla',
      congelador: 'Congeladores',
      hielo: 'Hielo',
      altavoces: 'Altavoces',
      pack_limpieza: 'Packs de Limpieza',
      pack_menaje: 'Packs de Menaje'
    };
    return labels[categoria] || categoria;
  };

  return (
    <div className="space-y-6">
      {/* Información Personal */}
      <div className="border-2 border-[#000000] shadow-[4px_4px_0px_0px_#000000] bg-white">
        <div className="border-b-2 border-[#000000] bg-[var(--complementary-color-green)]/20 p-4">
          <h3 className="text-xl md:text-2xl font-bold font-khand text-[var(--secondary-color)] flex items-center gap-2">
            <CheckCircle className="text-[var(--complementary-color-green)]" size={24} />
            Información Personal
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border-2 border-[#000000] shadow-[2px_2px_0px_0px_#000000] bg-[var(--complementary-color-yellow)]/10">
              <span className="font-bold font-clash-display text-[var(--primary-color)]">Nombre:</span>
              <p className="text-[var(--secondary-color)] font-clash-display">{presupuesto.nombreCompleto}</p>
            </div>
            <div className="p-4 border-2 border-[#000000] shadow-[2px_2px_0px_0px_#000000] bg-[var(--complementary-color-yellow)]/10">
              <span className="font-bold font-clash-display text-[var(--primary-color)]">Email:</span>
              <p className="text-[var(--secondary-color)] font-clash-display">{presupuesto.correoElectronico}</p>
            </div>
            <div className="p-4 border-2 border-[#000000] shadow-[2px_2px_0px_0px_#000000] bg-[var(--complementary-color-yellow)]/10">
              <span className="font-bold font-clash-display text-[var(--primary-color)]">Teléfono:</span>
              <p className="text-[var(--secondary-color)] font-clash-display">{presupuesto.numeroTelefono}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Productos Seleccionados */}
      <div className="border-2 border-[#000000] shadow-[4px_4px_0px_0px_#000000] bg-white">
        <div className="border-b-2 border-[#000000] bg-[var(--complementary-color-turquoise)]/20 p-4">
          <h3 className="text-xl md:text-2xl font-bold font-khand text-[var(--secondary-color)] flex items-center gap-2">
            <CheckCircle className="text-[var(--complementary-color-green)]" size={24} />
            Productos Seleccionados ({presupuesto.objetosPedido.length})
          </h3>
        </div>
        <div className="p-6">
          {Object.keys(productosAgrupados).length === 0 ? (
            <div className="text-center py-8 border-2 border-[#000000] shadow-[2px_2px_0px_0px_#000000] bg-gray-100">
              <p className="font-clash-display text-[var(--secondary-color)] text-lg">No se han añadido productos al presupuesto</p>
              <p className="text-sm mt-2 font-clash-display text-gray-600">Vuelve a los pasos anteriores para añadir productos</p>
            </div>
          ) : (
            <div className="space-y-6">
              {Object.entries(productosAgrupados).map(([categoria, productos]) => (
                <div key={categoria}>
                  <h4 className="font-bold text-xl md:text-2xl mb-3 font-khand text-[var(--primary-color)]">
                    {getCategoriaLabel(categoria)}
                  </h4>
                  <div className="space-y-3">
                    {productos.map((producto, index) => (
                      <div
                        key={`${producto.nombre}-${index}`}
                        className="flex justify-between items-center p-4 border-2 border-[#000000] shadow-[2px_2px_0px_0px_#000000] bg-[var(--complementary-color-pink)]/10"
                      >
                        <div>
                          <span className="font-bold font-clash-display text-[var(--secondary-color)]">{producto.nombre}</span>
                          <span className="text-[var(--primary-color)] ml-3 font-clash-display">x{producto.unidades}</span>
                        </div>
                        {producto.precio && (
                          <span className="font-bold font-clash-display text-[var(--complementary-color-green)] text-lg">
                            €{(producto.precio * producto.unidades).toFixed(2)}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Total */}
      {calcularTotal() > 0 && (
        <div className="border-2 border-[#000000] shadow-[4px_4px_0px_0px_#000000] bg-white">
          <div className="p-6">
            <div className="flex justify-between items-center text-2xl md:text-3xl font-bold font-khand">
              <span className="text-[var(--secondary-color)]">Total Estimado:</span>
              <span className="text-[var(--complementary-color-green)]">€{calcularTotal().toFixed(2)}</span>
            </div>
            <p className="text-sm text-gray-600 mt-2 font-clash-display">
              *Este es un precio estimado. El precio final puede variar según disponibilidad y condiciones específicas.
            </p>
          </div>
        </div>
      )}

      {/* Botón de envío */}
      <div className="text-center">
        <Button
          onClick={onEnviar}
          disabled={!puedeEnviar}
          variant="default"
          size="lg"
          className="px-12 py-4 text-xl"
        >
          <Send size={20} className="mr-3" />
          {puedeEnviar ? 'Enviar Presupuesto' : 'Complete la información requerida'}
        </Button>
        
        {!puedeEnviar && (
          <div className="mt-4 p-4 border-2 border-[#000000] shadow-[2px_2px_0px_0px_#000000] bg-red-100">
            <p className="text-red-600 font-clash-display font-medium">
              Debe completar la información personal y añadir al menos un producto
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 