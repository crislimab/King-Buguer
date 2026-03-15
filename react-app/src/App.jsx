import { lazy, Suspense } from 'react'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import Destaques from './components/sections/Destaques'
import Sobre from './components/sections/Sobre'
import Diferenciais from './components/sections/Diferenciais'
import CtaFinal from './components/sections/CtaFinal'
import Footer from './components/sections/Footer'
import FabWhatsapp from './components/FabWhatsapp'
import './styles/globals.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Destaques />
        <Sobre />
        <Diferenciais />
        <CtaFinal />
      </main>
      <Footer />
      <FabWhatsapp />
    </>
  )
}

export default App
