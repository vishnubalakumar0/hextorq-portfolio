import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Attaches a ScrollTrigger to every element matching `selector`
 * inside the returned ref, toggling `.is-visible` as it enters view.
 * Pairs with the `.reveal` CSS class for staggered fade-ups.
 */
export function useReveal(selector = '.reveal', { start = 'top 82%', stagger = 0.09 } = {}) {
  const scope = useRef(null)

  useEffect(() => {
    if (!scope.current) return
    const els = gsap.utils.toArray(scope.current.querySelectorAll(selector))

    const triggers = els.map((el, i) =>
      ScrollTrigger.create({
        trigger: el,
        start,
        once: true,
        onEnter: () => {
          // Stagger elements that enter together, reset per row of 6.
          gsap.delayedCall((i % 6) * stagger, () => el.classList.add('is-visible'))
        },
      })
    )

    return () => triggers.forEach((t) => t.kill())
  }, [selector, start, stagger])

  return scope
}
