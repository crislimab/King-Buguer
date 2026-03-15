import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SOBRE } from '../../constants/content.pt-br'
import { useCountUp } from '../../hooks/useCountUp'

/* Stat individual com counter animation */
const AnimatedStat = ({ stat, delay }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })
  const [hasStarted, setHasStarted] = useState(false)

  // Dispara o contador quando entrar no viewport
  if (isInView && !hasStarted) setHasStarted(true)

  const counted = useCountUp(stat.number, 1800, hasStarted)

  // Preserva sufixos como "+", "%"
  const suffix = stat.number.replace(/[0-9.,]/g, '')
  const isDecimal = stat.number.includes('.')

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="text-center"
    >
      <div className="font-display text-4xl md:text-5xl text-brand-orange tabular-nums">
        {hasStarted ? (
          <>
            {suffix.startsWith('+') && <span>+</span>}
            {counted}
            {suffix.replace('+', '')}
          </>
        ) : (
          <span className="opacity-0">0</span>
        )}
      </div>
      <p className="text-xs uppercase tracking-widest text-text-muted font-semibold mt-2">
        {stat.label}
      </p>
    </motion.div>
  )
}

const imageVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const contentVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const Sobre = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-brand-dark">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            className="relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-brand-orange/20">
              <img
                src={SOBRE.IMAGE}
                alt="Hambúrguer artesanal King Burguer"
                className="w-full aspect-square object-cover filter brightness-75 contrast-125"
                loading="lazy"
              />
              {/* Subtle glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/10 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
            </div>

            {/* Accent Box */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-brand-orange px-8 py-4 rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              aria-label={`${SOBRE.ACCENT_NUMBER} ${SOBRE.ACCENT_TEXT}`}
            >
              <div className="font-display text-4xl text-white leading-none">
                {SOBRE.ACCENT_NUMBER}
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/90 mt-2">
                {SOBRE.ACCENT_TEXT}
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="badge mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {SOBRE.BADGE}
            </motion.p>

            <h2 className="font-display text-5xl md:text-6xl tracking-wider uppercase mb-8 text-white">
              Feito com{' '}
              <span className="text-brand-orange">{SOBRE.TITLE_HIGHLIGHT}</span>,
              <br />
              Servido com Alma
            </h2>

            <div className="space-y-6 mb-10">
              {SOBRE.PARAGRAPHS.map((para, i) => (
                <p key={i} className="text-lg text-text-secondary leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Stats — 3 colunas com counter animation */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {SOBRE.STATS.map((stat, i) => (
                <AnimatedStat key={i} stat={stat} delay={i * 0.12} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Sobre
