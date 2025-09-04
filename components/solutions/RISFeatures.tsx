'use client'

import { motion } from 'framer-motion'
import { 
  CalendarIcon, 
  DocumentTextIcon, 
  CogIcon, 
  ChartBarIcon, 
  UserIcon,
  ShieldCheckIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  CameraIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: CalendarIcon,
    title: 'Smart Scheduling & Workflow',
    description: 'Intelligent appointment scheduling with AI-powered optimization for equipment utilization and radiologist availability.',
    benefits: [
      'AI-optimized appointment scheduling',
      'Equipment utilization tracking',
      'Radiologist workload balancing',
      'Emergency case prioritization'
    ],
    color: 'primary'
  },
  {
    icon: DocumentTextIcon,
    title: 'AI-Powered Reporting',
    description: 'Advanced reporting system with AI assistance for faster, more accurate radiology reports and findings.',
    benefits: [
      'AI-assisted report generation',
      'Template-based reporting',
      'Voice-to-text transcription',
      'Automated quality checks'
    ],
    color: 'healthcare'
  },
  {
    icon: CogIcon,
    title: 'Workflow Automation',
    description: 'Streamlined radiology workflows from patient check-in to report delivery with minimal manual intervention.',
    benefits: [
      'Automated patient check-in',
      'Study status tracking',
      'Report distribution automation',
      'Quality assurance workflows'
    ],
    color: 'success'
  },
  {
    icon: ChartBarIcon,
    title: 'Advanced Analytics',
    description: 'Comprehensive analytics and reporting for operational insights, performance metrics, and quality improvement.',
    benefits: [
      'Real-time performance dashboards',
      'Quality metrics tracking',
      'Operational efficiency analysis',
      'Revenue optimization insights'
    ],
    color: 'warning'
  },
  {
    icon: UserIcon,
    title: 'Radiologist Management',
    description: 'Complete radiologist workflow management including case assignment, reading lists, and performance tracking.',
    benefits: [
      'Intelligent case assignment',
      'Reading list management',
      'Performance analytics',
      'Continuing education tracking'
    ],
    color: 'error'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Quality Assurance',
    description: 'Built-in quality assurance tools for ensuring accuracy, compliance, and continuous improvement in radiology services.',
    benefits: [
      'Peer review workflows',
      'Compliance monitoring',
      'Quality metrics tracking',
      'Continuous improvement tools'
    ],
    color: 'neutral'
  }
]

export default function RISFeatures() {
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
            Complete Radiology Management Platform
          </motion.h2>
          <motion.p 
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MagnusOS RIS covers every aspect of radiology operations, from patient scheduling to report delivery, 
            ensuring efficient workflows and improved diagnostic accuracy.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
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
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
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
          className="bg-gradient-to-r from-healthcare-50 to-primary-50 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="heading-3 mb-4">End-to-End Radiology Workflow</h3>
            <p className="body-large text-gray-600">
              MagnusOS RIS streamlines the complete radiology journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <UserIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Patient Check-in</h4>
              <p className="text-sm text-gray-600">Registration & Prep</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-healthcare-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <CameraIcon className="w-8 h-8 text-healthcare-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Imaging</h4>
              <p className="text-sm text-gray-600">Study Acquisition</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <CogIcon className="w-8 h-8 text-success-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Processing</h4>
              <p className="text-sm text-gray-600">AI Enhancement</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MagnifyingGlassIcon className="w-8 h-8 text-warning-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Reading</h4>
              <p className="text-sm text-gray-600">Radiologist Review</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-error-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <DocumentTextIcon className="w-8 h-8 text-error-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Report</h4>
              <p className="text-sm text-gray-600">Delivery & Archive</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-medium">
              <ClockIcon className="w-5 h-5 text-primary-600" />
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
          <h3 className="heading-3 mb-8">Why Choose MagnusOS RIS?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">40%</div>
              <div className="text-sm text-gray-600">Faster Report Turnaround</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-healthcare-600 mb-2">25%</div>
              <div className="text-sm text-gray-600">Reduction in Reading Errors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">System Reliability</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
