import { useNavigate, Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ImmersiveFacilityExplorer from '../components/ImmersiveFacilityExplorer'
import ArrowIcon from '../components/ArrowIcon'

interface HomePageProps {
  onNavigate?: (path: string) => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const navigate = useNavigate()

  const handleFacilityBook = (facilityId: string) => {
    const target = `/bookings?lane=${facilityId}`
    if (onNavigate) {
      onNavigate(target)
    } else {
      navigate(target)
    }
  }

  const handleExploreScroll = () => {
    const explorerEl = document.getElementById('explore-centre')
    if (explorerEl) {
      explorerEl.scrollIntoView({ behavior: 'smooth' })
    } else if (onNavigate) {
      onNavigate('/facilities')
    } else {
      navigate('/facilities')
    }
  }

  return (
    <div className="home-page-narrative">
      {/* 01: CINEMATIC MAIN HALL HERO IMAGE */}
      <Hero onExploreClick={handleExploreScroll} />

      {/* 02: THE SPACE & INTERACTIVE FACILITY EXPLORER */}
      <section className="home-editorial-section" id="explore-centre" aria-label="Explore the centre">
        <div className="content-wrap">
          <div className="editorial-divider-bar">
            <span>01 — THE FACILITY</span>
            <span className="divider-line" />
            <span>INTERACTIVE PLAN</span>
          </div>

          <ImmersiveFacilityExplorer onBookFacility={handleFacilityBook} />
        </div>
      </section>

      {/* 03: WHAT'S ON — CLEAN NAVIGATION CARDS (NO HUGE SCROLL) */}
      <section className="home-editorial-section content-wrap" aria-label="What is on at Dorset Cricket Centre">
        <div className="editorial-divider-bar">
          <span>02 — WHAT&apos;S ON</span>
          <span className="divider-line" />
          <span>PROGRAMMES &amp; ACTIVITIES</span>
        </div>

        <div className="home-hub-grid">
          {/* Card 1: Lane Rates & Schedule */}
          <div className="hub-card">
            <span className="eyebrow-chip">LANE HIRE</span>
            <h3 className="hub-card-title">Session Rates &amp; Hours</h3>
            <p className="hub-card-desc">
              Individual full-length nets (£25/h adult, £23/h junior) and dedicated Bowling Machine Lane (£26/h adult, £24/h junior) with regulation crease markings.
            </p>
            <Link to="/bookings" className="btn btn-outline btn-sm">
              <span>View Rates &amp; Hours</span>
              <ArrowIcon />
            </Link>
          </div>

          {/* Card 2: Coaching & Bowling Machines */}
          <div className="hub-card">
            <span className="eyebrow-chip">TECH &amp; COACHING</span>
            <h3 className="hub-card-title">BOLA Pace &amp; Merlyn Spin</h3>
            <p className="hub-card-desc">
              Four BOLA bowling machines, dedicated Merlyn spin unit, and video review. Available for 1-on-1 coaching, club practice, and solo batting sessions.
            </p>
            <Link to="/coaching" className="btn btn-outline btn-sm">
              <span>Explore Coaching &amp; Tech</span>
              <ArrowIcon />
            </Link>
          </div>

          {/* Card 3: Winter Leagues */}
          <div className="hub-card">
            <span className="eyebrow-chip">COMPETITION</span>
            <h3 className="hub-card-title">Winter Indoor Leagues</h3>
            <p className="hub-card-desc">
              Adult Premier Division, Division 1, and youth age groups (U9 through U15). 6-a-side match regulations, fixtures, and league tables.
            </p>
            <Link to="/leagues" className="btn btn-outline btn-sm">
              <span>View League Standings</span>
              <ArrowIcon />
            </Link>
          </div>

          {/* Card 4: Venue & Viewing Lounge */}
          <div className="hub-card">
            <span className="eyebrow-chip">VENUE &amp; ACCESS</span>
            <h3 className="hub-card-title">Viewing Gallery &amp; Location</h3>
            <p className="hub-card-desc">
              First-floor spectator viewing lounge, meeting facilities, and free parking at Hurn Bridge Sports Club, Avon Causeway, Christchurch.
            </p>
            <Link to="/venue" className="btn btn-outline btn-sm">
              <span>Venue &amp; Directions</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
