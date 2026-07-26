import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function NotFound() {
  function goHome() {
    window.dispatchEvent(new CustomEvent('purls-navigate', { detail: 0 }))
  }

  useEffect(() => {
    document.title = '404 - Page Not Found | Purls'
    return () => { document.title = 'Purls Massage Fitness & Beauty' }
  }, [])

  return (
    <div className="relative w-full h-full min-h-screen py-8 px-4 flex flex-col items-center justify-center overflow-hidden">
      
      <div className="coffee-stain w-64 h-64 top-20 right-20 opacity-30"></div>
      <div className="coffee-stain w-80 h-80 bottom-10 left-10 opacity-20"></div>

      <div className="relative z-10 flex flex-col items-center gap-6 text-center my-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative"
        >
          {/* Glitch / sketch offset shadow */}
          <span
            aria-hidden
            className="absolute inset-0 font-handwriting font-bold"
            style={{
              fontSize: 'clamp(6rem, 16vw, 12rem)',
              color: 'transparent',
              WebkitTextStroke: '2px rgba(0,0,0,0.15)',
              lineHeight: 1,
              transform: 'translate(-4px, 4px) rotate(-2deg)',
              userSelect: 'none',
            }}
          >
            404
          </span>
          <span
            aria-hidden
            className="absolute inset-0 font-handwriting font-bold"
            style={{
              fontSize: 'clamp(6rem, 16vw, 12rem)',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(139, 90, 69, 0.4)',
              lineHeight: 1,
              transform: 'translate(4px, -2px) rotate(1deg)',
              userSelect: 'none',
            }}
          >
            404
          </span>
          
          {/* Main Number */}
          <motion.span
            className="relative font-handwriting font-bold text-[var(--color-ink)]"
            style={{
              fontSize: 'clamp(6rem, 16vw, 12rem)',
              lineHeight: 1,
            }}
          >
            404
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          className="h-1 w-32 bg-[var(--color-accent)]/60"
        />

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-typewriter font-bold text-[var(--color-ink)] uppercase tracking-widest mt-2"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.55, ease: 'easeOut' }}
          className="text-base md:text-lg font-serif opacity-80 leading-relaxed italic"
        >
          Oops! It seems the page you're looking for has been torn from the notebook. 
          Let's get you back to the index.
        </motion.p>

        <motion.button
          onClick={goHome}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.55, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-10 py-3 font-typewriter font-bold text-sm tracking-widest uppercase cursor-pointer sketched-border bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-accent)] transition-colors"
        >
          &larr; Back to Home
        </motion.button>
      </div>
    </div>
  )
}
