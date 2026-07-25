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
    <div
      className="relative w-full h-full min-h-screen py-8 px-4 flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#000', fontFamily: 'var(--font-family-primary)' }}
    >
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute pointer-events-none"
        style={{
          width: 380,
          height: 380,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.22) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute pointer-events-none"
        style={{
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,166,35,0.15) 0%, transparent 70%)',
          top: '25%',
          right: '15%',
        }}
      />
      <motion.div
        animate={{ x: [0, -25, 18, 0], y: [0, 20, -15, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute pointer-events-none"
        style={{
          width: 160,
          height: 160,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 70%)',
          bottom: '20%',
          left: '10%',
        }}
      />

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none rounded-full"
          style={{
            width: 4 + (i % 3) * 3,
            height: 4 + (i % 3) * 3,
            background: i % 2 === 0 ? 'rgba(14,165,233,0.6)' : 'rgba(245,166,35,0.5)',
            left: `${10 + i * 11}%`,
            top: `${15 + ((i * 17) % 65)}%`,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center gap-4 text-center my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative"
        >
          <span
            aria-hidden
            className="absolute inset-0 font-black"
            style={{
              fontSize: 'clamp(5rem, 14vw, 9rem)',
              color: 'transparent',
              WebkitTextStroke: '2px rgba(14,165,233,0.35)',
              lineHeight: 1,
              transform: 'translate(-3px, 3px)',
              userSelect: 'none',
            }}
          >
            404
          </span>
          <span
            aria-hidden
            className="absolute inset-0 font-black"
            style={{
              fontSize: 'clamp(5rem, 14vw, 9rem)',
              color: 'transparent',
              WebkitTextStroke: '2px rgba(245,166,35,0.25)',
              lineHeight: 1,
              transform: 'translate(3px, -3px)',
              userSelect: 'none',
            }}
          >
            404
          </span>
          <motion.span
            animate={{ textShadow: [
              '0 0 40px rgba(14,165,233,0.5)',
              '0 0 80px rgba(14,165,233,0.9)',
              '0 0 40px rgba(14,165,233,0.5)',
            ]}}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="relative font-black"
            style={{
              fontSize: 'clamp(5rem, 14vw, 9rem)',
              color: '#ffffff',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            404
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          style={{
            height: 2,
            width: 150,
            background: 'linear-gradient(90deg, transparent, #0ea5e9, transparent)',
            transformOrigin: 'center',
          }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease: 'easeOut' }}
          className="text-2xl md:text-3xl font-semibold text-white tracking-wide text-center"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.55, ease: 'easeOut' }}
          className="text-sm md:text-base text-center max-w-sm leading-relaxed"
          style={{ color: 'var(--color-muted)', lineHeight: 1.85 }}
        >
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back to somewhere familiar.
        </motion.p>

        <motion.button
          id="notfound-go-home"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.55, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 32px rgba(14,165,233,0.45)' }}
          whileTap={{ scale: 0.97 }}
          onClick={goHome}
          className="mt-2 px-10 py-3.5 font-semibold text-sm tracking-widest uppercase cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)',
            color: '#ffffff',
            border: 'none',
            letterSpacing: '0.18em',
          }}
        >
          ← Back to Home
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="text-xs tracking-widest uppercase mt-2"
          style={{ color: 'rgba(14,165,233,0.5)' }}
        >
          Purls · Massage · Fitness · Beauty
        </motion.p>
      </div>
    </div>
  )
}
