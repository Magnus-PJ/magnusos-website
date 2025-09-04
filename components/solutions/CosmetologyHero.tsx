'use client'

import { motion } from 'framer-motion'
import { SparklesIcon, HeartIcon, CameraIcon } from '@heroicons/react/24/outline'

export default function CosmetologyHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 mb-6">
            <SparklesIcon className="w-5 h-5 text-pink-600 mr-2" />
            <span className="text-sm font-medium text-pink-700">Beauty Meets Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-normal px-4 py-2">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Cosmetology & Aesthetics
            </span>
            <br />
            <span className="text-gray-800">Digital Clinic Experience</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Enhance beauty with technology. From consultation to follow-up, provide a high-touch, 
            personalized experience powered by MagnusOS AI-driven skin analysis and AR treatment planning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Request Demo
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-pink-600 rounded-xl font-semibold text-lg border-2 border-pink-200 hover:border-pink-300 transition-all duration-300"
          >
            See AI Skin Analysis
          </motion.button>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-pink-200/50 group hover:shadow-2xl hover:border-pink-300/70 transition-all duration-300 hover:scale-105">
            <div className="relative w-16 h-16 bg-gradient-to-br from-pink-500 via-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300 border-2 border-white/50">
              <CameraIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Skin Analysis</h3>
            <p className="text-gray-600">Quantify wrinkles, detect hyperpigmentation, and track improvements with AI-powered analysis</p>
            <div className="flex items-center justify-center mt-3 text-xs text-pink-600 font-medium">
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse mr-2"></div>
              <span>AI-Powered</span>
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-pink-200/50 group hover:shadow-2xl hover:border-pink-300/70 transition-all duration-300 hover:scale-105">
            <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <SparklesIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AR Treatment Planning</h3>
            <p className="text-gray-600">Show clients realistic previews of results using advanced AR visualization tools</p>
            <div className="flex items-center justify-center mt-3 text-xs text-purple-600 font-medium">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse mr-2"></div>
              <span>AR-Enhanced</span>
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-pink-200/50 group hover:shadow-2xl hover:border-pink-300/70 transition-all duration-300 hover:scale-105">
            <div className="relative w-16 h-16 bg-gradient-to-br from-pink-500 via-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300 border-2 border-white/50">
              <HeartIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Experience</h3>
            <p className="text-gray-600">Build trust through transparency with before/after photos and personalized care</p>
            <div className="flex items-center justify-center mt-3 text-xs text-pink-600 font-medium">
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse mr-2"></div>
              <span>Personalized</span>
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">30%</div>
            <div className="text-sm text-gray-600">Increase in Consultation Conversions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Client Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">40%</div>
            <div className="text-sm text-gray-600">Reduction in No-Shows</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">25%</div>
            <div className="text-sm text-gray-600">Increase in Treatment Packages</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-pink-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-pink-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
