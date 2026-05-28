import { Link } from 'react-router-dom'
import { Shield, Heart, CheckCircle, Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'O Kiamvu tem 3 anos e ainda não diz "mamã". A minha sogra dizia que era preguiça. A avaliação aqui mostrou-me que era a hora de procurar a terapeuta — e fizemo-lo juntas.',
    name: 'Domingas N.',
    role: 'Mãe do Kiamvu, 3 anos · Kilamba, Luanda',
    initials: 'DN',
    color: '#d4f0eb',
    textColor: '#1a7a6e',
  },
  {
    quote: 'Vivemos no Huambo e o pediatra mais próximo está a horas de distância. As atividades diárias deram-nos um caminho para começar em casa, com a avó e os tios a ajudar.',
    name: 'Aurélio S.',
    role: 'Pai da Tchissola, 5 anos · Huambo',
    initials: 'AS',
    color: '#dbeafe',
    textColor: '#1e40af',
  },
  {
    quote: 'Em Cazenga, somos oito numa casa. Pensava que o meu filho era só tímido com tanta gente. A NeuroPais ajudou-me a ver o que era diferente — sem julgar a nossa forma de viver.',
    name: 'Esperança L.',
    role: 'Mãe do Edgar, 4 anos · Cazenga, Luanda',
    initials: 'EL',
    color: '#d1fae5',
    textColor: '#065f46',
  },
  {
    quote: 'Quando o terapeuta da fala disse o nome "autismo", chorei dois dias. Aqui encontrei outras mães do Lubango. Hoje sei que a Naísa tem o seu ritmo — e está a florescer.',
    name: 'Madalena K.',
    role: 'Mãe da Naísa, 6 anos · Lubango',
    initials: 'MK',
    color: '#fce7f3',
    textColor: '#9d174d',
  },
  {
    quote: 'Sou tia e crio o meu sobrinho desde bebé. Pensei que estes sites não falavam comigo. Aqui falam connosco como somos — famílias grandes, com muitas mãos a cuidar.',
    name: 'Felismina B.',
    role: 'Tia-mãe do Délcio, 4 anos · Benguela',
    initials: 'FB',
    color: '#fef3c7',
    textColor: '#92400e',
  },
  {
    quote: 'Em Talatona acesso à informação não falta — falta confiança. Refazer a avaliação cada três meses dá-me coragem para continuar e perceber que estamos a evoluir.',
    name: 'Nelson P.',
    role: 'Pai da Iara, 2 anos · Talatona, Luanda',
    initials: 'NP',
    color: '#ede9fe',
    textColor: '#5b21b6',
  },
]

const problems = [
  { title: 'Dúvidas que pesam', desc: 'Será normal? Devo preocupar-me? A informação na internet é confusa e assustadora.' },
  { title: 'Difícil aceder a apoio', desc: 'Especialistas escassos, listas de espera longas e custos elevados.' },
  { title: 'Sentir-se sozinho/a', desc: 'Família e amigos nem sempre compreendem. O cansaço acumula-se em silêncio.' },
]

const solutions = [
  { title: 'Avaliação guiada', desc: 'Um questionário simples e empático que orienta os próximos passos.', link: '/avaliacao', emoji: '📋' },
  { title: 'Atividades diárias', desc: 'Exercícios curtos por faixa etária para fazer em casa, sem stress.', link: '/atividades', emoji: '🎯' },
  { title: 'Biblioteca confiável', desc: 'Artigos, vídeos e dicas validadas, organizadas por tema.', link: '/biblioteca', emoji: '📚' },
  { title: 'Especialistas perto', desc: 'Diretório de terapeutas e centros em Angola, filtrado por cidade.', link: '/especialistas', emoji: '👩‍⚕️' },
]

