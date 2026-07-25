import { motion } from 'framer-motion'
import NeedHelp from '../components/shared/NeedHelp'
import Copyright from '../components/shared/Copyright'


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -48 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { delay, duration: 0.65, ease: 'easeOut' },
})

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 48 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { delay, duration: 0.65, ease: 'easeOut' },
})

const whyPoints = [
  {
    label: 'Convenience and Accessibility',
    text: 'Mobile therapists make it easy for individuals to receive a massage wherever they are, without the need to travel to a spa or clinic.',
  },
  {
    label: 'Time-Saving',
    text: "Busy people can schedule sessions around their lifestyle, whether it's during a break at work, after a workout, or at home.",
  },
  {
    label: 'Customisable Treatments',
    text: 'Mobile therapists often tailor treatments to meet the specific needs of their clients, whether they need deep relaxation or relief from tension.',
  },
  {
    label: 'Comfort and Privacy',
    text: 'Having a therapist come to you offers a more personalised, private, and comfortable experience.',
  },
]

const settingsBenefits = [
  {
    label: 'Stress Relief',
    text: 'In every setting — whether home, office, hotel, or sports event — seated massage helps alleviate stress and promotes relaxation.',
  },
  {
    label: 'Improved Posture and Flexibility',
    text: 'Regular seated massages can help correct postural imbalances caused by sitting for long hours or strenuous activity.',
  },
  {
    label: 'Increased Circulation',
    text: 'Helps promote blood flow, easing muscle stiffness and improving overall circulation.',
  },
]

const benefitsList = [
  'Quick stress relief.',
  'Increased circulation.',
  'Reduced muscle tension, especially in the upper back, neck, and shoulders.',
  { label: 'Convenience', text: 'The comfort of receiving a professional massage in the privacy of your home.' },
  { label: 'Ideal for Relaxation', text: 'Great for unwinding after a long day or a stressful week.' },
  {
    label: 'How It Works',
    text: 'A mobile therapist can come to your home with all necessary equipment, offering a peaceful and relaxing experience without the need to travel.',
  },
]

const officePoints = [
  {
    label: 'Boost Productivity',
    text: 'A popular way for companies to provide wellness benefits to employees.',
  },
  {
    label: 'Ideal for Desk Workers',
    text: 'Helps elevate tension from sitting for long periods, improving posture and relieving neck and shoulder stress. 15–30 minute sessions for each employee that fit into their daily schedule.',
  },
]

const sportsPoints = [
  {
    label: 'Athletes',
    text: 'Help athletes recover quickly from workouts, reduce muscle soreness, and prepare for future activities.',
  },
  {
    label: 'Quick Recovery',
    text: 'Relieve muscle tightness, reduce inflammation, and prevent injuries.',
  },
]

const homePoints = [
  {
    label: 'Relaxation for Travellers',
    text: 'Regular seated massages can help correct postural imbalances caused by sitting for long hours or strenuous activity.',
  },
  {
    label: 'Convenience and Accessibility',
    text: 'Making it easy for individuals to receive a massage wherever they are, without the need to head to a spa or clinic.',
  },
  {
    label: 'Time-Saving',
    text: 'Busy people can schedule sessions around their lifestyle, whether it\'s during a break at work, after a workout, or at home.',
  },
  {
    label: 'Customisable Treatments',
    text: 'My treatments are always bespoke to meet the specific needs of the clients whether they need deep relaxation or rehabilitation.',
  },
  {
    label: 'Comfort and Privacy',
    text: 'Coming to you offers a more personalised, private, and comfortable experience.',
  },
]


const IMG1 = 'https://purls-group.co.uk/wp-content/uploads/2025/08/Untitled-design-2025-08-22T170708.158.png'
const IMG2 = 'https://purls-group.co.uk/wp-content/uploads/2025/08/Untitled-design-2025-08-22T170818.469.png'
const IMG3 = 'https://purls-group.co.uk/wp-content/uploads/2025/08/Untitled-design-2025-08-22T171242.459.png'

function BulletList({ points }: { points: (string | { label: string; text: string })[] }) {
  return (
    <ul className="space-y-2 text-sm" style={{ color: 'var(--color-muted)', lineHeight: 1.8 }}>
      {points.map((p, i) =>
        typeof p === 'string' ? (
          <li key={i} className="flex gap-2">
            <span className="mt-1 shrink-0 text-[#0ea5e9]">•</span>
            <span>{p}</span>
          </li>
        ) : (
          <li key={i} className="flex gap-2">
            <span className="mt-1 shrink-0 text-[#0ea5e9]">•</span>
            <span>
              <strong className="font-semibold" style={{ color: '#f5d67a' }}>
                {p.label}:
              </strong>{' '}
              {p.text}
            </span>
          </li>
        ),
      )}
    </ul>
  )
}

