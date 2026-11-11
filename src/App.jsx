import React, { useEffect, useState } from 'react'
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
import { properties } from './data/listings'

export default function App() {
  const [loginOpen, setLoginOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState(null)

  useEffect(() => {
    const handleUrlTarget = () => {
      const hash = window.location.hash

      if (!hash.includes('property=')) {
        return
      }

      const idOrSlug = hash.split('property=')[1]

      const matched = properties.find(
        (property) =>
          String(property.id) === idOrSlug ||
          property.slug === idOrSlug
      )

      if (matched) {
        setSelectedProperty(matched)
      }
    }

    handleUrlTarget()

    window.addEventListener('hashchange', handleUrlTarget)

    return () => {
      window.removeEventListener('hashchange', handleUrlTarget)
    }
  }, [])

  const openLogin = () => {
    setLoginOpen(true)
  }

  const closeLogin = () => {
    setLoginOpen(false)
  }

  const openContact = () => {
    setContactOpen(true)
  }

  const closeContact = () => {
    setContactOpen(false)
  }

  const selectProperty = (property) => {
    setSelectedProperty(property)
  }

  const closeProperty = () => {
    setSelectedProperty(null)
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">

      {/* ==================== NAVBAR ==================== */}
      <Navbar
        onOpenLogin={openLogin}
        onOpenContact={openContact}
      />

      {/* ==================== HERO ==================== */}
      <Hero />

      {/* ==================== FEATURED PROPERTIES ==================== */}
      <FeaturedProperties
        onSelectProperty={selectProperty}
      />

      {/* ==================== WHY CHOOSE US ==================== */}
      <WhyChooseUs />

      {/* ==================== DISCOVER PROPERTIES ==================== */}
      <DiscoverProperties
        onSelectProperty={selectProperty}
      />

      {/* ==================== AGENTS ==================== */}
      <Agents />

      {/* ==================== TESTIMONIALS ==================== */}
      <Testimonials />

      {/* ==================== FOOTER ==================== */}
      <Footer
        onOpenContact={openContact}
      />

      {/* ==================== LOGIN MODAL ==================== */}
      <LoginModal
        open={loginOpen}
        onClose={closeLogin}
      />

      {/* ==================== PROPERTY MODAL ==================== */}
      <PropertyModal
        property={selectedProperty}
        onClose={closeProperty}
      />

      {/* ==================== CONTACT MODAL ==================== */}
      <ContactModal
        open={contactOpen}
        onClose={closeContact}
      />

    </div>
  )
}