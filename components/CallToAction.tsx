'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline'

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-healthcare-900 text-white relative overflow-hidden">
      {/* AI Circuit Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="cta-circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,10 L20,10 M10,0 L10,20" stroke="currentColor" strokeWidth="0.5" fill="none"/>
              <circle cx="10" cy="10" r="1" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#cta-circuit)"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main CTA Content */}
          <div className="space-y-6">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to Transform
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-healthcare-200">
                Healthcare with AI?
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl max-w-4xl mx-auto text-primary-100 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join leading healthcare organizations worldwide that have already embraced the future with MagnusOS. 
              Experience the power of AI-first, unified healthcare operations.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="group bg-white text-primary-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-all duration-200 flex items-center space-x-3 shadow-xl hover:shadow-2xl border-2 border-white/20 hover:border-primary-200 hover:scale-105">
              <span>Schedule a Demo</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-white/80 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-200 flex items-center space-x-3 backdrop-blur-sm hover:scale-105 shadow-lg hover:shadow-xl">
              <PlayIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Watch Demo Video</span>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="pt-12 border-t border-primary-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-primary-200 mb-6">Trusted by healthcare leaders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm">500+ Healthcare Organizations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-sm">50+ Countries Served</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-sm">99.9% Uptime Reliability</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span className="text-sm">1M+ Patients Served</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact */}
          <motion.div 
            className="pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <p className="text-primary-200 mb-4">Need immediate assistance?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-primary-100">
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>contact@magnusos.ai</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🌍</span>
                <span>Kerala, India | Dubai, UAE</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
