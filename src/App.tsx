import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import './App.css'
import SiteLayout from './components/SiteLayout'
import HomePage from './pages/HomePage'
import FacilitiesPage from './pages/FacilitiesPage'
import BookingsPage from './pages/BookingsPage'
import CoachingPage from './pages/CoachingPage'
import LeaguesPage from './pages/LeaguesPage'
import VenuePage from './pages/VenuePage'

export default function App() {
  const navigate = useNavigate()

  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage onNavigate={(p) => navigate(p)} />} />
        <Route path="/facilities" element={<FacilitiesPage onNavigate={(p) => navigate(p)} />} />
        <Route path="/bookings" element={<BookingsPage onNavigate={(p) => navigate(p)} />} />
        <Route path="/coaching" element={<CoachingPage onNavigate={(p) => navigate(p)} />} />
        <Route path="/leagues" element={<LeaguesPage onNavigate={(p) => navigate(p)} />} />
        <Route path="/venue" element={<VenuePage onNavigate={(p) => navigate(p)} />} />

        {/* Backward compatibility redirects for legacy .html paths */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/facilities.html" element={<Navigate to="/facilities" replace />} />
        <Route path="/bookings.html" element={<Navigate to="/bookings" replace />} />
        <Route path="/coaching.html" element={<Navigate to="/coaching" replace />} />
        <Route path="/leagues.html" element={<Navigate to="/leagues" replace />} />
        <Route path="/venue.html" element={<Navigate to="/venue" replace />} />

        {/* Fallback to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  )
}
