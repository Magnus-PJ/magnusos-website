'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline'

export default function CallToAction() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-healthcare-900 text-white">
      <div className="container-padding max-w-7xl mx-auto text-center">
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
            <button className="group bg-white text-primary-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-all duration-200 flex items-center space-x-3 shadow-lg hover:shadow-xl">
              <span>Schedule a Demo</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-200 flex items-center space-x-3">
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
