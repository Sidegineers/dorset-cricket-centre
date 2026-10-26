import VenueSection from '../components/VenueSection'
import LocationSection from '../components/LocationSection'

interface VenuePageProps {
  onNavigate?: (_path: string) => void
}

export default function VenuePage({ onNavigate: _onNavigate }: VenuePageProps) {
  return (
    <div className="page-container">
      {/* Editorial Header */}
      <section className="page-editorial-hero content-wrap" aria-labelledby="venue-hero-title">
        <span className="eyebrow-chip">VENUE &amp; SAFETY</span>
        <h1 id="venue-hero-title" className="page-hero-title">
          The centre.<br />
          <span className="accent-highlight-text">Viewing lounge, parking &amp; safety.</span>
        </h1>
        <p className="page-hero-desc">
          Located at Hurn Bridge Sports Club on Avon Causeway. First-floor spectator viewing gallery, meeting facilities, ample free parking, and community safety protocols.
        </p>
      </section>

      {/* Mezzanine Viewing & Amenities */}
      <div className="content-wrap">
        <VenueSection />
      </div>

      {/* Location, Directions & Map */}
      <div className="content-wrap mt-16">
        <div className="editorial-divider-bar">
          <span>FIND US</span>
          <span className="divider-line" />
          <span>HURN BRIDGE SPORTS CLUB</span>
        </div>
        <LocationSection />
      </div>
    </div>
  )
}
