'use client'

import { motion } from 'framer-motion'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const footerLinks = {
  solutions: [
    { name: 'Hospital Information System', href: '/solutions/his' },
    { name: 'Radiology & Imaging', href: '/solutions/radiology' },
    { name: 'Fertility Clinics', href: '/solutions/fertility' },
    { name: 'Laboratory Management', href: '/solutions/laboratory' },
    { name: 'Pharmacy & CRM', href: '/solutions/pharmacy-crm' },
    { name: 'ERP & Operations', href: '/solutions/erp' },
    { name: 'Cosmetology & Aesthetics', href: '/solutions/cosmetology' },
    { name: 'Dental Care', href: '/solutions/dental' },
    { name: 'Nuclear Medicine', href: '/solutions/nuclear-medicine' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Investor Relations', href: '/investors' }
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Support Center', href: '/support' }
  ],
  compliance: [
    { name: 'HIPAA Compliance', href: '/compliance/hipaa' },
    { name: 'GDPR Compliance', href: '/compliance/gdpr' },
    { name: 'NDHM/ABHA', href: '/compliance/ndhm' },
    { name: 'Security', href: '/security' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ]
}

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: 'LinkedIn' },
  { name: 'Twitter', href: '#', icon: 'Twitter' },
  { name: 'YouTube', href: '#', icon: 'YouTube' },
  { name: 'GitHub', href: '#', icon: 'GitHub' }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
            {/* Company Info - Left Side */}
            <div className="md:col-span-2 lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-healthcare-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">M</span>
                  </div>
                  <span className="text-2xl font-bold">MagnusOS.ai</span>
                </div>
                <p className="text-gray-300 mb-6 max-w-xs">
                  The world's most comprehensive, modular, and AI-enabled health operating system that transforms patient care, reduces inefficiencies, and empowers both clinicians and healthcare organizations.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <EnvelopeIcon className="w-5 h-5 text-primary-400" />
                    <span className="text-sm">contact@magnusos.ai</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <PhoneIcon className="w-5 h-5 text-primary-400" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPinIcon className="w-5 h-5 text-primary-400" />
                    <span className="text-sm">Kerala, India | Dubai, UAE</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - 3 Equal Columns */}
            <div className="md:col-span-2 lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {/* Solutions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-6 text-white">Solutions</h3>
                  <ul className="space-y-3">
                    {footerLinks.solutions.map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href} 
                          className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Company */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href} 
                          className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Resources & Compliance Combined */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
                  <ul className="space-y-3 mb-8">
                    {footerLinks.resources.map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href} 
                          className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-semibold mb-6 text-white">Compliance</h3>
                  <ul className="space-y-3">
                    {footerLinks.compliance.map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href} 
                          className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <motion.div 
          className="py-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Stay Updated with MagnusOS</h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Get the latest insights on healthcare technology, AI innovations, and platform updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div 
          className="py-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center lg:text-left">
              © 2025 MagnusOS.ai. All rights reserved. A product of MagnusOS Healthcare Technologies.
            </div>

            {/* Social Links & Language */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              {/* Social Links */}
              <div className="flex space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Language Selector */}
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <GlobeAltIcon className="w-4 h-4" />
                <select className="bg-transparent border-none focus:outline-none focus:ring-0">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="hi">हिंदी</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

