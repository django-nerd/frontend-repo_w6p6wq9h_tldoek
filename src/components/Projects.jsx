import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Jastru - E-Commerce Platform',
    description:
      'Platform e-commerce inovatif yang menjual produk dan jasa berbasis jarak, dilengkapi fitur pembayaran otomatis (Midtrans), sistem wallet, dan misi interaktif.',
    stack: ['Laravel 11', 'MySQL', 'Midtrans API', 'Bootstrap', 'GeoLocation API'],
    link: 'https://jastru.id'
  },
  {
    title: 'B-Forge Dashboard',
    description:
      'Sistem manajemen internal untuk perusahaan B-Forge Technology yang menampilkan statistik transaksi, analitik penjualan, dan CRUD dinamis.',
    stack: ['Laravel', 'Vue.js', 'Chart.js', 'REST API'],
    link: '#'
  },
  {
    title: 'API Microservice Gateway',
    description:
      'Gateway service untuk mengelola request lintas aplikasi dengan autentikasi JWT dan load balancing.',
    stack: ['Node.js', 'Express', 'Redis', 'Nginx'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#0D0D0D] py-20 text-[#EAEAEA]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-2xl font-semibold"
        >
          Projects
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, rotateY: -8, y: 12 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative min-h-[220px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md [transform-style:preserve-3d]"
              style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.3), inset 0 0 60px rgba(255,255,255,0.03)' }}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-pink-500/10" />
              <div className="relative z-10">
                <h3 className="mb-2 text-lg font-semibold group-hover:text-cyan-300 transition-colors">{p.title}</h3>
                <p className="mb-3 text-sm text-[#EAEAEA]/75">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-[#EAEAEA]/90">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* glass reflection sweep */}
              <div className="pointer-events-none absolute -inset-1 translate-x-[-120%] rotate-6 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
