import { motion } from 'framer-motion'
import { Facebook, Instagram, HelpCircle, Phone, Mail, Clock, ChevronRight, MessageCircle } from 'lucide-react'
import NeedHelp from '../components/shared/NeedHelp'
import Copyright from '../components/shared/Copyright'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
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
    <div className="page-scroll w-full h-full relative">
      <div className="coffee-stain w-64 h-64 top-10 right-10 opacity-40"></div>
      
      <div className="w-full flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 font-typewriter text-[10px] sm:text-xs opacity-70 border-b border-black/10">
        <a href="https://wa.me/61434605902" className="flex items-center gap-1 sm:gap-1.5 hover:opacity-80">
          <MessageCircle size={14} />
          <span className="hidden sm:inline">WHATSAPP: </span>+61434605902
        </a>
        <div className="flex items-center gap-3 sm:gap-4">
          <a href="https://facebook.com" aria-label="Facebook"><Facebook size={14} /></a>
          <a href="https://instagram.com" aria-label="Instagram"><Instagram size={14} /></a>
          <a
            href="#contact-section"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="flex items-center gap-1 hover:opacity-80 font-bold"
          >
            <HelpCircle size={14} />
            <span className="hidden sm:inline">NEED HELP</span>
          </a>
        </div>
      </div>

      <section className="relative flex flex-col items-center mt-4 md:-mt-4">
        <motion.div {...fadeUp(0)} className="select-none -mb-6">
          <img
            src="/Purls_Logo_Full.png"
            alt="Purls Logo"
            className="w-auto h-48 md:h-72 object-contain mix-blend-multiply opacity-90 sepia-[0.3]"
          />
        </motion.div>
        
        <motion.div {...fadeUp(0.2)}>
          <a
            href="#contact-section"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-block px-6 py-2 border-2 border-[var(--color-ink)] font-typewriter font-bold uppercase tracking-widest text-sm hover:bg-[var(--color-ink)] hover:text-white transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </section>

      <section className="px-6 md:px-10 py-6 max-w-3xl mx-auto font-serif text-base md:text-lg leading-relaxed">
        <motion.p {...fadeUp(0.1)} className="mb-6">
          I am a fully qualified and fully insured mobile Massage Therapist, Personal Trainer,
          and Beautician, offering bespoke services in the privacy and comfort of your own space —
          whether that's your home, office, hotel suite, aged care residence, hospital, or holiday
          property. I bring all professional equipment and premium products with me, creating a
          seamless experience tailored to your needs.
        </motion.p>
        <motion.p {...fadeUp(0.2)}>
          With over a decade of professional experience in Australia, I bring a unique blend
          of advanced skill, deep empathy, and global perspective to my work. After 10 transformative
          years abroad, I've returned home to launch a business rooted in excellence, integrity, and
          a deep commitment to those I serve.
        </motion.p>
      </section>

      <section className="px-4 md:px-8 pb-16 pt-12 relative">
        <div className="coffee-stain w-96 h-96 -left-20 top-0 opacity-30"></div>
        
        <motion.h2 
          {...fadeUp(0)}
          className="text-center py-6 font-handwriting text-4xl md:text-5xl font-bold mb-6"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto relative z-10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp(i * 0.1)}
              className="flex flex-col group cursor-pointer"
              onClick={() => navigateTo(s.page)}
            >
              <div className="sketched-border mb-4 overflow-hidden bg-white/50 h-56">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover mix-blend-multiply sepia-[0.4] contrast-125 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-handwriting text-3xl font-bold mb-2 text-[var(--color-accent)] group-hover:text-[var(--color-ink)] transition-colors">
                {s.title}
              </h3>
              <p className="font-serif text-[1.05rem] leading-snug mb-3">
                {s.desc}
              </p>
              <div className="font-typewriter text-xs font-bold uppercase tracking-widest flex items-center gap-1 opacity-70 group-hover:opacity-100">
                Read More <ChevronRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact-section" className="px-4 py-8 border-t border-black/10 mt-6 relative">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="bg-white/40 p-2 sketched-border">
            <h3 className="font-handwriting text-4xl mb-2 text-center">Get in Touch</h3>
            <NeedHelp />
          </div>
          <div className="h-full min-h-[300px] sketched-border overflow-hidden bg-white/40 p-2">
            <iframe
              title="Purls Group Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40407.2562476562!2d-0.8402283!3d50.7719602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4874457e5e3155ab%3A0xc0d87db14c81a53!2sManhood%20Peninsula!5e0!3m2!1sen!2suk!4v1690000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ minHeight: '300px', filter: 'sepia(0.8) contrast(1.1) opacity(0.8)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-8 py-12 border-t border-black/20 mt-8 font-typewriter text-sm bg-[rgba(0,0,0,0.03)]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="mb-4 font-bold tracking-widest uppercase">Hours</h3>
            <div className="space-y-2 opacity-80">
              <p className="flex items-center gap-2"><Clock size={14} /> Tue – Sun</p>
              <p>12:00pm – 10:00pm</p>
              <p className="text-xs">Last appointment at 10pm</p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-bold tracking-widest uppercase">Useful Links</h3>
            <ul className="space-y-2 opacity-80">
              {['Massage', 'Seated Massage', 'Personal Training', 'Beauty Packages', 'Qualifications', 'References'].map((label, i) => (
                <li key={label}>
                  <button onClick={() => navigateTo(i)} className="hover:underline text-left">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold tracking-widest uppercase">Contact</h3>
            <div className="space-y-3 opacity-80">
              <a href="mailto:claudia@purls-group.co.uk" className="flex items-center gap-2 hover:underline">
                <Mail size={14} /> claudia@purls-group.co.uk
              </a>
              <a href="https://wa.me/61434605902" className="flex items-center gap-2 hover:underline">
                <Phone size={14} /> WhatsApp: +61434605902
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center opacity-60">
          <Copyright />
        </div>
      </footer>
    </div>
  )
}
