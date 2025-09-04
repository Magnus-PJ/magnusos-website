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
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Personalized Solutions for Every Healthcare Role
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Select your role to see how MagnusOS can transform your healthcare operations with AI-powered solutions tailored to your specific needs
          </motion.p>
        </div>

        {/* Enhanced Persona Grid - Mobile First Design */}
        <div className="mb-16 sm:mb-20">
          {/* First Row - Mobile: 2 cols, Tablet: 4 cols */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {personas.slice(0, 4).map((persona, index) => (
              <motion.button
                key={persona.id}
                onClick={() => setSelectedPersona(persona)}
                className={`group relative p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden ${
                  selectedPersona?.id === persona.id 
                    ? 'border-primary-500 bg-gradient-to-br from-primary-50 via-white to-healthcare-50 shadow-2xl ring-4 ring-primary-200/50' 
                    : 'border-gray-200/50 bg-gradient-to-br from-white via-gray-50/80 to-white hover:border-primary-300/70 hover:shadow-xl hover:bg-gradient-to-br hover:from-primary-50/30 hover:via-white hover:to-healthcare-50/30'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Enhanced AI Background Pattern - Mobile Optimized */}
                <div className="absolute inset-0 opacity-5 sm:opacity-8 group-hover:opacity-15 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 via-transparent to-healthcare-400/20"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-bl from-primary-200/30 to-transparent rounded-full -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-tr from-healthcare-200/30 to-transparent rounded-full translate-y-6 sm:translate-y-12 -translate-x-6 sm:-translate-x-12"></div>
                  <div className="absolute top-1/2 left-1/2 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full -translate-x-4 sm:-translate-x-8 -translate-y-4 sm:-translate-y-8"></div>
                </div>
                
                {/* AI Circuit Pattern Overlay - Mobile Optimized */}
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

                <div className="relative text-center space-y-4 sm:space-y-6">
                  {/* Enhanced Icon Container - Mobile Optimized */}
                  <div className="relative">
                    <div className={`mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg sm:shadow-xl transition-all duration-500 border-2 ${
                      selectedPersona?.id === persona.id 
                        ? 'bg-gradient-to-br from-primary-500 via-primary-600 to-healthcare-600 text-white shadow-2xl scale-110 border-primary-400' 
                        : 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-600 group-hover:from-primary-100 group-hover:via-primary-200 group-hover:to-healthcare-200 group-hover:text-primary-700 group-hover:scale-105 group-hover:border-primary-300 border-gray-300'
                    }`}>
                      <persona.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                  </div>
                  
                  {/* Enhanced Text Content - Mobile Optimized */}
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className={`font-bold text-sm sm:text-base leading-tight transition-colors duration-300 ${
                      selectedPersona?.id === persona.id 
                        ? 'text-primary-800' 
                        : 'text-gray-900 group-hover:text-primary-700'
                    }`}>
                      {persona.name}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed transition-colors duration-300 ${
                      selectedPersona?.id === persona.id 
                        ? 'text-primary-600' 
                        : 'text-gray-500 group-hover:text-gray-600'
                    }`}>
                      {persona.description}
                    </p>
                  </div>
                  
                  {/* Tech Indicator - Mobile Optimized */}
                  <div className={`flex items-center justify-center space-x-2 text-xs font-medium transition-colors duration-300 ${
                    selectedPersona?.id === persona.id 
                      ? 'text-primary-600' 
                      : 'text-gray-400 group-hover:text-primary-500'
                  }`}>
                    <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                    <span className="hidden sm:inline">AI-Powered</span>
                    <span className="sm:hidden">AI</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
          
          {/* Second Row - Mobile: 1 col, Tablet: 3 cols centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl w-full">
              {personas.slice(4, 7).map((persona, index) => (
                <motion.button
                  key={persona.id}
                  onClick={() => setSelectedPersona(persona)}
                  className={`group relative p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden ${
                    selectedPersona?.id === persona.id 
                      ? 'border-primary-500 bg-gradient-to-br from-primary-50 via-white to-healthcare-50 shadow-2xl ring-4 ring-primary-200/50' 
                      : 'border-gray-200/50 bg-gradient-to-br from-white via-gray-50/80 to-white hover:border-primary-300/70 hover:shadow-xl hover:bg-gradient-to-br hover:from-primary-50/30 hover:via-white hover:to-healthcare-50/30'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: (index + 4) * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Enhanced AI Background Pattern - Mobile Optimized */}
                  <div className="absolute inset-0 opacity-5 sm:opacity-8 group-hover:opacity-15 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 via-transparent to-healthcare-400/20"></div>
                    <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-bl from-primary-200/30 to-transparent rounded-full -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-tr from-healthcare-200/30 to-transparent rounded-full translate-y-6 sm:translate-y-12 -translate-x-6 sm:-translate-x-12"></div>
                    <div className="absolute top-1/2 left-1/2 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full -translate-x-4 sm:-translate-x-8 -translate-y-4 sm:-translate-y-8"></div>
                  </div>
                  
                  {/* AI Circuit Pattern Overlay - Mobile Optimized */}
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

                  <div className="relative text-center space-y-4 sm:space-y-6">
                    {/* Enhanced Icon Container - Mobile Optimized */}
                    <div className="relative">
                      <div className={`mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg sm:shadow-xl transition-all duration-500 border-2 ${
                        selectedPersona?.id === persona.id 
                          ? 'bg-gradient-to-br from-primary-500 via-primary-600 to-healthcare-600 text-white shadow-2xl scale-110 border-primary-400' 
                          : 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-600 group-hover:from-primary-100 group-hover:via-primary-200 group-hover:to-healthcare-200 group-hover:text-primary-700 group-hover:scale-105 group-hover:border-primary-300 border-gray-300'
                      }`}>
                        <persona.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                      </div>
                    </div>
                    
                    {/* Enhanced Text Content - Mobile Optimized */}
                    <div className="space-y-2 sm:space-y-3">
                      <h3 className={`font-bold text-sm sm:text-base leading-tight transition-colors duration-300 ${
                        selectedPersona?.id === persona.id 
                          ? 'text-primary-800' 
                          : 'text-gray-900 group-hover:text-primary-700'
                      }`}>
                        {persona.name}
                      </h3>
                      <p className={`text-xs sm:text-sm leading-relaxed transition-colors duration-300 ${
                        selectedPersona?.id === persona.id 
                          ? 'text-primary-600' 
                          : 'text-gray-500 group-hover:text-gray-600'
                      }`}>
                        {persona.description}
                      </p>
                    </div>
                    
                    {/* Tech Indicator - Mobile Optimized */}
                    <div className={`flex items-center justify-center space-x-2 text-xs font-medium transition-colors duration-300 ${
                      selectedPersona?.id === persona.id 
                        ? 'text-primary-600' 
                        : 'text-gray-400 group-hover:text-primary-500'
                    }`}>
                      <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                      <span className="hidden sm:inline">AI-Powered</span>
                      <span className="sm:hidden">AI</span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Persona Content - Mobile Optimized */}
        <AnimatePresence mode="wait">
          {selectedPersona && (
            <motion.div
              key={selectedPersona.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Close Button - Mobile Optimized */}
              <motion.button
                onClick={() => setSelectedPersona(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200/50"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close persona details"
              >
                <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </motion.button>

              {/* Content Container - Mobile Optimized */}
              <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border-2 border-gray-200/50 overflow-hidden">
                {/* Header Section - Mobile Optimized */}
                <div className="p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-primary-50 via-white to-healthcare-50 border-b border-gray-200/50">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    {/* Icon and Title - Mobile Optimized */}
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-500 via-primary-600 to-healthcare-600 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl">
                        <selectedPersona.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                          {selectedPersona.content.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed max-w-2xl">
                          {selectedPersona.content.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features and Stats - Mobile Optimized */}
                <div className="p-6 sm:p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Features List - Mobile Optimized */}
                    <div className="space-y-4">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {selectedPersona.content.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats or CTA - Mobile Optimized */}
                    <div className="space-y-6">
                      {selectedPersona.content.stats ? (
                        <div>
                          <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Impact Metrics</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {selectedPersona.content.stats.map((stat, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-4 bg-gradient-to-br from-primary-50 to-healthcare-50 rounded-2xl border border-primary-200/50"
                              >
                                <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">{stat.number}</div>
                                <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-healthcare-50 rounded-2xl border border-primary-200/50">
                          <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Ready to Transform?</h4>
                          <p className="text-sm sm:text-base text-gray-600 mb-4">Discover how MagnusOS can revolutionize your healthcare operations</p>
                        </div>
                      )}
                      
                      {/* CTA Button - Mobile Optimized */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <a
                          href={selectedPersona.content.ctaLink}
                          className="block w-full text-center bg-gradient-to-r from-primary-600 to-healthcare-700 text-white px-6 py-4 sm:px-8 sm:py-5 rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                          {selectedPersona.content.cta}
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
