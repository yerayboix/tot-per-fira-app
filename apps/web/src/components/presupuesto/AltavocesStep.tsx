"use client";

import { type LineaPresupuesto } from "@/types/presupuesto";
import { productosPorCategoria } from "@/data/productos";
import ProductSelector from "./ProductSelector";

interface AltavocesStepProps {
  objetosPedido: LineaPresupuesto[];
  onAddProduct: (producto: LineaPresupuesto) => void;
  onRemoveProduct: (producto: LineaPresupuesto) => void;
}

export default function AltavocesStep({ objetosPedido, onAddProduct, onRemoveProduct }: AltavocesStepProps) {
  return (
    <ProductSelector
      productos={productosPorCategoria.altavoces}
      categoria="altavoces"
      objetosPedido={objetosPedido}
      onAddProduct={onAddProduct}
      onRemoveProduct={onRemoveProduct}
      titulo="Altavoces"
    />
  );
}
