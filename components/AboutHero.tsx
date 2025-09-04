'use client'

import { motion } from 'framer-motion'
import { SparklesIcon, CpuChipIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-healthcare-50 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-healthcare-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-healthcare-100 border border-primary-200 mb-6">
            <SparklesIcon className="w-5 h-5 text-primary-600 mr-2" />
            <span className="text-sm font-medium text-primary-700">About MagnusOS.ai</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-primary-600 via-healthcare-600 to-primary-600 bg-clip-text text-transparent">
              Transforming Healthcare
            </span>
            <br />
            <span className="text-gray-800">Through AI Innovation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            MagnusOS.ai is pioneering the future of healthcare with AI-first technology solutions 
            that unify hospital operations, enhance patient care, and drive digital transformation 
            across the healthcare ecosystem.
          </p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary-100">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-healthcare-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <CpuChipIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Solutions</h3>
            <p className="text-gray-600">Advanced AI technology integrated into every healthcare workflow</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary-100">
            <div className="w-12 h-12 bg-gradient-to-r from-healthcare-500 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <HeartIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Patient-Centric Design</h3>
            <p className="text-gray-600">Every solution designed with patient outcomes as the primary focus</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary-100">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-healthcare-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <SparklesIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation Leadership</h3>
            <p className="text-gray-600">Leading the digital transformation of healthcare worldwide</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
