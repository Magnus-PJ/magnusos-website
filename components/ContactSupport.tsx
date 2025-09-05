'use client'

import { motion } from 'framer-motion'
import { ChatBubbleLeftRightIcon, PhoneIcon, EnvelopeIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

const supportOptions = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Live Chat Support',
    description: 'Get instant help from our support team',
    availability: '24/7 Available',
    action: 'Start Chat'
  },
  {
    icon: PhoneIcon,
    title: 'Phone Support',
    description: 'Speak directly with our technical experts',
    availability: 'Mon-Fri 9AM-6PM PST',
    action: 'Call Now'
  },
  {
    icon: EnvelopeIcon,
    title: 'Email Support',
    description: 'Send us detailed questions and get comprehensive answers',
    availability: 'Response within 24 hours',
    action: 'Send Email'
  },
  {
    icon: QuestionMarkCircleIcon,
    title: 'Knowledge Base',
    description: 'Browse our comprehensive help documentation',
    availability: 'Always Available',
    action: 'Browse Help'
  }
]

export default function ContactSupport() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-healthcare-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get <span className="bg-gradient-to-r from-primary-600 to-healthcare-600 bg-clip-text text-transparent">Support</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated support team is here to help you succeed with MagnusOS.ai solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {supportOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-healthcare-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <option.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-3">{option.description}</p>
                  <p className="text-sm text-primary-600 font-medium mb-4">{option.availability}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary-500 to-healthcare-500 text-white rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {option.action}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

