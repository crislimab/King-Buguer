import { motion } from 'framer-motion'
import { DESTAQUES, WHATSAPP } from '../../constants/content.pt-br'

/* ─── SVG Icons ─── */
const IconFire = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C12 .5 8 6 8 10c0 1.1.45 2.1 1.17 2.83C7.84 12.17 7 10.67 7 9c0 0-3 3.5-3 7a8 8 0 0 0 16 0c0-5-4.42-9-8-9" />
    <path d="M12 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" />
  </svg>
)
const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)
const IconNew = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </svg>
)
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

const TAG_ICONS = {
  fire: <IconFire />,
  star: <IconStar />,
  new: <IconNew />,
}

const cardVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const Destaques = () => {
  const diferenciais = [
    'Blend exclusivo moído diariamente',
    'Pão artesanal assado toda manhã',
    'Ingredientes frescos e sem conservantes',
    'Molhos autorais preparados na casa',
    'Montagem artesanal — cada detalhe importa',
  ]

  return (
    <section id="destaques" className="py-20 md:py-32 bg-zinc-900">
      <div className="section-container">

        {/* Layout split: esquerda = texto | direita = cards */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 xl:gap-20 items-start">

          {/* ── Coluna esquerda — texto + info ── */}
          <motion.div
            className="lg:sticky lg:top-28 flex flex-col items-start text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Badge */}
            <span className="badge mb-5">{DESTAQUES.BADGE}</span>

            {/* Título */}
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wider uppercase mb-6 text-white leading-none">
              Os Mais{' '}
              <span className="text-brand-orange">{DESTAQUES.TITLE_HIGHLIGHT}</span>
            </h2>

            {/* Descrição principal */}
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              {DESTAQUES.DESC}
            </p>

            {/* Texto extra — preenche a seção com mais conteúdo */}
            <p className="text-base text-text-muted leading-relaxed mb-8">
              Cada receita é desenvolvida com obsessão por sabor e textura. Usamos cortes nobres do melhor gado brasileiro, temperados com blend exclusivo e grelhados na hora do pedido — nunca antes, nunca depois.
            </p>

            {/* Lista de diferenciais */}
            <div className="flex flex-col gap-3 mb-10">
              {diferenciais.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 text-sm text-text-secondary"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center text-brand-orange">
                    <IconCheck />
                  </span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Separador + número destaque */}
            <div className="border-t border-white/10 pt-8 w-full">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-5xl text-brand-orange">3</span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-white">hambúrgueres</p>
                  <p className="text-xs text-text-muted">mais amados pelos clientes</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Coluna direita — cards empilhados ── */}
          <div className="flex flex-col gap-6">
            {DESTAQUES.ITEMS.map((item, index) => (
              <motion.article
                key={item.id}
                className="product-card group cursor-pointer overflow-hidden rounded-2xl relative"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                aria-label={`${item.title} — ${item.price}`}
              >
                {/* Layout horizontal dentro do card: imagem à esq + info à direita */}
                <div className="flex">

                  {/* Imagem quadrada */}
                  <div className="relative w-44 flex-shrink-0 overflow-hidden bg-zinc-900">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover filter brightness-75 contrast-125"
                      style={{ minHeight: '180px' }}
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.4 }}
                      loading="lazy"
                    />
                    {/* Overlay hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                    {/* Tag */}
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/85 backdrop-blur text-xs font-bold border border-white/10 text-white">
                      {item.tagIcon && TAG_ICONS[item.tagIcon]}
                      {item.tagLabel ?? item.tag}
                    </span>
                  </div>

                  {/* Corpo do card */}
                  <div className="p-6 flex flex-col justify-between flex-1 bg-zinc-800/90">
                    <div>
                      <h3 className="font-display text-2xl tracking-wider mb-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                      <span className="font-display text-2xl text-brand-orange">
                        {item.price}
                      </span>
                      <motion.a
                        href={`https://wa.me/${WHATSAPP.PHONE}?text=${encodeURIComponent(WHATSAPP.MESSAGE_PRODUCT(item.title))}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-small"
                        aria-label={`Pedir ${item.title} pelo WhatsApp`}
                        whileTap={{ scale: 0.95 }}
                      >
                        Pedir agora
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Rodapé dos cards */}
            <motion.p
              className="text-sm text-text-muted text-center mt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              🔒 Pedido 100% pelo WhatsApp — rápido e seguro
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Destaques
