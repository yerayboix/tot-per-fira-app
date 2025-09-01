"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { Menu, X, User, LogOut } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const { data: session, isPending } = authClient.useSession()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    { href: "/fira-onda-2025", label: "Fira d'Onda 2025" },
  ]

  return (
    <nav className={`${isScrolled
        ? 'fixed bg-white border-b border-gray-300'
        : 'absolute bg-white border-b border-gray-300'
      } top-0 left-0 right-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-[var(--primary-color)] font-khand font-bold text-4xl">TOT PER FIRA</span>
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
          </div>

          {/* Auth Buttons - Only on the right */}
          <div className="flex items-center">
            {isPending ? (
              <div className="w-20 h-9 bg-gray-600/20 rounded-md animate-pulse" />
            ) : session ? (
              <Button
                variant="subtle"
                size="sm"
                onClick={handleSignOut}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Cerrar Sesión
              </Button>
            ) : (
              <Button
                size="sm"
                variant="subtle"
                asChild
              >
                <Link href="/login">Login</Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-700 hover:bg-gray-100"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-white border-l border-gray-300 w-80 p-0"
              >
                <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                <div className="flex flex-col h-full p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between py-6 border-b border-gray-300">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                      <Image
                        src="/images/LOGO_Rectangular.svg"
                        alt="Tot Per Fira Logo"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                      <span className="text-[var(--primary-color)] font-bold text-xl">Tot Per Fira</span>
                    </Link>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex-1 py-8">
                    <div className="space-y-2">
                      {navigationLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block text-gray-700 hover:text-[var(--primary-color)] transition-all duration-200 font-medium text-lg py-3 px-4 rounded-lg hover:bg-gray-100"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Auth Section */}
                  <div className="border-t border-gray-300 pt-6">
                    {isPending ? (
                      <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse" />
                    ) : session ? (
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-[var(--primary-color)] font-medium text-sm">Sesión activa</p>
                          <p className="text-gray-800 font-medium">{session.user.name}</p>
                          <p className="text-gray-600 text-sm">{session.user.email}</p>
                        </div>
                        <Button
                          variant="subtle"
                          onClick={handleSignOut}
                          className="w-full"
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Cerrar Sesión
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <Button
                          variant="subtle"
                          asChild
                          className="w-full"
                          onClick={() => setIsOpen(false)}
                        >
                          <Link href="/login">
                            <User className="w-4 h-4 mr-2" />
                            Iniciar Sesión
                          </Link>
                        </Button>
                        <Button
                          variant="subtle"
                          asChild
                          className="w-full"
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