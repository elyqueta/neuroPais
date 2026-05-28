import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'

const activities = [
  {
    id: 1,
    title: 'Espelho de Sons',
    type: 'Fala',
    typeClass: 'tag-fala',
    duration: '10 min',
    age: '0 – 2 anos',
    ageKey: '0-2',
    description: 'Imitar sons simples em frente ao espelho ajuda a criança a associar movimento da boca ao som.',
    detail: 'Sente-se com a criança em frente a um espelho. Produza sons simples como "ba", "ma", "pa" e observe se ela tenta imitar. Repita devagar, exagerando o movimento da boca. Sorria e elogie cada tentativa.',
  },
  {
    id: 2,
    title: 'Caixa das Texturas',
    type: 'Sensorial',
    typeClass: 'tag-sensorial',
    duration: '15 min',
    age: '0 – 2 anos',
    ageKey: '0-2',
    description: 'Estimula o tato e a curiosidade sensorial com objetos seguros do dia-a-dia.',
    detail: 'Prepare uma caixa com objetos de texturas diferentes: esponja, tecido suave, papel, areia. Deixe a criança explorar livremente enquanto nomeia as sensações: "rugoso", "macio", "frio". Observe as reações.',
  },
  {
    id: 3,
    title: 'Rotina com Fotografias',
    type: 'Social',
    typeClass: 'tag-social',
    duration: '20 min',
    age: '3 – 5 anos',
    ageKey: '3-5',
    description: 'Cartões com fotos da rotina diária dão previsibilidade e reduzem ansiedade.',
    detail: 'Tire fotos simples de momentos do dia: acordar, pequeno-almoço, vestir, brincar, jantar, dormir. Cole-as em cartões e coloque-os em sequência numa parede ou cordão. Reveja a sequência com a criança cada manhã.',
  },
  {
    id: 4,
    title: 'História de Três Palavras',
    type: 'Fala',
    typeClass: 'tag-fala',
    duration: '10 min',
    age: '3 – 5 anos',
    ageKey: '3-5',
    description: 'Construir frases muito curtas estimula a linguagem expressiva sem pressão.',
    detail: 'Escolha um livro simples com imagens. Ao virar cada página, diga apenas 3 palavras sobre a imagem (ex: "cão corre rápido"). Deixe espaço para a criança completar ou repetir. Sem pressa, sem correções.',
  },
  {
    id: 5,
    title: 'Circuito Pela Casa',
    type: 'Motor',
    typeClass: 'tag-motor',
    duration: '25 min',
    age: '6 – 10 anos',
    ageKey: '6-10',
    description: 'Movimento estruturado melhora coordenação e auto-regulação.',
    detail: 'Crie um circuito simples com almofadas para saltar, uma cadeira para contornar, e uma zona para rastejar. Explique as regras com calma. Cronometre e deixe a criança tentar bater o próprio tempo. Celebre o esforço.',
  },
  {
    id: 6,
    title: 'Diário das Emoções',
    type: 'Social',
    typeClass: 'tag-social',
    duration: '15 min',
    age: '6 – 10 anos',
    ageKey: '6-10',
    description: 'Reconhecer emoções é a base da regulação emocional.',
    detail: 'No fim de cada dia, peça à criança para desenhar ou escrever como se sentiu. Apresente cartões com caras de emoções para apoio. Faça o mesmo você — partilhe as suas emoções do dia de forma simples.',
  },
]

const filters = [
  { label: 'Todas as idades', value: 'all' },
  { label: '0 – 2 anos', value: '0-2' },
  { label: '3 – 5 anos', value: '3-5' },
  { label: '6 – 10 anos', value: '6-10' },
]

export default function Atividades() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [expanded, setExpanded] = useState(null)

  const filtered = activeFilter === 'all' ? activities : activities.filter(a => a.ageKey === activeFilter)

  return (
    <div>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(135deg, #f7fafa 0%, #e2eceb 100%)',
        padding: '4rem 1.5rem 3rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-badge">Planos de Atividades</div>
          <h1 style={{
            fontFamily: 'Lora, serif',
            fontWeight: '700',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            color: '#1a2e2b',
            marginBottom: '1rem',
            maxWidth: '680px',
          }}>
            Pequenos momentos diários, grandes passos no desenvolvimento.
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem',
            color: '#6b7280',
            maxWidth: '520px',
            lineHeight: '1.7',
          }}>
            Atividades simples, com materiais que tem em casa. Escolha pela idade da sua criança e faça uma de cada vez — sem pressão.
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
                border: '1px solid #e2eceb',
                overflow: 'hidden',
              }}
            >
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span className={`tag ${a.typeClass}`}>{a.type}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#9ca3af' }}>
                    <Clock size={12} /> {a.duration}
                  </span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#9ca3af' }}>· {a.age}</span>
                </div>
                <h3 style={{ fontFamily: 'Lora, serif', fontWeight: '600', fontSize: '1.1rem', color: '#1a2e2b', marginBottom: '0.6rem' }}>
                  {a.title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#6b7280', lineHeight: '1.65', marginBottom: '1rem' }}>
                  {a.description}
                </p>

                <button
                  onClick={() => setExpanded(expanded === a.id ? null : a.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    color: '#2a9d8f',
                    padding: 0,
                  }}
                >
                  {expanded === a.id ? 'Fechar ▲' : 'Como fazer ▼'}
                </button>

                {expanded === a.id && (
                  <div style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    backgroundColor: '#f7fafa',
                    borderRadius: '0.75rem',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.875rem',
                    color: '#374151',
                    lineHeight: '1.7',
                  }}>
                    {a.detail}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
