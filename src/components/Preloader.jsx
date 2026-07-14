import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import './Preloader.css'

/* Boot sequence — 8 lines, revealed one by one. `hi` = accent line,
   `ok` = success line. Line 8 (the previously-missing one) completes
   the sequence and triggers the wipe. */
const LINES = [
  { t: 'INIT: HEXTORQ FOUNDRY SEED-CORE v2.06' },
  { t: 'RESOLVED: Host mapping 0.0.0.0:5173 → Active', hi: true },
  { t: 'LOAD: Initializing WebGL Three.js constellation pipeline...' },
  { t: 'SYS: Calibrating high-availability latency maps (12ms SLA)...' },
  { t: 'SECURITY: Encrypted keys dispatched to client state storage...' },
  { t: 'FOUNDRY: Active compiling loops initialized successfully.' },
  { t: 'STATUS: CORE ONLINE. PRE-FLIGHT CHECKS CLEAR.', hi: true },
  { t: 'READY: Launching Hextorq experience...', ok: true },
]

/**
 * Terminal boot-up intro. Diagnostic lines type in one at a time with
 * a smooth GSAP timeline; when the 8th line lands, the status flips to
 * ONLINE and the whole overlay wipes up to reveal the site.
 */
export default function Preloader({ onDone }) {
  const root = useRef(null)
  const [online, setOnline] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'none' } })

      // Terminal window scales in.
      tl.from('.terminal', { opacity: 0, y: 24, scale: 0.98, duration: 0.5, ease: 'power2.out' })

      // Each line wipes in on its own row — smooth, linear, sequential.
      tl.from(
        '.term-line',
        { opacity: 0, x: -14, duration: 0.28, stagger: 0.34 },
        0.35
      )

      // Line 8 landed → flip status to ONLINE.
      tl.add(() => setOnline(true))

      // Hold, then wipe the whole overlay up.
      tl.to('.terminal', { opacity: 0, y: -16, duration: 0.4, ease: 'power2.in' }, '+=0.5')
      tl.to(root.current, { yPercent: -100, duration: 0.9, ease: 'expo.inOut', onComplete: () => onDone?.() }, '-=0.1')
    }, root)

    return () => ctx.revert()
  }, [onDone])

  return (
    <div className="preloader" ref={root} aria-hidden="true">
      <div className="terminal">
        {/* Mac-style title bar */}
        <div className="term-bar">
          <span className="term-dot red" />
          <span className="term-dot yellow" />
          <span className="term-dot green" />
          <span className="term-bar-title">hextorq-core</span>
        </div>

        {/* Status header */}
        <div className="term-head">
          <span className="term-title">
            <span className="term-prompt">&gt;_</span> CORE INITIALIZATION
          </span>
          <span className={`term-state ${online ? 'is-online' : ''}`}>
            {online ? 'ONLINE' : 'CONNECTING'}
          </span>
        </div>

        {/* Log body */}
        <div className="term-body">
          {LINES.map((l, i) => (
            <div className={`term-line ${l.hi ? 'is-hi' : ''} ${l.ok ? 'is-ok' : ''}`} key={i}>
              <span className="term-idx">[{i + 1}]</span>
              <span className="term-text">{l.t}</span>
            </div>
          ))}
          <span className="term-caret" />
        </div>

        {/* Footer */}
        <div className="term-foot">
          <span>SECURE CHANNEL TUNNELED</span>
          <span>LATENCY: 12MS</span>
        </div>
      </div>
    </div>
  )
}
