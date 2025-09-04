'use client'

import { motion } from 'framer-motion'
import { 
  UserIcon, 
  CameraIcon, 
  SparklesIcon, 
  ShoppingBagIcon,
  CalendarIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: UserIcon,
    title: 'Client Profile & Consultation Notes',
    description: 'Keep rich profiles for each client including skin type, preferences, past treatments, allergies, and photographs.',
    details: [
      'Comprehensive client profiles with skin analysis',
      'Digital consultation notes and treatment history',
      'Allergy and preference tracking',
      'Secure photo storage and organization'
    ],
    color: 'pink'
  },
  {
    icon: CameraIcon,
    title: 'Before & After Media Management',
    description: 'Easily capture and catalog photos at each visit with built-in comparison tools to highlight improvements.',
    details: [
      'High-resolution image capture and storage',
      'Side-by-side before/after comparisons',
      'Treatment area organization and tagging',
      'Secure client photo sharing via portal'
    ],
    color: 'purple'
  },
  {
    icon: SparklesIcon,
    title: 'Treatment Planning & Visualization',
    description: 'Create morphing simulations and AR previews to show clients realistic outcomes before treatment.',
    details: [
      'AR outcome simulations for procedures',
      'Treatment parameter planning (Botox units, filler volume)',
      'Real-time visualization in clinic mirrors',
      'Digital consent with visual expectations'
    ],
    color: 'pink'
  },
  {
    icon: ShoppingBagIcon,
    title: 'Product Sales & Inventory',
    description: 'Manage skincare product sales with integrated inventory tracking and automated reorder alerts.',
    details: [
      'Point-of-sale system for products',
      'Inventory management with low-stock alerts',
      'Client product recommendations and regimens',
      'Sales reporting and financial integration'
    ],
    color: 'purple'
  },
  {
    icon: CalendarIcon,
    title: 'Appointment Scheduling & Packages',
    description: 'Offer flexible scheduling with treatment packages, memberships, and automated appointment management.',
    details: [
      'Flexible scheduling for multiple services',
      'Treatment package management',
      'Membership and loyalty program tracking',
      'Automated reminders and rescheduling'
    ],
    color: 'pink'
  },
  {
    icon: HeartIcon,
    title: 'Follow-ups & Loyalty Programs',
    description: 'Automated follow-up messages, loyalty points, and review management to build lasting client relationships.',
    details: [
      'Automated post-treatment follow-ups',
      'Loyalty points and reward tracking',
      'Review and feedback management',
      'Personalized client communication'
    ],
    color: 'purple'
  }
]

export default function CosmetologyFeatures() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Complete <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Aesthetic Practice</span> Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From client intake to treatment delivery, MagnusOS provides everything you need to run a modern, 
            tech-driven aesthetic practice that delights clients and drives growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${
                  feature.color === 'pink' ? 'from-pink-500 to-purple-500' : 'from-purple-500 to-pink-500'
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
                          feature.color === 'pink' ? 'bg-pink-500' : 'bg-purple-500'
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
          className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Complete Client Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Consultation', desc: 'AI Skin Analysis' },
              { step: '2', title: 'Planning', desc: 'AR Visualization' },
              { step: '3', title: 'Treatment', desc: 'Procedure Tracking' },
              { step: '4', title: 'Recovery', desc: 'Follow-up Care' },
              { step: '5', title: 'Results', desc: 'Before/After Showcase' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-pink-300 to-purple-300 transform translate-x-2"></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
