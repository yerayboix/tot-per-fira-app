"server-only";

import { eq } from "drizzle-orm";
import { db } from "./index";
import { orders, orderItems, type NewOrder, type NewOrderItem } from "./schema/orders";

// Función simple para generar IDs
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

export async function createOrderInDB(orderData: {
  nombreCompleto: string;
  nombrePenya?: string;
  direccion: string;
  correoElectronico: string;
  numeroTelefono: string;
  segundoNumeroTelefono?: string;
  objetosPedido: Array<{
    nombre: string;
    unidades: number;
    precio?: number;
    categoria: "alcohol" | "cervezas" | "bebida" | "congelador" | "hielo" | "altavoces" | "pack_limpieza" | "pack_menaje" | "vasos";
  }>;
}) {
  const orderId = generateId();
  const now = new Date();
  
  // Calcular total estimado
  const totalEstimado = orderData.objetosPedido.reduce((total, item) => {
    return total + (item.precio || 0) * item.unidades;
  }, 0);

  // Crear el pedido
  const newOrder: NewOrder = {
    id: orderId,
    nombreCompleto: orderData.nombreCompleto,
    nombrePenya: orderData.nombrePenya,
    direccion: orderData.direccion,
    correoElectronico: orderData.correoElectronico,
    numeroTelefono: orderData.numeroTelefono,
    segundoNumeroTelefono: orderData.segundoNumeroTelefono,
    estado: "pendiente",
    totalEstimado: totalEstimado > 0 ? totalEstimado : null,
    fechaCreacion: now,
    fechaActualizacion: now,
  };


  await db.insert(orders).values(newOrder);

  // Crear los items del pedido
  const orderItemsData: NewOrderItem[] = orderData.objetosPedido.map(item => ({
    id: generateId(),
    orderId,
    nombre: item.nombre,
    unidades: item.unidades,
    precio: item.precio || null,
    categoria: item.categoria,
    fechaCreacion: now,
  }));

  await db.insert(orderItems).values(orderItemsData);

  return { orderId, totalEstimado };
}

export async function getOrderByIdFromDB(orderId: string) {
  const order = await db
    .select()
    .from(orders)
    .where(eq(orders.id, orderId))
    .limit(1);

  if (order.length === 0) {
    return null;
  }

  const items = await db
    .select()
    .from(orderItems)
    .where(eq(orderItems.orderId, orderId));

  return {
    order: order[0],
    items
  };
} 