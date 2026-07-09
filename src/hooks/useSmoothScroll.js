import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Boots Lenis smooth scrolling and wires it into GSAP's ticker so
 * ScrollTrigger and the 3D scene stay perfectly in sync.
 *
 * @param {boolean} enabled  Pass false while the intro loader is on
 *                           screen so the page can't be scrolled yet.
 * @returns {React.MutableRefObject<Lenis|null>}
 */
export function useSmoothScroll(enabled) {
  const ref = useRef(null)

  useEffect(() => {
    if (!enabled) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })
    ref.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    // Recalculate positions once fonts/layout settle.
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    const t = setTimeout(refresh, 400)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      window.removeEventListener('load', refresh)
      clearTimeout(t)
      ref.current = null
    }
  }, [enabled])

  return ref
}
