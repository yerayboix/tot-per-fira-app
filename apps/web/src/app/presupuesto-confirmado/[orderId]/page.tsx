import { CheckCircle, ArrowLeft, Home } from "lucide-react";
import Button from "@/components/ui/retro-btn";
import Link from "next/link";

export default async function PedidoConfirmadoPage(props: { params: { orderId: string } }) {
  const { orderId } = await props.params;


  if (!orderId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] p-8 text-center">
          <div className="text-red-500 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold font-khand text-[var(--secondary-color)] mb-4">
            Error
          </h1>
          <p className="text-gray-600 font-clash-display mb-6">
            No se encontró información del presupuesto.
          </p>
          <Link href="/" className="w-full">
            <Button
              variant="default"
              size="md"
              className="w-full"
            >
              <Home size={16} className="mr-2" />
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4 pt-20">
      <div className="max-w-lg w-full bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] p-8 text-center">
        {/* Icono de éxito */}
        <div className="text-green-500 mb-6">
          <CheckCircle size={80} className="mx-auto" />
        </div>

        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold font-khand text-[var(--secondary-color)] mb-4">
          ¡Presupuesto Confirmado!
        </h1>

        {/* Mensaje de éxito */}
        <p className="text-lg font-clash-display text-gray-700 mb-6">
          Tu presupuesto ha sido creado exitosamente y lo hemos recibido correctamente.
        </p>

        {/* Número de presupuesto */}
        <div className="bg-[var(--complementary-color-pink)]/10 border-2 border-[var(--primary-color)] p-4 mb-6">
          <p className="text-sm font-clash-display text-gray-600 mb-1">
            Número de presupuesto:
          </p>
          <p className="text-xl font-bold font-khand text-[var(--primary-color)] break-all">
            {orderId}
          </p>
        </div>

        {/* Información adicional */}
        <div className="text-left bg-gray-50 border border-gray-200 p-4 mb-6 font-clash-display text-sm">
          <h3 className="font-bold text-[var(--secondary-color)] mb-2">¿Qué sigue ahora?</h3>
          <ul className="space-y-1 text-gray-600">
            <li>• Te contactaremos en las próximas 24 horas</li>
            <li>• Revisaremos tu presupuesto y confirmaremos disponibilidad</li>
            <li>• Te enviaremos un presupuesto final detallado</li>
            <li>• Coordinaremos la fecha y detalles de la entrega</li>
          </ul>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col gap-3">
          <Link href="/solicitar-presupuesto" className="flex-1">
            <Button
              variant="outline"
              size="md"
              className="w-full"
            >
              <ArrowLeft size={16} className="mr-2" />
              Nuevo Presupuesto
            </Button>
          </Link>
          <Link href="/" className="flex-1">
            <Button
              variant="default"
              size="md"
              className="w-full"
            >
              <Home size={16} className="mr-2" />
              Volver al Inicio
            </Button>
          </Link>
        </div>

        {/* Nota final */}
        <p className="text-xs text-gray-500 font-clash-display mt-6">
          Guarda este número de presupuesto para futuras consultas
        </p>
      </div>
    </div>
  );
} 