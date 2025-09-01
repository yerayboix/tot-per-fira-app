import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden border border-b-0 border-t-0 border-gray-300 container mx-auto">
      <div className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-lg text-[var(--secondary-color)] mb-4 font-clash-display font-bold">DÉJALO EN NUESTRAS MANOSY LLÉVATE TODO EL MÉRITO</span>
            <h3 className="text-4xl md:text-6xl font-bold font-khand text-[var(--primary-color)] mb-4">
              Sabemos mejor que nadie el coñazo de organizarlo todo
            </h3>
          </div>
          <div>
            <div className="space-y-6">
              
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="xl"
                variant="primary-brand"
              >
                Solicitar Presupuesto
              </Button>
              <Button
                variant="secondary-brand"
                size="xl"
              >
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 