'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BuildingOfficeIcon, 
  XMarkIcon, 
  HeartIcon, 
  SparklesIcon, 
  UserGroupIcon, 
  CurrencyDollarIcon,
  UserIcon
} from '@heroicons/react/24/outline'

interface Persona {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  description: string
  content: {
    title: string
    points: string[]
    cta: string
    color: string
  }
}

const personas: Persona[] = [
  {
    id: 'hospital-admin',
    name: 'Hospital Admin',
    icon: BuildingOfficeIcon,
    description: 'Streamline operations and improve efficiency',
    content: {
      title: 'Unlock a unified HIS/ERP to streamline every department',
      points: [
        'Cut costs, reduce inefficiencies, and leverage predictive analytics for resource planning',
        'MagnusOS centralizes patient records across multi-centers, ensuring real-time data flow and compliance',
        '30% reduction in admin overhead via automation'
      ],
      cta: 'Learn about Hospital Solutions',
      color: 'primary'
    }
  },
  {
    id: 'radiologist',
    name: 'Radiologist',
    icon: XMarkIcon,
    description: 'AI-enhanced imaging and diagnostics',
    content: {
      title: 'Accelerate imaging workflows with AI',
      points: [
        'MagnusOS Radiology suite triages urgent cases, auto-drafts reports, and ensures critical findings never slip through',
        'Studies show AI integration can improve radiologist efficiency by over 20%',
        'AI-powered pre-reads and automated measurements'
      ],
      cta: 'AI in Radiology',
      color: 'healthcare'
    }
  },
  {
    id: 'fertility-specialist',
    name: 'Fertility Specialist',
    icon: HeartIcon,
    description: 'Improve IVF outcomes with AI',
    content: {
      title: 'Leverage AI to improve IVF success',
      points: [
        'MagnusOS Fertility module tracks cycles, lab results, and even uses AI for embryo selection insights',
        'Provide objective assessments to assist embryologists',
        'Offer patients a smoother journey with integrated records and predictive scheduling'
      ],
      cta: 'Fertility Clinic Solution',
      color: 'success'
    }
  },
  {
    id: 'cosmetologist',
    name: 'Cosmetologist',
    icon: SparklesIcon,
    description: 'Digital clinic experience and AR planning',
    content: {
      title: 'Provide personalized aesthetic care with digital precision',
      points: [
        'Our Cosmetology solution uses AI to analyze skin and facial data, recommend treatment plans',
        'Simulate cosmetic procedure outcomes via AR',
        'Streamline client records, before/after photo comparisons, and follow-ups in one system'
      ],
      cta: 'Learn about Cosmetology Suite',
      color: 'warning'
    }
  },
  {
    id: 'dental-professional',
    name: 'Dental Professional',
    icon: UserGroupIcon,
    description: 'AI-powered dental diagnostics and planning',
    content: {
      title: 'Reinvent dental care with AI-powered analysis and planning',
      points: [
        'MagnusOS Dental integrates AI to flag issues on X-rays (cavities, lesions) and generate treatment plan options',
        'Engage patients with visual treatment previews',
        'Manage your practice with an all-in-one dental ERP/CRM'
      ],
      cta: 'Digital Dental Solution',
      color: 'primary'
    }
  },
  {
    id: 'investor',
    name: 'Investor',
    icon: CurrencyDollarIcon,
    description: 'Market opportunity and innovation',
    content: {
      title: 'The digital health ecosystem is $XXB by 2025',
      points: [
        'MagnusOS is uniquely positioned with an AI-first approach addressing critical gaps in hospital tech',
        'Learn about our growth, team, and how we\'re transforming healthcare with a scalable hybrid model',
        'Investment-ready health technology platform'
      ],
      cta: 'Investor Relations',
      color: 'success'
    }
  },
  {
    id: 'patient',
    name: 'Patient',
    icon: UserIcon,
    description: 'Better healthcare experience',
    content: {
      title: 'Your health, unified',
      points: [
        'With MagnusOS-enabled providers, enjoy seamless appointment booking, instant access to your records',
        'AI-powered insights into your care',
        'Experience shorter wait times and more personalized treatment'
      ],
      cta: 'Patient Portal',
      color: 'healthcare'
    }
  }
]

export default function PersonaSelector() {
  const [selectedPersona, setSelectedPersona] = useState<Persona | null>(null)

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      primary: 'bg-primary-50 border-primary-200 text-primary-800',
      healthcare: 'bg-healthcare-50 border-healthcare-200 text-healthcare-800',
      success: 'bg-success-50 border-success-200 text-success-800',
      warning: 'bg-warning-50 border-warning-200 text-warning-800'
    }
    return colorMap[color] || colorMap.primary
  }

  return (
    <section className="section-padding bg-gray-50">
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
            I am a...
          </motion.h2>
          <motion.p 
            className="body-large max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Select your role to see how MagnusOS can transform your healthcare operations
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
        <AnimatePresence mode="wait">
          {selectedPersona && (
            <motion.div
              key={selectedPersona.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className={`max-w-4xl mx-auto p-8 rounded-2xl border-2 ${getColorClasses(selectedPersona.content.color)}`}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="heading-3">{selectedPersona.content.title}</h3>
                <button
                  onClick={() => setSelectedPersona(null)}
                  className="p-2 rounded-lg hover:bg-white/50 transition-colors"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
              
              <ul className="space-y-3 mb-8">
                {selectedPersona.content.points.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-current mt-2 flex-shrink-0"></div>
                    <span className="body-medium">{point}</span>
                  </li>
                ))}
              </ul>
              
              <button className="btn-primary">
                {selectedPersona.content.cta}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

