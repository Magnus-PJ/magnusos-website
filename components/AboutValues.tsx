'use client'

import { motion } from 'framer-motion'
import { ShieldCheckIcon, UsersIcon, RocketLaunchIcon, HeartIcon } from '@heroicons/react/24/outline'

const values = [
  {
    icon: ShieldCheckIcon,
    title: 'Trust & Security',
    description: 'We prioritize data security and patient privacy in everything we build, ensuring compliance with global healthcare standards.',
    color: 'primary'
  },
  {
    icon: UsersIcon,
    title: 'Collaboration',
    description: 'We work closely with healthcare professionals to understand their needs and create solutions that truly make a difference.',
    color: 'healthcare'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Innovation',
    description: 'We continuously push the boundaries of what\'s possible in healthcare technology, always staying ahead of the curve.',
    color: 'primary'
  },
  {
    icon: HeartIcon,
    title: 'Patient-Centric',
    description: 'Every decision we make is guided by our commitment to improving patient outcomes and healthcare experiences.',
    color: 'healthcare'
  }
]

export default function AboutValues() {
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
            Our <span className="bg-gradient-to-r from-primary-600 to-healthcare-600 bg-clip-text text-transparent">Core Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These fundamental principles guide everything we do and shape how we approach healthcare technology innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-primary-200/50 hover:shadow-2xl hover:border-primary-300/70 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${
                  value.color === 'primary' ? 'from-primary-500 to-healthcare-500' : 'from-healthcare-500 to-primary-500'
                } rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg border-2 border-white/50`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
