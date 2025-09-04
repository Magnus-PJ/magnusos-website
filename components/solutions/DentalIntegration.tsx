'use client'

import { motion } from 'framer-motion'
import { 
  CloudIcon, 
  ShieldCheckIcon, 
  DevicePhoneMobileIcon,
  CogIcon,
  LinkIcon,
  ServerIcon
} from '@heroicons/react/24/outline'

const integrations = [
  {
    icon: CloudIcon,
    title: 'Cloud & On-Premise Deployment',
    description: 'Flexible deployment options to meet your practice\'s needs and compliance requirements.',
    features: [
      'Hybrid cloud architecture for scalability',
      'On-premise deployment for data control',
      'Automatic data synchronization',
      'Offline capability with sync when online'
    ]
  },
  {
    icon: ShieldCheckIcon,
    title: 'Security & Compliance',
    description: 'Built-in security features and compliance with healthcare data protection standards.',
    features: [
      'End-to-end encryption for all data',
      'HIPAA and GDPR compliance',
      'Role-based access controls',
      'Audit trails for all activities'
    ]
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile & Web Access',
    description: 'Access your practice management tools from anywhere with responsive design.',
    features: [
      'Mobile-optimized interface',
      'Cross-platform compatibility',
      'Real-time synchronization',
      'Offline mobile capabilities'
    ]
  },
  {
    icon: CogIcon,
    title: 'Third-Party Integrations',
    description: 'Seamlessly connect with existing tools and systems in your practice.',
    features: [
      'Payment processing integration',
      'Accounting software connectivity',
      'Insurance claim processing',
      'Digital imaging system integration'
    ]
  }
]

const complianceStandards = [
  { name: 'HIPAA', description: 'Healthcare data protection' },
  { name: 'GDPR', description: 'European data privacy' },
  { name: 'SOC 2', description: 'Security and availability' },
  { name: 'ISO 27001', description: 'Information security management' }
]

export default function DentalIntegration() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Seamless <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Integration</span> & Security
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MagnusOS integrates seamlessly with your existing dental systems while providing enterprise-grade security 
            and compliance features designed specifically for dental practices.
          </p>
        </motion.div>

        {/* Integration Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <integration.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{integration.title}</h3>
                  <p className="text-gray-600 mb-4">{integration.description}</p>
                  <ul className="space-y-2">
                    {integration.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance Standards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Compliance & Security Standards
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{standard.name}</h4>
                <p className="text-sm text-gray-600">{standard.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <ServerIcon className="w-6 h-6 text-blue-600 mr-3" />
              Technical Architecture
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                Microservices architecture for scalability
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                RESTful APIs for easy integration
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                Real-time data synchronization
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                Automated backup and disaster recovery
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <LinkIcon className="w-6 h-6 text-teal-600 mr-3" />
              Integration Capabilities
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 rounded-full bg-teal-500 mr-3"></div>
                Digital X-ray sensor integration
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 rounded-full bg-teal-500 mr-3"></div>
                Intraoral scanner connectivity
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 rounded-full bg-teal-500 mr-3"></div>
                Insurance claim processing systems
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 rounded-full bg-teal-500 mr-3"></div>
                Payment gateway integration
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
