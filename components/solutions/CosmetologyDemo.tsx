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
    title: 'AI Skin Analysis Demo',
    description: 'See how our AI analyzes skin photos and provides objective measurements'
  },
  {
    icon: SparklesIcon,
    title: 'AR Treatment Visualization',
    description: 'Experience realistic outcome simulations for various aesthetic procedures'
  },
  {
    icon: CalendarIcon,
    title: 'Practice Management',
    description: 'Explore appointment scheduling, client profiles, and treatment planning'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Client Communication',
    description: 'See how automated follow-ups and loyalty programs work'
  }
]

const demoHighlights = [
  'Live AI skin analysis demonstration',
  'Interactive AR treatment previews',
  'Complete practice management workflow',
  'Client portal and communication tools',
  'Product sales and inventory management',
  'Before/after photo comparison tools'
]

export default function CosmetologyDemo() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Experience <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">MagnusOS</span> in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how MagnusOS can transform your aesthetic practice. Schedule a personalized demo and discover 
            the power of AI-driven beauty technology for your clinic.
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
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100">
              <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <PlayIcon className="w-8 h-8 text-white ml-1" />
                </motion.button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Watch MagnusOS in Action
              </h3>
              <p className="text-gray-600 mb-6">
                See how our AI-powered platform transforms aesthetic practices with intelligent skin analysis, 
                AR treatment planning, and comprehensive practice management tools.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {demoFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
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
            className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Schedule Your Personalized Demo
            </h3>
            <p className="text-gray-600 mb-8">
              Get a customized demonstration of MagnusOS tailored to your aesthetic practice needs. 
              Our experts will show you exactly how our platform can benefit your clinic.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Practice Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Enter your practice name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Practice Size</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                  <option>Select practice size</option>
                  <option>Solo practitioner</option>
                  <option>2-5 providers</option>
                  <option>6-15 providers</option>
                  <option>15+ providers</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
          <p className="text-gray-600 mb-8">Trusted by leading aesthetic practices worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">BeautyPlus</div>
            <div className="text-2xl font-bold text-gray-400">Elite Dermatology</div>
            <div className="text-2xl font-bold text-gray-400">Radiant Skin</div>
            <div className="text-2xl font-bold text-gray-400">Aesthetic Center</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

