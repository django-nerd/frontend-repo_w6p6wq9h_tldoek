import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Globe } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#0D0D0D] py-20 text-[#EAEAEA]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-2xl font-semibold"
        >
          Contact
        </motion.h2>

        <div className="grid items-start gap-8 md:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.3), inset 0 0 60px rgba(255,255,255,0.03)' }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-pink-500/10" />
            <div className="relative z-10 grid gap-4">
              <input type="text" placeholder="Nama" className="rounded-md border border-white/10 bg-[#111111] px-4 py-3 text-sm text-[#EAEAEA] placeholder-white/40 outline-none focus:border-cyan-400/50" />
              <input type="email" placeholder="Email" className="rounded-md border border-white/10 bg-[#111111] px-4 py-3 text-sm text-[#EAEAEA] placeholder-white/40 outline-none focus:border-cyan-400/50" />
              <textarea placeholder="Pesan" rows={4} className="rounded-md border border-white/10 bg-[#111111] px-4 py-3 text-sm text-[#EAEAEA] placeholder-white/40 outline-none focus:border-cyan-400/50" />
              <button className="group relative inline-flex justify-center overflow-hidden rounded-md border border-cyan-400/40 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/10" style={{ boxShadow: '0 0 18px rgba(0,191,255,0.25), inset 0 0 24px rgba(0,191,255,0.12)' }}>
                <span className="relative z-10">Kirim</span>
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent transition-transform duration-700 group-hover:translate-x-0" />
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-4"
          >
            <a href="mailto:taufik.backenddev@example.com" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-[#EAEAEA] backdrop-blur-md transition-colors hover:bg-white/10">
              <Mail size={18} className="text-cyan-300" />
              taufik.backenddev@example.com
            </a>
            <a href="https://github.com/taufikhidayat" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-[#EAEAEA] backdrop-blur-md transition-colors hover:bg-white/10">
              <Github size={18} className="text-cyan-300" />
              github.com/taufikhidayat
            </a>
            <a href="https://linkedin.com/in/taufikhidayat" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-[#EAEAEA] backdrop-blur-md transition-colors hover:bg-white/10">
              <Linkedin size={18} className="text-cyan-300" />
              linkedin.com/in/taufikhidayat
            </a>
            <a href="https://bforge.tech" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-[#EAEAEA] backdrop-blur-md transition-colors hover:bg-white/10">
              <Globe size={18} className="text-cyan-300" />
              bforge.tech
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
