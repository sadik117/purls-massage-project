import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function NeedHelp() {
  const [form, setForm] = useState({ name: '', email: '', source: '', phone: '', comments: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="w-full py-12 px-6 md:px-20 bg-black text-white font-sans">
      <motion.div
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-left tracking-wide">
          Need Help? Let's Chat
        </h2>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 text-center border border-sky-500/30 rounded"
          >
            <p className="text-xl font-light text-sky-300">Thank you for your message!</p>
            <p className="text-sm mt-2 text-sky-200/70">We will respond to your enquiry as soon as possible.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                id="needhelp-name"
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                required
                className="w-full bg-transparent border border-neutral-800 focus:border-sky-500 px-4 py-3 text-sm text-white placeholder-gray-200 outline-none transition-colors"
              />

              <div className="relative w-full">
                <input
                  id="needhelp-email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                  className="w-full bg-transparent border border-neutral-800 focus:border-sky-500 px-4 py-3 pr-10 text-sm text-white placeholder-gray-200 outline-none transition-colors"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                  <span className="bg-[#2a9d8f] p-1 rounded flex items-center justify-center">
                    <Mail size={12} className="text-white" />
                  </span>
                </span>
              </div>

              <input
                id="needhelp-source"
                type="text"
                placeholder="How Did You Hear About PURLS?"
                value={form.source}
                onChange={e => setForm(f => ({ ...f, source: e.target.value }))}
                className="w-full bg-transparent border border-neutral-800 focus:border-sky-500 px-4 py-3 text-sm text-white placeholder-gray-200 outline-none transition-colors"
              />

              <input
                id="needhelp-phone"
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                className="w-full bg-transparent border border-neutral-800 focus:border-sky-500 px-4 py-3 text-sm text-white placeholder-gray-200 outline-none transition-colors"
              />
            </div>

            <textarea
              id="needhelp-comments"
              placeholder="Comments"
              rows={5}
              value={form.comments}
              onChange={e => setForm(f => ({ ...f, comments: e.target.value }))}
              required
              className="w-full bg-transparent border border-neutral-800 focus:border-sky-500 px-4 py-3 text-sm text-white placeholder-gray-200 outline-none resize-none transition-colors"
            />
            <button
              id="needhelp-submit"
              type="submit"
              className="w-full text-white bg-[#7dd3fc] hover:bg-[#38bdf8] font-semibold py-3 text-xs tracking-[0.2em] uppercase select-none transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </motion.div>
    </section>
  )
}
