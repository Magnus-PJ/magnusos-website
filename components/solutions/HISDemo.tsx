'use client'

import { motion } from 'framer-motion'
import { 
  PlayIcon, 
  CalendarIcon, 
  DocumentTextIcon, 
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightIcon,
  CheckIcon
} from '@heroicons/react/24/outline'

const demoFeatures = [
  'Live system walkthrough',
  'Customized to your hospital size',
  'Q&A with our experts',
  'ROI calculation for your facility',
  'Integration assessment',
  'Implementation timeline'
]

const contactMethods = [
  {
    icon: CalendarIcon,
    title: 'Schedule a Demo',
    description: 'Book a personalized demonstration of MagnusOS HIS',
    action: 'Book Demo',
    color: 'primary'
  },
  {
    icon: PlayIcon,
    title: 'Watch Demo Video',
    description: 'See MagnusOS HIS in action with our overview video',
    action: 'Watch Video',
    color: 'healthcare'
  },
  {
    icon: DocumentTextIcon,
    title: 'Download Brochure',
    description: 'Get detailed information about our HIS solution',
    action: 'Download PDF',
    color: 'success'
  }
]

export default function HISDemo() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-healthcare-900 text-white">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="heading-2 mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Experience MagnusOS HIS in Action
          </motion.h2>
          <motion.p 
            className="body-large max-w-3xl mx-auto text-primary-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            See how MagnusOS can transform your hospital operations. Choose from multiple ways to explore 
            our platform and get personalized insights for your organization.
          </motion.p>
        </div>

        {/* Demo Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-center">
                <div className={`w-16 h-16 bg-${method.color}-100 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className={`w-8 h-8 text-${method.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                <p className="text-primary-200 mb-6">{method.description}</p>
                <button className="bg-white text-primary-900 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                  {method.action}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Banner */}
        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Interactive Demo Experience</h3>
              <p className="text-primary-100 mb-6">
                Get hands-on experience with MagnusOS HIS through our interactive demo environment. 
                Explore real workflows and see how the system adapts to your specific needs.
              </p>
              <ul className="space-y-3">
                {demoFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-primary-100">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Demo Status</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600">Available</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Duration</span>
                      <span className="font-medium">45-60 min</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Format</span>
                      <span className="font-medium">Online/On-site</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Participants</span>
                      <span className="font-medium">Up to 10</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <PlayIcon className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="heading-3 text-gray-900 mb-4">Ready to Transform Your Hospital?</h3>
            <p className="body-large text-gray-600">
              Get in touch with our team to discuss how MagnusOS HIS can benefit your organization
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">his@magnusos.ai</span>
                </div>
                <div className="pt-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Office Hours</h5>
                  <p className="text-sm text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p className="text-sm text-gray-600">Weekend: By appointment</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Hospital/Organization Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>Select Your Role</option>
                  <option>Hospital Administrator</option>
                  <option>CIO/CTO</option>
                  <option>Clinical Manager</option>
                  <option>IT Director</option>
                  <option>Other</option>
                </select>
                <textarea
                  placeholder="Tell us about your current challenges and how we can help..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                ></textarea>
                <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Join the Healthcare Revolution</h3>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Be part of the future of healthcare technology. See how MagnusOS HIS can transform 
            your hospital operations and improve patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-all duration-200">
              Start Your Transformation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-200">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
