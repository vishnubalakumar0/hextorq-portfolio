import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Scrub-links a vertical parallax drift to scroll for every element
 * matching `selector` inside the returned ref. Elements drift by
 * `amount` px across the time they're in view — adds real depth.
 */
export function useParallax(selector, { amount = 60 } = {}) {
  const scope = useRef(null)
  useEffect(() => {
    if (!scope.current) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray(scope.current.querySelectorAll(selector)).forEach((el) => {
        gsap.fromTo(
          el,
          { y: amount },
          {
            y: -amount,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      })
    }, scope)
    return () => ctx.revert()
  }, [selector, amount])
  return scope
}
