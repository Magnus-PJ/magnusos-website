'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  BuildingOffice2Icon, 
  XMarkIcon, 
  HeartIcon, 
  SparklesIcon, 
  BeakerIcon, 
  CurrencyDollarIcon, 
  UserIcon 
} from '@heroicons/react/24/outline'

interface Persona {
  id: string
  name: string
  icon: any
  description: string
  content: {
    title: string
    subtitle: string
    features: string[]
    cta: string
    ctaLink: string
    stats?: { number: string; label: string }[]
  }
}

const personas: Persona[] = [
  {
    id: 'hospital-admin',
    name: 'Hospital Administrator',
    icon: BuildingOffice2Icon,
    description: 'Streamline operations and improve efficiency',
    content: {
      title: 'Unlock a unified HIS/ERP to streamline every department',
      subtitle: 'Cut costs, reduce inefficiencies, and leverage predictive analytics for resource planning. MagnusOS centralizes patient records across multi-centers, ensuring real-time data flow and compliance.',
      features: [
        '30% reduction in admin overhead via automation',
        'Unified patient records across all departments',
        'Predictive analytics for resource planning',
        'Multi-center management with real-time sync'
      ],
      cta: 'Learn about Hospital Solutions',
      ctaLink: '/solutions/his',
      stats: [
        { number: '30%', label: 'Reduction in Admin Overhead' },
        { number: '25%', label: 'Faster Patient Processing' },
        { number: '99.9%', label: 'Uptime with Hybrid Cloud' }
      ]
    }
  },
  {
    id: 'radiologist',
    name: 'Radiologist',
    icon: XMarkIcon,
    description: 'AI-enhanced imaging and diagnostics',
    content: {
      title: 'Accelerate imaging workflows with AI',
      subtitle: 'MagnusOS Radiology suite triages urgent cases, auto-drafts reports, and ensures critical findings never slip through. Studies show AI integration can improve radiologist efficiency by over 20%.',
      features: [
        'AI-powered triage and prioritization',
        'Auto-drafting of radiology reports',
        'Critical finding alerts and notifications',
        'DICOM integration with existing PACS'
      ],
      cta: 'AI in Radiology',
      ctaLink: '/solutions/radiology'
    }
  },
  {
    id: 'fertility-specialist',
    name: 'Fertility Specialist',
    icon: HeartIcon,
    description: 'Improve IVF outcomes with AI',
    content: {
      title: 'Leverage AI to improve IVF success',
      subtitle: 'MagnusOS Fertility module tracks cycles, lab results, and even uses AI for embryo selection insights, providing objective assessments to assist embryologists.',
      features: [
        'AI-powered embryo grading and selection',
        'Complete IVF cycle tracking',
        'Lab information system integration',
        'Patient portal with cycle updates'
      ],
      cta: 'Fertility Clinic Solution',
      ctaLink: '/solutions/fertility'
    }
  },
  {
    id: 'cosmetologist',
    name: 'Cosmetologist',
    icon: SparklesIcon,
    description: 'Digital clinic experience and AR planning',
    content: {
      title: 'Provide personalized aesthetic care with digital precision',
      subtitle: 'Our Cosmetology solution uses AI to analyze skin and facial data, recommend treatment plans, and even simulate cosmetic procedure outcomes via AR.',
      features: [
        'AI skin analysis and treatment recommendations',
        'AR simulation of cosmetic procedures',
        'Client record management and follow-ups',
        'Before/after photo comparisons'
      ],
      cta: 'Learn about Cosmetology Suite',
      ctaLink: '/solutions/cosmetology'
    }
  },
  {
    id: 'dental-professional',
    name: 'Dental Professional',
    icon: BeakerIcon,
    description: 'AI-powered dental diagnostics and planning',
    content: {
      title: 'Reinvent dental care with AI-powered analysis and planning',
      subtitle: 'MagnusOS Dental integrates AI to flag issues on X-rays (cavities, lesions) and generate treatment plan options.',
      features: [
        'AI detection of dental issues on X-rays',
        'Treatment plan generation and visualization',
        'Patient engagement and appointment management',
        'Integrated dental ERP/CRM system'
      ],
      cta: 'Digital Dental Solution',
      ctaLink: '/solutions/dental'
    }
  },
  {
    id: 'investor',
    name: 'Investor',
    icon: CurrencyDollarIcon,
    description: 'Market opportunity and innovation',
    content: {
      title: 'The digital health ecosystem is $500B+ by 2025',
      subtitle: 'MagnusOS is uniquely positioned with an AI-first approach addressing critical gaps in hospital tech. Learn about our growth, team, and how we\'re transforming healthcare with a scalable hybrid model.',
      features: [
        'AI-first healthcare platform approach',
        'Scalable hybrid cloud model',
        'Addressing critical hospital tech gaps',
        'Proven market traction and growth'
      ],
      cta: 'Investor Relations',
      ctaLink: '/investors'
    }
  },
  {
    id: 'patient',
    name: 'Patient',
    icon: UserIcon,
    description: 'Better healthcare experience',
    content: {
      title: 'Your health, unified',
      subtitle: 'With MagnusOS-enabled providers, enjoy seamless appointment booking, instant access to your records, and AI-powered insights into your care. Experience shorter wait times and more personalized treatment.',
      features: [
        'Seamless appointment booking and management',
        'Instant access to health records',
        'AI-powered care insights and recommendations',
        'Reduced wait times and personalized care'
      ],
      cta: 'Patient Portal',
      ctaLink: '/patient-portal'
    }
  }
]

export default function PersonaValueProps() {
  const [selectedPersona, setSelectedPersona] = useState<Persona | null>(null)

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="heading-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Personalized Solutions for Every Healthcare Role
          </motion.h2>
          <motion.p 
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Select your role to see how MagnusOS can transform your healthcare operations with AI-powered solutions tailored to your specific needs
          </motion.p>
        </div>

        {/* Persona Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {personas.map((persona, index) => (
            <motion.button
              key={persona.id}
              onClick={() => setSelectedPersona(persona)}
              className={`p-6 rounded-xl border-2 transition-all duration-200 hover:scale-105 hover:shadow-medium ${
                selectedPersona?.id === persona.id 
                  ? 'border-primary-500 bg-primary-50 shadow-medium' 
                  : 'border-gray-200 bg-white hover:border-primary-300'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center space-y-3">
                <div className={`mx-auto w-12 h-12 rounded-lg flex items-center justify-center ${
                  selectedPersona?.id === persona.id 
                    ? 'bg-primary-100 text-primary-600' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  <persona.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{persona.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{persona.description}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Selected Persona Content */}
        {selectedPersona && (
          <motion.div
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-medium border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center">
                  <selectedPersona.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                  <h3 className="heading-3 text-gray-900">{selectedPersona.content.title}</h3>
                  <p className="body-large text-gray-600 mt-2">{selectedPersona.content.subtitle}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedPersona(null)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <XMarkIcon className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {selectedPersona.content.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                  <span className="body-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats if available */}
            {selectedPersona.content.stats && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 bg-gradient-to-r from-primary-50 to-healthcare-50 rounded-xl">
                {selectedPersona.content.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="text-center">
              <button className="btn-primary">
                {selectedPersona.content.cta}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
