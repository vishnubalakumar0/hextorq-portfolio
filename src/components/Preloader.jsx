import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { brand } from '../content'
import './Preloader.css'

/**
 * Cinematic intro. Letters rise from center outward with a blur, the
 * signature "X" ignites with a light flare, a gradient underline draws
 * in, the tagline resolves, a boot counter runs 0→100, then the whole
 * overlay flashes and wipes up to reveal the site.
 */
export default function Preloader({ onDone }) {
  const root = useRef(null)
  const [count, setCount] = useState(0)

  const letters = brand.intro.split('') // H E X T O R Q
  const xIndex = brand.intro.indexOf('X')

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: () => onDone?.() })

      // Boot counter + progress bar (run across the whole intro).
      const counter = { v: 0 }
      tl.to(
        counter,
        {
          v: 100,
          duration: 2.4,
          ease: 'power2.inOut',
          onUpdate: () => setCount(Math.round(counter.v)),
        },
        0
      )
      tl.to('.pre-bar-fill', { scaleX: 1, duration: 2.4, ease: 'power2.inOut' }, 0)

      // Letters rise from center outward, blur → sharp.
      tl.from(
        '.pre-letter',
        {
          yPercent: 130,
          opacity: 0,
          filter: 'blur(12px)',
          duration: 1.1,
          ease: 'expo.out',
          stagger: { each: 0.07, from: 'center' },
        },
        0.2
      )

      // The X ignites — flare bursts, letter pops + brightens.
      tl.fromTo(
        '.pre-flare',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' },
        0.8
      )
        .to('.pre-flare', { opacity: 0.35, duration: 0.8, ease: 'power2.inOut' }, 1.3)
        .from('.pre-letter.is-x', { scale: 1.5, duration: 0.7, ease: 'back.out(2.2)' }, 0.8)
        .fromTo(
          '.pre-letter.is-x',
          { filter: 'brightness(3)' },
          { filter: 'brightness(1)', duration: 0.9, ease: 'power2.out' },
          0.8
        )

      // Underline draws in.
      tl.to('.pre-underline', { scaleX: 1, duration: 0.9, ease: 'expo.out' }, 1.1)

      // Tagline words resolve.
      tl.from(
        '.pre-tagline span',
        { opacity: 0, y: 14, duration: 0.6, ease: 'power2.out', stagger: 0.12 },
        1.3
      )

      // Hold → wipe up.
      tl.to('.pre-inner', { opacity: 0, duration: 0.45, ease: 'power2.in' }, '+=0.35')
      tl.to(root.current, { yPercent: -100, duration: 1.05, ease: 'expo.inOut' }, '-=0.05')
    }, root)

    return () => ctx.revert()
  }, [onDone])

  return (
    <div className="preloader" ref={root} aria-hidden="true">
      <div className="pre-inner">
        <div className="pre-wordwrap">
          <div className="pre-flare" />
          <div className="pre-word">
            {letters.map((ch, i) => (
              <span className="pre-letter-mask" key={i}>
                <span className={`pre-letter ${i === xIndex ? 'is-x' : ''}`}>{ch}</span>
              </span>
            ))}
          </div>
          <div className="pre-underline" />
        </div>

        <div className="pre-tagline">
          {brand.taglineWords.map((w, i) => (
            <span key={w}>
              {i > 0 && <i className="pre-dot" />}
              {w}
            </span>
          ))}
        </div>

        <div className="pre-bar">
          <div className="pre-bar-fill" />
        </div>
      </div>

      <div className="pre-count">{count.toString().padStart(3, '0')}</div>
    </div>
  )
}
