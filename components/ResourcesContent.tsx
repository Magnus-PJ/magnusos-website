'use client'

import { motion } from 'framer-motion'
import { ArrowDownTrayIcon, EyeIcon, CalendarIcon } from '@heroicons/react/24/outline'

const resources = [
  {
    title: 'AI in Healthcare: A Comprehensive Guide',
    description: 'Learn how artificial intelligence is transforming healthcare delivery and patient outcomes.',
    type: 'Whitepaper',
    downloads: '2.5K',
    date: '2024-01-15'
  },
  {
    title: 'Digital Hospital Transformation Case Study',
    description: 'Discover how City General Hospital achieved 40% efficiency gains with MagnusOS.',
    type: 'Case Study',
    downloads: '1.8K',
    date: '2024-01-10'
  },
  {
    title: 'Healthcare Data Security Best Practices',
    description: 'Essential guidelines for protecting patient data in the digital age.',
    type: 'Guide',
    downloads: '3.2K',
    date: '2024-01-05'
  },
  {
    title: 'ROI Calculator for Hospital Management Systems',
    description: 'Calculate the return on investment for implementing digital hospital solutions.',
    type: 'Tool',
    downloads: '1.5K',
    date: '2024-01-01'
  }
]

export default function ResourcesContent() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-primary-600 to-healthcare-600 bg-clip-text text-transparent">Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our most popular resources, carefully curated to help you succeed in your healthcare technology journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary-50 to-healthcare-50 rounded-2xl p-6 border border-primary-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  {resource.type}
                </span>
                <div className="flex items-center space-x-2 text-gray-500">
                  <EyeIcon className="w-4 h-4" />
                  <span className="text-sm">{resource.downloads}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-gray-500">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="text-sm">{resource.date}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-healthcare-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <ArrowDownTrayIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">Download</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
