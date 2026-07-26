import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement
      if (target && target.classList && target.classList.contains('page-scroll')) {
        if (target.scrollTop > 300) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }
    }
    document.addEventListener('scroll', handleScroll, true)
    return () => {
      document.removeEventListener('scroll', handleScroll, true)
    }
  }, [])

  const scrollToTop = () => {
    const scrollables = document.querySelectorAll('.page-scroll')
    scrollables.forEach(el => {
      el.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center rounded-full shadow-md outline-none border border-black/10 select-none"
          style={{
            width: '40px',
            height: '40px',
            background: '#d2c3a5',
            cursor: 'pointer',
          }}
          whileHover={{
            scale: 1.1,
            background: '#e8dcc4',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="text-[#2a2c31]" strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
