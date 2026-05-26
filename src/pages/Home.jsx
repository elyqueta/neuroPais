import { Link } from 'react-router-dom'
import { Shield, Heart, CheckCircle } from 'lucide-react'

const testimonials = [
  {
    quote: 'O Kiamvu tem 3 anos e ainda não diz "mamã". A minha sogra dizia que era preguiça. A avaliação aqui mostrou-me que era a hora de procurar a terapeuta — e fizemo-lo juntas.',
    name: 'Domingas N.',
    role: 'Mãe do Kiamvu, 3 anos · Kilamba, Luanda',
    initials: 'DN',
    color: '#d2dece',
  },
  {
    quote: 'Vivemos no Huambo e o pediatra mais próximo está a horas de distância. As atividades diárias deram-nos um caminho para começar em casa, com a avó e os tios a ajudar.',
    name: 'Aurélio S.',
    role: 'Pai da Tchissola, 5 anos · Huambo',
    initials: 'AS',
    color: '#faeee1',
  },
  {
    quote: 'Em Cazenga, somos oito numa casa. Pensava que o meu filho era só tímido com tanta gente. A NeuroPais ajudou-me a ver o que era diferente — sem julgar a nossa forma de viver.',
    name: 'Esperança L.',
    role: 'Mãe do Edgar, 4 anos · Cazenga, Luanda',
    initials: 'EL',
    color: '#e8ede6',
  },
  {
    quote: 'Quando o terapeuta da fala disse o nome "autismo", chorei dois dias. Aqui encontrei outras mães do Lubango. Hoje sei que a Naísa tem o seu ritmo — e está a florescer.',
    name: 'Madalena K.',
    role: 'Mãe da Naísa, 6 anos · Lubango',
    initials: 'MK',
    color: '#fce7f3',
  },
  {
    quote: 'Sou tia e crio o meu sobrinho desde bebé. Pensei que estes sites não falavam comigo. Aqui falam connosco como somos — famílias grandes, com muitas mãos a cuidar.',
    name: 'Felismina B.',
    role: 'Tia-mãe do Délcio, 4 anos · Benguela',
    initials: 'FB',
    color: '#dbeafe',
  },
  {
    quote: 'Em Talatona acesso à informação não falta — falta confiança. Refazer a avaliação cada três meses dá-me coragem para continuar e perceber que estamos a evoluir.',
    name: 'Nelson P.',
    role: 'Pai da Iara, 2 anos · Talatona, Luanda',
    initials: 'NP',
    color: '#fef3c7',
  },
]

const problems = [
  {
    title: 'Dúvidas que pesam',
    desc: 'Será normal? Devo preocupar-me? A informação na internet é confusa e assustadora.',
  },
  {
    title: 'Difícil aceder a apoio',
    desc: 'Especialistas escassos, listas de espera longas e custos elevados.',
  },
  {
    title: 'Sentir-se sozinho/a',
    desc: 'Família e amigos nem sempre compreendem. O cansaço acumula-se em silêncio.',
  },
]

