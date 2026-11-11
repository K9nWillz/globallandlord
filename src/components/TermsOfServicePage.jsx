import React from 'react'
import Footer from './Footer'

export default function TermsOfServicePage({
  onGoHome,
  onOpenContact,
  onOpenAllLands,
  onOpenPrivacy,
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
            Legal & Compliance
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mt-3 tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Last Updated: November 2026 • Governing Land Acquisitions Across Nigeria
          </p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
          <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-2">1. Acceptance of Terms</h2>
            <p>
              Welcome to <strong>GlobalLandlord</strong> ("Company", "we", "us", or "our"). By accessing or using our website, inquiring about real estate portfolios, scheduling physical or virtual land inspections, or transacting with our consultants, you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our platforms and advisory services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">2. Scope of Real Estate Advisory & Facilitation</h2>
            <p>
              GlobalLandlord operates as a premier real estate advisory and land facilitation consultancy headquartered in Abakaliki, Ebonyi State, Nigeria, serving domestic and diaspora clients across high-growth corridors in Ebonyi, Enugu, Abuja (FCT), Lagos, Delta, and Imo States.
            </p>
            <p className="mt-2">
              Our services include verified title verification, surveying liaison, estate layout analysis, transaction guidance, physical plot inspection, and facilitation of Deed of Assignment and Certificate of Occupancy (C of O) registrations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">3. Land Verification & Due Diligence</h2>
            <p>
              Every property promoted on our platform undergoes rigorous preliminary verification by registered surveyors and legal advisers. However, clients are encouraged to conduct independent physical inspections and chart coordinate boundaries with state Ministries of Lands before final contract execution.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
              <li>All plot dimensions (e.g. 50x100, 60x120, 70,000 sq ft) are based on registered layout maps.</li>
              <li>Zoning designations (Residential, Commercial, Mixed-Use) are stated in accordance with town planning regulations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">4. Title Deeds & Documentation</h2>
            <p>
              Land titles featured across our portfolios—including Certificate of Occupancy (C of O), Right of Occupancy (R of O), Registered Layout Surveys, Government Gazette, and Freehold Conveyances—are verified with respective state geographic information systems. Original copies or certified true copies (CTC) are made available to prospective buyers or their legal counsel prior to closing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">5. Financial Security & Payment Protocols</h2>
            <p>
              For transparency and financial security:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
              <li><strong>Zero Cash Policy:</strong> GlobalLandlord and its representatives will NEVER request direct cash handoffs for land acquisitions or estate plot purchases.</li>
              <li><strong>Official Bank Accounts:</strong> All deposit and closing payments must be executed via direct bank wire transfers to accredited corporate estate accounts or designated legal escrow desks.</li>
              <li><strong>Official Receipts:</strong> Every installment or complete liquidation is accompanied by an electronic or physical corporate receipt and Allocation Acknowledgment.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">6. Physical Allocation & Boundary Beacons</h2>
            <p>
              Upon complete payment of plot consideration and requisite survey/documentation fees, the buyer is entitled to immediate physical plot allocation. Survey beacons bearing unique registered numbers will be installed at the corner boundaries of the allocated plot in the presence of the buyer or their appointed representative.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">7. Diaspora Client Protection & Video Documentation</h2>
            <p>
              For investors transacting from outside Nigeria, GlobalLandlord provides geo-tagged video walkthroughs, boundary drone footage, and direct coordinate sharing. Clients may designate a trusted local representative or attorney to receive documentation and execute Deeds of Assignment on their behalf under a Power of Attorney.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">8. Anti-Omonile Guarantee & Indemnity</h2>
            <p>
              We pride ourselves on zero communal disputes and dispute-free titles. All estate corridors and land banking parcels are vetted against indigenous family claims, government acquisition encumbrances, or third-party court litigation before being listed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">9. Governing Law & Dispute Resolution</h2>
            <p>
              These Terms of Service and any contractual land agreements facilitated through GlobalLandlord shall be governed by and construed in accordance with the substantive laws of the Federal Republic of Nigeria and the respective land use regulations of the state wherein the real property is situated.
            </p>
          </section>

          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-lg font-bold text-gray-900 mb-2">10. Contact Information</h2>
            <p>For questions or formal inquiries regarding these terms or land contracts, contact:</p>
            <div className="mt-3 p-4 bg-gray-50 rounded-xl text-sm space-y-1 text-gray-800">
              <p><strong>GlobalLandlord Corporate Desk</strong></p>
              <p>📍 25 Nsugbe off Water Works Street, Abakaliki, Ebonyi State, Nigeria</p>
              <p>📞 Phone: +234 901 507 5960</p>
              <p>✉️ Email: support@globallandlord.com / globallandlord@gmail.com</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={onOpenContact}
        onOpenTerms={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onOpenPrivacy={onOpenPrivacy}
        onOpenAllLands={onOpenAllLands}
        onGoHome={onGoHome}
      />
    </div>
  )
}
