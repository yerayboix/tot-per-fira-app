'use client'

import { useEffect, useState } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'

interface CookieConsent {
  analytics: boolean
  necessary: boolean
}

export default function ConditionalGoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null)

  useEffect(() => {
    // Check for existing consent
    const savedConsent = localStorage.getItem('cookie-consent')
    if (savedConsent) {
      try {
        const consent: CookieConsent = JSON.parse(savedConsent)
        setHasConsent(consent.analytics)
      } catch {
        setHasConsent(false)
      }
    } else {
      setHasConsent(false)
    }

    // Listen for consent changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookie-consent') {
        if (e.newValue) {
          try {
            const consent: CookieConsent = JSON.parse(e.newValue)
            setHasConsent(consent.analytics)
          } catch {
            setHasConsent(false)
          }
        } else {
          setHasConsent(false)
        }
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  // Don't render anything until we know the consent status
  if (hasConsent === null) {
    return null
  }

  // Only render Google Analytics if user has given consent
  return hasConsent ? <GoogleAnalytics gaId="G-RWT55MXBMN" /> : null
} 