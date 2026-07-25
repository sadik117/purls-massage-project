import { AnimatePresence, motion } from 'framer-motion'
import { BookOpen, X } from 'lucide-react'
import type { NavbarProps } from '../../types'


const sidebarVariants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.06 + 0.1, duration: 0.35, ease: 'easeOut' },
  }),
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function Navbar({ pages, currentPage, isOpen, onToggle, onNavigate }: NavbarProps) {
  return (
    <>
      <button
        id="navbar-toggle"
        onClick={onToggle}
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isOpen}
        className="absolute top-13 md:top-10 left-1 md:left-5 z-50 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 hover:scale-105 active:scale-95"
        style={{
          borderColor: isOpen ? 'var(--color-gold)' : 'var(--color-border)',
          background: 'var(--color-glass)',
          backdropFilter: 'blur(16px)',
          boxShadow: isOpen ? '0 0 20px rgba(201,169,110,0.2)' : 'none',
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={15} style={{ color: 'var(--color-gold)' }} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <BookOpen size={15} style={{ color: 'var(--color-gold)' }} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.25 }}
              className="absolute inset-0 z-30"
              style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
              onClick={onToggle}
            />

            <motion.nav
              key="sidebar"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-0 left-0 bottom-0 z-40 flex flex-col"
              style={{
                width: '300px',
                background: 'var(--color-glass)',
                backdropFilter: 'blur(24px)',
                borderRight: '1px solid var(--color-border)',
              }}
              aria-label="Site navigation"
            >
              <div className="px-8 pt-8 pb-6" style={{ borderBottom: '1px solid var(--color-border)' }}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <p
                    className="text-xs pl-8 tracking-[0.25em] uppercase mb-1"
                    style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-family-primary)' }}
                  >
                    Navigations
                  </p>
                  <h2
                    className="text-2xl pl-8 font-light"
                    style={{ color: 'var(--color-text)', fontFamily: 'var(--font-family-primary)' }}
                  >
                    Purls Group
                  </h2>
                </motion.div>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-6">
                <ul className="space-y-1" role="list">
                  {pages.map((page, i) => {
                    const isActive = i === currentPage
                    return (
                      <motion.li
                        key={page.id}
                        custom={i}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <button
                          id={`nav-link-${page.id}`}
                          onClick={() => onNavigate(i)}
                          className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-left transition-all duration-250 group"
                          style={{
                            background: isActive ? 'rgba(201,169,110,0.1)' : 'transparent',
                            border: isActive ? '1px solid rgba(201,169,110,0.25)' : '1px solid transparent',
                          }}
                        >
                          <span
                            className="w-px h-4 shrink-0 transition-colors duration-250"
                            style={{ background: isActive ? 'var(--color-gold)' : 'var(--color-border)' }}
                          />

                          <span
                            className="text-base font-light transition-colors duration-250"
                            style={{
                              color: isActive ? 'var(--color-gold-light)' : 'var(--color-text)',
                              fontFamily: 'var(--font-family-primary)',
                              letterSpacing: '0.04em',
                            }}
                          >
                            {page.label}
                          </span>

                          {isActive && (
                            <span
                              className="ml-auto w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ background: 'var(--color-gold)' }}
                            />
                          )}
                        </button>
                      </motion.li>
                    )
                  })}
                </ul>
              </div>

              <div
                className="px-8 py-6 text-xs space-y-1"
                style={{
                  borderTop: '1px solid var(--color-border)',
                  color: 'var(--color-muted)',
                  fontFamily: 'var(--font-family-primary)',
                  letterSpacing: '0.03em',
                }}
              >
                <p>Tue – Sun · 12:00pm – 10:00pm</p>
                <p>claudia@purls-group.co.uk</p>
                <p>+61434605902</p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
