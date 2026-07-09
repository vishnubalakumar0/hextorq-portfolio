import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Adds a subtle 3D tilt toward the cursor on every element matching
 * `selector` inside the returned ref, plus a moving glare highlight.
 * Springs back on leave. Skipped on touch devices.
 */
export function useTilt(selector, { max = 8 } = {}) {
  const scope = useRef(null)

  useEffect(() => {
    if (!scope.current || window.matchMedia('(pointer: coarse)').matches) return
    const els = Array.from(scope.current.querySelectorAll(selector))
    const cleanups = []

    els.forEach((el) => {
      el.style.transformStyle = 'preserve-3d'
      const rotX = gsap.quickTo(el, 'rotationX', { duration: 0.5, ease: 'power3' })
      const rotY = gsap.quickTo(el, 'rotationY', { duration: 0.5, ease: 'power3' })

      const move = (e) => {
        const r = el.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        rotY(px * max)
        rotX(-py * max)
        el.style.setProperty('--gx', `${(px + 0.5) * 100}%`)
        el.style.setProperty('--gy', `${(py + 0.5) * 100}%`)
      }
      const leave = () => {
        rotX(0)
        rotY(0)
      }
      el.addEventListener('pointermove', move)
      el.addEventListener('pointerleave', leave)
      cleanups.push(() => {
        el.removeEventListener('pointermove', move)
        el.removeEventListener('pointerleave', leave)
      })
    })

    return () => cleanups.forEach((fn) => fn())
  }, [selector, max])

  return scope
}
