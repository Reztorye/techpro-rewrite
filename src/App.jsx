import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/shared/ScrollToTop'
import WhatsAppFloat from './components/shared/WhatsAppFloat'
import Home from './pages/Home'
import CleaningFormatting from './pages/CleaningFormatting'
import CustomQuote from './pages/CustomQuote'
import ReadyPCs from './pages/ReadyPCs'
import Services from './pages/Services'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/limpeza-e-formatacao" element={<CleaningFormatting />} />
          <Route path="/orcamento-personalizado" element={<CustomQuote />} />
          <Route path="/pcs-prontos" element={<ReadyPCs />} />
          <Route path="/servicos" element={<Services />} />
        </Routes>
      </Layout>
      <WhatsAppFloat />
    </Router>
  )
}

export default App
