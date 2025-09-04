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
  EyeIcon,
  HeartIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'

const aiFeatures = [
  {
    icon: CpuChipIcon,
    title: 'AI Embryo Assessment',
    description: 'Advanced computer vision algorithms analyze embryo morphology and development patterns.',
    benefits: ['Real-time grading', 'Predictive success scoring', 'Quality consistency', 'Reduced subjectivity'],
    color: 'pink'
  },
  {
    icon: ChartBarIcon,
    title: 'Predictive Analytics',
    description: 'Machine learning models predict treatment outcomes based on patient and cycle data.',
    benefits: ['Success rate prediction', 'Personalized protocols', 'Risk assessment', 'Optimization recommendations'],
    color: 'purple'
  },
  {
    icon: CogIcon,
    title: 'Smart Protocol Optimization',
    description: 'AI-driven treatment protocol adjustments based on real-time patient response data.',
    benefits: ['Dynamic dosing', 'Response monitoring', 'Protocol adaptation', 'Outcome optimization'],
    color: 'blue'
  },
  {
    icon: UserGroupIcon,
    title: 'Patient Journey Intelligence',
    description: 'Intelligent tracking and insights throughout the fertility treatment process.',
    benefits: ['Progress monitoring', 'Milestone tracking', 'Communication automation', 'Support recommendations'],
    color: 'green'
  }
]

const useCase = {
  title: 'AI-Powered Embryo Selection Success Story',
  description: 'A leading fertility clinic implemented MagnusOS AI embryo grading and saw remarkable improvements in their IVF success rates.',
  before: {
    title: 'Before MagnusOS',
    metrics: [
      'Manual embryo grading (subjective)',
      'Success rate: 32%',
      'Cycle time: 6-8 weeks',
      'Embryologist workload: High'
    ]
  },
  after: {
    title: 'After MagnusOS AI',
    metrics: [
      'AI-powered embryo grading (objective)',
      'Success rate: 47% (+15%)',
      'Cycle time: 4-5 weeks (-25%)',
      'Embryologist workload: Reduced 30%'
    ]
  }
}

export default function FertilityAIWorkflow() {
  return (
    <section className="section-padding bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="heading-2 mb-6">AI-Powered Fertility Intelligence</h2>
          <p className="body-large max-w-3xl mx-auto text-gray-600">
            MagnusOS brings artificial intelligence to every aspect of fertility care, 
            from embryo analysis to treatment optimization, ensuring the best possible outcomes.
          </p>
        </motion.div>

        {/* AI Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-medium hover:shadow-large transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${feature.color}-100 text-${feature.color}-600`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="heading-3 mb-3">{feature.title}</h3>
                  <p className="body-medium mb-4 text-gray-600">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${feature.color}-500`}></div>
                        <span className="body-small text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Real-World Use Case */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-medium mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="heading-3 mb-4">{useCase.title}</h3>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">{useCase.description}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="flex items-center space-x-3 mb-4">
                <ExclamationTriangleIcon className="w-8 h-8 text-red-600" />
                <h4 className="text-xl font-semibold text-red-800">{useCase.before.title}</h4>
              </div>
              <ul className="space-y-3">
                {useCase.before.metrics.map((metric, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-700">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* After */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center space-x-3 mb-4">
                <BoltIcon className="w-8 h-8 text-green-600" />
                <h4 className="text-xl font-semibold text-green-800">{useCase.after.title}</h4>
              </div>
              <ul className="space-y-3">
                {useCase.after.metrics.map((metric, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-700">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* AI Benefits Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="heading-3 mb-8">Why AI Makes the Difference</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <EyeIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Objective Analysis</h4>
              <p className="text-gray-600">Eliminate human bias and subjectivity in embryo assessment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <HeartIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Higher Success Rates</h4>
              <p className="text-gray-600">AI-optimized protocols and embryo selection improve outcomes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <BeakerIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Efficient Workflows</h4>
              <p className="text-gray-600">Automated processes reduce cycle time and embryologist workload</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
