'use client'

import { motion } from 'framer-motion'
import { 
  BeakerIcon, 
  DocumentTextIcon, 
  CogIcon, 
  ChartBarIcon, 
  UserIcon,
  ShieldCheckIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  BeakerIcon as TestTubeIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: BeakerIcon,
    title: 'Smart Sample Management',
    description: 'Intelligent sample tracking with barcode/QR code integration, automated routing, and real-time status updates.',
    benefits: [
      'Automated sample identification',
      'Real-time tracking & routing',
      'Barcode/QR code integration',
      'Chain of custody management'
    ],
    color: 'success'
  },
  {
    icon: DocumentTextIcon,
    title: 'AI-Powered Result Analysis',
    description: 'Advanced result interpretation with AI assistance for faster, more accurate laboratory reports.',
    benefits: [
      'AI-assisted result validation',
      'Automated critical value alerts',
      'Pattern recognition analysis',
      'Predictive result trending'
    ],
    color: 'primary'
  },
  {
    icon: CogIcon,
    title: 'Workflow Automation',
    description: 'Streamlined laboratory workflows from sample collection to result delivery with minimal manual intervention.',
    benefits: [
      'Automated sample processing',
      'Smart routing algorithms',
      'Quality control automation',
      'Result distribution workflows'
    ],
    color: 'warning'
  },
  {
    icon: ChartBarIcon,
    title: 'Advanced Analytics',
    description: 'Comprehensive analytics and reporting for operational insights, performance metrics, and quality improvement.',
    benefits: [
      'Real-time performance dashboards',
      'Quality metrics tracking',
      'Operational efficiency analysis',
      'Predictive maintenance alerts'
    ],
    color: 'healthcare'
  },
  {
    icon: UserIcon,
    title: 'Technician Management',
    description: 'Complete technician workflow management including task assignment, performance tracking, and training records.',
    benefits: [
      'Intelligent task assignment',
      'Performance analytics',
      'Training record management',
      'Workload balancing'
    ],
    color: 'error'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Quality Assurance',
    description: 'Built-in quality assurance tools for ensuring accuracy, compliance, and continuous improvement in laboratory services.',
    benefits: [
      'Automated QC processes',
      'Compliance monitoring',
      'Quality metrics tracking',
      'Continuous improvement tools'
    ],
    color: 'neutral'
  }
]

export default function LaboratoryFeatures() {
  return (
    <section className="section-padding bg-white">
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
            Comprehensive Laboratory Management
          </motion.h2>
          <motion.p 
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MagnusOS Laboratory combines cutting-edge technology with deep laboratory expertise 
            to deliver a platform that transforms how labs operate, ensuring accuracy, efficiency, 
            and compliance in every test.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
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
        </div>

        {/* Workflow Visualization */}
        <motion.div 
          className="bg-gradient-to-r from-success-50 to-primary-50 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="heading-3 mb-4">End-to-End Laboratory Workflow</h3>
            <p className="body-large text-gray-600">
              MagnusOS Laboratory streamlines the complete testing journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <UserIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Sample Collection</h4>
              <p className="text-sm text-gray-600">Patient Registration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TestTubeIcon className="w-8 h-8 text-success-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Processing</h4>
              <p className="text-sm text-gray-600">Sample Analysis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <CogIcon className="w-8 h-8 text-warning-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quality Control</h4>
              <p className="text-sm text-gray-600">QC Validation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-error-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MagnifyingGlassIcon className="w-8 h-8 text-error-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Review</h4>
              <p className="text-sm text-gray-600">Technician Review</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-healthcare-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <DocumentTextIcon className="w-8 h-8 text-healthcare-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
              <p className="text-sm text-gray-600">Delivery & Archive</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-medium">
              <ClockIcon className="w-5 h-5 text-success-600" />
              <span className="text-sm font-medium text-gray-700">Complete workflow automation with real-time tracking</span>
            </div>
          </div>
        </motion.div>

        {/* Key Benefits Summary */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="heading-3 mb-8">Why Choose MagnusOS Laboratory?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-success-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Result Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">60%</div>
              <div className="text-sm text-gray-600">Faster Turnaround</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Quality Monitoring</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
