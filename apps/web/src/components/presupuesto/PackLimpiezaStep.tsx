"use client";

import { type LineaPresupuesto } from "@/types/presupuesto";
import { productosPorCategoria } from "@/data/productos";
import ProductSelector from "./ProductSelector";

interface PackLimpiezaStepProps {
  objetosPedido: LineaPresupuesto[];
  onAddProduct: (producto: LineaPresupuesto) => void;
  onRemoveProduct: (producto: LineaPresupuesto) => void;
}

export default function PackLimpiezaStep({ objetosPedido, onAddProduct, onRemoveProduct }: PackLimpiezaStepProps) {
  return (
    <ProductSelector
      productos={productosPorCategoria.pack_limpieza}
      categoria="pack_limpieza"
      objetosPedido={objetosPedido}
      onAddProduct={onAddProduct}
      onRemoveProduct={onRemoveProduct}
      titulo="Pack de Limpieza"
    />
  );
}
