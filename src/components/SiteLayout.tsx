import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { phoneLink, phoneNumber } from '../data/dcc'

export type PageKey = 'home' | 'facilities' | 'bookings' | 'coaching' | 'leagues' | 'venue'

interface SiteLayoutProps {
  children: React.ReactNode
}

interface NavItem {
  key: PageKey
  label: string
  path: string
}

const navItems: NavItem[] = [
  { key: 'home', label: 'Overview', path: '/' },
  { key: 'facilities', label: 'Facilities', path: '/facilities' },
  { key: 'bookings', label: 'Rates & Booking', path: '/bookings' },
  { key: 'coaching', label: 'Coaching & Tech', path: '/coaching' },
  { key: 'leagues', label: 'Winter Leagues', path: '/leagues' },
  { key: 'venue', label: 'Venue & Location', path: '/venue' },
]

export default function SiteLayout({ children }: SiteLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  const isNavActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/index.html'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <div className="site-wrapper theme-light">
      <a className="skip-to-content" href="#main-content">Skip to content</a>

      {/* Translucent Frosted Floating Header */}
      <header className={`site-header translucent-nav${scrolled ? ' is-scrolled' : ''}`}>
        <div className="header-inner">
          {/* Brand Identity */}
          <Link
            to="/"
            className="brand-link"
            aria-label="Dorset Cricket Centre Homepage"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="brand-logo-wrap">
              <img
                src="/dcc-logo.png"
                alt="DCC Cricket Ball Logo"
                className="brand-logo-img"
                width="38"
                height="38"
              />
            </div>
            <div className="brand-titles">
              <span className="brand-super">DORSET</span>
              <span className="brand-main">CRICKET CENTRE</span>
            </div>
          </Link>

          {/* Desktop Navigation - Clean SPA Routes */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = isNavActive(item.path)
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link${isActive ? ' is-active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="active-pip" />}
                </Link>
              )
            })}
          </nav>

          {/* Discreet Direct Telephone Link */}
          <div className="header-actions">
            <a
              href={`tel:${phoneLink}`}
              className="header-phone-badge"
              aria-label={`Call DCC on ${phoneNumber}`}
              title={`Call DCC Manager Craig Campbell (${phoneNumber})`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{phoneNumber}</span>
            </a>

            {/* Mobile Toggle */}
            <button
              type="button"
              className={`mobile-menu-toggle${mobileMenuOpen ? ' is-open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="toggle-bar bar-1" />
              <span className="toggle-bar bar-2" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            <nav className="mobile-nav-list">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`mobile-nav-item${isNavActive(item.path) ? ' is-active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                </Link>
              ))}
              <div className="mobile-drawer-footer">
                <a href={`tel:${phoneLink}`} className="btn btn-primary w-full">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Call Craig Campbell: {phoneNumber}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Page Content */}
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      {/* Minimal Editorial Footer (Inspired by intangible.ai) */}
      <footer className="site-footer-minimal">
        <div className="content-wrap footer-minimal-inner">
          <div className="footer-brand-info">
            <div className="footer-brand-heading">
              <img
                src="/dcc-logo.png"
                alt="DCC Logo"
                className="footer-logo-img"
                width="28"
                height="28"
              />
              <span className="footer-brand-name">Dorset Cricket Centre</span>
            </div>
            <span className="footer-brand-meta">Hurn Bridge Sports Club, Avon Causeway, Christchurch BH23 6DY</span>
          </div>

          <nav className="footer-minimal-nav" aria-label="Footer Navigation">
            <Link to="/facilities">Facilities</Link>
            <Link to="/bookings">Booking</Link>
            <Link to="/coaching">Coaching</Link>
            <Link to="/leagues">Leagues</Link>
            <Link to="/venue">Venue</Link>
          </nav>

          <div className="footer-contact-info">
            <a href={`tel:${phoneLink}`} className="footer-phone-direct">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{phoneNumber}</span>
            </a>
            <span className="footer-manager-note">Craig Campbell · Centre Manager</span>
          </div>
        </div>

        <div className="content-wrap footer-copyright-bar">
          <span>© 2026 Dorset Cricket Centre · Registered Community Sports Trust</span>
          <span>Non-marking indoor trainers only</span>
        </div>
      </footer>
    </div>
  )
}
