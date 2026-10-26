import ArrowIcon from './ArrowIcon'
import { officialFacts, phoneLink, phoneNumber } from '../data/dcc'

export default function LocationSection() {
  return (
    <section className="location-narrative-section" id="location" aria-labelledby="location-title">
      <div className="section-intro-editorial">
        <span className="eyebrow-chip">LOCATION &amp; ACCESS</span>
        <h2 id="location-title" className="editorial-heading">
          Hurn Bridge Sports Club.<br />
          <em>In the heart of East Dorset.</em>
        </h2>
        <p className="editorial-lead">
          Easily accessible from Christchurch, Bournemouth, Poole, and Ringwood via the A338 Spur Road and A31, situated beside Bournemouth Airport.
        </p>
      </div>

      <div className="location-grid">
        {/* Address & Travel Info */}
        <div className="location-info-card">
          <div className="address-block">
            <span className="meta-tag">PHYSICAL VENUE ADDRESS</span>
            <address className="official-address">
              <strong>{officialFacts.addressLine1}</strong><br />
              {officialFacts.addressLine2}<br />
              {officialFacts.addressLine3}<br />
              <span className="postcode-highlight">{officialFacts.postcode}</span>
            </address>
          </div>

          <div className="manager-contact-block">
            <span className="meta-tag">CENTRE MANAGER &amp; ENQUIRIES</span>
            <p className="manager-title">
              <strong>{officialFacts.managerName}</strong><br />
              {officialFacts.managerTitle}
            </p>
            <a href={`tel:${phoneLink}`} className="manager-phone-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{phoneNumber}</span>
            </a>
          </div>

          <div className="transit-times-grid">
            <div className="transit-item">
              <span className="transit-time">10 min</span>
              <span className="transit-loc">Christchurch Centre</span>
            </div>
            <div className="transit-item">
              <span className="transit-time">15 min</span>
              <span className="transit-loc">Bournemouth Centre</span>
            </div>
            <div className="transit-item">
              <span className="transit-time">12 min</span>
              <span className="transit-loc">Ringwood (A31)</span>
            </div>
            <div className="transit-item">
              <span className="transit-time">22 min</span>
              <span className="transit-loc">Poole Harbour</span>
            </div>
          </div>

          <div className="location-actions">
            <a
              href="https://maps.google.com/?q=Hurn+Bridge+Sports+Club+Avon+Causeway+Hurn+BH23+6DY"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <span>Open in Google Maps</span>
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* Live Interactive Google Maps Embed */}
        <div className="location-map-visual">
          <div className="map-art-container google-maps-container">
            <iframe
              title="Google Maps - Dorset Cricket Centre, Hurn Bridge Sports Club"
              src="https://maps.google.com/maps?q=Dorset+Cricket+Centre+Hurn+Bridge+Sports+Club+Avon+Causeway+Christchurch+BH23+6DY&t=m&z=15&output=embed&iwloc=near"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="google-maps-iframe"
            />
          </div>
          <div className="parking-amenity-bar">
            <span>✓ Ample Free Parking on Site</span>
            <span>✓ Ground-Floor Disabled Access</span>
            <span>✓ Changing Rooms &amp; Showers</span>
          </div>
        </div>
      </div>
    </section>
  )
}
