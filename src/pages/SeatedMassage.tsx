import { motion } from 'framer-motion'
import NeedHelp from '../components/shared/NeedHelp'
import Copyright from '../components/shared/Copyright'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const whyPoints = [
  { label: 'Convenience and Accessibility', text: 'Mobile therapists make it easy for individuals to receive a massage wherever they are, without the need to travel to a spa or clinic.' },
  { label: 'Time-Saving', text: "Busy people can schedule sessions around their lifestyle, whether it's during a break at work, after a workout, or at home." },
  { label: 'Customisable Treatments', text: 'Mobile therapists often tailor treatments to meet the specific needs of their clients, whether they need deep relaxation or relief from tension.' },
  { label: 'Comfort and Privacy', text: 'Having a therapist come to you offers a more personalised, private, and comfortable experience.' },
]

const settingsBenefits = [
  { label: 'Stress Relief', text: 'In every setting — whether home, office, hotel, or sports event — seated massage helps alleviate stress and promotes relaxation.' },
  { label: 'Improved Posture and Flexibility', text: 'Regular seated massages can help correct postural imbalances caused by sitting for long hours or strenuous activity.' },
  { label: 'Increased Circulation', text: 'Helps promote blood flow, easing muscle stiffness and improving overall circulation.' },
]

const benefitsList = [
  'Quick stress relief.',
  'Increased circulation.',
  'Reduced muscle tension, especially in the upper back, neck, and shoulders.',
  { label: 'Convenience', text: 'The comfort of receiving a professional massage in the privacy of your home.' },
  { label: 'Ideal for Relaxation', text: 'Great for unwinding after a long day or a stressful week.' },
  { label: 'How It Works', text: 'A mobile therapist can come to your home with all necessary equipment, offering a peaceful and relaxing experience without the need to travel.' },
]

const officePoints = [
  { label: 'Boost Productivity', text: 'A popular way for companies to provide wellness benefits to employees.' },
  { label: 'Ideal for Desk Workers', text: 'Helps elevate tension from sitting for long periods, improving posture and relieving neck and shoulder stress. 15–30 minute sessions for each employee that fit into their daily schedule.' },
]

const sportsPoints = [
  { label: 'Athletes', text: 'Help athletes recover quickly from workouts, reduce muscle soreness, and prepare for future activities.' },
  { label: 'Quick Recovery', text: 'Relieve muscle tightness, reduce inflammation, and prevent injuries.' },
]

const homePoints = [
  { label: 'Relaxation for Travellers', text: 'Regular seated massages can help correct postural imbalances caused by sitting for long hours or strenuous activity.' },
  { label: 'Convenience and Accessibility', text: 'Making it easy for individuals to receive a massage wherever they are, without the need to head to a spa or clinic.' },
  { label: 'Time-Saving', text: 'Busy people can schedule sessions around their lifestyle, whether it\'s during a break at work, after a workout, or at home.' },
  { label: 'Customisable Treatments', text: 'My treatments are always bespoke to meet the specific needs of the clients whether they need deep relaxation or rehabilitation.' },
  { label: 'Comfort and Privacy', text: 'Coming to you offers a more personalised, private, and comfortable experience.' },
]

const IMG1 = 'https://purls-group.co.uk/wp-content/uploads/2025/08/Untitled-design-2025-08-22T170708.158.png'
const IMG2 = 'https://purls-group.co.uk/wp-content/uploads/2025/08/Untitled-design-2025-08-22T170818.469.png'
const IMG3 = 'https://purls-group.co.uk/wp-content/uploads/2025/08/Untitled-design-2025-08-22T171242.459.png'

function BulletList({ points }: { points: (string | { label: string; text: string })[] }) {
  return (
    <ul className="space-y-4 font-serif text-[1.05rem] opacity-90 leading-relaxed">
      {points.map((p, i) =>
        typeof p === 'string' ? (
          <li key={i} className="flex gap-3">
            <span className="font-handwriting text-2xl text-[var(--color-accent)] leading-none mt-1">-</span>
            <span>{p}</span>
          </li>
        ) : (
          <li key={i} className="flex gap-3">
            <span className="font-handwriting text-2xl text-[var(--color-accent)] leading-none mt-1">-</span>
            <span>
              <strong className="font-handwriting text-2xl text-[var(--color-ink)] block mb-1">
                {p.label}
              </strong>
              {p.text}
            </span>
          </li>
        ),
      )}
    </ul>
  )
}

