import { ChevronRight, PillBottle, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Services() {
  return (
    <section className="relative min-h-screen overflow-hidden border border-b-0 border-t-0 border-gray-300 container mx-auto">
      <div className="container mx-auto">
        <div className="p-4 border-b border-gray-300 text-center bg-[var(--complementary-color-pink)]/10">
          <h2 className="text-4xl md:text-8xl font-bold font-khand text-[var(--primary-color)]">¿QUÉ HACEMOS POR TI?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-4 border-b md:border-r border-gray-300">
            <ServiceCard step="01" title="Recibimos tu pedido" description="Una vez recibimos el fórmulario con tu pedido, te contactaremos para confirmar los detalles." />
          </div>
          <div className="p-4 border-b border-gray-300">
            <ServiceCard step="02" stepColor="text-[var(--complementary-color-green)]" title="Buscamos la mejor solución" description="Con el pedido confirmado, buscamos la mejor solución para ti, con el mejor precio y te pasamos el presupuesto." />
          </div>
          <div className="p-4 border-b md:border-r border-gray-300">
            <ServiceCard step="03" stepColor="text-[var(--complementary-color-turquoise)]" title="Entregamos y montamos" description="Si todo está bien y aceptas el presupuesto, te lo entregamos y montamos donde y cuando quieras." />
          </div>
          <div className="p-4 border-b border-gray-300">
            <ServiceCard step="04" stepColor="text-[var(--complementary-color-pink)]" title="Recogemos y desmontamos" description="Si has solicitado algún producto de alquiler, lo desmontamos y lo recogemos en el punto que nos indiques." />
          </div>
        </div>

        {/* Nueva sección de trato personalizado */}
        <div className="p-4 border-gray-300 mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-lg text-[var(--secondary-color)] mb-4 font-clash-display font-bold">NUESTRA MISIÓN</span>
              <h3 className="text-3xl md:text-6xl font-bold font-khand text-[var(--primary-color)] mb-4">
                Nos esforzamos en darte un trato personalizado
              </h3>
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                En Tot per Fira, creemos que cada cliente es único y merece una atención especial.
                Nos esforzamos al máximo para que el trato con cada uno de vosotros sea lo más cercano
                y personalizado posible. Siempre estamos disponibles para resolver cualquier duda que
                tengas, ya sea por teléfono, email o WhatsApp. Queremos que te sientas como en casa
                y que confíes plenamente en nosotros para hacer realidad tu evento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
      </div>
    </section>
  )
}

function ServiceCard({
  step,
  title,
  description,
  stepColor = "text-[var(--primary-color)]",
  titleColor = "text-[var(--secondary-color)]",
  descriptionColor = "text-gray-600"
}: {
  step: string,
  title: string,
  description: string,
  stepColor?: string,
  titleColor?: string,
  descriptionColor?: string
}) {
  return (
    <div className="p-4 border-gray-300">
      <h2 className={`text-2xl font-bold font-khand ${stepColor}`}>{step}.</h2>
      <h2 className={`text-5xl font-bold font-khand ${titleColor}`}>{title}</h2>
      <p className={descriptionColor}>{description}</p>
    </div>
  )
}
