export interface LineaPresupuesto {
  nombre: string;
  unidades: number;
  precio?: number;
  categoria: 'alcohol' | 'cervezas' | 'mezcla' | 'congelador' | 'hielo' | 'altavoces' | 'pack_limpieza' | 'pack_menaje';
}

export interface Presupuesto {
  nombreCompleto: string;
  correoElectronico: string;
  numeroTelefono: string;
  objetosPedido: LineaPresupuesto[];
} 