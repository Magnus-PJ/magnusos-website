'use client'

import { motion } from 'framer-motion'
import { 
  LinkIcon, 
  ShieldCheckIcon, 
  CogIcon, 
  DocumentTextIcon,
  ServerIcon,
  GlobeAltIcon,
  LockClosedIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'

const standards = [
  {
    icon: DocumentTextIcon,
    title: 'HL7 FHIR Standards',
    description: 'Full compliance with HL7 FHIR (Fast Healthcare Interoperability Resources) for seamless data exchange.',
    benefits: [
      'RESTful API architecture',
      'JSON-based data format',
      'Resource-based data model',
      'Built-in validation and error handling'
    ],
    color: 'primary'
  },
  {
    icon: CogIcon,
    title: 'DICOM Integration',
    description: 'Seamless integration with PACS systems and medical imaging equipment using DICOM standards.',
    benefits: [
      'Direct PACS connectivity',
      'Image metadata extraction',
      'Multi-modality support',
      'Real-time image streaming'
    ],
    color: 'healthcare'
  },
  {
    icon: ServerIcon,
    title: 'Legacy System Support',
    description: 'Connect to existing hospital systems without requiring complete replacement.',
    benefits: [
      'HL7 v2 message support',
      'Custom interface development',
      'Data migration tools',
      'Gradual transition approach'
    ],
    color: 'success'
  },
  {
    icon: GlobeAltIcon,
    title: 'Open API Architecture',
    description: 'RESTful APIs enable third-party integrations and custom application development.',
    benefits: [
      'Developer-friendly documentation',
      'OAuth 2.0 authentication',
      'Rate limiting and monitoring',
      'Webhook support for real-time updates'
    ],
    color: 'warning'
  }
]

const integrations = [
  'Lab Information Systems (LIS)',
  'Picture Archiving Systems (PACS)',
  'Pharmacy Management Systems',
  'Billing & Insurance Systems',
  'Electronic Health Records (EHR)',
  'Medical Device Integration',
  'Telemedicine Platforms',
  'Patient Portal Systems'
]

export default function HISInteroperability() {
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
            Interoperability & Integration
          </motion.h2>
          <motion.p 
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MagnusOS plays well with others. Our platform supports industry standards and integrates seamlessly 
            with existing systems, ensuring you can modernize without disruption.
          </motion.p>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {standards.map((standard, index) => (
            <motion.div
              key={index}
              className="card-hover group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${standard.color}-100 text-${standard.color}-600 group-hover:scale-110 transition-transform duration-200`}>
                  <standard.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="heading-3 mb-3">{standard.title}</h3>
                  <p className="body-medium mb-4">{standard.description}</p>
                  <ul className="space-y-2">
                    {standard.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${standard.color}-500`}></div>
                        <span className="body-small text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Hub Visualization */}
        <motion.div 
          className="bg-gradient-to-r from-primary-50 to-healthcare-50 rounded-2xl p-8 lg:p-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="heading-3 mb-4">Central Integration Hub</h3>
            <p className="body-large text-gray-600">
              MagnusOS acts as the central nervous system, connecting all your healthcare systems
            </p>
          </div>
          
          {/* Central Hub */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                HIS
              </div>
              <div className="absolute inset-0 w-24 h-24 bg-primary-400 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>

          {/* Connected Systems */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-medium border border-gray-200">
                  <LinkIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">{integration}</h4>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-medium">
              <ArrowPathIcon className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-medium text-gray-700">Bidirectional data flow with real-time synchronization</span>
            </div>
          </div>
        </motion.div>

        {/* Security & Compliance */}
        <motion.div 
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-medium border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-3 mb-4">Enterprise-Grade Security</h3>
              <p className="body-large mb-6">
                All integrations are built with security and compliance at the core, ensuring your data 
                remains protected while enabling seamless connectivity.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <LockClosedIcon className="w-5 h-5 text-success-600" />
                  <span className="text-gray-700">End-to-end encryption for all data transfers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ShieldCheckIcon className="w-5 h-5 text-success-600" />
                  <span className="text-gray-700">Role-based access control and audit trails</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CogIcon className="w-5 h-5 text-success-600" />
                  <span className="text-gray-700">HIPAA and GDPR compliant data handling</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ServerIcon className="w-5 h-5 text-success-600" />
                  <span className="text-gray-700">Secure API authentication and authorization</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-50 to-healthcare-50 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Integration Status</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                      <span className="text-sm text-success-600">Active</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Connected Systems</span>
                      <span className="font-medium">8/8</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Data Sync</span>
                      <span className="font-medium">Real-time</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Uptime</span>
                      <span className="font-medium">99.9%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <LinkIcon className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="heading-3 mb-4">Ready to Connect Your Systems?</h3>
          <p className="body-large mb-8 max-w-2xl mx-auto">
            Our integration experts can help you connect MagnusOS with your existing systems 
            and ensure a smooth transition to the future of healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Schedule Integration Consultation</button>
            <button className="btn-outline">Download API Documentation</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

