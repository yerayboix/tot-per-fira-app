"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FrequentQuestions() {
  const faqs = [
    {
      question: "¿Quiénes somos?",
      answer: "Tot Per Fira es un proyecto impulsado por tres socios de Onda con amplia experiencia organizando fiestas populares. Trabajamos con más de 80 peñas de la zona y ofrecemos un servicio cercano, profesional y flexible."
    },
    {
      question: "¿Cómo trabajamos?",
      answer: "No tienes que preocuparte de nada, nos encargamos de todo: transporte, montaje, servicio y recogida. Adaptamos cada servicio a las necesidades del cliente. Próximamente, dispondremos de una web para facilitar la gestión de reservas."
    },
    {
      question: "¿A quién va dirigido?",
      answer: "• Peñas y asociaciones festivas.\n• Ayuntamientos y comisiones de fiestas.\n• Eventos de particulares.\n• Bares, locales y negocios que organizan vermuts, conciertos o celebraciones."
    },
    {
      question: "¿Dónde trabajamos?",
      answer: "Nuestra base está en Onda (Castellón), y actualmente ofrecemos servicio en localidades cercanas como Betxí, l' Alcora, Vila-Real, Nules, Tales, Artesa, Sueras, Fanzara y otras zonas del interior de Castellón."
    }
  ]

  return (
    <section className="relative overflow-hidden border border-b-0 border-t-0 border-gray-300 container mx-auto">
      <div className="container mx-auto">
        <div className="p-4 border-b border-gray-300 text-center bg-[var(--complementary-color-pink)]/10">
          <h2 className="text-4xl md:text-8xl font-bold font-khand text-[var(--primary-color)]">PREGUNTAS FRECUENTES</h2>
        </div>
        <div>
          <Accordion type="single" collapsible className="">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-300 last:border-b-0 p-4">
                <AccordionTrigger className="text-left py-6 hover:no-underline group cursor-pointer">
                  <h3 className="text-xl md:text-2xl font-bold font-khand text-[var(--secondary-color)] group-hover:text-[var(--primary-color)] transition-colors">
                    {faq.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="text-gray-600 leading-relaxed whitespace-pre-line text-md md:text-lg">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}