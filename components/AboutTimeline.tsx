'use client'

import { motion } from 'framer-motion'
import { CalendarIcon, TrophyIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const timeline = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'MagnusOS.ai was established with a vision to revolutionize healthcare through AI technology.',
    icon: RocketLaunchIcon
  },
  {
    year: '2021',
    title: 'First AI Solutions',
    description: 'Launched our first AI-powered healthcare solutions for hospital management.',
    icon: TrophyIcon
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description: 'Expanded operations internationally, serving healthcare organizations worldwide.',
    icon: CalendarIcon
  },
  {
    year: '2023',
    title: 'Platform Unification',
    description: 'Introduced the unified MagnusOS platform integrating all healthcare verticals.',
    icon: TrophyIcon
  },
  {
    year: '2024',
    title: 'AI Innovation Leader',
    description: 'Recognized as a leading AI healthcare technology company with advanced solutions.',
    icon: RocketLaunchIcon
  }
]

export default function AboutTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-primary-600 to-healthcare-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From startup to industry leader, discover the key milestones that shaped MagnusOS.ai into 
            the healthcare technology powerhouse it is today.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-healthcare-500"></div>
          
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-healthcare-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              
              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-healthcare-500 rounded-lg flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-primary-600">{item.year}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

