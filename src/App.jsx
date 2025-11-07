import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  const [explored, setExplored] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!explored) return
    // Smooth scroll to content after the hero unfold effect feeling
    const timeout = setTimeout(() => {
      const el = document.getElementById('about')
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 800)
    return () => clearTimeout(timeout)
  }, [explored])

  return (
    <div ref={containerRef} className="min-h-screen w-full bg-[#0D0D0D] text-white">
      <Hero onExplore={() => setExplored(true)} />

      {/* Transition band after clicking explore */}
      <AnimatePresence>
        {explored && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 64, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full bg-gradient-to-r from-cyan-500/20 via-pink-500/10 to-cyan-500/20 backdrop-blur"
          />
        )}
      </AnimatePresence>

      <About />
      <Projects />
      <Contact />

      <footer className="border-t border-white/10 bg-[#0D0D0D] py-10 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Muhammad Taufik Hidayat • Built with React, Framer Motion, and Spline
      </footer>
    </div>
  )
}
