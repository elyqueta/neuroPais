import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#2f412c',
      color: '#d2dece',
      padding: '3rem 1.5rem 2rem',
      marginTop: 'auto',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2.5rem',
      }}>
        {/* Brand */}
        <div>
          <div style={{
            fontFamily: 'Lora, Georgia, serif',
            fontWeight: '700',
            fontSize: '1.2rem',
            color: 'white',
            marginBottom: '0.75rem',
          }}>NeuroPais</div>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.875rem',
            lineHeight: '1.6',
            color: '#adc2a7',
            maxWidth: '260px',
          }}>
            Apoio prático e empático para pais e cuidadores de crianças com autismo e atraso na fala. Feito com carinho em Angola, para o mundo lusófono.
          </p>
        </div>

        {/* Links */}
        <div>
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: '600',
            fontSize: '0.875rem',
            color: 'white',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>Plataforma</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              { to: '/avaliacao', label: 'Avaliação' },
              { to: '/atividades', label: 'Atividades' },
              { to: '/biblioteca', label: 'Biblioteca' },
              { to: '/especialistas', label: 'Especialistas' },
            ].map(link => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  color: '#adc2a7',
                  transition: 'color 0.15s ease',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div>
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: '600',
            fontSize: '0.875rem',
            color: 'white',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>Importante</div>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.8rem',
            lineHeight: '1.6',
            color: '#adc2a7',
          }}>
            O conteúdo da NeuroPais é informativo e não substitui avaliação, diagnóstico ou tratamento por profissional de saúde qualificado.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: '1200px',
        margin: '2.5rem auto 0',
        paddingTop: '1.5rem',
        borderTop: '1px solid #3a5136',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.5rem',
      }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#82a07a' }}>
          © 2026 NeuroPais. Todos os direitos reservados.
        </span>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#82a07a' }}>
          Feito com ❤️ em Luanda
        </span>
      </div>
    </footer>
  )
}
