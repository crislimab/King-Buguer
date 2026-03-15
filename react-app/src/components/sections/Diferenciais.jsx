import { motion } from 'framer-motion'
import { DIFERENCIAIS } from '../../constants/content.pt-br'

/* ─── SVG Icons profissionais (SKILL: no-emoji-icons) ─── */
const IconMeat = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18.6 3.4C16.2 1 12.4 1 10 3.4L3.4 10C1 12.4 1 16.2 3.4 18.6c2.4 2.4 6.2 2.4 8.6 0l6.6-6.6c2.4-2.4 2.4-6.2 0-8.6Z" />
    <circle cx="9" cy="9" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)

const IconChef = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
    <line x1="6" y1="17" x2="18" y2="17" />
  </svg>
)

const IconBolt = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

const IconLeaf = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
)

const SVG_ICONS = {
  carne: <IconMeat />,
  artesanal: <IconChef />,
  entrega: <IconBolt />,
  ingredientes: <IconLeaf />,
}

// stagger 40ms (SKILL: stagger-sequence 30–50ms por item)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

// entrada com y e scale (SKILL: hierarchy-motion, scale-feedback)
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const Diferenciais = () => {
  return (
    <section id="diferenciais" className="py-20 md:py-32 bg-zinc-900">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.p
            className="badge mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {DIFERENCIAIS.BADGE}
          </motion.p>
          <motion.h2
            className="font-display text-5xl md:text-6xl tracking-wider uppercase mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            A{' '}
            <span className="text-brand-orange">{DIFERENCIAIS.TITLE_HIGHLIGHT}</span>{' '}
            King
          </motion.h2>
        </div>

        {/* Cards com gradient background + numeração visual + stagger */}
        <motion.div
          className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {DIFERENCIAIS.ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              className="diferencial-card group cursor-default"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.25 }}
              role="article"
              aria-label={item.title}
            >
              {/* SVG Icon */}
              <div className="diferencial-card__icon group-hover:scale-110 transition-transform duration-300">
                {SVG_ICONS[item.id] ?? <IconLeaf />}
              </div>

              <h3 className="font-display text-xl tracking-wider uppercase mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Diferenciais
