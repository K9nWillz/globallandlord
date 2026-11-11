import { useEffect, useState } from 'react'
import { navLinks } from '../data/listings'

export default function Navbar({ onOpenLogin, onOpenContact }) {
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
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-app flex items-center justify-between h-20">

        {/* LOGO */}
        <a
          href="#home"
          className="font-display font-extrabold text-xl"
        >
          <span className={scrolled ? 'text-ink' : 'text-white'}>
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
              className={`font-display text-sm font-semibold tracking-wide transition ${
                scrolled
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

          {/* Sign In hidden for now */}

          <a
            href="#"
            className="btn-brand !py-2.5 !px-5 text-sm"
            onClick={(e) => e.preventDefault()}
          >
            Add Listing
          </a>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="lg:hidden p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-0.5 mb-1.5 ${
              scrolled ? 'bg-ink' : 'bg-white'
            }`}
          />

          <span
            className={`block w-6 h-0.5 mb-1.5 ${
              scrolled ? 'bg-ink' : 'bg-white'
            }`}
          />

          <span
            className={`block w-6 h-0.5 ${
              scrolled ? 'bg-ink' : 'bg-white'
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
              className="block font-display text-sm font-semibold text-ink"
            >
              {link.label}
            </a>
          ))}

        </div>
      )}
    </header>
  )
}