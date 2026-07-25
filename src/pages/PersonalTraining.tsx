import { motion } from 'framer-motion'
import NeedHelp from '../components/shared/NeedHelp'
import Copyright from '../components/shared/Copyright'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration: 0.65, ease: 'easeOut' },
})

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -52 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration: 0.65, ease: 'easeOut' },
})

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 52 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration: 0.65, ease: 'easeOut' },
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
    <div
      className="page-scroll w-full h-full"
      style={{ background: '#000', fontFamily: 'var(--font-family-primary)' }}
    >

      <section className="relative flex flex-col items-center py-14 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="relative w-full max-w-2xl overflow-hidden rounded-xl"
          style={{ boxShadow: '0 0 60px rgba(14,165,233,0.12)' }}
        >
          <img
            src={IMG}
            alt="Personal Training session outdoors"
            className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
          />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)',
            }}
          />
        </motion.div>

        <motion.div
          {...fadeUp(0.25)}
          className="mt-6 px-14 py-4 text-center font-bold"
          style={{
            background: '#0ea5e9',
            color: '#000',
            minWidth: 220,
          }}
        >
          <div className="text-base tracking-widest uppercase">11 Hours</div>
          <div className="text-3xl font-black">£500</div>
        </motion.div>
      </section>

      <section className="py-12 px-6 md:px-20" style={{ background: '#060d14' }}>
        <div className="max-w-3xl mx-auto space-y-8">

          <motion.p
            {...fadeUp(0)}
            className="text-center leading-relaxed"
            style={{ color: 'var(--color-muted)', fontSize: '0.95rem', lineHeight: 1.9 }}
          >
            I am a Personal Trainer who specialises in rehabilitation with my primary focus on promoting
            neutral spine. Aligning the body is crucial for preventing injury, reducing pain, ensuring
            proper movement patterns, and improving overall posture.
            <br />
            <br />
            This focus helps you to regain strength, mobility, and functionality through targeted exercise
            and stretch.
          </motion.p>

          <motion.div
            {...fadeUp(0.1)}
            className="mx-auto"
            style={{ height: 1, background: 'rgba(14,165,233,0.2)', maxWidth: 300 }}
          />

          <motion.p
            {...fadeUp(0.15)}
            className="text-center leading-relaxed"
            style={{ color: 'var(--color-muted)', fontSize: '0.95rem', lineHeight: 1.9 }}
          >
            I will design you a safe and effective fitness plan to aid recovery and prevent further
            injury, all built around your unique rehabilitation needs.
            <br />
            <br />
            Understanding the body's musculoskeletal system means that I can create bespoke routines for
            your specific injury, physique and ability. Drawing on anatomy and biometrics to assess muscle
            imbalances, I address these through targeted exercise, corrective movement patterns and
            specifically tailored programming.
          </motion.p>
        </div>
      </section>

      <section className="py-14 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeUp(0)}
            className="text-center text-xl font-bold text-white mb-10 tracking-wide"
          >
            Your Programme Journey
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {sessions.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
                whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(14,165,233,0.18)' }}
                className="rounded-xl p-6 flex flex-col text-center cursor-default transition-shadow"
                style={{
                  background: '#060d14',
                  border: '1px solid rgba(14,165,233,0.18)',
                }}
              >
                <div
                  className="self-center mb-4 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
                  style={{ background: 'rgba(14,165,233,0.12)', color: '#0ea5e9' }}
                >
                  {s.label}
                </div>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-muted)', lineHeight: 1.8 }}
                >
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-10 px-6"
        style={{ background: 'rgba(14,165,233,0.07)', borderTop: '1px solid rgba(14,165,233,0.15)', borderBottom: '1px solid rgba(14,165,233,0.15)' }}
      >
        <motion.div
          {...fadeUp(0)}
          className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 text-center"
        >
          {[
            { value: '10', unit: 'Sessions', note: 'complete programme' },
            { value: '£500', unit: 'Total', note: 'all-inclusive package' },
            { value: '100%', unit: 'Bespoke', note: 'tailored to you' },
          ].map((stat, i) => (
            <motion.div
              key={stat.unit}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55, ease: 'easeOut' }}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-4xl font-black" style={{ color: '#0ea5e9' }}>
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-white tracking-widest uppercase">
                {stat.unit}
              </span>
              <span className="text-xs" style={{ color: 'var(--color-muted)' }}>
                {stat.note}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-16 px-6 md:px-16" style={{ background: '#060d14' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeLeft(0.1)}>
            <motion.h2
              {...fadeLeft(0.15)}
              className="text-2xl md:text-3xl font-semibold text-white mb-6 leading-snug"
            >
              What You Can Expect
            </motion.h2>

            <ul className="space-y-4">
              {[
                { label: 'Neutral Spine Focus', text: 'Every programme is built around achieving and maintaining a neutral spine — the foundation of injury prevention and pain-free movement.' },
                { label: 'Corrective Movement', text: 'Targeted exercises correct muscle imbalances and restore proper movement patterns through anatomical assessment and biometric analysis.' },
                { label: 'Progressive Programming', text: 'Sessions 3–9 are continually progressed or regressed based on your response, ensuring you\'re always challenged appropriately.' },
                { label: 'Measurable Results', text: 'Session 10 re-tests all initial benchmarks so you can see exactly how far you\'ve come.' },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.55, ease: 'easeOut' }}
                  className="flex gap-3"
                >
                  <span className="mt-1 shrink-0 text-[#0ea5e9] font-bold text-lg leading-none">→</span>
                  <span className="text-sm" style={{ color: 'var(--color-muted)', lineHeight: 1.8 }}>
                    <strong className="font-semibold" style={{ color: '#f5d67a' }}>{item.label}: </strong>
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...fadeRight(0.1)}
            className="w-full overflow-hidden rounded-xl"
            style={{ boxShadow: '0 0 40px rgba(14,165,233,0.1)' }}
          >
            <img
              src={IMG}
              alt="Personal training rehabilitation"
              className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              style={{ maxHeight: 420 }}
            />
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 md:px-20">
        <NeedHelp />
      </div>
      <Copyright />
    </div>
  )
}
