import ArrowIcon from './ArrowIcon'
import { phoneLink, phoneNumber } from '../data/dcc'

export default function TrainingSection() {
  return (
    <section className="training-narrative-section" id="coaching" aria-labelledby="training-title">
      <div className="section-intro-editorial">
        <span className="eyebrow-chip">TRAINING &amp; COACHING</span>
        <h2 id="training-title" className="editorial-heading">
          Bowling machines &amp; coaching.<br />
          <em>Practice at every level.</em>
        </h2>
        <p className="editorial-lead">
          From grassroots junior development to senior club preparation, Dorset Cricket Centre provides 4 BOLA pace machines, a dedicated Merlyn spin simulator, true-bounce synthetic turf, and individual coaching lanes.
        </p>
      </div>

      <div className="training-layout-grid">
        {/* Real DCC BOLA Machine Photography Feature */}
        <div className="training-media-card">
          <div className="training-photo-wrapper">
            <img
              src="/images/dcc/Screenshot-2023-03-07-at-15.24.31.png"
              alt="Authentic BOLA bowling machine session underway in Dorset Cricket Centre indoor nets"
              className="training-feature-photo"
            />
            <div className="training-photo-caption">
              <span>Authentic DCC Practice · BOLA Professional Pace Unit</span>
            </div>
          </div>
          <div className="training-media-details">
            <h4>4× BOLA Professional Pace Machines</h4>
            <p>
              Four calibrated BOLA machines deployable across the indoor nets. Micro-adjustable speed up to 95+ mph, seam angles, and swing trajectory to test batting technique at any pace.
            </p>
          </div>
        </div>

        {/* Real DCC Fast Bowling Action Feature */}
        <div className="training-media-card">
          <div className="training-photo-wrapper">
            <img
              src="/images/dcc/Screenshot-2023-03-07-at-11.02.50.png"
              alt="Fast bowler delivering at the crease inside Dorset Cricket Centre indoor nets"
              className="training-feature-photo"
            />
            <div className="training-photo-caption">
              <span>DCC Crease Dynamics · Full 36.6 m Run-Up</span>
            </div>
          </div>
          <div className="training-media-details">
            <h4>Merlyn Spin Simulator &amp; Video Review</h4>
            <p>
              Replicates authentic leg-break, off-break, arm ball, and subtle drift to hone footwork against world-class spin. The first-floor meeting suite supports squad video review.
            </p>
          </div>
        </div>
      </div>

      {/* Action Strip with Uniform Buttons */}
      <div className="training-action-strip">
        <div className="action-strip-content">
          <h4>Looking to arrange 1-on-1 coaching or squad lane hire?</h4>
          <p>Contact Centre Manager Craig Campbell to discuss coaching availability and winter block bookings.</p>
        </div>
        <a href={`tel:${phoneLink}`} className="btn btn-primary">
          <span>Call Manager ({phoneNumber})</span>
          <ArrowIcon />
        </a>
      </div>
    </section>
  )
}
