import { useEffect, useRef, useState } from 'react'
import type { BookFlipProps } from '../../types'

export default function BookFlip({
  pages,
  currentPage,
  nextPage,
  isFlipping,
  direction,
  onFlipComplete,
  onNavigate,
  totalPages,
}: BookFlipProps) {
  const animatingRef = useRef(false)
  const [displayCurrent, setDisplayCurrent] = useState(currentPage)
  const [displayNext, setDisplayNext] = useState<number | null>(null)
  const [animClass, setAnimClass] = useState('')
  const [inClass, setInClass] = useState('')

  const viewportRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return

    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX
      touchStartY.current = e.touches[0].clientY
    }

    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null || touchStartY.current === null) return
      const deltaX = e.changedTouches[0].clientX - touchStartX.current
      const deltaY = e.changedTouches[0].clientY - touchStartY.current
      touchStartX.current = null
      touchStartY.current = null
      if (Math.abs(deltaX) < 50) return
      if (Math.abs(deltaY) > Math.abs(deltaX) * 0.6) return
      if (deltaX > 0 && currentPage > 0) {
        onNavigate(currentPage - 1)
      } else if (deltaX < 0 && currentPage < totalPages - 1) {
        onNavigate(currentPage + 1)
      }
    }
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [currentPage, totalPages, onNavigate])

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    if (target.closest('button') || target.closest('a') || target.closest('input') || target.closest('textarea')) return

    if (isFlipping) return
    if (window.innerWidth < 768) return

    const clickX = e.clientX
    const half = window.innerWidth / 2

    if (clickX > half && currentPage < totalPages - 1) {
      onNavigate(currentPage + 1)
    } else if (clickX <= half && currentPage > 0) {
      onNavigate(currentPage - 1)
    }
  }

  useEffect(() => {
    if (!isFlipping || nextPage === null || animatingRef.current) return
    animatingRef.current = true
    setDisplayNext(nextPage)

    setAnimClass(direction === 'forward' ? 'flip-out-backward' : 'flip-out-forward')
    setInClass(direction === 'forward' ? 'flip-in-backward' : 'flip-in-forward')

    const timer = setTimeout(() => {
      setDisplayCurrent(nextPage)
      setDisplayNext(null)
      setAnimClass('')
      setInClass('')
      animatingRef.current = false
      onFlipComplete()
    }, 720)

    return () => clearTimeout(timer)
  }, [isFlipping, nextPage, direction, onFlipComplete])

  useEffect(() => {
    if (!isFlipping) setDisplayCurrent(currentPage)
  }, [currentPage, isFlipping])

  return (
    <div
      ref={viewportRef}
      className="book-viewport"
      style={{ cursor: isFlipping ? 'wait' : 'default' }}
      onClick={handleClick}
    >
      <div className={`page-layer ${isFlipping ? animClass : ''}`} style={{ zIndex: 2 }}>
        <div className="notebook-page">
          <div className="spiral-binding" />
          {pages[displayCurrent].component}
        </div>
        {isFlipping && <div className="page-crease" />}
      </div>

      {displayNext !== null && (
        <div className={`page-layer ${inClass}`} style={{ zIndex: 1 }}>
          <div className="notebook-page">
            <div className="spiral-binding" />
            {pages[displayNext].component}
          </div>
        </div>
      )}
    </div>
  )
}
