"use server";

import { z } from "zod";
import { createOrderInDB, getOrderByIdFromDB } from "@/lib/db/orders";
import { type Presupuesto } from "@/types/presupuesto";

const createOrderSchema = z.object({
  nombreCompleto: z.string().min(1, "El nombre es obligatorio"),
  correoElectronico: z.string().email("Email inválido"),
  numeroTelefono: z.string().min(1, "El teléfono es obligatorio"),
  objetosPedido: z.array(z.object({
    nombre: z.string(),
    unidades: z.number().min(1),
    precio: z.number().optional(),
    categoria: z.enum(["alcohol", "cervezas", "bebida", "congelador", "hielo", "altavoces", "pack_limpieza", "pack_menaje", "vasos"])
  })).min(1, "Debe incluir al menos un producto")
});

export async function createOrder(presupuesto: Presupuesto) {
  try {
    // Validar los datos
    const validatedData = createOrderSchema.parse(presupuesto);
    
    // Crear el pedido en la base de datos
    const result = await createOrderInDB(validatedData);

    return {
      success: true,
      data: {
        orderId: result.orderId,
        totalEstimado: result.totalEstimado,
        message: "Pedido creado exitosamente"
      }
    };

  } catch (error) {
    console.error("Error creating order:", error);
    
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Datos inválidos: " + error.message
      };
    }
    
    return {
      success: false,
      error: "Error interno del servidor"
    };
  }
}

export async function getOrderById(orderId: string) {
  try {
    const result = await getOrderByIdFromDB(orderId);

    if (!result) {
      return {
        success: false,
        error: "Pedido no encontrado"
      };
    }

    return {
      success: true,
      data: result
    };
  } catch (error) {
    console.error("Error fetching order:", error);
    return {
      success: false,
      error: "Error al obtener el pedido"
    };
  }
} 