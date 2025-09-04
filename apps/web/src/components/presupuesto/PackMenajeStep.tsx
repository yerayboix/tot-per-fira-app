"use client";

import { useState } from "react";
import Button from "@/components/ui/retro-btn";
import { type LineaPresupuesto } from "@/types/presupuesto";
import { productosPorCategoria } from "@/data/productos";
import ProductSelector from "./ProductSelector";


interface PackMenajeStepProps {
  objetosPedido: LineaPresupuesto[];
  onAddProduct: (producto: LineaPresupuesto) => void;
  onRemoveProduct: (producto: LineaPresupuesto) => void;
}

export default function PackMenajeStep({ objetosPedido, onAddProduct, onRemoveProduct }: PackMenajeStepProps) {
  const [categoriaActiva, setCategoriaActiva] = useState<'pack_menaje' | 'vasos'>('pack_menaje');


  const categorias = [
    { key: 'pack_menaje' as const, label: 'Pack de Menaje', productos: productosPorCategoria.pack_menaje },
    { key: 'vasos' as const, label: 'Vasos', productos: productosPorCategoria.vasos },
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