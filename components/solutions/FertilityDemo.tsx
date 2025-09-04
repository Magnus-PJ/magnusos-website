'use client'

import { motion } from 'framer-motion'
import { 
  PlayIcon, 
  CalendarIcon, 
  DocumentArrowDownIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  HeartIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const demoOptions = [
  {
    icon: CalendarIcon,
    title: 'Schedule Live Demo',
    description: 'Book a personalized demo with our fertility experts',
    action: 'Book Demo',
    color: 'pink'
  },
  {
    icon: PlayIcon,
    title: 'Watch Demo Video',
    description: 'See MagnusOS Fertility in action',
    action: 'Watch Video',
    color: 'purple'
  },
  {
    icon: DocumentArrowDownIcon,
    title: 'Download Brochure',
    description: 'Get detailed information about our platform',
    action: 'Download',
    color: 'blue'
  }
]

export default function FertilityDemo() {
  return (
    <section className="section-padding bg-white">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="heading-2 mb-6">Experience MagnusOS Fertility</h2>
          <p className="body-large max-w-3xl mx-auto text-gray-600">
            See how our AI-powered fertility platform can transform your clinic. 
            Choose from multiple ways to explore MagnusOS and discover the future of fertility care.
          </p>
        </motion.div>

        {/* Demo Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {demoOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-hover group text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-6 bg-${option.color}-100 text-${option.color}-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                <option.icon className="w-8 h-8" />
              </div>
              <h3 className="heading-3 mb-3">{option.title}</h3>
              <p className="body-medium mb-6 text-gray-600">{option.description}</p>
              <button className={`btn-primary bg-gradient-to-r from-${option.color}-600 to-${option.color === 'pink' ? 'purple' : option.color === 'purple' ? 'blue' : 'pink'}-600 hover:from-${option.color}-700 hover:to-${option.color === 'pink' ? 'purple' : option.color === 'purple' ? 'blue' : 'pink'}-700`}>
                {option.action}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Demo Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white mb-20"
        >
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
              <SparklesIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="heading-3 mb-4 text-white">Interactive Platform Preview</h3>
            <p className="body-large text-pink-100 max-w-2xl mx-auto">
              Experience the intuitive interface and powerful features of MagnusOS Fertility. 
              Our interactive demo lets you explore the platform hands-on.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">AI Embryo Grading</div>
              <p className="text-pink-100 text-sm">See real-time embryo analysis in action</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Patient Management</div>
              <p className="text-pink-100 text-sm">Explore comprehensive patient workflows</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Analytics Dashboard</div>
              <p className="text-pink-100 text-sm">View clinic performance insights</p>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-50 transition-colors duration-200 flex items-center space-x-3 mx-auto">
              <PlayIcon className="w-6 h-6" />
              <span>Start Interactive Demo</span>
            </button>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="heading-3 mb-6">Get in Touch</h3>
              <p className="body-large mb-8 text-gray-600">
                Ready to transform your fertility clinic? Our experts are here to help you 
                understand how MagnusOS can improve your success rates and operational efficiency.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Call Us</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <EnvelopeIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email Us</div>
                    <div className="text-gray-600">fertility@magnusos.ai</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Visit Us</div>
                    <div className="text-gray-600">Kerala, India | Dubai, UAE</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Clinic Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Tell us about your fertility clinic and how we can help..."></textarea>
                </div>
                
                <button type="submit" className="w-full btn-primary bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
            <HeartIcon className="w-10 h-10 text-white" />
          </div>
          <h3 className="heading-3 mb-4">Ready to Transform Your Fertility Clinic?</h3>
          <p className="body-large mb-8 max-w-2xl mx-auto text-gray-600">
            Join leading fertility clinics worldwide that have already embraced the future with MagnusOS. 
            Experience the power of AI-first, unified fertility management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
              Start Your Transformation
            </button>
            <button className="btn-outline border-pink-600 text-pink-600 hover:bg-pink-50">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
