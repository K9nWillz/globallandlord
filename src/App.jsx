import React, { useEffect, useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProperties from './components/FeaturedProperties'
import WhyChooseUs from './components/WhyChooseUs'
import DiscoverProperties from './components/DiscoverProperties'
import Agents from './components/Agents'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import LoginModal from './components/LoginModal'
import PropertyModal from './components/PropertyModal'
import ContactModal from './components/ContactModal'
import AllLandsPage from './components/AllLandsPage'
import TermsOfServicePage from './components/TermsOfServicePage'
import PrivacyPolicyPage from './components/PrivacyPolicyPage'
import { properties } from './data/listings'

export default function App() {
  const [currentView, setCurrentView] = useState('home') // 'home' | 'all-lands' | 'terms' | 'privacy'
  const [loginOpen, setLoginOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [toastMessage, setToastMessage] = useState('')

  // Favorites state persisted in localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('globallandlord_favorites')
      if (saved) {
        const parsed = JSON.parse(saved)
        return new Set(Array.isArray(parsed) ? parsed : [])
      }
    } catch (e) {
      console.warn('Could not read favorites from localStorage')
    }
    return new Set()
  })

  // Toast notification helper
  const showToast = useCallback((msg) => {
    setToastMessage(msg)
    const timer = setTimeout(() => {
      setToastMessage('')
    }, 2800)
    return () => clearTimeout(timer)
  }, [])

  // Favorite toggle handler
  const handleToggleFavorite = useCallback((property) => {
    if (!property) return
    setFavorites((prev) => {
      const next = new Set(prev)
      const isFav = next.has(property.id)
      if (isFav) {
        next.delete(property.id)
        showToast(`Removed "${property.title}" from favorites`)
      } else {
        next.add(property.id)
        showToast(`❤️ Added "${property.title}" to saved favorites!`)
      }
      try {
        localStorage.setItem('globallandlord_favorites', JSON.stringify(Array.from(next)))
      } catch (e) {
        console.warn('Could not save favorites to localStorage')
      }
      return next
    })
  }, [showToast])

  // Share handler
  const handleShare = useCallback(async (property) => {
    if (!property) return
    const targetSlug = property.slug || property.id
    const shareUrl = `${window.location.origin}${window.location.pathname}#property=${targetSlug}`

    const shareData = {
      title: `${property.title} | GlobalLandlord`,
      text: `Check out ${property.title} (${property.address || ''}) for ${property.price} on GlobalLandlord!`,
      url: shareUrl,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
        showToast('Shared successfully! 🚀')
        return
      } catch (err) {
        if (err.name === 'AbortError') {
          return // User cancelled
        }
      }
    }

    // Fallback: Copy to clipboard
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(shareUrl)
      } else {
        const textArea = document.createElement('textarea')
        textArea.value = shareUrl
        textArea.style.position = 'fixed'
        textArea.style.opacity = '0'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
      }
      showToast('Link copied to clipboard! 📋')
    } catch (err) {
      showToast('Could not copy link.')
    }
  }, [showToast])

  // Hash router
  useEffect(() => {
    const handleUrlTarget = () => {
      const hash = window.location.hash || ''

      // Check property modal hash
      if (hash.includes('property=')) {
        const idOrSlug = hash.split('property=')[1]
        const matched = properties.find(
          (property) =>
            String(property.id) === idOrSlug ||
            property.slug === idOrSlug
        )
        if (matched) {
          setSelectedProperty(matched)
        }
        return
      }

      // Check view hashes
      if (hash === '#all-lands' || hash === '#lands') {
        setCurrentView('all-lands')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#terms') {
        setCurrentView('terms')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#privacy') {
        setCurrentView('privacy')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#home' || hash === '' || hash === '#listings' || hash === '#agents' || hash === '#contact') {
        setCurrentView('home')
      }
    }

    handleUrlTarget()
    window.addEventListener('hashchange', handleUrlTarget)

    return () => {
      window.removeEventListener('hashchange', handleUrlTarget)
    }
  }, [])

  const goToHome = () => {
    window.location.hash = '#home'
    setCurrentView('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openAllLands = () => {
    window.location.hash = '#all-lands'
    setCurrentView('all-lands')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openTerms = () => {
    window.location.hash = '#terms'
    setCurrentView('terms')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openPrivacy = () => {
    window.location.hash = '#privacy'
    setCurrentView('privacy')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openLogin = () => setLoginOpen(true)
  const closeLogin = () => setLoginOpen(false)
  const openContact = () => setContactOpen(true)
  const closeContact = () => setContactOpen(false)
  const selectProperty = (property) => setSelectedProperty(property)
  const closeProperty = () => setSelectedProperty(null)

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full text-ink font-body">

      {/* Floating Global Action Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl shadow-2xl border border-gray-700 flex items-center gap-2 animate-fade-in transition-all">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* VIEW: All Lands Catalog */}
      {currentView === 'all-lands' && (
        <AllLandsPage
          onGoHome={goToHome}
          onSelectProperty={selectProperty}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onShare={handleShare}
          onOpenContact={openContact}
          onOpenTerms={openTerms}
          onOpenPrivacy={openPrivacy}
        />
      )}

      {/* VIEW: Terms of Service */}
      {currentView === 'terms' && (
        <TermsOfServicePage
          onGoHome={goToHome}
          onOpenContact={openContact}
          onOpenAllLands={openAllLands}
          onOpenPrivacy={openPrivacy}
        />
      )}

      {/* VIEW: Privacy Policy */}
      {currentView === 'privacy' && (
        <PrivacyPolicyPage
          onGoHome={goToHome}
          onOpenContact={openContact}
          onOpenAllLands={openAllLands}
          onOpenTerms={openTerms}
        />
      )}

      {/* VIEW: Home View (Original Layout Preserved) */}
      {currentView === 'home' && (
        <>
          {/* ==================== NAVBAR ==================== */}
          <Navbar
            onOpenLogin={openLogin}
            onOpenContact={openContact}
            onOpenAllLands={openAllLands}
            onGoHome={goToHome}
            currentView={currentView}
          />

          {/* ==================== HERO ==================== */}
          <Hero />

          {/* ==================== FEATURED PROPERTIES ==================== */}
          <FeaturedProperties
            onSelectProperty={selectProperty}
            onViewAllLands={openAllLands}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onShare={handleShare}
          />

          {/* ==================== WHY CHOOSE US ==================== */}
          <WhyChooseUs />

          {/* ==================== DISCOVER PROPERTIES ==================== */}
          <DiscoverProperties
            onSelectProperty={selectProperty}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onShare={handleShare}
          />

          {/* ==================== AGENTS ==================== */}
          <Agents />

          {/* ==================== TESTIMONIALS ==================== */}
          <Testimonials />

          {/* ==================== FOOTER ==================== */}
          <Footer
            onOpenContact={openContact}
            onOpenTerms={openTerms}
            onOpenPrivacy={openPrivacy}
            onOpenAllLands={openAllLands}
            onGoHome={goToHome}
          />
        </>
      )}

      {/* ==================== LOGIN MODAL ==================== */}
      <LoginModal
        open={loginOpen}
        onClose={closeLogin}
      />

      {/* ==================== PROPERTY MODAL ==================== */}
      <PropertyModal
        property={selectedProperty}
        onClose={closeProperty}
        isFavorite={selectedProperty ? favorites.has(selectedProperty.id) : false}
        onToggleFavorite={handleToggleFavorite}
        onShare={handleShare}
        onViewAllLands={openAllLands}
      />

      {/* ==================== CONTACT MODAL ==================== */}
      <ContactModal
        open={contactOpen}
        onClose={closeContact}
      />

    </div>
  )
}