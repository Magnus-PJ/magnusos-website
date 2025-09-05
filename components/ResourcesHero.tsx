'use client'

import { motion } from 'framer-motion'
import { DocumentTextIcon, BookOpenIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

export default function ResourcesHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-healthcare-50 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-healthcare-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-healthcare-100 border border-primary-200 mb-6">
            <DocumentTextIcon className="w-5 h-5 text-primary-600 mr-2" />
            <span className="text-sm font-medium text-primary-700">Healthcare Resources</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-primary-600 via-healthcare-600 to-primary-600 bg-clip-text text-transparent">
              Knowledge Hub
            </span>
            <br />
            <span className="text-gray-800">for Healthcare Innovation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Access comprehensive resources, guides, and insights to help you navigate the digital 
            transformation of healthcare and leverage AI-powered solutions for better patient outcomes.
          </p>
        </motion.div>

        {/* Resource Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary-100">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-healthcare-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <DocumentTextIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Whitepapers & Guides</h3>
            <p className="text-gray-600">In-depth analysis and best practices for healthcare technology implementation</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary-100">
            <div className="w-12 h-12 bg-gradient-to-r from-healthcare-500 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BookOpenIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Case Studies</h3>
            <p className="text-gray-600">Real-world success stories from healthcare organizations using MagnusOS</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary-100">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-healthcare-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <AcademicCapIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Webinars & Training</h3>
            <p className="text-gray-600">Educational content and training resources for healthcare professionals</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

