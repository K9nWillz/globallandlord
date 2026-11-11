import { useEffect, useState } from 'react'
import { navLinks } from '../data/listings'

export default function Navbar({ 
  onOpenLogin, 
  onOpenContact, 
  onOpenAllLands,
  onGoHome,
  currentView = 'home'
}) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const handleLinkClick = (link, e) => {
    const label = link.label?.toLowerCase() || ''

    if (label.includes('contact')) {
      e.preventDefault()
      e.stopPropagation()
      setMobileOpen(false)
      if (onOpenContact) {
        onOpenContact()
      }
      return
    }

    if (label.includes('listings') || label.includes('all lands')) {
      e.preventDefault()
      e.stopPropagation()
      setMobileOpen(false)
      if (onOpenAllLands) {
        onOpenAllLands()
      }
      return
    }

    if (label.includes('home')) {
      e.preventDefault()
      e.stopPropagation()
      setMobileOpen(false)
      if (onGoHome) {
        onGoHome()
      }
      return
    }

    if (label.includes('sales partners') || label.includes('agents')) {
      setMobileOpen(false)
      if (currentView !== 'home' && onGoHome) {
        e.preventDefault()
        onGoHome()
        setTimeout(() => {
          document.getElementById('agents')?.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      }
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    if (onGoHome) {
      onGoHome()
    }
  }

  // If not on home page, make the navbar background white by default so text is readable
  const isWhiteNav = scrolled || currentView !== 'home'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isWhiteNav
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-app flex items-center justify-between h-20">

        {/* LOGO */}
        <a
          href="#home"
          onClick={handleLogoClick}
          className="font-display font-extrabold text-xl cursor-pointer"
        >
          <span className={isWhiteNav ? 'text-ink' : 'text-white'}>
            Global
          </span>
          <span className="text-brand-500">
            Landlord
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(link, e)}
              className={`font-display text-sm font-semibold tracking-wide transition cursor-pointer ${
                isWhiteNav
                  ? 'text-ink hover:text-brand-500'
                  : 'text-white hover:text-brand-100'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            type="button"
            onClick={onOpenContact}
            className="btn-brand !py-2.5 !px-5 text-sm cursor-pointer"
          >
            Contact Consultant
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="lg:hidden p-2 cursor-pointer"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-0.5 mb-1.5 ${
              isWhiteNav ? 'bg-ink' : 'bg-white'
            }`}
          />

          <span
            className={`block w-6 h-0.5 mb-1.5 ${
              isWhiteNav ? 'bg-ink' : 'bg-white'
            }`}
          />

          <span
            className={`block w-6 h-0.5 ${
              isWhiteNav ? 'bg-ink' : 'bg-white'
            }`}
          />
        </button>

      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t px-5 py-4 space-y-3 shadow-md">

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(link, e)}
              className="block font-display text-sm font-semibold text-ink cursor-pointer hover:text-brand-500"
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            onClick={() => {
              setMobileOpen(false)
              onOpenContact?.()
            }}
            className="w-full text-center py-2.5 bg-brand-500 text-white rounded-lg font-display text-xs font-bold"
          >
            Contact Consultant
          </button>

        </div>
      )}
    </header>
  )
}