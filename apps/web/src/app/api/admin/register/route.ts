import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { user } from "@/lib/db/schema/auth";
import { eq } from "drizzle-orm";

// Configuración para runtime
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function HEAD(request: NextRequest) {
  const registrationEnabled = process.env.ENABLE_ADMIN_REGISTRATION === "true";
  
  if (!registrationEnabled) {
    return new NextResponse(null, { status: 403 });
  }
  
  return new NextResponse(null, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    // Verificar si el registro está habilitado
    const registrationEnabled = process.env.ENABLE_ADMIN_REGISTRATION === "true";
    
    if (!registrationEnabled) {
      return NextResponse.json(
        { error: "El registro de administradores está deshabilitado" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { name, email, password } = body;

    // Validaciones básicas
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "La contraseña debe tener al menos 8 caracteres" },
        { status: 400 }
      );
    }

    // Verificar si el usuario ya existe
    const existingUser = await db
      .select()
      .from(user)
      .where(eq(user.email, email))
      .limit(1);

    if (existingUser.length > 0) {
      return NextResponse.json(
        { error: "Ya existe un usuario con este email" },
        { status: 409 }
      );
    }

    // Crear usuario usando Better Auth
    const result = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
        role: "admin", // Establecer rol directamente
      }
    });

    if (!result) {
      throw new Error("Error al crear el usuario");
    }

    return NextResponse.json({
      success: true,
      message: "Administrador registrado exitosamente"
    });

  } catch (error) {
    console.error("Error en registro de admin:", error);
    
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
} 