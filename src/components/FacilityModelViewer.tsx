import { useState } from 'react'
import { facilities, firstFloorAreas } from '../data/dcc'
import type { FacilityId } from '../data/dcc'
import { assetUrl } from '../utils/asset'

export type ViewMode = 'arena' | 'mezzanine'

interface FacilityModelViewerProps {
  selectedFacilityId: FacilityId | null
  onSelectFacility: (id: FacilityId) => void
  initialViewMode?: ViewMode
  compact?: boolean
  interactiveBookingMode?: boolean
}

export default function FacilityModelViewer({
  selectedFacilityId,
  onSelectFacility,
  initialViewMode = 'arena',
  compact = false,
  interactiveBookingMode = false,
}: FacilityModelViewerProps) {
  const [viewMode, setViewMode] = useState<ViewMode>(initialViewMode)
  const [hoveredFacilityId, setHoveredFacilityId] = useState<FacilityId | null>(null)
  const [selectedMezzanineId, setSelectedMezzanineId] = useState<string>('viewing-gallery')
  const [isZoomed, setIsZoomed] = useState<boolean>(false)

  const activeMezzanine = firstFloorAreas.find((a) => a.id === selectedMezzanineId)

  return (
    <div className={`facility-model-container${compact ? ' is-compact' : ''}`}>
      {/* Viewport Header Bar */}
      <div className="model-toolbar" role="toolbar" aria-label="Facility perspective controls">
        {interactiveBookingMode ? (
          <div className="booking-lane-picker-header">
            <span className="tab-dot" />
            <span className="tab-title">Main Hall Practice Lanes</span>
            <span className="tab-tag">5 Nets + Bowling Lane</span>
          </div>
        ) : (
          <div className="view-mode-tabs" role="tablist" aria-label="Floor selection">
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === 'arena'}
              className={`view-tab${viewMode === 'arena' ? ' is-active' : ''}`}
              onClick={() => setViewMode('arena')}
            >
              <span className="tab-dot" />
              <span className="tab-title">Ground Floor · Indoor Hall</span>
              <span className="tab-tag">5 Nets + Lane</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === 'mezzanine'}
              className={`view-tab${viewMode === 'mezzanine' ? ' is-active' : ''}`}
              onClick={() => setViewMode('mezzanine')}
            >
              <span className="tab-dot" />
              <span className="tab-title">First Floor · Viewing &amp; Suites</span>
              <span className="tab-tag">Mezzanine Plan</span>
            </button>
          </div>
        )}

        <div className="model-toolbar-actions">
          {viewMode === 'arena' && (
            <button
              type="button"
              className={`zoom-btn${isZoomed ? ' is-active' : ''}`}
              onClick={() => setIsZoomed(!isZoomed)}
              title={isZoomed ? 'Reset zoom' : 'Focus on nets'}
              aria-label={isZoomed ? 'Reset zoom' : 'Focus on nets'}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                {isZoomed ? (
                  <line x1="8" y1="11" x2="14" y2="11" />
                ) : (
                  <>
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </>
                )}
              </svg>
              <span>{isZoomed ? 'Standard View' : 'Focus Nets'}</span>
            </button>
          )}

          {interactiveBookingMode && (
            <div className="booking-model-indicator">
              <span className="pulse-indicator" />
              <span>Select any lane to book</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Viewport */}
      <div className={`model-viewport${isZoomed ? ' is-zoomed' : ''}`}>
        {viewMode === 'arena' ? (
          <div className="arena-plan-wrapper">
            <img
              src={assetUrl('images/cricket-lanes-plan.jpg')}
              alt="Dorset Cricket Centre architectural view of the five indoor cricket nets and bowling lane"
              className="arena-base-image"
              loading="eager"
            />

            {/* Seamless Interactive Region Mapping (Accurate Perspective Angles) */}
            <svg
              className="arena-interactive-overlay"
              viewBox="0 0 1536 1024"
              preserveAspectRatio="xMidYMid meet"
              role="img"
              aria-label="Interactive map of indoor cricket lanes"
            >
              <defs>
                <linearGradient id="gold-stroke-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#b48c36" />
                  <stop offset="100%" stopColor="#e5be6b" />
                </linearGradient>
              </defs>

              {/* Interactive Net Polygons */}
              {facilities.map((fac) => {
                const isSelected = selectedFacilityId === fac.id
                const isHovered = hoveredFacilityId === fac.id
                const isMachineLane = fac.id === 'coaching-lane'

                return (
                  <polygon
                    key={fac.id}
                    points={fac.hotspot.polygon}
                    className={`lane-hotspot-poly${isSelected ? ' is-selected' : ''}${isHovered ? ' is-hovered' : ''}`}
                    onClick={() => onSelectFacility(fac.id)}
                    onMouseEnter={() => setHoveredFacilityId(fac.id)}
                    onMouseLeave={() => setHoveredFacilityId(null)}
                    fill={
                      isSelected
                        ? isMachineLane
                          ? 'rgba(0, 47, 81, 0.38)'
                          : 'rgba(2, 132, 199, 0.32)'
                        : isHovered
                          ? 'rgba(2, 132, 199, 0.16)'
                          : 'rgba(0, 0, 0, 0.001)'
                    }
                    stroke={
                      isSelected
                        ? isMachineLane
                          ? '#002f51'
                          : '#005ea6'
                        : isHovered
                          ? '#0284c7'
                          : 'rgba(255, 255, 255, 0.5)'
                    }
                    strokeWidth={isSelected ? 3 : isHovered ? 2 : 1.5}
                    role="button"
                    tabIndex={0}
                    aria-label={`Select ${fac.name} (${fac.dimensions})`}
                    aria-pressed={isSelected}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        onSelectFacility(fac.id)
                      }
                    }}
                  />
                )
              })}
            </svg>
          </div>
        ) : (
          /* View Mode 2: First Floor Mezzanine Floor Plan */
          <div className="mezzanine-plan-wrapper">
            <div className="mezzanine-image-container">
              <img
                src={assetUrl('images/first-floor-plan.jpg')}
                alt="First floor plan of Dorset Cricket Centre: Viewing Lounge, Meeting Room, and Reception Office"
                className="mezzanine-plan-img"
              />

              <button
                type="button"
                className={`mezzanine-hotspot hotspot-viewing${selectedMezzanineId === 'viewing-gallery' ? ' is-active' : ''}`}
                style={{ top: '18%', left: '55%' }}
                onClick={() => setSelectedMezzanineId('viewing-gallery')}
                aria-label="Viewing Gallery"
              >
                <span className="hotspot-pulse" />
                <span className="hotspot-label">Viewing Gallery</span>
              </button>

              <button
                type="button"
                className={`mezzanine-hotspot hotspot-meeting${selectedMezzanineId === 'training-room' ? ' is-active' : ''}`}
                style={{ top: '42%', left: '42%' }}
                onClick={() => setSelectedMezzanineId('training-room')}
                aria-label="Meeting & Training Room"
              >
                <span className="hotspot-pulse" />
                <span className="hotspot-label">Meeting Room</span>
              </button>

              <button
                type="button"
                className={`mezzanine-hotspot hotspot-office${selectedMezzanineId === 'reception-office' ? ' is-active' : ''}`}
                style={{ top: '78%', left: '48%' }}
                onClick={() => setSelectedMezzanineId('reception-office')}
                aria-label="Reception Office"
              >
                <span className="hotspot-pulse" />
                <span className="hotspot-label">Reception &amp; Office</span>
              </button>
            </div>

            {activeMezzanine && (
              <div className="mezzanine-info-card">
                <span className="info-tag">{activeMezzanine.tag}</span>
                <h4>{activeMezzanine.name}</h4>
                <p className="info-desc">{activeMezzanine.description}</p>
                <ul className="info-feature-list">
                  {activeMezzanine.features.map((feat, idx) => (
                    <li key={idx}>
                      <span className="bullet-dot" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="info-footer">
                  <strong>Access:</strong> {activeMezzanine.usage}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Synchronized Quick Lane Selector Chips */}
      {viewMode === 'arena' && (
        <div className="model-chips-strip" role="group" aria-label="Quick lane selector">
          {facilities.map((fac) => {
            const isSelected = selectedFacilityId === fac.id
            return (
              <button
                key={fac.id}
                type="button"
                className={`lane-selector-chip${isSelected ? ' is-selected' : ''}`}
                onClick={() => onSelectFacility(fac.id)}
                aria-pressed={isSelected}
              >
                <span className="chip-code">{fac.number}</span>
                <span className="chip-name">{fac.shortName}</span>
                <span className="chip-rate">£{fac.adultRate}/h</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
