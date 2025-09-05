'use client'

import { motion } from 'framer-motion'
import { 
  CogIcon, 
  DocumentTextIcon, 
  ChartBarIcon, 
  UserIcon,
  ShieldCheckIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: CogIcon,
    title: 'Smart Process Automation',
    description: 'Intelligent automation of healthcare operations with AI-driven workflow optimization and process management.',
    benefits: [
      'Automated workflow management',
      'AI-powered process optimization',
      'Real-time process monitoring',
      'Intelligent routing algorithms'
    ],
    color: 'neutral'
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Resource Management',
    description: 'Comprehensive resource planning and allocation for optimal healthcare service delivery.',
    benefits: [
      'Staff scheduling optimization',
      'Equipment utilization tracking',
      'Facility management',
      'Resource allocation planning'
    ],
    color: 'primary'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Financial Management',
    description: 'Advanced financial operations with cost optimization, budgeting, and revenue cycle management.',
    benefits: [
      'Cost optimization analytics',
      'Budget planning & tracking',
      'Revenue cycle management',
      'Financial performance insights'
    ],
    color: 'success'
  },
  {
    icon: ChartBarIcon,
    title: 'Advanced Analytics',
    description: 'Comprehensive analytics and reporting for operational insights and strategic decision making.',
    benefits: [
      'Real-time performance dashboards',
      'Operational efficiency metrics',
      'Predictive analytics',
      'Strategic planning tools'
    ],
    color: 'healthcare'
  },
  {
    icon: UserIcon,
    title: 'Human Resources',
    description: 'Complete HR management including recruitment, training, performance, and compliance.',
    benefits: [
      'Recruitment & onboarding',
      'Training management',
      'Performance tracking',
      'Compliance monitoring'
    ],
    color: 'error'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Compliance & Security',
    description: 'Built-in compliance tools for ensuring adherence to healthcare regulations and security standards.',
    benefits: [
      'HIPAA compliance',
      'SOX compliance',
      'ISO standards',
      'Security monitoring'
    ],
    color: 'warning'
  }
]

export default function ERPFeatures() {
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
            Comprehensive ERP Management
          </motion.h2>
          <motion.p 
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MagnusOS ERP combines cutting-edge technology with deep healthcare operational expertise 
            to deliver a platform that transforms how healthcare organizations operate, ensuring efficiency, 
            cost optimization, and strategic excellence.
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
          className="bg-gradient-to-r from-neutral-50 to-primary-50 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="heading-3 mb-4">End-to-End Healthcare Operations</h3>
            <p className="body-large text-gray-600">
              MagnusOS ERP streamlines the complete healthcare operational journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <UserIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Planning</h4>
              <p className="text-sm text-gray-600">Strategic Planning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <CogIcon className="w-8 h-8 text-neutral-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Execution</h4>
              <p className="text-sm text-gray-600">Process Execution</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <ChartBarIcon className="w-8 h-8 text-success-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Monitoring</h4>
              <p className="text-sm text-gray-600">Performance Monitoring</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MagnifyingGlassIcon className="w-8 h-8 text-warning-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Analysis</h4>
              <p className="text-sm text-gray-600">Data Analysis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-error-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <BuildingOfficeIcon className="w-8 h-8 text-error-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Optimization</h4>
              <p className="text-sm text-gray-600">Continuous Improvement</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-medium">
              <ClockIcon className="w-5 h-5 text-neutral-600" />
              <span className="text-sm font-medium text-gray-700">Complete operational workflow with real-time monitoring</span>
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
          <h3 className="heading-3 mb-8">Why Choose MagnusOS ERP?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-neutral-600 mb-2">40%</div>
              <div className="text-sm text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">60%</div>
              <div className="text-sm text-gray-600">Faster Decisions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">System Monitoring</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

