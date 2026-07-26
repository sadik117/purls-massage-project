import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { NavbarProps } from '../../types'

export default function Navbar({ pages, currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="absolute right-4 top-8 z-50 pointer-events-auto">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-[#d2c3a5] rounded-full shadow-md text-black hover:bg-[#e8dcc4] transition-colors border border-black/10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <nav 
            className="absolute right-0 top-[10%] bottom-[10%] z-40 flex flex-col justify-center gap-2 pr-0 pointer-events-none"
          >
            {pages.map((page, i) => {
              const isActive = i === currentPage
              return (
                <motion.div
                  key={page.id}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: isActive ? -4 : 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="pointer-events-auto flex justify-end"
                >
                  <button
                    onClick={() => {
                      onNavigate(i)
                      setIsOpen(false)
                    }}
                    className="relative px-4 py-2 text-sm font-handwriting shadow-sm group transition-transform hover:-translate-x-2"
                    style={{
                      backgroundColor: isActive ? '#e8dcc4' : '#d2c3a5',
                      color: 'var(--color-ink)',
                      border: '1px solid rgba(0,0,0,0.1)',
                      borderRight: 'none',
                      borderRadius: '8px 0 0 8px',
                      fontSize: '1rem',
                      textAlign: 'left',
                      whiteSpace: 'nowrap',
                    }}
                    title={page.label}
                  >
                    <span>{page.label}</span>
                  </button>
                </motion.div>
              )
            })}
          </nav>
        )}
      </AnimatePresence>
    </>
  )
}

