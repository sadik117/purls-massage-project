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
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center rounded-full shadow-lg outline-none border-none select-none"
          style={{
            width: '35px',
            height: '35px',
            background: '#7dd3fc',
            boxShadow: '0 4px 14px rgba(125, 211, 252, 0.3)',
            cursor: 'pointer',
          }}
          whileHover={{
            scale: 1.1,
            background: '#38bdf8',
            boxShadow: '0 6px 20px rgba(56, 189, 248, 0.5)',
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} className="text-white" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
