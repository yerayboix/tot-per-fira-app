import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Manejar ruta de registro
  if (pathname === "/admin/register") {
    const registrationEnabled = process.env.ENABLE_ADMIN_REGISTRATION === "true";
    
    if (!registrationEnabled) {
      // Si el registro está deshabilitado, redirigir al login
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
    
    // Si está habilitado, permitir acceso
    return NextResponse.next();
  }
  
  // Para otras rutas admin protegidas (excepto login)
  try {
    // Usar el helper oficial de Better Auth para verificar cookies de sesión
    const sessionCookie = getSessionCookie(request);
    
    // Si no hay cookie de sesión, redirigir al login
    if (!sessionCookie) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    // Permitir el acceso - la verificación de rol se hará en el cliente
    return NextResponse.next();
  } catch (error) {
    console.error("Error en middleware:", error);
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Aplicar middleware a rutas /admin que NO sean /admin/login
     * Incluye /admin/register para controlar su acceso
     */
    "/admin/((?!login).*)",
  ],
}; 