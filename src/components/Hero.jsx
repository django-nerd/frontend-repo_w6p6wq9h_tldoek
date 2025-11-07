import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ onExplore }) {
  const wrapperRef = useRef(null)

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0D0D0D] text-white">
      {/* 3D Spline Scene - interactive, modern background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
          aria-label="Futuristic 3D hero animation"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient and vignette overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(60% 60% at 50% 40%, rgba(0,191,255,0.25) 0%, rgba(255,0,127,0.15) 35%, rgba(0,0,0,0.0) 70%)'
      }} />

      {/* Centered content - ensure no Poppins font is used */}
      <div ref={wrapperRef} className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 bg-gradient-to-r from-[#EAEAEA] via-white to-[#EAEAEA] bg-clip-text text-4xl font-semibold text-transparent sm:text-6xl font-sans"
          >
            Muhammad Taufik Hidayat
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-[#EAEAEA]/80 sm:text-base font-sans"
          >
            Backend Developer berfokus pada arsitektur sistem, optimasi performa, dan integrasi API. Membangun aplikasi web berbasis Laravel, Node.js, dan MySQL dengan keamanan serta efisiensi sebagai prioritas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          >
            <motion.button
              onClick={() => onExplore?.()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-cyan-400/40 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/10 sm:px-8 sm:py-4 sm:text-base"
              style={{ boxShadow: '0 0 24px rgba(0,191,255,0.35), inset 0 0 24px rgba(0,191,255,0.15)' }}
            >
              <span className="relative z-10">Explore Portfolio</span>
              <span className="relative z-10 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.8)]" />
              {/* Neon sweep */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent transition-transform duration-700 group-hover:translate-x-0" />
            </motion.button>
          </motion.div>

          {/* Helper caption */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8, transition: { delay: 0.6 } }}
            className="mt-6 text-xs text-[#EAEAEA]/60 font-sans"
          >
            Interaktif: seret/klik elemen 3D lalu mulai jelajah portofolio.
          </motion.p>
        </div>
      </div>

      {/* Decorative particles (subtle) */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.6) 0, rgba(255,255,255,0) 60%),\n               radial-gradient(2px 2px at 80% 40%, rgba(0,191,255,0.8) 0, rgba(0,191,255,0) 60%),\n               radial-gradient(1.5px 1.5px at 60% 70%, rgba(255,0,127,0.7) 0, rgba(255,0,127,0) 60%)'
          }}
        />
      </AnimatePresence>
    </section>
  )
}
