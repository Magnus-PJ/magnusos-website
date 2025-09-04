'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon, ChevronDownIcon, SparklesIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Tools', 
    href: '#',
    dropdown: [
      { name: 'Hospital Management', href: '/solutions/his', description: 'Complete hospital operations platform', icon: '🏥' },
      { name: 'Imaging Systems', href: '/solutions/radiology', description: 'AI-powered radiology workflow', icon: '📷' },
      { name: 'Lab Operations', href: '/solutions/laboratory', description: 'Laboratory management system', icon: '🧪' },
      { name: 'Pharmacy & CRM', href: '/solutions/pharmacy-crm', description: 'Pharmacy and patient management', icon: '💊' },
      { name: 'Enterprise ERP', href: '/solutions/erp', description: 'Healthcare resource planning', icon: '⚙️' }
    ]
  },
  { 
    name: 'Specialties', 
    href: '#',
    dropdown: [
      { name: 'Fertility Care', href: '/solutions/fertility', description: 'IVF and reproductive medicine', icon: '👶' },
      { name: 'Aesthetic Medicine', href: '/solutions/cosmetology', description: 'Cosmetic and aesthetic clinics', icon: '✨' },
      { name: 'Dental Practice', href: '/solutions/dental', description: 'Dental clinic management', icon: '🦷' },
      { name: 'Nuclear Medicine', href: '/solutions/nuclear-medicine', description: 'Nuclear imaging and therapy', icon: '☢️' }
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'Resources', href: '/resources' },
  { name: 'Blog', href: '/blog' },
  { 
    name: 'Company', 
    href: '#',
    dropdown: [
      { name: 'Careers', href: '/careers', description: 'Join our healthcare mission', icon: '💼' },
      { name: 'Pricing', href: '/revenue-model', description: 'Flexible pricing options', icon: '💰' },
      { name: 'Support', href: '/support', description: 'Technical support center', icon: '🆘' }
    ]
  },
  { name: 'Contact', href: '/contact' }
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as Element).closest('.mobile-menu')) {
        setMobileMenuOpen(false)
        setMobileDropdownOpen(null)
      }
    }
    
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-2xl border-b border-gray-200/50 shadow-2xl' 
        : 'bg-white/10 backdrop-blur-sm border-b border-white/20'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 lg:px-8 lg:py-5" aria-label="Global">
        {/* Enhanced Logo - Left Side */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <span className="sr-only">MagnusOS.ai</span>
            <motion.div 
              className="flex items-center space-x-2 lg:space-x-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <div className="w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-primary-600 via-healthcare-600 to-primary-700 rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-xl lg:shadow-2xl group-hover:shadow-2xl lg:group-hover:shadow-3xl transition-all duration-300 border border-white/20">
                  <span className="text-white font-bold text-xl lg:text-3xl tracking-tight leading-normal px-1 py-1">M</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl lg:rounded-3xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl lg:rounded-3xl"></div>
                </div>
                <motion.div
                  className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-3 h-3 lg:w-5 lg:h-5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full shadow-lg"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360],
                    y: [0, -2, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <SparklesIcon className="w-2 h-2 lg:w-3 lg:h-3 text-white" />
                </motion.div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl lg:text-4xl font-extrabold bg-gradient-to-r from-gray-900 via-primary-700 to-healthcare-700 bg-clip-text text-transparent leading-normal tracking-tight">
                  MagnusOS
                  <span className="text-lg lg:text-2xl font-bold bg-gradient-to-r from-primary-600 to-healthcare-600 bg-clip-text text-transparent">.ai</span>
                </span>
                <span className="hidden sm:block text-xs font-semibold text-primary-600 tracking-widest uppercase bg-gradient-to-r from-primary-50 to-healthcare-50 px-2 py-1 rounded-full">AI-First Healthcare Platform</span>
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
                        transition={{ duration: 0.1, ease: "easeOut" }}
                        className="absolute right-0 z-10 mt-3 w-80"
                      >
                        <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border-2 border-gray-200/50 overflow-hidden ring-4 ring-primary-100/30">
                          <div className="p-3">
                            {item.dropdown.map((dropdownItem, index) => (
                              <motion.div
                                key={dropdownItem.name}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.02 }}
                                className="group"
                              >
                                <Link 
                                  href={dropdownItem.href}
                                  className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-healthcare-50 transition-all duration-300 border-2 border-transparent hover:border-primary-200/70 hover:shadow-md"
                                >
                                  <span className="text-3xl filter drop-shadow-sm">{dropdownItem.icon}</span>
                                  <div className="flex-1">
                                    <div className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors text-base">
                                      {dropdownItem.name}
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">{dropdownItem.description}</p>
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
              className="relative group bg-gradient-to-r from-primary-600 to-healthcare-700 text-white px-8 py-4 rounded-2xl font-semibold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden min-w-[140px] text-center border border-white/20"
            >
              <span className="relative z-10 whitespace-nowrap">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-healthcare-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </Link>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <motion.button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open main menu"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </motion.button>
        </div>
      </nav>

      {/* Enhanced Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden mobile-menu"
          >
            <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white/98 backdrop-blur-2xl shadow-2xl border-l border-gray-200/50"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">MagnusOS.ai</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-healthcare-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">M</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-gray-900">MagnusOS.ai</span>
                      <span className="text-xs text-primary-600 font-medium">AI-First Platform</span>
                    </div>
                  </div>
                </Link>
                <motion.button
                  type="button"
                  className="-m-2.5 rounded-xl p-2.5 text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </motion.button>
              </div>

              {/* Mobile Navigation */}
              <div className="px-6 py-4">
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <div key={item.name} className="border-b border-gray-50 last:border-b-0">
                      {item.dropdown ? (
                        <div className="py-3">
                          <motion.button
                            onClick={() => setMobileDropdownOpen(mobileDropdownOpen === item.name ? null : item.name)}
                            className="flex items-center justify-between w-full text-left text-base font-semibold text-gray-900 hover:text-primary-600 transition-colors py-3 px-4 rounded-xl hover:bg-gray-50"
                            whileTap={{ scale: 0.98 }}
                          >
                            <span>{item.name}</span>
                            <ChevronDownIcon 
                              className={`h-5 w-5 transition-transform duration-200 ${
                                mobileDropdownOpen === item.name ? 'rotate-180' : ''
                              }`} 
                            />
                          </motion.button>
                          
                          <AnimatePresence>
                            {mobileDropdownOpen === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="ml-4 mt-2 space-y-2 pb-3">
                                  {item.dropdown.map((dropdownItem, index) => (
                                    <motion.div
                                      key={dropdownItem.name}
                                      initial={{ opacity: 0, x: 20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: index * 0.05 }}
                                    >
                                      <Link
                                        href={dropdownItem.href}
                                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-primary-50 transition-all duration-200 group"
                                        onClick={() => {
                                          setMobileMenuOpen(false)
                                          setMobileDropdownOpen(null)
                                        }}
                                      >
                                        <span className="text-2xl group-hover:scale-110 transition-transform">{dropdownItem.icon}</span>
                                        <div className="flex-1">
                                          <div className="font-medium text-gray-900 group-hover:text-primary-700 text-sm">
                                            {dropdownItem.name}
                                          </div>
                                          <p className="text-xs text-gray-600 mt-1 leading-relaxed">{dropdownItem.description}</p>
                                        </div>
                                      </Link>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block text-base font-semibold text-gray-900 hover:text-primary-600 transition-colors py-3 px-4 rounded-xl hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA Section */}
                <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
                  <Link
                    href="/demo"
                    className="block w-full text-center text-base font-semibold text-primary-600 hover:text-primary-700 transition-colors py-3 px-4 rounded-xl border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View Demo
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full text-center text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-healthcare-700 hover:from-primary-700 hover:to-healthcare-800 transition-all duration-200 py-4 px-6 rounded-xl shadow-lg hover:shadow-xl"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
