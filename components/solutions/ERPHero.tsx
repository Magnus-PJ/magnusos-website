'use client'

import { motion } from 'framer-motion'
import { CogIcon, ChartBarIcon, CurrencyDollarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function ERPHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-50 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-neutral-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neutral-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 bg-neutral-100 text-neutral-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CogIcon className="w-4 h-4" />
            <span>ERP & Operations Solution</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-normal px-4 py-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AI-Powered
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-primary-600">
            Healthcare Operations
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transform your healthcare operations with intelligent automation, AI-powered resource management, 
          and comprehensive operational excellence. MagnusOS ERP delivers efficiency, cost optimization, 
          and strategic insights.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="btn-primary text-lg px-8 py-4">
            Schedule ERP Demo
          </button>
          <button className="btn-outline text-lg px-8 py-4">
            Download ERP Brochure
          </button>
        </motion.div>

        {/* Key Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-neutral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <CogIcon className="w-8 h-8 text-neutral-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Smart Operations</h3>
            <p className="text-sm text-gray-600">AI-driven process optimization</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <ChartBarIcon className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Resource Management</h3>
            <p className="text-sm text-gray-600">Intelligent allocation & planning</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-success-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <CurrencyDollarIcon className="w-8 h-8 text-success-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Financial Excellence</h3>
            <p className="text-sm text-gray-600">Cost optimization & analytics</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-error-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheckIcon className="w-8 h-8 text-error-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Compliance Ready</h3>
            <p className="text-sm text-gray-600">HIPAA, SOX, ISO certified</p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 bg-white rounded-2xl p-8 shadow-medium border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-neutral-600 mb-2">40%</div>
              <div className="text-sm text-gray-600">Operational Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">60%</div>
              <div className="text-sm text-gray-600">Faster Decision Making</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-success-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">System Monitoring</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-500">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
