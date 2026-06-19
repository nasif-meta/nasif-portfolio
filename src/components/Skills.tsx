import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95, color: 'bg-primary-500' },
      { name: 'TypeScript', level: 90, color: 'bg-primary-600' },
      { name: 'Next.js', level: 85, color: 'bg-primary-400' },
      { name: 'Tailwind CSS', level: 95, color: 'bg-accent-teal' },
      { name: 'JavaScript (ES6+)', level: 92, color: 'bg-accent-orange' },
    ],
  },
  {
    title: 'Design',
    skills: [
      { name: 'Figma', level: 90, color: 'bg-accent-purple' },
      { name: 'Adobe XD', level: 80, color: 'bg-accent-pink' },
      { name: 'UI Design', level: 92, color: 'bg-primary-500' },
      { name: 'UX Research', level: 85, color: 'bg-accent-teal' },
      { name: 'Prototyping', level: 88, color: 'bg-accent-orange' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub', level: 88, color: 'bg-gray-600' },
      { name: 'Vite / Webpack', level: 82, color: 'bg-primary-500' },
      { name: 'REST APIs', level: 90, color: 'bg-accent-teal' },
      { name: 'Responsive Design', level: 95, color: 'bg-accent-purple' },
      { name: 'Performance Optimization', level: 80, color: 'bg-accent-pink' },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 bg-gray-100/50 dark:bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">My Skills</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            A blend of design thinking and technical skills to build products that users love.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div key={category.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: catIndex * 0.15 }} className="glass-card p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={isInView ? { width: `${skill.level}%` } : {}} transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }} className={`h-full ${skill.color} rounded-full`} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}