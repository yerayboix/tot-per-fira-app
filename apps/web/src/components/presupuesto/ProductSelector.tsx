"use client";

import { useState } from "react";
import { Plus, Minus, Truck, Settings, Wrench, Info } from "lucide-react";
import Button from "@/components/ui/retro-btn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { type LineaPresupuesto } from "@/types/presupuesto";

interface Producto {
  nombre: string;
  precio?: number;
}

interface ProductSelectorProps {
  titulo: string;
  productos: Producto[];
  categoria: LineaPresupuesto['categoria'];
  objetosPedido: LineaPresupuesto[];
  onAddProduct: (producto: LineaPresupuesto) => void;
  onRemoveProduct: (producto: LineaPresupuesto) => void;

}

export default function ProductSelector({
  titulo,
  productos,
  categoria,
  objetosPedido,
  onAddProduct,
  onRemoveProduct
}: ProductSelectorProps) {
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);
  const [cantidad, setCantidad] = useState(1);

  const handleAddProduct = () => {
    if (!selectedProduct) return;

    const nuevoProducto: LineaPresupuesto = {
      nombre: selectedProduct.nombre,
      unidades: cantidad,
      precio: selectedProduct.precio,
      categoria: categoria
    };

    onAddProduct(nuevoProducto);
    setSelectedProduct(null);
    setCantidad(1);
  };

  return (
    <div className="border-b border-gray-300 p-4 md:p-6 space-y-4">

      
      <div className="flex flex-col sm:flex-row sm:gap-4 md:gap-6">
        <div className="flex-1">
          <Label className="text-[var(--secondary-color)] font-clash-display font-medium text-sm md:text-base">
            Seleccionar Producto
          </Label>
          <select
            className="w-full mt-2 p-3 h-12 border-2 border-[#000000] shadow-[2px_2px_0px_0px_#000000] font-clash-display bg-white focus:outline-none focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px] transition-all rounded-none text-base"
            value={selectedProduct?.nombre || ''}
            onChange={(e) => {
              const producto = productos.find(p => p.nombre === e.target.value);
              setSelectedProduct(producto || null);
            }}
          >
            <option value="">Selecciona un producto...</option>
            {productos.map((producto) => (
              <option key={producto.nombre} value={producto.nombre}>
                {producto.nombre} {producto.precio && `- €${producto.precio}`}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:gap-4 mt-4 sm:mt-0">
          <div className="sm:min-w-fit">
            <Label className="text-[var(--secondary-color)] font-clash-display font-medium text-sm md:text-base block">
              Cantidad
            </Label>
            <div className="flex items-center gap-2 sm:gap-3 mt-2 justify-center sm:justify-start">
              <Button
                type="button"
                variant="outline"
                size="md"
                onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                disabled={cantidad <= 1}
                className="h-12 w-12 flex items-center justify-center flex-shrink-0"
              >
                <Minus size={16} className="flex-shrink-0" />
              </Button>
              <Input
                type="number"
                value={cantidad}
                onChange={(e) => setCantidad(Math.max(1, parseInt(e.target.value) || 1))}
                className="flex-1 min-w-0 h-12 text-center border-2 border-[#000000] shadow-[2px_2px_0px_0px_#000000] font-clash-display focus:outline-none focus:shadow-none focus:translate-x-[2px] focus:translate-y-[2px] transition-all rounded-none text-base"
                min="1"
              />
              <Button
                type="button"
                variant="outline"
                size="md"
                onClick={() => setCantidad(cantidad + 1)}
                className="h-12 w-12 flex items-center justify-center flex-shrink-0"
              >
                <Plus size={16} className="flex-shrink-0" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Indicadores para altavoces */}
      {categoria === 'altavoces' && (
        <div className="space-y-2">
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <span className="font-khand font-medium">Incluye:</span>
            <div className="flex items-center gap-1">
              <Truck size={12} />
              <span className="font-khand">Transporte</span>
            </div>
            <div className="flex items-center gap-1">
              <Settings size={12} />
              <span className="font-khand">Mesa de sonido</span>
            </div>
            <div className="flex items-center gap-1">
              <Wrench size={12} />
              <span className="font-khand">Instalación</span>
            </div>
          </div>
          <div className="text-xs text-gray-500 font-khand italic">
            * Para equipos de más de 3.000W (hasta 7.000W) consultar disponibilidad
          </div>
        </div>
      )}

      {/* Indicador para congelador */}
      {categoria === 'congelador' && (
        <div className="flex items-center gap-4 text-xs text-gray-600">
          <span className="font-khand font-medium">Incluye:</span>
          <div className="flex items-center gap-1">
            <Truck size={12} />
            <span className="font-khand">Transporte</span>
          </div>
        </div>
      )}

      <Button
        onClick={handleAddProduct}
        disabled={!selectedProduct}
        variant="default"
        size="md"
        className="w-full flex items-center justify-center"
      >
        <Plus size={16} className="mr-2 flex-shrink-0" />
        Añadir al Carrito
      </Button>
    </div>
  );
}