function SectionImage({ src, alt, delay = 0 }: { src: string; alt: string; delay?: number }) {
  return (
    <motion.div
      {...fadeUp(delay)}
      className="w-full overflow-hidden rounded-lg"
      style={{ maxHeight: 380 }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        style={{ maxHeight: 380 }}
      />
    </motion.div>
  )
}

export default function SeatedMassage() {
  return (
    <div
      className="page-scroll w-full h-full"
      style={{ background: '#000', fontFamily: 'var(--font-family-primary)' }}
    >

      <section className="py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <SectionImage src={IMG1} alt="Seated massage therapist" delay={0} />

          <motion.div {...fadeRight(0.15)}>
            <motion.h2
              {...fadeRight(0.2)}
              className="text-2xl md:text-3xl font-semibold text-white mb-6 leading-snug"
            >
              Why Choose A Mobile Therapist For Seated Massage?
            </motion.h2>
            <BulletList points={whyPoints} />
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-16" style={{ background: '#060d14' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <motion.div {...fadeLeft(0.1)}>
            <motion.h2
              {...fadeLeft(0.15)}
              className="text-2xl md:text-3xl font-semibold text-white mb-6 leading-snug"
            >
              Benefits Of Seated Massage Across Different Settings
            </motion.h2>
            <BulletList points={settingsBenefits} />
          </motion.div>

          <SectionImage src={IMG2} alt="Seated massage benefits" delay={0.2} />
        </div>
      </section>

      <section className="py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <SectionImage src={IMG3} alt="Purls seated massage" delay={0} />

          <motion.div {...fadeRight(0.15)}>
            <motion.h2
              {...fadeRight(0.2)}
              className="text-2xl md:text-3xl font-semibold text-white mb-6"
            >
              Benefits
            </motion.h2>
            <BulletList points={benefitsList} />
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-16" style={{ background: '#060d14' }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            {...fadeUp(0)}
            className="grid grid-cols-3 border border-sky-500 text-center select-none mb-10"
          >
            <div className="py-5 border-r border-sky-500 flex flex-col justify-center bg-black text-white">
              <span className="text-xs font-bold tracking-widest uppercase mb-1">Minimum 2 Hours</span>
              <span className="text-2xl font-extrabold">£150</span>
            </div>
            <div className="py-5 border-r border-sky-500 flex flex-col justify-center bg-[#0ea5e9] text-black">
              <span className="text-xs font-bold tracking-widest uppercase mb-1">Each Extra Hour</span>
              <span className="text-2xl font-black">£50</span>
            </div>
            <div className="py-5 flex flex-col justify-center bg-black text-white">
              <span className="text-xs font-bold tracking-widest uppercase mb-1">Maximum 8 Hours</span>
              <span className="text-2xl font-extrabold"></span>
            </div>
          </motion.div>

          <motion.p
            {...fadeUp(0.1)}
            className="text-center text-sm mb-12"
            style={{ color: 'var(--color-muted)' }}
          >
            During seated massage, the client sits in a specially designed chair, fully clothed, while the
            therapist works on key areas like the neck, shoulders, back, head, arms, and hands.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...fadeUp(0.05)}>
              <h3 className="text-base font-bold text-white text-center mb-4 tracking-wide">
                At The Office
              </h3>
              <div className="space-y-4">
                {officePoints.map((p, i) => (
                  <div key={i} className="text-sm" style={{ color: 'var(--color-muted)', lineHeight: 1.75 }}>
                    <span className="font-semibold" style={{ color: '#f5d67a' }}>{p.label}: </span>
                    {p.text}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.12)}>
              <h3 className="text-base font-bold text-white text-center mb-4 tracking-wide">
                At Sports Events
              </h3>
              <div className="space-y-4">
                {sportsPoints.map((p, i) => (
                  <div key={i} className="text-sm" style={{ color: 'var(--color-muted)', lineHeight: 1.75 }}>
                    <span className="font-semibold" style={{ color: '#f5d67a' }}>{p.label}: </span>
                    {p.text}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.19)}>
              <h3 className="text-base font-bold text-white text-center mb-4 tracking-wide">
                At Home/Hotels
              </h3>
              <div className="space-y-3">
                {homePoints.map((p, i) => (
                  <div key={i} className="text-sm" style={{ color: 'var(--color-muted)', lineHeight: 1.75 }}>
                    <span className="font-semibold" style={{ color: '#f5d67a' }}>{p.label}: </span>
                    {p.text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 md:px-20">
        <NeedHelp />
      </div>
      <Copyright />
    </div>
  )
}
