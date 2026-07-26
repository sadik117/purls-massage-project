import { motion } from 'framer-motion'
import Copyright from '../components/shared/Copyright'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const massageCerts = [
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/10/11201ead-8c8e-44a6-9366-a06f3c156f2c.jpeg', label: 'Diploma of Indian Head Massage' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/07/Massage-Cert-2-scaled.jpeg', label: 'Certificate Four Massage Therapy' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/06/Diploma-of-Remedial-Massage-Cert-Transcripts-1_page-0001.jpg', label: 'Diploma of Remedial Massage' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/06/Aromatherapy-Diploma-1-scaled.jpg', label: 'Diploma of Clinical Aromatherapy' },
]

const fitnessCerts = [
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/06/Cert-2-Fitness_page-0001-1.jpg', label: 'Certificate Two in Fitness Instructing' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/07/fitness-cer-2.png', label: 'Spin Instructor' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/06/Power-Plates-Instructor_page-0001-1.jpg', label: 'Power Plates Instructor' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/06/Cert-3-Fitness_page-0001.jpg', label: 'Certificate Three in Fitness' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/07/Fitness-Cert-5-scaled.jpeg', label: 'Certificate Four Personal Trainer' },
]

const beautyCerts = [
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/BEAUTY-X-1-1-1-scaled.jpg', label: 'Level Two NVQ Diploma in Beauty Therapy' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/BEAUTY-X-2-scaled.jpg', label: 'Facial Treatment' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/BEAUTY-X-3-scaled.jpg', label: 'Manicure & SPA Manicure' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/BEAUTY-4-scaled.jpg', label: 'Pedicure & SPA Pedicure' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/BEAUTY-X-5-scaled.jpg', label: 'Lash & Brow Treatment' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/BEAUTY-X-6-scaled.jpg', label: 'Make-Up Application' },
]

const firstAidCerts = [
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/08/First-Aid-1-scaled.jpg', label: 'Provide CPR 2016' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/06/2016-First-Aid_page-0001-1.jpg', label: 'First Aid Certificate 2016' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/07/first-aid-cert-3.png', label: 'Bronze Medallion 2017' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/06/2018-First-Aid_page-0001.jpg', label: 'First Aid Certificate 2018' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/06/2020-First-Aid-Cert_page-0001.jpg', label: 'First Aid Certificate 2020' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/06/2021-First-Aid_page-0001.jpg', label: 'First Aid Certificate 2021' },
  { src: 'https://purls-group.co.uk/wp-content/uploads/2025/06/2023-Mable-Infection-Control-Certificate_page-0001.jpg', label: 'Mable infection control certificate 2023' },
]

type Cert = { src: string; label: string }

function CertGrid({ certs, sectionDelay = 0 }: { certs: Cert[]; sectionDelay?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
      {certs.map((cert, i) => {
        const rotate = (i % 2 === 0 ? 1 : -1) * ((i % 3) + 1)
        
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: sectionDelay + i * 0.05, duration: 0.5, ease: 'easeOut' }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            className={`flex flex-col items-center cursor-pointer sketched-border bg-white/70 p-3 pb-6 shadow-sm transform rotate-${Math.abs(rotate)} ${rotate < 0 ? '-rotate-' + Math.abs(rotate) : ''}`}
            style={{ transform: `rotate(${rotate}deg)` }}
          >
            <div className="w-full overflow-hidden border border-black/10 aspect-[3/4]">
              <img
                src={cert.src}
                alt={cert.label}
                className="w-full h-full object-cover object-top mix-blend-multiply sepia-[0.2]"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-center text-sm font-handwriting text-[var(--color-ink)] leading-tight">
              {cert.label}
            </p>
          </motion.div>
        )
      })}
    </div>
  )
}

function SectionHeading({ title, delay = 0 }: { title: string; delay?: number }) {
  return (
    <motion.div {...fadeUp(delay)} className="mb-10 text-center">
      <h2 className="text-3xl md:text-4xl font-handwriting font-bold text-[var(--color-ink)]">
        {title}
      </h2>
      <div className="mx-auto mt-2 h-0.5 w-16 bg-[var(--color-accent)]/50" />
    </motion.div>
  )
}

export default function Qualifications() {
  return (
    <div className="page-scroll w-full h-full relative">
      <div className="coffee-stain w-96 h-96 top-20 right-10 opacity-20"></div>

      <section className="py-12 md:py-16 px-4 md:px-14 text-center">
        <motion.span
          {...fadeUp(0)}
          className="font-typewriter text-xs tracking-widest uppercase opacity-70"
        >
          About &middot; Credentials
        </motion.span>

        <motion.h1
          {...fadeUp(0.1)}
          className="mt-4 font-handwriting font-bold text-[var(--color-ink)]"
          style={{ fontSize: 'clamp(2rem, 8vw, 5.5rem)', lineHeight: 1 }}
        >
          Qualifications
        </motion.h1>

        <motion.div
          {...fadeUp(0.2)}
          className="max-w-2xl mx-auto mt-8 text-[1.05rem] font-serif leading-relaxed opacity-90"
        >
          Claudia Purley brings over a decade of professional experience across massage therapy, personal
          training, and beauty — backed by a comprehensive portfolio of qualifications and an
          unwavering commitment to continuing education.
        </motion.div>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '22', label: 'Certificates' },
            { value: '4', label: 'Disciplines' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-handwriting font-bold text-[var(--color-ink)]">{s.value}</span>
              <span className="text-xs font-typewriter tracking-widest uppercase mt-1 opacity-70">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="py-12 px-4 md:px-16 border-t border-black/10 relative">
        <div className="coffee-stain w-80 h-80 -left-20 top-40 opacity-15"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionHeading title="Massage Certificates" delay={0} />
          <CertGrid certs={massageCerts} sectionDelay={0.1} />
        </div>
      </section>

      <section className="py-12 px-4 md:px-16 bg-[rgba(0,0,0,0.03)] border-t border-black/10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Fitness Certificates" delay={0} />
          <CertGrid certs={fitnessCerts} sectionDelay={0.1} />
        </div>
      </section>

      <section className="py-12 px-4 md:px-16 border-t border-black/10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Beauty Certificates" delay={0} />
          <CertGrid certs={beautyCerts} sectionDelay={0.1} />
        </div>
      </section>

      <section className="py-12 px-4 md:px-16 bg-[rgba(0,0,0,0.03)] border-t border-black/10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="First Aid" delay={0} />
          <CertGrid certs={firstAidCerts} sectionDelay={0.1} />
        </div>
      </section>

      <div className="opacity-60 pb-8 pt-8">
        <Copyright />
      </div>
    </div>
  )
}
