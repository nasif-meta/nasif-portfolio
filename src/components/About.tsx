import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Palette, Code2, Lightbulb } from 'lucide-react'

const highlights = [
  { icon: GraduationCap, title: 'CSE Student', description: 'Final year Computer Science & Engineering student with strong academic foundation in algorithms, data structures, and software engineering.', color: 'from-primary-500 to-primary-600' },
  { icon: Palette, title: 'UI/UX Designer', description: 'Passionate about creating intuitive, beautiful interfaces. Experienced in Figma, Adobe XD, and design systems that scale.', color: 'from-accent-purple to-accent-pink' },
  { icon: Code2, title: 'Frontend Developer', description: 'Specialized in React ecosystem with TypeScript. Building performant, accessible, and responsive web applications.', color: 'from-accent-teal to-primary-500' },
  { icon: Lightbulb, title: 'Problem Solver', description: 'Love tackling complex challenges with creative solutions. Always learning new technologies and best practices.', color: 'from-accent-orange to-accent-pink' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            A passionate developer and designer who believes great software is born at the intersection of beautiful design and clean code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <div className="glass-card p-8 h-full hover-lift group">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '15+', label: 'Projects Completed' },
            { number: '3+', label: 'Years Experience' },
            { number: '50+', label: 'Designs Created' },
            { number: '100%', label: 'Commitment' },
          ].map((stat) => (
            <div key={stat.label} className="text-center glass-card p-6">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}