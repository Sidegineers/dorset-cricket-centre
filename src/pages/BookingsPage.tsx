import { useMemo } from 'react'
import LaneBookingEngine from '../components/LaneBookingEngine'
import { phoneNumber, phoneLink, officialFacts } from '../data/dcc'
import type { FacilityId } from '../data/dcc'

interface BookingsPageProps {
  onNavigate?: (path: string) => void
}

export default function BookingsPage(_props: BookingsPageProps) {
  // Check URL query parameters for initial lane
  const initialLane = useMemo<FacilityId>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const lane = params.get('lane') as FacilityId | null
      if (lane && ['net-1', 'net-2', 'net-3', 'net-4', 'net-5', 'coaching-lane'].includes(lane)) {
        return lane
      }
    }
    return 'net-3'
  }, [])

  return (
    <div className="page-container">
      {/* Editorial Header */}
      <section className="page-editorial-hero content-wrap" aria-labelledby="booking-hero-title">
        <span className="eyebrow-chip">INTERACTIVE LANE BOOKING</span>
        <h1 id="booking-hero-title" className="page-hero-title">
          Navigate the lanes.<br />
          <span className="gold-accent-text">Plan your session.</span>
        </h1>
        <p className="page-hero-desc">
          Select any of the five Main Hall nets or the dedicated Bowling Machine Lane on the interactive lane plan below to review dimensions, calculate official 2026/27 rates, and confirm your slot.
        </p>
      </section>

      {/* Main Interactive Lane Booking Engine */}
      <div className="content-wrap">
        <LaneBookingEngine initialFacilityId={initialLane} />
      </div>

      {/* Official Phone-First Booking Process Explained */}
      <section className="booking-steps-section content-wrap" aria-labelledby="booking-steps-title">
        <div className="steps-header">
          <span className="eyebrow-chip">DCC OFFICIAL PROTOCOL</span>
          <h2 id="booking-steps-title">How booking works at Dorset Cricket Centre</h2>
          <p>DCC operates a telephone-first booking system to provide personalized slot scheduling and ensure equipment readiness.</p>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <span className="step-number">01</span>
            <h4>Navigate &amp; Select Lane</h4>
            <p>Use the interactive lane plan above to pick your preferred space (Main Hall Net 1–5 or dedicated Bowling Machine Lane).</p>
          </div>

          <div className="step-card">
            <span className="step-number">02</span>
            <h4>Review Published Rates</h4>
            <p>Select Adult (£25–£26/h) or Junior (£23–£24/h) tariff and select your preferred 1-hour session slot.</p>
          </div>

          <div className="step-card">
            <span className="step-number">03</span>
            <h4>Call Centre Manager</h4>
            <p>Telephone Craig Campbell on <a href={`tel:${phoneLink}`} className="step-phone-link">{phoneNumber}</a> to confirm date, time slot, and machine access.</p>
          </div>

          <div className="step-card">
            <span className="step-number">04</span>
            <h4>Check-in at Reception</h4>
            <p>Report to the first-floor management office before playing to register and complete safety sign-in.</p>
          </div>
        </div>
      </section>

      {/* DCC Usage Notice & Charity Info */}
      <div className="content-wrap pb-16">
        <div className="dcc-notice-card">
          <div className="notice-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <div className="notice-text">
            <strong>Important Centre Policy:</strong>
            <p>
              This interactive tool assists with space selection and rate calculation. It does not process payments or automatically hold slots. All bookings are confirmed directly with {officialFacts.managerName} at {officialFacts.phone}. Non-marking indoor cricket trainers are required on all surfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
