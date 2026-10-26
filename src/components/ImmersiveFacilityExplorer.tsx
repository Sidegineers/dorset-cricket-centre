import { useState } from 'react'
import { facilities } from '../data/dcc'
import type { FacilityId } from '../data/dcc'
import FacilityModelViewer from './FacilityModelViewer'
import ArrowIcon from './ArrowIcon'

interface ImmersiveFacilityExplorerProps {
  initialFacilityId?: FacilityId
  onBookFacility?: (id: FacilityId) => void
}

export default function ImmersiveFacilityExplorer({
  initialFacilityId = 'net-3',
  onBookFacility,
}: ImmersiveFacilityExplorerProps) {
  const [selectedFacilityId, setSelectedFacilityId] = useState<FacilityId>(initialFacilityId)

  const selectedFacility = facilities.find((f) => f.id === selectedFacilityId) ?? facilities[0]

  return (
    <div className="immersive-explorer">
      {/* Explorer Section Header */}
      <div className="explorer-header-block">
        <div className="header-left">
          <h2 className="explorer-main-title">The facility is the interface.</h2>
        </div>
        <p className="explorer-lead">
          Explore Dorset Cricket Centre’s 36.6 m Main Hall and dedicated Bowling Machine Lane. Select any net on the perspective plan below to view physical dimensions and equipment.
        </p>
      </div>

      {/* Main Spatial Grid */}
      <div className="explorer-grid">
        {/* Left / Centre Stage: Perspective Model Viewer */}
        <div className="model-stage-column">
          <FacilityModelViewer
            selectedFacilityId={selectedFacilityId}
            onSelectFacility={(id) => setSelectedFacilityId(id)}
          />
        </div>

        {/* Right Stage: Active Facility Detail Drawer */}
        <aside className="detail-drawer" aria-label="Facility details panel" aria-live="polite">
          <div className="drawer-header">
            <div className="drawer-meta-row">
              <span className="drawer-number">{selectedFacility.number}</span>
              <span className="drawer-tag">{selectedFacility.tag}</span>
            </div>
            <h3 className="drawer-title">{selectedFacility.name}</h3>
            <p className="drawer-category">{selectedFacility.category}</p>
          </div>

          <div className="drawer-body">
            <p className="drawer-description">{selectedFacility.description}</p>
            <p className="drawer-details">{selectedFacility.details}</p>

            {/* Dimensional Specs Grid */}
            <div className="spec-grid">
              {selectedFacility.specs.map((spec) => (
                <div key={spec.label} className="spec-card">
                  <span className="spec-label">{spec.label}</span>
                  <strong className="spec-value">{spec.value}</strong>
                </div>
              ))}
            </div>

            {/* Equipment Available */}
            <div className="drawer-feature-group">
              <h5 className="feature-group-heading">Equipment &amp; Features</h5>
              <div className="feature-tags">
                {selectedFacility.equipment.map((item, idx) => (
                  <span key={idx} className="feature-tag">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Suitable Users / Activities */}
            <div className="drawer-feature-group">
              <h5 className="feature-group-heading">Suitable Practice</h5>
              <ul className="suitable-list">
                {selectedFacility.suitableFor.map((item, idx) => (
                  <li key={idx}>
                    <span className="bullet-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rates & Action */}
            <div className="drawer-pricing-box">
              <div className="pricing-info">
                <span className="pricing-title">Published Rate</span>
                <div className="pricing-rates">
                  <span>Adult: <strong>£{selectedFacility.adultRate}</strong> / hr</span>
                  <span className="pricing-sep">·</span>
                  <span>Junior: <strong>£{selectedFacility.juniorRate}</strong> / hr</span>
                </div>
              </div>

              <a
                href={`/bookings?lane=${selectedFacility.id}`}
                className="btn btn-primary"
                onClick={(e) => {
                  if (onBookFacility) {
                    e.preventDefault()
                    onBookFacility(selectedFacility.id)
                  }
                }}
              >
                <span>View Lane Rates &amp; Times</span>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
