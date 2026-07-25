import { motion } from 'framer-motion'
import NeedHelp from '../components/shared/NeedHelp'
import Copyright from '../components/shared/Copyright'


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { delay, duration: 0.65, ease: 'easeOut' },
})

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -44 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { delay, duration: 0.65, ease: 'easeOut' },
})

const IMG = 'https://purls-group.co.uk/wp-content/uploads/2025/09/Beauty_pedicure_-scaled.jpg'

const col60 = {
  heading: '60-Minute Treatments Include: (Choose One)',
  items: [
    {
      bold: 'Facial',
      text: ' (anti-ageing, acne, sensitive, male).',
    },
    {
      bold: 'Luxury Manicure',
      text: ' (essential oil warm water hand bath, hand and arm exfoliation, hand and arm massage, cuticle trim, nail trim, file and shape, base coat, colour enamel, top coat, nail oil).',
    },
    {
      bold: 'Luxury Pedicure',
      text: ' (essential oil warm water foot bath, foot and leg exfoliation, foot and leg massage, cuticle trim, nail trim, file and shape, base coat, colour enamel, top coat, nail oil).',
    },
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
    {
      bold: 'Express Manicure',
      text: ' (essential oil warm water hand bath, cuticle trim, nail trim, file and shape, base coat, colour enamel, top coat, nail oil).',
    },
    {
      bold: 'Express Pedicure',
      text: ' (essential oil warm water foot bath, cuticle trim, nail trim, file and shape, base coat, colour enamel, top coat, nail oil).',
    },
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
    {
      bold: 'Manicure',
      text: ' (base coat, colour enamel, top coat only).',
    },
    {
      bold: 'Pedicure',
      text: ' (base coat, colour enamel, top coat only).',
    },
    { text: 'Half Leg Wax.' },
    { text: 'Half Arm Wax.' },
    { text: 'Female Waxing – nasal, lip and chin.' },
    { text: 'Male Waxing – nasal and ears.' },
    { text: 'Indian Head Massage.' },
    { text: 'Seated Massage.' },
  ],
}

type TreatmentItem = { bold?: string; text: string }

function TreatmentList({ items }: { items: TreatmentItem[] }) {
  return (
    <ul className="space-y-2 text-sm" style={{ color: 'var(--color-muted)', lineHeight: 1.85 }}>
      {items.map((item, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 + i * 0.04, duration: 0.45, ease: 'easeOut' }}
        >
          {item.bold ? (
            <>
              <strong className="font-semibold" style={{ color: '#ffffff' }}>
                {item.bold}
              </strong>
              {item.text}
            </>
          ) : (
            <span style={{ fontWeight: item.text.endsWith('.') ? 600 : 400, color: item.text.endsWith('.') ? '#e2e8f0' : 'var(--color-muted)' }}>
              {item.text}
            </span>
          )}
        </motion.li>
      ))}
    </ul>
  )
}

function TreatmentColumn({
  data,
  delay = 0,
}: {
  data: { heading: string; items: TreatmentItem[] }
  delay?: number
}) {
  return (
    <motion.div
      {...fadeLeft(delay)}
      className="rounded-xl p-6 h-full"
      style={{
        background: '#060d14',
        border: '1px solid rgba(14,165,233,0.15)',
      }}
      whileHover={{ borderColor: 'rgba(14,165,233,0.35)', boxShadow: '0 0 32px rgba(14,165,233,0.08)' }}
    >
      <h3
        className="text-base font-bold mb-5 leading-snug"
        style={{ color: '#ffffff' }}
      >
        {data.heading}
      </h3>
      <TreatmentList items={data.items} />
    </motion.div>
  )
}

export default function BeautyPackages() {
  return (
    <div
      className="page-scroll w-full h-full"
      style={{ background: '#000', fontFamily: 'var(--font-family-primary)' }}
    >

      <section className="relative flex flex-col items-center py-14 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="relative w-full max-w-2xl overflow-hidden rounded-xl"
          style={{ boxShadow: '0 0 60px rgba(14,165,233,0.12)' }}
        >
          <img
            src={IMG}
            alt="Beauty pedicure treatment"
            className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            loading='lazy'
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 55%)',
            }}
          />
        </motion.div>

        <motion.div
          {...fadeUp(0.25)}
          className="mt-6 px-16 py-4 text-center font-bold"
          style={{
            background: '#0ea5e9',
            color: '#000',
            minWidth: 220,
          }}
        >
          <div className="text-base tracking-widest uppercase">Two Hours</div>
          <div className="text-3xl font-black">£150</div>
        </motion.div>
      </section>

      <section
        className="py-10 px-6"
        style={{
          background: 'rgba(14,165,233,0.07)',
          borderTop: '1px solid rgba(14,165,233,0.15)',
          borderBottom: '1px solid rgba(14,165,233,0.15)',
        }}
      >
        <motion.div
          {...fadeUp(0)}
          className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 text-center"
        >
          {[
            { value: '2', unit: 'Hours', note: 'per package session' },
            { value: '£150', unit: 'Price', note: 'all-inclusive package' },
            { value: '100%', unit: 'Mobile', note: 'we come to you' },
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

      <section className="py-16 px-6 md:px-12" style={{ background: '#000' }}>
        <div className="max-w-6xl mx-auto">

          <motion.h2
            {...fadeUp(0)}
            className="text-center text-xl font-bold text-white mb-10 tracking-wide"
          >
            Beauty Package Treatments
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <TreatmentColumn data={col60} delay={0} />
            <TreatmentColumn data={col30} delay={0.1} />
            <TreatmentColumn data={col15} delay={0.2} />
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
