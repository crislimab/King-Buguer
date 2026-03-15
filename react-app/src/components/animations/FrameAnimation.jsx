import { motion } from 'framer-motion'

const FrameAnimation = ({ frames, duration = 12 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/60 to-brand-dark/15 z-10" />

      {/* Frames */}
      <div className="relative w-full h-full">
        {frames.map((frame, index) => {
          const totalFrames = frames.length
          const frameDuration = duration / totalFrames
          const startPercent = (index * 100) / totalFrames
          const endPercent = ((index + 1) * 100) / totalFrames

          return (
            <motion.img
              key={index}
              src={frame}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: duration,
                times: [
                  startPercent / 100,
                  (startPercent + 1) / 100,
                  (endPercent - 1) / 100,
                  endPercent / 100,
                ],
                ease: 'easeInOut',
              }}
              style={{
                opacity: 0,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default FrameAnimation
