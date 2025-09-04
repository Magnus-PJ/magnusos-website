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
    title: '20%',
    subtitle: 'Reduction in Medication Errors',
    description: 'Thanks to AI-powered decision support and integrated drug interaction checking',
    color: 'success'
  },
  {
    icon: ClockIcon,
    title: '15%',
    subtitle: 'Faster Discharge Processing',
    description: 'Streamlined workflows and automated documentation reduce discharge time',
    color: 'primary'
  },
  {
    icon: UserGroupIcon,
    title: '40%',
    subtitle: 'Improved Patient Satisfaction',
    description: 'Better coordination and reduced wait times lead to higher satisfaction scores',
    color: 'healthcare'
  },
  {
    icon: CurrencyDollarIcon,
    title: '25%',
    subtitle: 'Cost Savings',
    description: 'Reduced administrative overhead and improved operational efficiency',
    color: 'warning'
  }
]

const testimonials = [
  {
    quote: "MagnusOS helped us reduce patient wait times by 40% and streamline our entire hospital workflow. The AI-powered triage system is a game-changer for our ER.",
    author: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    hospital: "CityCare Hospital",
    avatar: "SJ"
  },
  {
    quote: "The unified platform eliminated our data silos. Now patient information flows seamlessly from admission to discharge, improving care quality significantly.",
    author: "Dr. Michael Chen",
    role: "Director of Operations",
    hospital: "Metro General Hospital",
    avatar: "MC"
  }
]

export default function HISResults() {
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
            Proven Results Across Healthcare Organizations
          </motion.h2>
          <motion.p 
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hospitals using MagnusOS HIS have reported measurable improvements in efficiency, 
            patient outcomes, and operational excellence.
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
              <div className={`w-20 h-20 bg-gradient-to-br from-${metric.color}-100 to-${metric.color}-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-${metric.color}-300/50 group-hover:scale-105 transition-transform duration-300`}>
                <metric.icon className={`w-10 h-10 text-${metric.color}-600`} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{metric.title}</div>
              <div className="font-semibold text-gray-700 mb-2">{metric.subtitle}</div>
              <p className="text-sm text-gray-600">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Success Stories */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl border-2 border-gray-200/50 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="heading-3 mb-4">Success Stories from the Field</h3>
            <p className="body-large text-gray-600">
              Real hospitals, real results - see how MagnusOS is transforming healthcare delivery
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 hover:border-primary-300/50 transition-colors duration-300">
                <blockquote className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-healthcare-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-primary-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-600">{testimonial.hospital}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Before vs After Comparison */}
        <motion.div 
          className="bg-gradient-to-r from-primary-50 to-healthcare-50 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="heading-3 mb-4">Before vs. After MagnusOS</h3>
            <p className="body-large text-gray-600">
              See the dramatic transformation in hospital operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-gray-200/50 hover:border-primary-300/50 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ChartBarIcon className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Before MagnusOS</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <span>Fragmented systems with data silos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <span>Manual data entry and redundant processes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <span>Long patient wait times and delays</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <span>High administrative overhead</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <span>Limited visibility into operations</span>
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-gray-200/50 hover:border-primary-300/50 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ArrowTrendingUpIcon className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">After MagnusOS</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <span>Unified platform with seamless integration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <span>AI-powered automation and workflows</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <span>Optimized patient flow and reduced wait times</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <span>Streamlined administrative processes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <span>Real-time analytics and insights</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ROI Calculator */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="heading-3 mb-4">Calculate Your ROI</h3>
          <p className="body-large mb-8 max-w-2xl mx-auto">
            See how much MagnusOS HIS can save your hospital in terms of time, money, and resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Try ROI Calculator</button>
            <button className="btn-outline">Download ROI Guide</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
