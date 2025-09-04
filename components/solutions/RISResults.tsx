'use client'

import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  ArrowTrendingUpIcon, 
  ClockIcon, 
  UserGroupIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CameraIcon
} from '@heroicons/react/24/outline'

const metrics = [
  {
    icon: ClockIcon,
    title: '40%',
    subtitle: 'Faster Report Turnaround',
    description: 'Reduced time from imaging to report delivery with AI assistance',
    color: 'primary'
  },
  {
    icon: ShieldCheckIcon,
    title: '25%',
    subtitle: 'Reduction in Reading Errors',
    description: 'Improved diagnostic accuracy through AI-powered assistance',
    color: 'success'
  },
  {
    icon: UserGroupIcon,
    title: '35%',
    subtitle: 'Improved Workflow Efficiency',
    description: 'Better resource utilization and optimized scheduling',
    color: 'healthcare'
  },
  {
    icon: CurrencyDollarIcon,
    title: '30%',
    subtitle: 'Cost Savings',
    description: 'Reduced operational costs and improved revenue optimization',
    color: 'warning'
  }
]

const testimonials = [
  {
    quote: "MagnusOS RIS transformed our radiology department. We now deliver reports 40% faster while maintaining the highest quality standards. The AI assistance is a game-changer.",
    author: "Dr. Emily Rodriguez",
    role: "Chief Radiologist",
    hospital: "Advanced Imaging Center",
    avatar: "ER"
  },
  {
    quote: "The seamless PACS integration and AI-powered workflow optimization have significantly improved our operational efficiency. Our radiologists can focus on what matters most - patient care.",
    author: "Dr. Michael Chen",
    role: "Director of Radiology",
    hospital: "Metro Medical Center",
    avatar: "MC"
  }
]

export default function RISResults() {
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
            Proven Results Across Radiology Departments
          </motion.h2>
          <motion.p 
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Radiology centers using MagnusOS RIS have reported measurable improvements in efficiency, 
            diagnostic accuracy, and operational excellence.
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
              <div className="text-4xl font-bold text-gray-900 mb-2">{metric.title}</div>
              <div className="font-semibold text-gray-700 mb-2">{metric.subtitle}</div>
              <p className="text-sm text-gray-600">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Success Stories */}
        <motion.div 
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-medium border border-gray-100 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="heading-3 mb-4">Success Stories from the Field</h3>
            <p className="body-large text-gray-600">
              Real radiology centers, real results - see how MagnusOS RIS is transforming imaging operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <blockquote className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-healthcare-400 to-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
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
          className="bg-gradient-to-r from-healthcare-50 to-primary-50 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="heading-3 mb-4">Before vs. After MagnusOS RIS</h3>
            <p className="body-large text-gray-600">
              See the dramatic transformation in radiology operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-white rounded-xl p-6 shadow-medium">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CameraIcon className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Before MagnusOS RIS</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <span>Manual workflow management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <span>Long report turnaround times</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <span>Fragmented imaging systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <span>Limited quality assurance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <span>Manual case prioritization</span>
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="bg-white rounded-xl p-6 shadow-medium">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ArrowTrendingUpIcon className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">After MagnusOS RIS</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <span>AI-powered workflow automation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <span>40% faster report delivery</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <span>Unified imaging platform</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <span>Automated quality assurance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <span>Intelligent case prioritization</span>
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
          <h3 className="heading-3 mb-4">Calculate Your Radiology ROI</h3>
          <p className="body-large mb-8 max-w-2xl mx-auto">
            See how much MagnusOS RIS can save your radiology department in terms of time, money, and resources
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
