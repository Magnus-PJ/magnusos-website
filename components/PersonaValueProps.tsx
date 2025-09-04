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

        {/* Enhanced Persona Grid - Tech-Savvy AI/Healthcare Theme */}
        <div className="mb-16">
          {/* First Row - 4 personas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {personas.slice(0, 4).map((persona, index) => (
              <motion.button
                key={persona.id}
                onClick={() => setSelectedPersona(persona)}
                className={`group relative p-8 rounded-3xl border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden ${
                  selectedPersona?.id === persona.id 
                    ? 'border-primary-500 bg-gradient-to-br from-primary-50 via-white to-healthcare-50 shadow-2xl ring-4 ring-primary-200/50' 
                    : 'border-gray-200/50 bg-gradient-to-br from-white via-gray-50/80 to-white hover:border-primary-300/70 hover:shadow-xl hover:bg-gradient-to-br hover:from-primary-50/30 hover:via-white hover:to-healthcare-50/30'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ y: -12, scale: 1.03 }}
              >
                {/* Enhanced AI Background Pattern */}
                <div className="absolute inset-0 opacity-8 group-hover:opacity-15 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 via-transparent to-healthcare-400/20"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-200/30 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-healthcare-200/30 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                  <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full -translate-x-8 -translate-y-8"></div>
                </div>
                
                {/* AI Circuit Pattern Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id={`circuit-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M0,10 L20,10 M10,0 L10,20" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                        <circle cx="10" cy="10" r="1" fill="currentColor"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill={`url(#circuit-${index})`}/>
                  </svg>
                </div>

                <div className="relative text-center space-y-6">
                  {/* Enhanced Icon Container */}
                  <div className="relative">
                    <div className={`mx-auto w-20 h-20 rounded-3xl flex items-center justify-center shadow-xl transition-all duration-500 border-2 ${
                      selectedPersona?.id === persona.id 
                        ? 'bg-gradient-to-br from-primary-500 via-primary-600 to-healthcare-600 text-white shadow-2xl scale-110 border-primary-400' 
                        : 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-600 group-hover:from-primary-100 group-hover:via-primary-200 group-hover:to-healthcare-200 group-hover:text-primary-700 group-hover:scale-105 group-hover:border-primary-300 border-gray-300'
                    }`}>
                      <persona.icon className="w-10 h-10" />
                    </div>
                    
                  </div>
                  
                  {/* Enhanced Text Content */}
                  <div className="space-y-3">
                    <h3 className={`font-bold text-base leading-tight transition-colors duration-300 ${
                      selectedPersona?.id === persona.id 
                        ? 'text-primary-800' 
                        : 'text-gray-900 group-hover:text-primary-700'
                    }`}>
                      {persona.name}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                      selectedPersona?.id === persona.id 
                        ? 'text-primary-600' 
                        : 'text-gray-500 group-hover:text-gray-600'
                    }`}>
                      {persona.description}
                    </p>
                  </div>
                  
                  {/* Tech Indicator */}
                  <div className={`flex items-center justify-center space-x-2 text-xs font-medium transition-colors duration-300 ${
                    selectedPersona?.id === persona.id 
                      ? 'text-primary-600' 
                      : 'text-gray-400 group-hover:text-primary-500'
                  }`}>
                    <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                    <span>AI-Powered</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
          
          {/* Second Row - 3 personas centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
              {personas.slice(4, 7).map((persona, index) => (
                <motion.button
                  key={persona.id}
                  onClick={() => setSelectedPersona(persona)}
                  className={`group relative p-8 rounded-3xl border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden ${
                    selectedPersona?.id === persona.id 
                      ? 'border-primary-500 bg-gradient-to-br from-primary-50 via-white to-healthcare-50 shadow-2xl ring-4 ring-primary-200/50' 
                      : 'border-gray-200/50 bg-gradient-to-br from-white via-gray-50/80 to-white hover:border-primary-300/70 hover:shadow-xl hover:bg-gradient-to-br hover:from-primary-50/30 hover:via-white hover:to-healthcare-50/30'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: (index + 4) * 0.15 }}
                  whileHover={{ y: -12, scale: 1.03 }}
                >
                  {/* Enhanced AI Background Pattern */}
                  <div className="absolute inset-0 opacity-8 group-hover:opacity-15 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 via-transparent to-healthcare-400/20"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-200/30 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-healthcare-200/30 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                    <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full -translate-x-8 -translate-y-8"></div>
                  </div>
                  
                  {/* AI Circuit Pattern Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id={`circuit-${index + 4}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M0,10 L20,10 M10,0 L10,20" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                          <circle cx="10" cy="10" r="1" fill="currentColor"/>
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill={`url(#circuit-${index + 4})`}/>
                    </svg>
                  </div>

                  <div className="relative text-center space-y-6">
                    {/* Enhanced Icon Container */}
                    <div className="relative">
                      <div className={`mx-auto w-20 h-20 rounded-3xl flex items-center justify-center shadow-xl transition-all duration-500 border-2 ${
                        selectedPersona?.id === persona.id 
                          ? 'bg-gradient-to-br from-primary-500 via-primary-600 to-healthcare-600 text-white shadow-2xl scale-110 border-primary-400' 
                          : 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-600 group-hover:from-primary-100 group-hover:via-primary-200 group-hover:to-healthcare-200 group-hover:text-primary-700 group-hover:scale-105 group-hover:border-primary-300 border-gray-300'
                      }`}>
                        <persona.icon className="w-10 h-10" />
                      </div>
                      
                    </div>
                    
                    {/* Enhanced Text Content */}
                    <div className="space-y-3">
                      <h3 className={`font-bold text-base leading-tight transition-colors duration-300 ${
                        selectedPersona?.id === persona.id 
                          ? 'text-primary-800' 
                          : 'text-gray-900 group-hover:text-primary-700'
                      }`}>
                        {persona.name}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                        selectedPersona?.id === persona.id 
                          ? 'text-primary-600' 
                          : 'text-gray-500 group-hover:text-gray-600'
                      }`}>
                        {persona.description}
                      </p>
                    </div>
                    
                    {/* Tech Indicator */}
                    <div className={`flex items-center justify-center space-x-2 text-xs font-medium transition-colors duration-300 ${
                      selectedPersona?.id === persona.id 
                        ? 'text-primary-600' 
                        : 'text-gray-400 group-hover:text-primary-500'
                    }`}>
                      <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                      <span>AI-Powered</span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Persona Content */}
        {selectedPersona && (
          <motion.div
            className="bg-gradient-to-br from-white via-primary-50/30 to-healthcare-50/30 rounded-3xl p-8 lg:p-12 shadow-2xl border-2 border-primary-200/50 ring-4 ring-primary-100/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center shadow-lg border-2 border-primary-300/50">
                  <selectedPersona.icon className="w-10 h-10 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-3">{selectedPersona.content.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{selectedPersona.content.subtitle}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedPersona(null)}
                className="p-3 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                <XMarkIcon className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {selectedPersona.content.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-gray-200/50 hover:border-primary-300/70 hover:bg-white/90 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-healthcare-500 flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/50 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-gray-700 leading-relaxed font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats if available */}
            {selectedPersona.content.stats && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 bg-gradient-to-r from-primary-50/80 to-healthcare-50/80 rounded-xl border-2 border-primary-200/50 shadow-lg">
                {selectedPersona.content.stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/60 rounded-lg border border-primary-100/50">
                    <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
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
