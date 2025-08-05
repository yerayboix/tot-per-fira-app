"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { Menu, X, User, LogOut } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { data: session, isPending } = authClient.useSession()

  const handleSignOut = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/")
          setIsOpen(false)
        },
      },
    })
  }

  const navigationLinks = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/productos", label: "Productos" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
              <span className="text-blue-900 font-bold text-sm">TF</span>
            </div>
            <span className="text-white font-bold text-xl">Tot per Fira</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-200 hover:text-lime-400 transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              {isPending ? (
                <div className="w-20 h-9 bg-gray-600/20 rounded-md animate-pulse" />
              ) : session ? (
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleSignOut}
                    className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-blue-900"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Cerrar Sesión
                  </Button>
                </div>
              ) : (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-blue-900"
                  >
                    <Link href="/login">
                      <User className="w-4 h-4 mr-2" />
                      Iniciar Sesión
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="bg-lime-500 hover:bg-lime-600 text-blue-900"
                  >
                    <Link href="/register">Registrarse</Link>
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-blue-900/95 backdrop-blur-md border-l border-white/20">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between py-4 border-b border-white/20">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                      <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
                        <span className="text-blue-900 font-bold text-sm">TF</span>
                      </div>
                      <span className="text-white font-bold text-xl">Tot per Fira</span>
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:bg-white/10"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex-1 py-6">
                    <div className="space-y-4">
                      {navigationLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block text-gray-200 hover:text-lime-400 transition-colors duration-200 font-medium text-lg py-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Auth Section */}
                  <div className="border-t border-white/20 pt-6">
                    {isPending ? (
                      <div className="w-full h-10 bg-gray-600/20 rounded-md animate-pulse" />
                    ) : session ? (
                      <div className="space-y-4">
                        <div className="text-gray-200 text-sm">
                          <p className="font-medium">Hola, {session.user.name}</p>
                          <p className="text-gray-400">{session.user.email}</p>
                        </div>
                        <Button
                          variant="outline"
                          onClick={handleSignOut}
                          className="w-full border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-blue-900"
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Cerrar Sesión
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <Button
                          variant="outline"
                          asChild
                          className="w-full border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-blue-900"
                          onClick={() => setIsOpen(false)}
                        >
                          <Link href="/login">
                            <User className="w-4 h-4 mr-2" />
                            Iniciar Sesión
                          </Link>
                        </Button>
                        <Button
                          asChild
                          className="w-full bg-lime-500 hover:bg-lime-600 text-blue-900"
                          onClick={() => setIsOpen(false)}
                        >
                          <Link href="/register">Registrarse</Link>
                        </Button>
                      </div>
                    )}
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