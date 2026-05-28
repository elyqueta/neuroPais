import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

const specialists = [
  {
    id: 1,
    initials: 'AC',
    name: 'Dra. Adelaide Cassoma',
    role: 'Terapeuta da Fala',
    location: 'Talatona, Luanda',
    city: 'luanda',
    phone: '+244 923 000 111',
    email: 'adelaide.cassoma@neuropais.ao',
    color: '#dbeafe',
    textColor: '#1e40af',
  },
  {
    id: 2,
    initials: 'MK',
    name: 'Dr. Mateus Kalunga',
    role: 'Pediatra do Desenvolvimento',
    location: 'Maianga, Luanda',
    city: 'luanda',
    phone: '+244 923 222 333',
    email: 'mateus.kalunga@neuropais.ao',
    color: '#d1fae5',
    textColor: '#065f46',
  },
  {
    id: 3,
    initials: 'CC',
    name: 'Centro Crescer Bem',
    role: 'Centro Multidisciplinar',
    location: 'Centro, Benguela',
    city: 'benguela',
    phone: '+244 923 444 555',
    email: 'info@crescerbem.ao',
    color: '#fef3c7',
    textColor: '#92400e',
  },
  {
    id: 4,
    initials: 'JP',
    name: 'Dra. Joana Pedro',
    role: 'Psicóloga Infantil',
    location: 'Cidade Alta, Huambo',
    city: 'huambo',
    phone: '+244 923 666 777',
    email: 'joana.pedro@neuropais.ao',
    color: '#fce7f3',
    textColor: '#9d174d',
  },
  {
    id: 5,
    initials: 'NI',
    name: 'Núcleo Inclusivo Lubango',
    role: 'Apoio Educativo Especializado',
    location: 'Comercial, Lubango',
    city: 'lubango',
    phone: '+244 923 888 999',
    email: 'contacto@nucleolubango.ao',
    color: '#e2eceb',
    textColor: '#1a7a6e',
  },
  {
    id: 6,
    initials: 'PN',
    name: 'Dr. Paulo Neto',
    role: 'Neuropediatra',
    location: 'Miramar, Luanda',
    city: 'luanda',
    phone: '+244 923 111 222',
    email: 'paulo.neto@neuropais.ao',
    color: '#fef3c7',
    textColor: '#92400e',
  },
]

const cityFilters = [
  { label: 'Todas', value: 'all' },
  { label: 'Luanda', value: 'luanda' },
  { label: 'Benguela', value: 'benguela' },
  { label: 'Huambo', value: 'huambo' },
  { label: 'Lubango', value: 'lubango' },
]

export default function Especialistas() {
  const [activeCity, setActiveCity] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = specialists.filter(s => {
    const matchCity = activeCity === 'all' || s.city === activeCity
    const matchSearch = search === '' || s.name.toLowerCase().includes(search.toLowerCase()) || s.role.toLowerCase().includes(search.toLowerCase())
    return matchCity && matchSearch
  })

  return (
    <div>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(135deg, #f7fafa 0%, #e2eceb 100%)',
        padding: '4rem 1.5rem 3rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-badge">Diretório · Angola</div>
          <h1 style={{
            fontFamily: 'Lora, serif',
            fontWeight: '700',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            color: '#1a2e2b',
            marginBottom: '1rem',
            maxWidth: '600px',
          }}>
            Encontre apoio profissional perto de si.
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem',
            color: '#6b7280',
            maxWidth: '560px',
            lineHeight: '1.7',
            marginBottom: '2rem',
          }}>
            Terapeutas da fala, pediatras do desenvolvimento, psicólogos infantis e centros multidisciplinares — filtre por cidade ou nome.
          </p>

          {/* Search */}
          <input
            type="text"
            placeholder="Pesquisar por nome ou especialidade..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%',
              maxWidth: '440px',
              padding: '0.75rem 1.25rem',
              borderRadius: '9999px',
              border: '2px solid #c8dedd',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9rem',
              outline: 'none',
              backgroundColor: 'white',
              color: '#374151',
            }}
          />
        </div>
      </section>

      {/* City filters */}
      <section style={{ padding: '2rem 1.5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {cityFilters.map(f => (
            <button
              key={f.value}
              onClick={() => setActiveCity(f.value)}
              className={`filter-btn ${activeCity === f.value ? 'active' : ''}`}
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
          {filtered.length === 0 && (
            <div style={{
              gridColumn: '1/-1',
              textAlign: 'center',
              padding: '4rem 1.5rem',
              fontFamily: 'Inter, sans-serif',
              color: '#9ca3af',
            }}>
              Nenhum especialista encontrado com esses critérios.
            </div>
          )}
          {filtered.map(s => (
            <div
              key={s.id}
              className="card-hover"
              style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                border: '1px solid #e2eceb',
                padding: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div
                  className="avatar"
                  style={{
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: s.color,
                    color: s.textColor,
                    fontSize: '0.9rem',
                  }}
                >
                  {s.initials}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Lora, serif', fontWeight: '600', fontSize: '1rem', color: '#1a2e2b', marginBottom: '0.2rem' }}>
                    {s.name}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#6b7280' }}>{s.role}</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <a href={`tel:${s.phone.replace(/\s/g, '')}`} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.85rem',
                  color: '#374151',
                }}>
                  <MapPin size={14} style={{ color: '#9ca3af', flexShrink: 0 }} />
                  {s.location}
                </a>
                <a href={`tel:${s.phone.replace(/\s/g, '')}`} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.85rem',
                  color: '#2a9d8f',
                }}>
                  <Phone size={14} style={{ flexShrink: 0 }} />
                  {s.phone}
                </a>
                <a href={`mailto:${s.email}`} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.85rem',
                  color: '#2a9d8f',
                  wordBreak: 'break-all',
                }}>
                  <Mail size={14} style={{ flexShrink: 0 }} />
                  {s.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
