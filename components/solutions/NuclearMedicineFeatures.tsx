'use client'

import { motion } from 'framer-motion'
import { 
  CalendarIcon, 
  DocumentTextIcon, 
  CameraIcon, 
  ClipboardDocumentListIcon,
  BeakerIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: CalendarIcon,
    title: 'Advanced Scheduling & Workflow',
    description: 'Intelligent scheduling for PET/CT scans with radiopharmaceutical preparation and patient preparation coordination.',
    details: [
      'Automated scan scheduling with preparation time',
      'Radiopharmaceutical delivery tracking',
      'Patient preparation reminders',
      'Equipment availability optimization'
    ],
    color: 'green'
  },
  {
    icon: BeakerIcon,
    title: 'Radiopharmaceutical Management',
    description: 'Comprehensive tracking and management of radiopharmaceuticals with dose calculations and inventory control.',
    details: [
      'Automated dose calculations',
      'Inventory tracking and alerts',
      'Expiration date monitoring',
      'Waste management protocols'
    ],
    color: 'blue'
  },
  {
    icon: CameraIcon,
    title: 'PET/CT Image Management',
    description: 'Advanced image acquisition, processing, and analysis with AI-powered lesion detection and quantification.',
    details: [
      'Automated image acquisition protocols',
      'AI-powered lesion detection',
      'Quantitative analysis tools',
      'Multi-modality image fusion'
    ],
    color: 'green'
  },
  {
    icon: ClipboardDocumentListIcon,
    title: 'Report Generation & Analysis',
    description: 'Automated report generation with AI-assisted analysis and standardized reporting templates.',
    details: [
      'AI-assisted report generation',
      'Standardized reporting templates',
      'Quantitative analysis integration',
      'Quality assurance protocols'
    ],
    color: 'blue'
  },
  {
    icon: UserGroupIcon,
    title: 'Patient Management',
    description: 'Comprehensive patient tracking from referral to follow-up with safety protocols and communication tools.',
    details: [
      'Patient safety protocols',
      'Contraindication checking',
      'Follow-up scheduling',
      'Patient communication portal'
    ],
    color: 'green'
  },
  {
    icon: DocumentTextIcon,
    title: 'Regulatory Compliance',
    description: 'Built-in compliance with nuclear medicine regulations, radiation safety protocols, and quality assurance.',
    details: [
      'Radiation safety protocols',
      'Regulatory compliance tracking',
      'Quality assurance programs',
      'Audit trail maintenance'
    ],
    color: 'blue'
  }
]

export default function NuclearMedicineFeatures() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Complete <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Nuclear Medicine</span> Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From radiopharmaceutical management to AI-powered image analysis, MagnusOS provides everything 
            you need to run a modern, efficient nuclear medicine department.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${
                  feature.color === 'green' ? 'from-green-500 to-blue-500' : 'from-blue-500 to-green-500'
                } rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 rounded-full ${
                          feature.color === 'green' ? 'bg-green-500' : 'bg-blue-500'
                        } mr-3`}></div>
                        {detail}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-green-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Complete Nuclear Medicine Workflow
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Referral', desc: 'Patient Referral' },
              { step: '2', title: 'Scheduling', desc: 'Scan Preparation' },
              { step: '3', title: 'Injection', desc: 'Radiopharmaceutical' },
              { step: '4', title: 'Imaging', desc: 'PET/CT Scan' },
              { step: '5', title: 'Analysis', desc: 'AI-Powered Report' }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-blue-300 transform translate-x-2"></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
