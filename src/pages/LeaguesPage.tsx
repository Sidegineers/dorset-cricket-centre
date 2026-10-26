import LeagueExplorer from '../components/LeagueExplorer'

interface LeaguesPageProps {
  onNavigate?: (_path: string) => void
}

export default function LeaguesPage({ onNavigate: _onNavigate }: LeaguesPageProps) {
  return (
    <div className="page-container">
      {/* Editorial Header */}
      <section className="page-editorial-hero content-wrap" aria-labelledby="leagues-hero-title">
        <span className="eyebrow-chip">WINTER INDOOR COMPETITIONS</span>
        <h1 id="leagues-hero-title" className="page-hero-title">
          The indoor game.<br />
          <span className="gold-accent-text">Fast, fierce &amp; competitive.</span>
        </h1>
        <p className="page-hero-desc">
          Follow Dorset Cricket Centre’s adult winter divisions, explore youth age-group pathways (U9 through U15), and access official fixtures and league tables.
        </p>
      </section>

      {/* Main League Explorer Component */}
      <div className="content-wrap pb-16">
        <LeagueExplorer />
      </div>
    </div>
  )
}
