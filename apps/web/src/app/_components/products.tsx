"use client"

import { PillBottle, type LucideIcon } from "lucide-react"

export function Products() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="p-4 text-center py-12 bg-[var(--secondary-color)]/10">
          <h2 className="text-4xl md:text-8xl font-bold font-khand text-[var(--primary-color)]">¿QUÉ PRODUCTOS OFRECEMOS?</h2>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <ProductCard
              title="HIELOS"
              description="Hielo para eventos y fiestas"
              icon={PillBottle}
              bgColor="bg-lime-400"
              iconColor="text-[var(--primary-color)]"
              textColor="text-[var(--primary-color)]"
            />
            <ProductCard
              title="NEVERAS"
              description="Neveras y refrigeradores"
              icon={PillBottle}
              bgColor="bg-pink-400"
              iconColor="text-[var(--complementary-color-yellow)]"
              textColor="text-[var(--complementary-color-yellow)]"
            />
            <ProductCard
              title="BEBIDAS"
              description="Bebidas y refrescos"
              icon={PillBottle}
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
      <Icon className={`w-20 h-20 mb-6 ${iconColor}`} />
      <h2 className={`text-7xl font-bold font-khand mb-4 ${textColor}`}>{title}</h2>
      <p className="text-gray-800 text-lg">{description}</p>
    </div>
  )
}