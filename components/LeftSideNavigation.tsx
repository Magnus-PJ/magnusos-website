'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HomeIcon, 
  WrenchScrewdriverIcon, 
  SparklesIcon, 
  UserGroupIcon, 
  DocumentTextIcon, 
  ChatBubbleLeftRightIcon,
  BuildingOfficeIcon,
  PhotoIcon,
  BeakerIcon,
  CogIcon,
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  {
    id: 'home',
    name: 'Home',
    href: '/',
    icon: HomeIcon,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'tools',
    name: 'Tools',
    href: '#',
    icon: WrenchScrewdriverIcon,
    color: 'from-emerald-500 to-teal-500',
    submenu: [
      { name: 'Hospital Management', href: '/solutions/his', icon: BuildingOfficeIcon, description: 'Complete hospital operations' },
      { name: 'Imaging Systems', href: '/solutions/radiology', icon: PhotoIcon, description: 'AI-powered radiology' },
      { name: 'Lab Operations', href: '/solutions/laboratory', icon: BeakerIcon, description: 'Laboratory management' },
      { name: 'Pharmacy & CRM', href: '/solutions/pharmacy-crm', icon: BeakerIcon, description: 'Pharmacy operations' },
      { name: 'Enterprise ERP', href: '/solutions/erp', icon: CogIcon, description: 'Healthcare resource planning' }
    ]
  },
  {
    id: 'specialties',
    name: 'Specialties',
    href: '#',
    icon: SparklesIcon,
    color: 'from-purple-500 to-pink-500',
    submenu: [
      { name: 'Fertility Care', href: '/solutions/fertility', icon: HeartIcon, description: 'IVF and reproductive medicine' },
      { name: 'Aesthetic Medicine', href: '/solutions/cosmetology', icon: StarIcon, description: 'Cosmetic clinics' },
      { name: 'Dental Practice', href: '/solutions/dental', icon: StarIcon, description: 'Dental clinic management' },
      { name: 'Nuclear Medicine', href: '/solutions/nuclear-medicine', icon: BeakerIcon, description: 'Nuclear imaging' }
    ]
  },
  {
    id: 'about',
    name: 'About',
    href: '/about',
    icon: UserGroupIcon,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'resources',
    name: 'Resources',
    href: '/resources',
    icon: DocumentTextIcon,
    color: 'from-indigo-500 to-blue-500'
  },
  {
    id: 'contact',
    name: 'Contact',
    href: '/contact',
    icon: ChatBubbleLeftRightIcon,
    color: 'from-green-500 to-emerald-500'
  }
]

export default function LeftSideNavigation() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed left-0 top-0 h-full z-50">
      {/* MagnusOS.ai Logo - Vertical */}
      <div className="absolute left-4 top-8 z-10">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-healthcare-500 rounded-xl flex items-center justify-center shadow-lg mb-2">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <div className="text-center">
            <div className="text-xs font-bold text-gray-700 leading-tight">MagnusOS</div>
            <div className="text-xs text-primary-600 font-medium leading-tight">.ai</div>
          </div>
        </motion.div>
      </div>

      {/* Navigation Menu */}
      <div className="relative h-full">
        <motion.div
          className={`h-full transition-all duration-300 ease-out ${
            isExpanded ? 'w-80' : 'w-20'
          }`}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-white/90 backdrop-blur-xl border-r border-gray-200/50 shadow-2xl" />
          
          {/* Navigation Items */}
          <div className="relative z-10 pt-32 px-4">
            <nav className="space-y-2">
              {navigation.map((item, index) => (
                <div key={item.id} className="relative">
                  <motion.div
                    className="group"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Main Navigation Item */}
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-4 p-3 rounded-xl transition-all duration-200 group-hover:bg-white/80 group-hover:shadow-lg ${
                        hoveredItem === item.id ? 'bg-white/90 shadow-lg scale-105' : ''
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-200 ${
                        hoveredItem === item.id ? 'scale-110' : ''
                      }`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: 'auto' }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                              {item.name}
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Link>

                    {/* Submenu Popup */}
                    {item.submenu && hoveredItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-full top-0 ml-2 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 p-4 z-20"
                      >
                        <div className="space-y-3">
                          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                            {item.name} Solutions
                          </div>
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group/sub"
                            >
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center group-hover/sub:from-primary-100 group-hover/sub:to-primary-200 transition-all duration-200">
                                <subItem.icon className="w-4 h-4 text-gray-600 group-hover/sub:text-primary-600" />
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium text-gray-900 group-hover/sub:text-primary-700">
                                  {subItem.name}
                                </div>
                                <div className="text-xs text-gray-500 group-hover/sub:text-gray-600">
                                  {subItem.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              ))}
            </nav>
          </div>

          {/* Quick Actions */}
          <div className="absolute bottom-8 left-4 right-4">
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <Link
                    href="/blog"
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                      <DocumentTextIcon className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Blog</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-primary-500 to-healthcare-600 text-white hover:shadow-lg transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <ChatBubbleLeftRightIcon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">Get Started</span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
