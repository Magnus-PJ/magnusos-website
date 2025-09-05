'use client'

import { motion } from 'framer-motion'
import { MapPinIcon } from '@heroicons/react/24/outline'

export default function ContactMap() {
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
            Find Us on the <span className="bg-gradient-to-r from-primary-600 to-healthcare-600 bg-clip-text text-transparent">Map</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit our headquarters in San Francisco or connect with us virtually from anywhere in the world.
          </p>
        </motion.div>

        <div className="bg-gradient-to-br from-primary-50 to-healthcare-50 rounded-2xl p-8 shadow-lg border border-primary-100">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <MapPinIcon className="w-6 h-6 text-primary-600" />
            <span className="text-lg font-semibold text-gray-900">MagnusOS.ai Headquarters</span>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <p className="text-center text-gray-600 mb-6">
              Interactive map coming soon. For now, you can find us at:
            </p>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">123 Healthcare Innovation Drive</p>
              <p className="text-gray-600 mb-4">San Francisco, CA 94105, United States</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-healthcare-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Directions
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

