import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react'

const questions = [
  {
    id: 1,
    text: 'A sua criança mantém contacto visual quando lhe fala ou quando a chama pelo nome?',
    options: ['Sim, frequentemente', 'Às vezes', 'Raramente', 'Não observei'],
  },
  {
    id: 2,
    text: 'A sua criança aponta para objetos ou situações para partilhar interesse consigo?',
    options: ['Sim, frequentemente', 'Às vezes', 'Raramente', 'Não observei'],
  },
  {
    id: 3,
    text: 'Quantas palavras a sua criança diz regularmente?',
    options: ['Mais de 20', '10 a 20', 'Menos de 10', 'Ainda não fala'],
  },
  {
    id: 4,
    text: 'A sua criança reage quando ouve o próprio nome?',
    options: ['Sim, quase sempre', 'Às vezes', 'Raramente', 'Nunca'],
  },
  {
    id: 5,
    text: 'A sua criança brinca com outras crianças ou mostra interesse em brincar?',
    options: ['Sim, gosta muito', 'Às vezes', 'Prefere brincar sozinha', 'Não demonstra interesse'],
  },
  {
    id: 6,
    text: 'A sua criança imita gestos ou expressões (ex: bater palmas, acenar adeus)?',
    options: ['Sim, frequentemente', 'Às vezes', 'Raramente', 'Não imita'],
  },
  {
    id: 7,
    text: 'A sua criança tem comportamentos repetitivos (ex: balançar o corpo, alinhar objetos)?',
    options: ['Não', 'Raramente', 'Às vezes', 'Com frequência'],
  },
  {
    id: 8,
    text: 'Como reage a sua criança a mudanças de rotina?',
    options: ['Adapta-se bem', 'Estranha um pouco', 'Fica perturbada', 'Reage muito mal'],
  },
  {
    id: 9,
    text: 'A sua criança tem sensibilidade exagerada a sons, texturas ou luzes?',
    options: ['Não', 'Ligeiramente', 'Com frequência', 'Muito intensamente'],
  },
  {
    id: 10,
    text: 'Consegue a sua criança seguir instruções simples (ex: "vai buscar o sapato")?',
    options: ['Sim, sem problemas', 'Às vezes', 'Com dificuldade', 'Ainda não'],
  },
  {
    id: 11,
    text: 'Qual é a idade da sua criança?',
    options: ['0–2 anos', '3–5 anos', '6–10 anos', 'Mais de 10 anos'],
  },
  {
    id: 12,
    text: 'Já algum profissional de saúde expressou preocupação com o desenvolvimento da sua criança?',
    options: ['Não', 'Mencionou, mas sem urgência', 'Sim, e encaminhou para avaliação', 'Sim, já está em acompanhamento'],
  },
]

