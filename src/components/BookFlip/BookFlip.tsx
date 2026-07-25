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

  const touchStartX = useRef<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(delta) < 45) return

    if (delta > 0 && currentPage > 0) {
      onNavigate(currentPage - 1)
    } else if (delta < 0 && currentPage < totalPages - 1) {
      onNavigate(currentPage + 1)
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    if (target.closest('button') || target.closest('a') || target.closest('input') || target.closest('textarea')) return
    if (isFlipping) return

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
      className="book-viewport"
      style={{ cursor: isFlipping ? 'wait' : 'default' }}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className={`page-layer ${isFlipping ? animClass : ''}`} style={{ zIndex: 2 }}>
        {pages[displayCurrent].component}
        {isFlipping && <div className="page-crease" />}
      </div>

      {displayNext !== null && (
        <div className={`page-layer ${inClass}`} style={{ zIndex: 1 }}>
          {pages[displayNext].component}
        </div>
      )}
    </div>
  )
}
