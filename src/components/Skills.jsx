import { motion } from 'framer-motion'

const skills = [
  'PHP (Laravel)',
  'Node.js (Express)',
  'MySQL / PostgreSQL',
  'RESTful API',
  'Git & GitHub',
  'Docker',
  'Redis',
  'Cloud Deployment (Vercel, Railway, AWS)'
]

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[#0D0D0D] py-16 text-[#EAEAEA]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-2xl font-semibold"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#EAEAEA] backdrop-blur-md"
              style={{ boxShadow: '0 6px 24px rgba(0,0,0,0.25), inset 0 0 40px rgba(255,255,255,0.03)' }}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-pink-500/10" />
              <span className="relative z-10">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
