import { motion } from 'framer-motion'
import { CTA_FINAL, WHATSAPP } from '../../constants/content.pt-br'

/* SVG WhatsApp icon */
const IconWhatsApp = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

/* SVG Menu icon */
const IconMenu = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <circle cx="3" cy="6" r="1" fill="currentColor" stroke="none" />
    <circle cx="3" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="3" cy="18" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const CtaFinal = () => {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      {/* Animated gradient background — estilo Stripe/Figma */}
      <div className="cta-animated-bg" aria-hidden="true" />

      {/* Radial glow central */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <motion.div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212,66,15,0.25) 0%, rgba(184,134,11,0.1) 50%, transparent 80%)',
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-6xl md:text-8xl tracking-wider uppercase mb-4 text-white leading-none">
            {CTA_FINAL.TITLE_MAIN}
            <br />
            <span className="shimmer-text">{CTA_FINAL.TITLE_HIGHLIGHT}</span>
          </h2>

          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            {CTA_FINAL.DESC}
          </p>

          {/* 2 CTAs — primário WhatsApp + secundário Ver Menu (SKILL: primary-action) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* CTA Primário */}
            <motion.a
              href={`https://wa.me/${WHATSAPP.PHONE}?text=${encodeURIComponent(WHATSAPP.MESSAGE_ORDER)}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-lg px-10 py-4"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              aria-label="Pedir pelo WhatsApp"
            >
              <IconWhatsApp />
              {CTA_FINAL.CTA}
            </motion.a>

            {/* CTA Secundário */}
            <motion.button
              onClick={() => document.getElementById('destaques')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-bold text-base uppercase tracking-wider border-2 border-white/30 text-white/80 hover:border-white hover:text-white transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Ver nosso cardápio"
            >
              <IconMenu />
              Ver Cardápio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CtaFinal
