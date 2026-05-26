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
      backgroundColor: '#fdf8f3',
      borderBottom: '1px solid #e8ede6',
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
        height: '4rem',
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'Lora, Georgia, serif',
            fontWeight: '700',
            fontSize: '1.25rem',
            color: '#3a5136',
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
                fontSize: '0.9rem',
                fontWeight: '500',
                color: location.pathname === link.to ? '#3a5136' : '#6b7280',
                borderBottom: location.pathname === link.to ? '2px solid #496543' : '2px solid transparent',
                paddingBottom: '2px',
                transition: 'color 0.15s ease',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/avaliacao" className="btn-primary" style={{ fontSize: '0.875rem', padding: '0.5rem 1.25rem' }}>
            Começar Avaliação
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#3a5136', display: 'none' }}
          className="mobile-menu-btn"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: '#fdf8f3',
          borderTop: '1px solid #e8ede6',
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
                color: location.pathname === link.to ? '#3a5136' : '#4b5563',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/avaliacao"
            className="btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{ textAlign: 'center' }}
          >
            Começar Avaliação
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
