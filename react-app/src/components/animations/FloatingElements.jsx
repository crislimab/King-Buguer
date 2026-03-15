import { motion } from 'framer-motion'

export const FloatingSparks = () => {
  const sparks = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    duration: 3.5 + Math.random() * 2.5,
    delay: i * 0.5,
    top: Math.random() * 60 + 20,
    right: Math.random() * 40 + 15,
    size: Math.random() * 3 + 3,
  }))

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {sparks.map((spark) => (
        <motion.div
          key={spark.id}
          className="absolute rounded-full bg-brand-orange shadow-lg"
          style={{
            width: spark.size,
            height: spark.size,
            top: `${spark.top}%`,
            right: `${spark.right}%`,
            boxShadow: `0 0 12px 2px rgba(212, 66, 15, 0.6)`,
          }}
          animate={{
            y: [-40, -120],
            opacity: [0, 1, 0.8, 0],
          }}
          transition={{
            duration: spark.duration,
            delay: spark.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export const ScrollIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-6 right-10 z-20 flex flex-col items-center gap-2"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <span className="text-xs uppercase tracking-widest text-text-muted font-semibold">
        Role para baixo
      </span>
      <motion.div
        className="w-px h-10 bg-gradient-to-b from-brand-orange to-transparent"
        animate={{ scaleY: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  )
}
