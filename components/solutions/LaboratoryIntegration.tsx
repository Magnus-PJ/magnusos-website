'use client'

import { motion } from 'framer-motion'
import { 
  LinkIcon, 
  ShieldCheckIcon, 
  CpuChipIcon, 
  CloudIcon,
  ServerIcon,
  DeviceTabletIcon
} from '@heroicons/react/24/outline'

const integrations = [
  {
    icon: LinkIcon,
    title: 'Hospital Information System',
    description: 'Seamless integration with HIS for patient data, orders, and result delivery.',
    benefits: ['Real-time patient data sync', 'Automated order processing', 'Integrated result delivery']
  },
  {
    icon: CpuChipIcon,
    title: 'Laboratory Equipment',
    description: 'Direct connectivity with analyzers, centrifuges, and other laboratory instruments.',
    benefits: ['Automated result capture', 'Real-time status monitoring', 'Predictive maintenance alerts']
  },
  {
    icon: CloudIcon,
    title: 'Cloud & On-Premise',
    description: 'Flexible deployment options with hybrid cloud support for scalability.',
    benefits: ['Hybrid cloud deployment', 'Offline resilience', 'Global accessibility']
  },
  {
    icon: ServerIcon,
    title: 'Third-Party Systems',
    description: 'Open API architecture for integration with existing laboratory and hospital systems.',
    benefits: ['RESTful APIs', 'HL7 FHIR support', 'Custom integration support']
  }
]

const compliance = [
  { standard: 'HIPAA', status: 'Compliant', description: 'Patient privacy protection' },
  { standard: 'CLIA', status: 'Certified', description: 'Clinical laboratory standards' },
  { standard: 'CAP', status: 'Accredited', description: 'College of American Pathologists' },
  { standard: 'ISO 15189', status: 'Compliant', description: 'Medical laboratory quality' }
]

export default function LaboratoryIntegration() {
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
            Seamless Integration & Compliance
          </motion.h2>
          <motion.p 
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MagnusOS Laboratory integrates seamlessly with your existing healthcare ecosystem while maintaining 
            the highest standards of compliance and security.
          </motion.p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              className="card-hover group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary-100 text-primary-600 group-hover:scale-110 transition-transform duration-200">
                  <integration.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="heading-3 mb-3">{integration.title}</h3>
                  <p className="body-medium mb-4">{integration.description}</p>
                  <ul className="space-y-2">
                    {integration.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                        <span className="body-small text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance Section */}
        <motion.div 
          className="bg-gradient-to-r from-success-50 to-primary-50 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="heading-3 mb-4">Industry Compliance & Certifications</h3>
            <p className="body-large text-gray-600">
              Built with healthcare compliance at the core
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {compliance.map((item, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-medium">
                <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-6 h-6 text-success-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.standard}</h4>
                <div className="text-sm text-success-600 font-medium mb-1">{item.status}</div>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-medium">
              <ShieldCheckIcon className="w-5 h-5 text-success-600" />
              <span className="text-sm font-medium text-gray-700">Enterprise-grade security with end-to-end encryption</span>
            </div>
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div 
          className="mt-16 bg-white rounded-2xl p-8 shadow-medium border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="heading-3 mb-4">Technical Specifications</h3>
            <p className="body-large text-gray-600">
              Built for enterprise healthcare environments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ServerIcon className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Deployment</h4>
              <p className="text-sm text-gray-600">Cloud, On-Premise, Hybrid</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DeviceTabletIcon className="w-8 h-8 text-success-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Access</h4>
              <p className="text-sm text-gray-600">Web, Mobile, Desktop</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CpuChipIcon className="w-8 h-8 text-warning-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Performance</h4>
              <p className="text-sm text-gray-600">99.9% Uptime SLA</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

