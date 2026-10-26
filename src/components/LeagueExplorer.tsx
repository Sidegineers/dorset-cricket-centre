import { useState } from 'react'
import { Link } from 'react-router-dom'
import ArrowIcon from './ArrowIcon'
import { assetUrl } from '../utils/asset'
import {
  premierDivisionData,
  divisionOneData,
  juniorAgeGroups,
  phoneNumber,
  phoneLink
} from '../data/dcc'

type LeagueTab = 'premier' | 'division1' | 'juniors' | 'rules'

export default function LeagueExplorer() {
  const [activeTab, setActiveTab] = useState<LeagueTab>('premier')

  return (
    <section className="leagues-narrative-section" id="leagues" aria-labelledby="leagues-title">
      <div className="section-intro-editorial">
        <span className="eyebrow-chip">COMPETITION &amp; LEAGUES</span>
        <h2 id="leagues-title" className="editorial-heading">
          Winter indoor cricket.<br />
          <em>Fast, fierce &amp; 6-a-side.</em>
        </h2>
        <p className="editorial-lead">
          Dorset Cricket Centre hosts one of the South Coast’s premier winter indoor leagues, running competitive divisions for adult clubs, women’s teams, and junior development squads across East Dorset.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="leagues-tab-bar" role="tablist" aria-label="League categories">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'premier'}
          className={`league-tab-btn${activeTab === 'premier' ? ' is-active' : ''}`}
          onClick={() => setActiveTab('premier')}
        >
          <span>Adult Premier Division</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'division1'}
          className={`league-tab-btn${activeTab === 'division1' ? ' is-active' : ''}`}
          onClick={() => setActiveTab('division1')}
        >
          <span>Adult Division 1</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'juniors'}
          className={`league-tab-btn${activeTab === 'juniors' ? ' is-active' : ''}`}
          onClick={() => setActiveTab('juniors')}
        >
          <span>Junior Pathways (U9–U15)</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'rules'}
          className={`league-tab-btn${activeTab === 'rules' ? ' is-active' : ''}`}
          onClick={() => setActiveTab('rules')}
        >
          <span>6-a-side Match Format</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div className="league-tab-content">
        {/* ADULT PREMIER DIVISION */}
        {activeTab === 'premier' && (
          <div className="league-standings-container">
            <div className="standings-header-row">
              <div>
                <span className="division-badge">{premierDivisionData.season}</span>
                <h3 className="division-name">{premierDivisionData.name}</h3>
                <p className="division-desc">{premierDivisionData.overview}</p>
              </div>
            </div>

            <div className="table-responsive">
              <table className="standings-table">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: '60px' }}>Pos</th>
                    <th scope="col">Club / Team</th>
                    <th scope="col" className="text-center">P</th>
                    <th scope="col" className="text-center">W</th>
                    <th scope="col" className="text-center">L</th>
                    <th scope="col" className="text-center">NRR</th>
                    <th scope="col" className="text-center">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {premierDivisionData.teams.map((t) => (
                    <tr key={t.rank} className={t.rank <= 2 ? 'is-top-tier' : ''}>
                      <td className="rank-cell"><strong>{t.rank}</strong></td>
                      <td className="team-cell">
                        <strong>{t.team}</strong>
                      </td>
                      <td className="text-center">{t.played}</td>
                      <td className="text-center">{t.won}</td>
                      <td className="text-center">{t.lost}</td>
                      <td className="text-center nrr-cell">{t.netRunRate}</td>
                      <td className="text-center points-cell"><strong>{t.points}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="league-editorial-card">
              <div className="editorial-media">
                <img
                  src={assetUrl('images/dcc/Screenshot-2023-03-07-at-15.25.35.png')}
                  alt="Dorset Cricket Centre 6-a-side indoor league match in action in the Main Hall"
                  className="league-action-photo"
                />
              </div>
              <div className="editorial-copy">
                <h4>Interested in entering a team or joining a club?</h4>
                <p>
                  DCC winter leagues run weekly throughout the autumn and winter months under the lights. To inquire about league vacancies or register a squad, contact Craig Campbell.
                </p>
                <div className="editorial-links">
                  <a href={`tel:${phoneLink}`} className="btn btn-primary">
                    <span>Call League Organiser ({phoneNumber})</span>
                    <ArrowIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ADULT DIVISION 1 */}
        {activeTab === 'division1' && (
          <div className="league-standings-container">
            <div className="standings-header-row">
              <div>
                <span className="division-badge">{divisionOneData.season}</span>
                <h3 className="division-name">{divisionOneData.name}</h3>
                <p className="division-desc">{divisionOneData.overview}</p>
              </div>
            </div>

            <div className="table-responsive">
              <table className="standings-table">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: '60px' }}>Pos</th>
                    <th scope="col">Club / Team</th>
                    <th scope="col" className="text-center">P</th>
                    <th scope="col" className="text-center">W</th>
                    <th scope="col" className="text-center">L</th>
                    <th scope="col" className="text-center">NRR</th>
                    <th scope="col" className="text-center">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {divisionOneData.teams.map((t) => (
                    <tr key={t.rank} className={t.rank <= 2 ? 'is-top-tier' : ''}>
                      <td className="rank-cell"><strong>{t.rank}</strong></td>
                      <td className="team-cell">
                        <strong>{t.team}</strong>
                      </td>
                      <td className="text-center">{t.played}</td>
                      <td className="text-center">{t.won}</td>
                      <td className="text-center">{t.lost}</td>
                      <td className="text-center nrr-cell">{t.netRunRate}</td>
                      <td className="text-center points-cell"><strong>{t.points}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* JUNIOR LEAGUES */}
        {activeTab === 'juniors' && (
          <div className="junior-leagues-grid">
            {juniorAgeGroups.map((jg) => (
              <div key={jg.id} className="junior-age-card">
                <span className="junior-badge">{jg.format}</span>
                <h4>{jg.title}</h4>
                <p>{jg.description}</p>
              </div>
            ))}

            <div className="junior-cta-banner">
              <div>
                <h4>Spectator Viewing Lounge</h4>
                <p>Parents and spectators can watch all junior matches from the elevated first-floor gallery overlooking the hall.</p>
              </div>
              <Link to="/venue" className="btn btn-outline">
                <span>Club Facilities & Lounge</span>
              </Link>
            </div>
          </div>
        )}

        {/* 6-A-SIDE MATCH FORMAT */}
        {activeTab === 'rules' && (
          <div className="rules-cards-grid">
            <div className="rule-box">
              <span className="rule-index">01</span>
              <h4>6-a-Side Squads</h4>
              <p>Each team consists of six players. In pairs competitions, every player bowls two overs and bats in pairs.</p>
            </div>
            <div className="rule-box">
              <span className="rule-index">02</span>
              <h4>12-Over Innings</h4>
              <p>Fast-paced 12 overs per innings. Maximum 3 overs per bowler to ensure dynamic rotation of all squad members.</p>
            </div>
            <div className="rule-box">
              <span className="rule-index">03</span>
              <h4>Boundary Net Rules</h4>
              <p>Balls striking the side netting score bonus runs; hitting the back wall on the full scores boundary maximums.</p>
            </div>
            <div className="rule-box">
              <span className="rule-index">04</span>
              <h4>Indoor Footwear</h4>
              <p>Non-marking rubber-soled indoor trainers only. Spikes and dirty outdoor footwear strictly prohibited on turf.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
