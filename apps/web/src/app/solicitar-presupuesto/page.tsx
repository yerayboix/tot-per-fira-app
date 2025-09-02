import PresupuestoForm from "@/components/presupuesto/PresupuestoForm";

export default function SolicitarPresupuestoPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative overflow-hidden border border-b-0 border-gray-300 container mx-auto">
        <div className="container mx-auto">
          <div className="p-4 border-b border-gray-300 text-center bg-[var(--complementary-color-pink)]/10">
            <h1 className="text-4xl md:text-8xl font-bold font-khand text-[var(--primary-color)]">
              SOLICITAR PRESUPUESTO
            </h1>
            <p className="text-lg text-[var(--secondary-color)] max-w-2xl mx-auto mt-4 font-clash-display">
              Completa el formulario paso a paso para recibir un presupuesto personalizado
              para tu evento. Puedes omitir las secciones que no necesites.
            </p>
          </div>
          
          <div className="border-b border-gray-300">
            <PresupuestoForm />
          </div>
        </div>
      </section>
    </div>
  );
}