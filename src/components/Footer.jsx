import React, { useState } from 'react'
import { agents } from '../data/listings'

const agent = agents[0]
const INSTAGRAM_URL = 'https://www.instagram.com/christian_onuoha2.0?stkn=MXNyZjRvNW01amh1NQ=='
const YOUTUBE_URL = 'https://www.youtube.com/@GlobalChristianonuoha'

// Replace this with your real Formspree endpoint
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzezpdag'

export default function Footer({
  onOpenContact,
  onOpenTerms,
  onOpenPrivacy,
  onOpenAllLands,
  onGoHome,
}) {
  const [toast, setToast] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 2500)
  }

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitting(true)
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      showToast('Subscribed! ✅')
      setEmail('')
    } catch (err) {
      showToast('Something went wrong, try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const socials = [
    { label: 'Facebook', href: agent.facebook },
    { label: 'TikTok', href: agent.twitter },
    { label: 'Instagram', href: INSTAGRAM_URL },
    { label: 'YouTube', href: YOUTUBE_URL },
  ]

  const handleHomeClick = (e) => {
    if (onGoHome) {
      e.preventDefault()
      onGoHome()
    }
  }

  const handleListingsClick = (e) => {
    if (onOpenAllLands) {
      e.preventDefault()
      onOpenAllLands()
    }
  }

  const handleTermsClick = (e) => {
    e.preventDefault()
    if (onOpenTerms) {
      onOpenTerms()
    }
  }

  const handlePrivacyClick = (e) => {
    e.preventDefault()
    if (onOpenPrivacy) {
      onOpenPrivacy()
    }
  }

  return (
    <footer id="contact" className="bg-ink text-white/70 relative">
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-sm font-display font-semibold px-5 py-2.5 rounded-md shadow-lg z-50 animate-bounce">
          {toast}
        </div>
      )}

      <div className="container-app py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <a 
            href="#home" 
            onClick={handleHomeClick}
            className="font-display font-extrabold text-xl text-white inline-block"
          >
            Global<span className="text-brand-500">Landlord</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            Helping Young Africans Own Real Estate Assets Across Nigeria.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>25 Nsugbe off Water Works Street</li>
            <li>+234 901 507 5960</li>
            <li>support@globallandlord.com</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-display font-bold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a 
                href="#home" 
                onClick={handleHomeClick}
                className="hover:text-white transition cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#all-lands" 
                onClick={handleListingsClick}
                className="hover:text-white transition cursor-pointer"
              >
                All Lands & Properties
              </a>
            </li>
            <li>
              <a 
                href="#agents" 
                onClick={(e) => {
                  if (onGoHome) {
                    onGoHome()
                    setTimeout(() => {
                      document.getElementById('agents')?.scrollIntoView({ behavior: 'smooth' })
                    }, 100)
                  }
                }}
                className="hover:text-white transition cursor-pointer"
              >
                Sales partners
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onOpenContact?.()}
                className="hover:text-white transition text-left cursor-pointer"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-display font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a 
                href="https://blog.thegloballandlord.com" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-white transition"
              >
                Blog
              </a>
            </li>
            <li>
              <a 
                href="#terms" 
                onClick={handleTermsClick}
                className="hover:text-white transition cursor-pointer"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a 
                href="#privacy" 
                onClick={handlePrivacyClick}
                className="hover:text-white transition cursor-pointer"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-display font-bold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">Get the latest listings and offers in your inbox.</p>
          <form className="flex" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-l-md px-4 py-2.5 text-sm text-ink focus:outline-none"
              required
            />
            <button
              type="submit"
              disabled={submitting}
              className="shrink-0 rounded-r-md bg-brand-500 px-4 text-sm font-display font-semibold text-white hover:bg-brand-600 transition disabled:opacity-60 cursor-pointer"
            >
              {submitting ? '...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-app py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} GlobalLandlord. All rights reserved.</p>
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}