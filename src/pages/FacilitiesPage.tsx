import { useState } from 'react'
import ImmersiveFacilityExplorer from '../components/ImmersiveFacilityExplorer'
import VenueSection from '../components/VenueSection'
import type { FacilityId } from '../data/dcc'

interface FacilitiesPageProps {
  onNavigate?: (path: string) => void
}

export default function FacilitiesPage({ onNavigate }: FacilitiesPageProps) {
  const [initialFacility] = useState<FacilityId>('net-3')

  const handleFacilityBook = (facilityId: FacilityId) => {
    const target = `/bookings?lane=${facilityId}`
    if (onNavigate) {
      onNavigate(target)
    } else {
      window.location.href = target
    }
  }

  return (
    <div className="page-container">
      {/* Page Editorial Header */}
      <section className="page-editorial-hero content-wrap" aria-labelledby="facilities-title">
        <span className="eyebrow-chip">THE PHYSICAL CENTRE</span>
        <h1 id="facilities-title" className="page-hero-title">
          Five indoor nets.<br />
          <span className="gold-accent-text">Interactive Facility Plan.</span>
        </h1>
        <p className="page-hero-desc">
          Navigate the 36.6 m × 20.2 m Main Hall, inspect individual net lanes, explore the dedicated Bowling Machine Lane, and discover the first-floor mezzanine viewing gallery.
        </p>
      </section>

      {/* Main Spatial Explorer */}
      <div className="content-wrap">
        <ImmersiveFacilityExplorer
          initialFacilityId={initialFacility}
          onBookFacility={handleFacilityBook}
        />
      </div>

      {/* Mezzanine & Venue Amenities */}
      <div className="content-wrap mt-16">
        <VenueSection />
      </div>
    </div>
  )
}