const solutions = [
  {
    title: 'Avaliação guiada',
    desc: 'Um questionário simples e empático que orienta os próximos passos.',
    link: '/avaliacao',
  },
  {
    title: 'Atividades diárias',
    desc: 'Exercícios curtos por faixa etária para fazer em casa, sem stress.',
    link: '/atividades',
  },
  {
    title: 'Biblioteca confiável',
    desc: 'Artigos, vídeos e dicas validadas, organizadas por tema.',
    link: '/biblioteca',
  },
  {
    title: 'Especialistas perto',
    desc: 'Diretório de terapeutas e centros em Angola, filtrado por cidade.',
    link: '/especialistas',
  },
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
      <section style={{
        background: 'linear-gradient(135deg, #f5f7f4 0%, #e8ede6 50%, #faeee1 100%)',
        padding: '5rem 1.5rem 4rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            {/* Tag line */}
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.85rem',
              fontWeight: '600',
              color: '#496543',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1rem',
            }}>Para pais que se preocupam — e isso já diz muito</p>

            <h1 style={{
              fontFamily: 'Lora, Georgia, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#2f412c',
              lineHeight: '1.2',
              marginBottom: '1.5rem',
            }}>
              Respira.<br />
              <span style={{ color: '#496543' }}>Não estás sozinha nesta jornada.</span>
            </h1>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.05rem',
              lineHeight: '1.75',
              color: '#4b5563',
              marginBottom: '2rem',
              maxWidth: '480px',
            }}>
              Sabemos a noite mal dormida, a pergunta que volta sempre:{' '}
              <em>"será que é só uma fase?"</em>. A NeuroPais caminha contigo — passo a passo, sem pressa, sem rótulos — para entenderes o ritmo da tua criança e saberes o que fazer a seguir.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link to="/avaliacao" className="btn-primary">Começar Avaliação</Link>
              <Link to="/biblioteca" className="btn-outline">Explorar Recursos</Link>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#496543', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Shield size={14} /> Privado e seguro
              </span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#496543', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Heart size={14} /> Sem julgamentos
              </span>
            </div>
          </div>

          {/* Right side — image + stat */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '1.5rem',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
              background: '#d2dece',
              aspectRatio: '4/3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img
                src="https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=700&q=80"
                alt="Pai e criança a ler juntos com calma e carinho"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML = `<div style="padding:2rem;text-align:center;color:#496543;font-family:Lora,serif;font-size:1.1rem">👨‍👧 Família</div>`
                }}
              />
            </div>
            {/* Stat badge */}
            <div style={{
              position: 'absolute',
              bottom: '-1rem',
              left: '-1rem',
              backgroundColor: 'white',
              borderRadius: '1rem',
              padding: '1rem 1.25rem',
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'Lora, serif', fontWeight: '700', fontSize: '1.5rem', color: '#3a5136' }}>+1.200</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#6b7280' }}>famílias<br />acompanhadas</div>
            </div>
          </div>
        </div>

        {/* Badges row */}
        <div style={{
          maxWidth: '1200px',
          margin: '3rem auto 0',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          {badges.map(b => (
            <span key={b} style={{
              backgroundColor: 'white',
              border: '1px solid #d2dece',
              borderRadius: '9999px',
              padding: '0.4rem 1rem',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8rem',
              color: '#3a5136',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}>
              <CheckCircle size={13} style={{ color: '#496543' }} /> {b}
            </span>
          ))}
        </div>
      </section>

      {/* Problem section */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-badge">O problema</div>
          <h2 style={{
            fontFamily: 'Lora, serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: '700',
            color: '#2f412c',
            marginBottom: '3rem',
            maxWidth: '600px',
          }}>
            Ser pai ou mãe nunca veio com manual. Quando há sinais diferentes, a incerteza dói ainda mais.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {problems.map(p => (
              <div key={p.title} style={{
                padding: '1.75rem',
                borderRadius: '1rem',
                backgroundColor: '#f5f7f4',
                border: '1px solid #e8ede6',
              }}>
                <h3 style={{ fontFamily: 'Lora, serif', fontWeight: '600', fontSize: '1.1rem', color: '#2f412c', marginBottom: '0.75rem' }}>{p.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#6b7280', lineHeight: '1.65' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution section */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#f5f7f4' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-badge">A solução</div>
          <h2 style={{
            fontFamily: 'Lora, serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: '700',
            color: '#2f412c',
            marginBottom: '3rem',
          }}>
            Um caminho claro, do primeiro sinal à ação concreta.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {solutions.map(s => (
              <Link
                key={s.title}
                to={s.link}
                className="card-hover"
                style={{
                  textDecoration: 'none',
                  backgroundColor: 'white',
                  borderRadius: '1rem',
                  padding: '1.75rem',
                  border: '1px solid #e8ede6',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <h3 style={{ fontFamily: 'Lora, serif', fontWeight: '600', fontSize: '1.1rem', color: '#2f412c' }}>{s.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#6b7280', lineHeight: '1.65', flex: 1 }}>{s.desc}</p>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', fontWeight: '600', color: '#496543' }}>Explorar →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-badge">Como funciona</div>
          <h2 style={{
            fontFamily: 'Lora, serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: '700',
            color: '#2f412c',
            marginBottom: '3rem',
          }}>
            Três passos simples. Ao seu ritmo.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {[
              { num: '01', title: 'Responda à avaliação', desc: '12 perguntas simples sobre o desenvolvimento da sua criança.' },
              { num: '02', title: 'Receba orientação', desc: 'Resultado claro, sem rótulos, com recomendações personalizadas.' },
              { num: '03', title: 'Aja em pequenos passos', desc: 'Atividades diárias, leituras e — quando faz sentido — um especialista.' },
            ].map(step => (
              <div key={step.num} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{
                  fontFamily: 'Lora, serif',
                  fontWeight: '700',
                  fontSize: '2.5rem',
                  color: '#d2dece',
                  lineHeight: 1,
                }}>{step.num}</div>
                <h3 style={{ fontFamily: 'Lora, serif', fontWeight: '600', fontSize: '1.15rem', color: '#2f412c' }}>{step.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#6b7280', lineHeight: '1.65' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#f5f7f4' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-badge">Famílias angolanas</div>
          <h2 style={{
            fontFamily: 'Lora, serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: '700',
            color: '#2f412c',
            marginBottom: '0.75rem',
          }}>
            Histórias reais, da nossa terra.
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem',
            color: '#6b7280',
            marginBottom: '3rem',
            maxWidth: '520px',
          }}>
            De Luanda ao Lubango, de famílias pequenas a casas com avós, tios e primos — somos muitos a cuidar.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map(t => (
              <div key={t.name} style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                padding: '1.75rem',
                border: '1px solid #e8ede6',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}>
                <p style={{
                  fontFamily: 'Lora, Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  color: '#374151',
                  flex: 1,
                }}>"{t.quote}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="avatar" style={{ backgroundColor: t.color, color: '#3a5136' }}>{t.initials}</div>
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '0.875rem', color: '#2f412c' }}>{t.name}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.775rem', color: '#9ca3af' }}>{t.role}</div>
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
        background: 'linear-gradient(135deg, #2f412c 0%, #3a5136 100%)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Lora, serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: '700',
            color: 'white',
            marginBottom: '1rem',
          }}>Dê o primeiro passo. Hoje.</h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem',
            color: '#adc2a7',
            marginBottom: '2rem',
          }}>
            A avaliação é gratuita, leva 5 minutos e dá-lhe clareza imediata sobre o que pode fazer a seguir.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/avaliacao" style={{
              backgroundColor: '#e2a06a',
              color: 'white',
              padding: '0.85rem 2rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '600',
              fontSize: '0.95rem',
              transition: 'background-color 0.2s ease',
            }}>
              Começar Avaliação
            </Link>
            <Link to="/atividades" style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '0.85rem 2rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '600',
              fontSize: '0.95rem',
              border: '2px solid rgba(255,255,255,0.4)',
            }}>
              Ver Atividades
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
