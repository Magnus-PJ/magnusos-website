'use client'

import { motion } from 'framer-motion'
import { 
  CpuChipIcon, 
  ExclamationTriangleIcon, 
  ChartBarIcon, 
  CogIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  BoltIcon,
  EyeIcon
} from '@heroicons/react/24/outline'

const aiFeatures = [
  {
    icon: ExclamationTriangleIcon,
    title: 'Smart Drug Interaction Detection',
    description: 'Using AI, MagnusOS can identify potential drug interactions and contraindications for immediate action.',
    details: [
      'Analyzes prescription combinations for conflicts',
      'Flags potential drug interactions immediately',
      'Alerts pharmacists for review',
      'Ensures patient safety in medication therapy'
    ],
    example: 'For example, AI can detect a potential interaction between a new prescription and existing medications.',
    color: 'error'
  },
  {
    icon: ChartBarIcon,
    title: 'Predictive Inventory Management',
    description: 'Machine learning models analyze historical data to predict medication demand and optimize stock levels.',
    details: [
      'Analyzes prescription patterns and seasonal trends',
      'Predicts medication demand in advance',
      'Auto-adjusts inventory levels automatically',
      'Optimizes reorder schedules based on predictions'
    ],
    example: 'If flu season shows increased demand for certain medications, the system can suggest stock increases.',
    color: 'primary'
  },
  {
    icon: CogIcon,
    title: 'Automation of Routine Tasks',
    description: 'AI automates tedious pharmacy tasks, freeing up staff for more important patient care activities.',
    details: [
      'Auto-populates prescription forms and labels',
      'Handles common patient queries via chatbots',
      'Automates refill reminders and notifications',
      'Processes insurance claims and billing'
    ],
    example: 'AI can auto-populate prescription labels or routine forms, and chatbots handle common patient queries.',
    color: 'success'
  },
  {
    icon: EyeIcon,
    title: 'Data Quality & Alerts',
    description: 'AI monitors pharmacy data for anomalies and provides intelligent alerts for immediate action.',
    details: [
      'Monitors prescription dosages for safety ranges',
      'Flags potential medication errors',
      'Identifies data entry anomalies',
      'Provides real-time quality assurance'
    ],
    example: 'AI monitors data entries for anomalies - e.g., alerting if a medication dose seems outside normal range.',
    color: 'warning'
  }
]

const useCase = {
  pharmacy: 'CityCare Pharmacy',
  results: [
    { metric: 'Prescription Processing Time', improvement: '50%', description: 'Faster prescription fulfillment' },
    { metric: 'Inventory Costs', improvement: '30%', description: 'Reduced waste and overstock' },
    { metric: 'Patient Engagement', improvement: 'Streamlined', description: 'Automated communication and reminders' }
  ],
  quote: 'We reduced prescription processing time by 50% and eliminated drug interaction errors with MagnusOS AI validation',
  author: 'Dr. Sarah Williams',
  role: 'Pharmacy Manager'
}

export default function PharmacyAIWorkflow() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            className="heading-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            AI-Powered Pharmacy Intelligence
          </motion.h2>
          <motion.p 
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MagnusOS doesn't just digitize existing pharmacy processes - it uses artificial intelligence to transform 
            how pharmacies operate, making workflows smarter, safer, and more efficient.
          </motion.p>
        </div>

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="card-hover group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${feature.color}-100 text-${feature.color}-600 group-hover:scale-110 transition-transform duration-200`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="heading-3 mb-3">{feature.title}</h3>
                  <p className="body-medium mb-4">{feature.description}</p>
                  <ul className="space-y-2 mb-4">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${feature.color}-500`}></div>
                        <span className="body-small text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700 italic">{feature.example}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real-World Use Case */}
        <motion.div 
          className="bg-gradient-to-r from-warning-50 to-primary-50 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="heading-3 mb-4">Real-World Impact at {useCase.pharmacy}</h3>
            <p className="body-large text-gray-600">
              See how AI-powered pharmacy management transformed operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {useCase.results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-success-600 mb-2">{result.improvement}</div>
                <div className="text-sm text-gray-600">{result.description}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <blockquote className="text-xl text-gray-700 italic mb-6">
              "{useCase.quote}"
            </blockquote>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-warning-400 to-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                {useCase.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{useCase.author}</div>
                <div className="text-sm text-gray-600">{useCase.role}, {useCase.pharmacy}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Benefits Summary */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="heading-3 mb-8">AI-Powered Pharmacy Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-success-600 mb-2">50%</div>
              <div className="text-sm text-gray-600">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">30%</div>
              <div className="text-sm text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-error-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Patient Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

