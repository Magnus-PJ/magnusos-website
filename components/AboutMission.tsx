'use client'

import { motion } from 'framer-motion'
import { TargetIcon, LightBulbIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export default function AboutMission() {
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
            Our <span className="bg-gradient-to-r from-primary-600 to-healthcare-600 bg-clip-text text-transparent">Mission</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To revolutionize healthcare delivery through AI-powered technology that enhances patient outcomes, 
            streamlines operations, and empowers healthcare professionals worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-healthcare-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TargetIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              A world where AI-powered healthcare technology seamlessly connects every aspect of patient care, 
              enabling healthcare providers to deliver exceptional outcomes with unprecedented efficiency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-healthcare-500 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <LightBulbIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To develop and deploy AI-first healthcare solutions that transform how hospitals operate, 
              how patients receive care, and how healthcare professionals make critical decisions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-healthcare-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <GlobeAltIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Impact</h3>
            <p className="text-gray-600">
              Empowering healthcare organizations globally to achieve digital transformation, 
              improve patient outcomes, and create sustainable, efficient healthcare systems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
