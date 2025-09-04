'use client'

import { motion } from 'framer-motion'
import { 
  BeakerIcon as PillIcon, 
  DocumentTextIcon, 
  CogIcon, 
  ChartBarIcon, 
  UserIcon,
  ShieldCheckIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: PillIcon,
    title: 'Smart Prescription Management',
    description: 'Intelligent prescription processing with automated validation, drug interaction checking, and streamlined workflows.',
    benefits: [
      'Automated prescription validation',
      'Drug interaction alerts',
      'Real-time status tracking',
      'Electronic prescribing support'
    ],
    color: 'warning'
  },
  {
    icon: ShoppingCartIcon,
    title: 'AI-Powered Inventory Management',
    description: 'Advanced inventory optimization with predictive analytics for stock management and cost reduction.',
    benefits: [
      'Predictive stock forecasting',
      'Automated reorder management',
      'Cost optimization algorithms',
      'Expiry date tracking'
    ],
    color: 'primary'
  },
  {
    icon: UserIcon,
    title: 'Patient CRM & Engagement',
    description: 'Comprehensive patient relationship management with automated communication and personalized care.',
    benefits: [
      'Patient profile management',
      'Automated refill reminders',
      'Medication adherence tracking',
      'Personalized communication'
    ],
    color: 'success'
  },
  {
    icon: ChartBarIcon,
    title: 'Advanced Analytics',
    description: 'Comprehensive analytics and reporting for operational insights, performance metrics, and business intelligence.',
    benefits: [
      'Real-time performance dashboards',
      'Revenue analytics',
      'Patient behavior insights',
      'Operational efficiency metrics'
    ],
    color: 'healthcare'
  },
  {
    icon: CogIcon,
    title: 'Workflow Automation',
    description: 'Streamlined pharmacy workflows from prescription intake to medication delivery with minimal manual intervention.',
    benefits: [
      'Automated prescription processing',
      'Smart routing algorithms',
      'Quality assurance workflows',
      'Delivery optimization'
    ],
    color: 'error'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Compliance & Security',
    description: 'Built-in compliance tools for ensuring accuracy, safety, and adherence to pharmacy regulations.',
    benefits: [
      'HIPAA compliance',
      'FDA/DEA regulations',
      'Audit trail management',
      'Security monitoring'
    ],
    color: 'neutral'
  }
]

export default function PharmacyFeatures() {
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
            Comprehensive Pharmacy Management
          </motion.h2>
          <motion.p 
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MagnusOS Pharmacy combines cutting-edge technology with deep pharmaceutical expertise 
            to deliver a platform that transforms how pharmacies operate, ensuring efficiency, 
            accuracy, and exceptional patient care.
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
          className="bg-gradient-to-r from-warning-50 to-primary-50 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="heading-3 mb-4">End-to-End Pharmacy Workflow</h3>
            <p className="body-large text-gray-600">
              MagnusOS Pharmacy streamlines the complete prescription journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <UserIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Prescription Intake</h4>
              <p className="text-sm text-gray-600">Patient Registration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <DocumentTextIcon className="w-8 h-8 text-warning-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Validation</h4>
              <p className="text-sm text-gray-600">AI-Powered Review</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <PillIcon className="w-8 h-8 text-success-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Dispensing</h4>
              <p className="text-sm text-gray-600">Medication Prep</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-error-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MagnifyingGlassIcon className="w-8 h-8 text-error-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quality Check</h4>
              <p className="text-sm text-gray-600">Final Verification</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-healthcare-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <ShoppingCartIcon className="w-8 h-8 text-healthcare-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Delivery</h4>
              <p className="text-sm text-gray-600">Patient Handoff</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-medium">
              <ClockIcon className="w-5 h-5 text-warning-600" />
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
          <h3 className="heading-3 mb-8">Why Choose MagnusOS Pharmacy?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-warning-600 mb-2">50%</div>
              <div className="text-sm text-gray-600">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">30%</div>
              <div className="text-sm text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Patient Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
