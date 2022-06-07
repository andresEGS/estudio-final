import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Consulta } from './components/Consulta'
import { Home } from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="consultas" element={<Consulta />} />
        {/* <Route path="users/:id" element={<Consulta />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
