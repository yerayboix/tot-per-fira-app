"use client";

import { useState } from "react";
import Button from "@/components/ui/retro-btn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Minus, Trash2 } from "lucide-react";
import { type LineaPresupuesto } from "@/types/presupuesto";

interface Producto {
  nombre: string;
  precio?: number;
}

interface ProductSelectorProps {
  productos: Producto[];
  categoria: LineaPresupuesto['categoria'];
  objetosPedido: LineaPresupuesto[];
  onAddProduct: (producto: LineaPresupuesto) => void;
  onRemoveProduct: (index: number) => void;
  titulo: string;
}

export default function ProductSelector({
  productos,
  categoria,
  objetosPedido,
  onAddProduct,
  onRemoveProduct,
  titulo
}: ProductSelectorProps) {
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);
  const [cantidad, setCantidad] = useState(1);

  const productosDeEstaCategoria = objetosPedido.filter(p => p.categoria === categoria);

  const handleAddProduct = () => {
    if (!selectedProduct) return;

    const producto: LineaPresupuesto = {
      nombre: selectedProduct.nombre,
      unidades: cantidad,
      precio: selectedProduct.precio,
      categoria
    };

    onAddProduct(producto);
    setSelectedProduct(null);
    setCantidad(1);
  };

  const handleRemoveProduct = (producto: LineaPresupuesto) => {
    const index = objetosPedido.findIndex(p => 
      p.nombre === producto.nombre && p.categoria === producto.categoria
    );
    if (index !== -1) {
      onRemoveProduct(index);
    }
  };

  return (
    <div className="space-y-0">
      {/* Selector de productos */}
      <div className="border-b border-gray-300 p-4 md:p-6 space-y-4">
        <div>
          <Label className="text-[var(--secondary-color)] font-clash-display font-medium text-sm md:text-base">
            Seleccionar Producto
          </Label>
          <select
            className="w-full mt-2 p-3 border border-gray-300 rounded font-clash-display bg-white focus:outline-none focus:border-[var(--primary-color)] transition-all text-sm md:text-base"
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

        <div>
          <Label className="text-[var(--secondary-color)] font-clash-display font-medium text-sm md:text-base">
            Cantidad
          </Label>
          <div className="flex items-center gap-3 mt-2">
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={() => setCantidad(Math.max(1, cantidad - 1))}
              disabled={cantidad <= 1}
              className="flex items-center justify-center"
            >
              <Minus size={16} className="flex-shrink-0" />
            </Button>
            <Input
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-20 text-center border border-gray-300 rounded font-clash-display focus:outline-none focus:border-[var(--primary-color)] transition-all text-sm md:text-base"
              min="1"
            />
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={() => setCantidad(cantidad + 1)}
              className="flex items-center justify-center"
            >
              <Plus size={16} className="flex-shrink-0" />
            </Button>
          </div>
        </div>

        <Button
          onClick={handleAddProduct}
          disabled={!selectedProduct}
          variant="default"
          size="md"
          className="w-full flex items-center justify-center"
        >
          <Plus size={16} className="mr-2 flex-shrink-0" />
          Añadir al Presupuesto
        </Button>
      </div>

      {/* Lista de productos añadidos */}
      {productosDeEstaCategoria.length > 0 && (
        <>
          <div className="border-b border-gray-300 bg-[var(--complementary-color-turquoise)]/10 p-4">
            <h3 className="text-lg md:text-2xl font-bold font-khand text-[var(--secondary-color)]">
              {titulo} Seleccionados
            </h3>
          </div>
          <div>
            <div className="space-y-3">
              {productosDeEstaCategoria.map((producto, index) => (
                <div
                  key={`${producto.nombre}-${index}`}
                  className="flex items-center justify-between p-4 border-b border-gray-300"
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
                        <span className="text-[var(--complementary-color-green)] font-bold font-clash-display text-sm md:text-base">
                          €{(producto.precio * producto.unidades).toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => handleRemoveProduct(producto)}
                    className="!bg-red-100 !text-red-600 !border-red-600 hover:!bg-red-600 hover:!text-white h-10 w-10 flex-shrink-0 flex items-center justify-center"
                  >
                    <Trash2 size={16} className="flex-shrink-0" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}