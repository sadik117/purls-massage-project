import { motion } from 'framer-motion'
import Copyright from '../components/shared/Copyright'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { delay, duration: 0.65, ease: 'easeOut' },
})

const massageCerts = [
  {
    src: 'https://purls-group.co.uk/wp-content/uploads/2025/10/11201ead-8c8e-44a6-9366-a06f3c156f2c.jpeg',
    label: 'Diploma of Indian Head Massage',
  },
  {
    src: 'https://purls-group.co.uk/wp-content/uploads/2025/07/Massage-Cert-2-scaled.jpeg',
    label: 'Certificate Four Massage Therapy',
  },
  {
    src: 'https://purls-group.co.uk/wp-content/uploads/2025/06/Diploma-of-Remedial-Massage-Cert-Transcripts-1_page-0001.jpg',
    label: 'Diploma of Remedial Massage',
  },
  {
    src: 'https://purls-group.co.uk/wp-content/uploads/2025/06/Aromatherapy-Diploma-1-scaled.jpg',
    label: 'Diploma of Clinical Aromatherapy',
  },
]

const fitnessCerts = [
  {
    src: 'https://purls-group.co.uk/wp-content/uploads/2025/06/Cert-2-Fitness_page-0001-1.jpg',
    label: 'Certificate Two in Fitness Instructing',
  },
  {
    src: 'https://purls-group.co.uk/wp-content/uploads/2025/07/fitness-cer-2.png',
    label: 'Spin Instructor',
  },
  {
    src: 'https://purls-group.co.uk/wp-content/uploads/2025/06/Power-Plates-Instructor_page-0001-1.jpg',
    label: 'Power Plates Instructor',
  },
  {
    src: 'https://purls-group.co.uk/wp-content/uploads/2025/06/Cert-3-Fitness_page-0001.jpg',
    label: 'Certificate Three in Fitness',
  },
  {
    src: 'https://purls-group.co.uk/wp-content/uploads/2025/07/Fitness-Cert-5-scaled.jpeg',
    label: 'Certificate Four Personal Trainer',
  },
]

const beautyCerts = [
  {
    src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/BEAUTY-X-1-1-1-scaled.jpg',
    label: 'Level Two NVQ Diploma in Beauty Therapy',
  },
  {
    src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/BEAUTY-X-2-scaled.jpg',
    label: 'Facial Treatment',
  },
  {
    src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/BEAUTY-X-3-scaled.jpg',
    label: 'Manicure & SPA Manicure',
  },
  {
    src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/BEAUTY-4-scaled.jpg',
    label: 'Pedicure & SPA Pedicure',
  },
  {
    src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/BEAUTY-X-5-scaled.jpg',
    label: 'Lash & Brow Treatment',
  },
  {
    src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/BEAUTY-X-6-scaled.jpg',
    label: 'Make-Up Application',
  },
]

const firstAidCerts = [
  {
    src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/First-Aid-1-scaled.jpg',
    label: 'Provide CPR 2016',
  },
  {
    src: 'https://purls-group.co.uk/wp-content/uploads/2025/06/2016-First-Aid_page-0001-1.jpg',
    label: 'First Aid Certificate 2016',
  },
  {
    src: 'https://purls-group.co.uk/wp-content/uploads/2025/07/first-aid-cert-3.png',
    label: 'Bronze Medallion 2017',
  },
  {
    src: 'https://purls-group.co.uk/wp-content/uploads/2025/06/2018-First-Aid_page-0001.jpg',
    label: 'First Aid Certificate 2018',
  },
  {
    src: 'https://purls-group.co.uk/wp-content/uploads/2025/06/2020-First-Aid-Cert_page-0001.jpg',
    label: 'First Aid Certificate 2020',
  },
  {
    src: 'https://purls-group.co.uk/wp-content/uploads/2025/06/2021-First-Aid_page-0001.jpg',
    label: 'First Aid Certificate 2021',
  },
  {
    src: 'https://purls-group.co.uk/wp-content/uploads/2025/06/2023-Mable-Infection-Control-Certificate_page-0001.jpg',
    label: 'Mable infection control certificate 2023',
  },
]


type Cert = { src: string; label: string }

function CertGrid({ certs, sectionDelay = 0 }: { certs: Cert[]; sectionDelay?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
      {certs.map((cert, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            delay: sectionDelay + i * 0.07,
            duration: 0.55,
            ease: 'easeOut',
          }}
          whileHover={{
            y: -6,
            scale: 1.02,
            boxShadow: '0 16px 48px rgba(14,165,233,0.22)',
          }}
          className="flex flex-col items-center cursor-default"
        >
          <div
            className="w-full overflow-hidden rounded-lg"
            style={{
              border: '1px solid rgba(14,165,233,0.18)',
              background: '#060d14',
              aspectRatio: '3/4',
            }}
          >
            <img
              src={cert.src}
              alt={cert.label}
              className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
          <p
            className="mt-2 text-center text-xs leading-tight"
            style={{ color: 'var(--color-muted)' }}
          >
            {cert.label}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

function SectionHeading({ title, delay = 0 }: { title: string; delay?: number }) {
  return (
    <motion.div {...fadeUp(delay)} className="mb-10 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-wide">
        {title}
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, duration: 0.55, ease: 'easeOut' }}
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

export default function Qualifications() {
  return (
    <div
      className="page-scroll w-full h-full"
      style={{ background: '#000', fontFamily: 'var(--font-family-primary)' }}
    >
      <section className="py-12 px-5 md:px-14 text-center">
        <motion.span
          {...fadeUp(0)}
          className="text-xs tracking-[0.32em] uppercase"
          style={{ color: '#0ea5e9' }}
        >
          About · Credentials
        </motion.span>

        <motion.h1
          {...fadeUp(0.08)}
          className="mt-3 font-semibold text-white"
          style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', lineHeight: 1.15 }}
        >
          Qualifications
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18, duration: 0.55, ease: 'easeOut' }}
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
          className="max-w-2xl mx-auto text-sm leading-relaxed"
          style={{ color: 'var(--color-muted)', lineHeight: 1.9 }}
        >
          Claudia Purley brings over a decade of professional experience across massage therapy, personal
          training, and beauty — backed by a comprehensive portfolio of qualifications and an
          unwavering commitment to continuing education.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-10 flex flex-wrap justify-center gap-8"
        >
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '22', label: 'Certificates' },
            { value: '4', label: 'Disciplines' },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
              className="flex flex-col items-center"
            >
              <span className="text-3xl font-black" style={{ color: '#0ea5e9' }}>
                {s.value}
              </span>
              <span className="text-xs tracking-widest uppercase mt-1" style={{ color: 'var(--color-muted)' }}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-10 px-5 md:px-14" style={{ background: '#060d14' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Massage Certificates" delay={0} />
          <CertGrid certs={massageCerts} sectionDelay={0.05} />
        </div>
      </section>

      <section className="py-10 px-5 md:px-14" style={{ background: '#000' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Fitness Certificates" delay={0} />
          <CertGrid certs={fitnessCerts} sectionDelay={0.05} />
        </div>
      </section>

      <section className="py-10 px-5 md:px-14" style={{ background: '#060d14' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Beauty Certificates" delay={0} />
          <CertGrid certs={beautyCerts} sectionDelay={0.05} />
        </div>
      </section>

      <section className="py-10 px-5 md:px-14" style={{ background: '#000' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="First Aid" delay={0} />
          <CertGrid certs={firstAidCerts} sectionDelay={0.05} />
        </div>
      </section>

      <Copyright />
    </div>
  )
}