const badges = [
  'Conteúdo em português',
  'Adaptado ao contexto angolano',
  'Validado por especialistas',
  'Gratuito para começar',
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#d4f0eb', padding: '4rem 1.5rem 3rem' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '3rem', alignItems: 'center',
        }}>
          <div>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: '600',
              color: '#1a7a6e', marginBottom: '1rem',
            }}>
              🌿 Para pais que se preocupam — e isso já diz muito
            </p>

            <h1 style={{
              fontFamily: 'Inter, sans-serif', fontWeight: '800',
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              color: '#1a2e2b', lineHeight: '1.15', marginBottom: '1.25rem',
            }}>
              Respira.<br />
              <span style={{ color: '#2a9d8f' }}>Não estás sozinha<br />nesta jornada.</span>
            </h1>

            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.95rem',
              lineHeight: '1.75', color: '#2d4a46', marginBottom: '2rem', maxWidth: '440px',
            }}>
              Sabemos a noite mal dormida, a pergunta que volta sempre:{' '}
              <em>"será que é só uma fase?"</em>. A NeuroPais caminha contigo — passo a passo, sem pressa, sem rótulos — para entenderes o ritmo da tua criança e saberes o que fazer a seguir.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <Link to="/avaliacao" className="btn-primary">Começar Avaliação →</Link>
              <Link to="/biblioteca" className="btn-outline">Explorar Recursos</Link>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: '#1a7a6e', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Shield size={13} /> Privado e seguro
              </span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: '#1a7a6e', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Heart size={13} /> Sem julgamentos
              </span>
            </div>
          </div>

          {/* Illustration side */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              backgroundColor: 'white', borderRadius: '1.25rem',
              overflow: 'hidden', width: '100%', maxWidth: '420px',
              aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            }}>
              {/* SVG illustration of parent and child */}
              <svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                {/* Background */}
                <rect width="420" height="320" fill="#f0faf8" />
                {/* Floor */}
                <ellipse cx="210" cy="290" rx="160" ry="18" fill="#d4f0eb" />
                {/* Parent body */}
                <circle cx="155" cy="110" r="36" fill="#c8a882" />
                <rect x="115" y="143" width="80" height="100" rx="20" fill="#6b8f7a" />
                {/* Parent arms */}
                <path d="M115 165 Q80 175 85 210" stroke="#c8a882" strokeWidth="20" fill="none" strokeLinecap="round"/>
                <path d="M195 165 Q230 175 225 210" stroke="#c8a882" strokeWidth="20" fill="none" strokeLinecap="round"/>
                {/* Book */}
                <rect x="90" y="200" width="80" height="55" rx="6" fill="#f4c842" />
                <rect x="90" y="200" width="40" height="55" rx="6" fill="#e8b830" />
                <line x1="130" y1="200" x2="130" y2="255" stroke="#d4a820" strokeWidth="2" />
                {/* Child */}
                <circle cx="245" cy="145" r="28" fill="#f0c9a0" />
                <rect x="215" y="170" width="60" height="75" rx="15" fill="#7ec8c0" />
                {/* Child hair */}
                <ellipse cx="245" cy="125" rx="28" ry="15" fill="#3d2b1f" />
                <ellipse cx="245" cy="117" rx="22" ry="10" fill="#3d2b1f" />
                {/* Parent hair */}
                <ellipse cx="155" cy="85" rx="30" ry="14" fill="#4a3728" />
                {/* Smile lines */}
                <path d="M145 115 Q155 122 165 115" stroke="#8a6545" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M238 152 Q245 158 252 152" stroke="#c8956a" strokeWidth="2" fill="none" strokeLinecap="round"/>
                {/* Stars / sparkles */}
                <text x="300" y="80" fontSize="22" fill="#f4c842">✨</text>
                <text x="60" y="80" fontSize="16" fill="#2a9d8f">💚</text>
                <text x="320" y="170" fontSize="14" fill="#f4c842">⭐</text>
              </svg>
            </div>

            {/* Stat badge */}
            <div style={{
              position: 'absolute', bottom: '-1rem', left: '0',
              backgroundColor: 'white', borderRadius: '0.875rem',
              padding: '0.75rem 1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              display: 'flex', alignItems: 'center', gap: '0.6rem',
            }}>
              <Star size={18} style={{ color: '#f4c842', fill: '#f4c842' }} />
              <div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: '800', fontSize: '1.1rem', color: '#1a2e2b' }}>+1.200 famílias</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: '#718096' }}>acompanhadas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badges strip */}
      <section style={{ backgroundColor: '#1a7a6e', padding: '0.875rem 1.5rem' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'flex', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '0.5rem',
        }}>
          {badges.map(b => (
            <span key={b} style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: '600',
              color: 'white', display: 'flex', alignItems: 'center', gap: '0.4rem',
            }}>
              <span style={{ color: '#7ee8da' }}>›</span> {b.toUpperCase()}
            </span>
          ))}
        </div>
      </section>

      {/* Problem section */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-badge">O PROBLEMA</div>
          <h2 style={{
            fontFamily: 'Inter, sans-serif', fontWeight: '800',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            color: '#1a2e2b', marginBottom: '3rem', maxWidth: '520px', lineHeight: '1.25',
          }}>
            Ser pai ou mãe nunca veio com manual. Quando há sinais diferentes, a incerteza dói ainda mais.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {problems.map(p => (
              <div key={p.title} style={{
                padding: '1.75rem', borderRadius: '1rem',
                backgroundColor: '#f7fafa', border: '1px solid #e2eceb',
              }}>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700', fontSize: '1rem', color: '#1a2e2b', marginBottom: '0.6rem' }}>{p.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#718096', lineHeight: '1.65' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution section */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#f7fafa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-badge">A SOLUÇÃO</div>
          <h2 style={{
            fontFamily: 'Inter, sans-serif', fontWeight: '800',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            color: '#1a2e2b', marginBottom: '3rem', lineHeight: '1.25',
          }}>
            Um caminho claro, do primeiro sinal à ação concreta.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem' }}>
            {solutions.map(s => (
              <Link key={s.title} to={s.link} className="card-hover" style={{
                textDecoration: 'none', backgroundColor: 'white',
                borderRadius: '1rem', padding: '1.5rem',
                border: '1px solid #e2eceb', display: 'flex',
                flexDirection: 'column', gap: '0.6rem',
              }}>
                <span style={{ fontSize: '1.75rem' }}>{s.emoji}</span>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700', fontSize: '0.975rem', color: '#1a2e2b' }}>{s.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#718096', lineHeight: '1.6', flex: 1 }}>{s.desc}</p>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', fontWeight: '700', color: '#2a9d8f' }}>Explorar →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-badge">COMO FUNCIONA</div>
          <h2 style={{
            fontFamily: 'Inter, sans-serif', fontWeight: '800',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            color: '#1a2e2b', marginBottom: '3rem', lineHeight: '1.25',
          }}>
            Três passos simples. Ao seu ritmo.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem' }}>
            {[
              { num: '01', title: 'Responda à avaliação', desc: '12 perguntas simples sobre o desenvolvimento da sua criança.' },
              { num: '02', title: 'Receba orientação', desc: 'Resultado claro, sem rótulos, com recomendações personalizadas.' },
              { num: '03', title: 'Aja em pequenos passos', desc: 'Atividades diárias, leituras e — quando faz sentido — um especialista.' },
            ].map(step => (
              <div key={step.num}>
                <div style={{
                  fontFamily: 'Inter, sans-serif', fontWeight: '800',
                  fontSize: '3rem', color: '#d4f0eb', lineHeight: 1, marginBottom: '0.75rem',
                }}>{step.num}</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700', fontSize: '1rem', color: '#1a2e2b', marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#718096', lineHeight: '1.65' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#f7fafa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-badge">FAMÍLIAS ANGOLANAS</div>
          <h2 style={{
            fontFamily: 'Inter, sans-serif', fontWeight: '800',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            color: '#1a2e2b', marginBottom: '0.6rem', lineHeight: '1.25',
          }}>
            Histórias reais, da nossa terra.
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: '#718096', marginBottom: '3rem', maxWidth: '480px', lineHeight: '1.7' }}>
            De Luanda ao Lubango, de famílias pequenas a casas com avós, tios e primos — somos muitos a cuidar.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {testimonials.map(t => (
              <div key={t.name} style={{
                backgroundColor: 'white', borderRadius: '1rem',
                padding: '1.5rem', border: '1px solid #e2eceb',
                display: 'flex', flexDirection: 'column', gap: '1rem',
              }}>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontStyle: 'italic',
                  fontSize: '0.875rem', lineHeight: '1.7', color: '#374151', flex: 1,
                }}>"{t.quote}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="avatar" style={{ backgroundColor: t.color, color: t.textColor }}>{t.initials}</div>
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700', fontSize: '0.85rem', color: '#1a2e2b' }}>{t.name}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#9ca3af' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '5rem 1.5rem',
        background: 'linear-gradient(135deg, #1a7a6e 0%, #2a9d8f 100%)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Inter, sans-serif', fontWeight: '800',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            color: 'white', marginBottom: '1rem',
          }}>Dê o primeiro passo. Hoje.</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: '#b2e4de', marginBottom: '2rem', lineHeight: '1.7' }}>
            A avaliação é gratuita, leva 5 minutos e dá-lhe clareza imediata sobre o que pode fazer a seguir.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/avaliacao" style={{
              backgroundColor: 'white', color: '#1a7a6e',
              padding: '0.8rem 1.75rem', borderRadius: '9999px',
              textDecoration: 'none', fontFamily: 'Inter, sans-serif',
              fontWeight: '700', fontSize: '0.9rem',
            }}>Começar Avaliação</Link>
            <Link to="/atividades" style={{
              backgroundColor: 'transparent', color: 'white',
              padding: '0.8rem 1.75rem', borderRadius: '9999px',
              textDecoration: 'none', fontFamily: 'Inter, sans-serif',
              fontWeight: '600', fontSize: '0.9rem',
              border: '2px solid rgba(255,255,255,0.5)',
            }}>Ver Atividades</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
