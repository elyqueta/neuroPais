import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Avaliacao from './pages/Avaliacao'
import Atividades from './pages/Atividades'
import Biblioteca from './pages/Biblioteca'
import Especialistas from './pages/Especialistas'

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/avaliacao" element={<Avaliacao />} />
          <Route path="/atividades" element={<Atividades />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/especialistas" element={<Especialistas />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
