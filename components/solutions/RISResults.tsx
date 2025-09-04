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
    title: '35%',
    subtitle: 'Faster Report Generation',
    description: 'AI-powered auto-drafting and smart templates reduce reporting time significantly',
    color: 'success'
  },
  {
    icon: ClockIcon,
    title: '50%',
    subtitle: 'Reduced Turnaround Time',
    description: 'Intelligent triage and prioritization ensure urgent cases are handled first',
    color: 'primary'
  },
  {
    icon: UserGroupIcon,
    title: '25%',
    subtitle: 'Improved Diagnostic Accuracy',
    description: 'AI assistance helps radiologists catch subtle findings and reduce errors',
    color: 'healthcare'
  },
  {
    icon: CurrencyDollarIcon,
    title: '30%',
    subtitle: 'Cost Reduction',
    description: 'Streamlined workflows and reduced manual processes lower operational costs',
    color: 'warning'
  }
]

const testimonials = [
  {
    quote: "MagnusOS RIS has transformed our radiology department. The AI triage system ensures critical cases are prioritized, and the auto-drafting feature saves us hours every day.",
    author: "Dr. Emily Rodriguez",
    role: "Chief of Radiology",
    hospital: "Metro Imaging Center",
    avatar: "ER"
  },
  {
    quote: "The PACS integration is seamless, and the AI-powered workflow has reduced our report turnaround time by 50%. Our referring physicians love the faster results.",
    author: "Dr. James Thompson",
    role: "Radiologist",
    hospital: "City Medical Center",
    avatar: "JT"
  }
]

export default function RISResults() {
  return (
    <section className="section-padding bg-gradient-to-br from-healthcare-50/30 via-white to-primary-50/30 relative overflow-hidden">
      {/* AI Circuit Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="ris-circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,10 L20,10 M10,0 L10,20" stroke="currentColor" strokeWidth="0.5" fill="none"/>
              <circle cx="10" cy="10" r="1" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#ris-circuit)"/>
        </svg>
      </div>
      
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
                      <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Proven Results in 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-healthcare-400 to-primary-400">
                Radiology Departments
              </span>
            </motion.h2>
          <motion.p 
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Radiology departments using MagnusOS RIS have achieved measurable improvements in 
            efficiency, diagnostic accuracy, and patient care delivery.
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br from-${metric.color}-100 to-${metric.color}-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-${metric.color}-300/50 group-hover:scale-105 transition-transform duration-300`}>
                <metric.icon className={`w-10 h-10 text-${metric.color}-500`} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-3 group-hover:scale-110 transition-transform duration-300">{metric.title}</div>
              <div className="font-semibold text-gray-700 mb-3">{metric.subtitle}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{metric.description}</p>
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
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Success Stories from Radiology Leaders</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real radiologists, real results - see how MagnusOS is transforming imaging departments
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
                    <div className="text-sm text-primary-500">{testimonial.role}</div>
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
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Before vs. After MagnusOS RIS</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the dramatic transformation in radiology operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-gray-200/50 hover:border-primary-300/50 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ChartBarIcon className="w-8 h-8 text-red-500" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Before MagnusOS RIS</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <span>Manual report writing and dictation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <span>No intelligent case prioritization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <span>Fragmented PACS and RIS systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <span>Limited workflow automation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <span>High risk of missing critical findings</span>
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-gray-200/50 hover:border-primary-300/50 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ArrowTrendingUpIcon className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">After MagnusOS RIS</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <span>AI-powered auto-drafting and templates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <span>Intelligent triage and case prioritization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <span>Seamless PACS and RIS integration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <span>Automated workflow optimization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <span>AI-assisted diagnostic support</span>
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
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Calculate Your Radiology ROI</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            See how much MagnusOS RIS can save your radiology department in terms of time, efficiency, and diagnostic accuracy
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
