'use client'

import { motion } from 'framer-motion'
import { 
  CpuChipIcon, 
  ExclamationTriangleIcon, 
  ChartBarIcon, 
  CogIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  BoltIcon as LightningBoltIcon,
  EyeIcon
} from '@heroicons/react/24/outline'

const aiFeatures = [
  {
    icon: ExclamationTriangleIcon,
    title: 'Smart Triage & Workflows',
    description: 'Using AI, MagnusOS can prioritize critical patients and optimize emergency workflows for faster treatment.',
    details: [
      'Analyzes incoming ER patient symptoms via integrated triage app',
      'Flags possible stroke or heart attack cases immediately',
      'Alerts specialists for urgent cases',
      'Ensures faster treatment for those who need it most'
    ],
    example: 'For example, an incoming ER patient\'s symptoms can be analyzed to flag a possible stroke or heart attack, alerting specialists immediately.',
    color: 'error'
  },
  {
    icon: ChartBarIcon,
    title: 'Predictive Scheduling & Staffing',
    description: 'Machine learning models analyze historical data to predict patient volumes and optimize resource allocation.',
    details: [
      'Analyzes historical appointment data and seasonal trends',
      'Predicts patient volumes in advance',
      'Auto-adjusts staff rosters automatically',
      'Optimizes clinic schedules based on predictions'
    ],
    example: 'If Mondays after holidays show a surge in OPD visits, the system can suggest adding more slots or providers.',
    color: 'primary'
  },
  {
    icon: CogIcon,
    title: 'Automation of Routine Tasks',
    description: 'AI automates tedious administrative tasks, freeing up staff for more important patient care activities.',
    details: [
      'Auto-populates discharge summaries and consent forms',
      'Handles common patient queries via chatbots',
      'Automates inventory reorders and routine workflows',
      'Processes discharges and form filling automatically'
    ],
    example: 'AI can auto-populate discharge summaries or routine consent forms, and chatbots handle common patient queries online.',
    color: 'success'
  },
  {
    icon: EyeIcon,
    title: 'Data Quality & Alerts',
    description: 'AI monitors data entries for anomalies and provides intelligent alerts for immediate action.',
    details: [
      'Monitors medication doses for safety ranges',
      'Flags critical lab results immediately',
      'Identifies data entry anomalies',
      'Provides real-time quality assurance'
    ],
    example: 'AI monitors data entries for anomalies - e.g., alerting if a medication dose seems outside normal range, or if a lab result is critical.',
    color: 'warning'
  }
]

const useCase = {
  hospital: 'Beta Hospital',
  results: [
    { metric: 'ER Waiting Times', improvement: '30%', description: 'Reduction in emergency room waiting times' },
    { metric: 'Manual Errors', improvement: 'Significantly Fewer', description: 'Reduced manual errors in patient data' },
    { metric: 'Patient Flow', improvement: 'Streamlined', description: 'Automatic patient data flow through departments' }
  ],
  quote: 'We caught critical cases 50% faster with MagnusOS\'s AI triage',
  author: 'Dr. Sarah Johnson',
  role: 'ER Chief'
}

export default function HISAIEnhancements() {
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
            AI-Powered Enhancements in HIS
          </motion.h2>
          <motion.p 
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MagnusOS doesn't just digitize existing processes - it uses artificial intelligence to transform 
            how hospitals operate, making workflows smarter, safer, and more efficient.
          </motion.p>
        </div>

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
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
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${feature.color}-500`}></div>
                        <span className="body-small text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-primary-500">
                    <p className="text-sm text-gray-700 italic">"{feature.example}"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real-World Use Case */}
        <motion.div 
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-medium border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
              <LightningBoltIcon className="w-4 h-4" />
              <span>Real-World Success Story</span>
            </div>
            <h3 className="heading-3 mb-4">Case Study: {useCase.hospital}'s Digital Transformation</h3>
            <p className="body-large text-gray-600">
              See how MagnusOS's AI-powered HIS transformed operations at a leading healthcare facility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {useCase.results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{result.improvement}</div>
                <div className="font-semibold text-gray-900 mb-1">{result.metric}</div>
                <div className="text-sm text-gray-600">{result.description}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <blockquote className="text-xl text-gray-700 italic mb-6 max-w-3xl mx-auto">
              "{useCase.quote}"
            </blockquote>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-healthcare-500 rounded-full flex items-center justify-center text-white font-semibold">
                {useCase.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{useCase.author}</div>
                <div className="text-sm text-primary-600">{useCase.role}</div>
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
          <h3 className="heading-3 mb-8">AI Makes the Difference</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <CpuChipIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Intelligent</h4>
              <p className="text-sm text-gray-600">AI-powered decision support</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-healthcare-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <UserGroupIcon className="w-8 h-8 text-healthcare-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Efficient</h4>
              <p className="text-sm text-gray-600">Streamlined workflows</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <ShieldCheckIcon className="w-8 h-8 text-success-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Safe</h4>
              <p className="text-sm text-gray-600">Enhanced patient safety</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <ChartBarIcon className="w-8 h-8 text-warning-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Insightful</h4>
              <p className="text-sm text-gray-600">Predictive analytics</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
