"use client";

import { Trash2, ShoppingCart, X } from "lucide-react";
import Button from "@/components/ui/retro-btn";
import { type LineaPresupuesto } from "@/types/presupuesto";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  productos: LineaPresupuesto[];
  onRemoveProduct: (producto: LineaPresupuesto) => void;
}

export default function CartModal({ isOpen, onClose, productos, onRemoveProduct }: CartModalProps) {
  const calcularTotal = () => {
    return productos.reduce((total, producto) => {
      return total + (producto.precio ? producto.precio * producto.unidades : 0);
    }, 0);
  };

  const productosAgrupados = productos.reduce((acc, producto) => {
    if (!acc[producto.categoria]) {
      acc[producto.categoria] = [];
    }
    acc[producto.categoria].push(producto);
    return acc;
  }, {} as Record<string, LineaPresupuesto[]>);

  const getCategoriaLabel = (categoria: string) => {
    const labels: Record<string, string> = {
      alcohol: "Alcohol",
      cervezas: "Cervezas",
      mezcla: "Mezcla",
      congelador: "Congelador",
      hielo: "Hielo",
      altavoces: "Altavoces",
      pack_limpieza: "Pack Limpieza",
      pack_menaje: "Pack Menaje"
    };
    return labels[categoria] || categoria;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="backdrop-blur-sm bg-black/30" />
      <DialogContent 
        className="w-screen h-screen max-w-none overflow-hidden border-0 rounded-none p-0 gap-0"
        showCloseButton={false}
      >
        <DialogHeader className="border-b border-gray-300 bg-[var(--complementary-color-turquoise)]/10 p-4 flex flex-row items-center justify-between space-y-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold font-khand text-[var(--secondary-color)] flex items-center gap-2">
            <ShoppingCart size={24} />
            Carrito ({productos.length})
          </DialogTitle>
          <Button
            onClick={onClose}
            variant="outline"
            size="lg"
            className="!w-12 !h-12 md:!w-14 md:!h-14 flex items-center justify-center flex-shrink-0"
          >
            <X size={24} className="flex-shrink-0" />
          </Button>
        </DialogHeader>

        {/* Content */}
        <div className="overflow-y-auto h-[calc(100vh-140px)] pb-20">
          {productos.length === 0 ? (
            <div className="p-8 text-center">
              <ShoppingCart size={48} className="mx-auto mb-4 text-gray-400" />
              <p className="font-clash-display text-[var(--secondary-color)] text-lg mb-2">
                Tu carrito está vacío
              </p>
              <p className="text-sm font-clash-display text-gray-600">
                Añade productos desde las secciones del formulario
              </p>
            </div>
          ) : (
            <div className="space-y-0">
              {Object.entries(productosAgrupados).map(([categoria, productosCategoria]) => (
                <div key={categoria}>
                  <div className="border-b border-gray-300 p-4 bg-[var(--primary-color)]/5">
                    <h3 className="font-bold text-lg md:text-xl font-khand text-[var(--primary-color)]">
                      {getCategoriaLabel(categoria)}
                    </h3>
                  </div>
                  <div className="border-b border-gray-300">
                    {productosCategoria.map((producto, index) => (
                      <div
                        key={`${producto.nombre}-${index}`}
                        className="flex items-center justify-between p-4 border-b border-gray-300 last:border-b-0"
                      >
                        <div className="flex-1 min-w-0 pr-3">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                            <span className="font-bold font-clash-display text-[var(--secondary-color)] text-sm md:text-base truncate">
                              {producto.nombre}
                            </span>
                            <span className="text-[var(--primary-color)] font-clash-display text-sm md:text-base">
                              x{producto.unidades}
                            </span>
                            {producto.precio && (
                              <span className="text-[var(--primary-color)] font-bold font-clash-display text-sm md:text-base">
                                €{(producto.precio * producto.unidades).toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="md"
                          onClick={() => onRemoveProduct(producto)}
                          className="!bg-red-100 !text-red-600 !border-red-600 hover:!bg-red-600 hover:!text-white !w-10 !h-10 flex-shrink-0 flex items-center justify-center"
                        >
                          <Trash2 size={16} className="flex-shrink-0" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer con total */}
        {productos.length > 0 && calcularTotal() > 0 && (
          <div className="absolute bottom-0 left-0 right-0 border-t border-gray-300 bg-white p-4">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold font-khand text-[var(--secondary-color)]">
                Total Estimado:
              </span>
              <span className="text-xl font-bold font-khand text-[var(--primary-color)]">
                €{calcularTotal().toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-1 font-clash-display">
              *Precio estimado, puede variar según disponibilidad
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
} 