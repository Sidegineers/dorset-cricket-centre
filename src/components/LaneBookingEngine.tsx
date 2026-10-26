import { useState } from 'react'
import {
  facilities,
  phoneNumber,
  phoneLink,
  emailAddress,
  standard1HourSlots,
  weeklyHallSchedule,
  officialFacts
} from '../data/dcc'
import type { FacilityId, BookingTimeSlot } from '../data/dcc'
import FacilityModelViewer from './FacilityModelViewer'

interface LaneBookingEngineProps {
  initialFacilityId?: FacilityId
}

export default function LaneBookingEngine({ initialFacilityId = 'net-3' }: LaneBookingEngineProps) {
  const [selectedFacilityId, setSelectedFacilityId] = useState<FacilityId>(initialFacilityId)
  const [tariff, setTariff] = useState<'adult' | 'junior' | 'coach'>('adult')
  const [selectedSlot, setSelectedSlot] = useState<BookingTimeSlot>(standard1HourSlots[9]) // 18:00 - 19:00
  const [periodFilter, setPeriodFilter] = useState<'all' | 'morning' | 'afternoon' | 'evening'>('all')
  const [activeTab, setActiveTab] = useState<'slots' | 'schedule'>('slots')
  const [copied, setCopied] = useState<boolean>(false)

  const selectedFacility = facilities.find((f) => f.id === selectedFacilityId) ?? facilities[0]
  
  const hourlyRate = tariff === 'adult'
    ? selectedFacility.adultRate
    : tariff === 'junior'
    ? selectedFacility.juniorRate
    : selectedFacility.coachRate

  const tariffLabel = tariff === 'adult'
    ? 'Adult Rate'
    : tariff === 'junior'
    ? 'Junior Rate'
    : 'ECB Coach Rate'

  const totalPrice = hourlyRate

  const filteredSlots = periodFilter === 'all'
    ? standard1HourSlots
    : standard1HourSlots.filter((slot) => slot.period === periodFilter)

  const emailSubject = encodeURIComponent(`DCC Lane Booking Enquiry: ${selectedFacility.name}`)
  const emailBody = encodeURIComponent(
    `Hello Craig,\n\nI would like to enquire about booking the following 1-hour lane session at Dorset Cricket Centre:\n\n` +
    `- Space: ${selectedFacility.name} (${selectedFacility.dimensions})\n` +
    `- Tariff Category: ${tariffLabel} (£${hourlyRate}/h)\n` +
    `- Preferred Time Slot: ${selectedSlot.time} (1 Hour)\n` +
    `- Total Fee: £${totalPrice.toFixed(2)}\n\n` +
    `Please let me know if this slot is available.\n\nThank you!`
  )

  const handleCopySummary = () => {
    const text = `Dorset Cricket Centre - 1-Hour Lane Enquiry:
- Space: ${selectedFacility.name} (${selectedFacility.dimensions})
- Tariff: ${tariffLabel} (£${hourlyRate}/hr)
- Slot: ${selectedSlot.time} (1 Hour)
- Published Fee: £${totalPrice.toFixed(2)}
- Contact Manager Craig Campbell: ${phoneNumber} | ${emailAddress}`

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
      })
    }
  }

  return (
    <div className="booking-engine-wrapper">
      {/* 01: Interactive Perspective Space Selection */}
      <div className="engine-step-block">
        <div className="step-heading-row">
          <div>
            <span className="step-eyebrow">STEP 01</span>
            <h3 className="step-title">Select Your Practice Space</h3>
          </div>
          <div className="selected-space-pill">
            <span className="space-pill-dot" />
            <span className="space-pill-name">{selectedFacility.name}</span>
            <span className="space-pill-dim">{selectedFacility.dimensions}</span>
          </div>
        </div>

        {/* 3D Perspective Plan with First Floor Hidden in Booking Mode */}
        <FacilityModelViewer
          selectedFacilityId={selectedFacilityId}
          onSelectFacility={(id) => setSelectedFacilityId(id)}
          interactiveBookingMode={true}
        />
      </div>

      {/* 02 & 03: Booking Configuration & Live Receipt */}
      <div className="engine-bottom-grid">
        {/* Left Column: Interactive Configuration Form */}
        <div className="booking-config-panel">
          {/* Step 2: Tariff / Player Tier */}
          <div className="config-group">
            <div className="group-header">
              <span className="step-eyebrow">STEP 02</span>
              <h4 className="group-title">Player &amp; Tariff Category</h4>
              <span className="group-meta">{officialFacts.season} Published Tariff</span>
            </div>

            <div className="luxury-rate-grid" role="radiogroup" aria-label="Tariff selection">
              {/* Adult Rate */}
              <button
                type="button"
                role="radio"
                aria-checked={tariff === 'adult'}
                className={`luxury-rate-card${tariff === 'adult' ? ' is-active' : ''}`}
                onClick={() => setTariff('adult')}
              >
                <div className="rate-card-top">
                  <div className="rate-radio-circle">
                    {tariff === 'adult' && <span className="rate-radio-dot" />}
                  </div>
                  <span className="rate-price-tag">£{selectedFacility.adultRate}<span>/hr</span></span>
                </div>
                <div className="rate-card-body">
                  <strong className="rate-card-title">Adult Practice</strong>
                  <span className="rate-card-desc">Seniors, Club Teams &amp; Adults</span>
                </div>
              </button>

              {/* Junior Rate */}
              <button
                type="button"
                role="radio"
                aria-checked={tariff === 'junior'}
                className={`luxury-rate-card${tariff === 'junior' ? ' is-active' : ''}`}
                onClick={() => setTariff('junior')}
              >
                <div className="rate-card-top">
                  <div className="rate-radio-circle">
                    {tariff === 'junior' && <span className="rate-radio-dot" />}
                  </div>
                  <span className="rate-price-tag">£{selectedFacility.juniorRate}<span>/hr</span></span>
                </div>
                <div className="rate-card-body">
                  <strong className="rate-card-title">Junior Practice</strong>
                  <span className="rate-card-desc">Under 18 Youth &amp; Schools</span>
                </div>
              </button>

              {/* ECB Coach Rate */}
              <button
                type="button"
                role="radio"
                aria-checked={tariff === 'coach'}
                className={`luxury-rate-card${tariff === 'coach' ? ' is-active' : ''}`}
                onClick={() => setTariff('coach')}
              >
                <div className="rate-card-top">
                  <div className="rate-radio-circle">
                    {tariff === 'coach' && <span className="rate-radio-dot" />}
                  </div>
                  <span className="rate-price-tag">£{selectedFacility.coachRate}<span>/hr</span></span>
                </div>
                <div className="rate-card-body">
                  <strong className="rate-card-title">ECB Coach 1-to-1</strong>
                  <span className="rate-card-desc">Accredited Coach Individual Clinic</span>
                </div>
              </button>
            </div>
          </div>

          {/* Step 3: 1-Hour Time Slots & Live Weekly Schedule Guide */}
          <div className="config-group">
            <div className="group-header">
              <span className="step-eyebrow">STEP 03</span>
              <div className="booking-tabs-switch" role="tablist" aria-label="Schedule views">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'slots'}
                  className={`tab-switch-btn${activeTab === 'slots' ? ' is-active' : ''}`}
                  onClick={() => setActiveTab('slots')}
                >
                  <span>1-Hour Time Slots</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'schedule'}
                  className={`tab-switch-btn${activeTab === 'schedule' ? ' is-active' : ''}`}
                  onClick={() => setActiveTab('schedule')}
                >
                  <span>Weekly Net Availability Guide</span>
                </button>
              </div>
            </div>

            {/* TAB 1: 1-Hour Slots Grid */}
            {activeTab === 'slots' && (
              <div className="slots-container-card">
                <div className="period-filter-row">
                  <span className="filter-label">Filter times:</span>
                  <div className="period-chips-group">
                    {(['all', 'morning', 'afternoon', 'evening'] as const).map((period) => (
                      <button
                        key={period}
                        type="button"
                        className={`filter-pill-btn${periodFilter === period ? ' is-active' : ''}`}
                        onClick={() => setPeriodFilter(period)}
                      >
                        {period === 'all'
                          ? 'All Slots'
                          : period.charAt(0).toUpperCase() + period.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="luxury-slots-grid" role="group" aria-label="Available 1-hour slots">
                  {filteredSlots.map((slot) => {
                    const isSelected = selectedSlot.id === slot.id
                    return (
                      <button
                        key={slot.id}
                        type="button"
                        className={`luxury-slot-card${isSelected ? ' is-selected' : ''}`}
                        onClick={() => setSelectedSlot(slot)}
                        aria-pressed={isSelected}
                      >
                        <div className="slot-card-header">
                          <span className="slot-card-time">{slot.time}</span>
                          {isSelected && <span className="slot-check-icon">✓</span>}
                        </div>
                        <div className="slot-card-meta">
                          <span className="slot-duration-text">60 min slot</span>
                          <span className="slot-badge">{slot.period}</span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* TAB 2: Authentic Weekly Net Availability Timetable from DCC */}
            {activeTab === 'schedule' && (
              <div className="weekly-schedule-card">
                <div className="schedule-card-header">
                  <div>
                    <h5>Typical Weekly Main Hall Net Availability</h5>
                    <p>Extracted directly from Dorset Cricket Centre schedule records. Use this guide to plan squad training and block bookings.</p>
                  </div>
                  <span className="status-badge-live">Official DCC Schedule</span>
                </div>

                <div className="schedule-table-wrap">
                  <table className="dcc-live-schedule-table">
                    <thead>
                      <tr>
                        <th scope="col">Day</th>
                        <th scope="col">Time Window</th>
                        <th scope="col" className="text-center">Nets Available</th>
                        <th scope="col">Activity &amp; Hall Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {weeklyHallSchedule.map((row, idx) => (
                        <tr key={idx}>
                          <td><strong>{row.day}</strong></td>
                          <td className="time-col">{row.times}</td>
                          <td className="text-center">
                            <span className={`net-avail-badge${row.netsAvailable >= 4 ? ' is-high' : ''}`}>
                              {row.netsAvailable} of 5 nets
                            </span>
                          </td>
                          <td className="note-col">{row.note ?? 'Open Practice'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Redesigned Luxury Reservation Pass */}
        <aside className="booking-receipt-dock" aria-label="Selected session summary">
          <div className="receipt-card">
            {/* Receipt Header */}
            <div className="receipt-header">
              <div className="receipt-monogram">
                <span>DCC</span>
              </div>
              <div className="receipt-status-wrap">
                <span className="receipt-badge">PROVISIONAL SESSION PASS</span>
                <span className="receipt-sub">No payment required online</span>
              </div>
            </div>

            {/* Space Identifier */}
            <div className="receipt-space-box">
              <span className="space-category-tag">{selectedFacility.category}</span>
              <h4 className="space-name">{selectedFacility.name}</h4>
              <div className="space-specs-pills">
                <span>{selectedFacility.dimensions}</span>
                <span>·</span>
                <span>{selectedFacility.surface}</span>
              </div>
            </div>

            {/* Itemized Session Details */}
            <div className="receipt-details-list">
              <div className="receipt-row">
                <span className="receipt-label">Tariff Tier</span>
                <strong className="receipt-value">{tariffLabel}</strong>
              </div>

              <div className="receipt-row">
                <span className="receipt-label">Requested Slot</span>
                <strong className="receipt-value">{selectedSlot.time}</strong>
              </div>

              <div className="receipt-row">
                <span className="receipt-label">Session Duration</span>
                <strong className="receipt-value">1 Hour (60 mins)</strong>
              </div>

              <div className="receipt-row">
                <span className="receipt-label">Equipment Included</span>
                <span className="receipt-value-muted">Stumps, Creases, Nets</span>
              </div>

              {/* Price Calculation Box */}
              <div className="receipt-total-block">
                <div>
                  <span className="total-fee-label">TOTAL PAYABLE AT DESK</span>
                  <span className="total-fee-sub">{officialFacts.season} official tariff</span>
                </div>
                <div className="total-price-display">
                  £{totalPrice.toFixed(2)}
                </div>
              </div>
            </div>

            {/* Action Buttons: Phone & Email Directly to Craig Campbell */}
            <div className="receipt-action-group">
              <a
                href={`tel:${phoneLink}`}
                className="btn btn-primary w-full receipt-primary-btn"
                aria-label={`Call Craig Campbell on ${phoneNumber} to confirm this booking`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call {phoneNumber} to Confirm</span>
              </a>

              <a
                href={`mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`}
                className="btn btn-outline w-full receipt-secondary-btn"
                aria-label="Email booking enquiry to Craig Campbell"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>Email Booking Enquiry</span>
              </a>

              <button
                type="button"
                className="btn btn-subtle w-full receipt-copy-btn"
                onClick={handleCopySummary}
              >
                {copied ? '✓ Booking Summary Copied!' : 'Copy Summary for WhatsApp / Notes'}
              </button>
            </div>

            {/* Official Registration Notice */}
            <div className="receipt-policy-notice">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <span>Please check-in at the first-floor office with Craig Campbell before commencing your session. Non-marking indoor trainers required.</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
