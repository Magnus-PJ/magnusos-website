'use client'

import { motion } from 'framer-motion'
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function ContactInfo() {
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
            Contact <span className="bg-gradient-to-r from-primary-600 to-healthcare-600 bg-clip-text text-transparent">Information</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team through multiple channels. We're here to help you succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100 text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-healthcare-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPinIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600">
              123 Healthcare Innovation Drive<br />
              San Francisco, CA 94105<br />
              United States
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100 text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-healthcare-500 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <PhoneIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">
              +1 (555) 123-4567<br />
              +1 (555) 123-4568<br />
              Toll Free: 1-800-MAGNUS
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100 text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-healthcare-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <EnvelopeIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">
              contact@magnusos.ai<br />
              support@magnusos.ai<br />
              sales@magnusos.ai
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100 text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-healthcare-500 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <ClockIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Hours</h3>
            <p className="text-gray-600">
              Monday - Friday<br />
              9:00 AM - 6:00 PM PST<br />
              24/7 Support Available
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
