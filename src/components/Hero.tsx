import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Facebook, Mail } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/nasif-meta', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/nasif-bin-borhan', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://facebook.com/nasif.meta', label: 'Facebook' },
  { icon: Mail, href: 'mailto:engineer.nasif@gmail.com', label: 'Email' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-pink/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium text-sm mb-6">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-gray-900 dark:text-white">I'm </span>
            <span className="gradient-text">Nasif</span>
            <br />
            <span className="text-gray-900 dark:text-white">Bin Borhan</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
            CSE Final Year Student
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap justify-center gap-3 mb-10">
            {['UI/UX Designer', 'Frontend Developer', 'React Specialist', 'Creative Thinker'].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium text-sm shadow-sm">
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="#projects" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-purple text-white font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 transition-all">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-4 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-semibold hover:border-primary-500 dark:hover:border-primary-400 hover:scale-105 transition-all">
              Get In Touch
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 hover:border-primary-500 hover:scale-110 transition-all shadow-sm" aria-label={social.label}>
                <social.icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary-500 transition-colors">
          <span className="text-sm font-medium">Scroll Down</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}