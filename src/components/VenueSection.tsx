import { firstFloorAreas, officialFacts } from '../data/dcc'

export default function VenueSection() {
  return (
    <section className="venue-narrative-section" id="venue" aria-labelledby="venue-title">
      <div className="section-intro-editorial">
        <span className="eyebrow-chip">VENUE &amp; AMENITIES</span>
        <h2 id="venue-title" className="editorial-heading">
          More than cricket nets.<br />
          <em>A complete sports hub.</em>
        </h2>
        <p className="editorial-lead">
          Located within Hurn Bridge Sports Club, Dorset Cricket Centre features elevated viewing lounges, seminar suites, and strict safety standards administered by the Christchurch Community Leisure Association.
        </p>
      </div>

      <div className="venue-amenities-grid">
        {firstFloorAreas.map((area) => (
          <div key={area.id} className="venue-card">
            <span className="venue-card-badge">{area.tag}</span>
            <h3 className="venue-card-title">{area.name}</h3>
            <p className="venue-card-desc">{area.description}</p>
            <ul className="venue-card-list">
              {area.features.map((f, i) => (
                <li key={i}>
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="venue-card-sub">
              <strong>Location:</strong> {area.specs}
            </div>
          </div>
        ))}
      </div>

      {/* Safety & Protocol Banner from DCC notices */}
      <div className="safety-protocols-card">
        <div className="protocol-header">
          <span className="protocol-badge">SAFETY &amp; CONDUCT DIRECTIVES</span>
          <h4>Official Centre Usage &amp; Registration Notice</h4>
          <p className="charity-subhead">{officialFacts.charityInfo}</p>
        </div>

        <div className="protocol-columns">
          <div className="protocol-col">
            <h5>Registration Before Play</h5>
            <p>
              Please visit the upstairs reception office before playing to register. All users must confirm they understand conditions of use and relevant safeguarding standards.
            </p>
          </div>
          <div className="protocol-col">
            <h5>Bowling Machine Induction</h5>
            <p>
              Before the first use of any BOLA or Merlyn bowling machine, users must report to the management office to complete the safety procedure document.
            </p>
          </div>
          <div className="protocol-col">
            <h5>Emergency &amp; First Aid</h5>
            <p>
              <strong>Defibrillator Location:</strong> Main Office on the first floor. Emergency 999 protocols in place. Supervisory staff on site during peak sessions.
            </p>
          </div>
          <div className="protocol-col">
            <h5>Spectator Guidelines</h5>
            <p>
              Spectators must remain in designated first-floor viewing areas. No food, alcohol, or chewing gum allowed on playing turf surfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
