import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

export const useScrollReveal = (options = {}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -100px 0px',
    ...options,
  })

  return { ref, isInView }
}

export const useParallax = (offset = 0) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY * 0.5 + offset
}
