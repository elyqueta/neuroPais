import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1a2e2b',
      color: '#a0bfbb',
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
        <div>
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: '700',
            fontSize: '1.1rem',
            color: 'white',
            marginBottom: '0.75rem',
            display: 'flex', alignItems: 'center', gap: '0.4rem',
          }}>
            <span style={{
              width: '1.4rem', height: '1.4rem',
              backgroundColor: '#2a9d8f',
              borderRadius: '50%',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.6rem', color: 'white', fontWeight: '800',
            }}>N</span>
            NeuroPais
          </div>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.85rem',
            lineHeight: '1.65',
            color: '#7aa8a3',
            maxWidth: '260px',
          }}>
            Apoio prático e empático para pais e cuidadores de crianças com autismo e atraso na fala. Feito com carinho em Angola, para o mundo lusófono.
          </p>
        </div>

        <div>
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: '700',
            fontSize: '0.8rem',
            color: 'white',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}>Plataforma</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              { to: '/avaliacao', label: 'Avaliação' },
              { to: '/atividades', label: 'Atividades' },
              { to: '/biblioteca', label: 'Biblioteca' },
              { to: '/especialistas', label: 'Especialistas' },
            ].map(link => (
              <Link key={link.to} to={link.to} style={{
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                color: '#7aa8a3',
              }}>{link.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: '700',
            fontSize: '0.8rem',
            color: 'white',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}>Importante</div>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.8rem',
            lineHeight: '1.65',
            color: '#7aa8a3',
          }}>
            O conteúdo da NeuroPais é informativo e não substitui avaliação, diagnóstico ou tratamento por profissional de saúde qualificado.
          </p>
        </div>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '2.5rem auto 0',
        paddingTop: '1.5rem',
        borderTop: '1px solid #2a4a44',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.5rem',
      }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#4a7a74' }}>
          © 2026 NeuroPais. Todos os direitos reservados.
        </span>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#4a7a74' }}>
          Feito com ❤️ em Luanda
        </span>
      </div>
    </footer>
  )
}
