import { useState, useCallback, useEffect } from 'react'
import BookFlip from './components/BookFlip/BookFlip'
import Navbar from './components/Navbar/Navbar'
import ScrollToTop from './components/shared/ScrollToTop'
import Home from './pages/Home'
import Massage from './pages/Massage'
import SeatedMassage from './pages/SeatedMassage'
import PersonalTraining from './pages/PersonalTraining'
import BeautyPackages from './pages/BeautyPackages'
import Qualifications from './pages/Qualifications'
import References from './pages/References'
import NotFound from './pages/NotFound'
import type { FlipDirection, PageConfig } from './types'

export const PAGES: PageConfig[] = [
  { id: 'home',             label: 'Home',               component: <Home /> },
  { id: 'massage',          label: 'Massage',             component: <Massage /> },
  { id: 'seated-massage',   label: 'Seated Massage',      component: <SeatedMassage /> },
  { id: 'personal-training',label: 'Personal Training',   component: <PersonalTraining /> },
  { id: 'beauty-packages',  label: 'Beauty Packages',     component: <BeautyPackages /> },
  { id: 'qualifications',   label: 'Qualifications',      component: <Qualifications /> },
  { id: 'references',       label: 'References',          component: <References /> },
]

function getInitialState(): { initialPage: number; is404: boolean } {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase()
  if (!path || path === 'home') return { initialPage: 0, is404: false }
  
  const foundIndex = PAGES.findIndex(p => p.id === path)
  if (foundIndex !== -1) return { initialPage: foundIndex, is404: false }
  
  return { initialPage: 0, is404: true }
}

function App() {
  const initialState = getInitialState()
  const [currentPage, setCurrentPage]     = useState(initialState.initialPage)
  const [is404, setIs404]                 = useState(initialState.is404)
  const [nextPage, setNextPage]           = useState<number | null>(null)
  const [isFlipping, setIsFlipping]       = useState(false)
  const [direction, setDirection]         = useState<FlipDirection>('forward')
  const [navOpen, setNavOpen]             = useState(false)

  const navigateTo = useCallback((targetIndex: number) => {
    if (is404) {
      setIs404(false)
      setCurrentPage(targetIndex)
      const pageId = PAGES[targetIndex].id
      window.history.pushState({}, '', pageId === 'home' ? '/' : `/${pageId}`)
      return
    }

    if (isFlipping || targetIndex === currentPage) return
    const dir: FlipDirection = targetIndex > currentPage ? 'forward' : 'backward'
    setDirection(dir)
    setNextPage(targetIndex)
    setIsFlipping(true)
    setNavOpen(false)

    const pageId = PAGES[targetIndex].id
    window.history.pushState({}, '', pageId === 'home' ? '/' : `/${pageId}`)
  }, [isFlipping, currentPage, is404])

  const handleFlipComplete = useCallback(() => {
    if (nextPage !== null) {
      setCurrentPage(nextPage)
      setNextPage(null)
    }
    setIsFlipping(false)
  }, [nextPage])

  useEffect(() => {
    const handlePopState = () => {
      const state = getInitialState()
      setIs404(state.is404)
      setCurrentPage(state.initialPage)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    if (is404) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentPage < PAGES.length - 1) {
        navigateTo(currentPage + 1)
      } else if (e.key === 'ArrowLeft' && currentPage > 0) {
        navigateTo(currentPage - 1)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [currentPage, navigateTo, is404])

  useEffect(() => {
    const handleNav = (e: Event) => {
      const idx = (e as CustomEvent<number>).detail
      if (typeof idx === 'number') navigateTo(idx)
    }
    window.addEventListener('purls-navigate', handleNav)
    return () => window.removeEventListener('purls-navigate', handleNav)
  }, [navigateTo])

  if (is404) {
    return <NotFound />
  }

  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(14,165,233,0.05) 0%, transparent 70%)',
        }}
      />

      <BookFlip
        pages={PAGES}
        currentPage={currentPage}
        nextPage={nextPage}
        isFlipping={isFlipping}
        direction={direction}
        onFlipComplete={handleFlipComplete}
        onNavigate={navigateTo}
        totalPages={PAGES.length}
      />

      <Navbar
        pages={PAGES}
        currentPage={currentPage}
        isOpen={navOpen}
        onToggle={() => setNavOpen(o => !o)}
        onNavigate={navigateTo}
      />

      <ScrollToTop />
    </div>
  )
}

export default App
