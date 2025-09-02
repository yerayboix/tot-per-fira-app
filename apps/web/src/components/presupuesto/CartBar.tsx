"use client";

import { ShoppingCart } from "lucide-react";
import Button from "@/components/ui/retro-btn";
import { type LineaPresupuesto } from "@/types/presupuesto";

interface CartBarProps {
  productos: LineaPresupuesto[];
  onOpenCart: () => void;
}

export default function CartBar({ productos, onOpenCart }: CartBarProps) {
  const calcularTotal = () => {
    return productos.reduce((total, producto) => {
      return total + (producto.precio ? producto.precio * producto.unidades : 0);
    }, 0);
  };

  const total = calcularTotal();

  // No mostrar la barra si no hay productos
  if (productos.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-300 bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="max-w-md mx-auto md:max-w-lg">
          <Button
            onClick={onOpenCart}
            variant="default"
            size="md"
            className="w-full flex items-center justify-between px-6 py-4"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingCart size={20} />
                {productos.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[var(--complementary-color-green)] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {productos.length}
                  </span>
                )}
              </div>
              <span className="font-clash-display font-medium">
                Ver Carrito
              </span>
            </div>
            
            {total > 0 && (
              <span className="px-1 font-bold font-clash-display">
                €{total.toFixed(2)}
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
} 