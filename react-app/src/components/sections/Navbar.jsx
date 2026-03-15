import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { NAVBAR, WHATSAPP } from '../../constants/content.pt-br'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    setMenuOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark/95 border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display text-3xl tracking-widest text-white hover:opacity-80 transition-opacity"
        >
          King <span className="text-brand-orange">Burguer</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-2">
          {[
            { label: NAVBAR.LINKS.HOME, id: 'hero' },
            { label: NAVBAR.LINKS.MENU, id: 'destaques' },
            { label: NAVBAR.LINKS.ABOUT, id: 'sobre' },
            { label: NAVBAR.LINKS.DIFFERENTIALS, id: 'diferenciais' },
          ].map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 rounded-lg text-text-secondary text-sm font-medium hover:text-text-primary hover:bg-white/10 transition-all"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 z-50"
          aria-label="Menu"
        >
          <motion.span
            className="w-6 h-0.5 bg-white"
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white"
            animate={{ opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white"
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      <motion.div
        className={`lg:hidden fixed top-0 right-0 h-screen w-80 bg-brand-dark/98 backdrop-blur-md z-40 border-l border-white/10 pt-20 px-6 ${
          menuOpen ? 'block' : 'hidden'
        }`}
        animate={{ x: menuOpen ? 0 : 320 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col gap-4">
          {[
            { label: NAVBAR.LINKS.HOME, id: 'hero' },
            { label: NAVBAR.LINKS.MENU, id: 'destaques' },
            { label: NAVBAR.LINKS.ABOUT, id: 'sobre' },
            { label: NAVBAR.LINKS.DIFFERENTIALS, id: 'diferenciais' },
          ].map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-lg font-semibold text-text-secondary hover:text-brand-orange transition-colors w-full text-left"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
