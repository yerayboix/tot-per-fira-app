import { PillBottle, Speaker, Refrigerator, Beer, type LucideIcon } from "lucide-react"

export function Products() {
  return (
    <section className="relative overflow-hidden border border-b-0 border-t-0 border-gray-300 container mx-auto">
      <div className="container mx-auto">
        <div className="p-4 border-b border-gray-300 text-center bg-[var(--complementary-color-yellow)]/10">
          <h2 className="text-4xl md:text-8xl font-bold font-khand text-[var(--primary-color)]">¿QUÉ PRODUCTOS OFRECEMOS?</h2>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <ProductCard
              title="ALTAVOCES"
              description="Altavoces para eventos y fiestas"
              icon={Speaker}
              bgColor="bg-lime-400"
              iconColor="text-[var(--primary-color)]"
              textColor="text-[var(--primary-color)]"
            />
            <ProductCard
              title="NEVERAS"
              description="Neveras y refrigeradores"
              icon={Refrigerator}
              bgColor="bg-pink-400"
              iconColor="text-[var(--complementary-color-yellow)]"
              textColor="text-[var(--complementary-color-yellow)]"
            />
            <ProductCard
              title="BEBIDAS"
              description="Bebidas y refrescos"
              icon={Beer}
              bgColor="bg-teal-400"
              iconColor="text-[var(--secondary-color)]"
              textColor="text-[var(--secondary-color)]"
            />
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
  textColor = "text-pink-500"
}: {
  title: string,
  description: string,
  icon: LucideIcon,
  bgColor?: string,
  iconColor?: string,
  textColor?: string
}) {
  return (
    <div className={`${bgColor} p-8 text-center min-h-[500px] flex flex-col items-center justify-center`}>
      <Icon className={`w-30 h-30 mb-6 ${iconColor}`} />
      <h2 className={`text-5xl md:text-7xl font-bold font-khand mb-4 ${textColor}`}>{title}</h2>
      <p className="text-gray-800 text-lg">{description}</p>
    </div>
  )
}