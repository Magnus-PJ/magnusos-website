'use client'

import { motion } from 'framer-motion'
import {
  LinkIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  CogIcon,
  ChartBarIcon,
  UserIcon,
  BeakerIcon,
  HeartIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'

const integrations = [
  {
    icon: LinkIcon,
    title: 'HIS/EMR Integration',
    description: 'Seamless integration with existing hospital and clinic management systems.',
    features: ['Patient data sync', 'Billing integration', 'Appointment coordination', 'Shared workflows'],
    color: 'blue'
  },
  {
    icon: CloudIcon,
    title: 'Cloud & Mobile Access',
    description: 'Access fertility data and workflows from anywhere with secure cloud infrastructure.',
    features: ['Mobile app access', 'Cloud synchronization', 'Offline capabilities', 'Multi-device support'],
    color: 'purple'
  },
  {
    icon: BeakerIcon,
    title: 'Laboratory Equipment',
    description: 'Direct integration with fertility lab equipment and monitoring devices.',
    features: ['Incubator monitoring', 'Microscope integration', 'Temperature tracking', 'Quality control'],
    color: 'green'
  },
  {
    icon: ChartBarIcon,
    title: 'Analytics & Reporting',
    description: 'Comprehensive analytics integration with business intelligence tools.',
    features: ['Performance dashboards', 'Custom reporting', 'Data export', 'Third-party BI tools'],
    color: 'indigo'
  }
]

const supportedModalities = [
  'IVF (In Vitro Fertilization)',
  'IUI (Intrauterine Insemination)',
  'ICSI (Intracytoplasmic Sperm Injection)',
  'PGT (Preimplantation Genetic Testing)',
  'Egg Freezing',
  'Sperm Banking',
  'Embryo Transfer',
  'Fertility Preservation'
]

const securityFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'HIPAA Compliance',
    description: 'Full compliance with healthcare privacy regulations',
    color: 'green'
  },
  {
    icon: CogIcon,
    title: 'Role-Based Access',
    description: 'Granular permissions based on user roles and responsibilities',
    color: 'blue'
  },
  {
    icon: UserIcon,
    title: 'Audit Trails',
    description: 'Comprehensive logging of all system activities and data access',
    color: 'purple'
  },
  {
    icon: CloudIcon,
    title: 'Data Encryption',
    description: 'End-to-end encryption for data at rest and in transit',
    color: 'indigo'
  }
]

export default function FertilityIntegration() {
  return (
    <section className="section-padding bg-white">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="heading-2 mb-6">Seamless Integration & Interoperability</h2>
          <p className="body-large max-w-3xl mx-auto text-gray-600">
            MagnusOS Fertility integrates seamlessly with your existing healthcare infrastructure, 
            ensuring smooth workflows and data consistency across all systems.
          </p>
        </motion.div>

        {/* Integration Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-hover group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${integration.color}-100 text-${integration.color}-600 group-hover:scale-110 transition-transform duration-200`}>
                  <integration.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="heading-3 mb-3">{integration.title}</h3>
                  <p className="body-medium mb-4">{integration.description}</p>
                  <ul className="space-y-2">
                    {integration.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${integration.color}-500`}></div>
                        <span className="body-small text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Supported Modalities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 lg:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="heading-3 mb-4">Comprehensive Fertility Treatment Support</h3>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              MagnusOS supports all major fertility treatment modalities, ensuring your clinic 
              can handle any patient case with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {supportedModalities.map((modality, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl p-4 text-center shadow-small hover:shadow-medium transition-shadow duration-200"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <HeartIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">{modality}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security & Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="heading-3 mb-8">Enterprise-Grade Security & Compliance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-${feature.color}-100 text-${feature.color}-600 rounded-full flex items-center justify-center`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Integration Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-medium border border-gray-100"
        >
          <div className="text-center mb-12">
            <h3 className="heading-3 mb-4">Benefits of Seamless Integration</h3>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Our integration capabilities deliver measurable improvements in clinic efficiency and patient care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <CalendarIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Streamlined Workflows</h4>
              <p className="text-gray-600">Eliminate duplicate data entry and manual processes across systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <DevicePhoneMobileIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Mobile Accessibility</h4>
              <p className="text-gray-600">Access fertility data and workflows from any device, anywhere</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Unified Analytics</h4>
              <p className="text-gray-600">Comprehensive insights across all integrated systems and workflows</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
