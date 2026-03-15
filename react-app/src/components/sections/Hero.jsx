import { motion } from 'framer-motion'
import { HERO, WHATSAPP } from '../../constants/content.pt-br'
import FrameAnimation from '../animations/FrameAnimation'
import { FloatingSparks, ScrollIndicator } from '../animations/FloatingElements'

const IconStar = ({ className }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const IconWhatsApp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

const Hero = () => {
  const frames = [
    '/Imagens/ezgif-frame-001.jpg',
    '/Imagens/ezgif-frame-002.jpg',
    '/Imagens/ezgif-frame-003.jpg',
    '/Imagens/ezgif-frame-004.jpg',
    '/Imagens/ezgif-frame-005.jpg',
    '/Imagens/ezgif-frame-006.jpg',
    '/Imagens/ezgif-frame-007.jpg',
    '/Imagens/ezgif-frame-008.jpg',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <section id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center bg-brand-dark">
      {/* Background Animation — hambúrguer visível à direita */}
      <FrameAnimation frames={frames} duration={12} />

      {/* Gradiente forte à esquerda para legibilidade do texto, abre à direita revelando o hambúrguer */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/65 to-black/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 pointer-events-none" />

      <FloatingSparks />

      {/* Layout: coluna esquerda com texto, direita livre para o hambúrguer */}
      <div className="section-container relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen py-24">

          {/* ── Coluna esquerda — todo o conteúdo ── */}
          <motion.div
            className="flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-950/40 border border-orange-800/60 mb-6 backdrop-blur-sm"
            >
              <IconStar className="text-brand-gold" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                {HERO.BADGE}
              </span>
            </motion.div>

            {/* Título — shimmer em "Hambúrguer" */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-6xl md:text-7xl lg:text-8xl tracking-wider uppercase leading-none mb-6 text-white"
            >
              A Majestade
              <br />
              do{' '}
              <span className="shimmer-text">Hambúrguer</span>
              <br />
              Artesanal
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-lg"
            >
              {HERO.SUBTITLE}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start gap-4 mb-8"
            >
              <button
                onClick={() => document.getElementById('destaques')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-bold text-sm uppercase tracking-wider bg-transparent border-2 border-brand-orange text-brand-orange transition-all duration-300 hover:bg-brand-orange hover:text-white hover:-translate-y-1 shadow-lg hover:shadow-xl cursor-pointer"
                aria-label="Ver nosso cardápio"
              >
                {HERO.CTA_MENU}
              </button>

              <a
                href={`https://wa.me/${WHATSAPP.PHONE}?text=${encodeURIComponent(WHATSAPP.MESSAGE_ORDER)}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                aria-label="Fazer pedido pelo WhatsApp"
              >
                <IconWhatsApp />
                {HERO.CTA}
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + i * 0.08, duration: 0.3, ease: 'backOut' }}
                  >
                    <IconStar className="text-brand-gold" />
                  </motion.span>
                ))}
              </div>
              <p className="text-sm text-text-muted font-medium">
                {HERO.TRUST}
              </p>
            </motion.div>
          </motion.div>

          {/* ── Coluna direita — espaço vazio para o hambúrguer aparecer ── */}
          {/* O background animation preenche esta área naturalmente */}
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}

export default Hero
