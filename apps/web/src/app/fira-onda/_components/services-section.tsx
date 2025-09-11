import { Beer, Volume2, Lightbulb, Users, type LucideIcon } from "lucide-react"

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden border border-b-0 border-t-0 border-gray-300 container mx-auto">
      <div className="container mx-auto">
        <div className="p-4 border-b border-gray-300 text-center bg-[var(--complementary-color-green)]/10">
          <h2 className="text-4xl md:text-6xl font-bold font-khand text-[var(--primary-color)] mb-4">
            OFRECEMOS TODO LO QUE UNA PEÑA NECESITA
          </h2>
          <p className="text-lg md:text-xl font-clash-display">
            PARA ORGANIZAR LA FIRA D'ONDA
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 border-b md:border-r border-gray-300">
            <ServiceCard 
              icon={Beer} 
              title="BEBIDAS" 
              description="Cerveza, refrescos, agua... ¡toda la bebida que necesites!"
              color="text-[var(--primary-color)]"
            />
          </div>
          <div className="p-6 border-b border-gray-300">
            <ServiceCard 
              icon={Volume2} 
              title="SONIDO" 
              description="Altavoces de distintas potencias para que tu peña suene por toda la calle"
              color="text-[var(--complementary-color-green)]"
            />
          </div>
          <div className="p-6 border-b md:border-r border-gray-300">
            <ServiceCard 
              icon={Lightbulb} 
              title="CONGELADORES" 
              description="Congeladores, hielo, sacos de hielo... todo lo que necesites para mantener tus bebidas frías"
              color="text-[var(--complementary-color-turquoise)]"
            />
          </div>
          <div className="p-6 border-b border-gray-300">
            <ServiceCard 
              icon={Users} 
              title="TRANSPORTE" 
              description="Transporte de bebidas, hielo, sacos de hielo... lo llevamos todo directo a tu peña"
              color="text-[var(--complementary-color-pink)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  color = "text-[var(--primary-color)]"
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}) {
  return (
    <div className="p-4">
      <Icon className={`w-12 h-12 mb-4 ${color}`} />
      <h3 className={`text-2xl md:text-3xl font-bold font-khand ${color} mb-4`}>
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed font-clash-display">
        {description}
      </p>
    </div>
  )
}
