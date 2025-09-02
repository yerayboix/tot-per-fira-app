"use client"

import { useState } from "react"
import Link from "next/link"
import Button from "@/components/ui/retro-btn"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationLinks = [
    { href: "/", label: "Inicio" },
    { href: "/fira-onda", label: "Fira d'Onda 2025" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-[var(--primary-color)] font-khand font-bold text-2xl md:text-4xl">TOT PER FIRA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-[var(--primary-color)] transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="md"
              >
                <Link href="/contacto">Contactar</Link>
              </Button>
              <Button
                size="md"
                variant="default"
              >
                <Link href="/presupuesto">Crear presupuesto</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile CTA Button */}
            <Button
              size="sm"
              variant="default"
            >
              <Link href="/presupuesto">Presupuesto</Link>
            </Button>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="md"
                  className="text-gray-700 hover:bg-gray-100"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-white border-l border-gray-200 w-80 p-0"
              >
                <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                <div className="flex flex-col h-full p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between py-6 border-b border-gray-200">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                      <span className="text-[var(--primary-color)] font-khand font-bold text-2xl">TOT PER FIRA</span>
                    </Link>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex-1 py-8">
                    <div className="space-y-2">
                      {navigationLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block text-gray-700 hover:text-[var(--primary-color)] transition-all duration-200 font-medium text-lg py-3 px-4 rounded-lg hover:bg-gray-50"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="space-y-3">
                      <Button
                        variant="default"
                        className="w-full"
                        onClick={() => setIsOpen(false)}
                      >
                        <Link href="/presupuesto">Crear presupuesto</Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => setIsOpen(false)}
                      >
                        <Link href="/contacto">Contactar</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}