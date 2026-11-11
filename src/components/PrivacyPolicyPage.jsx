import React from 'react'
import Footer from './Footer'

export default function PrivacyPolicyPage({
  onGoHome,
  onOpenContact,
  onOpenAllLands,
  onOpenTerms,
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-xs">
        <div className="container-app h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onGoHome}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 hover:text-brand-500 bg-gray-100 hover:bg-gray-200 px-3.5 py-2 rounded-lg transition cursor-pointer"
            >
              <span>←</span>
              <span>Back to Home</span>
            </button>

            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                onGoHome()
              }}
              className="font-display font-extrabold text-xl text-ink"
            >
              Global<span className="text-brand-500">Landlord</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenAllLands}
              className="hidden sm:inline-block text-xs font-semibold text-gray-700 hover:text-brand-500 px-3 py-2"
            >
              All Lands
            </button>
            <button
              type="button"
              onClick={onOpenContact}
              className="px-3.5 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-lg text-xs font-bold transition shadow-xs cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container-app py-12 md:py-16 max-w-4xl mx-auto flex-1">
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-md">
            Privacy & Trust
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mt-3 tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Compliant with Nigeria Data Protection Act (NDPA) 2023 • Effective November 2026
          </p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
          <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-2">1. Introduction & Overview</h2>
            <p>
              At <strong>GlobalLandlord</strong> ("we", "our", or "us"), safeguarding the personal and financial data of our clients, diaspora investors, and website visitors is of paramount importance. This Privacy Policy details how we collect, use, process, and protect your information when you browse our listings, save favorite land plots, schedule site inspections, or engage our consultancy services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">2. Information We Collect</h2>
            <p>We may collect information you provide directly or that is generated during your interactions with us:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
              <li>
                <strong>Contact & Identity Details:</strong> Your full legal name, phone number, WhatsApp contact, and email address when you submit an inquiry, request callback, or subscribe to new listing newsletters.
              </li>
              <li>
                <strong>Land Transaction & KYC Data:</strong> Identification documents (e.g. National ID, Voter’s Card, Driver’s License, International Passport) and passport photographs required exclusively for preparing Deeds of Assignment, Survey Plans, and Registered Allocation Letters.
              </li>
              <li>
                <strong>Inspection Preferences:</strong> Information regarding target corridors (e.g. Abakaliki GRA, Centenary City, Ntezi, Enugu, Abuja, Lagos), desired acreage or plot counts, and investment timeframes.
              </li>
              <li>
                <strong>Local Storage & Saved Favorites:</strong> To allow you to bookmark and compare plots seamlessly across browsing sessions without creating a mandatory account, we store your saved property IDs in your device's browser local storage.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">3. How We Use Your Data</h2>
            <p>The information we collect is utilized strictly to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
              <li>Facilitate physical and virtual video land inspections with accredited consultants.</li>
              <li>Draft authentic land documentation, Registered Survey beacons, and Deed of Conveyance.</li>
              <li>Communicate urgent updates regarding plot availability, infrastructure milestones, or price revisions.</li>
              <li>Comply with statutory anti-money laundering (AML) and know-your-customer (KYC) requirements under Nigerian law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">4. Zero Sale of Personal Data</h2>
            <p>
              <strong>We do not sell, rent, or trade your personal information</strong> to third-party marketing companies, data brokers, or advertisers under any circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">5. Disclosure to Authorized Partners</h2>
            <p>
              Your data is only shared with authorized professional partners strictly necessary to complete your real estate acquisition:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
              <li>Licensed Estate Surveyors and Town Planners carrying out beacon installation and layout demarcation.</li>
              <li>Accredited legal solicitors drafting Deeds of Assignment and power of attorney instruments.</li>
              <li>State Ministries of Lands and Urban Development for title deed registration and search charting.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">6. Data Security & Retention</h2>
            <p>
              We implement industry-standard technical safeguards, encrypted communications, and secure storage to protect your confidential information against unauthorized access, loss, alteration, or disclosure. Transaction records are maintained in compliance with the Land Use Act and statutory real estate documentation retention periods.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">7. Your Data Protection Rights</h2>
            <p>Under the Nigeria Data Protection Act (NDPA) and global best practices, you possess the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request immediate correction of any inaccurate or incomplete details.</li>
              <li>Request deletion of your contact data from our marketing and newsletter records.</li>
              <li>Withdraw consent for optional communications at any time.</li>
            </ul>
          </section>

          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-lg font-bold text-gray-900 mb-2">8. Data Protection Officer Contact</h2>
            <p>If you have questions, wish to exercise your privacy rights, or require data clarification, please reach out to:</p>
            <div className="mt-3 p-4 bg-gray-50 rounded-xl text-sm space-y-1 text-gray-800">
              <p><strong>Privacy & Legal Compliance Officer</strong></p>
              <p>📍 GlobalLandlord Office, 25 Nsugbe off Water Works Street, Abakaliki, Ebonyi State, Nigeria</p>
              <p>📞 Phone: +234 901 507 5960</p>
              <p>✉️ Email: privacy@globallandlord.com / support@globallandlord.com</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={onOpenContact}
        onOpenTerms={onOpenTerms}
        onOpenPrivacy={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onOpenAllLands={onOpenAllLands}
        onGoHome={onGoHome}
      />
    </div>
  )
}
