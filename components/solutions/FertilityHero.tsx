'use client'

import { motion } from 'framer-motion'
import { HeartIcon, SparklesIcon, BeakerIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export default function FertilityHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-br from-pink-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-padding max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 rounded-full px-6 py-3 text-pink-800 font-medium"
          >
            <SparklesIcon className="w-5 h-5 text-pink-600" />
            <span>AI-Powered Fertility Management</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="heading-1 max-w-5xl mx-auto"
          >
            Transform Your Fertility Clinic with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
              AI-Powered IVF Management
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="body-large max-w-3xl mx-auto text-gray-600"
          >
            MagnusOS Fertility brings cutting-edge AI technology to reproductive medicine. 
            Streamline IVF cycles, enhance embryo grading accuracy, and provide personalized 
            care with our comprehensive fertility clinic platform.
          </motion.p>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 text-gray-700">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <HeartIcon className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium">AI Embryo Grading</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-700">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <BeakerIcon className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium">IVF Cycle Management</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-700">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full flex items-center justify-center">
                <UserGroupIcon className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium">Patient Journey Tracking</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="btn-primary bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
              Schedule Fertility Demo
            </button>
            <button className="btn-outline border-pink-600 text-pink-600 hover:bg-pink-50">
              Download Fertility Brochure
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="pt-8"
          >
            <p className="text-sm text-gray-500 mb-4">Trusted by leading fertility clinics worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium">FDA Registered</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-medium">ISO 27001</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span className="text-sm font-medium">ASRM Guidelines</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
