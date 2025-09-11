'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Settings, X } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface CookieConsent {
  analytics: boolean
  necessary: boolean
}

export default function CookiePreferencesButton() {
  const [showDialog, setShowDialog] = useState(false)
  const [consent, setConsent] = useState<CookieConsent>({
    analytics: false,
    necessary: true
  })

  const handleOpenPreferences = () => {
    // Load current consent
    const savedConsent = localStorage.getItem('cookie-consent')
    if (savedConsent) {
      try {
        const parsedConsent = JSON.parse(savedConsent)
        setConsent(parsedConsent)
      } catch {
        setConsent({ analytics: false, necessary: true })
      }
    }
    setShowDialog(true)
  }

  const handleAnalyticsChange = (checked: boolean) => {
    setConsent(prev => ({ ...prev, analytics: checked }))
  }

  const handleSaveSettings = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(consent))
    setShowDialog(false)
    
    // Trigger a storage event to notify ConditionalGoogleAnalytics
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'cookie-consent',
      newValue: JSON.stringify(consent)
    }))
  }

  const handleRejectAll = () => {
    const newConsent = { analytics: false, necessary: true }
    setConsent(newConsent)
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent))
    setShowDialog(false)
    
    // Trigger a storage event to notify ConditionalGoogleAnalytics
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'cookie-consent',
      newValue: JSON.stringify(newConsent)
    }))
  }

  const handleAcceptAll = () => {
    const newConsent = { analytics: true, necessary: true }
    setConsent(newConsent)
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent))
    setShowDialog(false)
    
    // Trigger a storage event to notify ConditionalGoogleAnalytics
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'cookie-consent',
      newValue: JSON.stringify(newConsent)
    }))
  }

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleOpenPreferences}
        className="text-white/80 hover:text-white transition-colors duration-300 text-xs flex items-center gap-1 bg-white/10 hover:bg-white/20 rounded px-2 py-1 font-khand"
      >
        <Settings className="w-3 h-3" />
        Cookies
      </Button>
      
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-[var(--secondary-color)] font-clash">
              <Settings className="w-5 h-5" />
              Configuración de Cookies
            </DialogTitle>
          </DialogHeader>
          
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
                Guardar configuración
              </Button>
              <Button
                size="sm"
                onClick={handleAcceptAll}
                className="flex items-center gap-2 bg-[var(--complementary-color-green)] hover:bg-[var(--complementary-color-green)]/90 text-white font-khand"
              >
                Aceptar todas
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
} 