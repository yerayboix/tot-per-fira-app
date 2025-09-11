'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { X, Cookie, Shield, Settings } from 'lucide-react'
import Link from 'next/link'

interface CookieConsent {
  analytics: boolean
  necessary: boolean
}

interface CookieBannerProps {
  forceShow?: boolean
  onClose?: () => void
}

export default function CookieBanner({ forceShow = false, onClose }: CookieBannerProps) {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState<CookieConsent>({
    analytics: false,
    necessary: true
  })

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem('cookie-consent')
    if (!savedConsent || forceShow) {
      setShowBanner(true)
    } else {
      const parsedConsent = JSON.parse(savedConsent)
      setConsent(parsedConsent)
    }
  }, [forceShow])

  const handleAcceptAll = () => {
    const newConsent = { analytics: true, necessary: true }
    setConsent(newConsent)
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent))
    setShowBanner(false)
    onClose?.()
    // Trigger a storage event to notify ConditionalGoogleAnalytics
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'cookie-consent',
      newValue: JSON.stringify(newConsent)
    }))
  }

  const handleRejectAll = () => {
    const newConsent = { analytics: false, necessary: true }
    setConsent(newConsent)
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent))
    setShowBanner(false)
    onClose?.()
    // Trigger a storage event to notify ConditionalGoogleAnalytics
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'cookie-consent',
      newValue: JSON.stringify(newConsent)
    }))
  }

  const handleCustomSettings = () => {
    setShowDetails(true)
  }

  const handleSaveSettings = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(consent))
    setShowBanner(false)
    setShowDetails(false)
    onClose?.()
    
    // Trigger a storage event to notify ConditionalGoogleAnalytics
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'cookie-consent',
      newValue: JSON.stringify(consent)
    }))
  }

  const handleAnalyticsChange = (checked: boolean) => {
    setConsent(prev => ({ ...prev, analytics: checked }))
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto p-4">
        {!showDetails ? (
          // Main banner
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="w-6 h-6 text-[var(--primary-color)] mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-bold text-[var(--secondary-color)] mb-2 font-clash">
                  Utilizamos cookies para mejorar tu experiencia
                </h3>
                <p className="text-sm text-gray-600 mb-3 font-khand">
                  Utilizamos cookies técnicas necesarias para el funcionamiento del sitio y cookies de análisis 
                  para entender cómo utilizas nuestra web. Puedes aceptar todas las cookies o configurar tus preferencias.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                  <Link href="/politica-de-cookies" className="text-[var(--primary-color)] hover:underline font-khand">
                    Política de Cookies
                  </Link>
                  <span>•</span>
                  <Link href="/politica-privacidad" className="text-[var(--primary-color)] hover:underline font-khand">
                    Política de Privacidad
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCustomSettings}
                className="flex items-center gap-2 border-[var(--secondary-color)] text-[var(--secondary-color)] hover:bg-[var(--secondary-color)] hover:text-white font-khand"
              >
                <Settings className="w-4 h-4" />
                Configurar
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRejectAll}
                className="flex items-center gap-2 border-gray-300 text-gray-600 hover:bg-gray-100 font-khand"
              >
                <X className="w-4 h-4" />
                Rechazar
              </Button>
              <Button
                size="sm"
                onClick={handleAcceptAll}
                className="flex items-center gap-2 bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/90 text-white font-khand"
              >
                <Shield className="w-4 h-4" />
                Aceptar todas
              </Button>
            </div>
          </div>
                 ) : (
           // Detailed settings
           <div className="space-y-4">
             <div className="flex items-center justify-between">
               <h3 className="font-bold text-[var(--secondary-color)] font-clash">Configuración de cookies</h3>
               <div className="flex gap-2">
                 {onClose && (
                   <Button
                     variant="ghost"
                     size="sm"
                     onClick={onClose}
                     className="text-gray-500 hover:text-[var(--secondary-color)]"
                   >
                     <X className="w-4 h-4" />
                   </Button>
                 )}
                 <Button
                   variant="ghost"
                   size="sm"
                   onClick={() => setShowDetails(false)}
                   className="text-gray-500 hover:text-[var(--secondary-color)]"
                 >
                   <X className="w-4 h-4" />
                 </Button>
               </div>
             </div>
            
            <div className="space-y-4">
              {/* Necessary cookies - always enabled */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex-1">
                  <h4 className="font-bold text-[var(--secondary-color)] font-clash">Cookies necesarias</h4>
                  <p className="text-sm text-gray-600 font-khand">
                    Cookies técnicas esenciales para el funcionamiento del sitio web.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={consent.necessary}
                    disabled
                    className="w-4 h-4 text-[var(--primary-color)] bg-gray-100 border-gray-300 rounded focus:ring-[var(--primary-color)]"
                  />
                </div>
              </div>

              {/* Analytics cookies */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex-1">
                  <h4 className="font-bold text-[var(--secondary-color)] font-clash">Cookies de análisis</h4>
                  <p className="text-sm text-gray-600 font-khand">
                    Google Analytics nos ayuda a entender cómo utilizas nuestro sitio web para mejorarlo.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={consent.analytics}
                    onChange={(e) => handleAnalyticsChange(e.target.checked)}
                    className="w-4 h-4 text-[var(--primary-color)] bg-gray-100 border-gray-300 rounded focus:ring-[var(--primary-color)]"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-gray-200">
              <Button
                variant="outline"
                size="sm"
                onClick={handleRejectAll}
                className="flex items-center gap-2 border-gray-300 text-gray-600 hover:bg-gray-100 font-khand"
              >
                <X className="w-4 h-4" />
                Rechazar todas
              </Button>
              <Button
                size="sm"
                onClick={handleSaveSettings}
                className="flex items-center gap-2 bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/90 text-white font-khand"
              >
                <Shield className="w-4 h-4" />
                Guardar configuración
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 