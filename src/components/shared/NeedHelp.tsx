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
    <section className="w-full py-8 px-4 md:px-8 bg-transparent text-[#2a2c31] font-sans border-t border-black/10 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="max-w-4xl mx-auto bg-[#d2c3a5]/30 p-8 md:p-12 rounded-2xl border border-black/5 shadow-sm"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center tracking-wide font-serif">
          Need Help? Let's Chat
        </h2>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 text-center border border-black/10 rounded-xl bg-white/40"
          >
            <p className="text-xl font-medium text-[#2a2c31]">Thank you for your message!</p>
            <p className="text-sm mt-2 text-[#2a2c31]/70">We will respond to your enquiry as soon as possible.</p>
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
                className="w-full bg-white/60 border border-black/10 focus:border-black/30 focus:bg-white/90 px-4 py-3 text-sm text-[#2a2c31] placeholder-[#2a2c31]/50 outline-none transition-all rounded-lg shadow-sm"
              />

              <div className="relative w-full">
                <input
                  id="needhelp-email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                  className="w-full bg-white/60 border border-black/10 focus:border-black/30 focus:bg-white/90 px-4 py-3 pr-10 text-sm text-[#2a2c31] placeholder-[#2a2c31]/50 outline-none transition-all rounded-lg shadow-sm"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                  <span className="bg-[#d2c3a5] p-1.5 rounded flex items-center justify-center border border-black/5">
                    <Mail size={14} className="text-[#2a2c31]" />
                  </span>
                </span>
              </div>

              <input
                id="needhelp-source"
                type="text"
                placeholder="How Did You Hear About PURLS?"
                value={form.source}
                onChange={e => setForm(f => ({ ...f, source: e.target.value }))}
                className="w-full bg-white/60 border border-black/10 focus:border-black/30 focus:bg-white/90 px-4 py-3 text-sm text-[#2a2c31] placeholder-[#2a2c31]/50 outline-none transition-all rounded-lg shadow-sm"
              />

              <input
                id="needhelp-phone"
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                className="w-full bg-white/60 border border-black/10 focus:border-black/30 focus:bg-white/90 px-4 py-3 text-sm text-[#2a2c31] placeholder-[#2a2c31]/50 outline-none transition-all rounded-lg shadow-sm"
              />
            </div>

            <textarea
              id="needhelp-comments"
              placeholder="Comments"
              rows={5}
              value={form.comments}
              onChange={e => setForm(f => ({ ...f, comments: e.target.value }))}
              required
              className="w-full bg-white/60 border border-black/10 focus:border-black/30 focus:bg-white/90 px-4 py-3 text-sm text-[#2a2c31] placeholder-[#2a2c31]/50 outline-none resize-none transition-all rounded-lg shadow-sm"
            />
            <button
              id="needhelp-submit"
              type="submit"
              className="w-full text-[#ebdcca] bg-[#2a2c31] hover:bg-black font-medium py-4 text-sm tracking-widest uppercase select-none transition-colors rounded-lg shadow-md mt-4 border border-black/20"
            >
              Send Message
            </button>
          </form>
        )}
      </motion.div>
    </section>
  )
}
