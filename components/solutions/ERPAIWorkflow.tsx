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
    title: 'Predictive Resource Optimization',
    description: 'Using AI, MagnusOS can predict resource needs and optimize allocation for maximum efficiency.',
    details: [
      'Analyzes historical usage patterns',
      'Predicts future resource demands',
      'Optimizes allocation automatically',
      'Reduces waste and improves efficiency'
    ],
    example: 'For example, AI can predict patient volume spikes and automatically adjust staff scheduling.',
    color: 'error'
  },
  {
    icon: ChartBarIcon,
    title: 'Intelligent Process Automation',
    description: 'Machine learning models analyze operational data to automate routine processes and workflows.',
    details: [
      'Analyzes process performance data',
      'Identifies automation opportunities',
      'Auto-optimizes workflows',
      'Reduces manual intervention'
    ],
    example: 'If certain processes show bottlenecks, the system can suggest and implement optimizations.',
    color: 'primary'
  },
  {
    icon: CogIcon,
    title: 'Smart Decision Support',
    description: 'AI provides intelligent insights and recommendations for strategic decision making.',
    details: [
      'Real-time operational insights',
      'Predictive trend analysis',
      'Automated reporting',
      'Strategic recommendations'
    ],
    example: 'AI can provide real-time insights on operational efficiency and suggest improvements.',
    color: 'success'
  },
  {
    icon: EyeIcon,
    title: 'Anomaly Detection & Alerts',
    description: 'AI monitors operational data for anomalies and provides intelligent alerts for immediate action.',
    details: [
      'Monitors key performance indicators',
      'Detects operational anomalies',
      'Provides intelligent alerts',
      'Suggests corrective actions'
    ],
    example: 'AI monitors operational metrics and alerts managers to unusual patterns or issues.',
    color: 'warning'
  }
]

const useCase = {
  hospital: 'CityCare Medical Center',
  results: [
    { metric: 'Operational Costs', improvement: '40%', description: 'Reduced operational expenses' },
    { metric: 'Decision Making', improvement: '60%', description: 'Faster strategic decisions' },
    { metric: 'Resource Utilization', improvement: 'Streamlined', description: 'Optimized resource allocation' }
  ],
  quote: 'We reduced operational costs by 40% and improved decision-making speed by 60% with MagnusOS AI-powered ERP',
  author: 'Dr. Michael Chen',
  role: 'Chief Operations Officer'
}

export default function ERPAIWorkflow() {
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
            AI-Powered Operational Intelligence
          </motion.h2>
          <motion.p 
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MagnusOS doesn't just digitize existing healthcare operations - it uses artificial intelligence to transform 
            how healthcare organizations operate, making processes smarter, more efficient, and strategically optimized.
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
          className="bg-gradient-to-r from-neutral-50 to-primary-50 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="heading-3 mb-4">Real-World Impact at {useCase.hospital}</h3>
            <p className="body-large text-gray-600">
              See how AI-powered ERP transformed operations
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
              <div className="w-12 h-12 bg-gradient-to-br from-neutral-400 to-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                {useCase.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{useCase.author}</div>
                <div className="text-sm text-gray-600">{useCase.role}, {useCase.hospital}</div>
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
          <h3 className="heading-3 mb-8">AI-Powered ERP Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-success-600 mb-2">40%</div>
              <div className="text-sm text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">60%</div>
              <div className="text-sm text-gray-600">Faster Decisions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-error-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">AI Monitoring</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
