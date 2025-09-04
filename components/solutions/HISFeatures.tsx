'use client'

import { motion } from 'framer-motion'
import { 
  UserIcon, 
  CalendarIcon, 
  DocumentTextIcon, 
  HomeIcon, 
  CreditCardIcon,
  ChartBarIcon,
  CogIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: UserIcon,
    title: 'Unified Patient Record',
    description: 'Each patient has one record across all departments using Master Patient Index linked with national digital health ID like ABHA for India.',
    benefits: [
      'No more redundant data entry',
      'Patient data instantly available across OPD, ER, Lab, Radiology',
      'Ensures continuity of care',
      'Reduces admin workload significantly'
    ],
    color: 'primary'
  },
  {
    icon: CalendarIcon,
    title: 'Appointments & Scheduling',
    description: 'Streamlined scheduling for clinics, surgeries, and procedures with smart algorithms and AI-powered optimization.',
    benefits: [
      'Smart scheduling algorithms predict no-shows',
      'Optimizes slot utilization automatically',
      'Automated patient reminders',
      'AI suggestions for conflict resolution'
    ],
    color: 'healthcare'
  },
  {
    icon: DocumentTextIcon,
    title: 'EMR & Clinical Documentation',
    description: 'User-friendly Electronic Medical Record interface with voice recognition, templates, and AI assistance.',
    benefits: [
      'Intuitive EMR with voice recognition',
      'AI-assisted drug interaction alerts',
      'ICD code suggestions',
      'Visit note summarization using NLP'
    ],
    color: 'success'
  },
  {
    icon: HomeIcon,
    title: 'Inpatient Management',
    description: 'Comprehensive management of beds, operating theaters, and wards with complete patient journey tracking.',
    benefits: [
      'Manage admissions, bed occupancy, surgical schedules',
      'Track every inpatient from admission to discharge',
      'E-prescriptions and nursing notes',
      'Multidisciplinary care plans'
    ],
    color: 'warning'
  },
  {
    icon: CreditCardIcon,
    title: 'Billing & Insurance',
    description: 'Integrated billing system with automatic charge accumulation and comprehensive insurance management.',
    benefits: [
      'Automatic charge accumulation for services',
      'Package billing and insurance pre-authorizations',
      'Claims generation with proper codes',
      'Transparent itemized statements'
    ],
    color: 'error'
  },
  {
    icon: ChartBarIcon,
    title: 'Analytics & Reporting',
    description: 'Real-time dashboards and comprehensive reporting for operational insights and decision-making.',
    benefits: [
      'Real-time operational dashboards',
      'Department-wise performance metrics',
      'Financial analytics and reporting',
      'Customizable report generation'
    ],
    color: 'neutral'
  }
]

export default function HISFeatures() {
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
            Complete Hospital Management in One Platform
          </motion.h2>
          <motion.p 
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MagnusOS HIS covers every aspect of hospital operations, from patient registration to discharge, 
            ensuring seamless information flow and operational excellence.
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

        {/* Integration Diagram */}
        <motion.div 
          className="bg-gradient-to-r from-primary-50 to-healthcare-50 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="heading-3 mb-4">Seamless Integration Across All Departments</h3>
            <p className="body-large text-gray-600">
              MagnusOS HIS acts as the central hub connecting all hospital operations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <UserIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">OPD</h4>
              <p className="text-sm text-gray-600">Outpatient Care</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-healthcare-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <HomeIcon className="w-8 h-8 text-healthcare-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">IPD</h4>
              <p className="text-sm text-gray-600">Inpatient Care</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <CogIcon className="w-8 h-8 text-success-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Lab</h4>
              <p className="text-sm text-gray-600">Laboratory</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <DocumentTextIcon className="w-8 h-8 text-warning-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Radiology</h4>
              <p className="text-sm text-gray-600">Imaging</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-medium">
              <ShieldCheckIcon className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-medium text-gray-700">All connected through secure, unified data backbone</span>
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
          <h3 className="heading-3 mb-8">Why Choose MagnusOS HIS?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">30%</div>
              <div className="text-sm text-gray-600">Reduction in Administrative Overhead</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-healthcare-600 mb-2">25%</div>
              <div className="text-sm text-gray-600">Faster Patient Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">System Uptime Reliability</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