function SectionImage({ src, alt, delay = 0, rotation = "-rotate-2" }: { src: string; alt: string; delay?: number, rotation?: string }) {
  return (
    <motion.div
      {...fadeUp(delay)}
      className={`w-full sketched-border bg-white/60 p-2 shadow-sm transform ${rotation} hover:rotate-0 transition-transform duration-500`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover mix-blend-multiply sepia-[0.3]"
      />
    </motion.div>
  )
}

export default function SeatedMassage() {
  return (
    <div className="page-scroll w-full h-full relative">
      <div className="coffee-stain w-72 h-72 top-20 right-5 opacity-20"></div>

      <section className="py-12 md:py-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <SectionImage src={IMG1} alt="Seated massage therapist" delay={0} rotation="-rotate-2" />
          <motion.div {...fadeUp(0.2)}>
            <h2 className="font-handwriting text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-[var(--color-ink)] leading-tight">
              Why Choose A Mobile Therapist?
            </h2>
            <BulletList points={whyPoints} />
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-16 border-y border-black/10 relative">
        <div className="coffee-stain w-96 h-96 -left-10 top-0 opacity-15"></div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
          <motion.div {...fadeUp(0.1)} className="order-2 md:order-1">
            <h2 className="font-handwriting text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-[var(--color-ink)] leading-tight">
              Benefits Across Settings
            </h2>
            <BulletList points={settingsBenefits} />
          </motion.div>
          <div className="order-1 md:order-2">
            <SectionImage src={IMG2} alt="Seated massage benefits" delay={0.2} rotation="rotate-2" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <SectionImage src={IMG3} alt="Purls seated massage" delay={0} rotation="-rotate-1" />
          <motion.div {...fadeUp(0.2)}>
            <h2 className="font-handwriting text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-[var(--color-ink)] leading-tight">
              Key Benefits
            </h2>
            <BulletList points={benefitsList} />
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-16 bg-[rgba(0,0,0,0.03)] border-t border-black/10">
        <div className="max-w-4xl mx-auto">
          
          <motion.div
            {...fadeUp(0)}
            className="sketched-border max-w-2xl mx-auto mb-12 p-3 md:p-4 text-center select-none bg-white/40 shadow-sm relative transform rotate-1"
          >
            <h2 className="font-handwriting text-3xl md:text-4xl font-bold mb-4 text-[var(--color-ink)]">Pricing</h2>
            <div className="grid grid-cols-3 divide-x-2 divide-dashed divide-black/30 font-typewriter">
              <div className="py-2 flex flex-col justify-center">
                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 opacity-70">Min 2 Hours</span>
                <span className="text-xl md:text-2xl font-bold">£150</span>
              </div>
              <div className="py-2 flex flex-col justify-center bg-[var(--color-ink)] text-white/90 font-bold transform scale-105 rounded-sm shadow-md">
                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 opacity-80">Extra Hour</span>
                <span className="text-xl md:text-2xl font-black">£50</span>
              </div>
              <div className="py-2 flex flex-col justify-center">
                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 opacity-70">Max 8 Hours</span>
                <span className="text-xs md:text-sm font-handwriting mt-2">Available</span>
              </div>
            </div>
          </motion.div>

          <motion.p
            {...fadeUp(0.1)}
            className="text-center text-lg font-serif opacity-80 mb-16 italic"
          >
            "During seated massage, the client sits in a specially designed chair, fully clothed, while the
            therapist works on key areas like the neck, shoulders, back, head, arms, and hands."
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <motion.div {...fadeUp(0.1)}>
              <h3 className="font-handwriting text-3xl font-bold text-center mb-4 underline decoration-2 decoration-[var(--color-accent)] underline-offset-4">
                Office
              </h3>
              <div className="space-y-4 font-serif text-[1.05rem] opacity-90">
                {officePoints.map((p, i) => (
                  <div key={i}>
                    <strong className="block text-[var(--color-ink)]">{p.label}</strong>
                    {p.text}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.2)}>
              <h3 className="font-handwriting text-3xl font-bold text-center mb-4 underline decoration-2 decoration-[var(--color-accent)] underline-offset-4">
                Events
              </h3>
              <div className="space-y-4 font-serif text-[1.05rem] opacity-90">
                {sportsPoints.map((p, i) => (
                  <div key={i}>
                    <strong className="block text-[var(--color-ink)]">{p.label}</strong>
                    {p.text}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.3)}>
              <h3 className="font-handwriting text-3xl font-bold text-center mb-4 underline decoration-2 decoration-[var(--color-accent)] underline-offset-4">
                Home/Hotels
              </h3>
              <div className="space-y-4 font-serif text-[1.05rem] opacity-90">
                {homePoints.map((p, i) => (
                  <div key={i}>
                    <strong className="block text-[var(--color-ink)]">{p.label}</strong>
                    {p.text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 mb-12 border-t border-black/10 pt-10">
        <h3 className="font-handwriting text-4xl mb-4 text-center">Questions?</h3>
        <NeedHelp />
      </div>

      <div className="opacity-60 pb-8">
        <Copyright />
      </div>
    </div>
  )
}
