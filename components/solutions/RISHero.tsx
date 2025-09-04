'use client'

import { motion } from 'framer-motion'
import { 
  CameraIcon, 
  CpuChipIcon, 
  CloudIcon, 
  ShieldCheckIcon,
  ArrowRightIcon,
  PlayIcon,
  ChartBarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export default function RISHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-healthcare-50 via-white to-primary-50">
        <div className="absolute inset-0 bg-gradient-to-r from-healthcare-100/20 to-primary-100/20"></div>
        <div className="absolute inset-0 bg-[url('/images/radiology-bg.jpg')] bg-cover bg-center opacity-10"></div>
        
        {/* Subtle Decorative Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-healthcare-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-healthcare-100/20 to-primary-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-padding max-w-7xl mx-auto text-center text-gray-900">
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
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm"
          >
            <CameraIcon className="w-4 h-4" />
            <span>Radiology Information System</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-normal px-4 py-2"
          >
            AI-Powered
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-healthcare-200 to-primary-200">
              Radiology Platform
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto text-primary-100 leading-relaxed"
          >
            Transform radiology workflows with intelligent automation, AI-assisted diagnostics, 
            and seamless PACS integration. MagnusOS RIS delivers faster, more accurate imaging results.
          </motion.p>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <CpuChipIcon className="w-6 h-6 text-healthcare-200" />
              <span className="text-sm font-medium">AI Diagnostic Assistance</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <CloudIcon className="w-6 h-6 text-primary-200" />
              <span className="text-sm font-medium">Cloud-Native PACS</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <ShieldCheckIcon className="w-6 h-6 text-success-200" />
              <span className="text-sm font-medium">HIPAA Compliant</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="group bg-healthcare-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-healthcare-600 transition-all duration-200 flex items-center space-x-3 shadow-lg hover:shadow-xl">
              <span>Request RIS Demo</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-healthcare-500 text-healthcare-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-healthcare-500 hover:text-white transition-all duration-200 flex items-center space-x-3">
              <PlayIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="pt-12"
          >
            <p className="text-primary-200 mb-6">Trusted by leading radiology departments worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm">200+ Radiology Centers</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-sm">30+ Countries</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-sm">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span className="text-sm">500K+ Studies</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 left-10 hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2">40%</div>
            <div className="text-sm text-primary-200">Faster Report Turnaround</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.0 }}
        className="absolute top-20 right-10 hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2">25%</div>
            <div className="text-sm text-primary-200">Reduction in Reading Errors</div>
          </div>
        </div>
      </motion.div>

      {/* AI Visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden xl:block"
      >
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-to-r from-healthcare-400 to-primary-400 rounded-full flex items-center justify-center opacity-20 animate-pulse">
            <CameraIcon className="w-16 h-16 text-white" />
          </div>
          <div className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-primary-400 to-healthcare-400 rounded-full opacity-20 animate-ping"></div>
        </div>
      </motion.div>
    </section>
  )
}
