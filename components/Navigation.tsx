'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Solutions', 
    href: '#',
    dropdown: [
      { name: 'Hospital Information System', href: '/solutions/his', description: 'Complete hospital management platform' },
      { name: 'Radiology & Imaging', href: '/solutions/radiology', description: 'AI-powered PACS and imaging workflow' },
      { name: 'Fertility Clinics', href: '/solutions/fertility', description: 'IVF and fertility management software' },
      { name: 'Laboratory Management', href: '/solutions/laboratory', description: 'Lab workflow and result management' },
      { name: 'Pharmacy & CRM', href: '/solutions/pharmacy-crm', description: 'Pharmacy operations and patient CRM' },
      { name: 'ERP & Operations', href: '/solutions/erp', description: 'Enterprise resource planning for healthcare' },
      { name: 'Cosmetology & Aesthetics', href: '/solutions/cosmetology', description: 'Aesthetic clinic management' },
      { name: 'Dental Care', href: '/solutions/dental', description: 'Dental practice management system' },
      { name: 'Nuclear Medicine', href: '/solutions/nuclear-medicine', description: 'Nuclear medicine workflow software' }
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' }
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">MagnusOS.ai</span>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-healthcare-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">MagnusOS.ai</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.dropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors py-2">
                    {item.name}
                    <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4"
                      >
                        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                          <div className="p-4">
                            {item.dropdown.map((dropdownItem) => (
                              <div key={dropdownItem.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                <div>
                                  <Link 
                                    href={dropdownItem.href}
                                    className="font-semibold text-gray-900 group-hover:text-primary-600"
                                  >
                                    {dropdownItem.name}
                                    <span className="absolute inset-0" />
                                  </Link>
                                  <p className="mt-1 text-gray-600">{dropdownItem.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors py-2"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Link
            href="/demo"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors py-2"
          >
            Demo
          </Link>
          <Link
            href="/contact"
            className="btn-primary"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
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
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
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
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
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
                                  className="block text-sm leading-6 text-gray-600 hover:text-primary-600 transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className="block text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors"
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
                      className="block text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors"
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
