import { Phone, Mail, Instagram, MapPin, MessageCircle } from "lucide-react"
import GlitchText from "@/components/ui/glitch-text"
import Button from "@/components/ui/retro-btn"
import Image from "next/image"
import Link from "next/link"

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden border border-b-0 border-gray-300 container mx-auto pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pexels-picjumbo-com-55570-196652.jpg"
            alt="Contact background"
            fill
            className="object-cover blur-[3px]"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 justify-center relative z-30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 text-center">
              <span className="text-md lg:text-xl font-semibold font-clash-display text-white">¿Tienes un evento en mente?</span>
            </div>
            <div className="mb-12 text-center">
              <GlitchText className="text-5xl lg:text-7xl text-white font-bold font-khand">
                CONTÁCTANOS
              </GlitchText>
            </div>
            <div className="mb-16 max-w-2xl mx-auto text-center">
              <p className="text-base lg:text-xl text-gray-200 leading-relaxed tracking-wider font-clash-display">
                Cuéntanos tu idea y nosotros la hacemos realidad. <br />
                <span className="text-white font-semibold">¡Respuesta garantizada en menos de 24h!</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <section className="relative overflow-hidden border border-gray-300 container mx-auto">
              <div className="p-4 border-b border-gray-300 text-center bg-[var(--complementary-color-green)]/10">
                <h2 className="text-3xl md:text-4xl font-bold font-khand text-[var(--primary-color)]">
                  INFORMACIÓN DE CONTACTO
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-clash-display text-lg text-[var(--secondary-color)]">Teléfono / WhatsApp</h3>
                    <a 
                      href="tel:616121597" 
                      className="text-[var(--primary-color)] text-lg font-semibold hover:underline"
                    >
                      616 121 597
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Lunes a Viernes: 9:00 - 20:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-clash-display text-lg text-[var(--secondary-color)]">Correo electrónico</h3>
                    <a 
                      href="mailto:totperfira@gmail.com" 
                      className="text-[var(--primary-color)] text-lg font-semibold hover:underline"
                    >
                      totperfira@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Respuesta en menos de 24h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-clash-display text-lg text-[var(--secondary-color)]">Instagram</h3>
                    <a 
                      href="https://instagram.com/totperfira" 
                      target="_blank"
                      className="text-[var(--primary-color)] text-lg font-semibold hover:underline"
                    >
                      @totperfira
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Síguenos para ver nuestros eventos</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-clash-display text-lg text-[var(--secondary-color)]">Ubicación</h3>
                    <p className="text-[var(--primary-color)] text-lg font-semibold">Onda, Castellón</p>
                    <p className="text-sm text-muted-foreground mt-1">Servicio en toda la Comunidad Valenciana</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Actions */}
            <section className="relative overflow-hidden border border-gray-300 container mx-auto">
              <div className="p-4 border-b border-gray-300 text-center bg-[var(--complementary-color-pink)]/10">
                <h2 className="text-3xl md:text-4xl font-bold font-khand text-[var(--primary-color)]">
                  CONTACTO RÁPIDO
                </h2>
              </div>
              <div className="p-6 space-y-4">
                <Link href="tel:616121597" className="block">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Llamar ahora
                  </Button>
                </Link>
                <Link href="https://wa.me/34616121597" target="_blank" className="block">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </Button>
                </Link>
                <Link href="mailto:totperfira@gmail.com" className="block">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Enviar email
                  </Button>
                </Link>
              </div>
            </section>
          </div>

          {/* Services and Info */}
          <div className="space-y-8">
            {/* Services */}
            <section className="relative overflow-hidden border border-gray-300 container mx-auto">
              <div className="p-4 border-b border-gray-300 text-center bg-[var(--complementary-color-yellow)]/10">
                <h2 className="text-3xl md:text-4xl font-bold font-khand text-[var(--primary-color)]">
                  NUESTROS SERVICIOS
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--primary-color)] text-xl">✓</span>
                    <span className="font-clash-display">Alquiler de altavoces</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--primary-color)] text-xl">✓</span>
                    <span className="font-clash-display">Congeladores y botelleros</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--primary-color)] text-xl">✓</span>
                    <span className="font-clash-display">Suministro de bebidas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--primary-color)] text-xl">✓</span>
                    <span className="font-clash-display">Grifos de cerveza</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--primary-color)] text-xl">✓</span>
                    <span className="font-clash-display">Packs de limpieza</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--primary-color)] text-xl">✓</span>
                    <span className="font-clash-display">Packs de menaje</span>
                  </div>
                </div>
              </div>
            </section>

            {/* About Us */}
            <section className="relative overflow-hidden border border-gray-300 container mx-auto">
              <div className="p-4 border-b border-gray-300 text-center bg-[var(--complementary-color-turquoise)]/10">
                <h2 className="text-3xl md:text-4xl font-bold font-khand text-[var(--primary-color)]">
                  SOBRE NOSOTROS
                </h2>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed font-clash-display">
                  <strong className="text-[var(--primary-color)]">Tot per Fira</strong> es tu servicio completo y fiable para la organización de fiestas y eventos.
                </p>
                <p className="text-gray-600 leading-relaxed font-clash-display">
                  Con más de <strong className="text-[var(--primary-color)]">10 años de experiencia</strong> en el sector, nos esforzamos en darte un trato personalizado y cercano.
                </p>
                <p className="text-gray-600 leading-relaxed font-clash-display">
                  Queremos que te sientas como en casa y que confíes plenamente en nosotros para hacer realidad tu evento.
                </p>
                <div className="bg-gray-50 p-4 border-l-4 border-[var(--primary-color)] mt-4">
                  <p className="text-gray-700 leading-relaxed font-clash-display">
                    <strong>¿Tienes dudas?</strong> Siempre estamos disponibles para resolver cualquier consulta que tengas, ya sea por teléfono, email o WhatsApp.
                  </p>
                </div>
              </div>
            </section>

            {/* Social Media */}
            <section className="relative overflow-hidden border border-gray-300 container mx-auto">
              <div className="p-4 border-b border-gray-300 text-center bg-[var(--complementary-color-green)]/10">
                <h2 className="text-3xl md:text-4xl font-bold font-khand text-[var(--primary-color)]">
                  SÍGUENOS
                </h2>
              </div>
              <div className="p-6">
                <div className="flex justify-center">
                  <Link 
                    href="https://instagram.com/totperfira" 
                    target="_blank"
                    className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg hover:border-[var(--primary-color)] transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-[var(--primary-color)]" />
                    <span className="font-clash-display font-semibold">@totperfira</span>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
