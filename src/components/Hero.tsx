import ArrowIcon from './ArrowIcon'
import { phoneLink, phoneNumber } from '../data/dcc'

interface HeroProps {
  onExploreClick?: () => void
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section className="cinematic-photo-hero" aria-labelledby="hero-main-title">
      {/* Real DCC Main Hall Photo as the Hero Background */}
      <div className="hero-backdrop-container">
        <img
          src="/images/dcc/1500x900-main-hall.png"
          alt="Dorset Cricket Centre Main Hall: 5 indoor cricket nets with high-density synthetic turf and ceiling-hung safety netting"
          className="hero-backdrop-img"
          loading="eager"
        />
        <div className="hero-backdrop-scrim" />
      </div>

      <div className="hero-content-overlay content-wrap">
        <div className="hero-editorial-card">
          <div className="hero-topline">
            <span className="location-pill">HURN BRIDGE · CHRISTCHURCH · BH23 6DY</span>
            <span className="season-tag">2026/27 SEASON</span>
          </div>

          <h1 id="hero-main-title" className="hero-cinematic-title">
            Indoor cricket.<br />
            Training. Competition.
          </h1>

          <p className="hero-cinematic-lead">
            Five full-length indoor nets, BOLA bowling machines, and competitive winter leagues.
            A dedicated space to practise, improve and play.
          </p>

          <div className="hero-cta-cluster">
            <a
              href="/facilities"
              className="btn btn-primary"
              onClick={(e) => {
                if (onExploreClick) {
                  e.preventDefault()
                  onExploreClick()
                }
              }}
            >
              <span>Explore the Centre</span>
              <ArrowIcon />
            </a>

            <a href={`tel:${phoneLink}`} className="hero-phone-cta">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Craig Campbell: {phoneNumber}</span>
            </a>
          </div>

          <div className="hero-photo-tag">
            <span className="badge-dot" />
            <span>5 Full-Length Indoor Nets · BOLA Machines · Hurn Bridge</span>
          </div>
        </div>
      </div>
    </section>
  )
}
