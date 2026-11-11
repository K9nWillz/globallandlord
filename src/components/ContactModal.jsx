import { MapPin, Phone, Mail, X } from 'lucide-react'
import { agents } from '../data/listings'

const agent = agents[0]

const INSTAGRAM_URL =
  'https://www.instagram.com/christian_onuoha2.0?stkn=MXNyZjRvNW01amh1NQ=='

const YOUTUBE_URL =
  'https://www.youtube.com/@GlobalChristianonuoha'

function InstagramIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function YoutubeIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.8V8.2l6.5 3.8-6.5 3.8Z" />
    </svg>
  )
}

export default function ContactModal({ open, onClose }) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-[fadeIn_0.2s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-ink px-6 py-7 text-white relative">
          <button
            onClick={onClose}
            aria-label="Close contact modal"
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition"
          >
            <X size={18} strokeWidth={2} />
          </button>

          <p className="font-display font-extrabold text-2xl">
            Global<span className="text-brand-500">Landlord</span>
          </p>

          <p className="text-sm text-white/60 mt-1">
            Let's talk about your next plot.
          </p>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-5">

          {/* Office */}
          <div className="flex items-start gap-3">
            <span className="w-9 h-9 rounded-full bg-brand-50 text-brand-500 flex items-center justify-center shrink-0">
              <MapPin size={17} strokeWidth={2} />
            </span>

            <div>
              <p className="text-xs uppercase tracking-wide text-ink/40 font-display font-semibold">
                Office
              </p>

              <p className="text-sm text-ink font-medium">
                25 Nsugbe off Water Works Street
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <span className="w-9 h-9 rounded-full bg-brand-50 text-brand-500 flex items-center justify-center shrink-0">
              <Phone size={17} strokeWidth={2} />
            </span>

            <div>
              <p className="text-xs uppercase tracking-wide text-ink/40 font-display font-semibold">
                Phone
              </p>

              <a
                href="tel:+2349015075960"
                className="text-sm text-ink font-medium hover:text-brand-500 transition"
              >
                +234 901 507 5960
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <span className="w-9 h-9 rounded-full bg-brand-50 text-brand-500 flex items-center justify-center shrink-0">
              <Mail size={17} strokeWidth={2} />
            </span>

            <div>
              <p className="text-xs uppercase tracking-wide text-ink/40 font-display font-semibold">
                Email
              </p>

              <a
                href="mailto:support@globallandlord.com"
                className="text-sm text-ink font-medium hover:text-brand-500 transition"
              >
                support@globallandlord.com
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="pt-2 border-t border-ink/10">
            <p className="text-xs uppercase tracking-wide text-ink/40 font-display font-semibold mb-3">
              Follow Us
            </p>

            <div className="flex gap-2 flex-wrap">

              {/* Facebook */}
              <a
                href={agent.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-display font-semibold px-3 py-1.5 rounded-full bg-ink/5 text-ink hover:bg-brand-500 hover:text-white transition"
              >
                Facebook
              </a>

              {/* TikTok */}
              <a
                href={agent.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-display font-semibold px-3 py-1.5 rounded-full bg-ink/5 text-ink hover:bg-brand-500 hover:text-white transition"
              >
                TikTok
              </a>

              {/* Instagram */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-display font-semibold px-3 py-1.5 rounded-full bg-ink/5 text-ink hover:bg-brand-500 hover:text-white transition"
              >
                <InstagramIcon size={14} />
                Instagram
              </a>

              {/* YouTube */}
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-display font-semibold px-3 py-1.5 rounded-full bg-ink/5 text-ink hover:bg-brand-500 hover:text-white transition"
              >
                <YoutubeIcon size={14} />
                YouTube
              </a>

            </div>
          </div>

          {/* CTA */}
          <a
            href="mailto:support@globallandlord.com"
            className="btn-brand w-full !py-3 text-sm justify-center flex items-center gap-2 mt-2"
          >
            <Mail size={16} strokeWidth={2} />
            Send us an Email
          </a>

        </div>
      </div>
    </div>
  )
}