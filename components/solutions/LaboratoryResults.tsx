'use client'

import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  ArrowTrendingUpIcon, 
  ClockIcon, 
  UserGroupIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

const metrics = [
  {
    icon: ArrowTrendingUpIcon,
    title: '60%',
    subtitle: 'Faster Result Turnaround',
    description: 'Thanks to AI-powered automation and streamlined workflows',
    color: 'success'
  },
  {
    icon: ClockIcon,
    title: '90%',
    subtitle: 'Faster Critical Alerts',
    description: 'AI-powered critical value detection and immediate notifications',
    color: 'primary'
  },
  {
    icon: UserGroupIcon,
    title: '40%',
    subtitle: 'Improved Technician Efficiency',
    description: 'Automated workflows and intelligent task management',
    color: 'healthcare'
  },
  {
    icon: CurrencyDollarIcon,
    title: '35%',
    subtitle: 'Cost Reduction',
    description: 'Reduced manual errors and optimized resource utilization',
    color: 'warning'
  }
]

const testimonials = [
  {
    quote: "MagnusOS Laboratory helped us reduce result turnaround time by 60% and eliminate critical value alert delays. The AI-powered validation is a game-changer for our lab.",
    author: "Dr. Lisa Chen",
    role: "Laboratory Director",
    laboratory: "CityCare Laboratory",
    avatar: "LC"
  },
  {
    quote: "The automated quality control and predictive maintenance features have transformed how we operate. Our technicians can focus on complex analytical work instead of routine tasks.",
    author: "Dr. Michael Rodriguez",
    role: "Chief Technologist",
    laboratory: "Metro Diagnostic Lab",
    avatar: "MR"
  }
]

export default function LaboratoryResults() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            className="heading-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Proven Results Across Laboratory Networks
          </motion.h2>
          <motion.p 
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Laboratories using MagnusOS have reported measurable improvements in efficiency, 
            accuracy, and operational excellence.
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`w-20 h-20 bg-${metric.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <metric.icon className={`w-10 h-10 text-${metric.color}-600`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.title}</div>
              <div className="text-lg font-semibold text-gray-700 mb-2">{metric.subtitle}</div>
              <p className="text-sm text-gray-600">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="card-hover group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="mb-6">
                <p className="body-medium text-gray-700 italic">"{testimonial.quote}"</p>
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-healthcare-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-primary-600 font-medium">{testimonial.laboratory}</div>
                </div>
              </div>
              <div className="mt-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full">Laboratory Management</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Results Summary */}
        <motion.div 
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-medium border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="heading-3 mb-4">Proven Results Across Laboratory Sectors</h3>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">Our platform has delivered measurable improvements in efficiency, accuracy, and operational excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-success-600 mb-2">60%</div>
              <div className="text-sm text-gray-600">Faster Turnaround</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">90%</div>
              <div className="text-sm text-gray-600">Faster Critical Alerts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Result Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-error-600 mb-2">35%</div>
              <div className="text-sm text-gray-600">Cost Reduction</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="heading-3 mb-4">Ready to Transform Your Laboratory?</h3>
          <p className="body-large mb-8 max-w-2xl mx-auto">Join leading laboratories that have already embraced the future with MagnusOS</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Schedule Laboratory Demo</button>
            <button className="btn-outline">Download Laboratory Brochure</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

