import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0D0D0D] py-24 text-[#EAEAEA]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.3), inset 0 0 60px rgba(255,255,255,0.03)' }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(60% 60% at 20% 0%, rgba(0,191,255,0.12) 0%, rgba(0,0,0,0) 70%)'
            }} />
            <div className="relative z-10">
              <h2 className="mb-4 text-2xl font-semibold">About Me</h2>
              <p className="text-sm leading-relaxed text-[#EAEAEA]/80">
                Backend Developer berpengalaman dengan fokus pada arsitektur sistem, optimasi performa, dan integrasi API. Berpengalaman membangun aplikasi web berbasis Laravel, Node.js, dan MySQL dengan keamanan serta efisiensi sebagai prioritas.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#101010] to-[#151515] p-6"
          >
            <div className="relative h-60 w-full overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(0,191,255,0.2)_0%,rgba(255,0,127,0.15)_30%,rgba(0,0,0,0)_70%)]" />
              <motion.div
                initial={{ rotateX: 8, rotateY: -8, scale: 0.98 }}
                whileHover={{ rotateX: 0, rotateY: 0, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                className="relative z-10 flex h-full items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md"
                style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.35), inset 0 0 64px rgba(255,255,255,0.04)' }}
              >
                <div className="text-center">
                  <p className="text-xs uppercase tracking-widest text-cyan-300/80">Role</p>
                  <h3 className="mt-1 text-xl font-semibold">Backend Developer</h3>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
