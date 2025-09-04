'use client'

import { motion } from 'framer-motion'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'

export default function ResourcesDownloads() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-healthcare-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Download <span className="bg-gradient-to-r from-primary-600 to-healthcare-600 bg-clip-text text-transparent">Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive library of downloadable resources to support your healthcare technology initiatives.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100">
          <p className="text-center text-gray-600 mb-8">
            More downloadable resources coming soon. Contact us for specific resources or custom content.
          </p>
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-healthcare-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Request Custom Resources
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
