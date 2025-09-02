"use client";

import { useState } from "react";
import Button from "@/components/ui/retro-btn";
import { type LineaPresupuesto } from "@/types/presupuesto";
import { productosPorCategoria } from "@/data/productos";
import ProductSelector from "./ProductSelector";

interface CongeladorHielosStepProps {
  objetosPedido: LineaPresupuesto[];
  onAddProduct: (producto: LineaPresupuesto) => void;
  onRemoveProduct: (index: number) => void;
}

export default function CongeladorHielosStep({ objetosPedido, onAddProduct, onRemoveProduct }: CongeladorHielosStepProps) {
  const [categoriaActiva, setCategoriaActiva] = useState<'congelador' | 'hielo'>('congelador');

  const categorias = [
    { key: 'congelador' as const, label: 'Congeladores', productos: productosPorCategoria.congelador },
    { key: 'hielo' as const, label: 'Hielo', productos: productosPorCategoria.hielo },
  ];

  return (
    <div className="space-y-6">
      {/* Botones de categoría */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 md:gap-4 px-4 pt-4">
        {categorias.map((categoria) => (
          <Button
            key={categoria.key}
            variant={categoriaActiva === categoria.key ? "default" : "outline"}
            onClick={() => setCategoriaActiva(categoria.key)}
            size="md"
            className="font-bold"
          >
            {categoria.label}
          </Button>
        ))}
      </div>

      {/* Selector de productos */}
      <ProductSelector
        productos={categorias.find(c => c.key === categoriaActiva)?.productos || []}
        categoria={categoriaActiva}
        objetosPedido={objetosPedido}
        onAddProduct={onAddProduct}
        onRemoveProduct={onRemoveProduct}
        titulo={categorias.find(c => c.key === categoriaActiva)?.label || ''}
      />
    </div>
  );
}
