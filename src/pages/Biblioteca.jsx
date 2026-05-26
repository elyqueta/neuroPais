import { useState } from 'react'
import { Clock, BookOpen, Video, Lightbulb } from 'lucide-react'

const articles = [
  {
    id: 1,
    title: 'Sinais precoces de autismo: o que observar até aos 3 anos',
    type: 'Artigo',
    typeClass: 'tag-artigo',
    duration: '6 min',
    category: 'autismo',
    categoryLabel: 'Autismo',
    categoryClass: 'tag-autismo',
    description: 'Um guia prático e empático para reconhecer sinais sem pânico, com orientações claras de quando procurar ajuda.',
    icon: 'article',
  },
  {
    id: 2,
    title: '5 jogos do dia-a-dia que estimulam a fala',
    type: 'Dica',
    typeClass: 'tag-dica',
    duration: '4 min',
    category: 'atraso',
    categoryLabel: 'Atraso de Fala',
    categoryClass: 'tag-atraso',
    description: 'Atividades simples com objetos que já tem em casa para incentivar a comunicação.',
    icon: 'tip',
  },
  {
    id: 3,
    title: 'Como criar rotinas previsíveis em casa',
    type: 'Artigo',
    typeClass: 'tag-artigo',
    duration: '8 min',
    category: 'parentalidade',
    categoryLabel: 'Parentalidade',
    categoryClass: 'tag-parentalidade',
    description: 'Estrutura, calma e amor: três pilares para construir o dia da sua família.',
    icon: 'article',
  },
  {
    id: 4,
    title: 'Inclusão na escola angolana: direitos da sua criança',
    type: 'Artigo',
    typeClass: 'tag-artigo',
    duration: '10 min',
    category: 'inclusao',
    categoryLabel: 'Inclusão',
    categoryClass: 'tag-inclusao',
    description: 'O que diz a lei e como dialogar com professores e direção escolar.',
    icon: 'article',
  },
  {
    id: 5,
    title: 'Quando o silêncio preocupa: distinguir timidez de atraso',
    type: 'Vídeo',
    typeClass: 'tag-video',
    duration: '7 min',
    category: 'atraso',
    categoryLabel: 'Atraso de Fala',
    categoryClass: 'tag-atraso',
    description: 'Conversa com terapeuta da fala sobre os marcos de comunicação por idade.',
    icon: 'video',
  },
  {
    id: 6,
    title: 'Cuidar de quem cuida: gerir o cansaço parental',
    type: 'Artigo',
    typeClass: 'tag-artigo',
    duration: '5 min',
    category: 'parentalidade',
    categoryLabel: 'Parentalidade',
    categoryClass: 'tag-parentalidade',
    description: 'Pequenas práticas para manter o seu equilíbrio emocional.',
    icon: 'article',
  },
]

const filters = [
  { label: 'Tudo', value: 'all' },
  { label: 'Autismo', value: 'autismo' },
  { label: 'Atraso de Fala', value: 'atraso' },
  { label: 'Parentalidade', value: 'parentalidade' },
  { label: 'Inclusão', value: 'inclusao' },
]

function ArticleIcon({ icon }) {
  const style = { color: '#9ca3af' }
  if (icon === 'video') return <Video size={18} style={style} />
  if (icon === 'tip') return <Lightbulb size={18} style={style} />
  return <BookOpen size={18} style={style} />
}

export default function Biblioteca() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all' ? articles : articles.filter(a => a.category === activeFilter)

  return (
    <div>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(135deg, #f5f7f4 0%, #faeee1 100%)',
        padding: '4rem 1.5rem 3rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-badge">Biblioteca</div>
          <h1 style={{
            fontFamily: 'Lora, serif',
            fontWeight: '700',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            color: '#2f412c',
            marginBottom: '1rem',
            maxWidth: '600px',
          }}>
            Conhecimento que acalma. Em português, com contexto.
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem',
            color: '#6b7280',
            maxWidth: '520px',
            lineHeight: '1.7',
          }}>
            Artigos, vídeos curtos e dicas práticas — selecionados e revistos para famílias lusófonas.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ padding: '2rem 1.5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`filter-btn ${activeFilter === f.value ? 'active' : ''}`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Cards */}
      <section style={{ padding: '2.5rem 1.5rem 5rem' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {filtered.map(a => (
            <div
              key={a.id}
              className="card-hover"
              style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                border: '1px solid #e8ede6',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <ArticleIcon icon={a.icon} />
                <span className={`tag ${a.typeClass}`}>{a.type}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#9ca3af' }}>
                  <Clock size={12} /> {a.duration}
                </span>
              </div>

              <h3 style={{
                fontFamily: 'Lora, serif',
                fontWeight: '600',
                fontSize: '1.05rem',
                color: '#2f412c',
                lineHeight: '1.4',
              }}>
                {a.title}
              </h3>

              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                color: '#6b7280',
                lineHeight: '1.65',
                flex: 1,
              }}>
                {a.description}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className={`tag ${a.categoryClass}`}>{a.categoryLabel}</span>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: '#496543',
                }}>Ler →</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
