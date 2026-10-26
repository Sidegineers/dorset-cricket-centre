import TrainingSection from '../components/TrainingSection'

interface CoachingPageProps {
  onNavigate?: (_path: string) => void
}

export default function CoachingPage({ onNavigate: _onNavigate }: CoachingPageProps) {
  return (
    <div className="page-container">
      {/* Editorial Header */}
      <section className="page-editorial-hero content-wrap" aria-labelledby="coaching-hero-title">
        <span className="eyebrow-chip">COACHING &amp; TECHNOLOGY</span>
        <h1 id="coaching-hero-title" className="page-hero-title">
          BOLA pace.<br />
          <span className="accent-highlight-text">Merlyn spin. Real coaching.</span>
        </h1>
        <p className="page-hero-desc">
          Four BOLA professional bowling machines, dedicated Merlyn spin simulator, and expert 1-on-1 coaching for cricketers of all ages at Hurn Bridge Sports Club.
        </p>
      </section>

      {/* Main Training Section */}
      <div className="content-wrap">
        <TrainingSection />
      </div>
    </div>
  )
}
