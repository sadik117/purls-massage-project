import { motion } from 'framer-motion'
import NeedHelp from '../components/shared/NeedHelp'
import Copyright from '../components/shared/Copyright'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const IMG = 'https://purls-group.co.uk/wp-content/uploads/2025/09/Beauty_pedicure_-scaled.jpg'

const col60 = {
  heading: '60-Minute Treatments Include: (Choose One)',
  items: [
    { bold: 'Facial', text: ' (anti-ageing, acne, sensitive, male).' },
    { bold: 'Luxury Manicure', text: ' (essential oil warm water hand bath, hand & arm exfoliation, massage, cuticle trim, nail trim, file, base coat, colour enamel, top coat, nail oil).' },
    { bold: 'Luxury Pedicure', text: ' (essential oil warm water foot bath, foot & leg exfoliation, massage, cuticle trim, nail trim, file, base coat, colour enamel, top coat, nail oil).' },
    { text: 'Remedial Massage.' },
    { text: 'Deep Tissue Massage.' },
    { text: 'Sports/PNF.' },
    { text: 'Lymphatic Drainage.' },
    { text: 'Aromatherapy Hot Stones.' },
    { text: 'Pregnancy Massage.' },
    { text: 'Indian Head.' },
    { text: 'Thai Massage.' },
    { text: 'Seated Massage.' },
    { text: 'Aged Care/Palliative Care/Bereavement Massage.' },
  ],
}

const col30 = {
  heading: '30-Minute Treatments Include: (Choose One)',
  items: [
    { bold: 'Express Manicure', text: ' (essential oil warm water hand bath, cuticle trim, nail trim, file, base coat, colour enamel, top coat, nail oil).' },
    { bold: 'Express Pedicure', text: ' (essential oil warm water foot bath, cuticle trim, nail trim, file, base coat, colour enamel, top coat, nail oil).' },
    { text: 'Full Leg Waxing.' },
    { text: 'Full Arm Waxing.' },
    { text: 'Male Chest.' },
    { text: 'Male Back.' },
    { text: 'Male Buttocks.' },
    { text: 'Female Bikini Line.' },
    { text: 'Indian Head Massage.' },
    { text: 'Seated Massage.' },
  ],
}

const col15 = {
  heading: '15 Minute Treatments Include: (Choose Two)',
  items: [
    { text: 'Eyelash Tint.' },
    { text: 'Eyebrow Tint.' },
    { text: 'Eyebrow Shape/Maintenance.' },
    { bold: 'Manicure', text: ' (base coat, colour enamel, top coat only).' },
    { bold: 'Pedicure', text: ' (base coat, colour enamel, top coat only).' },
    { text: 'Half Leg Wax.' },
    { text: 'Half Arm Wax.' },
    { text: 'Female Waxing – nasal, lip & chin.' },
    { text: 'Male Waxing – nasal & ears.' },
    { text: 'Indian Head Massage.' },
    { text: 'Seated Massage.' },
  ],
}

type TreatmentItem = { bold?: string; text: string }

function TreatmentList({ items }: { items: TreatmentItem[] }) {
  return (
    <ul className="space-y-2 text-sm font-serif opacity-90 leading-relaxed">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="font-handwriting text-[var(--color-accent)] leading-none mt-1 flex-shrink-0">-</span>
          <span>
            {item.bold && <strong className="font-bold text-[var(--color-ink)]">{item.bold}</strong>}
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  )
}

function TreatmentColumn({ data, delay = 0, rotation = "rotate-1" }: { data: { heading: string; items: TreatmentItem[] }, delay?: number, rotation?: string }) {
  return (
    <motion.div
      {...fadeUp(delay)}
      className={`sketched-border p-4 md:p-5 bg-white/40 shadow-sm transform ${rotation} hover:rotate-0 transition-transform duration-300 h-full`}
    >
      <h3 className="font-typewriter text-xs md:text-sm font-bold uppercase tracking-wider md:tracking-widest text-[var(--color-ink)] mb-4 border-b border-black/10 pb-2">
        {data.heading}
      </h3>
      <TreatmentList items={data.items} />
    </motion.div>
  )
}

export default function BeautyPackages() {
  return (
    <div className="page-scroll w-full h-full relative" style={{ overflowX: 'hidden' }}>

      <section className="relative flex flex-col items-center pt-10 md:pt-20 pb-10 px-4 md:px-6">
        <motion.div {...fadeUp(0)} className="text-center mb-6 md:mb-8">
          <h2 className="font-handwriting text-4xl md:text-6xl font-bold text-[var(--color-ink)] mb-2">Beauty Packages</h2>
          <div className="font-typewriter text-xs md:text-sm tracking-normal md:tracking-widest uppercase opacity-70">Refresh &amp; Rejuvenate</div>
        </motion.div>

        <motion.div
          {...fadeUp(0.2)}
          className="relative w-full max-w-2xl sketched-border bg-white/60 p-2 md:p-3 transform -rotate-1"
        >
          <img
            src={IMG}
            alt="Beauty pedicure treatment"
            className="w-full h-auto object-cover mix-blend-multiply sepia-[0.3]"
            loading='lazy'
          />
        </motion.div>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-8 md:mt-10 px-6 py-3 text-center sketched-border bg-[var(--color-ink)] text-[var(--color-paper)] shadow-md relative transform rotate-2 hover:scale-105 transition-transform cursor-pointer"
        >
          <div className="font-typewriter text-xs tracking-wider uppercase opacity-80 mb-1">2 Hours Package</div>
          <div className="font-handwriting text-3xl md:text-4xl font-bold">£150</div>
        </motion.div>
      </section>

      <section className="py-10 md:py-12 px-4 bg-[rgba(0,0,0,0.03)] border-y border-black/10">
        <motion.div
          {...fadeUp(0)}
          className="max-w-3xl mx-auto flex flex-row flex-wrap items-center justify-center gap-6 md:gap-12 text-center"
        >
          {[
            { value: '2', unit: 'Hours', note: 'per package session' },
            { value: '£150', unit: 'Price', note: 'all-inclusive package' },
            { value: '100%', unit: 'Mobile', note: 'we come to you' },
          ].map((stat, i) => (
            <motion.div key={stat.unit} {...fadeUp(i * 0.1)} className="flex flex-col items-center min-w-[80px]">
              <span className="font-handwriting text-4xl md:text-5xl font-bold text-[var(--color-ink)]">{stat.value}</span>
              <span className="font-typewriter text-xs md:text-sm font-bold tracking-wider uppercase mt-2 opacity-80">{stat.unit}</span>
              <span className="font-serif text-xs md:text-sm italic opacity-60 mt-1">{stat.note}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-10 md:py-16 px-4 md:px-12 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            {...fadeUp(0)}
            className="text-center font-handwriting text-3xl md:text-5xl font-bold text-[var(--color-ink)] mb-6 md:mb-12"
          >
            Treatments List
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
            <TreatmentColumn data={col60} delay={0} rotation="-rotate-1" />
            <TreatmentColumn data={col30} delay={0.1} rotation="rotate-2" />
            <TreatmentColumn data={col15} delay={0.2} rotation="-rotate-2" />
          </div>
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
