import { useState, useEffect, useRef } from 'react'

/**
 * Hook de counter animation — anima número de 0 ao valor final quando o elemento
 * entra no viewport. Segue SKILL rule: stagger + meaningful animation.
 */
export function useCountUp(target, duration = 1800, shouldStart = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    // Parse o número alvo (remove não-numéricos para extrair o valor)
    const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ''))
    if (isNaN(numericTarget)) {
      setCount(target) // fallback: usa o valor original
      return
    }

    const startTime = performance.now()
    let raf

    const step = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // easeOut cubic para sensação natural (SKILL: spring-physics / easing)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = numericTarget * eased

      // Formata mantendo casas decimais se houver
      const formatted = numericTarget % 1 !== 0
        ? current.toFixed(1)
        : Math.round(current).toLocaleString('pt-BR')

      setCount(formatted)

      if (progress < 1) {
        raf = requestAnimationFrame(step)
      } else {
        // Ao final, restaura o valor exato original
        setCount(numericTarget % 1 !== 0
          ? numericTarget.toFixed(1)
          : numericTarget.toLocaleString('pt-BR'))
      }
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, shouldStart])

  return count
}
