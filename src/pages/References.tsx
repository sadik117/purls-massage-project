import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Copyright from '../components/shared/Copyright'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const testimonials = [
  { name: 'Bek', text: 'Amazing Massage And Claudia Is Just A Delight. So Lovely, I Would Thoroughly Recommend!!', stars: 5 },
  { name: 'Jodie', text: 'Claudia Was Fabulous. I Booked A Massage For My Father As A Father\'s Day Gift And He Thoroughly Enjoyed It. I Will Definitely Be Booking Again.', stars: 5 },
  { name: 'Mina', text: 'Claudia Did A Great Job Addressing My Problem Areas And Talking Me Through Some Stretches I Can Do That Would Help With My Recovery.', stars: 5 },
  { name: 'Jesse', text: 'What A Divine Massage And Wonderful Character. Claudia Have An Excellent And Intuitive Massage And Also Really Lifted My Spirits With A Lot Of Top Quality Laughs. Thanks!', stars: 5 },
  { name: 'Brad', text: 'Claudia Provided An Amazing Massage And Facial As A Surprise Birthday Present For My Wife! 100% Recommend For Any Treatments In The Hampshire Area.', stars: 4 },
  { name: 'Ashlene', text: 'Brilliant Remedial Massage! So Good!!', stars: 3 },
  { name: 'Noni', text: 'I Arranged A Massage For My Mum For Mother\'s Day. My Mum Was So Thankful That Claudia Was A Wonderful Masseuse And Throughly Enjoyed Her Mother Day Gift. Thank You Claudia. Mum Has Already Asked When I Book This Service Again For Her!!', stars: 5 },
  { name: 'James', text: 'Absolutely Amazing Massage, One Of The Best Remedial Massages I\'ve Had In A Long Time. Worked On Some Niggling Running Injuries And Made Me Feel Really Good And Ready To Train On.', stars: 5 },
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
    <div className="flex gap-1 justify-center mt-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="font-handwriting text-2xl" style={{ color: i < count ? 'var(--color-ink)' : 'transparent', WebkitTextStroke: i < count ? 'none' : '1px var(--color-ink)' }}>
          ★
        </span>
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
    <div className="relative max-w-5xl mx-auto px-4 md:px-8">
      <button
        onClick={() => go(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-10 z-10 p-1 md:p-2 text-[var(--color-ink)] hover:scale-125 transition-transform bg-white/60 md:bg-transparent rounded-full shadow-sm md:shadow-none"
        aria-label="Previous testimonials"
      >
        <ChevronLeft size={28} />
      </button>

      <div className="overflow-hidden px-1 md:px-2 py-4">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8"
          >
            {visible.map((t, i) => (
              <motion.div
                key={t.name + i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex flex-col items-center text-center p-5 md:p-6 sketched-border bg-[rgba(255,255,255,0.4)] shadow-sm transform transition-transform"
                style={{
                  minHeight: 220,
                  transform: `rotate(${(i % 2 === 0 ? 1 : -1) * (i + 1)}deg)`
                }}
              >
                <div className="absolute top-2 w-12 h-4 bg-yellow-100/40 border border-yellow-200/50 transform -rotate-3 opacity-60"></div>
                <h3 className="font-handwriting font-bold text-2xl md:text-3xl mb-2 text-[var(--color-ink)]">
                  {t.name}
                </h3>
                <p className="font-serif text-sm md:text-[1.1rem] leading-snug opacity-90 italic">
                  "{t.text}"
                </p>
                <div className="mt-auto">
                  <Stars count={t.stars} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={() => go(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-10 z-10 p-1 md:p-2 text-[var(--color-ink)] hover:scale-125 transition-transform bg-white/60 md:bg-transparent rounded-full shadow-sm md:shadow-none"
        aria-label="Next testimonials"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  )
}

function RefGrid({ images, sectionDelay = 0 }: { images: { src: string }[]; sectionDelay?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
      {images.map((img, i) => {
        const rotate = (i % 2 === 0 ? 1 : -1) * ((i % 4) + 1)
        
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: sectionDelay + i * 0.05, duration: 0.5, ease: 'easeOut' }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            className={`overflow-hidden cursor-pointer sketched-border bg-white/70 p-2 pb-4 md:pb-6 shadow-sm transform rotate-${Math.abs(rotate)} ${rotate < 0 ? '-rotate-' + Math.abs(rotate) : ''}`}
            style={{ transform: `rotate(${rotate}deg)` }}
          >
            <img
              src={img.src}
              alt={`Reference letter ${i + 1}`}
              className="w-full h-full object-cover object-top mix-blend-multiply sepia-[0.2]"
              style={{ aspectRatio: '3/4' }}
              loading="lazy"
            />
          </motion.div>
        )
      })}
    </div>
  )
}

function SectionHeading({ title, delay = 0 }: { title: string; delay?: number }) {
  return (
    <motion.div {...fadeUp(delay)} className="mb-6 md:mb-10 text-center">
      <h2 className="text-3xl md:text-4xl font-handwriting font-bold text-[var(--color-ink)]">
        {title}
      </h2>
      <div className="mx-auto mt-2 h-0.5 w-16 bg-[var(--color-accent)]/50" />
    </motion.div>
  )
}

export default function References() {
  return (
    <div className="page-scroll w-full h-full relative" style={{ overflowX: 'hidden' }}>
      
      {/* Header */}
      <section className="pt-10 md:pt-16 pb-6 md:pb-8 px-4 md:px-6 text-center">
        <motion.span
          {...fadeUp(0)}
          className="font-typewriter text-xs tracking-wider md:tracking-widest uppercase opacity-70"
        >
          Client Feedback
        </motion.span>
        <motion.h1
          {...fadeUp(0.1)}
          className="mt-3 md:mt-4 font-handwriting font-bold text-[var(--color-ink)]"
          style={{ fontSize: 'clamp(2rem, 8vw, 5.5rem)', lineHeight: 1 }}
        >
          References
        </motion.h1>
        <motion.div
          {...fadeUp(0.2)}
          className="max-w-2xl mx-auto mt-6 md:mt-8 text-sm md:text-[1.05rem] font-serif leading-relaxed opacity-90"
        >
          Kind words from clients across massage, fitness, and beauty services.
        </motion.div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-8 md:py-12 px-4 md:px-16">
        <motion.h2
          {...fadeUp(0)}
          className="text-center font-handwriting text-3xl md:text-5xl font-bold text-[var(--color-ink)] mb-6 md:mb-12"
        >
          What My Clients Say
        </motion.h2>
        <TestimonialCarousel />
      </section>

      {/* Massage References */}
      <section className="py-10 md:py-12 px-4 md:px-16 border-t border-black/10 relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionHeading title="Massage References" delay={0} />
          <RefGrid images={massageRefs} sectionDelay={0.1} />
        </div>
      </section>

      {/* Fitness References */}
      <section className="py-10 md:py-12 px-4 md:px-16 bg-[rgba(0,0,0,0.03)] border-t border-black/10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Fitness References" delay={0} />
          <RefGrid images={fitnessRefs} sectionDelay={0.1} />
        </div>
      </section>

      <div className="opacity-60 pb-8 pt-8 border-t border-black/10">
        <Copyright />
      </div>
    </div>
  )
}
