'use client'

import { motion } from 'framer-motion'
import { 
  PlayIcon, 
  CalendarIcon, 
  UserGroupIcon, 
  CogIcon,
  ShieldCheckIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

const demoFeatures = [
  {
    icon: PlayIcon,
    title: 'Interactive Demo',
    description: 'Experience the full laboratory workflow from sample collection to result delivery',
    duration: '30 minutes'
  },
  {
    icon: CalendarIcon,
    title: 'Live Q&A Session',
    description: 'Get answers to your specific laboratory requirements and questions',
    duration: '15 minutes'
  },
  {
    icon: UserGroupIcon,
    title: 'Team Presentation',
    description: 'Perfect for laboratory directors, managers, and IT teams',
    duration: '45 minutes total'
  }
]

const demoHighlights = [
  'Sample tracking and management workflows',
  'AI-powered result validation and alerts',
  'Quality control automation',
  'Integration with laboratory equipment',
  'Real-time analytics and reporting',
  'Compliance and security features'
]

export default function LaboratoryDemo() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-healthcare-900 text-white">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            className="heading-2 mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Experience MagnusOS Laboratory
          </motion.h2>
          <motion.p 
            className="body-large max-w-3xl mx-auto text-primary-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            See how AI-powered laboratory management can transform your operations. 
            Schedule a personalized demo tailored to your laboratory's needs.
          </motion.p>
        </div>

        {/* Demo Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {demoFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-primary-100 mb-4">{feature.description}</p>
                <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-3 py-1">
                  <ClockIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">{feature.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Demo Highlights */}
        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">What You'll See in the Demo</h3>
            <p className="text-primary-100">
              Comprehensive overview of laboratory management capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoHighlights.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-300 rounded-full"></div>
                <span className="text-primary-100">{highlight}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Ready to See MagnusOS Laboratory in Action?</h3>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of laboratories that have already transformed their operations with MagnusOS
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-primary-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-all duration-200 flex items-center space-x-3 shadow-lg hover:shadow-xl">
              <span>Schedule Your Demo</span>
              <CalendarIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
            <button className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-200 flex items-center space-x-3">
              <PlayIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Watch Demo Video</span>
            </button>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-16 pt-12 border-t border-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center">
            <p className="text-primary-200 mb-6">Trusted by laboratory leaders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm">500+ Laboratories</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-sm">50+ Countries</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-sm">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
