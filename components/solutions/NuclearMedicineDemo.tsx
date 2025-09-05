'use client'

import { motion } from 'framer-motion'
import { 
  PlayIcon, 
  CalendarIcon, 
  ChatBubbleLeftRightIcon,
  EyeIcon,
  SparklesIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const demoFeatures = [
  {
    icon: EyeIcon,
    title: 'AI Image Analysis Demo',
    description: 'See how our AI analyzes PET/CT images and detects lesions'
  },
  {
    icon: SparklesIcon,
    title: 'Dose Optimization',
    description: 'Explore AI-powered radiopharmaceutical dosing'
  },
  {
    icon: CalendarIcon,
    title: 'Workflow Management',
    description: 'Experience optimized scheduling and patient flow'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Quality Assurance',
    description: 'See automated quality control and reporting'
  }
]

const demoHighlights = [
  'Live AI PET/CT image analysis demonstration',
  'Interactive dose optimization tools',
  'Complete nuclear medicine workflow',
  'Quality assurance and compliance features',
  'Automated reporting and analysis',
  'Integration with existing systems'
]

export default function NuclearMedicineDemo() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Experience <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">MagnusOS</span> in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how MagnusOS can transform your nuclear medicine department. Schedule a personalized demo and discover 
            the power of AI-driven nuclear medicine technology for your facility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <PlayIcon className="w-8 h-8 text-white ml-1" />
                </motion.button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Watch MagnusOS in Action
              </h3>
              <p className="text-gray-600 mb-6">
                See how our AI-powered platform transforms nuclear medicine departments with intelligent image analysis, 
                dose optimization, and comprehensive workflow management tools.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {demoFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{feature.title}</div>
                      <div className="text-xs text-gray-600">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Demo Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-green-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Schedule Your Personalized Demo
            </h3>
            <p className="text-gray-600 mb-8">
              Get a customized demonstration of MagnusOS tailored to your nuclear medicine department needs. 
              Our experts will show you exactly how our platform can benefit your facility.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Facility Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your facility name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department Size</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>Select department size</option>
                  <option>Solo practitioner</option>
                  <option>2-5 staff members</option>
                  <option>6-15 staff members</option>
                  <option>15+ staff members</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule My Demo
              </motion.button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Demo Highlights</h4>
              <div className="space-y-2">
                {demoHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-8">Trusted by leading nuclear medicine departments worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Advanced Medical</div>
            <div className="text-2xl font-bold text-gray-400">Nuclear Institute</div>
            <div className="text-2xl font-bold text-gray-400">Regional Center</div>
            <div className="text-2xl font-bold text-gray-400">Nuclear Medicine</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

