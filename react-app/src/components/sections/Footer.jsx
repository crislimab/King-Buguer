import { motion } from 'framer-motion'
import { FOOTER } from '../../constants/content.pt-br'

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-white/10">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#hero" className="font-display text-2xl tracking-widest text-white mb-2 block">
              King <span className="text-brand-orange">Burguer</span>
            </a>
            <p className="text-text-muted text-sm">{FOOTER.TAGLINE}</p>
          </motion.div>

          {/* Sections */}
          {Object.entries(FOOTER.SECTIONS).map(([key, section], idx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h4 className="font-display text-lg tracking-wider uppercase text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-xs text-text-muted uppercase tracking-widest">
            {FOOTER.COPYRIGHT}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
