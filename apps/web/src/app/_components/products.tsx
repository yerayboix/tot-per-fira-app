import { Speaker, Refrigerator, type LucideIcon, Utensils, BrushCleaning, Barrel, GlassWater } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Products() {
  return (
    
    <section className="relative overflow-hidden border border-t-0 border-gray-300 container mx-auto">
      <div className="container mx-auto">
        <div className="p-4 border-b border-gray-300 text-center bg-[var(--complementary-color-yellow)]/10">
          <h2 className="text-4xl md:text-8xl font-bold font-khand text-[var(--primary-color)]">¿QUÉ SERVICIOS OFRECEMOS?</h2>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <ProductCard
              title="ALTAVOCES"
              description="Alquiler de sistemas de sonido de diferentes potencias para todo tipo de eventos"
              icon={Speaker}
              bgColor="bg-lime-400"
              iconColor="text-[var(--primary-color)]"
              textColor="text-[var(--primary-color)]"
            />
            <ProductCard
              title="CONGELADORES"
              description="Alquiler de congeladores (con o sin hielo) y botelleros"
              icon={Refrigerator}
              bgColor="bg-pink-400"
              iconColor="text-[var(--complementary-color-yellow)]"
              textColor="text-[var(--complementary-color-yellow)]"
            />
            <ProductCard
              title="BEBIDAS"
              description="Suministro de bebidas alcohólicas y refrescos"
              icon={GlassWater}
              bgColor="bg-teal-400"
              iconColor="text-[var(--secondary-color)]"
              textColor="text-[var(--secondary-color)]"
            />
            <ProductCard
              title="CERVEZA"
              description="Alquiler de grifos de cerveza y venta de barriles"
              icon={Barrel}
              bgColor="bg-[var(--secondary-color)]"
              iconColor="text-[var(--primary-color)]"
              textColor="text-[var(--primary-color)]"
              descriptionColor="text-white"
            />
            <ProductCard
              title="PACKS DE LIMPIEZA"
              description="Venta de packs de limpieza para eventos"
              icon={BrushCleaning}
              bgColor="bg-[var(--primary-color)]"
              iconColor="text-[var(--secondary-color)]"
              textColor="text-[var(--secondary-color)]"
            />
            <ProductCard
              title="PACKS DE MENAJE"
              description="Venta de packs de menaje para eventos"
              icon={Utensils}
              bgColor="bg-[var(--complementary-color-yellow)]"
              iconColor="text-[var(--primary-color)]"
              textColor="text-[var(--primary-color)]"
            />
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="p-8 border-t border-gray-300 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-bold font-khand text-[var(--primary-color)] mb-6">
              ¿Te interesa alguno de nuestros servicios?
            </h3>
            <p className="text-md md:text-lg text-muted-foreground mb-8 leading-relaxed">
              No dudes en contactarnos para solicitar un presupuesto personalizado o resolver cualquier duda que tengas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

function ProductCard({
  title,
  description,
  icon: Icon,
  bgColor = "bg-green-400",
  iconColor = "text-pink-500",
  textColor = "text-pink-500",
  descriptionColor = "text-gray-800"
}: {
  title: string,
  description: string,
  icon: LucideIcon,
  bgColor?: string,
  iconColor?: string,
  textColor?: string,
  descriptionColor?: string
}) {
  return (
    <div className={`${bgColor} p-8 text-center min-h-[500px] flex flex-col items-center justify-center`}>
      <Icon className={`w-30 h-30 mb-6 ${iconColor}`} />
      <h2 className={`text-5xl md:text-7xl font-bold font-khand mb-4 ${textColor}`}>{title}</h2>
      <p className={`text-lg ${descriptionColor}`}>{description}</p>
    </div>
  )
}