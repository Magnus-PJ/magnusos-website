'use client'

import { motion } from 'framer-motion'
import { 
  PuzzlePieceIcon, 
  CpuChipIcon, 
  CloudIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

const highlights = [
  {
    icon: PuzzlePieceIcon,
    title: 'Unified Platform, Modular Approach',
    description: 'MagnusOS is a single platform with modules for HIS, CRM, ERP, Radiology, etc., all sharing one secure data backbone. One patient - one record across all care touchpoints.',
    color: 'primary',
    features: ['Integrated data flow', 'No duplicate entry', 'Comprehensive analytics', 'ABHA Health ID integration']
  },
  {
    icon: CpuChipIcon,
    title: 'AI-First Innovations',
    description: 'MagnusOS embeds AI at every step - from auto-prioritizing ER patients based on severity to AI analyzing imaging scans for quicker diagnostics.',
    color: 'healthcare',
    features: ['Smart Triage & Scheduling', 'Radiology Pre-reads', 'Predictive Inventory', 'Personalized Care Insights']
  },
  {
    icon: CloudIcon,
    title: 'Hybrid Cloud + Offline Resilience',
    description: 'Cloud-powered convenience with on-premise control. MagnusOS can be deployed on-cloud, on-premise, or hybrid - meaning even if the internet goes down, your hospital can keep running offline.',
    color: 'success',
    features: ['Offline operation', 'Data sync when online', 'Sensitive data on-site', 'Cloud AI processing']
  },
  {
    icon: ShieldCheckIcon,
    title: 'Security & Compliance at Core',
    description: 'Our platform was built with strict healthcare regulations in mind - ensuring PHI is encrypted end-to-end and access is fully auditable.',
    color: 'warning',
    features: ['HIPAA compliant', 'GDPR compliant', 'NDHM/ABHA ready', 'Blockchain consent logs']
  }
]

export default function MagnusOSHighlights() {
  return (
    <section className="py-20 bg-white pl-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            className="heading-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose MagnusOS?
          </motion.h2>
          <motion.p 
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover the universal strengths that make MagnusOS the preferred choice for modern healthcare organizations
          </motion.p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="card-hover group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  highlight.color === 'primary' ? 'bg-primary-100 text-primary-600' :
                  highlight.color === 'healthcare' ? 'bg-healthcare-100 text-healthcare-600' :
                  highlight.color === 'success' ? 'bg-success-100 text-success-600' :
                  'bg-warning-100 text-warning-600'
                } group-hover:scale-110 transition-transform duration-200`}>
                  <highlight.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="heading-3 mb-3">{highlight.title}</h3>
                  <p className="body-medium mb-4">{highlight.description}</p>
                  <ul className="space-y-2">
                    {highlight.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          highlight.color === 'primary' ? 'bg-primary-500' :
                          highlight.color === 'healthcare' ? 'bg-healthcare-500' :
                          highlight.color === 'success' ? 'bg-success-500' :
                          'bg-warning-500'
                        }`}></div>
                        <span className="body-small text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div 
          className="bg-gradient-to-r from-primary-50 to-healthcare-50 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-3 mb-4">Built for the Future of Healthcare</h3>
              <p className="body-large mb-6">
                MagnusOS combines cutting-edge technology with deep healthcare expertise to deliver a platform that grows with your organization and adapts to emerging healthcare challenges.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <ChartBarIcon className="w-5 h-5 text-primary-600" />
                  <span className="text-sm font-medium">Real-time Analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <UserGroupIcon className="w-5 h-5 text-healthcare-600" />
                  <span className="text-sm font-medium">Multi-center Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CpuChipIcon className="w-5 h-5 text-success-600" />
                  <span className="text-sm font-medium">AI-Powered Insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ShieldCheckIcon className="w-5 h-5 text-warning-600" />
                  <span className="text-sm font-medium">Enterprise Security</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-medium">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">System Status</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                      <span className="text-sm text-success-600">Operational</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Uptime</span>
                      <span className="font-medium">99.9%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Response Time</span>
                      <span className="font-medium">&lt;200ms</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Data Centers</span>
                      <span className="font-medium">Global</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <CpuChipIcon className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="heading-3 mb-4">Ready to Transform Your Healthcare Operations?</h3>
          <p className="body-large mb-8 max-w-2xl mx-auto">
            Join leading healthcare organizations that have already embraced the future with MagnusOS
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Schedule a Demo
            </button>
            <button className="btn-outline">
              Download Brochure
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

