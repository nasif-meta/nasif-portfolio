import { Heart, Code2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center text-white">
              <Code2 size={16} />
            </div>
            <span className="font-bold text-gray-900 dark:text-white">
              Nasif<span className="text-primary-500">.dev</span>
            </span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> by Nasif Bin Borhan
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}