export default function Avaliacao() {
  const [started, setStarted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [finished, setFinished] = useState(false)

  const handleAnswer = (option) => {
    setAnswers(prev => ({ ...prev, [questions[current].id]: option }))
    if (current < questions.length - 1) {
      setTimeout(() => setCurrent(c => c + 1), 300)
    } else {
      setTimeout(() => setFinished(true), 300)
    }
  }

  if (finished) {
    return (
      <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '560px', textAlign: 'center' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <CheckCircle size={56} style={{ color: '#2a9d8f', margin: '0 auto' }} />
          </div>
          <h2 style={{ fontFamily: 'Lora, serif', fontWeight: '700', fontSize: '2rem', color: '#1a2e2b', marginBottom: '1rem' }}>
            Obrigada pela confiança.
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#6b7280', lineHeight: '1.75', marginBottom: '1.5rem' }}>
            Com base nas suas respostas, recomendamos que explore as <strong>atividades diárias</strong> adequadas à idade da sua criança e consulte o nosso <strong>diretório de especialistas</strong> para apoio profissional perto de si.
          </p>
          <div style={{
            backgroundColor: '#f7fafa',
            border: '1px solid #c8dedd',
            borderRadius: '1rem',
            padding: '1.5rem',
            marginBottom: '2rem',
            textAlign: 'left',
          }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#2a9d8f', fontWeight: '600', marginBottom: '0.5rem' }}>
              Próximos passos sugeridos:
            </p>
            <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#374151', lineHeight: '1.8', paddingLeft: '1.25rem' }}>
              <li>Explore atividades diárias para estimular a comunicação</li>
              <li>Leia artigos da nossa biblioteca sobre sinais precoces</li>
              <li>Considere contactar um terapeuta da fala ou pedopsiquiatra</li>
            </ul>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/atividades" className="btn-primary">Ver Atividades</Link>
            <Link to="/especialistas" className="btn-outline">Encontrar Especialista</Link>
          </div>
        </div>
      </div>
    )
  }

  if (!started) {
    return (
      <section style={{ padding: '5rem 1.5rem', minHeight: '70vh' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: '#e2eceb',
            borderRadius: '9999px',
            display: 'inline-block',
            padding: '0.3rem 1rem',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.8rem',
            fontWeight: '600',
            color: '#2a9d8f',
            marginBottom: '1.5rem',
            letterSpacing: '0.05em',
          }}>🔒 Confidencial · só para ti</div>

          <h1 style={{
            fontFamily: 'Lora, serif',
            fontWeight: '700',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            color: '#1a2e2b',
            marginBottom: '1.5rem',
            lineHeight: '1.3',
          }}>
            O facto de estares aqui já é um ato de amor.
          </h1>

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem',
            lineHeight: '1.8',
            color: '#4b5563',
            marginBottom: '1rem',
          }}>
            Talvez tenhas chegado depois de muitas pesquisas, de um comentário que te ficou na cabeça, ou só de uma intuição de mãe ou pai. Seja qual for o motivo — <strong>respira fundo</strong>. Vamos olhar para o desenvolvimento da tua criança juntos, com calma.
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem',
            lineHeight: '1.8',
            color: '#4b5563',
            marginBottom: '1rem',
          }}>
            São 12 perguntas simples, no teu ritmo. Não há respostas certas ou erradas — só a tua criança, como ela é hoje. No fim, recebes uma orientação clara, sem rótulos e sem pressa.
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.95rem',
            lineHeight: '1.8',
            color: '#6b7280',
            marginBottom: '2.5rem',
          }}>
            <strong>Lembra-te:</strong> esta avaliação é um ponto de partida, não um diagnóstico. Estamos aqui para te ajudar a ver com mais clareza — não para te assustar.
          </p>

          <button
            onClick={() => setStarted(true)}
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '0.875rem 2.25rem', marginBottom: '1rem' }}
          >
            Estou pronta para começar
          </button>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#9ca3af', marginTop: '1rem' }}>
            Demora cerca de 5 minutos. Podes parar e voltar quando quiseres.
          </p>
        </div>
      </section>
    )
  }

  const q = questions[current]
  const progress = ((current) / questions.length) * 100

  return (
    <section style={{ padding: '4rem 1.5rem', minHeight: '70vh' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        {/* Progress */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#9ca3af' }}>Pergunta {current + 1} de {questions.length}</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#2a9d8f', fontWeight: '600' }}>{Math.round(progress)}%</span>
          </div>
          <div style={{ height: '6px', backgroundColor: '#e2eceb', borderRadius: '9999px' }}>
            <div style={{
              height: '100%',
              width: `${progress}%`,
              backgroundColor: '#2a9d8f',
              borderRadius: '9999px',
              transition: 'width 0.3s ease',
            }} />
          </div>
        </div>

        {/* Question */}
        <h2 style={{
          fontFamily: 'Lora, serif',
          fontWeight: '600',
          fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
          color: '#1a2e2b',
          marginBottom: '2rem',
          lineHeight: '1.45',
        }}>
          {q.text}
        </h2>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
          {q.options.map(opt => (
            <button
              key={opt}
              onClick={() => handleAnswer(opt)}
              style={{
                textAlign: 'left',
                padding: '1rem 1.25rem',
                borderRadius: '0.75rem',
                border: answers[q.id] === opt ? '2px solid #2a9d8f' : '2px solid #e2eceb',
                backgroundColor: answers[q.id] === opt ? '#f7fafa' : 'white',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.95rem',
                color: '#374151',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {opt}
              <ChevronRight size={16} style={{ color: '#9ca3af', flexShrink: 0 }} />
            </button>
          ))}
        </div>

        {/* Back button */}
        {current > 0 && (
          <button
            onClick={() => setCurrent(c => c - 1)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
              color: '#9ca3af',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
            }}
          >
            <ChevronLeft size={14} /> Pergunta anterior
          </button>
        )}
      </div>
    </section>
  )
}
