import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Copyright from '../components/shared/Copyright'


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { delay, duration: 0.65, ease: 'easeOut' },
})


const testimonials = [
  {
    name: 'Bek',
    text: 'Amazing Massage And Claudia Is Just A Delight. So Lovely, I Would Thoroughly Recommend!!',
    stars: 5,
  },
  {
    name: 'Jodie',
    text: 'Claudia Was Fabulous. I Booked A Massage For My Father As A Father\'s Day Gift And He Thoroughly Enjoyed It. I Will Definitely Be Booking Again.',
    stars: 5,
  },
  {
    name: 'Mina',
    text: 'Claudia Did A Great Job Addressing My Problem Areas And Talking Me Through Some Stretches I Can Do That Would Help With My Recovery.',
    stars: 5,
  },
  {
    name: 'Jesse',
    text: 'What A Divine Massage And Wonderful Character. Claudia Have An Excellent And Intuitive Massage And Also Really Lifted My Spirits With A Lot Of Top Quality Laughs. Thanks!',
    stars: 5,
  },
  {
    name: 'Brad',
    text: 'Claudia Provided An Amazing Massage And Facial As A Surprise Birthday Present For My Wife! 100% Recommend For Any Treatments In The Hampshire Area.',
    stars: 4,
  },
  {
    name: 'Ashlene',
    text: 'Brilliant Remedial Massage! So Good!!',
    stars: 3,
  },
  {
    name: 'Noni',
    text: 'I Arranged A Massage For My Mum For Mother\'s Day. My Mum Was So Thankful That Claudia Was A Wonderful Masseuse And Throughly Enjoyed Her Mother Day Gift. Thank You Claudia. Mum Has Already Asked When I Book This Service Again For Her!!',
    stars: 5,
  },
  {
    name: 'James',
    text: 'Absolutely Amazing Massage, One Of The Best Remedial Massages I\'ve Had In A Long Time. Worked On Some Niggling Running Injuries And Made Me Feel Really Good And Ready To Train On.',
    stars: 5,
  },
]


const massageRefs = [
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Massage-ref-1-scaled.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Massage-ref-2-scaled.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Massage-ref-3-scaled.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Massage-ref-4-scaled.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Massage-ref-5-scaled.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Massage-ref-6-scaled.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Massage-ref-7-scaled.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Massage-ref-8-scaled.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Massage-ref-9-scaled.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Massage-ref-10-scaled.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Massage-ref-11-scaled.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Massage-ref-12-scaled.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Massage-ref-13-1.jpg' },
]

const fitnessRefs = [
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Fitness-ref-2-scaled.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Fitness-ref-3-scaled.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Fitness-ref-4.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Fitness-ref-5-scaled.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Fitness-ref-6-scaled.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Fitness-ref-7.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Fitness-ref-8-scaled.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Fitness-ref-9.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Fitness-ref-10-1.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Fitness-ref-11-scaled.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Fitness-ref-12.jpg' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/Fitness-ref-13-1-1-scaled.jpg' },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 justify-center mt-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill={i < count ? '#f5a623' : 'none'}
          stroke={i < count ? '#f5a623' : '#555'}
          strokeWidth="2"
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  )
}


const CARDS_PER_PAGE = 3

