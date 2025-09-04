"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { Lock, Mail, Eye, EyeOff, Loader2 } from "lucide-react";
import Button from "@/components/ui/retro-btn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import type { Session } from "@/types/auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [registrationEnabled, setRegistrationEnabled] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { data: session, isPending: isSessionLoading } = authClient.useSession();

  // Declarar useForm ANTES de cualquier return condicional
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      setIsLoggingIn(true);
      try {
        await authClient.signIn.email(
          {
            email: value.email,
            password: value.password,
          },
          {
            onSuccess: async () => {
              // Después del login exitoso, obtener la sesión actualizada
              const { data: currentSession } = await authClient.getSession();
              
              if (currentSession?.user && (currentSession.user as any).role === "admin") {
                toast.success("Acceso de administrador confirmado");
                router.push("/admin/consultar-presupuesto");
              } else {
                toast.error("Acceso denegado: Se requieren permisos de administrador");
                try {
                  await authClient.signOut();
                } catch (error) {
                  console.error("Error al cerrar sesión:", error);
                }
              }
              setIsLoggingIn(false);
            },
            onError: (error) => {
              toast.error(error.error.message || "Error de autenticación");
              setIsLoggingIn(false);
            },
          },
        );
      } catch (error) {
        console.error("Error durante el login:", error);
        toast.error("Error inesperado durante el login");
        setIsLoggingIn(false);
      }
    },
    validators: {
      onSubmit: z.object({
        email: z.string().email("Email inválido"),
        password: z.string().min(1, "La contraseña es obligatoria"),
      }),
    },
  });

  // Verificar si el registro está habilitado
  useEffect(() => {
    fetch("/api/admin/register", { method: "HEAD" })
      .then(response => {
        setRegistrationEnabled(response.status !== 403);
      })
      .catch(() => {
        setRegistrationEnabled(false);
      });
  }, []);

  // Si ya está autenticado, redirigir según el rol
  useEffect(() => {
    if (session?.user && !isSessionLoading) {
      if ((session as Session).user.role === "admin") {
        router.push("/admin/consultar-presupuesto");
      } else {
        router.push("/");
      }
    }
  }, [session, isSessionLoading, router]);

  // Mostrar loading mientras se verifica la sesión
  if (isSessionLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
        <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] p-8 text-center">
          <Loader2 size={40} className="animate-spin mx-auto text-[var(--primary-color)]" />
          <p className="mt-4 font-clash-display text-gray-600">Verificando sesión...</p>
        </div>
      </div>
    );
  }

  // Si ya está autenticado, no mostrar el formulario (se redirigirá)
  if (session?.user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] p-6 mb-6 text-center">
          <div className="text-[var(--primary-color)] mb-4">
            <Lock size={40} className="mx-auto" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold font-khand text-[var(--secondary-color)] mb-2">
            Acceso de Administrador
          </h1>
          <p className="text-gray-600 font-clash-display text-sm">
            Solo personal autorizado puede acceder a esta área
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] p-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
            className="space-y-4"
          >
            {/* Email */}
            <form.Field name="email">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-clash-display font-medium">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@empresa.com"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="pl-10 border-2 border-gray-300 rounded-none shadow-[2px_2px_0px_0px_#000]"
                    />
                  </div>
                  {field.state.meta.errors && field.state.meta.errors.length > 0 && (
                    <p className="text-red-500 text-sm font-clash-display">
                      {typeof field.state.meta.errors[0] === 'string' 
                        ? field.state.meta.errors[0] 
                        : field.state.meta.errors[0]?.message || 'Error de validación'}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            {/* Contraseña */}
            <form.Field name="password">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor="password" className="font-clash-display font-medium">
                    Contraseña
                  </Label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="pl-10 pr-10 border-2 border-gray-300 rounded-none shadow-[2px_2px_0px_0px_#000]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {field.state.meta.errors && field.state.meta.errors.length > 0 && (
                    <p className="text-red-500 text-sm font-clash-display">
                      {typeof field.state.meta.errors[0] === 'string' 
                        ? field.state.meta.errors[0] 
                        : field.state.meta.errors[0]?.message || 'Error de validación'}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            {/* Botón de envío */}
            <Button
              type="submit"
              disabled={isLoggingIn || form.state.isSubmitting}
              variant="default"
              size="lg"
              className="w-full mt-6"
            >
              {isLoggingIn || form.state.isSubmitting ? (
                <>
                  <Loader2 size={18} className="mr-2 animate-spin" />
                  Verificando acceso...
                </>
              ) : (
                <>
                  <Lock size={18} className="mr-2" />
                  Acceder
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 space-y-2">
          {registrationEnabled && (
            <>
              <button
                onClick={() => router.push("/admin/register")}
                className="text-gray-600 hover:text-[var(--primary-color)] font-clash-display text-sm transition-colors"
              >
                ¿No tienes cuenta? Registrarse
              </button>
              <br />
            </>
          )}
          <button
            onClick={() => router.push("/")}
            className="text-gray-600 hover:text-[var(--primary-color)] font-clash-display text-sm transition-colors"
          >
            ← Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
} 