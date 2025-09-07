'use client'

import { motion } from 'framer-motion'
import { ChevronDownIcon, PlayIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-healthcare-50 pt-16 sm:pt-20">
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-healthcare-200 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
      </div>

      {/* Content - Mobile First */}
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 sm:space-y-12"
        >
          {/* Main Tagline - Mobile Optimized */}
          <div className="space-y-6 sm:space-y-8">
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-loose px-8 py-6 overflow-visible whitespace-normal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block bg-gradient-to-r from-primary-600 via-healthcare-600 to-primary-700 bg-clip-text text-transparent leading-normal">
                MagnusOS
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700 mt-2 sm:mt-4">
                The AI-First Digital Health Ecosystem
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transforming hospitals and clinics with intelligent, integrated care. 
              Unify your healthcare operations with AI-powered automation and seamless interoperability.
            </motion.p>
          </div>

          {/* CTA Buttons - Mobile Optimized */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              className="w-full sm:w-auto bg-gradient-to-r from-primary-600 to-healthcare-700 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl shadow-xl hover:shadow-2xl transition-all duration-300 group flex items-center justify-center space-x-3 hover:scale-105"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Solutions</span>
              <ArrowRightIcon className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button 
              className="w-full sm:w-auto border-2 border-primary-600 text-primary-600 bg-white/80 backdrop-blur-sm px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl hover:bg-primary-600 hover:text-white transition-all duration-300 group flex items-center justify-center space-x-3 hover:scale-105"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get in Touch</span>
              <PlayIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Stats - Mobile Optimized Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto pt-12 sm:pt-16 lg:pt-20 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div 
              className="text-center group p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:bg-white/80 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-600 mb-3 group-hover:scale-110 transition-transform duration-300">30%</div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">Reduction in Admin Overhead</div>
            </motion.div>
            
            <motion.div 
              className="text-center group p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:bg-white/80 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-healthcare-600 mb-3 group-hover:scale-110 transition-transform duration-300">50%</div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">Faster Critical Case Detection</div>
            </motion.div>
            
            <motion.div 
              className="text-center group p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:bg-white/80 hover:shadow-lg transition-all duration-300 sm:col-span-2 lg:col-span-1"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-success-600 mb-3 group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">Uptime with Hybrid Cloud</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Mobile Optimized */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <span className="text-xs sm:text-sm font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            <ChevronDownIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
          </motion.div>
        </div>
      </motion.div>

      {/* Optimized Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-16 left-4 sm:top-20 sm:left-10 w-2 h-2 sm:w-4 sm:h-4 bg-primary-400 rounded-full"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-32 right-4 sm:top-40 sm:right-20 w-2 h-2 sm:w-3 sm:h-3 bg-healthcare-400 rounded-full"
          animate={{ 
            y: [0, 8, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-4 sm:bottom-40 sm:left-20 w-2 h-2 sm:w-2 sm:h-2 bg-success-400 rounded-full"
          animate={{ 
            y: [0, -6, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
    </section>
  )
}
