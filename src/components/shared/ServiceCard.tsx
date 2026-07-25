import { motion } from 'framer-motion'
import type { ServiceCardProps } from '../../types'


export default function ServiceCard({ icon, title, description, delay = 0, id }: ServiceCardProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="relative p-6 rounded-xl transition-all duration-300 group cursor-default"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid var(--color-border)',
        fontFamily: 'var(--font-family-primary)',
      }}
    >
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(201,169,110,0.06) 0%, transparent 70%)' }}
      />

      <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg"
        style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)' }}>
        <span style={{ color: 'var(--color-gold)' }}>{icon}</span>
      </div>

      <h3
        className="text-lg font-medium mb-2"
        style={{ color: 'var(--color-text)', letterSpacing: '0.02em' }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed font-light"
        style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}
      >
        {description}
      </p>
    </motion.div>
  )
}
