'use client'

import { motion } from 'framer-motion'
import { UserGroupIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

const teamStats = [
  {
    icon: UserGroupIcon,
    title: 'Expert Team',
    value: '150+',
    description: 'Healthcare technology professionals'
  },
  {
    icon: AcademicCapIcon,
    title: 'Experience',
    value: '10+',
    description: 'Years of combined healthcare expertise'
  },
  {
    icon: BriefcaseIcon,
    title: 'Projects',
    value: '500+',
    description: 'Successful healthcare implementations'
  }
]

export default function AboutTeam() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-healthcare-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-primary-600 to-healthcare-600 bg-clip-text text-transparent">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate professionals who are driving innovation in healthcare technology 
            and transforming how hospitals operate worldwide.
          </p>
        </motion.div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-healthcare-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.title}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Team Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Diverse Expertise, Unified Vision</h3>
          <p className="text-lg text-gray-600 mb-6">
            Our team brings together healthcare professionals, AI researchers, software engineers, 
            and business strategists who share a common passion for improving healthcare outcomes. 
            We combine deep industry knowledge with cutting-edge technology expertise to deliver 
            solutions that truly make a difference.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Healthcare Expertise</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Former hospital administrators</li>
                <li>• Clinical workflow specialists</li>
                <li>• Healthcare compliance experts</li>
                <li>• Medical device integration specialists</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Technology Innovation</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• AI and machine learning engineers</li>
                <li>• Cloud architecture specialists</li>
                <li>• Cybersecurity experts</li>
                <li>• User experience designers</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

