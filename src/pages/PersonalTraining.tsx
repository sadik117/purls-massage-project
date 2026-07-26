import { motion } from 'framer-motion'
import NeedHelp from '../components/shared/NeedHelp'
import Copyright from '../components/shared/Copyright'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const IMG = 'https://purls-group.co.uk/wp-content/uploads/2025/09/PNF-Personal-Training.jpg'

const sessions = [
  {
    label: 'Session 1',
    desc: 'Two-hour initial consultation, where we discuss your medical history, goals, and go through physical testing such as strength, stamina and flexibility.',
  },
  {
    label: 'Session 2',
    desc: 'Physical analysis explained, and one-hour bespoke programming begins.',
  },
  {
    label: 'Sessions 3 – 9',
    desc: 'One-hour bespoke routines continually progressed or regressed.',
  },
  {
    label: 'Session 10',
    desc: 'One hour re-testing to show your improvements.',
  },
]

export default function PersonalTraining() {
  return (
    <div className="page-scroll w-full h-full relative" style={{ overflowX: 'hidden' }}>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center pt-10 md:pt-20 pb-10 px-4 md:px-6">
        <motion.div {...fadeUp(0)} className="text-center mb-6 md:mb-8">
          <h2 className="font-handwriting text-4xl md:text-6xl font-bold text-[var(--color-ink)] mb-2">
            Personal Training
          </h2>
          {/* Removed tracking-widest on mobile to prevent overflow */}
          <div className="font-typewriter text-xs md:text-sm tracking-normal md:tracking-widest uppercase opacity-70">
            Rehabilitation &amp; Strength
          </div>
        </motion.div>

        <motion.div
          {...fadeUp(0.2)}
          className="relative w-full max-w-2xl sketched-border bg-white/60 p-2 md:p-3 transform rotate-1"
        >
          <img
            src={IMG}
            alt="Personal Training session outdoors"
            className="w-full h-auto object-cover mix-blend-multiply sepia-[0.3]"
          />
        </motion.div>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-8 md:mt-10 px-6 py-3 text-center sketched-border bg-white/40 shadow-sm relative transform -rotate-2"
        >
          <div className="font-typewriter text-xs tracking-wider uppercase opacity-70 mb-1">11 Hours Package</div>
          <div className="font-handwriting text-3xl md:text-4xl font-bold text-[var(--color-ink)]">£500</div>
        </motion.div>
      </section>

      <section className="py-10 md:py-12 px-4 md:px-20 border-y border-black/10">
        <div className="max-w-3xl mx-auto space-y-6 text-center font-serif text-base md:text-[1.1rem] leading-relaxed opacity-90">
          <motion.p {...fadeUp(0)}>
            I am a Personal Trainer who specialises in rehabilitation with my primary focus on promoting
            neutral spine. Aligning the body is crucial for preventing injury, reducing pain, ensuring
            proper movement patterns, and improving overall posture.
          </motion.p>
          <motion.div {...fadeUp(0.1)} className="w-16 h-px bg-black/20 mx-auto" />
          <motion.p {...fadeUp(0.2)}>
            I will design you a safe and effective fitness plan to aid recovery and prevent further
            injury, all built around your unique rehabilitation needs. Understanding the body's musculoskeletal system means that I can create bespoke routines for
            your specific injury, physique and ability.
          </motion.p>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeUp(0)}
            className="text-center font-handwriting text-3xl md:text-5xl font-bold text-[var(--color-ink)] mb-8 md:mb-12"
          >
            Your Programme Journey
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {sessions.map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp(i * 0.1)}
                className="sketched-border p-4 md:p-6 flex flex-col text-center bg-white/30"
              >
                <div className="font-typewriter text-xs md:text-sm font-bold tracking-wider uppercase opacity-80 mb-3 md:mb-4 border-b border-black/10 pb-2">
                  {s.label}
                </div>
                <p className="font-serif text-sm md:text-[1.05rem] leading-snug opacity-90">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 px-4 bg-[rgba(0,0,0,0.03)] border-y border-black/10">
        <div className="max-w-3xl mx-auto flex flex-row flex-wrap items-center justify-center gap-8 text-center">
          {[
            { value: '10', unit: 'Sessions', note: 'complete programme' },
            { value: '£500', unit: 'Total', note: 'all-inclusive package' },
            { value: '100%', unit: 'Bespoke', note: 'tailored to you' },
          ].map((stat, i) => (
            <motion.div key={stat.unit} {...fadeUp(i * 0.1)} className="flex flex-col items-center min-w-[80px]">
              <span className="font-handwriting text-4xl md:text-5xl font-bold text-[var(--color-ink)]">{stat.value}</span>
              <span className="font-typewriter text-xs font-bold tracking-widest uppercase mt-2 opacity-80">{stat.unit}</span>
              <span className="font-serif text-xs italic opacity-60 mt-1">{stat.note}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <motion.div {...fadeUp(0.1)}>
            <h2 className="font-handwriting text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[var(--color-ink)]">
              What You Can Expect
            </h2>
            <ul className="space-y-5 font-serif text-sm md:text-[1.05rem] opacity-90 leading-relaxed">
              {[
                { label: 'Neutral Spine Focus', text: 'Every programme is built around achieving and maintaining a neutral spine — the foundation of injury prevention and pain-free movement.' },
                { label: 'Corrective Movement', text: 'Targeted exercises correct muscle imbalances and restore proper movement patterns through anatomical assessment.' },
                { label: 'Progressive Programming', text: "Sessions 3–9 are continually progressed or regressed based on your response, ensuring you're always challenged appropriately." },
                { label: 'Measurable Results', text: "Session 10 re-tests all initial benchmarks so you can see exactly how far you've come." },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-handwriting text-2xl text-[var(--color-accent)] leading-none mt-1 flex-shrink-0">-</span>
                  <span>
                    <strong className="block font-handwriting text-xl md:text-2xl text-[var(--color-ink)] mb-1">{item.label}</strong>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp(0.3)} className="sketched-border bg-white/60 p-2 transform rotate-2">
            <img
              src={IMG}
              alt="Personal training rehabilitation"
              className="w-full h-auto object-cover mix-blend-multiply sepia-[0.3]"
              style={{ maxHeight: 420 }}
            />
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 md:px-6 mb-12 border-t border-black/10 pt-10">
        <h3 className="font-handwriting text-3xl md:text-4xl mb-4 text-center">Questions?</h3>
        <NeedHelp />
      </div>

      <div className="opacity-60 pb-8">
        <Copyright />
      </div>
    </div>
  )
}
