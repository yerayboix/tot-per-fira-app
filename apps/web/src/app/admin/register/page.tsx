"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { UserPlus, Mail, Eye, EyeOff, Loader2, User, Lock } from "lucide-react";
import Button from "@/components/ui/retro-btn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

export default function AdminRegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async ({ value }) => {
      try {
        const response = await fetch("/api/admin/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: value.name,
            email: value.email,
            password: value.password,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          toast.success("¡Administrador registrado exitosamente!");
          router.push("/admin/login");
        } else {
          toast.error(result.error || "Error al registrar administrador");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error de conexión");
      }
    },
    validators: {
      onSubmit: registerSchema,
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] p-6 mb-6 text-center">
          <div className="text-[var(--primary-color)] mb-4">
            <UserPlus size={40} className="mx-auto" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold font-khand text-[var(--secondary-color)] mb-2">
            Registro de Administrador
          </h1>
          <p className="text-gray-600 font-clash-display text-sm">
            Crear nueva cuenta de administrador
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
            {/* Nombre */}
            <form.Field name="name">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-clash-display font-medium">
                    Nombre completo
                  </Label>
                  <div className="relative">
                    <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Juan Pérez"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="pl-10 border-2 border-gray-300 rounded-none shadow-[2px_2px_0px_0px_#000]"
                    />
                  </div>
                  {field.state.meta.errors && (
                    <p className="text-red-500 text-sm font-clash-display">
                      {field.state.meta.errors.map((error: any) => error.message).join(", ")}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

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
                  {field.state.meta.errors && (
                    <p className="text-red-500 text-sm font-clash-display">
                      {field.state.meta.errors.map((error: any) => error.message).join(", ")}
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
                  {field.state.meta.errors && (
                    <p className="text-red-500 text-sm font-clash-display">
                      {field.state.meta.errors.map((error: any) => error.message).join(", ")}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            {/* Confirmar contraseña */}
            <form.Field name="confirmPassword">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="font-clash-display font-medium">
                    Confirmar contraseña
                  </Label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="pl-10 pr-10 border-2 border-gray-300 rounded-none shadow-[2px_2px_0px_0px_#000]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {field.state.meta.errors && (
                    <p className="text-red-500 text-sm font-clash-display">
                      {field.state.meta.errors.map((error: any) => error.message).join(", ")}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            {/* Botón de envío */}
            <Button
              type="submit"
              disabled={form.state.isSubmitting}
              variant="default"
              size="lg"
              className="w-full mt-6"
            >
              {form.state.isSubmitting ? (
                <>
                  <Loader2 size={18} className="mr-2 animate-spin" />
                  Registrando...
                </>
              ) : (
                <>
                  <UserPlus size={18} className="mr-2" />
                  Registrar Administrador
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 space-y-2">
          <button
            onClick={() => router.push("/admin/login")}
            className="text-gray-600 hover:text-[var(--primary-color)] font-clash-display text-sm transition-colors"
          >
            ¿Ya tienes cuenta? Iniciar sesión
          </button>
          <br />
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