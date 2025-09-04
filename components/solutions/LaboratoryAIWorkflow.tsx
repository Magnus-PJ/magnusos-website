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
    title: 'Smart Result Validation',
    description: 'Using AI, MagnusOS can identify critical values and anomalies in laboratory results for immediate action.',
    details: [
      'Analyzes test results for critical values',
      'Flags abnormal results immediately',
      'Alerts clinicians for urgent cases',
      'Ensures faster response to critical findings'
    ],
    example: 'For example, AI can detect a critically high potassium level and immediately alert the ordering physician.',
    color: 'error'
  },
  {
    icon: ChartBarIcon,
    title: 'Predictive Quality Control',
    description: 'Machine learning models analyze historical QC data to predict equipment failures and optimize maintenance schedules.',
    details: [
      'Analyzes historical QC performance data',
      'Predicts equipment maintenance needs',
      'Auto-adjusts QC schedules automatically',
      'Optimizes reagent usage based on trends'
    ],
    example: 'If QC trends show declining performance, the system can suggest recalibration or maintenance.',
    color: 'primary'
  },
  {
    icon: CogIcon,
    title: 'Automation of Routine Tasks',
    description: 'AI automates tedious laboratory tasks, freeing up technicians for more important analytical work.',
    details: [
      'Auto-populates result reports and QC forms',
      'Handles common result queries via chatbots',
      'Automates inventory reorders and workflows',
      'Processes routine QC and result validation'
    ],
    example: 'AI can auto-populate result reports or routine QC forms, and chatbots handle common result queries.',
    color: 'success'
  },
  {
    icon: EyeIcon,
    title: 'Data Quality & Alerts',
    description: 'AI monitors laboratory data for anomalies and provides intelligent alerts for immediate action.',
    details: [
      'Monitors result values for safety ranges',
      'Flags critical results immediately',
      'Identifies data entry anomalies',
      'Provides real-time quality assurance'
    ],
    example: 'AI monitors data entries for anomalies - e.g., alerting if a result value seems outside normal range.',
    color: 'warning'
  }
]

const useCase = {
  laboratory: 'CityCare Laboratory',
  results: [
    { metric: 'Result Turnaround Time', improvement: '60%', description: 'Faster result delivery to clinicians' },
    { metric: 'Critical Value Alerts', improvement: '90%', description: 'Faster critical value notifications' },
    { metric: 'Quality Control', improvement: 'Streamlined', description: 'Automated QC processes and monitoring' }
  ],
  quote: 'We reduced critical value alert time from 2 hours to 5 minutes with MagnusOS AI validation',
  author: 'Dr. Lisa Chen',
  role: 'Laboratory Director'
}

export default function LaboratoryAIWorkflow() {
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
            AI-Powered Laboratory Intelligence
          </motion.h2>
          <motion.p 
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MagnusOS doesn't just digitize existing laboratory processes - it uses artificial intelligence to transform 
            how laboratories operate, making workflows smarter, safer, and more efficient.
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
          className="bg-gradient-to-r from-success-50 to-primary-50 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="heading-3 mb-4">Real-World Impact at {useCase.laboratory}</h3>
            <p className="body-large text-gray-600">
              See how AI-powered laboratory management transformed operations
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
              <div className="w-12 h-12 bg-gradient-to-br from-success-400 to-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                {useCase.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{useCase.author}</div>
                <div className="text-sm text-gray-600">{useCase.role}, {useCase.laboratory}</div>
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
          <h3 className="heading-3 mb-8">AI-Powered Laboratory Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-success-600 mb-2">60%</div>
              <div className="text-sm text-gray-600">Faster Turnaround</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">90%</div>
              <div className="text-sm text-gray-600">Faster Critical Alerts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Result Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-error-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Quality Monitoring</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
