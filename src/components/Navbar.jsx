import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { to: '/avaliacao', label: 'Avaliação' },
    { to: '/atividades', label: 'Atividades' },
    { to: '/biblioteca', label: 'Biblioteca' },
    { to: '/especialistas', label: 'Especialistas' },
  ]

  return (
    <nav style={{
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e2eceb',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '3.75rem',
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{
            width: '1.6rem', height: '1.6rem',
            backgroundColor: '#2a9d8f',
            borderRadius: '50%',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.7rem', color: 'white', fontWeight: '800',
          }}>N</span>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: '700',
            fontSize: '1.05rem',
            color: '#1a2e2b',
          }}>NeuroPais</span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: location.pathname === link.to ? '#2a9d8f' : '#4a5568',
                transition: 'color 0.15s ease',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/avaliacao" className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.5rem 1.1rem' }}>
            Começar Avaliação →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2a9d8f', display: 'none' }}
          className="mobile-menu-btn"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: '#ffffff',
          borderTop: '1px solid #e2eceb',
          padding: '1rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
                fontSize: '1rem',
                fontWeight: '500',
                color: location.pathname === link.to ? '#2a9d8f' : '#4a5568',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/avaliacao" className="btn-primary" onClick={() => setMenuOpen(false)} style={{ textAlign: 'center' }}>
            Começar Avaliação →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
