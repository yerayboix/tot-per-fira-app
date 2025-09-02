"use client";

import { type LineaPresupuesto } from "@/types/presupuesto";
import { productosPorCategoria } from "@/data/productos";
import ProductSelector from "./ProductSelector";

interface PackMenajeStepProps {
  objetosPedido: LineaPresupuesto[];
  onAddProduct: (producto: LineaPresupuesto) => void;
  onRemoveProduct: (producto: LineaPresupuesto) => void;
}

export default function PackMenajeStep({ objetosPedido, onAddProduct, onRemoveProduct }: PackMenajeStepProps) {
  return (
    <ProductSelector
      productos={productosPorCategoria.pack_menaje}
      categoria="pack_menaje"
      objetosPedido={objetosPedido}
      onAddProduct={onAddProduct}
      onRemoveProduct={onRemoveProduct}
      titulo="Packs de Menaje"
    />
  );
}