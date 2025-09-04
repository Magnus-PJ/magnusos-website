'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon, ChevronDownIcon, SparklesIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Solutions', 
    href: '#',
    dropdown: [
      { name: 'Hospital Information System', href: '/solutions/his', description: 'Complete hospital management platform', icon: '🏥' },
      { name: 'Radiology & Imaging', href: '/solutions/radiology', description: 'AI-powered PACS and imaging workflow', icon: '📷' },
      { name: 'Laboratory Management', href: '/solutions/laboratory', description: 'Lab workflow and result management', icon: '🧪' },
      { name: 'Pharmacy & CRM', href: '/solutions/pharmacy-crm', description: 'Pharmacy operations and patient CRM', icon: '💊' },
      { name: 'ERP & Operations', href: '/solutions/erp', description: 'Enterprise resource planning for healthcare', icon: '⚙️' }
    ]
  },
  { 
    name: 'Specialties', 
    href: '#',
    dropdown: [
      { name: 'Fertility Clinics', href: '/solutions/fertility', description: 'IVF and fertility management software', icon: '👶' },
      { name: 'Cosmetology & Aesthetics', href: '/solutions/cosmetology', description: 'Aesthetic clinic management', icon: '✨' },
      { name: 'Dental Care', href: '/solutions/dental', description: 'Dental practice management system', icon: '🦷' },
      { name: 'Nuclear Medicine', href: '/solutions/nuclear-medicine', description: 'Nuclear medicine workflow software', icon: '☢️' }
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'Resources', href: '/resources' },
  { name: 'Blog', href: '/blog' },
  { 
    name: 'Company', 
    href: '#',
    dropdown: [
      { name: 'Careers', href: '/careers', description: 'Join our mission to transform healthcare', icon: '💼' },
      { name: 'Revenue Model', href: '/revenue-model', description: 'Pricing and subscription options', icon: '💰' },
      { name: 'Support', href: '/support', description: 'Get help and technical support', icon: '🆘' }
    ]
  },
  { name: 'Contact', href: '/contact' }
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo - Left Side */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <span className="sr-only">MagnusOS.ai</span>
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 via-healthcare-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-white font-bold text-2xl">M</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl"></div>
                </div>
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <SparklesIcon className="w-3 h-3 text-white" />
                </motion.div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  MagnusOS.ai
                </span>
                <span className="text-xs text-primary-600 font-medium tracking-wider">AI-FIRST HEALTHCARE</span>
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Desktop Navigation - Right Side */}
        <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.dropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.button 
                    className="flex items-center gap-x-2 text-sm font-semibold leading-6 text-gray-700 hover:text-primary-600 transition-all duration-200 py-3 px-4 rounded-xl hover:bg-white/50 backdrop-blur-sm"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    <ChevronDownIcon className="h-4 w-4 transition-transform duration-200" />
                  </motion.button>
                  
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute right-0 z-10 mt-3 w-80"
                      >
                        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                          <div className="p-2">
                            {item.dropdown.map((dropdownItem, index) => (
                              <motion.div
                                key={dropdownItem.name}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="group"
                              >
                                <Link 
                                  href={dropdownItem.href}
                                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-healthcare-50 transition-all duration-200"
                                >
                                  <span className="text-2xl">{dropdownItem.icon}</span>
                                  <div className="flex-1">
                                    <div className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                                      {dropdownItem.name}
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">{dropdownItem.description}</p>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-gray-700 hover:text-primary-600 transition-all duration-200 py-3 px-4 rounded-xl hover:bg-white/50 backdrop-blur-sm"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons - Right Side */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/demo"
              className="text-sm font-semibold leading-6 text-gray-700 hover:text-primary-600 transition-all duration-200 py-3 px-4 rounded-xl hover:bg-white/50 backdrop-blur-sm"
            >
              Demo
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="relative group bg-gradient-to-r from-primary-500 to-healthcare-600 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-healthcare-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <motion.button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 bg-white/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">MagnusOS.ai</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-healthcare-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">M</span>
                    </div>
                    <span className="text-xl font-bold text-gray-900">MagnusOS.ai</span>
                  </div>
                </Link>
                <motion.button
                  type="button"
                  className="-m-2.5 rounded-xl p-2.5 text-gray-700 bg-white/80 backdrop-blur-sm"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </motion.button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        {item.dropdown ? (
                          <div>
                            <div className="text-sm font-semibold leading-6 text-gray-900 mb-2">
                              {item.name}
                            </div>
                            <div className="ml-4 space-y-2">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block text-sm leading-6 text-gray-600 hover:text-primary-600 transition-colors p-2 rounded-lg hover:bg-gray-50"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <div className="flex items-center space-x-2">
                                    <span className="text-lg">{dropdownItem.icon}</span>
                                    <span>{dropdownItem.name}</span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className="block text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors p-2 rounded-lg hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="py-6 space-y-4">
                    <Link
                      href="/demo"
                      className="block text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors p-2 rounded-lg hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Demo
                    </Link>
                    <Link
                      href="/contact"
                      className="btn-primary w-full text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
