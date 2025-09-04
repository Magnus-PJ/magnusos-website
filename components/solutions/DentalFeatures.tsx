'use client'

import { motion } from 'framer-motion'
import { 
  CalendarIcon, 
  DocumentTextIcon, 
  CameraIcon, 
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: CalendarIcon,
    title: 'Scheduling & Recall Management',
    description: 'Intuitive calendar specifically for dental clinics with automated recall systems and appointment management.',
    details: [
      'Manage dentist and hygienist schedules',
      'Operatory room coordination',
      'Automated recall lists for cleanings',
      'No-show tracking and follow-up'
    ],
    color: 'blue'
  },
  {
    icon: DocumentTextIcon,
    title: 'Dental EHR & Charting',
    description: 'Comprehensive dental records with visual tooth charts and integrated progress notes.',
    details: [
      'Visual tooth charts with point-and-click charting',
      'Mark caries, restorations, and periodontal status',
      'Past dental history tracking',
      'Integrated intraoral photos and scans'
    ],
    color: 'teal'
  },
  {
    icon: CameraIcon,
    title: 'Imaging Integration',
    description: 'Handle digital X-rays, panoramics, and CT scans with seamless integration and comparison tools.',
    details: [
      'Digital X-ray sensor integration',
      'Panoramic and CT scan management',
      'Side-by-side image comparison',
      'Multi-location image access'
    ],
    color: 'blue'
  },
  {
    icon: ClipboardDocumentListIcon,
    title: 'Treatment Planning & Patient Education',
    description: 'Create and present treatment plans with clarity, including costs and alternatives.',
    details: [
      'Comprehensive treatment plan creation',
      'Patient-friendly visual summaries',
      'Cost breakdown and insurance pre-authorization',
      'Alternative treatment options documentation'
    ],
    color: 'teal'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Billing, Insurance & Inventory',
    description: 'Integrated billing system with insurance claims processing and inventory management.',
    details: [
      'Automatic billing from completed treatments',
      'CDT codes and insurance claim generation',
      'Co-pay and deductible calculations',
      'Dental supply inventory tracking'
    ],
    color: 'blue'
  },
  {
    icon: UserGroupIcon,
    title: 'Multi-Practice Management',
    description: 'Scale to multiple locations with centralized management and reporting capabilities.',
    details: [
      'Multi-location practice support',
      'Centralized reporting and analytics',
      'Cross-location patient records',
      'Unified billing and insurance processing'
    ],
    color: 'teal'
  }
]

export default function DentalFeatures() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Complete <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Dental Practice</span> Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From solo practices to large DSOs, MagnusOS provides everything you need to run a modern, 
            efficient dental practice that delivers exceptional patient care and drives practice growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${
                  feature.color === 'blue' ? 'from-blue-500 to-teal-500' : 'from-teal-500 to-blue-500'
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
                          feature.color === 'blue' ? 'bg-blue-500' : 'bg-teal-500'
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
          className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Complete Patient Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Appointment', desc: 'Online Booking' },
              { step: '2', title: 'Check-in', desc: 'Digital Forms' },
              { step: '3', title: 'Examination', desc: 'AI-Assisted Diagnosis' },
              { step: '4', title: 'Treatment', desc: 'Digital Planning' },
              { step: '5', title: 'Follow-up', desc: 'Automated Care' }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-teal-300 transform translate-x-2"></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
