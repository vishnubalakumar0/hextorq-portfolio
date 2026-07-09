import { useEffect, useState } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Scene from './three/Scene'
import { Hero, Story, Services, Products, Projects, Ecosystem, Contact } from './components/Sections'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { scrollStore } from './three/scrollStore'

export default function App() {
  const [ready, setReady] = useState(false) // becomes true when intro finishes

  // Smooth scroll only after the intro completes.
  const lenisRef = useSmoothScroll(ready)

  // Lock native scroll while the preloader is up.
  useEffect(() => {
    document.documentElement.style.overflow = ready ? '' : 'hidden'
  }, [ready])

  // Feed global scroll progress into the store the 3D scene reads.
  useEffect(() => {
    if (!ready) return
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      scrollStore.progressTarget = max > 0 ? window.scrollY / max : 0
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ready])

  return (
    <>
      {!ready && <Preloader onDone={() => setReady(true)} />}

      {/* Fixed WebGL background */}
      <Scene />

      {/* Readability scrim: darkens top (for the nav) + edges over the nebula */}
      <div className="scrim" aria-hidden="true" />

      {/* Foreground content */}
      <div className="content">
        <Navbar lenisRef={lenisRef} />
        <main>
          <Hero lenisRef={lenisRef} ready={ready} />
          <Story />
          <Services />
          <Products />
          <Projects />
          <Ecosystem />
          <Contact />
        </main>
      </div>
    </>
  )
}
