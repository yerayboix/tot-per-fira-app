"use client";

import { useState } from "react";
import Button from "@/components/ui/retro-btn";
import { type LineaPresupuesto } from "@/types/presupuesto";
import { productosPorCategoria } from "@/data/productos";
import ProductSelector from "./ProductSelector";

interface BebidasStepProps {
  objetosPedido: LineaPresupuesto[];
  onAddProduct: (producto: LineaPresupuesto) => void;
  onRemoveProduct: (index: number) => void;
}

export default function BebidasStep({ objetosPedido, onAddProduct, onRemoveProduct }: BebidasStepProps) {
  const [categoriaActiva, setCategoriaActiva] = useState<'alcohol' | 'cervezas' | 'mezcla'>('alcohol');

  const categorias = [
    { key: 'alcohol' as const, label: 'Alcohol', productos: productosPorCategoria.alcohol },
    { key: 'cervezas' as const, label: 'Cervezas', productos: productosPorCategoria.cervezas },
    { key: 'mezcla' as const, label: 'Mezcla', productos: productosPorCategoria.mezcla },
  ];

  return (
    <div className="space-y-6">
      {/* Botones de categoría */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 px-4 pt-4">
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