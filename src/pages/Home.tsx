
import { motion } from 'framer-motion'
import { Facebook, Instagram, HelpCircle, Phone, Mail, Clock, ChevronRight, MessageCircle } from 'lucide-react'
import NeedHelp from '../components/shared/NeedHelp'
import Copyright from '../components/shared/Copyright'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
})

const services = [
  {
    img: '/service_massage.png',
    title: 'Massage',
    desc: 'Focuses on fixing underlying issues, whether they are related to muscle injuries, chronic pain, or postural tension.',
    page: 1,
  },
  {
    img: '/service_seated.png',
    title: 'Seated Massage',
    desc: 'Enjoy quick, effective relief with our seated massage — fully clothed treatment for back, neck, and shoulders.',
    page: 2,
  },
  {
    img: '/service_training.png',
    title: 'Personal Training',
    desc: 'A personal trainer who specialises in rehabilitation with a primary focus on promoting strength and wellbeing.',
    page: 3,
  },
  {
    img: '/service_beauty.png',
    title: 'Beauty Packages',
    desc: 'Indulge in our carefully curated beauty packages designed to refresh, rejuvenate, and restore confidence.',
    page: 4,
  },
]

interface HomeProps {
  onNavigate?: (index: number) => void
}

export default function Home({ onNavigate }: HomeProps) {
  const navigateTo = (index: number) => {
    if (onNavigate) onNavigate(index)
    else window.dispatchEvent(new CustomEvent('purls-navigate', { detail: index }))
  }

  return (
    <div
      className="page-scroll w-full h-full"
      style={{ background: '#000', fontFamily: 'var(--font-family-primary)' }}
    >
      <div
        className="w-full flex items-center justify-between px-5 py-2 text-xs tracking-wide"
        style={{ background: 'linear-gradient(90deg, #0369a1 0%, #0ea5e9 100%)', color: '#fff' }}
      >
        <a
          href="https://wa.me/61434605902"
          className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          style={{ letterSpacing: '0.06em', color: '#ffffff' }}
        >
          <MessageCircle size={12} />
          WHATSAPP: +61434605902
        </a>
        <div className="flex items-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook size={14} className="hover:opacity-70 transition-opacity" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={14} className="hover:opacity-70 transition-opacity" />
          </a>
          <a
            href="#contact-section"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="flex items-center gap-1 hover:opacity-80 transition-opacity"
            style={{ letterSpacing: '0.08em', color: '#ffffff' }}
          >
            <HelpCircle size={12} />
            NEED HELP
          </a>
        </div>
      </div>

      <section
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{ minHeight: '65vh', background: '#000' }}
      >

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="select-none py-6 flex justify-center items-center"
        >
          <img
            src="/Purls-Logo.png"
            alt="Purls Massage Fitness Beauty"
            className="w-auto h-48 md:h-64 object-contain filter drop-shadow-[0_0_25px_rgba(14,165,233,0.35)]"
          />
        </motion.div>

        <motion.div {...fadeUp(0.5)} className="flex gap-3 justify-center mt-2">
          <a
            id="hero-cta-contact"
            href="#contact-section"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="animated-contact-btn-outer cursor-pointer"
          >
            <span className="animated-contact-btn-inner font-semibold">
              Contact Us
            </span>
          </a>
        </motion.div>
      </section>

      <section
        className="px-8 py-6 text-center max-w-3xl mx-auto"
      >
        <motion.p
          {...fadeUp(0)}
          className="font-light leading-relaxed mb-6"
          style={{ color: '#ffffff', fontSize: '1rem', lineHeight: 1.9 }}
        >
          I am a fully qualified and fully insured mobile Massage Therapist, Personal Trainer,
          and Beautician, offering bespoke services in the privacy and comfort of your own space —
          whether that's your home, office, hotel suite, aged care residence, hospital, or holiday
          property. I bring all professional equipment and premium products with me, creating a
          seamless experience tailored to your needs. Each appointment is personalised to support
          your well-being and lifestyle, offering a discreet, professional service tailored to clients
          who value excellence, privacy, and convenience.
        </motion.p>
        <motion.p
          {...fadeUp(0.1)}
          className="font-light leading-relaxed"
          style={{ color: '#ffffff', fontSize: '1rem', lineHeight: 1.9 }}
        >
          With over a decade of professional experience in Australia, I bring a unique blend
          of advanced skill, deep empathy, and global perspective to my work. After 10 transformative
          years abroad, I've returned home to launch a business rooted in excellence, integrity, and
          a deep commitment to those I serve.
        </motion.p>
      </section>

      <section className="px-6 pb-16">
        <motion.h2
          {...fadeUp(0)}
          className="text-center py-8 font-semibold"
          style={{ fontSize: '2.4rem', color: '#ffffff', letterSpacing: '0.02em' }}
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: 'easeOut' }}
              className="flex flex-col"
              style={{
                background: '#050d14',
                border: '1px solid rgba(14,165,233,0.12)',
              }}
            >

              <div className="overflow-hidden" style={{ height: '180px' }}>
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-1 p-4">
                <h3
                  className="mb-2 font-semibold"
                  style={{ fontSize: '1.3rem', color: '#ffffff', letterSpacing: '0.01em' }}
                >
                  {s.title}
                </h3>
                <p
                  className="flex-1 text-sm font-light leading-relaxed mb-4"
                  style={{ color: '#ffffff', lineHeight: 1.75 }}
                >
                  {s.desc}
                </p>
                <button
                  id={`service-readmore-${i}`}
                  onClick={() => navigateTo(s.page)}
                  className="animated-readmore-btn-outer cursor-pointer"
                >
                  <span className="animated-readmore-btn-inner">
                    Read More <ChevronRight size={13} />
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="contact-section"
        className="px-6 py-8"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <NeedHelp />
          </div>

          <div className="h-full min-h-[250px] mt-2 md:mt-26">
            <iframe
              title="Purls Group Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40407.2562476562!2d-0.8402283!3d50.7719602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4874457e5e3155ab%3A0xc0d87db14c81a53!2sManhood%20Peninsula!5e0!3m2!1sen!2suk!4v1690000000000!5m2!1sen!2suk"
              width="100%"
              height="80%"
              style={{
                border: '1px solid rgba(14,165,233,0.2)',
                minHeight: '250px',
                filter: 'invert(90%) hue-rotate(180deg) brightness(0.85)',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer
        className="px-6 py-8"
        style={{ background: '#000', borderTop: '1px solid rgba(14,165,233,0.15)' }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3
              className="mb-4 font-normal"
              style={{ fontSize: '1.25rem', color: '#ffffff', letterSpacing: '0.04em' }}
            >
              Opening Hours
            </h3>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm font-light" style={{ color: '#ffffff' }}>
                <Clock size={13} />
                Tuesday – Sunday
              </div>
              <p className="text-sm font-light" style={{ color: '#ffffff' }}>
                12pm – 10pm
              </p>
              <p className="text-sm font-light" style={{ color: '#ffffff' }}>
                Last appointment finishing at 10pm
              </p>
            </div>
          </div>

          <div>
            <h3
              className="mb-4 font-normal"
              style={{ fontSize: '1.25rem', color: '#ffffff', letterSpacing: '0.04em' }}
            >
              Useful Links
            </h3>
            <ul className="space-y-1.5">
              {['Home', 'Massage', 'Seated Massage', 'Personal Training', 'Beauty Packages', 'Qualifications', 'References'].map((label, i) => (
                <li key={label}>
                  <motion.button
                    id={`footer-link-${i}`}
                    onClick={() => navigateTo(i)}
                    className="text-sm font-light text-left cursor-pointer"
                    style={{ color: '#ffffff', letterSpacing: '0.03em', originX: 0 }}
                    whileHover={{ x: 6, color: '#38bdf8' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  >
                    {label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="mb-4 font-normal"
              style={{ fontSize: '1.25rem', color: '#ffffff', letterSpacing: '0.04em' }}
            >
              Contact Us
            </h3>
            <div className="space-y-2">
              <a
                href="mailto:claudia@purls-group.co.uk"
                className="flex items-center gap-2 text-sm font-light transition-colors duration-200 hover:text-sky-400"
                style={{ color: '#ffffff' }}
              >
                <Mail size={13} />
                claudia@purls-group.co.uk
              </a>
              <a
                href="https://wa.me/61434605902"
                className="flex items-center gap-2 text-sm font-light transition-colors duration-200 hover:text-sky-400"
                style={{ color: '#ffffff' }}
              >
                <Phone size={13} />
                WhatsApp: +61434605902
              </a>
            </div>
          </div>
        </div>
        <Copyright />
      </footer>
    </div>
  )
}
