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
  ArrowPathIcon,
  CameraIcon
} from '@heroicons/react/24/outline'

const integrations = [
  {
    icon: CameraIcon,
    title: 'PACS Integration',
    description: 'Seamless integration with Picture Archiving and Communication Systems for comprehensive image management.',
    benefits: [
      'DICOM 3.0 compliance',
      'Multi-modality support',
      'Real-time image streaming',
      'Advanced visualization tools'
    ],
    color: 'primary'
  },
  {
    icon: ServerIcon,
    title: 'HIS/EMR Integration',
    description: 'Deep integration with Hospital Information Systems and Electronic Medical Records for unified patient data.',
    benefits: [
      'Bidirectional data flow',
      'Patient context integration',
      'Order management',
      'Results distribution'
    ],
    color: 'healthcare'
  },
  {
    icon: CogIcon,
    title: 'Modality Integration',
    description: 'Direct connectivity with imaging equipment for automated study acquisition and workflow management.',
    benefits: [
      'Auto-routing of studies',
      'Worklist management',
      'Quality control automation',
      'Equipment monitoring'
    ],
    color: 'success'
  },
  {
    icon: GlobeAltIcon,
    title: 'Cloud & Mobile Access',
    description: 'Cloud-native architecture with mobile access for radiologists to work from anywhere, anytime.',
    benefits: [
      'Web-based viewer',
      'Mobile app support',
      'Offline capability',
      'Multi-device sync'
    ],
    color: 'warning'
  }
]

const supportedModalities = [
  'X-Ray',
  'CT Scan',
  'MRI',
  'Ultrasound',
  'Nuclear Medicine',
  'Mammography',
  'Fluoroscopy',
  'Angiography'
]

export default function RISIntegration() {
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
            Seamless Integration & Connectivity
          </motion.h2>
          <motion.p 
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MagnusOS RIS integrates seamlessly with your existing infrastructure, providing a unified platform 
            that connects all imaging systems, equipment, and healthcare applications.
          </motion.p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
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
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${integration.color}-100 text-${integration.color}-600 group-hover:scale-110 transition-transform duration-200`}>
                  <integration.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="heading-3 mb-3">{integration.title}</h3>
                  <p className="body-medium mb-4">{integration.description}</p>
                  <ul className="space-y-2">
                    {integration.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${integration.color}-500`}></div>
                        <span className="body-small text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modality Support */}
        <motion.div 
          className="bg-gradient-to-r from-healthcare-50 to-primary-50 rounded-2xl p-8 lg:p-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="heading-3 mb-4">Comprehensive Modality Support</h3>
            <p className="body-large text-gray-600">
              MagnusOS RIS supports all major imaging modalities and equipment types
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {supportedModalities.map((modality, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-medium border border-gray-200">
                  <CameraIcon className="w-8 h-8 text-healthcare-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">{modality}</h4>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-medium">
              <ArrowPathIcon className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-medium text-gray-700">Unified workflow across all imaging modalities</span>
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
                All integrations are built with security and compliance at the core, ensuring your imaging data 
                remains protected while enabling seamless connectivity across systems.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <LockClosedIcon className="w-5 h-5 text-success-600" />
                  <span className="text-gray-700">End-to-end encryption for all data transfers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ShieldCheckIcon className="w-5 h-5 text-success-600" />
                  <span className="text-gray-700">HIPAA and GDPR compliant data handling</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CogIcon className="w-5 h-5 text-success-600" />
                  <span className="text-gray-700">Role-based access control and audit trails</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ServerIcon className="w-5 h-5 text-success-600" />
                  <span className="text-gray-700">Secure API authentication and authorization</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-healthcare-50 to-primary-50 rounded-xl p-6">
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
                      <span className="font-medium">12/12</span>
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
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-healthcare-500 rounded-full flex items-center justify-center">
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
          <h3 className="heading-3 mb-4">Ready to Integrate Your Imaging Systems?</h3>
          <p className="body-large mb-8 max-w-2xl mx-auto">
            Our integration experts can help you connect MagnusOS RIS with your existing imaging infrastructure 
            and ensure a smooth transition to the future of radiology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Schedule Integration Consultation</button>
            <button className="btn-outline">Download Integration Guide</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