function TestimonialCarousel() {
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState(1)
  const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE)

  function go(dir: number) {
    setDirection(dir)
    setPage((p) => (p + dir + totalPages) % totalPages)
  }

  const visible = testimonials.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE)

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  }

  return (
    <div className="relative max-w-5xl mx-auto">
      <button
        id="testimonial-prev"
        onClick={() => go(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-7 h-7 rounded-full flex items-center justify-center transition-all hover:scale-110"
        style={{ background: '#1a1a1a', border: '1px solid rgba(14,165,233,0.3)', color: '#fff' }}
        aria-label="Previous testimonials"
      >
        <ChevronLeft size={16} />
      </button>

      <div className="overflow-hidden px-2">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {visible.map((t, i) => (
              <motion.div
                key={t.name + i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(14,165,233,0.15)' }}
                className="flex flex-col items-center text-center p-6 rounded-xl cursor-default"
                style={{
                  background: '#ffffff',
                  color: '#111',
                  minHeight: 220,
                }}
              >
                <h3 className="font-bold text-base mb-2" style={{ color: '#111' }}>
                  {t.name}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#0ea5e9', lineHeight: 1.75, fontStyle: 'italic' }}
                >
                  {t.text}
                </p>
                <Stars count={t.stars} />

                <div
                  className="mt-4 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: '#111' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        id="testimonial-next"
        onClick={() => go(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-7 h-7 rounded-full flex items-center justify-center transition-all hover:scale-110"
        style={{ background: '#1a1a1a', border: '1px solid rgba(14,165,233,0.3)', color: '#fff' }}
        aria-label="Next testimonials"
      >
        <ChevronRight size={16} />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            id={`testimonial-dot-${i}`}
            onClick={() => { setDirection(i > page ? 1 : -1); setPage(i) }}
            className="w-1 h-1 rounded-full transition-all"
            style={{
              background: i === page ? '#0ea5e9' : '#444',
              transform: i === page ? 'scale(1.3)' : 'scale(1)',
            }}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function RefGrid({ images, sectionDelay = 0 }: { images: { src: string }[]; sectionDelay?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 28, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ delay: sectionDelay + i * 0.06, duration: 0.5, ease: 'easeOut' }}
          whileHover={{ y: -5, scale: 1.02, boxShadow: '0 16px 48px rgba(14,165,233,0.2)' }}
          className="overflow-hidden rounded-lg cursor-default"
          style={{ border: '1px solid rgba(14,165,233,0.15)', background: '#060d14' }}
        >
          <img
            src={img.src}
            alt={`Reference letter ${i + 1}`}
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
            style={{ aspectRatio: '3/4' }}
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  )
}

function SectionHeading({ title, delay = 0 }: { title: string; delay?: number }) {
  return (
    <motion.div {...fadeUp(delay)} className="mb-8 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-wide">{title}</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, duration: 0.5, ease: 'easeOut' }}
        className="mx-auto mt-3"
        style={{
          height: 2,
          width: 60,
          background: 'linear-gradient(90deg, transparent, #0ea5e9, transparent)',
          transformOrigin: 'center',
        }}
      />
    </motion.div>
  )
}

export default function References() {
  return (
    <div
      className="page-scroll w-full h-full"
      style={{ background: '#000', fontFamily: 'var(--font-family-primary)' }}
    >
      <section className="pt-12 pb-4 px-6 text-center">
        <motion.span
          {...fadeUp(0)}
          className="text-xs tracking-[0.32em] uppercase"
          style={{ color: '#0ea5e9' }}
        >
          Client Feedback
        </motion.span>
        <motion.h1
          {...fadeUp(0.08)}
          className="mt-3 font-semibold text-white"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.15 }}
        >
          References
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18, duration: 0.5 }}
          className="mx-auto mt-4 mb-6"
          style={{
            height: 2,
            width: 60,
            background: 'linear-gradient(90deg, transparent, #0ea5e9, transparent)',
            transformOrigin: 'center',
          }}
        />
        <motion.p
          {...fadeUp(0.2)}
          className="max-w-xl mx-auto text-sm"
          style={{ color: 'var(--color-muted)', lineHeight: 1.9 }}
        >
          Kind words from clients across massage, fitness, and beauty services.
        </motion.p>
      </section>

      <section className="py-12 px-8 md:px-16">
        <motion.h2
          {...fadeUp(0)}
          className="text-center text-xl md:text-2xl font-semibold text-white mb-10"
        >
          What My Clients Say
        </motion.h2>
        <TestimonialCarousel />
      </section>

      <section className="py-12 px-6 md:px-16" style={{ background: '#060d14' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Massage References" delay={0} />
          <RefGrid images={massageRefs} sectionDelay={0.04} />
        </div>
      </section>

      <section className="py-12 px-6 md:px-16" style={{ background: '#000' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Fitness References" delay={0} />
          <RefGrid images={fitnessRefs} sectionDelay={0.04} />
        </div>
      </section>

      <Copyright />
    </div>
  )
}
