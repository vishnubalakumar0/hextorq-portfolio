/**
 * Shared, mutable store for global scroll + pointer state so the
 * fixed WebGL scene can react every frame without re-rendering React.
 *
 * `*Target` values are written by DOM listeners; the scene lerps its
 * own read values toward them each frame for buttery-smooth motion.
 */
export const scrollStore = {
  progressTarget: 0, // 0 at top, 1 at bottom — set by scroll listener
  progress: 0, // smoothed value the scene actually reads
  pointerTarget: { x: 0, y: 0 }, // normalized -1..1
  pointer: { x: 0, y: 0 },
}

if (typeof window !== 'undefined') {
  window.addEventListener(
    'pointermove',
    (e) => {
      scrollStore.pointerTarget.x = (e.clientX / window.innerWidth) * 2 - 1
      scrollStore.pointerTarget.y = -((e.clientY / window.innerHeight) * 2 - 1)
    },
    { passive: true }
  )
}
