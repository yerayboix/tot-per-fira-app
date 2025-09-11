import Link from "next/link"
import { Phone, Mail, Instagram, MapPin, Clock } from "lucide-react"
import Button from "@/components/ui/retro-btn"
import CookiePreferencesButton from "@/components/analytics/cookie-preferences-button"

export function Footer() {
  return (
    <footer className="bg-[var(--secondary-color)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2">
              <span className="text-[var(--primary-color)] font-bold text-xl font-khand">TOT PER FIRA</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Servicio completo y fiable para la organización de fiestas y eventos. 
              Más de 10 años de experiencia en el sector.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://instagram.com/totperfira" 
                target="_blank"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[var(--primary-color)] font-khand">NUESTROS SERVICIOS</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>• Alquiler de altavoces</li>
              <li>• Congeladores y botelleros</li>
              <li>• Suministro de bebidas</li>
              <li>• Grifos de cerveza</li>
              <li>• Packs de limpieza</li>
              <li>• Packs de menaje</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[var(--primary-color)] font-khand">CONTACTO</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white/80" />
                <div>
                  <p className="text-white font-medium">Teléfono / WhatsApp</p>
                  <a 
                    href="tel:616121597" 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    616 121 597
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white/80" />
                <div>
                  <p className="text-white font-medium">Correo electrónico</p>
                  <a 
                    href="mailto:totperfira@gmail.com" 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    totperfira@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Instagram className="w-4 h-4 text-white/80" />
                <div>
                  <p className="text-white font-medium">Instagram</p>
                  <a 
                    href="https://instagram.com/totperfira" 
                    target="_blank"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    @totperfira
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold text-[var(--primary-color)] font-khand">¿NECESITAS AYUDA?</h3>
            <p className="text-white/80 text-sm">
              Si estás organizando una fiesta o evento y necesitas un servicio completo y fiable, 
              ponte en contacto con nosotros.
            </p>
            <div className="space-y-3">
              <Link href="tel:616121597" className="block">
                <Button 
                  variant="default" 
                  size="md" 
                  className="w-full"
                >
                  Llamar ahora
                </Button>
              </Link>
              <Link href="https://wa.me/34616121597" target="_blank" className="block">
                <Button 
                  variant="outlinewhite" 
                  size="md" 
                  className="w-full"
                >
                  WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Tot Per Fira. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">
                Inicio
              </Link>
              <Link href="/fira-onda" className="text-white/60 hover:text-white transition-colors">
                Fira d'Onda 2025
              </Link>
              <Link href="/politica-privacidad" className="text-white/60 hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <CookiePreferencesButton />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
