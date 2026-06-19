import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A modern analytics dashboard for e-commerce platforms with real-time data visualization, sales tracking, and inventory management.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    github: 'https://github.com/nasif-meta',
    demo: '#',
    featured: true,
  },
  {
    title: 'Social Media App',
    description: 'A responsive social platform with real-time messaging, post creation, and interactive feed with smooth animations.',
    tags: ['Next.js', 'Firebase', 'Framer Motion', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop',
    github: 'https://github.com/nasif-meta',
    demo: '#',
    featured: false,
  },
  {
    title: 'Portfolio Generator',
    description: 'A tool that helps developers create stunning portfolios in minutes with customizable themes and sections.',
    tags: ['React', 'Vite', 'TypeScript', 'Zustand'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    github: 'https://github.com/nasif-meta',
    demo: '#',
    featured: false,
  },
  {
    title: 'Weather App Design',
    description: 'A beautiful weather application with animated icons, location search, and 7-day forecast with stunning UI.',
    tags: ['React', 'OpenWeather API', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop',
    github: 'https://github.com/nasif-meta',
    demo: '#',
    featured: false,
  },
  {
    title: 'Task Management System',
    description: 'A collaborative task manager with drag-and-drop boards, team assignments, and progress tracking.',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
    github: 'https://github.com/nasif-meta',
    demo: '#',
    featured: false,
  },
  {
    title: 'Music Player UI',
    description: 'An immersive music player interface with waveform visualization, playlist management, and smooth transitions.',
    tags: ['React', 'Web Audio API', 'CSS Animations'],
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=500&fit=crop',
    github: 'https://github.com/nasif-meta',
    demo: '#',
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            A collection of projects that showcase my skills in design and development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="group">
              <div className="glass-card overflow-hidden hover-lift h-full flex flex-col">
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-purple text-white text-xs font-bold">Featured</div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <Github size={16} /> Code
                    </a>
                    <a href={project.demo} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent-purple text-white text-sm font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}